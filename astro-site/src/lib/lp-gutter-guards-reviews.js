import { asStr, escapeHtml } from './sanity-strings.js'

const REVIEWS_MEDIA = 'Media (AAGF)/Reviews (AAGF)'

/**
 * Gutter-guards LP reviews from `Reviews (AAGF)/images/Reviews (gutter guards reviews).odt`.
 * @type {Array<{ author: string, timeAgo: string, avatarSrc: string, quote: string }>}
 */
export const GUTTER_GUARDS_LP_REVIEWS = [
  {
    author: 'Dave L',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Dave L.png`,
    quote:
      'We were extremely happy and satisfied with the installation of our gutter guards (screens) and some minor repair work.The technicians were highly qualified and knowledgeable about their work.',
  },
  {
    author: 'W Adams',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/W Adams.png`,
    quote:
      'After meeting Chris a few years ago for a smaller job, I knew they were professional, used quality materials, and knew exactly what to do, including gutter guards. The cost was reasonable and the work outstanding.',
  },
  {
    author: 'Janet Sicoli',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Janet Sicoli.png`,
    quote:
      'I used this company for new gutters, gutter guards, new screen for porch and power washing They did an outstanding job providing great quality and were very responsive.',
  },
  {
    author: 'Garth Duff-Gray',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Garth Duff-Gray.png`,
    quote:
      'ALL AMERICAN Gutters - the Company, the Sales Management (Chris Smiley) and the Installers were truly remarkable on our gutter guards, all making our transaction a pleasure.',
  },
  {
    author: 'Cynthia Harris',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Cynthia Harris.png`,
    quote:
      'Reliable, friendly and all around great experience They did my gutters and gutter guards after we put a new roof on the house. They always show up when they say they will and prices seem fair.',
  },
  {
    author: 'Mark Phillips',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Mark Phillips.png`,
    quote:
      'The price was fair and the quality outstanding. Jordan inspected the work and made sure I was more than satisfied. I highly recommend their gutter guards service. Mark P',
  },
  {
    author: 'Bill Pepe',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Bill Pepe.png`,
    quote:
      'Excellent communication and timely follow-up (Jason) Gutter guards installation was smooth and professional. Great All-Round Service!',
  },
  {
    author: 'Laura Musgrove',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Laura Musgrove.png`,
    quote:
      'Excellant Customer service, fair competitive prices , Top notch gutter guards installation. Highly Recommend .',
  },
]

/**
 * Bold the first gutter-guard related phrase only (black via CSS on `.testimonial strong`).
 */
export function highlightGutterGuardReviewTerms(quote) {
  const escaped = escapeHtml(asStr(quote))
  const patterns = [
    /\bgutter\s+guards?\s+installations?\b/i,
    /\bgutter\s+guards?\s+service\b/i,
    /\bgutter\s+guards?(?:\s*\(screens\))?\b/i,
    /\bgutter\s+screens?\b/i,
    /\bleaf\s+guards?\b/i,
    /\bleaf\s+screens?\b/i,
    /\(screens\)/i,
  ]
  for (const pattern of patterns) {
    if (pattern.test(escaped)) {
      return escaped.replace(pattern, (match) => `<strong>${match}</strong>`)
    }
  }
  return escaped
}

export function getLpReviews(lpSlug) {
  if (String(lpSlug || '').trim() === 'gutter-guards') return GUTTER_GUARDS_LP_REVIEWS
  return null
}
