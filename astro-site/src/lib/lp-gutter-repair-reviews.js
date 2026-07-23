import { asStr, escapeHtml } from './sanity-strings.js'

const REVIEWS_MEDIA = 'Media (AAGF)/Reviews (AAGF)'

/**
 * Gutter-repair LP reviews from `Reviews (AAGF)/images/Reviews (Gutter Repair).odt`.
 * @type {Array<{ author: string, timeAgo: string, avatarSrc: string, quote: string }>}
 */
export const GUTTER_REPAIR_LP_REVIEWS = [
  {
    author: 'Mary Lyden',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Mary Lyden.png`,
    quote:
      'Two gentleman came out to do a small job but treated me and the job like a big one. I appreciate the promptness of the estimate and the repair.',
  },
  {
    author: 'Seth K',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Seth K.png`,
    quote:
      'Guys were great. Quick diagnosis of the gutter problem then came back and completed my gutter repair a couple of days later. would definitely recommend.',
  },
  {
    author: 'Kev Vessal',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Kev Vessal.png`,
    quote:
      'First class company with exceptional customer service. The owner, personally showed up at the job site and supervised the entire gutter repair. Definitely recommend.',
  },
  {
    author: 'Salvatore Salmeri',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Salvatore Salmeri.png`,
    quote:
      'I used American Gutters by a recommendation. They lived up to it. I needed gutter repair (and cleaning). The service was prompt and professional and will use them again.',
  },
  {
    author: 'Mark Jagel',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Mark Jagel.png`,
    quote:
      "Chris and his guys were quick and terrific on our gutter repair. This is the 2nd time I've used him, referred him to my friends!",
  },
  {
    author: 'Chris Austin',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Chris Austin.png`,
    quote:
      'Quite a pleasure dealing with a competent contractor for gutter repair. Fair price / great service.',
  },
  {
    author: 'Earl Marks',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Earl Marks.png`,
    quote: 'Gutter repair service was excellent and they delivered what was promised.',
  },
  {
    author: 'Maria Ellis',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Maria Ellis.png`,
    quote: 'Easy to work with and our gutter repair work was excellent',
  },
]

/**
 * Bold the first gutter-repair related term only (black via CSS on `.testimonial strong`).
 */
export function highlightGutterRepairReviewTerms(quote) {
  const escaped = escapeHtml(asStr(quote))
  return escaped.replace(
    /\b(gutter\s+repairs?|repairs?|repaired|repairing)\b/i,
    (match) => `<strong>${match}</strong>`,
  )
}
