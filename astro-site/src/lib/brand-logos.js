/**
 * Site logos — header/nav uses the white transparent PNG; footer keeps a separate asset until swapped.
 */
import { mediaUrl } from './sanity-strings.js'

export const AAGF_NAV_LOGO_REL =
  'Media (AAGF)/Logo Suite (AAGF)/(White BG Transparent PNG) AMERICAN-01.png'

/** Dark footer background — transparent PNG tuned for navy. */
export const AAGF_SITE_LOGO_REL =
  'Media (AAGF)/Logo Suite (AAGF)/(Black BG Transparent PNG) AMERICAN-01.png'

export function aagfNavLogoUrl() {
  return mediaUrl(AAGF_NAV_LOGO_REL)
}

export function aagfSiteLogoUrl() {
  return mediaUrl(AAGF_SITE_LOGO_REL)
}
