/**
 * Image overrides for /gutter-guards-south-florida/ (hero + content sections).
 */

const MEDIA = 'Media (AAGF)/Images (AAGF)'

export const GUTTER_GUARDS_SOUTH_FLORIDA_MEDIA = {
  hero: `${MEDIA}/all-american-gutters-gutter-guards-boca-raton-fl-black-mesh-roofline.png`,
  sections: {
    'aagf-guards-clogging': {
      imageSrc: `${MEDIA}/all-american-gutters-gutter-guards-deerfield-beach-fl-mesh-closeup-stone.png`,
      imageAlt: 'Close-up of mesh gutter guards on a South Florida home with stone veneer',
    },
    'aagf-guards-process': {
      imageSrc: `${MEDIA}/all-american-gutters-gutter-guards-fort-lauderdale-fl-mesh-installation-landscape.png`,
      imageAlt: 'Gutter guard mesh installation along a South Florida roofline',
    },
  },
}

/**
 * Apply local gutter-guards media overrides onto a cityServicePage payload.
 * @param {object | null | undefined} cityPage
 * @param {string} slug
 * @returns {object | null | undefined}
 */
export function applyGutterGuardsPageMedia(cityPage, slug) {
  if (!cityPage || String(slug || '').trim() !== 'gutter-guards-south-florida') return cityPage

  const media = GUTTER_GUARDS_SOUTH_FLORIDA_MEDIA
  const layoutBackgrounds = {
    ...(cityPage.layoutBackgrounds || {}),
    hero: {
      ...(cityPage.layoutBackgrounds?.hero || {}),
      imageSrc: media.hero,
    },
  }

  const contentSections = Array.isArray(cityPage.contentSections)
    ? cityPage.contentSections.map((sec) => {
        const key = String(sec?._key || '').trim()
        const override = media.sections[key]
        if (!override) return sec
        return {
          ...sec,
          imageSrc: override.imageSrc,
          imageAlt: override.imageAlt,
        }
      })
    : cityPage.contentSections

  return {
    ...cityPage,
    layoutBackgrounds,
    contentSections,
  }
}
