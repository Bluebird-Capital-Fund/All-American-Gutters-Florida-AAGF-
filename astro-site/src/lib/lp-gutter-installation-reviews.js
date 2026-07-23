import { asStr, escapeHtml } from './sanity-strings.js'

const REVIEWS_MEDIA = 'Media (AAGF)/Reviews (AAGF)'

/**
 * Gutter-installation LP reviews from `Reviews (AAGF)/images/Reviews (Gutter Installation).odt`.
 * @type {Array<{ author: string, timeAgo: string, avatarSrc: string, quote: string }>}
 */
export const GUTTER_INSTALLATION_LP_REVIEWS = [
  {
    author: 'Denise Echavarria',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Denise Echavarria.png`,
    quote:
      'This company was amazing! So quick and efficient. Gave us good advice and was extremely knowledgeable and so kind. They had all the gutters installed at our house in less than 2 hours.',
  },
  {
    author: 'Lou Sago',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Lou Sago.png`,
    quote:
      'All American gutters did an amazing job installing the new gutter system. They are courteous, on time and efficient showing great attention to the smallest detail. I would highly recommend them.',
  },
  {
    author: 'C Scott',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/C Scott.png`,
    quote:
      'Excellant service . Jason was Awesome !! He arrived one morning for a quote and the next morning my gutters were installed .The crew did a Fabulous job and were finished in 2 hours . We Love it . Very Happy.',
  },
  {
    author: 'Linda Zamora',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Linda Zamora.png`,
    quote:
      'Amazing job on our gutter installation - my house looks finished with the gutters as they match our house trim color. They make the gutters in real time amazing to watch! Very professional and reasonable pricing! Highly recommend',
  },
  {
    author: 'Michael Arthur',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Michael Arthur.png`,
    quote:
      'All American Gutters did a phenomenal job installing new gutters on my home. The gutters are beautiful and installation was quick. Prices are reasonable. Highly recommended!!',
  },
  {
    author: 'Maureen Hunter',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Maureen Hunter.png`,
    quote:
      'Excellent Service!! Quick response to initial phone inquiry. Gutters were installed quickly and seamlessly. Eric and Bert were courteous and professional, So impressed with this company.',
  },
  {
    author: 'Nella Groysman',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Nella Groysman.png`,
    quote:
      'We needed additional gutters badly in this rainy weather and All American Gutters came through for us doing a great job on the gutter installation in a very short time. Even pouring rain had not stopped them!',
  },
  {
    author: 'Mollie Nieporte',
    timeAgo: '',
    avatarSrc: `${REVIEWS_MEDIA}/Mollie Nieporte.png`,
    quote:
      'We were very happy with our gutter installation from All American Gutters. Fabulous company!!',
  },
]

/**
 * Bold the first installation-related phrase only (black via CSS on `.testimonial strong`).
 * Prefers natural phrases like "gutters were installed" / "gutter installation".
 */
export function highlightGutterInstallationReviewTerms(quote) {
  const escaped = escapeHtml(asStr(quote))
  return escaped.replace(
    /\b(gutters?\s+were\s+installed|gutters?\s+installed|gutter\s+installations?|installing\s+(?:the\s+)?new\s+gutters?|installing\s+(?:the\s+)?(?:new\s+)?gutter\s+system|new\s+gutter\s+system|installations?|installed|installing)\b/i,
    (match) => `<strong>${match}</strong>`,
  )
}
