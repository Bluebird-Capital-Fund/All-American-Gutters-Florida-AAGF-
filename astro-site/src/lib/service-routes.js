/** Canonical Boca Raton gutter service slugs. */
export const PRIMARY_SERVICES_HREF = '/boca-raton-gutter-installation-fl/'

/** Services hub — redirect target for retired gutter maintenance pages. */
export const SERVICES_HUB_HREF = '/services/'

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

/** Retired gutter maintenance service slugs (prefix or exact match). */
export const GUTTER_MAINTENANCE_REMOVED_PREFIXES = ['gutter-maintenance', 'gutters-south-florida-maintenance']

/** @deprecated use SUPER_GUTTERS_REMOVED_PREFIXES + SOFFIT_FASCIA_REMOVED_PREFIXES + GUTTER_MAINTENANCE_REMOVED_PREFIXES */
export const REMOVED_SERVICE_SLUG_PREFIXES = [
  ...SUPER_GUTTERS_REMOVED_PREFIXES,
  ...SOFFIT_FASCIA_REMOVED_PREFIXES,
  ...GUTTER_MAINTENANCE_REMOVED_PREFIXES,
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

export function isGutterMaintenanceRemovedSlug(slug) {
  return matchesRemovedPrefix(slug, GUTTER_MAINTENANCE_REMOVED_PREFIXES)
}

export function isRemovedServiceSlug(slug) {
  return (
    isSuperGuttersRemovedSlug(slug) ||
    isSoffitFasciaRemovedSlug(slug) ||
    isGutterMaintenanceRemovedSlug(slug)
  )
}

/** Redirect target for a retired service slug. */
export function removedServiceHref(slug) {
  if (isSoffitFasciaRemovedSlug(slug)) return HOME_HREF
  if (isGutterMaintenanceRemovedSlug(slug)) return SERVICES_HUB_HREF
  if (isSuperGuttersRemovedSlug(slug)) return PRIMARY_SERVICES_HREF
  return PRIMARY_SERVICES_HREF
}

/** Old slug → new Boca Raton family (no leading/trailing slashes). */
export const SOUTH_FLORIDA_GUTTER_SLUG_RENAMES = {
  'seamless-gutters-south-florida': 'boca-raton-gutter-installation-fl',
  'gutters-south-florida-repair': 'gutter-repair-boca-raton-fl',
  'gutters-south-florida-replacement': 'gutter-replacement-boca-raton-fl',
  'gutters-south-florida-cleaning': 'gutter-cleaning-boca-raton-fl',
  'gutters-south-florida-guards': 'boca-raton-gutter-leaf-guards-fl',
  'gutters-south-florida-downspout': 'downspout-boca-raton-fl',
  'gutter-repair-south-florida': 'gutter-repair-boca-raton-fl',
  'gutter-installation-south-florida': 'boca-raton-gutter-installation-fl',
  'gutter-cleaning-south-florida': 'gutter-cleaning-boca-raton-fl',
  'gutter-replacement-south-florida': 'gutter-replacement-boca-raton-fl',
  'gutter-guards-south-florida': 'boca-raton-gutter-leaf-guards-fl',
  'gutter-downspout-south-florida': 'downspout-boca-raton-fl',
  'aluminum-gutters-south-florida': 'aluminum-gutters-boca-raton-fl',
  'aluminum-gutters-tampa-fl': 'aluminum-gutters-boca-raton-fl',
  'aluminum-gutters-fl': 'aluminum-gutters-boca-raton-fl',
  'copper-gutters-south-florida': 'copper-gutters-boca-raton-fl',
  'copper-gutters-tampa-fl': 'copper-gutters-boca-raton-fl',
  'copper-gutters-fl': 'copper-gutters-boca-raton-fl',
  'gutter-installation-tampa-fl': 'boca-raton-gutter-installation-fl',
  'seamless-gutters-tampa-fl': 'boca-raton-gutter-installation-fl',
  'gutter-repair-tampa-fl': 'gutter-repair-boca-raton-fl',
  'gutter-replacement-tampa-fl': 'gutter-replacement-boca-raton-fl',
  'gutter-cleaning-tampa-fl': 'gutter-cleaning-boca-raton-fl',
  'gutter-guards-tampa-fl': 'boca-raton-gutter-leaf-guards-fl',
  'gutter-downspout-tampa-fl': 'downspout-boca-raton-fl',
}

export const SOUTH_FLORIDA_GUTTER_SERVICE_HREFS = {
  installation: '/boca-raton-gutter-installation-fl/',
  repair: '/gutter-repair-boca-raton-fl/',
  replacement: '/gutter-replacement-boca-raton-fl/',
  cleaning: '/gutter-cleaning-boca-raton-fl/',
  maintenance: SERVICES_HUB_HREF,
  guards: '/boca-raton-gutter-leaf-guards-fl/',
  downspout: '/downspout-boca-raton-fl/',
  aluminum: '/aluminum-gutters-boca-raton-fl/',
  copper: '/copper-gutters-boca-raton-fl/',
}

export const LEGACY_SERVICE_HREF_MAP = {
  '/seamless-gutters/': '/boca-raton-gutter-installation-fl/',
  '/gutters-south-florida-cleaning/': '/gutter-cleaning-boca-raton-fl/',
  '/gutters-south-florida-replacement/': '/gutter-replacement-boca-raton-fl/',
  '/gutters-south-florida-maintenance/': SERVICES_HUB_HREF,
  '/gutter-maintenance-south-florida/': SERVICES_HUB_HREF,
  '/gutter-maintenance-tampa-fl/': SERVICES_HUB_HREF,
  '/gutters-south-florida-guards/': '/boca-raton-gutter-leaf-guards-fl/',
  '/gutters-south-florida-downspout/': '/downspout-boca-raton-fl/',
  '/gutter-repair-south-florida/': '/gutter-repair-boca-raton-fl/',
  '/gutter-installation-south-florida/': '/boca-raton-gutter-installation-fl/',
  '/gutter-cleaning-south-florida/': '/gutter-cleaning-boca-raton-fl/',
  '/gutter-replacement-south-florida/': '/gutter-replacement-boca-raton-fl/',
  '/gutter-guards-south-florida/': '/boca-raton-gutter-leaf-guards-fl/',
  '/gutter-downspout-south-florida/': '/downspout-boca-raton-fl/',
  '/aluminum-gutters-fl/': '/aluminum-gutters-boca-raton-fl/',
  '/copper-gutters-fl/': '/copper-gutters-boca-raton-fl/',
  '/soffit-and-fascias/': HOME_HREF,
  '/soffit-repair-south-florida/': HOME_HREF,
  '/fascia-repair-south-florida/': HOME_HREF,
  '/roof-fascia-south-florida/': HOME_HREF,
  '/roof-soffit-south-florida/': HOME_HREF,
  '/aluminum-gutters-south-florida/': '/aluminum-gutters-boca-raton-fl/',
  '/copper-gutters-south-florida/': '/copper-gutters-boca-raton-fl/',
  '/screen-rooms-and-lanais/': '/screen-rooms-lanais-south-florida/',
  '/underground-drainage/': '/underground-drainage-south-florida/',
  '/siding/': '/siding-south-florida/',
}

/** Lowercase service title → slug (no leading/trailing slashes). */
export const SERVICE_TITLE_SLUGS = {
  'gutter services': 'boca-raton-gutter-installation-fl',
  'gutter installation': 'boca-raton-gutter-installation-fl',
  'gutter repair': 'gutter-repair-boca-raton-fl',
  'gutter replacement': 'gutter-replacement-boca-raton-fl',
  'gutter cleaning': 'gutter-cleaning-boca-raton-fl',
  'gutter guards': 'boca-raton-gutter-leaf-guards-fl',
  'gutter leaf guards': 'boca-raton-gutter-leaf-guards-fl',
  'gutter downspout': 'downspout-boca-raton-fl',
  'gutter downspouts': 'downspout-boca-raton-fl',
  downspout: 'downspout-boca-raton-fl',
  'aluminum gutters': 'aluminum-gutters-boca-raton-fl',
  'copper gutters': 'copper-gutters-boca-raton-fl',
  'seamless gutters': 'boca-raton-gutter-installation-fl',
  'screen rooms & lanais': 'screen-rooms-lanais-south-florida',
  'screen rooms and lanais': 'screen-rooms-lanais-south-florida',
  'underground drainage': 'underground-drainage-south-florida',
  siding: 'siding-south-florida',
}

/** @param {string} slugOrPath */
export function renameSouthFloridaGutterSlug(slugOrPath) {
  const raw = String(slugOrPath || '').trim().replace(/^\/+|\/+$/g, '')
  if (!raw) return raw
  if (SOUTH_FLORIDA_GUTTER_SLUG_RENAMES[raw]) return SOUTH_FLORIDA_GUTTER_SLUG_RENAMES[raw]
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
 * Expand Sanity `cityServicePage` slugs for static path generation (canonical + legacy aliases).
 * @param {string[]} cmsSlugs
 * @returns {string[]}
 */
export function expandCityServiceSlugsForBuild(cmsSlugs) {
  const out = new Set()
  for (const s of cmsSlugs) {
    for (const alias of cityServiceSlugAliases(s)) {
      if (!isRemovedServiceSlug(alias)) out.add(alias)
    }
  }
  return [...out]
}

/** Rewrite legacy paths to the Boca Raton slug family. */
export function rewriteLegacyServiceHref(href) {
  if (typeof href !== 'string') return href
  const trimmed = href.trim()
  if (!trimmed.startsWith('/')) return href
  const path = trimmed.replace(/\/+$/, '').slice(1)
  const slug = renameSouthFloridaGutterSlug(path)
  if (slug === path) return href
  return `/${slug}/`
}

/** Root-level city paths (`/gutters-*-fl/`, `/lantana-gutters-fl/`) 301 to `/locations/…/`; link there directly. */
export function rewriteLegacyLocationHref(href) {
  if (typeof href !== 'string') return href
  const trimmed = href.trim()
  // Boca Raton location page 301s to the homepage.
  if (/^\/(?:locations\/)?gutters-boca-raton-fl\/?(?:[?#].*)?$/i.test(trimmed)) {
    return '/'
  }
  const m = trimmed.match(/^\/((?:gutters-[a-z-]+-fl|lantana-gutters-fl))\/?([?#].*)?$/)
  return m ? `/locations/${m[1]}/${m[2] || ''}` : href
}

/** @deprecated use rewriteLegacyServiceHref */
export function rewriteTampaServiceSlug(href) {
  return rewriteLegacyServiceHref(href)
}

export function serviceTitleToHref(title) {
  if (!title) return PRIMARY_SERVICES_HREF
  const key = String(title).trim().toLowerCase()
  if (key === 'super gutters') return PRIMARY_SERVICES_HREF
  if (key === 'gutter maintenance') return SERVICES_HUB_HREF
  const slug = SERVICE_TITLE_SLUGS[key]
  if (slug && isSoffitFasciaRemovedSlug(slug)) return HOME_HREF
  if (slug && isGutterMaintenanceRemovedSlug(slug)) return SERVICES_HUB_HREF
  return slug ? `/${slug}/` : PRIMARY_SERVICES_HREF
}
