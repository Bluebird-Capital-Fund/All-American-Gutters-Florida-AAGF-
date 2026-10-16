import {
  DOWNSPOUT_BOCA_RATON_FL_SLUG,
  downspoutBocaRatonFlPage,
} from './gutter-downspout-south-florida.js'
import {
  ALUMINUM_GUTTERS_BOCA_RATON_FL_SLUG,
  aluminumGuttersBocaRatonFlPage,
} from './aluminum-gutters-fl.js'
import {
  COPPER_GUTTERS_BOCA_RATON_FL_SLUG,
  copperGuttersBocaRatonFlPage,
} from './copper-gutters-fl.js'
import {
  GUTTERS_SOUTH_FLORIDA_SLUG,
  guttersSouthFloridaPage,
} from './gutters-south-florida.js'
import { renameSouthFloridaGutterSlug } from '../service-routes.js'

/** @type {Record<string, object>} */
const FALLBACKS_BY_CANONICAL_SLUG = {
  [GUTTERS_SOUTH_FLORIDA_SLUG]: guttersSouthFloridaPage,
  [DOWNSPOUT_BOCA_RATON_FL_SLUG]: downspoutBocaRatonFlPage,
  [ALUMINUM_GUTTERS_BOCA_RATON_FL_SLUG]: aluminumGuttersBocaRatonFlPage,
  [COPPER_GUTTERS_BOCA_RATON_FL_SLUG]: copperGuttersBocaRatonFlPage,
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
