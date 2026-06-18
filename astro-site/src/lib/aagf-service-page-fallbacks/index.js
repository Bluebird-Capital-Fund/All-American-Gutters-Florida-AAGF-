import {
  GUTTER_DOWNSPOUT_SOUTH_FLORIDA_SLUG,
  gutterDownspoutSouthFloridaPage,
} from './gutter-downspout-south-florida.js'
import {
  ROOF_SOFFIT_SOUTH_FLORIDA_SLUG,
  roofSoffitSouthFloridaPage,
} from './roof-soffit-south-florida.js'
import { renameSouthFloridaGutterSlug } from '../service-routes.js'

/** @type {Record<string, object>} */
const FALLBACKS_BY_CANONICAL_SLUG = {
  [GUTTER_DOWNSPOUT_SOUTH_FLORIDA_SLUG]: gutterDownspoutSouthFloridaPage,
  [ROOF_SOFFIT_SOUTH_FLORIDA_SLUG]: roofSoffitSouthFloridaPage,
}

/** Slugs that must be built even before Sanity is patched (canonical + legacy aliases). */
export const SCRIPTED_SERVICE_SLUGS = Object.keys(FALLBACKS_BY_CANONICAL_SLUG)

/**
 * Local fallback when a scripted service page is not yet in Sanity.
 * @param {string} slugOrPath
 * @returns {object | null}
 */
export function getServicePageFallback(slugOrPath) {
  const canonical = renameSouthFloridaGutterSlug(slugOrPath)
  return FALLBACKS_BY_CANONICAL_SLUG[canonical] || null
}
