#!/usr/bin/env node
/**
 * Writes All American Gutters business copy, contact, meta, keywords, and categories
 * into Sanity Site settings (singleton `siteSettingsSingleton`).
 *
 * Env (repo-root `.env` and/or `astro-site/.env`, merged — astro-site wins on conflicts):
 *   PUBLIC_SANITY_PROJECT_ID or SANITY_PROJECT_ID
 *   PUBLIC_SANITY_DATASET or SANITY_DATASET (optional, default production)
 *   SANITY_API_WRITE_TOKEN or SANITY_API_TOKEN
 *
 * Run: cd astro-site && npm run content:aagf (also runs patch-aagf-home-hero.mjs for Tampa/typo fixes)
 * Or this file only: node scripts/patch-aagf-business.mjs
 * Then Studio → Publish Site settings (+ Home page if hero was patched).
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

function stringListItems(values) {
  return values.map((value, i) => ({
    _type: 'stringListItem',
    _key: `aagf-${i}-${String(value).replace(/\s+/g, '-').slice(0, 24)}`,
    value: String(value).trim(),
  }))
}

const DESCRIPTION_SHORT =
  'All American Gutters installs and repairs seamless gutters, gutter guards, and downspouts for South Florida homes. Get a free estimate—local crew, quality work, and reliable service you can count on.'

const DESCRIPTION_LONG = `All American Gutters is a South Florida gutter company focused on protecting homes from heavy rain and runoff. We install seamless gutters, gutter guards, downspouts, and related drainage solutions so water is directed away from your roofline, foundation, and landscaping. Whether you need a full replacement, an upgrade to reduce clogs, or repairs after storms, our team works with you on a clear plan and straightforward pricing.

We serve homeowners and property managers across the region from 36 SW 8th Ct, Deerfield Beach, FL 33441. That's our base for estimates, scheduling, and coordinating crews across the area. We're open 24/7 for calls and messages—reach out anytime to request a quote, ask about gutter options, or get help with an urgent leak or overflow. During normal project hours we'll line up site visits and installs; after hours, leave a message or use your preferred contact method and we'll get back to you as soon as possible.

Choose All American Gutters when you want dependable workmanship, materials suited to Florida weather, and a local team that stands behind its work. Contact us today to schedule your free estimate and keep your home drier, safer, and better protected year-round.`

/** Google Business Profile share link (footer social, address link, maps button) */
const GBP_MAPS_APP_URL = 'https://maps.app.goo.gl/L9nqkdMmya6SJDU99'

const SITE_SETTINGS_NAV_DOC_ID = 'fd857e3a-c4d4-4103-9066-9a9afbfcff18'

/**
 * iframe src only — from Google Maps → Share → Embed a map (not the full <iframe> tag).
 * Used by homepage / service-area / city service iframes as `src={mapEmbedUrl}`.
 */
const MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d740.141167301826!2d-80.10390604021063!3d26.306198269278735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91d7bfe8eb891%3A0x51b7528a70761df5!2sAll%20American%20Gutters!5e0!3m2!1sen!2scl!4v1781719205926!5m2!1sen!2scl'

/** Studio logo paths — same asset until separate horizontal/white PNGs exist */
const LOGO_HORIZONTAL_PATH =
  'Media (AAGF)/Logo Suite (AAGF)/(White BG Transparent PNG) AMERICAN-01.png'

/**
 * Footer social row: Google Business Profile only (add Facebook/Instagram in Studio when you have URLs).
 * Replaces legacy SunLife / wrong map links.
 */
const FOOTER_SOCIAL_LINKS = [
  {
    _type: 'socialLink',
    _key: 'aagf-social-google-maps',
    platform: 'Google Business Profile',
    href: GBP_MAPS_APP_URL,
    ariaLabel: 'All American Gutters on Google Maps',
  },
]

const FOOTER_TAGLINE =
  'Seamless gutters, honest estimates, and crews that respect your yard—serving homeowners across South Florida from our Deerfield Beach base.'

const FOOTER_ESTIMATE_HEADLINE = 'Tell Us About Your South Florida Project'

const FOOTER_ESTIMATE_INTRO =
  'Need a gutter repair, cleaning, maintenance plan, or replacement estimate? Start with a free consultation and tell us what’s going on.'

const FORMS_FORM_ARIA_LABEL = 'Request a gutter estimate for your South Florida property'

/** Homepage stats strip + Google reviews summary (matches live GBP profile). */
const STATS_BAR = {
  ariaLabel: 'All American Gutters on Google',
  items: [
    {
      _type: 'statsBarItem',
      _key: 'aagf-stat-google-rating',
      label: 'Google Rating',
      valueKey: 'statsAvgRating',
    },
    {
      _type: 'statsBarItem',
      _key: 'aagf-stat-google-reviews',
      label: 'Reviews',
      valueKey: 'statsJobsCompleted',
    },
  ],
}

const REVIEWS_PATCH = {
  'reviews.headline': 'What South Florida homeowners say',
  'reviews.postedOnLabel': 'Posted on Google',
  'reviews.summary.brandLabel': 'Google',
  'reviews.summary.ratingValueKey': 'reviewsRating',
  'reviews.summary.reviewCountKey': 'reviewsCount',
  'reviews.summary.reviewCountPrefix': '',
  'reviews.summary.reviewCountSuffix': '+ Reviews',
  'reviews.summary.ctaText': 'Read on Google',
  'reviews.summary.ctaHref': GBP_MAPS_APP_URL,
  'reviews.reviewValues.reviewsRating': '4.8',
  'reviews.reviewValues.reviewsCount': '110',
}

