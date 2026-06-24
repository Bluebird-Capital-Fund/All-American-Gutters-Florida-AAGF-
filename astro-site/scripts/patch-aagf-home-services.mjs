#!/usr/bin/env node
/**
 * Homepage `#services`: headline + gutter-focused service cards for `homePageSingleton`.
 *
 * Run: cd astro-site && node scripts/patch-aagf-home-services.mjs
 * (Also runs after `npm run content:aagf`.)
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

const HEADLINE = 'Gutter Services in South Florida'

/** Canonical paths must match built city/service routes. */
const ITEMS = [
  {
    _type: 'serviceItem',
    _key: 'aagf-gutter-repair',
    number: '01',
    title: 'Gutter repair',
    description:
      'Fix leaks, sagging, loose hangers, and damaged sections before water stains siding, soffit, or your crawl space.',
    href: '/gutter-repair-south-florida/',
  },
  {
    _type: 'serviceItem',
    _key: 'aagf-gutter-installation',
    number: '02',
    title: 'Gutter installation',
    description:
      'Seamless aluminum gutters fabricated on site, with downspouts and pitch tuned so heavy South Florida rain moves away from your roofline and foundation.',
    href: '/gutter-installation-south-florida/',
  },
  {
    _type: 'serviceItem',
    _key: 'aagf-gutter-cleaning',
    number: '03',
    title: 'Gutter cleaning',
    description:
      'Hand cleaning and flushing to clear debris and buildup so water flows through the season—not over the sides.',
    href: '/gutter-cleaning-south-florida/',
  },
  {
    _type: 'serviceItem',
    _key: 'aagf-gutter-guards',
    number: '04',
    title: 'Gutter guards',
    description:
      'Guards and covers that cut leaves and debris while keeping enough open area for Florida downpours.',
    href: '/gutter-guards-south-florida/',
  },
  {
    _type: 'serviceItem',
    _key: 'aagf-gutter-downspout',
    number: '05',
    title: 'Downspouts',
    description:
      'Install, repair, and extend downspouts so storm runoff is carried away from your foundation and walkways—not pooling at the base of your home.',
    href: '/gutter-downspout-south-florida/',
  },
  {
    _type: 'serviceItem',
    _key: 'aagf-aluminum-gutters',
    number: '06',
    title: 'Aluminum Gutters',
    description:
      'Seamless aluminum gutters sized for Florida downpours—durable, corrosion-resistant systems fabricated on site for a clean fit along your roofline.',
    href: '/aluminum-gutters-fl/',
  },
]

async function main() {
  exitOrSkipIfNoSanityWriteCreds(projectId, token, 'patch-aagf-home-services')

  const client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    token,
    useCdn: false,
  })

  await client
    .patch('homePageSingleton')
    .set({
      'services.headline': HEADLINE,
      'services.items': ITEMS,
    })
    .commit()

  console.log(`Patched homePageSingleton → services (${HEADLINE}, ${ITEMS.length} items).`)

  if (await tryPublishDraft(client, 'homePageSingleton')) {
    console.log('Published homePageSingleton (draft → live).')
  } else {
    console.log('No draft for homePageSingleton; public API may already match.')
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
