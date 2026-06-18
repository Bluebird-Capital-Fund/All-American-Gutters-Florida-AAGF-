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

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

loadPatchDotEnv(root)

const { projectId, dataset, token } = getSanityPatchCredentials()
const documentId = 'siteSettingsSingleton'

const GBP_MAPS_APP_URL = 'https://maps.app.goo.gl/L9nqkdMmya6SJDU99'

function footerLink(label, href, key) {
  return {
    _type: 'footerColumnLink',
    _key: key,
    label,
    href,
  }
}

/** Match homepage service cards (`patch-aagf-home-services.mjs`). */
const FOOTER_COLUMNS = [
  {
    _type: 'footerColumn',
    _key: 'aagf-footer-services',
    heading: 'Services',
    ariaLabel: 'Footer services',
    links: [
      footerLink('Gutter Installation', '/gutter-installation-south-florida/', 'aagf-ft-gutter-installation'),
      footerLink('Aluminum Gutters', '/aluminum-gutters-fl/', 'aagf-ft-aluminum-gutters'),
      footerLink('Gutter Repair', '/gutter-repair-south-florida/', 'aagf-ft-gutter-repair'),
      footerLink('Gutter Replacement', '/gutter-replacement-south-florida/', 'aagf-ft-gutter-replacement'),
      footerLink('Gutter Cleaning', '/gutter-cleaning-south-florida/', 'aagf-ft-gutter-cleaning'),
      footerLink('Gutter Maintenance', '/gutter-maintenance-south-florida/', 'aagf-ft-gutter-maintenance'),
      footerLink('Gutter Guards', '/gutter-guards-south-florida/', 'aagf-ft-gutter-guards'),
      footerLink('Gutter Downspout', '/gutter-downspout-south-florida/', 'aagf-ft-gutter-downspout'),
      footerLink('Roof Soffit', '/roof-soffit-south-florida/', 'aagf-ft-roof-soffit'),
      footerLink('Roof Fascia', '/roof-fascia-south-florida/', 'aagf-ft-roof-fascia'),
    ],
  },
  {
    _type: 'footerColumn',
    _key: 'aagf-footer-company',
    heading: 'Company',
    ariaLabel: 'Footer company links',
    links: [
      footerLink('About Us', '/about-us/', 'aagf-ft-about'),
      footerLink('Projects', '/projects/', 'aagf-ft-projects'),
      footerLink('Reviews', '/reviews/', 'aagf-ft-reviews'),
      footerLink('Service Area', '/service-area/', 'aagf-ft-service-area'),
      footerLink('FAQ', '/faqs/', 'aagf-ft-faq'),
      footerLink('Contact Us', '/contact-us/', 'aagf-ft-contact'),
      footerLink('Blog', '/blog/', 'aagf-ft-blog'),
    ],
  },
  {
    _type: 'footerColumn',
    _key: 'aagf-footer-contact',
    heading: 'Contact Info',
    hoursHeading: 'Hours',
    hoursText: 'Open 24/7',
  },
]

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
  socialAriaLabel: 'All American Gutters on Google',
  socialLinks: [
    {
      _type: 'socialLink',
      _key: 'aagf-social-google-maps',
      platform: 'Google Business Profile',
      href: GBP_MAPS_APP_URL,
      ariaLabel: 'All American Gutters on Google Maps',
    },
  ],
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

  console.log(`Patched ${documentId} → footer columns, support links, and Google social.`)

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
