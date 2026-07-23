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
      'Chris was very professional and easy to do business with. We were extremely happy and satisfied with the installation of our gutter guards (screens) and some minor repair work. The technicians were highly qualified and knowledgeable about their work. We certainly will recommend All American Gutters to any of our neighbors in need of this particular installation.',
  },
  {
    author: 'W Adams',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/W Adams.png`,
    quote:
      'My second time using this company. Our first meeting was for a small job: gutters in a small area, a few years ago. When advised to get a new roof, there was no doubt in our minds who we would call: All American Gutters. Why? After meeting Chris a few years ago for a smaller job, I knew they were professional, used quality materials, and knew exactly what to do to move water off our flat roof, including gutter guards. The cost was reasonable and the work outstanding.',
  },
  {
    author: 'Janet Sicoli',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Janet Sicoli.png`,
    quote:
      'I used this company for new gutters, gutter guards, new screen for porch and power washing. They did an outstanding job providing great quality and were very responsive. I had to manage work for my mothers house long distance and they kept me informed and sent pictures for follow up. Dalen was great and very reliable.',
  },
  {
    author: 'Garth Duff-Gray',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Garth Duff-Gray.png`,
    quote:
      'ALL AMERICAN Gutters - the Company, the Sales Management (Chris Smiley) and the Installers were truly remarkable on our gutter guards - all making our transaction a pleasure. Superior quality and efficiency - all at a competitive tolerable price. Great positive experience.',
  },
  {
    author: 'Cynthia Harris',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Cynthia Harris.png`,
    quote:
      'Reliable, friendly and all around great experience. They did my gutters and gutter guards after we put a new roof on the house. In addition, they have provided service. They always show up when they say they will and prices seem fair and their work is awesome.',
  },
  {
    author: 'Mark Phillips',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Mark Phillips.png`,
    quote:
      'The price was fair and the quality outstanding. Jordan inspected the work and made sure I was more than satisfied. I highly recommend their gutter guards service.',
  },
  {
    author: 'Bill Pepe',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Bill Pepe.png`,
    quote:
      'Excellent communication and timely follow-up (Jason). Gutter guards installation was smooth and professional. Great All-Round Service!',
  },
  {
    author: 'Laura Musgrove',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Laura Musgrove.png`,
    quote:
      'Excellent Customer service, fair competitive prices, Top notch gutter guards installation. Highly Recommend.',
  },
]

/** Bold gutter-guard related terms in review quote HTML (already escaped). */
export function highlightGutterGuardReviewTerms(quote) {
  const escaped = escapeHtml(asStr(quote))
  return escaped.replace(
    /\b(gutter\s+guards?|gutter\s+screens?|leaf\s+guards?|leaf\s+screens?)\b|\(screens\)/gi,
    (match) => `<strong>${match}</strong>`,
  )
}

export function getLpReviews(lpSlug) {
  if (String(lpSlug || '').trim() === 'gutter-guards') return GUTTER_GUARDS_LP_REVIEWS
  return null
}
