import { asStr } from './sanity-strings.js'

const CITY_SLUG_TO_LABEL = {
  'deerfield-beach': 'Deerfield Beach, FL',
  'boca-raton': 'Boca Raton, FL',
  'pompano-beach': 'Pompano Beach, FL',
  'fort-lauderdale': 'Fort Lauderdale, FL',
  'delray-beach': 'Delray Beach, FL',
  'coral-springs': 'Coral Springs, FL',
  hollywood: 'Hollywood, FL',
  'west-palm-beach': 'West Palm Beach, FL',
  'boynton-beach': 'Boynton Beach, FL',
  'palm-beach-gardens': 'Palm Beach Gardens, FL',
  'lighthouse-point': 'Lighthouse Point, FL',
  'highland-beach': 'Highland Beach, FL',
  'oakland-park': 'Oakland Park, FL',
  plantation: 'Plantation, FL',
  sunrise: 'Sunrise, FL',
}

const LEGACY_LOCATION_RE =
  /apollo beach|brandon|clearwater|lakeland|lutz|plant city|riverview|st\.?\s*petersburg|tampa|valrico|wesley chapel|hillsborough|pinellas|polk county|seffner/i

/** @param {string} imageSrc */
export function locationLabelFromImageSrc(imageSrc) {
  const filename = String(imageSrc || '').split('/').pop().toLowerCase()
  const match = filename.match(
    /all-american-gutters-(?:gutter-(?:installation|repair|replacement|cleaning|guards)-)([a-z]+(?:-[a-z]+)+)-fl-/,
  )
  if (!match) return null
  const slug = match[1]
  if (CITY_SLUG_TO_LABEL[slug]) return CITY_SLUG_TO_LABEL[slug]
  const words = slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1))
  return `${words.join(' ')}, FL`
}

/** Prefer CMS location unless it is legacy Tampa-area copy; then read city from image filename. */
export function projectSlideLocation(slide) {
  const fromCms = asStr(slide?.location).trim()
  if (fromCms && !LEGACY_LOCATION_RE.test(fromCms)) return fromCms
  return locationLabelFromImageSrc(asStr(slide?.imageSrc)) || 'Deerfield Beach, FL'
}
