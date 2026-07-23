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
  'gutter-installation': [
    {
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-boca-raton-fl-white-gutters-garage-exterior.png`,
      imageAlt: 'White seamless gutter installation on a two-story home with garage in Boca Raton, FL',
      location: 'Boca Raton, FL',
    },
    {
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-deerfield-beach-fl-dark-gutters-modern-farmhouse.png`,
      imageAlt: 'Dark seamless gutter installation on a modern farmhouse in Deerfield Beach, FL',
      location: 'Deerfield Beach, FL',
    },
    {
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-fort-lauderdale-fl-white-gutters-landscaping.png`,
      imageAlt: 'White seamless gutter installation on a landscaped home in Fort Lauderdale, FL',
      location: 'Fort Lauderdale, FL',
    },
  ],
  'gutter-replacement': [
    {
      imageSrc: `${MEDIA}/all-american-gutters-gutter-replacement-boca-raton-fl-copper-gutter-install.png`,
      imageAlt: 'Copper gutter replacement installation on a blue-sided home in Boca Raton, FL',
      location: 'Boca Raton, FL',
    },
    {
      imageSrc: `${MEDIA}/all-american-gutters-gutter-replacement-deerfield-beach-fl-dark-brown-stone-home.png`,
      imageAlt: 'Dark brown gutter replacement on a stone-accent home in Deerfield Beach, FL',
      location: 'Deerfield Beach, FL',
    },
    {
      imageSrc: `${MEDIA}/all-american-gutters-gutter-replacement-fort-lauderdale-fl-black-gutters-ranch.png`,
      imageAlt: 'Black gutter replacement on a charcoal ranch home in Fort Lauderdale, FL',
      location: 'Fort Lauderdale, FL',
    },
  ],
  'gutter-repair': [
    {
      imageSrc: `${MEDIA}/all-american-gutters-gutter-repair-boca-raton-fl-dark-gutter-downspout.png`,
      imageAlt: 'Dark gutter and downspout repair on a residential roofline in Boca Raton, FL',
      location: 'Boca Raton, FL',
    },
    {
      imageSrc: `${MEDIA}/all-american-gutters-gutter-repair-deerfield-beach-fl-dark-downspout-corner.png`,
      imageAlt: 'Dark downspout and gutter corner detail on a green-sided home in Deerfield Beach, FL',
      location: 'Deerfield Beach, FL',
    },
    {
      imageSrc: `${MEDIA}/all-american-gutters-gutter-repair-fort-lauderdale-fl-white-gutters-curb-appeal.png`,
      imageAlt: 'White gutter system on a stone and siding home in Fort Lauderdale, FL',
      location: 'Fort Lauderdale, FL',
    },
  ],
  gutters: [
    {
      imageSrc: `${MEDIA}/all-american-gutters-lp-gutters-boca-raton-fl-dark-downspout-corner.png`,
      imageAlt: 'Dark downspout and gutter corner on a green-sided home in Boca Raton, FL',
      location: 'Boca Raton, FL',
    },
    {
      imageSrc: `${MEDIA}/all-american-gutters-lp-gutters-deerfield-beach-fl-copper-gutter-install.png`,
      imageAlt: 'Copper gutter installation on a blue-sided home in Deerfield Beach, FL',
      location: 'Deerfield Beach, FL',
    },
    {
      imageSrc: `${MEDIA}/all-american-gutters-lp-gutters-fort-lauderdale-fl-white-gutters-curb-appeal.png`,
      imageAlt: 'White gutter system on a stone and siding home in Fort Lauderdale, FL',
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
  'gutter-installation': {
    hero: `${MEDIA}/all-american-gutters-gutter-installation-lp-hero-white-downspout-roof.png`,
    whyChoose: `${MEDIA}/all-american-gutters-gutter-installation-lp-why-choose-black-gutter-metal-roof.png`,
    whyChooseAlt: 'Black gutter installation on a modern home with a metal roof',
    services: `${MEDIA}/all-american-gutters-gutter-installation-lp-services-white-gutter-fence.png`,
    about: `${MEDIA}/all-american-gutters-gutter-installation-lp-about-dark-gutters-garage.png`,
    uniquePoints: `${MEDIA}/all-american-gutters-gutter-installation-lp-unique-points-front-porch.png`,
  },
  'gutter-replacement': {
    hero: `${MEDIA}/all-american-gutters-gutter-replacement-lp-hero-white-gutters-navy-stucco.png`,
    whyChoose: `${MEDIA}/all-american-gutters-gutter-replacement-lp-why-choose-white-downspout-stone.png`,
    whyChooseAlt: 'White downspout and gutter replacement on a home with stone pillars',
    services: `${MEDIA}/all-american-gutters-gutter-replacement-lp-services-white-system-two-story.png`,
    about: `${MEDIA}/all-american-gutters-gutter-replacement-lp-about-drill-securing-gutter.png`,
    uniquePoints: `${MEDIA}/all-american-gutters-gutter-replacement-lp-unique-points-lifting-white-section.png`,
  },
  'gutter-repair': {
    hero: `${MEDIA}/all-american-gutters-gutter-repair-lp-hero-white-gutters-curb-appeal.png`,
    whyChoose: `${MEDIA}/all-american-gutters-gutter-repair-lp-why-choose-drill-securing-hanger.png`,
    whyChooseAlt: 'Technician drilling a hanger to secure a white gutter during repair',
    services: `${MEDIA}/all-american-gutters-gutter-repair-lp-services-installing-white-section.png`,
    about: `${MEDIA}/all-american-gutters-gutter-repair-lp-about-joining-gutter-sections.png`,
    uniquePoints: `${MEDIA}/all-american-gutters-gutter-repair-lp-unique-points-screwdriver-hanger.png`,
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
