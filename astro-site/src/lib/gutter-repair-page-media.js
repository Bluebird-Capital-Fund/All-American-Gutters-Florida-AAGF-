/**
 * Image overrides for /gutter-repair-south-florida/ (hero + content sections).
 */

const MEDIA = 'Media (AAGF)/Images (AAGF)'

export const GUTTER_REPAIR_SOUTH_FLORIDA_MEDIA = {
  hero: `${MEDIA}/all-american-gutters-gutter-repair-boca-raton-fl-white-gutters-curb-appeal.png`,
  sections: {
    'aagf-repair-problems': {
      imageSrc: `${MEDIA}/all-american-gutters-gutter-repair-deerfield-beach-fl-drill-securing-hanger.png`,
      imageAlt: 'Technician drilling a hanger to secure a white gutter during repair',
    },
    'aagf-repair-process': {
      imageSrc: `${MEDIA}/all-american-gutters-gutter-repair-fort-lauderdale-fl-joining-gutter-sections.png`,
      imageAlt: 'Hands joining white gutter sections during a South Florida repair',
    },
  },
}

/**
 * Apply local gutter-repair media overrides onto a cityServicePage payload.
 * @param {object | null | undefined} cityPage
 * @param {string} slug
 * @returns {object | null | undefined}
 */
export function applyGutterRepairPageMedia(cityPage, slug) {
  if (!cityPage || String(slug || '').trim() !== 'gutter-repair-south-florida') return cityPage

  const media = GUTTER_REPAIR_SOUTH_FLORIDA_MEDIA
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
