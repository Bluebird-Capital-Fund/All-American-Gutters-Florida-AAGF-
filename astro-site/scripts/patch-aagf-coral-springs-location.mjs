#!/usr/bin/env node
/**
 * Coral Springs location page — full copy, FAQs, city map, and service-page layout.
 *
 * Run: cd astro-site && node scripts/patch-aagf-coral-springs-location.mjs
 */

import { createClient } from '@sanity/client'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  exitOrSkipIfNoSanityWriteCreds,
  getSanityPatchCredentials,
  loadPatchDotEnv,
  tryPublishDraft,
} from './patch-env.mjs'
import {
  GUTTERS_CORAL_SPRINGS_FL_SLUG,
  guttersCoralSpringsFlPage,
} from '../src/lib/aagf-location-page-data/gutters-coral-springs-fl.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

loadPatchDotEnv(root)

const { projectId, dataset, token } = getSanityPatchCredentials()
const documentId = `aagf-loc-${GUTTERS_CORAL_SPRINGS_FL_SLUG}`

async function main() {
  exitOrSkipIfNoSanityWriteCreds(projectId, token, 'patch-aagf-coral-springs-location')

  const client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    token,
    useCdn: false,
  })

  await client.createOrReplace({
    _id: documentId,
    _type: 'locationPage',
    ...guttersCoralSpringsFlPage,
  })

  console.log(`Upserted locationPage ${documentId} → ${GUTTERS_CORAL_SPRINGS_FL_SLUG}`)

  if (await tryPublishDraft(client, documentId)) {
    console.log(`Published ${documentId} (draft → live).`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
