/** Canonical header nav + footer Services/Materials — kept in sync with patch scripts. */

function navLink(label, href, key) {
  return { _type: 'navLinkItem', _key: key, label, href }
}

function footerLink(label, href, key) {
  return { _type: 'footerColumnLink', _key: key, label, href }
}

const SERVICE_DROPDOWN = [
  navLink('Gutter Repair', '/gutter-repair-south-florida/', 'aagf-nav-gutter-repair'),
  navLink('Gutter Cleaning', '/gutter-cleaning-south-florida/', 'aagf-nav-gutter-cleaning'),
  navLink('Gutter Replacement', '/gutter-replacement-south-florida/', 'aagf-nav-gutter-replacement'),
  navLink('Gutter Installation', '/gutter-installation-south-florida/', 'aagf-nav-gutter-installation'),
  navLink('Gutter Maintenance', '/gutter-maintenance-south-florida/', 'aagf-nav-gutter-maintenance'),
  navLink('Gutter Guards', '/gutter-guards-south-florida/', 'aagf-nav-gutter-guards'),
  navLink('Gutter Downspout', '/gutter-downspout-south-florida/', 'aagf-nav-gutter-downspout'),
]

const MATERIALS_DROPDOWN = [
  navLink('Aluminum Gutters', '/aluminum-gutters-fl/', 'aagf-nav-aluminum-gutters'),
  navLink('Copper Gutters', '/copper-gutters-fl/', 'aagf-nav-copper-gutters'),
]

/** About Us dropdown — matches scripts/patch-aagf-nav.mjs */
export function buildAboutDropdownLinks() {
  return [
    navLink('Service Area', '/service-area/', 'aagf-nav-service-area'),
    navLink('FAQ', '/faqs/', 'aagf-nav-faq'),
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

const FOOTER_COMPANY_LINKS = [
  footerLink('About Us', '/about-us/', 'aagf-ft-about'),
  footerLink('Projects', '/projects/', 'aagf-ft-projects'),
  footerLink('Reviews', '/reviews/', 'aagf-ft-reviews'),
  footerLink('Service Area', '/service-area/', 'aagf-ft-service-area'),
  footerLink('FAQ', '/faqs/', 'aagf-ft-faq'),
  footerLink('Contact Us', '/contact-us/', 'aagf-ft-contact'),
  footerLink('Blog', '/blog/', 'aagf-ft-blog'),
]

/** Footer columns — Services links match header nav dropdown. */
export function buildAagfFooterColumns() {
  return [
    {
      _type: 'footerColumn',
      _key: 'aagf-footer-services',
      heading: 'Services',
      ariaLabel: 'Footer services',
      links: SERVICE_DROPDOWN.map((link) =>
        footerLink(link.label, link.href, link._key.replace('aagf-nav-', 'aagf-ft-')),
      ),
    },
    {
      _type: 'footerColumn',
      _key: 'aagf-footer-company',
      heading: 'Company',
      ariaLabel: 'Footer company links',
      links: FOOTER_COMPANY_LINKS,
    },
    {
      _type: 'footerColumn',
      _key: 'aagf-footer-contact',
      heading: 'Contact Info',
      hoursHeading: 'Hours',
      hoursText: 'Open 24/7',
    },
  ]
}
