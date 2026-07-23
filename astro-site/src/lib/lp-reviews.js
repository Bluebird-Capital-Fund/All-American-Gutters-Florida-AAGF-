import { asStr, escapeHtml } from './sanity-strings.js'
import {
  GUTTER_GUARDS_LP_REVIEWS,
  highlightGutterGuardReviewTerms,
} from './lp-gutter-guards-reviews.js'
import {
  GUTTER_INSTALLATION_LP_REVIEWS,
  highlightGutterInstallationReviewTerms,
} from './lp-gutter-installation-reviews.js'

/**
 * @param {string} lpSlug
 * @returns {Array<{ author: string, timeAgo: string, avatarSrc: string, quote: string }> | null}
 */
export function getLpReviews(lpSlug) {
  const key = String(lpSlug || '').trim()
  if (key === 'gutter-guards') return GUTTER_GUARDS_LP_REVIEWS
  if (key === 'gutter-installation') return GUTTER_INSTALLATION_LP_REVIEWS
  return null
}

/**
 * @param {string} lpSlug
 * @param {string} quote
 * @returns {string}
 */
export function highlightLpReviewTerms(lpSlug, quote) {
  const key = String(lpSlug || '').trim()
  if (key === 'gutter-installation') return highlightGutterInstallationReviewTerms(quote)
  if (key === 'gutter-guards') return highlightGutterGuardReviewTerms(quote)
  return escapeHtml(asStr(quote))
}
