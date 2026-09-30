#!/usr/bin/env node
/**
 * Footer columns, support links, and brand social for `siteSettingsSingleton`.
 *
 * Run: cd astro-site && node scripts/patch-aagf-footer.mjs
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
import { buildAagfFooterColumns } from '../src/lib/aagf-header-nav.js'
import { AAGF_FOOTER_SOCIAL_LINKS, AAGF_SOCIAL_ARIA_LABEL } from '../src/lib/aagf-social-links.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

loadPatchDotEnv(root)

const { projectId, dataset, token } = getSanityPatchCredentials()
const documentId = 'siteSettingsSingleton'

const FOOTER_COLUMNS = buildAagfFooterColumns()

const FOOTER_SUPPORT = {
  ariaLabel: 'Footer support links',
  copyrightTemplate: '© {{year}} — {{companyName}}',
  links: [
    {
      _type: 'footerSupportLink',
      _key: 'aagf-ft-privacy',
      label: 'Privacy Policy',
      href: '/privacy-policy/',
    },
    {
      _type: 'footerSupportLink',
      _key: 'aagf-ft-terms',
      label: 'Terms of Use',
      href: '/terms-of-service/',
    },
    {
      _type: 'footerSupportLink',
      _key: 'aagf-ft-brightbeam',
      label: 'Brightbeam SEO',
      href: 'https://brightbeamseo.com/',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  ],
}

const FOOTER_BRAND = {
  tagline:
    'Seamless gutters, honest estimates, and crews that respect your yard—serving homeowners across South Florida from our Deerfield Beach base.',
  socialAriaLabel: AAGF_SOCIAL_ARIA_LABEL,
  socialLinks: AAGF_FOOTER_SOCIAL_LINKS,
}

async function main() {
  exitOrSkipIfNoSanityWriteCreds(projectId, token, 'patch-aagf-footer')

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
      footerColumns: FOOTER_COLUMNS,
      footerSupport: FOOTER_SUPPORT,
      footerBrand: FOOTER_BRAND,
    })
    .commit()

  console.log(`Patched ${documentId} → footer columns, support links, and social links.`)

  if (await tryPublishDraft(client, documentId)) {
    console.log(`Published ${documentId} (draft → live).`)
  } else {
    console.log(`No draft for ${documentId}; public API may already match.`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
