#!/usr/bin/env node
/**
 * Copper Gutters South Florida service page — slug, SEO meta, and full page copy.
 *
 * Run: cd astro-site && node scripts/patch-aagf-copper-gutters-page.mjs
 */

import { createClient } from '@sanity/client'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  COPPER_GUTTERS_FL_SLUG,
  copperGuttersFlPage,
} from '../src/lib/aagf-service-page-fallbacks/copper-gutters-fl.js'
import {
  exitOrSkipIfNoSanityWriteCreds,
  getSanityPatchCredentials,
  loadPatchDotEnv,
  tryPublishDraft,
} from './patch-env.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

loadPatchDotEnv(root)

const { projectId, dataset, token } = getSanityPatchCredentials()

const NEW_SLUG = COPPER_GUTTERS_FL_SLUG
const DOC_ID = 'cityServicePage.copper-gutters-fl'
const LEGACY_SLUGS = [
  'copper-gutters-fl',
  'copper-gutters-south-florida',
  'copper-gutters-tampa-fl',
]

async function main() {
  exitOrSkipIfNoSanityWriteCreds(projectId, token, 'patch-aagf-copper-gutters-page')

  const client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    token,
    useCdn: false,
  })

  let page = await client.fetch(
    `*[_type == "cityServicePage" && (slug.current in $slugs || _id == $docId)][0]{ _id, slug }`,
    { slugs: LEGACY_SLUGS, docId: DOC_ID },
  )

  if (!page?._id) {
    await client.create({
      _id: DOC_ID,
      _type: 'cityServicePage',
      ...copperGuttersFlPage,
    })
    page = { _id: DOC_ID, slug: { current: NEW_SLUG } }
    console.log(`Created cityServicePage ${DOC_ID}.`)
  } else {
    const oldSlug = String(page.slug?.current || '').trim()
    await client.patch(page._id).set(copperGuttersFlPage).commit()
    console.log(
      `Patched cityServicePage ${page._id}${oldSlug !== NEW_SLUG ? ` (${oldSlug} → ${NEW_SLUG})` : ''}.`,
    )
  }

  if (await tryPublishDraft(client, page._id)) {
    console.log(`Published ${page._id}.`)
  }

  console.log(`Done. Copper gutters page is live at /${NEW_SLUG}/`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
