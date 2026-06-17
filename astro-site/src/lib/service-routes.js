/** Canonical South Florida gutter service slugs. */
export const PRIMARY_SERVICES_HREF = '/gutters-south-florida/'

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
  'gutter-installation-south-florida': 'gutters-south-florida',
  'seamless-gutters-south-florida': 'gutters-south-florida',
  'gutters-south-florida-repair': 'gutter-repair-south-florida',
  'gutter-replacement-south-florida': 'gutters-south-florida-replacement',
  'gutter-cleaning-south-florida': 'gutters-south-florida-cleaning',
  'gutter-guards-south-florida': 'gutters-south-florida-guards',
  'gutter-installation-tampa-fl': 'gutters-south-florida',
  'seamless-gutters-tampa-fl': 'gutters-south-florida',
  'gutter-repair-tampa-fl': 'gutter-repair-south-florida',
  'gutter-replacement-tampa-fl': 'gutters-south-florida-replacement',
  'gutter-cleaning-tampa-fl': 'gutters-south-florida-cleaning',
  'gutter-guards-tampa-fl': 'gutters-south-florida-guards',
}

export const SOUTH_FLORIDA_GUTTER_SERVICE_HREFS = {
  installation: '/gutters-south-florida/',
  repair: '/gutter-repair-south-florida/',
  replacement: '/gutters-south-florida-replacement/',
  cleaning: '/gutters-south-florida-cleaning/',
  guards: '/gutters-south-florida-guards/',
}

export const LEGACY_SERVICE_HREF_MAP = {
  '/seamless-gutters/': '/gutters-south-florida/',
  '/soffit-and-fascias/': '/gutters-south-florida/',
  '/screen-rooms-and-lanais/': '/screen-rooms-lanais-south-florida/',
  '/underground-drainage/': '/underground-drainage-south-florida/',
  '/siding/': '/siding-south-florida/',
}

/** Lowercase service title → slug (no leading/trailing slashes). */
export const SERVICE_TITLE_SLUGS = {
  'gutter services': 'gutters-south-florida',
  'gutter installation': 'gutters-south-florida',
  'gutter repair': 'gutter-repair-south-florida',
  'gutter replacement': 'gutters-south-florida-replacement',
  'gutter cleaning': 'gutters-south-florida-cleaning',
  'gutter guards': 'gutters-south-florida-guards',
  'seamless gutters': 'gutters-south-florida',
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
