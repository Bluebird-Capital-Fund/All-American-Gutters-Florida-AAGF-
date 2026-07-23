/**
 * Optional media overrides for /lp/{slug}/ pages.
 * Projects carousel + section backgrounds/images for HomeMirrorPage.
 */

const MEDIA = 'Media (AAGF)/Images (AAGF)'

/** @type {Record<string, Array<{ imageSrc: string, imageAlt: string, location: string }>>} */
export const LP_PROJECTS_SLIDES = {
  'gutter-guards': [
    {
      imageSrc: `${MEDIA}/all-american-gutters-gutter-guards-boca-raton-fl-black-mesh-roofline.png`,
      imageAlt: 'Black gutter guards installed along a residential roofline in Boca Raton, FL',
      location: 'Boca Raton, FL',
    },
    {
      imageSrc: `${MEDIA}/all-american-gutters-gutter-guards-deerfield-beach-fl-mesh-closeup-stone.png`,
      imageAlt: 'Close-up of mesh gutter guards on a home with stone veneer in Deerfield Beach, FL',
      location: 'Deerfield Beach, FL',
    },
    {
      imageSrc: `${MEDIA}/all-american-gutters-gutter-guards-fort-lauderdale-fl-mesh-installation-landscape.png`,
      imageAlt: 'Gutter guard mesh installation overlooking landscaping in Fort Lauderdale, FL',
      location: 'Fort Lauderdale, FL',
    },
  ],
}

/**
 * @typedef {{ hero?: string, whyChoose?: string, whyChooseAlt?: string, services?: string, about?: string, uniquePoints?: string }} LpSectionMedia
 */

/** @type {Record<string, LpSectionMedia>} */
export const LP_SECTION_MEDIA = {
  'gutter-guards': {
    hero: `${MEDIA}/all-american-gutters-gutter-guards-lp-hero-black-mesh-roofline.png`,
    whyChoose: `${MEDIA}/all-american-gutters-gutter-guards-lp-why-choose-perforated-metal.png`,
    whyChooseAlt: 'Perforated metal gutter guards on a white gutter system',
    services: `${MEDIA}/all-american-gutters-gutter-guards-lp-services-white-solid-cover.png`,
    about: `${MEDIA}/all-american-gutters-gutter-guards-lp-about-dark-mesh-stone.png`,
    uniquePoints: `${MEDIA}/all-american-gutters-gutter-guards-lp-unique-points-tan-patio.png`,
  },
}

/**
 * @param {string} lpSlug
 * @returns {Array<{ imageSrc: string, imageAlt: string, location: string }> | null}
 */
export function getLpProjectsSlides(lpSlug) {
  const key = String(lpSlug || '').trim()
  const slides = LP_PROJECTS_SLIDES[key]
  return Array.isArray(slides) && slides.length > 0 ? slides : null
}

/**
 * @param {string} lpSlug
 * @returns {LpSectionMedia | null}
 */
export function getLpSectionMedia(lpSlug) {
  const key = String(lpSlug || '').trim()
  return LP_SECTION_MEDIA[key] || null
}
