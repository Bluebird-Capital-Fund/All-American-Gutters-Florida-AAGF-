import {
  GUTTERS_BOCA_RATON_FL_SLUG,
  guttersBocaRatonFlPage,
} from '../aagf-location-page-data/gutters-boca-raton-fl.js'
import {
  GUTTERS_CORAL_SPRINGS_FL_SLUG,
  guttersCoralSpringsFlPage,
} from '../aagf-location-page-data/gutters-coral-springs-fl.js'
import {
  GUTTERS_BOYNTON_BEACH_FL_SLUG,
  guttersBoyntonBeachFlPage,
} from '../aagf-location-page-data/gutters-boynton-beach-fl.js'
import {
  GUTTERS_BROWARD_FL_SLUG,
  guttersBrowardFlPage,
} from '../aagf-location-page-data/gutters-broward-fl.js'
import {
  GUTTERS_DAVIE_FL_SLUG,
  guttersDavieFlPage,
} from '../aagf-location-page-data/gutters-davie-fl.js'
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
  GUTTERS_HIGHLAND_BEACH_FL_SLUG,
  guttersHighlandBeachFlPage,
} from '../aagf-location-page-data/gutters-highland-beach-fl.js'
import {
  GUTTERS_HOLLYWOOD_FL_SLUG,
  guttersHollywoodFlPage,
} from '../aagf-location-page-data/gutters-hollywood-fl.js'
import {
  LANTANA_GUTTERS_FL_SLUG,
  lantanaGuttersFlPage,
} from '../aagf-location-page-data/lantana-gutters-fl.js'
import {
  GUTTERS_LIGHTHOUSE_POINT_FL_SLUG,
  guttersLighthousePointFlPage,
} from '../aagf-location-page-data/gutters-lighthouse-point-fl.js'
import {
  GUTTERS_POMPANO_BEACH_FL_SLUG,
  guttersPompanoBeachFlPage,
} from '../aagf-location-page-data/gutters-pompano-beach-fl.js'
import {
  GUTTERS_PALM_BEACH_GARDENS_FL_SLUG,
  guttersPalmBeachGardensFlPage,
} from '../aagf-location-page-data/gutters-palm-beach-gardens-fl.js'
import {
  GUTTERS_PALM_SPRINGS_FL_SLUG,
  guttersPalmSpringsFlPage,
} from '../aagf-location-page-data/gutters-palm-springs-fl.js'
import {
  GUTTERS_PARKLAND_FL_SLUG,
  guttersParklandFlPage,
} from '../aagf-location-page-data/gutters-parkland-fl.js'
import {
  GUTTERS_PEMBROKE_PINES_FL_SLUG,
  guttersPembrokePinesFlPage,
} from '../aagf-location-page-data/gutters-pembroke-pines-fl.js'
import {
  GUTTERS_WESTON_FL_SLUG,
  guttersWestonFlPage,
} from '../aagf-location-page-data/gutters-weston-fl.js'
import {
  GUTTERS_WEST_PALM_BEACH_FL_SLUG,
  guttersWestPalmBeachFlPage,
} from '../aagf-location-page-data/gutters-west-palm-beach-fl.js'
import {
  GUTTERS_WILTON_MANORS_FL_SLUG,
  guttersWiltonManorsFlPage,
} from '../aagf-location-page-data/gutters-wilton-manors-fl.js'

/** @type {Record<string, object>} */
const FALLBACKS_BY_SLUG = {
  [GUTTERS_DEERFIELD_BEACH_FL_SLUG]: guttersDeerfieldBeachFlPage,
  [GUTTERS_DAVIE_FL_SLUG]: guttersDavieFlPage,
  [GUTTERS_DELRAY_BEACH_FL_SLUG]: guttersDelrayBeachFlPage,
  [GUTTERS_FORT_LAUDERDALE_FL_SLUG]: guttersFortLauderdaleFlPage,
  [GUTTERS_GREENACRES_FL_SLUG]: guttersGreenacresFlPage,
  [GUTTERS_BOCA_RATON_FL_SLUG]: guttersBocaRatonFlPage,
  [GUTTERS_CORAL_SPRINGS_FL_SLUG]: guttersCoralSpringsFlPage,
  [GUTTERS_BOYNTON_BEACH_FL_SLUG]: guttersBoyntonBeachFlPage,
  [GUTTERS_BROWARD_FL_SLUG]: guttersBrowardFlPage,
  [GUTTERS_HOLLYWOOD_FL_SLUG]: guttersHollywoodFlPage,
  [GUTTERS_HIGHLAND_BEACH_FL_SLUG]: guttersHighlandBeachFlPage,
  [LANTANA_GUTTERS_FL_SLUG]: lantanaGuttersFlPage,
  [GUTTERS_LIGHTHOUSE_POINT_FL_SLUG]: guttersLighthousePointFlPage,
  [GUTTERS_POMPANO_BEACH_FL_SLUG]: guttersPompanoBeachFlPage,
  [GUTTERS_PEMBROKE_PINES_FL_SLUG]: guttersPembrokePinesFlPage,
  [GUTTERS_PARKLAND_FL_SLUG]: guttersParklandFlPage,
  [GUTTERS_PALM_BEACH_GARDENS_FL_SLUG]: guttersPalmBeachGardensFlPage,
  [GUTTERS_PALM_SPRINGS_FL_SLUG]: guttersPalmSpringsFlPage,
  [GUTTERS_WEST_PALM_BEACH_FL_SLUG]: guttersWestPalmBeachFlPage,
  [GUTTERS_WESTON_FL_SLUG]: guttersWestonFlPage,
  [GUTTERS_WILTON_MANORS_FL_SLUG]: guttersWiltonManorsFlPage,
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
