#!/usr/bin/env node
/**
 * Updates sitewide Google review testimonials (names, quotes, avatars) from
 * `Media (AAGF)/Reviews (AAGF)/` — used on city service, location, and reviews pages.
 *
 * Run: cd astro-site && node scripts/patch-aagf-reviews.mjs
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

const SITE_SETTINGS_NAV_DOC_ID = 'fd857e3a-c4d4-4103-9066-9a9afbfcff18'
const GBP_MAPS_APP_URL = 'https://maps.app.goo.gl/L9nqkdMmya6SJDU99'
const REVIEWS_MEDIA = 'Media (AAGF)/Reviews (AAGF)'
const REVIEW_GOOGLE_ICON = `${REVIEWS_MEDIA}/Google Icon PNG.png`
const REVIEW_STARS_IMAGE = `${REVIEWS_MEDIA}/5 Star Google Rating PNG copy.png`

const TESTIMONIALS = [
  {
    _type: 'testimonial',
    _key: 'aagf-review-linda-zamora',
    author: 'Linda Zamora',
    timeAgo: '2 weeks ago',
    avatarSrc: `${REVIEWS_MEDIA}/Linda Zamora.png`,
    avatarLocation: 'Google reviewer — South Florida homeowner',
    quote:
      'Amazing job my house looks finished with the gutters as they match our house trim color. They make the gutters in real time amazing to watch! Very professional and reasonable pricing! Highly recommend',
  },
  {
    _type: 'testimonial',
    _key: 'aagf-review-daniel-gudauskas',
    author: 'Daniel Gudauskas',
    timeAgo: '1 month ago',
    avatarSrc: `${REVIEWS_MEDIA}/Daniel Gudauskas.png`,
    avatarLocation: 'Google reviewer — South Florida homeowner',
    quote:
      'Their price is fair. They showed up on time. The material they use is an upgraded material. They were quick, efficient, friendly, and clean. What More can you ask for?',
  },
  {
    _type: 'testimonial',
    _key: 'aagf-review-nella-groysman',
    author: 'Nella Groysman',
    timeAgo: '2 months ago',
    avatarSrc: `${REVIEWS_MEDIA}/Nella Groysman.png`,
    avatarLocation: 'Google reviewer — South Florida homeowner',
    quote:
      'We needed additional gutters badly in this rainy weather and All American Gutters came through for us doing great job in a very short time. Even pouring rain had not stopped them!',
  },
  {
    _type: 'testimonial',
    _key: 'aagf-review-timothy-gaffney',
    author: 'Timothy Gaffney',
    timeAgo: '3 months ago',
    avatarSrc: `${REVIEWS_MEDIA}/Timothy Gaffney.png`,
    avatarLocation: 'Google reviewer — South Florida homeowner',
    quote:
      'Very nice people, super-easy to do business with, and great work at very reasonable rates. Highly recommended!',
  },
]

function buildReviewsBlock() {
  return {
    _type: 'reviews',
    headline: 'What South Florida Homeowners Say',
    postedOnLabel: 'Posted on Google',
    summary: {
      _type: 'reviewsSummary',
      brandLabel: 'Google',
      googleIconSrc: REVIEW_GOOGLE_ICON,
      googleIconLocation: 'Google',
      ratingValueKey: 'reviewsRating',
      starsImageSrc: REVIEW_STARS_IMAGE,
      starsImageLocation: '5 star Google rating',
      starsImageAlt: '5 out of 5 stars on Google',
      reviewCountKey: 'reviewsCount',
      reviewCountPrefix: '',
      reviewCountSuffix: '+ Reviews',
      ctaText: 'Read on Google',
      ctaHref: GBP_MAPS_APP_URL,
    },
    reviewValues: {
      _type: 'reviewValues',
      reviewsRating: '4.8',
      reviewsCount: '110',
    },
    testimonials: TESTIMONIALS,
  }
}

async function patchReviewsOnDoc(client, documentId) {
  await client.patch(documentId).set({ reviews: buildReviewsBlock() }).commit()
  console.log(`Patched ${documentId} → reviews.testimonials (${TESTIMONIALS.length} cards).`)
  if (await tryPublishDraft(client, documentId)) {
    console.log(`Published ${documentId}.`)
  }
}

async function main() {
  exitOrSkipIfNoSanityWriteCreds(projectId, token, 'patch-aagf-reviews')

  const client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    token,
    useCdn: false,
  })

  await patchReviewsOnDoc(client, 'homePageSingleton')
  await patchReviewsOnDoc(client, 'siteSettingsSingleton')

  try {
    await patchReviewsOnDoc(client, SITE_SETTINGS_NAV_DOC_ID)
  } catch (err) {
    console.warn(`Skipped ${SITE_SETTINGS_NAV_DOC_ID} (may not exist):`, err?.message || err)
  }

  const pageIds = await client.fetch(
    `*[_type in ["cityServicePage", "locationPage", "reviewsPage"] && defined(reviews)]._id`,
  )
  if (Array.isArray(pageIds) && pageIds.length > 0) {
    const tx = client.transaction()
    for (const id of pageIds) {
      tx.patch(id, (p) => p.unset(['reviews']))
    }
    await tx.commit()
    console.log(`Unset page-specific reviews on ${pageIds.length} document(s) — sitewide block is canonical.`)
  }

  console.log('Done. Review cards use avatars under Media (AAGF)/Reviews (AAGF)/.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
