/**
 * JSON-LD for schema.org HomeAndConstructionBusiness (LocalBusiness).
 * Data from Site settings → Business + Business listings + reviews.
 */
import { aagfNavLogoUrl } from './brand-logos.js'
import { asStr } from './sanity-strings.js'

/** Matches astro.config.mjs `site` — absolute URLs for image / @id */
export const CANONICAL_SITE_ORIGIN =
  (typeof import.meta !== 'undefined' && import.meta.env?.PUBLIC_SITE_URL?.replace(/\/+$/, '')) ||
  'http://localhost:4321'

const DEFAULT_RATING = 4.8
const DEFAULT_REVIEW_COUNT = 110

const AREA_SERVED = [
  { '@type': 'AdministrativeArea', name: 'Broward County, Florida' },
  { '@type': 'AdministrativeArea', name: 'Palm Beach County, Florida' },
]

/**
 * @param {string} raw
 * @returns {string}
 */
function normalizeSiteUrl(raw) {
  const s = String(raw || '').trim()
  if (!s) return CANONICAL_SITE_ORIGIN
  if (/^https?:\/\//i.test(s)) return s.replace(/\/+$/, '') || CANONICAL_SITE_ORIGIN
  return `${CANONICAL_SITE_ORIGIN.replace(/\/+$/, '')}/${s.replace(/^\/+/, '')}`
}

/**
 * @param {string} line e.g. "36 SW 8th Ct, Deerfield Beach, FL 33441"
 * @param {string} metroFallback
 * @returns {Record<string, string> | null}
 */
function parsePostalAddress(line, metroFallback) {
  const trimmed = String(line || '').trim()
  if (!trimmed) return null

  const match = trimmed.match(/^(.+?),\s*([^,]+),\s*([A-Za-z]{2})\s*(\d{5})(?:-\d{4})?$/)

  if (match) {
    return {
      '@type': 'PostalAddress',
      streetAddress: match[1].trim(),
      addressLocality: match[2].trim(),
      addressRegion: match[3].toUpperCase(),
      postalCode: match[4],
      addressCountry: 'US',
    }
  }

  const address = {
    '@type': 'PostalAddress',
    streetAddress: trimmed,
    addressCountry: 'US',
  }
  const locality = String(metroFallback || '').trim()
  if (locality) address.addressLocality = locality
  return address
}

/**
 * @param {Record<string, unknown>} settings
 * @returns {{ ratingValue: number; reviewCount: number } | null}
 */
function readAggregateRating(settings) {
  const reviewValues = settings?.reviews?.reviewValues ?? {}
  const ratingRaw = asStr(reviewValues.reviewsRating).trim()
  const countRaw = asStr(reviewValues.reviewsCount).trim()

  const ratingValue = ratingRaw ? Number.parseFloat(ratingRaw) : DEFAULT_RATING
  const reviewCount = countRaw
    ? Number.parseInt(countRaw.replace(/\D/g, ''), 10)
    : DEFAULT_REVIEW_COUNT

  if (!Number.isFinite(ratingValue) || !Number.isFinite(reviewCount) || reviewCount < 1) {
    return {
      ratingValue: DEFAULT_RATING,
      reviewCount: DEFAULT_REVIEW_COUNT,
    }
  }

  return { ratingValue, reviewCount }
}

/**
 * @param {Record<string, unknown>} settings siteSettings merge result
 * @returns {string | null} Serialized JSON-LD or null if no business name
 */
export function buildHomeAndConstructionBusinessJsonLd(settings) {
  const business = settings?.business ?? {}
  const listings = settings?.businessListings ?? {}

  const name = asStr(business.companyName).trim()
  if (!name) return null

  const url = normalizeSiteUrl(asStr(business.websiteUrl))
  const telephone = asStr(business.phoneDisplay).trim() || formatTelForSchema(asStr(business.phoneTel))
  const email = asStr(business.email).trim()
  let description =
    asStr(business.descriptionShort).trim() || asStr(business.descriptionLong).trim()
  const hours = asStr(business.hoursText).trim()
  if (hours) {
    description = description ? `${description} ${hours}` : hours
  }

  const image = `${CANONICAL_SITE_ORIGIN.replace(/\/+$/, '')}${aagfNavLogoUrl()}`

  const address = parsePostalAddress(
    asStr(business.addressShort),
    asStr(business.addressMetro),
  )

  const sameAs = [
    asStr(listings.googleMaps),
    asStr(listings.facebook),
    asStr(listings.instagram),
    asStr(listings.twitter),
    asStr(listings.linkedin),
    asStr(listings.yelp),
    asStr(listings.bingPlaces),
  ]
    .map((u) => u.trim())
    .filter((u) => /^https?:\/\//i.test(u))

  const hasMap = asStr(listings.googleMaps).trim()
  const aggregate = readAggregateRating(settings)

  /** @type {Record<string, unknown>} */
  const data = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${url}#business`,
    name,
    url,
    ...(telephone ? { telephone } : {}),
    ...(email ? { email } : {}),
    ...(description ? { description } : {}),
    ...(image ? { image: { '@type': 'ImageObject', url: image } } : {}),
    ...(address ? { address } : {}),
    ...(hasMap ? { hasMap } : {}),
    ...(sameAs.length ? { sameAs } : {}),
    areaServed: AREA_SERVED,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: aggregate.ratingValue,
      reviewCount: aggregate.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  }

  const foundingDate = asStr(business.dateOpened).trim()
  if (foundingDate) {
    data.foundingDate = foundingDate
  }

  let json = JSON.stringify(data)
  json = json.replace(/</g, '\\u003c')
  return json
}

/**
 * @param {string} tel
 * @returns {string}
 */
function formatTelForSchema(tel) {
  const d = String(tel || '').replace(/\D/g, '')
  if (d.length === 10) return `+1${d}`
  if (d.length === 11 && d.startsWith('1')) return `+${d}`
  return String(tel || '').trim()
}
