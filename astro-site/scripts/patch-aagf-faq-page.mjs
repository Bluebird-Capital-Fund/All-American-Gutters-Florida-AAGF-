#!/usr/bin/env node
/**
 * FAQ page (`/faqs/`) — hero lead + accordion Q&A.
 *
 * Run: cd astro-site && node scripts/patch-aagf-faq-page.mjs
 */

import { createClient } from '@sanity/client'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { AAGF_FAQ_PAGE, aagfFaqPageSanityItems } from '../src/lib/aagf-faq-page-data.js'
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

const SLUG = 'faqs'

async function main() {
  exitOrSkipIfNoSanityWriteCreds(projectId, token, 'patch-aagf-faq-page')

  const client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    token,
    useCdn: false,
  })

  const docId = await client.fetch(`*[_type == "faqPage" && slug.current == $slug][0]._id`, { slug: SLUG })

  const payload = {
    _type: 'faqPage',
    title: 'Gutter FAQs',
    slug: { _type: 'slug', current: SLUG },
    eyebrow: AAGF_FAQ_PAGE.eyebrow,
    headline: AAGF_FAQ_PAGE.headline,
    lead: AAGF_FAQ_PAGE.lead,
    faq: {
      _type: 'faq',
      headline: AAGF_FAQ_PAGE.faq.headline,
      headingId: AAGF_FAQ_PAGE.faq.headingId,
      items: aagfFaqPageSanityItems(),
    },
  }

  if (docId) {
    await client.patch(docId).set(payload).commit()
    console.log(`Patched faqPage ${SLUG} (${docId}).`)
    if (await tryPublishDraft(client, docId)) {
      console.log(`Published faqPage ${SLUG}.`)
    }
    return
  }

  const created = await client.create(payload)
  console.log(`Created faqPage ${SLUG} (${created._id}).`)
  if (await tryPublishDraft(client, created._id)) {
    console.log(`Published faqPage ${SLUG}.`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
