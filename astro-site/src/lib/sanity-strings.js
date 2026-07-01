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

/** Sitewide outline / form submit label for estimate CTAs. */
export const ESTIMATE_CTA_LABEL = 'Free Design Consultation'

const LEGACY_ESTIMATE_CTA =
  /^(request\s+(free\s+)?estimate|request\s+quote|schedule\s+(an?\s+|your\s+free\s+)?estimate)$/i

/** Normalize legacy “Request Free Estimate” (and similar) button copy from Sanity. */
export function estimateCtaLabel(value) {
  const s = asStr(value).trim()
  if (!s || LEGACY_ESTIMATE_CTA.test(s)) return ESTIMATE_CTA_LABEL
  return s
}
