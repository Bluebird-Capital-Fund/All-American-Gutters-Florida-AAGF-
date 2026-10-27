/**
 * LP landing-page copy helpers: H1 pattern, Boca → South Florida, no internal links.
 */
import { sanitizeCmsHtml } from './sanitize-cms-html.js'

/** @param {string} keyword */
export function lpTrustedServicesH1(keyword) {
  const k = String(keyword || '').trim()
  if (!k) return 'Trusted Gutter Services in South Florida'
  return `Trusted ${k} Services in South Florida`
}

/** Replace Boca Raton mentions with South Florida (headers + body). */
export function lpReplaceBocaWithSouthFlorida(value) {
  return String(value ?? '').replace(/\bBoca Raton\b/gi, 'South Florida')
}

/**
 * True for same-site paths (and aaguttersflorida.com URLs).
 * tel:, mailto:, #anchors, and other external hosts are not internal.
 */
export function isInternalSiteHref(href) {
  const h = String(href || '').trim()
  if (!h) return false
  if (/^(tel:|mailto:|#)/i.test(h)) return false
  if (/^https?:\/\//i.test(h)) {
    try {
      const host = new URL(h).hostname.replace(/^www\./i, '')
      return host === 'aaguttersflorida.com'
    } catch {
      return false
    }
  }
  return true
}

/** Unwrap internal <a> tags; keep tel/mailto/#/external. */
export function stripInternalHtmlLinks(html) {
  return String(html ?? '').replace(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi, (full, attrs, inner) => {
    const hrefMatch = String(attrs).match(/\bhref\s*=\s*(["'])(.*?)\1/i)
    const href = hrefMatch ? hrefMatch[2] : ''
    if (isInternalSiteHref(href)) return inner
    return full
  })
}

/** Sanitize CMS HTML for LPs: no internal links, Boca → South Florida. */
export function lpSanitizeHtml(html) {
  return lpReplaceBocaWithSouthFlorida(stripInternalHtmlLinks(sanitizeCmsHtml(html)))
}

/** Plain text for LPs with Boca → South Florida. */
export function lpPlainText(value) {
  return lpReplaceBocaWithSouthFlorida(String(value ?? '').trim())
}

/** Convert internal CTAs to same-page #contact; leave tel/mailto/external alone. */
export function lpSafeHref(href, { fallback = '#contact' } = {}) {
  const h = String(href || '').trim()
  if (!h) return fallback
  if (!isInternalSiteHref(h)) return h
  if (h.includes('#contact')) return '#contact'
  return fallback
}
