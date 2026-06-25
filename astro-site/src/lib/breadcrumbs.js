import { canonicalPageUrl } from './canonical-url.js'
import { renameSouthFloridaGutterSlug, SERVICE_TITLE_SLUGS } from './service-routes.js'

/** @typedef {{ label: string, href?: string }} BreadcrumbItem */

export const HOME_CRUMB = /** @type {BreadcrumbItem} */ ({ label: 'Home', href: '/' })

const SLUG_LABEL_OVERRIDES = {
  'about-us': 'About Us',
  'contact-us': 'Contact Us',
  faqs: 'FAQ',
  'service-area': 'Service Area',
  'privacy-policy': 'Privacy Policy',
  'terms-of-service': 'Terms of Service',
  'thank-you': 'Thank You',
  blog: 'Blog',
  services: 'Services',
  reviews: 'Reviews',
  projects: 'Projects',
}

function titleCaseWords(str) {
  return String(str || '')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export function slugSegmentToLabel(segment) {
  const key = String(segment || '').toLowerCase()
  if (SLUG_LABEL_OVERRIDES[key]) return SLUG_LABEL_OVERRIDES[key]
  return titleCaseWords(key.replace(/-/g, ' '))
}

const SERVICE_SLUG_TO_LABEL = (() => {
  /** @type {Map<string, string>} */
  const map = new Map()
  for (const [title, slug] of Object.entries(SERVICE_TITLE_SLUGS)) {
    const canonical = renameSouthFloridaGutterSlug(slug)
    const label = titleCaseWords(title)
    const existing = map.get(canonical)
    if (!existing || label.length > existing.length) {
      map.set(canonical, label)
    }
  }
  return map
})()

/** Service name only — no South Florida / location wording. */
export function serviceSlugToLabel(slug) {
  const canonical = renameSouthFloridaGutterSlug(String(slug || '').replace(/^\/+|\/+$/g, ''))
  if (SERVICE_SLUG_TO_LABEL.has(canonical)) {
    return SERVICE_SLUG_TO_LABEL.get(canonical)
  }
  const stripped = canonical.replace(/-south-florida$/, '').replace(/-fl$/, '')
  return slugSegmentToLabel(stripped)
}

/** Location / city only — no "gutters" service wording. */
export function locationSlugToLabel(slug) {
  const s = String(slug || '').replace(/^\/+|\/+$/g, '')
  const guttersCity = s.match(/^gutters-(.+)-fl$/)
  if (guttersCity) return slugSegmentToLabel(guttersCity[1])
  const cityGutters = s.match(/^(.+)-gutters-fl$/)
  if (cityGutters) return slugSegmentToLabel(cityGutters[1])
  return slugSegmentToLabel(s)
}

export function isServicePageSlug(slug) {
  const canonical = renameSouthFloridaGutterSlug(String(slug || '').replace(/^\/+|\/+$/g, ''))
  if (SERVICE_SLUG_TO_LABEL.has(canonical)) return true
  return (
    /^gutter-[a-z]+-south-florida$/.test(canonical) ||
    canonical === 'aluminum-gutters-fl' ||
    canonical === 'copper-gutters-fl' ||
    canonical === 'screen-rooms-lanais-south-florida' ||
    canonical === 'underground-drainage-south-florida' ||
    canonical === 'siding-south-florida'
  )
}

/**
 * @param {string} slug
 * @returns {BreadcrumbItem[]}
 */
export function buildServiceBreadcrumbs(slug) {
  const canonical = renameSouthFloridaGutterSlug(String(slug || '').replace(/^\/+|\/+$/g, ''))
  return [
    HOME_CRUMB,
    { label: 'Services', href: '/services/' },
    { label: serviceSlugToLabel(canonical) },
  ]
}

/**
 * @param {string} slug
 * @returns {BreadcrumbItem[]}
 */
export function buildLocationBreadcrumbs(slug) {
  return [
    HOME_CRUMB,
    { label: 'Service Area', href: '/service-area/' },
    { label: locationSlugToLabel(slug) },
  ]
}

/**
 * @param {string} slug
 * @param {string} [title]
 * @returns {BreadcrumbItem[]}
 */
export function buildBlogPostBreadcrumbs(slug, title) {
  return [
    HOME_CRUMB,
    { label: 'Blog', href: '/blog/' },
    { label: title?.trim() || slugSegmentToLabel(slug) },
  ]
}

/**
 * @param {string} label
 * @returns {BreadcrumbItem[]}
 */
export function buildSimpleBreadcrumbs(label) {
  return [HOME_CRUMB, { label: label.trim() }]
}

/**
 * Build crumbs from a URL pathname (static pages, blog index, etc.).
 * Returns null on the homepage.
 * @param {string} pathname
 * @param {{ blogPostTitle?: string, currentLabel?: string }} [opts]
 * @returns {BreadcrumbItem[] | null}
 */
export function breadcrumbsForPathname(pathname, opts = {}) {
  const raw = String(pathname || '/').replace(/\/+$/, '') || '/'
  if (raw === '/' || raw === '') return null

  const segments = raw.split('/').filter(Boolean)
  if (!segments.length) return null

  if (segments[0] === 'locations' && segments.length === 2) {
    return buildLocationBreadcrumbs(segments[1])
  }

  if (segments[0] === 'blog') {
    if (segments.length === 1) {
      return [HOME_CRUMB, { label: 'Blog' }]
    }
    if (segments[1] === 'page' && segments[2]) {
      return [HOME_CRUMB, { label: 'Blog', href: '/blog/' }, { label: `Page ${segments[2]}` }]
    }
  }

  if (segments[0] === 'lp' && segments.length === 2) {
    return [HOME_CRUMB, { label: slugSegmentToLabel(segments[1]) }]
  }

  if (segments.length === 1) {
    const slug = segments[0]
    if (isServicePageSlug(slug)) {
      return buildServiceBreadcrumbs(slug)
    }
    if (opts.blogPostTitle) {
      return buildBlogPostBreadcrumbs(slug, opts.blogPostTitle)
    }
    return [HOME_CRUMB, { label: opts.currentLabel || slugSegmentToLabel(slug) }]
  }

  const items = [HOME_CRUMB]
  let path = ''
  for (let i = 0; i < segments.length; i += 1) {
    const seg = segments[i]
    path += `/${seg}`
    const isLast = i === segments.length - 1
    if (seg === 'page' && segments[i + 1] && /^\d+$/.test(segments[i + 1])) {
      items.push({ label: `Page ${segments[i + 1]}` })
      break
    }
    items.push({
      label: slugSegmentToLabel(seg),
      ...(isLast ? {} : { href: `${path}/` }),
    })
  }
  return items
}

/**
 * @param {BreadcrumbItem[]} items
 * @param {string} [currentPath]
 * @returns {string | null}
 */
export function breadcrumbListJsonLd(items, currentPath = '/') {
  if (!Array.isArray(items) || items.length < 2) return null

  const list = items.map((item, index) => {
    const entry = {
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
    }
    if (item.href) {
      entry.item = canonicalPageUrl(item.href)
    } else if (index === items.length - 1) {
      entry.item = canonicalPageUrl(currentPath)
    }
    return entry
  })

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: list,
  })
}
