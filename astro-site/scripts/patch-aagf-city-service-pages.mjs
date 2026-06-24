#!/usr/bin/env node
/**
 * Maintains `cityServicePage` documents: removes retired pages, renames slugs to the
 * `gutters-south-florida` family, and replaces Tampa-area copy.
 *
 * Run: cd astro-site && node scripts/patch-aagf-city-service-pages.mjs
 * (Also runs as part of `npm run content:aagf`.)
 */

import { createClient } from '@sanity/client'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  SOUTH_FLORIDA_GUTTER_SLUG_RENAMES,
  isRemovedServiceSlug,
  renameSouthFloridaGutterSlug,
} from '../src/lib/service-routes.js'
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

const TAMPA_SLUG_SEGMENT_RE = /-tampa-fl/i

/** Prefer the main installation doc when consolidating to `gutter-installation-south-florida`. */
function renamePriority(slug) {
  if (slug === 'gutters-south-florida' || slug === 'gutter-installation-south-florida') return 0
  if (slug === 'gutters-south-florida-cleaning' || slug === 'gutter-cleaning-south-florida') return 0
  if (slug === 'gutters-south-florida-replacement' || slug === 'gutter-replacement-south-florida') return 0
  if (slug === 'gutters-south-florida-maintenance' || slug === 'gutter-maintenance-south-florida') return 0
  if (slug === 'gutters-south-florida-guards' || slug === 'gutter-guards-south-florida') return 0
  if (slug === 'gutters-south-florida-downspout' || slug === 'gutter-downspout-south-florida') return 0
  if (slug === 'aluminum-gutters-fl' || slug === 'aluminum-gutters-south-florida') return 0
  if (slug === 'copper-gutters-fl' || slug === 'copper-gutters-south-florida') return 0
  if (slug === 'seamless-gutters-south-florida' || slug === 'seamless-gutters-tampa-fl') return 10
  if (slug === 'gutter-installation-tampa-fl') return 10
  return 5
}

/** @param {string} text */
function replaceTampaCopy(text) {
  if (typeof text !== 'string' || !text) return text
  return text
    .replace(/-tampa-fl/gi, '-south-florida')
    .replace(/Tampa-area/gi, 'South Florida')
    .replace(/Tampa metro area/gi, 'South Florida')
    .replace(/Tampa metro/gi, 'South Florida')
    .replace(/Greater Tampa area/gi, 'South Florida')
    .replace(/Greater Tampa/gi, 'South Florida')
    .replace(/\bin Tampa\b/gi, 'in South Florida')
    .replace(/\bTampa\b/g, 'South Florida')
}

/** @param {string} text */
function replaceServiceHrefSlugs(text) {
  if (typeof text !== 'string' || !text) return text
  let out = replaceTampaCopy(text)
  for (const [oldSlug, newSlug] of Object.entries(SOUTH_FLORIDA_GUTTER_SLUG_RENAMES)) {
    out = out.replaceAll(`/${oldSlug}/`, `/${newSlug}/`)
  }
  return out
}

/** Deep-walk Sanity values; skip `_type`, `_key`, `_ref`, asset refs. */
function deepReplaceFields(value) {
  if (typeof value === 'string') return replaceServiceHrefSlugs(value)
  if (Array.isArray(value)) return value.map(deepReplaceFields)
  if (value && typeof value === 'object') {
    /** @type {Record<string, unknown>} */
    const out = {}
    for (const [k, v] of Object.entries(value)) {
      if (k === '_ref' || k === '_weak' || k === 'asset') {
        out[k] = v
        continue
      }
      out[k] = deepReplaceFields(v)
    }
    return out
  }
  return value
}

function targetSlugFor(oldSlug) {
  const afterTampa = oldSlug.replace(/-tampa-fl/gi, '-south-florida')
  return renameSouthFloridaGutterSlug(afterTampa)
}

async function main() {
  exitOrSkipIfNoSanityWriteCreds(projectId, token, 'patch-aagf-city-service-pages')

  const client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    token,
    useCdn: false,
  })

  const pages = await client.fetch(
    `*[_type == "cityServicePage"]{ _id, slug, title, eyebrow, headline, lead, meta, layoutBackgrounds, contentSections, reviews, faq, mapEmbedUrl }`,
  )

  if (!Array.isArray(pages) || pages.length === 0) {
    console.log('No cityServicePage documents found.')
    return
  }

  let removed = 0
  for (const page of pages) {
    const slug = String(page?.slug?.current || '').trim()
    if (!isRemovedServiceSlug(slug)) continue
    await client.delete(page._id)
    const draftId = `drafts.${page._id}`
    try {
      await client.delete(draftId)
    } catch {
      /* no draft */
    }
    removed += 1
    console.log(`Deleted cityServicePage ${page._id} (${slug}).`)
  }

  const active = pages.filter((p) => !isRemovedServiceSlug(String(p?.slug?.current || '').trim()))
  const sorted = [...active].sort((a, b) => {
    const sa = String(a?.slug?.current || '').trim()
    const sb = String(b?.slug?.current || '').trim()
    return renamePriority(sa) - renamePriority(sb)
  })

  /** @type {Map<string, string>} */
  const slugOwnerId = new Map()

  let patched = 0
  for (const page of sorted) {
    const oldSlug = String(page?.slug?.current || '').trim()
    const newSlug = targetSlugFor(oldSlug)
    const needsSlug = Boolean(oldSlug && newSlug && newSlug !== oldSlug)

    if (needsSlug && slugOwnerId.has(newSlug) && slugOwnerId.get(newSlug) !== page._id) {
      await client.delete(page._id)
      try {
        await client.delete(`drafts.${page._id}`)
      } catch {
        /* no draft */
      }
      removed += 1
      console.log(`Deleted duplicate cityServicePage ${page._id} (${oldSlug} → ${newSlug} already owned).`)
      continue
    }

    const next = deepReplaceFields({
      title: page.title,
      eyebrow: page.eyebrow,
      headline: page.headline,
      lead: page.lead,
      meta: page.meta,
      layoutBackgrounds: page.layoutBackgrounds,
      contentSections: page.contentSections,
      reviews: page.reviews,
      faq: page.faq,
      mapEmbedUrl: page.mapEmbedUrl,
    })

    const set = { ...next }
    if (needsSlug) {
      set.slug = { _type: 'slug', current: newSlug }
      slugOwnerId.set(newSlug, page._id)
    } else if (oldSlug) {
      slugOwnerId.set(oldSlug, page._id)
    }

    const changed =
      needsSlug ||
      JSON.stringify(next) !==
        JSON.stringify({
          title: page.title,
          eyebrow: page.eyebrow,
          headline: page.headline,
          lead: page.lead,
          meta: page.meta,
          layoutBackgrounds: page.layoutBackgrounds,
          contentSections: page.contentSections,
          reviews: page.reviews,
          faq: page.faq,
          mapEmbedUrl: page.mapEmbedUrl,
        })

    if (!changed) continue

    await client.patch(page._id).set(set).commit()
    patched += 1
    console.log(
      `Patched cityServicePage ${page._id}${needsSlug ? ` (${oldSlug} → ${newSlug})` : ''}.`,
    )
    if (await tryPublishDraft(client, page._id)) {
      console.log(`Published ${page._id}.`)
    }
  }

  console.log(`Done. Removed ${removed}, updated ${patched} cityServicePage document(s).`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
