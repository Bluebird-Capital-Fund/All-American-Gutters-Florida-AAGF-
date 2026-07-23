import { asStr, escapeHtml } from './sanity-strings.js'

const REVIEWS_MEDIA = 'Media (AAGF)/Reviews (AAGF)'

/**
 * Gutter-replacement LP reviews from `Reviews (AAGF)/images/Reviews (Gutter Replacement).odt`.
 * @type {Array<{ author: string, timeAgo: string, avatarSrc: string, quote: string }>}
 */
export const GUTTER_REPLACEMENT_LP_REVIEWS = [
  {
    author: 'Bob Schindler',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Bob Schindler.png`,
    quote:
      'Everything went great we only gave short notice and they responded very quickly to remove for fascia replacement in the front of the house They then returned the following day to complete our gutter replacement with the new gutters',
  },
  {
    author: 'Made In America Tim Warren',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Made In America Tim Warren.png`,
    quote:
      "Called All American Gutters. They answered on the second ring. Scheduled an appointment for the next day. Chris was right on time. Gave me a great price. Now he is the gutter replacement company we'll be using for our spec homes. Thanks Chris. Looking forward to working together for a long time. Sincerely Tim Warren project manager for Reich Construction Group.",
  },
  {
    author: 'David Panella',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/David Panella.png`,
    quote:
      'As a General and Roofing Contractor, we use All-American Gutters exclusively for gutter replacement...due to their competitive pricing, timely work, and quality. We highly recommend this company.',
  },
  {
    author: "Linda D'Agostino, Realtor of the Palm Beaches",
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Linda D'Agostino, Realtor of the Palm Beaches.png`,
    quote:
      'Excellent customer service on our gutter replacement! Reliable & great work! Highly recommend "All American" to get the job done. Super pleased with their work. Thank you, Chris',
  },
  {
    author: 'CLARK ROOFING',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/CLARK ROOFING.png`,
    quote:
      'Great company for gutter replacement! We always refer our customers to Andrew and the feedback is always positive.',
  },
  {
    author: 'Moira Douglas',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Moira Douglas.png`,
    quote:
      'They were very professional on our gutter replacement, excellent - I highly recommend',
  },
  {
    author: 'Christina Pero',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Christina Pero.png`,
    quote:
      'All staff is very knowledge, professional, and easy to work with on our gutter replacement',
  },
  {
    author: 'Alan Kotowich',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Alan Kotowich.png`,
    quote: 'Excellent work and on time for our gutter replacement.',
  },
]

/** Bold gutter-replacement related terms in review quote HTML. */
export function highlightGutterReplacementReviewTerms(quote) {
  const escaped = escapeHtml(asStr(quote))
  return escaped.replace(
    /\b(gutter\s+replacements?|replacements?|replaced|replacing|replaces|replace)\b/gi,
    (match) => `<strong>${match}</strong>`,
  )
}
