#!/usr/bin/env node
/**
 * Footer social links only (`footerBrand.socialLinks` + listing URLs) on `siteSettingsSingleton`.
 *
 * Run: cd astro-site && npm run content:aagf:social
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
  AAGF_FACEBOOK_URL,
  AAGF_FOOTER_SOCIAL_LINKS,
  AAGF_INSTAGRAM_URL,
  AAGF_SOCIAL_ARIA_LABEL,
} from '../src/lib/aagf-social-links.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

loadPatchDotEnv(root)

const { projectId, dataset, token } = getSanityPatchCredentials()
const documentId = 'siteSettingsSingleton'

async function main() {
  exitOrSkipIfNoSanityWriteCreds(projectId, token, 'patch-aagf-social')

  const client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    token,
    useCdn: false,
  })

  await client
    .patch(documentId)
    .set({
      'footerBrand.socialAriaLabel': AAGF_SOCIAL_ARIA_LABEL,
      'footerBrand.socialLinks': AAGF_FOOTER_SOCIAL_LINKS,
      'businessListings.facebook': AAGF_FACEBOOK_URL,
      'businessListings.instagram': AAGF_INSTAGRAM_URL,
    })
    .commit()

  console.log(`Patched ${documentId} → footer social links (${AAGF_FOOTER_SOCIAL_LINKS.length}).`)

  if (await tryPublishDraft(client, documentId)) {
    console.log(`Published ${documentId} (draft → live).`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
