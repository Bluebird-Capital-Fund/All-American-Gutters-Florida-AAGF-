#!/usr/bin/env node
/**
 * Header nav for All American Gutters — services dropdown + company links.
 * Patches both siteSettings docs that merge into the live nav.
 *
 * Run: cd astro-site && node scripts/patch-aagf-nav.mjs
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
import { buildAagfHeaderNavItems } from '../src/lib/aagf-header-nav.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

loadPatchDotEnv(root)

const { projectId, dataset, token } = getSanityPatchCredentials()

/** Secondary siteSettings doc merged for nav/footer links (see site-settings.js). */
const SITE_SETTINGS_NAV_DOC_ID = 'fd857e3a-c4d4-4103-9066-9a9afbfcff18'

const NAV_ITEMS = buildAagfHeaderNavItems()

async function patchNav(client, documentId) {
  await client
    .patch(documentId)
    .set({
      'header.navItems': NAV_ITEMS,
      'header.callCtaTemplate': 'Call: {{phoneDisplay}}',
      'header.logoAriaLabelTemplate': '{{companyName}} home',
    })
    .commit()

  console.log(`Patched ${documentId} → header.navItems.`)

  if (await tryPublishDraft(client, documentId)) {
    console.log(`Published ${documentId} (draft → live).`)
  }
}

async function main() {
  exitOrSkipIfNoSanityWriteCreds(projectId, token, 'patch-aagf-nav')

  const client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    token,
    useCdn: false,
  })

  await patchNav(client, 'siteSettingsSingleton')
  await patchNav(client, SITE_SETTINGS_NAV_DOC_ID)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
