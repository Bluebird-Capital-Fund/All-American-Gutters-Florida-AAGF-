import {
  GUTTER_DOWNSPOUT_SOUTH_FLORIDA_SLUG,
  gutterDownspoutSouthFloridaPage,
} from './gutter-downspout-south-florida.js'
import {
  SOFFIT_REPAIR_SOUTH_FLORIDA_SLUG,
  roofSoffitSouthFloridaPage,
} from './roof-soffit-south-florida.js'
import {
  FASCIA_REPAIR_SOUTH_FLORIDA_SLUG,
  roofFasciaSouthFloridaPage,
} from './roof-fascia-south-florida.js'
import {
  ALUMINUM_GUTTERS_FL_SLUG,
  aluminumGuttersFlPage,
} from './aluminum-gutters-fl.js'
import {
  COPPER_GUTTERS_FL_SLUG,
  copperGuttersFlPage,
} from './copper-gutters-fl.js'
import { renameSouthFloridaGutterSlug } from '../service-routes.js'

/** @type {Record<string, object>} */
const FALLBACKS_BY_CANONICAL_SLUG = {
  [GUTTER_DOWNSPOUT_SOUTH_FLORIDA_SLUG]: gutterDownspoutSouthFloridaPage,
  [SOFFIT_REPAIR_SOUTH_FLORIDA_SLUG]: roofSoffitSouthFloridaPage,
  [FASCIA_REPAIR_SOUTH_FLORIDA_SLUG]: roofFasciaSouthFloridaPage,
  [ALUMINUM_GUTTERS_FL_SLUG]: aluminumGuttersFlPage,
  [COPPER_GUTTERS_FL_SLUG]: copperGuttersFlPage,
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
