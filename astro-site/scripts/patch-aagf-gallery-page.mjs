#!/usr/bin/env node
/**
 * Appends repo gallery images to the Sanity `galleryPage` document (slug: gallery).
 *
 * Run: cd astro-site && node scripts/patch-aagf-gallery-page.mjs
 */

import { createClient } from '@sanity/client'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { AAGF_GALLERY_EXTRA_SLIDES } from '../src/lib/aagf-gallery-images.js'
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

function slideBasename(src) {
  return String(src || '')
    .split('/')
    .pop()
    .replace(/\.[a-z0-9]+$/i, '')
}

function slideKey(imageSrc) {
  return `aagf-gallery-${slideBasename(imageSrc)}`
}

function toSanitySlide(slide) {
  return {
    _type: 'projectSlide',
    _key: slideKey(slide.imageSrc),
    imageSrc: slide.imageSrc,
    imageAlt: slide.imageAlt,
    location: slide.location,
  }
}

async function main() {
  exitOrSkipIfNoSanityWriteCreds(projectId, token, 'patch-aagf-gallery-page')

  const client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    token,
    useCdn: false,
  })

  const page = await client.fetch(
    `*[_type == "galleryPage" && slug.current in ["gallery", "projects"]][0]{ _id, images }`,
  )

  if (!page?._id) {
    console.error('No galleryPage found with slug gallery or projects. Create one in Sanity first.')
    process.exit(1)
  }

  const existing = Array.isArray(page.images) ? page.images : []
  const existingBasenames = new Set(
    existing.map((img) => slideBasename(img?.imageSrc)).filter(Boolean),
  )
  const toAdd = AAGF_GALLERY_EXTRA_SLIDES.filter(
    (slide) => !existingBasenames.has(slideBasename(slide.imageSrc)),
  ).map(toSanitySlide)

  if (toAdd.length === 0) {
    console.log(`galleryPage ${page._id} already includes all ${AAGF_GALLERY_EXTRA_SLIDES.length} repo images.`)
    return
  }

  await client
    .patch(page._id)
    .set({ images: [...existing, ...toAdd] })
    .commit()

  console.log(`Patched galleryPage ${page._id} → added ${toAdd.length} image(s).`)

  if (await tryPublishDraft(client, page._id)) {
    console.log(`Published ${page._id}.`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
