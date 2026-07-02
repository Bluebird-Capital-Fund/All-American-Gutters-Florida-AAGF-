#!/usr/bin/env node
/**
 * Deletes all Sanity `blogPost` documents (published + drafts).
 * Keeps the static `/blog/` index page in the Astro site.
 *
 * Run: cd astro-site && node scripts/delete-aagf-blog-posts.mjs
 */

import { createClient } from '@sanity/client'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  exitOrSkipIfNoSanityWriteCreds,
  getSanityPatchCredentials,
  loadPatchDotEnv,
} from './patch-env.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

loadPatchDotEnv(root)

const { projectId, dataset, token } = getSanityPatchCredentials()

async function deleteDoc(client, id) {
  await client.delete(id)
}

async function main() {
  exitOrSkipIfNoSanityWriteCreds(projectId, token, 'delete-aagf-blog-posts')

  const client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    token,
    useCdn: false,
  })

  const posts = await client.fetch(`*[_type == "blogPost"]{ _id, "slug": slug.current }`)

  if (!Array.isArray(posts) || posts.length === 0) {
    console.log('No blogPost documents found.')
    return
  }

  let removed = 0
  for (const post of posts) {
    const id = String(post?._id || '').trim()
    if (!id) continue
    await deleteDoc(client, id)
    const draftId = `drafts.${id}`
    try {
      await deleteDoc(client, draftId)
    } catch {
      /* no draft */
    }
    removed += 1
    console.log(`Deleted blogPost ${id} (${post?.slug || 'no slug'}).`)
  }

  console.log(`Removed ${removed} blogPost document(s). /blog/ index page is unchanged.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