const BLOG_AUTHOR_BIO_FALLBACK =
  'All American Gutters is a family-owned South Florida gutter company with decades of experience in installation, repair, replacement, and gutter guards across the region.'

/** Nav offer bar (`siteSettingsSingleton.header.offerBar`) — merged on all pages from Sanity. */
const HEADER_OFFER_BAR = {
  textBeforeDiscount: 'Spring special — Get discounts on your gutter services! ',
  discountLabel: '',
  textAfterDiscount: '',
  ctaText: 'Schedule your estimate today.',
  ctaHref: '/contact-us/#contact',
}

async function main() {
  exitOrSkipIfNoSanityWriteCreds(projectId, token, 'patch-aagf-business')

  const client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    token,
    useCdn: false,
  })

  const keywords = stringListItems([
    'gutters',
    'gutters south florida',
    'gutter installation',
    'gutter repair',
    'gutter guards',
  ])

  const businessCategories = stringListItems(['gutter service', 'gutter cleaning service'])

  const patch = {
    'business.companyName': 'All American Gutters',
    'business.companyNameShort': 'All American Gutters',
    'business.phoneDisplay': '(561) 274-9477',
    'business.phoneTel': '5612749477',
    'business.email': 'info@aaguttersflorida.com',
    'business.websiteUrl': 'https://aaguttersflorida.com/',
    'business.copyrightSiteUrl': 'https://aaguttersflorida.com/',
    'business.addressShort': '36 SW 8th Ct, Deerfield Beach, FL 33441',
    'business.addressMetro': 'Deerfield Beach',
    'business.descriptionShort': DESCRIPTION_SHORT,
    'business.descriptionLong': DESCRIPTION_LONG,
    'business.hoursText': 'Open 24/7',
    'business.logoHorizontalBlack': LOGO_HORIZONTAL_PATH,
    'business.logoHorizontalWhite': LOGO_HORIZONTAL_PATH,
    'business.logoHorizontalBlackLocation': 'All American Gutters — Deerfield Beach, FL',
    'business.logoHorizontalWhiteLocation': 'All American Gutters — horizontal logo',
    'meta.title': 'All American Gutters | Seamless Gutters & Repair | South Florida',
    'meta.description': DESCRIPTION_SHORT,
    keywords,
    businessCategories,
    'businessListings.googleMaps': GBP_MAPS_APP_URL,
    'businessListings.facebook': 'https://aaguttersflorida.com/',
    'businessListings.instagram': 'https://aaguttersflorida.com/',
    mapEmbedUrl: MAP_EMBED_SRC,
    'footerBrand.socialAriaLabel': 'All American Gutters listings and social',
    'footerBrand.socialLinks': FOOTER_SOCIAL_LINKS,
    'footerBrand.tagline': FOOTER_TAGLINE,
    'footerEstimate.headline': FOOTER_ESTIMATE_HEADLINE,
    'footerEstimate.intro': FOOTER_ESTIMATE_INTRO,
    'forms.formAriaLabel': FORMS_FORM_ARIA_LABEL,
    blogAuthorBio: BLOG_AUTHOR_BIO_FALLBACK,
    'header.offerBar.textBeforeDiscount': HEADER_OFFER_BAR.textBeforeDiscount,
    'header.offerBar.discountLabel': HEADER_OFFER_BAR.discountLabel,
    'header.offerBar.textAfterDiscount': HEADER_OFFER_BAR.textAfterDiscount,
    'header.offerBar.ctaText': HEADER_OFFER_BAR.ctaText,
    'header.offerBar.ctaHref': HEADER_OFFER_BAR.ctaHref,
    'statsValues.statsAvgRating': '4.8',
    'statsValues.statsJobsCompleted': '110+',
  }

  await client.patch(documentId).set(patch).commit()

  await client.patch(SITE_SETTINGS_NAV_DOC_ID).set({ mapEmbedUrl: MAP_EMBED_SRC }).commit()
  console.log(`Patched ${SITE_SETTINGS_NAV_DOC_ID} → mapEmbedUrl.`)

  const pageIds = await client.fetch(
    `*[_type in ["cityServicePage", "locationPage"] && defined(mapEmbedUrl)]._id`,
  )
  if (Array.isArray(pageIds) && pageIds.length > 0) {
    const tx = client.transaction()
    for (const id of pageIds) {
      tx.patch(id, (p) => p.unset(['mapEmbedUrl']))
    }
    await tx.commit()
    console.log(`Unset page-specific mapEmbedUrl on ${pageIds.length} city/location page(s).`)
  }

  await client
    .patch('homePageSingleton')
    .set({
      statsBar: STATS_BAR,
      ...REVIEWS_PATCH,
    })
    .commit()

  console.log(
    `Patched ${documentId} with AAGF business, meta, keywords, GBP link, mapEmbedUrl, stats, and header offer bar.`,
  )
  console.log('Patched homePageSingleton → statsBar and Google reviews summary.')
  if (await tryPublishDraft(client, 'homePageSingleton')) {
    console.log('Published homePageSingleton (draft → live).')
  }
  if (await tryPublishDraft(client, documentId)) {
    console.log(`Published ${documentId} (draft → live).`)
  } else {
    console.log(`No draft for ${documentId}; public API already had this revision or patch applied in place.`)
  }
  if (await tryPublishDraft(client, SITE_SETTINGS_NAV_DOC_ID)) {
    console.log(`Published ${SITE_SETTINGS_NAV_DOC_ID} (draft → live).`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
