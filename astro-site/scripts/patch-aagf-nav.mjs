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

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

loadPatchDotEnv(root)

const { projectId, dataset, token } = getSanityPatchCredentials()

/** Secondary siteSettings doc merged for nav/footer links (see site-settings.js). */
const SITE_SETTINGS_NAV_DOC_ID = 'fd857e3a-c4d4-4103-9066-9a9afbfcff18'

function navLink(label, href, key) {
  return {
    _type: 'navLinkItem',
    _key: key,
    label,
    href,
  }
}

/** Match footer + homepage service cards. */
const SERVICE_DROPDOWN = [
  navLink('Gutter Services', '/gutters-south-florida/', 'aagf-nav-gutter-services'),
  navLink('Gutter Repair', '/gutter-repair-south-florida/', 'aagf-nav-gutter-repair'),
  navLink('Gutter Replacement', '/gutters-south-florida-replacement/', 'aagf-nav-gutter-replacement'),
  navLink('Gutter Cleaning', '/gutters-south-florida-cleaning/', 'aagf-nav-gutter-cleaning'),
  navLink('Gutter Guards', '/gutters-south-florida-guards/', 'aagf-nav-gutter-guards'),
  navLink('Soffit & Fascia', '/gutters-south-florida/', 'aagf-nav-soffit-fascia'),
]

const NAV_ITEMS = [
  {
    _type: 'navItem',
    _key: 'aagf-nav-services',
    label: 'Services',
    href: '/gutters-south-florida/',
    dropdown: SERVICE_DROPDOWN,
  },
  {
    _type: 'navItem',
    _key: 'aagf-nav-projects',
    label: 'Projects',
    href: '/projects/',
  },
  {
    _type: 'navItem',
    _key: 'aagf-nav-reviews',
    label: 'Reviews',
    href: '/reviews/',
  },
  {
    _type: 'navItem',
    _key: 'aagf-nav-about',
    label: 'About Us',
    href: '/about-us/',
    dropdown: [
      navLink('Our Process', '/#process', 'aagf-nav-process'),
      navLink('Why Choose Us', '/#why-us', 'aagf-nav-why-us'),
      navLink('Service Area', '/service-area/', 'aagf-nav-service-area'),
      navLink('FAQ', '/faqs/', 'aagf-nav-faq'),
      navLink('Free Estimate', '/#contact', 'aagf-nav-estimate'),
      navLink('About Us', '/about-us/', 'aagf-nav-about-page'),
      navLink('Contact Us', '/contact-us/', 'aagf-nav-contact'),
    ],
  },
]

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
