import {
  GUTTERS_BOCA_RATON_FL_SLUG,
  guttersBocaRatonFlPage,
} from '../aagf-location-page-data/gutters-boca-raton-fl.js'
import {
  GUTTERS_BOYNTON_BEACH_FL_SLUG,
  guttersBoyntonBeachFlPage,
} from '../aagf-location-page-data/gutters-boynton-beach-fl.js'
import {
  GUTTERS_DEERFIELD_BEACH_FL_SLUG,
  guttersDeerfieldBeachFlPage,
} from '../aagf-location-page-data/gutters-deerfield-beach-fl.js'
import {
  GUTTERS_DELRAY_BEACH_FL_SLUG,
  guttersDelrayBeachFlPage,
} from '../aagf-location-page-data/gutters-delray-beach-fl.js'
import {
  GUTTERS_FORT_LAUDERDALE_FL_SLUG,
  guttersFortLauderdaleFlPage,
} from '../aagf-location-page-data/gutters-fort-lauderdale-fl.js'
import {
  GUTTERS_GREENACRES_FL_SLUG,
  guttersGreenacresFlPage,
} from '../aagf-location-page-data/gutters-greenacres-fl.js'
import {
  GUTTERS_HOLLYWOOD_FL_SLUG,
  guttersHollywoodFlPage,
} from '../aagf-location-page-data/gutters-hollywood-fl.js'
import {
  GUTTERS_POMPANO_BEACH_FL_SLUG,
  guttersPompanoBeachFlPage,
} from '../aagf-location-page-data/gutters-pompano-beach-fl.js'
import {
  GUTTERS_WEST_PALM_BEACH_FL_SLUG,
  guttersWestPalmBeachFlPage,
} from '../aagf-location-page-data/gutters-west-palm-beach-fl.js'

/** @type {Record<string, object>} */
const FALLBACKS_BY_SLUG = {
  [GUTTERS_DEERFIELD_BEACH_FL_SLUG]: guttersDeerfieldBeachFlPage,
  [GUTTERS_DELRAY_BEACH_FL_SLUG]: guttersDelrayBeachFlPage,
  [GUTTERS_FORT_LAUDERDALE_FL_SLUG]: guttersFortLauderdaleFlPage,
  [GUTTERS_GREENACRES_FL_SLUG]: guttersGreenacresFlPage,
  [GUTTERS_BOCA_RATON_FL_SLUG]: guttersBocaRatonFlPage,
  [GUTTERS_BOYNTON_BEACH_FL_SLUG]: guttersBoyntonBeachFlPage,
  [GUTTERS_HOLLYWOOD_FL_SLUG]: guttersHollywoodFlPage,
  [GUTTERS_POMPANO_BEACH_FL_SLUG]: guttersPompanoBeachFlPage,
  [GUTTERS_WEST_PALM_BEACH_FL_SLUG]: guttersWestPalmBeachFlPage,
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
