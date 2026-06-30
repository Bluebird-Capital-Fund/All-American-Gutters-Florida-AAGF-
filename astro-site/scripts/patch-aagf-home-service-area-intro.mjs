#!/usr/bin/env node
/**
 * Patch only homePageSingleton.serviceArea.intro (safe — does not touch location pages).
 *
 * Run: cd astro-site && node scripts/patch-aagf-home-service-area-intro.mjs
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

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

loadPatchDotEnv(root)

const { projectId, dataset, token } = getSanityPatchCredentials()

const INTRO =
  'We operate from Deerfield Beach, serving homes throughout Broward and Palm Beach counties, including <a href="/locations/gutters-fort-lauderdale-fl/">seamless gutters in Fort Lauderdale</a>, Boca Raton, and Pompano Beach. We handle installation, repair, gutter guards, and downspouts. Call us for a free estimate anywhere in our South Florida service area.'

async function main() {
  exitOrSkipIfNoSanityWriteCreds(projectId, token, 'patch-aagf-home-service-area-intro')

  const client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    token,
    useCdn: false,
  })

  await client.patch('homePageSingleton').set({ 'serviceArea.intro': INTRO }).commit()

  console.log('Patched homePageSingleton → serviceArea.intro')

  if (await tryPublishDraft(client, 'homePageSingleton')) {
    console.log('Published homePageSingleton (draft → live).')
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
