/**
 * Optional projects-carousel overrides for /lp/{slug}/ pages.
 * When present, HomeMirrorPage uses these slides instead of Sanity homePage.projects.slides.
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
 * @param {string} lpSlug
 * @returns {Array<{ imageSrc: string, imageAlt: string, location: string }> | null}
 */
export function getLpProjectsSlides(lpSlug) {
  const key = String(lpSlug || '').trim()
  const slides = LP_PROJECTS_SLIDES[key]
  return Array.isArray(slides) && slides.length > 0 ? slides : null
}
