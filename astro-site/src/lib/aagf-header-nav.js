/** Canonical header nav — kept in sync with scripts/patch-aagf-nav.mjs */

function navLink(label, href, key) {
  return { _type: 'navLinkItem', _key: key, label, href }
}

const SERVICE_DROPDOWN = [
  navLink('Gutter Repair', '/gutter-repair-south-florida/', 'aagf-nav-gutter-repair'),
  navLink('Gutter Cleaning', '/gutter-cleaning-south-florida/', 'aagf-nav-gutter-cleaning'),
  navLink('Gutter Replacement', '/gutter-replacement-south-florida/', 'aagf-nav-gutter-replacement'),
  navLink('Gutter Guards', '/gutter-guards-south-florida/', 'aagf-nav-gutter-guards'),
  navLink('Gutter Downspout', '/gutter-downspout-south-florida/', 'aagf-nav-gutter-downspout'),
  navLink('Roof Soffit', '/roof-soffit-south-florida/', 'aagf-nav-roof-soffit'),
  navLink('Roof Fascia', '/roof-fascia-south-florida/', 'aagf-nav-roof-fascia'),
]

const MATERIALS_DROPDOWN = [
  navLink('Aluminum Gutters', '/aluminum-gutters-fl/', 'aagf-nav-aluminum-gutters'),
  navLink('Copper Gutters', '/copper-gutters-fl/', 'aagf-nav-copper-gutters'),
]

/** About Us dropdown — matches scripts/patch-aagf-nav.mjs */
export function buildAboutDropdownLinks() {
  return [
    navLink('Our Process', '/#process', 'aagf-nav-process'),
    navLink('Why Choose Us', '/#why-us', 'aagf-nav-why-us'),
    navLink('Service Area', '/service-area/', 'aagf-nav-service-area'),
    navLink('FAQ', '/faqs/', 'aagf-nav-faq'),
    navLink('Free Estimate', '/#contact', 'aagf-nav-estimate'),
    navLink('About Us', '/about-us/', 'aagf-nav-about-page'),
    navLink('Contact Us', '/contact-us/', 'aagf-nav-contact'),
  ]
}

export function buildAagfHeaderNavItems() {
  return [
    {
      _type: 'navItem',
      _key: 'aagf-nav-services',
      label: 'Services',
      href: '/gutter-repair-south-florida/',
      dropdown: SERVICE_DROPDOWN,
    },
    {
      _type: 'navItem',
      _key: 'aagf-nav-materials',
      label: 'Materials',
      href: '/aluminum-gutters-fl/',
      dropdown: MATERIALS_DROPDOWN,
    },
    {
      _type: 'navItem',
      _key: 'aagf-nav-projects',
      label: 'Projects',
      href: '/projects/',
    },
    {
      _type: 'navItem',
      _key: 'aagf-nav-reviews',
      label: 'Reviews',
      href: '/reviews/',
    },
    {
      _type: 'navItem',
      _key: 'aagf-nav-about',
      label: 'About Us',
      href: '/about-us/',
      dropdown: buildAboutDropdownLinks(),
    },
  ]
}
