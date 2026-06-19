import {
  GUTTERS_FORT_LAUDERDALE_FL_SLUG,
  guttersFortLauderdaleFlPage,
} from '../aagf-location-page-data/gutters-fort-lauderdale-fl.js'

/** @type {Record<string, object>} */
const FALLBACKS_BY_SLUG = {
  [GUTTERS_FORT_LAUDERDALE_FL_SLUG]: guttersFortLauderdaleFlPage,
}

export const SCRIPTED_LOCATION_SLUGS = Object.keys(FALLBACKS_BY_SLUG)

/**
 * @param {string} slug
 * @returns {object | null}
 */
export function getLocationPageFallback(slug) {
  const key = String(slug || '').trim().replace(/^\/+|\/+$/g, '')
  return FALLBACKS_BY_SLUG[key] || null
}
