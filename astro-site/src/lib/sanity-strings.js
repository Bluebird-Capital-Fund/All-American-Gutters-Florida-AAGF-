/**
 * Helpers for Sanity payloads (strings, optional legacy `{ value }` on array items, templates).
 * Homepage required fields are validated in assert-sanity-homepage.js before render.
 */

export function asStr(x) {
  if (x == null) return ''
  if (typeof x === 'string') return x
  if (typeof x === 'object' && x !== null && 'value' in x) {
    return String(/** @type {{ value?: unknown }} */ (x).value ?? '')
  }
  return String(x)
}

export function asStrArray(arr) {
  if (!Array.isArray(arr)) return []
  return arr.map((x) => asStr(x))
}

/**
 * Replace `{{key}}` placeholders (non-HTML — escape output if embedding in HTML).
 * @param {string | null | undefined} template
 * @param {Record<string, string | number | undefined | null>} vars
 */
export function applyTemplate(template, vars) {
  if (template == null) return ''
  let out = String(template)
  for (const [k, v] of Object.entries(vars)) {
    const re = new RegExp(`\\{\\{\\s*${k}\\s*\\}\\}`, 'g')
    out = out.replace(re, v != null && v !== '' ? String(v) : '')
  }
  return out
}

export function mediaUrl(relPath) {
  if (relPath == null || relPath === '') return ''
  let p = String(relPath).trim()
  // Legacy paths from the Mile High template pointed at Media (MHG)/…; assets now live under Media (AAGF)/…
  if (p.startsWith('Media (MHG)/')) {
    p = `Media (AAGF)/${p.slice('Media (MHG)/'.length)}`
  }
  // Review avatars/icons were under Reviews (MHG)/; folder is now Reviews (AAGF)/
  if (p.includes('Reviews (MHG)')) {
    p = p.replace(/Reviews \(MHG\)/g, 'Reviews (AAGF)')
  }
  // CMS may still store pre-rename paths until content is republished
  if (p.includes('(SGT)')) {
    p = p.replace(/\(SGT\)/g, '(AAGF)')
  }
  return '/' + p.split('/').map(encodeURIComponent).join('/')
}

export function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export function statLookup(statsValues, key) {
  if (!statsValues || key == null) return ''
  return asStr(statsValues[key])
}

/** Normalize legacy “Need a gutter repair…” form intro copy from Sanity. */
export const FOOTER_ESTIMATE_INTRO_FALLBACK =
  'Looking for gutter repair, cleaning, or replacement services? Start with a free design consultation and tell us what’s going on.'

/** Short footer intro when Sanity `footerEstimate.intro` is empty (standard page chrome). */
export const FOOTER_ESTIMATE_SECTION_INTRO_FALLBACK =
  'Contact us for fast service and free design consultations.'

/** Contact page `<meta name="description">` (not sourced from Sanity `contactPage.lead`). */
export const CONTACT_PAGE_META_DESCRIPTION =
  'Reach out for fast scheduling and free design consultation. Our team is ready to help.'

/** Gutter repair service page `<meta name="description">`. */
export const GUTTER_REPAIR_META_DESCRIPTION =
  'Gutter repair in South Florida for leaking or damaged systems. Fast, reliable service with clear communication. Get a free design consultation today.'

const LEGACY_FOOTER_ESTIMATE_INTRO =
  /^Need a gutter repair, cleaning, or replacement estimate\?\s*/i

export function footerEstimateIntro(value) {
  const s = asStr(value).trim()
  if (!s) return FOOTER_ESTIMATE_INTRO_FALLBACK
  if (LEGACY_FOOTER_ESTIMATE_INTRO.test(s)) {
    return s.replace(
      LEGACY_FOOTER_ESTIMATE_INTRO,
      'Looking for gutter repair, cleaning, or replacement services? ',
    )
  }
  return s
}

const LEGACY_ESTIMATE_CTA =
  /^(request\s+(free\s+)?estimate|request\s+quote|schedule\s+(an?\s+|your\s+free\s+)?estimate|free\s+design\s+consultation)$/i

/** Sitewide outline / secondary CTA label. */
export const ESTIMATE_CTA_LABEL = 'Book a Consultation'

/** Label for form submit buttons (bottom of lead forms). */
export const FORM_SUBMIT_LABEL = 'Submit'

/** Normalize legacy unique-point titles from Sanity. */
export function uniquePointTitle(value) {
  const s = asStr(value)
  return s === 'Clear estimates' ? 'Detailed proposals' : s
}

/**
 * Normalize “Why Choose All American Gutters” service section bodies.
 * Optional homepage brand link:
 * - "All American Gutters" (repair + guards)
 * - "All American Gutters South Florida" (cleaning + aluminum)
 */
export function normalizeWhyChooseServiceBody(heading, body, { homeBrandLink = null } = {}) {
  let html = asStr(body)
  if (asStr(heading) !== 'Why Choose All American Gutters') return html
  html = html.replace(
    /<li>[^<]*\bestimates?\b[^<]*<\/li>/gi,
    '<li>Transparent pricing with clear expectations</li>',
  )
  // Normalize brand opener to plain text first, then re-link only on allowed pages.
  html = html.replace(
    /At <a\b[^>]*>All American Gutters(?: South Florida)?<\/a>,/gi,
    'At All American Gutters,',
  )
  html = html.replace(/At All American Gutters South Florida,/g, 'At All American Gutters,')
  if (
    homeBrandLink === 'All American Gutters' ||
    homeBrandLink === 'All American Gutters South Florida'
  ) {
    html = html.replace(/At All American Gutters,/g, `At <a href="/">${homeBrandLink}</a>,`)
  }
  return html
}

/**
 * Installation page only: link “gutters in South Florida” in the services section closer.
 */
export function normalizeInstallServicesBody(heading, body, pageSlug = '') {
  let html = asStr(body)
  if (asStr(pageSlug) !== 'gutter-installation-south-florida') return html
  if (asStr(heading) !== 'Our South Florida Gutter Installation Services') return html
  return html.replace(
    /installing new (?:<a\b[^>]*>)?gutters(?: in South Florida)?(?:<\/a>)?,/gi,
    'installing new <a href="/">gutters in South Florida</a>,',
  )
}

/**
 * Replacement page only: link “South Florida gutters” in the process section.
 */
export function normalizeReplacementProcessBody(heading, body, pageSlug = '') {
  let html = asStr(body)
  if (asStr(pageSlug) !== 'gutter-replacement-south-florida') return html
  if (asStr(heading) !== 'Our Gutter Replacement Process in South Florida') return html
  return html.replace(
    /remove the old (?:<a\b[^>]*>)?(?:South Florida )?gutters(?:<\/a>)?/gi,
    'remove the old <a href="/">South Florida gutters</a>',
  )
}

/** Normalize legacy “Request Free Estimate” (and similar) button copy from Sanity. */
export function estimateCtaLabel(value) {
  const s = asStr(value).trim()
  if (!s || LEGACY_ESTIMATE_CTA.test(s)) return ESTIMATE_CTA_LABEL
  return s
}

/** Normalize legacy form submit button copy from Sanity to a plain "Submit". */
export function formSubmitLabel(value) {
  const s = asStr(value).trim()
  if (!s || LEGACY_ESTIMATE_CTA.test(s)) return FORM_SUBMIT_LABEL
  return s
}
