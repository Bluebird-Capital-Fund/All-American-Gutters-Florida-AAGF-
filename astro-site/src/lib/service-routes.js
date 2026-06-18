/** Canonical South Florida gutter service slugs. */
export const PRIMARY_SERVICES_HREF = '/gutter-installation-south-florida/'

/** Retired service pages (slug prefix); links redirect to PRIMARY_SERVICES_HREF. */
export const REMOVED_SERVICE_SLUG_PREFIXES = ['super-gutters', 'soffit-fascia']

export function isRemovedServiceSlug(slug) {
  const s = String(slug || '')
    .trim()
    .toLowerCase()
    .replace(/^\/+|\/+$/g, '')
  return REMOVED_SERVICE_SLUG_PREFIXES.some((prefix) => s === prefix || s.startsWith(`${prefix}-`))
}

/** Old slug → new `gutters-south-florida` family (no leading/trailing slashes). */
export const SOUTH_FLORIDA_GUTTER_SLUG_RENAMES = {
  'gutters-south-florida': 'gutter-installation-south-florida',
  'seamless-gutters-south-florida': 'gutter-installation-south-florida',
  'gutters-south-florida-repair': 'gutter-repair-south-florida',
  'gutters-south-florida-replacement': 'gutter-replacement-south-florida',
  'gutters-south-florida-cleaning': 'gutter-cleaning-south-florida',
  'gutters-south-florida-maintenance': 'gutter-maintenance-south-florida',
  'gutter-guards-south-florida': 'gutters-south-florida-guards',
  'gutter-installation-tampa-fl': 'gutter-installation-south-florida',
  'seamless-gutters-tampa-fl': 'gutter-installation-south-florida',
  'gutter-repair-tampa-fl': 'gutter-repair-south-florida',
  'gutter-replacement-tampa-fl': 'gutter-replacement-south-florida',
  'gutter-cleaning-tampa-fl': 'gutter-cleaning-south-florida',
  'gutter-maintenance-tampa-fl': 'gutter-maintenance-south-florida',
  'gutter-guards-tampa-fl': 'gutters-south-florida-guards',
}

export const SOUTH_FLORIDA_GUTTER_SERVICE_HREFS = {
  installation: '/gutter-installation-south-florida/',
  repair: '/gutter-repair-south-florida/',
  replacement: '/gutter-replacement-south-florida/',
  cleaning: '/gutter-cleaning-south-florida/',
  maintenance: '/gutter-maintenance-south-florida/',
  guards: '/gutters-south-florida-guards/',
}

export const LEGACY_SERVICE_HREF_MAP = {
  '/seamless-gutters/': '/gutter-installation-south-florida/',
  '/gutters-south-florida/': '/gutter-installation-south-florida/',
  '/soffit-and-fascias/': '/gutter-installation-south-florida/',
  '/gutters-south-florida-cleaning/': '/gutter-cleaning-south-florida/',
  '/gutters-south-florida-replacement/': '/gutter-replacement-south-florida/',
  '/gutters-south-florida-maintenance/': '/gutter-maintenance-south-florida/',
  '/screen-rooms-and-lanais/': '/screen-rooms-lanais-south-florida/',
  '/underground-drainage/': '/underground-drainage-south-florida/',
  '/siding/': '/siding-south-florida/',
}

/** Lowercase service title → slug (no leading/trailing slashes). */
export const SERVICE_TITLE_SLUGS = {
  'gutter services': 'gutter-installation-south-florida',
  'gutter installation': 'gutter-installation-south-florida',
  'gutter repair': 'gutter-repair-south-florida',
  'gutter replacement': 'gutter-replacement-south-florida',
  'gutter cleaning': 'gutter-cleaning-south-florida',
  'gutter maintenance': 'gutter-maintenance-south-florida',
  'gutter guards': 'gutters-south-florida-guards',
  'seamless gutters': 'gutter-installation-south-florida',
  'screen rooms & lanais': 'screen-rooms-lanais-south-florida',
  'screen rooms and lanais': 'screen-rooms-lanais-south-florida',
  'underground drainage': 'underground-drainage-south-florida',
  siding: 'siding-south-florida',
}

/** @param {string} slugOrPath */
export function renameSouthFloridaGutterSlug(slugOrPath) {
  const raw = String(slugOrPath || '').trim().replace(/^\/+|\/+$/g, '')
  if (!raw) return raw
  const tampaFixed = raw.replace(/-tampa-fl/gi, '-south-florida')
  return SOUTH_FLORIDA_GUTTER_SLUG_RENAMES[tampaFixed] || tampaFixed
}

/**
 * All slugs that resolve to the same `cityServicePage` (CMS slug + canonical + legacy aliases).
 * @param {string} slugOrPath
 * @returns {string[]}
 */
export function cityServiceSlugAliases(slugOrPath) {
  const raw = String(slugOrPath || '')
    .trim()
    .replace(/^\/+|\/+$/g, '')
  if (!raw) return []
  const canonical = renameSouthFloridaGutterSlug(raw)
  const out = new Set([raw, canonical])
  for (const [old, neu] of Object.entries(SOUTH_FLORIDA_GUTTER_SLUG_RENAMES)) {
    if (old === raw || neu === raw || neu === canonical) {
      out.add(old)
      out.add(neu)
    }
  }
  return [...out]
}

/**
 * Expand Sanity `cityServicePage` slugs for static path generation (canonical + legacy URLs).
 * @param {string[]} cmsSlugs
 * @returns {string[]}
 */
export function expandCityServiceSlugsForBuild(cmsSlugs) {
  const out = new Set()
  for (const s of cmsSlugs) {
    for (const alias of cityServiceSlugAliases(s)) out.add(alias)
  }
  return [...out]
}

/** Rewrite legacy paths to the `gutters-south-florida` slug family. */
export function rewriteLegacyServiceHref(href) {
  if (typeof href !== 'string') return href
  const trimmed = href.trim()
  if (!trimmed.startsWith('/')) return href
  const path = trimmed.replace(/\/+$/, '').slice(1)
  const slug = renameSouthFloridaGutterSlug(path)
  if (slug === path) return href
  return `/${slug}/`
}

/** @deprecated use rewriteLegacyServiceHref */
export function rewriteTampaServiceSlug(href) {
  return rewriteLegacyServiceHref(href)
}

export function serviceTitleToHref(title) {
  if (!title) return PRIMARY_SERVICES_HREF
  const key = String(title).trim().toLowerCase()
  if (key === 'super gutters' || key === 'soffit & fascia' || key === 'soffit and fascia') {
    return PRIMARY_SERVICES_HREF
  }
  const slug = SERVICE_TITLE_SLUGS[key]
  return slug ? `/${slug}/` : PRIMARY_SERVICES_HREF
}
