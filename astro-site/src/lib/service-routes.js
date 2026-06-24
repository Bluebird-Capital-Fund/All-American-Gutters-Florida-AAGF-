/** Canonical South Florida gutter service slugs. */
export const PRIMARY_SERVICES_HREF = '/gutter-installation-south-florida/'

/** Retired soffit/fascia pages redirect to the homepage. */
export const HOME_HREF = '/'

/** Retired super-gutters pages redirect to primary services. */
export const SUPER_GUTTERS_REMOVED_PREFIXES = ['super-gutters']

/** Retired soffit/fascia service slugs (prefix or exact match). */
export const SOFFIT_FASCIA_REMOVED_PREFIXES = [
  'soffit-fascia',
  'soffit-and-fascias',
  'soffit-repair',
  'fascia-repair',
  'roof-soffit',
  'roof-fascia',
]

/** @deprecated use SUPER_GUTTERS_REMOVED_PREFIXES + SOFFIT_FASCIA_REMOVED_PREFIXES */
export const REMOVED_SERVICE_SLUG_PREFIXES = [
  ...SUPER_GUTTERS_REMOVED_PREFIXES,
  ...SOFFIT_FASCIA_REMOVED_PREFIXES,
]

function matchesRemovedPrefix(slug, prefixes) {
  const s = String(slug || '')
    .trim()
    .toLowerCase()
    .replace(/^\/+|\/+$/g, '')
  return prefixes.some((prefix) => s === prefix || s.startsWith(`${prefix}-`))
}

export function isSoffitFasciaRemovedSlug(slug) {
  return matchesRemovedPrefix(slug, SOFFIT_FASCIA_REMOVED_PREFIXES)
}

export function isSuperGuttersRemovedSlug(slug) {
  return matchesRemovedPrefix(slug, SUPER_GUTTERS_REMOVED_PREFIXES)
}

export function isRemovedServiceSlug(slug) {
  return isSuperGuttersRemovedSlug(slug) || isSoffitFasciaRemovedSlug(slug)
}

/** Redirect target for a retired service slug. */
export function removedServiceHref(slug) {
  if (isSoffitFasciaRemovedSlug(slug)) return HOME_HREF
  if (isSuperGuttersRemovedSlug(slug)) return PRIMARY_SERVICES_HREF
  return PRIMARY_SERVICES_HREF
}

/** Old slug → new `gutters-south-florida` family (no leading/trailing slashes). */
export const SOUTH_FLORIDA_GUTTER_SLUG_RENAMES = {
  'gutters-south-florida': 'gutter-installation-south-florida',
  'seamless-gutters-south-florida': 'gutter-installation-south-florida',
  'gutters-south-florida-repair': 'gutter-repair-south-florida',
  'gutters-south-florida-replacement': 'gutter-replacement-south-florida',
  'gutters-south-florida-cleaning': 'gutter-cleaning-south-florida',
  'gutters-south-florida-maintenance': 'gutter-maintenance-south-florida',
  'gutters-south-florida-guards': 'gutter-guards-south-florida',
  'gutters-south-florida-downspout': 'gutter-downspout-south-florida',
  'aluminum-gutters-south-florida': 'aluminum-gutters-fl',
  'aluminum-gutters-tampa-fl': 'aluminum-gutters-fl',
  'copper-gutters-south-florida': 'copper-gutters-fl',
  'copper-gutters-tampa-fl': 'copper-gutters-fl',
  'gutter-installation-tampa-fl': 'gutter-installation-south-florida',
  'seamless-gutters-tampa-fl': 'gutter-installation-south-florida',
  'gutter-repair-tampa-fl': 'gutter-repair-south-florida',
  'gutter-replacement-tampa-fl': 'gutter-replacement-south-florida',
  'gutter-cleaning-tampa-fl': 'gutter-cleaning-south-florida',
  'gutter-maintenance-tampa-fl': 'gutter-maintenance-south-florida',
  'gutter-guards-tampa-fl': 'gutter-guards-south-florida',
  'gutter-downspout-tampa-fl': 'gutter-downspout-south-florida',
}

export const SOUTH_FLORIDA_GUTTER_SERVICE_HREFS = {
  installation: '/gutter-installation-south-florida/',
  repair: '/gutter-repair-south-florida/',
  replacement: '/gutter-replacement-south-florida/',
  cleaning: '/gutter-cleaning-south-florida/',
  maintenance: '/gutter-maintenance-south-florida/',
  guards: '/gutter-guards-south-florida/',
  downspout: '/gutter-downspout-south-florida/',
  aluminum: '/aluminum-gutters-fl/',
  copper: '/copper-gutters-fl/',
}

export const LEGACY_SERVICE_HREF_MAP = {
  '/seamless-gutters/': '/gutter-installation-south-florida/',
  '/gutters-south-florida/': '/gutter-installation-south-florida/',
  '/gutters-south-florida-cleaning/': '/gutter-cleaning-south-florida/',
  '/gutters-south-florida-replacement/': '/gutter-replacement-south-florida/',
  '/gutters-south-florida-maintenance/': '/gutter-maintenance-south-florida/',
  '/gutters-south-florida-guards/': '/gutter-guards-south-florida/',
  '/gutters-south-florida-downspout/': '/gutter-downspout-south-florida/',
  '/soffit-and-fascias/': HOME_HREF,
  '/soffit-repair-south-florida/': HOME_HREF,
  '/fascia-repair-south-florida/': HOME_HREF,
  '/roof-fascia-south-florida/': HOME_HREF,
  '/roof-soffit-south-florida/': HOME_HREF,
  '/aluminum-gutters-south-florida/': '/aluminum-gutters-fl/',
  '/copper-gutters-south-florida/': '/copper-gutters-fl/',
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
  'gutter guards': 'gutter-guards-south-florida',
  'gutter downspout': 'gutter-downspout-south-florida',
  'gutter downspouts': 'gutter-downspout-south-florida',
  'aluminum gutters': 'aluminum-gutters-fl',
  'copper gutters': 'copper-gutters-fl',
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
  if (key === 'super gutters') return PRIMARY_SERVICES_HREF
  const slug = SERVICE_TITLE_SLUGS[key]
  if (slug && isSoffitFasciaRemovedSlug(slug)) return HOME_HREF
  return slug ? `/${slug}/` : PRIMARY_SERVICES_HREF
}
