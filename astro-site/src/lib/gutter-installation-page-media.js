/**
 * Image overrides for /gutter-installation-south-florida/ (hero + content sections).
 */

const MEDIA = 'Media (AAGF)/Images (AAGF)'

export const GUTTER_INSTALLATION_SOUTH_FLORIDA_MEDIA = {
  hero: `${MEDIA}/all-american-gutters-gutter-installation-boca-raton-fl-front-porch-dark-gutters.png`,
  sections: {
    'aagf-install-reasons': {
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-deerfield-beach-fl-garage-dark-gutters.png`,
      imageAlt: 'Dark gutter installation on a South Florida home with a white garage',
    },
    'aagf-install-process': {
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-fort-lauderdale-fl-white-gutters-landscaping.png`,
      imageAlt: 'White seamless gutter installation on a landscaped South Florida home',
    },
  },
}

/**
 * Apply local gutter-installation media overrides onto a cityServicePage payload.
 * @param {object | null | undefined} cityPage
 * @param {string} slug
 * @returns {object | null | undefined}
 */
export function applyGutterInstallationPageMedia(cityPage, slug) {
  if (!cityPage || String(slug || '').trim() !== 'gutter-installation-south-florida') return cityPage

  const media = GUTTER_INSTALLATION_SOUTH_FLORIDA_MEDIA
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
