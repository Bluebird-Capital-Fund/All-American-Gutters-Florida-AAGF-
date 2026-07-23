/**
 * Image overrides for /gutter-replacement-south-florida/ (hero + content sections).
 */

const MEDIA = 'Media (AAGF)/Images (AAGF)'

export const GUTTER_REPLACEMENT_SOUTH_FLORIDA_MEDIA = {
  hero: `${MEDIA}/all-american-gutters-gutter-replacement-boca-raton-fl-white-system-two-story.png`,
  sections: {
    'aagf-replace-reasons': {
      imageSrc: `${MEDIA}/all-american-gutters-gutter-replacement-deerfield-beach-fl-lifting-white-section.png`,
      imageAlt: 'Technician lifting a white gutter section during replacement on a South Florida home',
    },
    'aagf-replace-process': {
      imageSrc: `${MEDIA}/all-american-gutters-gutter-replacement-fort-lauderdale-fl-copper-gutter-install.png`,
      imageAlt: 'Copper gutter replacement installation on a blue-sided South Florida home',
    },
  },
}

/**
 * Apply local gutter-replacement media overrides onto a cityServicePage payload.
 * @param {object | null | undefined} cityPage
 * @param {string} slug
 * @returns {object | null | undefined}
 */
export function applyGutterReplacementPageMedia(cityPage, slug) {
  if (!cityPage || String(slug || '').trim() !== 'gutter-replacement-south-florida') return cityPage

  const media = GUTTER_REPLACEMENT_SOUTH_FLORIDA_MEDIA
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
