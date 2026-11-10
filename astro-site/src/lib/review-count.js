/** Canonical public review count used in UI and schema. */
export const CANONICAL_REVIEW_COUNT = 110
export const CANONICAL_REVIEW_COUNT_DISPLAY = '110+'
export const CANONICAL_REVIEW_RATING = '4.8'

/**
 * Always show the canonical review count in customer-facing UI.
 * Ignores CMS/stat values so stale lower numbers cannot ship.
 */
export function reviewCountDisplay(_prefix = '', _count = '', _suffix = '') {
  return CANONICAL_REVIEW_COUNT_DISPLAY
}
