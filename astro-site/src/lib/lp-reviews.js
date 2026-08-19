import { asStr, escapeHtml } from './sanity-strings.js'
import {
  GUTTER_GUARDS_LP_REVIEWS,
  highlightGutterGuardReviewTerms,
} from './lp-gutter-guards-reviews.js'
import {
  GUTTER_INSTALLATION_LP_REVIEWS,
  highlightGutterInstallationReviewTerms,
} from './lp-gutter-installation-reviews.js'
import {
  GUTTER_REPLACEMENT_LP_REVIEWS,
  highlightGutterReplacementReviewTerms,
} from './lp-gutter-replacement-reviews.js'
import {
  GUTTER_REPAIR_LP_REVIEWS,
  highlightGutterRepairReviewTerms,
} from './lp-gutter-repair-reviews.js'
import { GUTTERS_LP_REVIEWS, highlightGuttersReviewTerms } from './lp-gutters-reviews.js'

/**
 * @param {string} lpSlug
 * @returns {Array<{ author: string, timeAgo: string, avatarSrc: string, quote: string }> | null}
 */
export function getLpReviews(lpSlug) {
  const key = String(lpSlug || '').trim()
  if (key === 'gutter-guards') return GUTTER_GUARDS_LP_REVIEWS
  if (key === 'gutter-installation') return GUTTER_INSTALLATION_LP_REVIEWS
  if (key === 'seamless-gutters') return GUTTER_INSTALLATION_LP_REVIEWS
  if (key === 'gutter-replacement') return GUTTER_REPLACEMENT_LP_REVIEWS
  if (key === 'gutter-repair') return GUTTER_REPAIR_LP_REVIEWS
  if (key === 'gutters') return GUTTERS_LP_REVIEWS
  return null
}

/**
 * @param {string} lpSlug
 * @param {string} quote
 * @returns {string}
 */
export function highlightLpReviewTerms(lpSlug, quote) {
  const key = String(lpSlug || '').trim()
  if (key === 'gutters') return highlightGuttersReviewTerms(quote)
  if (key === 'gutter-repair') return highlightGutterRepairReviewTerms(quote)
  if (key === 'gutter-replacement') return highlightGutterReplacementReviewTerms(quote)
  if (key === 'gutter-installation') return highlightGutterInstallationReviewTerms(quote)
  if (key === 'seamless-gutters') return highlightSeamlessGuttersReviewTerms(quote)
  if (key === 'gutter-guards') return highlightGutterGuardReviewTerms(quote)
  return escapeHtml(asStr(quote))
}

/** Bold guard + installation + replacement + repair + gutters terms for the shared /reviews/ page. */
export function highlightReviewsPageTerms(quote) {
  let html = escapeHtml(asStr(quote))
  html = html.replace(
    /\b(gutter\s+replacements?|replacements?|replaced|replacing|replaces|replace)\b/i,
    (match) => `<strong>${match}</strong>`,
  )
  html = html.replace(
    /\b(gutters?\s+were\s+installed|gutters?\s+installed|gutter\s+installations?|installing\s+(?:the\s+)?new\s+gutters?|installing\s+(?:the\s+)?(?:new\s+)?gutter\s+system|new\s+gutter\s+system|installations?|installed|installing)\b/i,
    (match) => `<strong>${match}</strong>`,
  )
  html = html.replace(
    /\b(gutter\s+guards?\s+installations?|gutter\s+guards?\s+service|gutter\s+guards?(?:\s*\(screens\))?|gutter\s+screens?|leaf\s+guards?|leaf\s+screens?)\b|\(screens\)/i,
    (match) => `<strong>${match}</strong>`,
  )
  html = html.replace(
    /\b(gutter\s+repairs?|repairs?|repaired|repairing)\b/i,
    (match) => `<strong>${match}</strong>`,
  )
  html = html.replace(/\bseamless(?:ly)?\b/i, (match) => `<strong>${match}</strong>`)
  html = html.replace(/\bgutters\b/i, (match) => `<strong>${match}</strong>`)
  return html
}

function highlightSeamlessGuttersReviewTerms(quote) {
  const escaped = escapeHtml(asStr(quote))
  const withSeamless = escaped.replace(/\bseamless(?:ly)?\b/i, (match) => `<strong>${match}</strong>`)
  if (withSeamless !== escaped) return withSeamless
  return highlightGutterInstallationReviewTerms(quote)
}
