/**
 * LP-only section headline overrides for Google Ads mirror pages.
 * Rules keys must match CMS default headlines (normalized lowercase).
 */
export function lpSectionHeadline(headline, keyword, { active = false } = {}) {
  const raw = String(headline || '').trim()
  if (!active || !keyword || !raw) return raw

  const key = raw
    .replace(/[\u2018\u2019']/g, "'")
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()

  const rules = new Map([
    ['recent south florida gutter projects', `Recent ${keyword} Projects`],
    ['recent south florida gutter services', `Recent ${keyword} Projects`],
    ['trusted gutter partner in south florida', `Trusted ${keyword} partner in South Florida`],
    ['gutter services', `${keyword} services`],
    ['built for south florida homes and weather', `Built for South Florida homes with expert ${keyword}`],
    [
      'simple, reliable service in south florida',
      `Simple, reliable ${keyword} service in South Florida`,
    ],
    ['what south florida homeowners say', `Our ${keyword} Reviews`],
    ['south florida gutter questions answered', `${keyword} questions answered`],
    ['meet the south florida crew', `Meet our ${keyword} crew`],
    ['south florida service area', `${keyword} service area`],
    ['where we work', `${keyword} across South Florida`],
  ])

  return rules.get(key) ?? raw
}
