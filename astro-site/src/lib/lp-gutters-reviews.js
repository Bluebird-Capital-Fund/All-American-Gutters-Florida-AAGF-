import { asStr, escapeHtml } from './sanity-strings.js'

const REVIEWS_MEDIA = 'Media (AAGF)/Reviews (AAGF)'

/**
 * Gutters LP reviews from `Reviews (AAGF)/images/Revies (gutters).odt`.
 * @type {Array<{ author: string, timeAgo: string, avatarSrc: string, quote: string }>}
 */
export const GUTTERS_LP_REVIEWS = [
  {
    author: 'Susan Halpin',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Susan Halpin.png`,
    quote:
      'Gutters and downspouts installed neatly and professionally in less than 4 hours for a 14 unit condo. Very satisfied with their work.',
  },
  {
    author: 'Chuck Gillette',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Chuck Gillette.png`,
    quote:
      'Excellent Job And Crew would definitely recommend them to anyone looking for gutters and downspouts, very professional team.',
  },
  {
    author: 'Dana Meyer',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Dana Meyer.png`,
    quote:
      'The best! Got a quote for gutters and downspouts on our home on Tuesday and we already have them installed. Most professional company I have ever encountered',
  },
  {
    author: 'Timothy Gaffney',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Timothy Gaffney.png`,
    quote:
      'Very nice people, super-easy to do business with for gutter cleaning, and great work at very reasonable rates. Highly recommended!',
  },
  {
    author: 'Laura Musgrove',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Laura Musgrove.png`,
    quote:
      'Excellant Customer service, fair competitive prices , Top notch gutter guards installation. Highly Recommend.',
  },
  {
    author: 'Lou Sago',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Lou Sago.png`,
    quote:
      'All American gutters did an amazing job installing the new gutter system. They are efficient showing great attention to the smallest detail. I would highly recommend them.',
  },
  {
    author: 'Mollie Nieporte',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Mollie Nieporte.png`,
    quote:
      'We were very happy with our gutter installation from All American Gutters. Fabulous company!!',
  },
  {
    author: 'Seth K',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Seth K.png`,
    quote:
      'Quick diagnosis of the gutter problem then came back and completed my gutter repair a couple of days later. would definitely recommend.',
  },
]

/**
 * Bold one gutters-related phrase (black via CSS on `.testimonial strong`).
 * Prefers meaningful phrases (e.g. "new gutter system", "gutter repair") over
 * earlier company-name matches like "gutters" in "All American gutters".
 */
export function highlightGuttersReviewTerms(quote) {
  const escaped = escapeHtml(asStr(quote))
  const patterns = [
    /\bnew\s+gutter\s+system\b/i,
    /\bgutter\s+repairs?\b/i,
    /\bgutter\s+installations?\b/i,
    /\bgutter\s+services?\b/i,
    /\bgutter\s+guards?\b/i,
    /\bgutter\s+cleanings?\b/i,
    /\bgutter\s+systems?\b/i,
    /\bgutters?\s+were\s+installed\b/i,
    /\bgutters?\s+installed\b/i,
    /\bgutters\b/i,
    /\bgutter\b/i,
  ]
  for (const pattern of patterns) {
    if (pattern.test(escaped)) {
      return escaped.replace(pattern, (match) => `<strong>${match}</strong>`)
    }
  }
  return escaped
}
