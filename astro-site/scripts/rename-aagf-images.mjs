#!/usr/bin/env node
/**
 * Renames `Media (AAGF)/Images (AAGF)/` files from legacy SunLife/Tampa names to
 * All American Gutters + South Florida service/location slugs.
 *
 * Run from astro-site: node scripts/rename-aagf-images.mjs
 * Then: npm run sync:media
 * Optional Sanity path update: node scripts/patch-aagf-image-paths.mjs
 */

import { createClient } from '@sanity/client'
import { existsSync, readdirSync, renameSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  exitOrSkipIfNoSanityWriteCreds,
  getSanityPatchCredentials,
  loadPatchDotEnv,
} from './patch-env.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const astroRoot = resolve(__dirname, '..')
const repoRoot = resolve(astroRoot, '..')
const imagesDir = resolve(repoRoot, 'Media (AAGF)/Images (AAGF)')

/** Primary market first, then Broward / Palm Beach service cities. */
const LOCATION_POOL = [
  'deerfield-beach-fl',
  'deerfield-beach-fl',
  'deerfield-beach-fl',
  'deerfield-beach-fl',
  'deerfield-beach-fl',
  'deerfield-beach-fl',
  'deerfield-beach-fl',
  'deerfield-beach-fl',
  'deerfield-beach-fl',
  'deerfield-beach-fl',
  'boca-raton-fl',
  'boca-raton-fl',
  'boca-raton-fl',
  'boca-raton-fl',
  'boca-raton-fl',
  'pompano-beach-fl',
  'pompano-beach-fl',
  'pompano-beach-fl',
  'fort-lauderdale-fl',
  'fort-lauderdale-fl',
  'fort-lauderdale-fl',
  'delray-beach-fl',
  'delray-beach-fl',
  'coral-springs-fl',
  'coral-springs-fl',
  'hollywood-fl',
  'hollywood-fl',
  'west-palm-beach-fl',
  'west-palm-beach-fl',
  'boynton-beach-fl',
  'palm-beach-gardens-fl',
  'lighthouse-point-fl',
  'highland-beach-fl',
  'oakland-park-fl',
  'plantation-fl',
  'sunrise-fl',
  'deerfield-beach-fl',
  'boca-raton-fl',
  'pompano-beach-fl',
  'fort-lauderdale-fl',
  'delray-beach-fl',
  'coral-springs-fl',
  'hollywood-fl',
  'west-palm-beach-fl',
  'boynton-beach-fl',
  'palm-beach-gardens-fl',
  'lighthouse-point-fl',
  'highland-beach-fl',
  'oakland-park-fl',
  'plantation-fl',
  'sunrise-fl',
]

const OLD_LOCATION_RE =
  /^(apollo-beach|brandon|clearwater|lakeland|lutz|plant-city|riverview|st-petersburg|tampa|valrico|wesley-chapel)(-fl)?-?/i

function pickService(filename, index) {
  const n = filename.toLowerCase()
  if (n.includes('screen') || n.includes('enclosure') || n.includes('screened-patio')) {
    return 'gutter-guards'
  }
  if (n.includes('roof-gutter-system') || n.includes('aluminum-gutter-system') || n.includes('gutter-system-home')) {
    return 'gutter-replacement'
  }
  if (n.includes('corner-drainage') || n.includes('rock-bed')) return 'gutter-cleaning'
  if (index % 13 === 4) return 'gutter-repair'
  if (index % 13 === 8) return 'gutter-replacement'
  if (index % 13 === 11) return 'gutter-cleaning'
  return 'gutter-installation'
}

function descriptorFromOldName(filename) {
  let base = filename.replace(/\.webp$/i, '')
  base = base.replace(/^sunlife-gutters-/i, '')
  base = base.replace(OLD_LOCATION_RE, '')
  base = base.replace(/^clearwater-/, '')
  base = base.replace(/\s+/g, '-').replace(/--+/g, '-').replace(/^-+|-+$/g, '')
  if (!base) base = 'residential-gutter-project'
  return base
}

function buildNewName(oldName, index, used) {
  const service = pickService(oldName, index)
  const location = LOCATION_POOL[index % LOCATION_POOL.length]
  let descriptor = descriptorFromOldName(oldName)
  let candidate = `all-american-gutters-${service}-${location}-${descriptor}.webp`
  let n = 2
  while (used.has(candidate)) {
    candidate = `all-american-gutters-${service}-${location}-${descriptor}-${n}.webp`
    n += 1
  }
  used.add(candidate)
  return candidate
}

function renameFilesOnDisk() {
  if (!existsSync(imagesDir)) {
    throw new Error(`Images directory not found: ${imagesDir}`)
  }
  const files = readdirSync(imagesDir)
    .filter((f) => f.toLowerCase().endsWith('.webp'))
    .sort()
  const used = new Set()
  /** @type {Record<string, string>} */
  const map = {}

  for (let i = 0; i < files.length; i += 1) {
    const oldName = files[i]
    if (oldName.startsWith('all-american-gutters-')) continue
    const newName = buildNewName(oldName, i, used)
    if (newName === oldName) continue
    renameSync(resolve(imagesDir, oldName), resolve(imagesDir, newName))
    map[oldName] = newName
    console.log(`${oldName} → ${newName}`)
  }

  const mapPath = resolve(astroRoot, 'scripts', 'aagf-image-rename-map.json')
  writeFileSync(mapPath, `${JSON.stringify(map, null, 2)}\n`)
  console.log(`Wrote ${Object.keys(map).length} renames to ${mapPath}`)
  return map
}

function replacePathsInValue(value, map) {
  if (typeof value === 'string') {
    let out = value
    for (const [oldName, newName] of Object.entries(map)) {
      out = out.replaceAll(oldName, newName)
    }
    return out
  }
  if (Array.isArray(value)) return value.map((v) => replacePathsInValue(v, map))
  if (value && typeof value === 'object') {
    /** @type {Record<string, unknown>} */
    const out = {}
    for (const [k, v] of Object.entries(value)) {
      out[k] = replacePathsInValue(v, map)
    }
    return out
  }
  return value
}

async function patchSanityPaths(map) {
  loadPatchDotEnv(astroRoot)
  const { projectId, dataset, token } = getSanityPatchCredentials()
  exitOrSkipIfNoSanityWriteCreds(projectId, token, 'rename-aagf-images')

  const client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    token,
    useCdn: false,
  })

  const docs = await client.fetch(`*[_type in [
    "homePage", "galleryPage", "cityServicePage", "locationPage", "siteSettings", "blogPost"
  ]]{ _id, _type, ... }`)

  let patched = 0
  for (const doc of docs) {
    const raw = JSON.stringify(doc)
    let replaced = raw
    for (const [oldName, newName] of Object.entries(map)) {
      replaced = replaced.replaceAll(oldName, newName)
    }
    if (replaced === raw) continue
    const newDoc = JSON.parse(replaced)
    const {
      _id: _omitId,
      _rev: _omitRev,
      _type: _omitType,
      _createdAt: _omitCreated,
      _updatedAt: _omitUpdated,
      ...set
    } = newDoc
    await client.patch(doc._id).set(set).commit()
    patched += 1
    console.log(`Patched Sanity ${doc._type} ${doc._id}`)
  }
  console.log(`Sanity: updated ${patched} document(s) with new image paths.`)
}

async function main() {
  const map = renameFilesOnDisk()
  if (Object.keys(map).length === 0) {
    console.log('No legacy filenames to rename.')
    return
  }
  try {
    await patchSanityPaths(map)
  } catch (err) {
    console.warn('Sanity path patch skipped:', err?.message || err)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
