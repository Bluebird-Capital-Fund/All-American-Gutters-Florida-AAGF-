/** Delray Beach location page — shared by Sanity patch + build fallback. */

export const GUTTERS_DELRAY_BEACH_FL_SLUG = 'gutters-delray-beach-fl'

const MEDIA = 'Media (AAGF)/Images (AAGF)'

const DELRAY_BEACH_MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57151.82179282544!2d-80.13402753816082!3d26.45608796111297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8dffc90ec6ae3%3A0xc7780128536eb8b8!2sDelray%20Beach%2C%20FL%2C%20USA!5e0!3m2!1sen!2scl!4v1781898216607!5m2!1sen!2scl'

export const guttersDelrayBeachFlPage = {
  title: 'Gutters in Delray Beach, FL',
  slug: { _type: 'slug', current: GUTTERS_DELRAY_BEACH_FL_SLUG },
  eyebrow: 'Delray Beach Gutters',
  headline: 'Gutters in Delray Beach',
  lead:
    'Delray Beach sits in a coastal pocket where salt air, fast afternoon storms, and dense tropical landscaping all combine to put constant pressure on drainage systems. Rain here often arrives hard and suddenly, then lingers with humidity that slows drying and increases wear. That’s why Delray Beach gutters need to handle both heavy downpours and long moisture exposure. All American Gutters is a trusted Delray Beach gutter company focused on systems built for real coastal performance.',
  heroFormIntro:
    'Tell us about your Delray Beach property and get a free consultation with clear next steps.',
  meta: {
    _type: 'meta',
    title: 'Gutters in Delray Beach | Free Consultation | All American',
    description:
      'Reliable gutters in Delray Beach for homes and businesses. Seamless systems and expert care with a free consultation included today.',
  },
  seoDescription:
    'Reliable gutters in Delray Beach for homes and businesses. Seamless systems and expert care with a free consultation included today.',
  layoutBackgrounds: {
    _type: 'layoutBackgrounds',
    hero: {
      _type: 'layoutBackgroundSection',
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-delray-beach-fl-corner-downspout.webp`,
    },
  },
  mapEmbedUrl: DELRAY_BEACH_MAP_EMBED,
  reviews: {
    headline: 'What Customers in Delray Beach Are Saying',
  },
  contentSections: [
    {
      _type: 'cityContentSection',
      _key: 'aagf-delray-local-services',
      heading: 'Fast, Local Gutters in Delray Beach',
      body: `<p>In Delray Beach, gutter issues tend to show up during storm season when heavy rain combines with wind and saturated ground conditions.</p>
<p>We provide full-service gutter solutions:</p>
<ul>
<li>Gutter Repair for overflow and storm damage</li>
<li>Gutter Installation designed for coastal rainfall intensity</li>
<li>Gutter Cleaning to remove palm debris and dense vegetation buildup</li>
<li>Gutter Replacement for aging or undersized systems</li>
<li>Gutter Maintenance to prevent recurring blockages</li>
<li>Gutter Guards for tree-heavy residential areas</li>
<li>Gutter Downspout adjustments for proper runoff control</li>
</ul>
<p>We work throughout Palm Beach County, so we understand how Delray Beach drainage patterns differ from inland neighborhoods.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-guards-delray-beach-fl-screened-patio-gutter-install.webp`,
      imageAlt: 'Gutter installation on a screened patio in Delray Beach',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-delray-common-issues',
      heading: 'Common Delray Beach Gutter Issues',
      body: `<p>Delray Beach homes face a mix of coastal exposure, older residential pockets, and newer developments that still deal with Florida’s intense rain cycles. The combination of salt air and fast storms creates steady wear on gutter systems year-round.</p>
<p>Most property owners reach out after noticing:</p>
<ul>
<li>Salt-air corrosion weakening brackets and seams on coastal-facing homes</li>
<li>Overflow during short, high-intensity storms that exceed gutter capacity</li>
<li>Heavy palm frond buildup that blocks downspouts quickly after wind events</li>
<li>Fascia damage from trapped moisture in humid, shaded roof areas</li>
<li>Misaligned systems in older neighborhoods that cannot handle modern rainfall volume</li>
</ul>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-replacement-delray-beach-fl-copper-gutter-system.webp`,
      imageAlt: 'Copper gutter system on a Delray Beach home',
      imagePosition: 'below-body',
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-delray-why-choose',
      heading: 'Why Choose a Delray Beach Gutter Company',
      body: `<p>Homeowners in Delray Beach often deal with inconsistent workmanship that doesn’t account for coastal humidity and storm surge conditions, leading to recurring drainage failures.</p>
<p>Homeowners and property managers across South Florida choose us because:</p>
<ul>
<li>100+ positive reviews reflecting consistent customer trust</li>
<li>Clear, proactive communication from start to finish</li>
<li>Stress-free, seamless service with clean installation practices</li>
<li>Meticulous attention to slope, flow, and drainage planning</li>
<li>Transparent pricing with clear expectations</li>
<li>Full-service gutter solutions including installation, repair, cleaning, and replacement</li>
<li>Strong warranties: 1-year workmanship and 20-year aluminum coverage</li>
<li>Systems built for coastal weather durability and long-term performance</li>
</ul>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-boynton-beach-fl-copper-gutter-front-home.webp`,
      imageAlt: 'Copper gutters on a South Florida home near Delray Beach',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-delray-neighborhoods',
      heading: 'Serving Delray Beach Neighborhoods',
      body: `<p>We work across Delray Beach with fast access to coastal and inland areas, including Delray Shores, Tropic Isles, Lake Ida, and neighborhoods around Atlantic Avenue, Federal Highway (US-1), and Linton Boulevard. Our crews also move efficiently along I-95, connecting quickly between residential zones and coastal corridors.</p>
<p>From homes near the Intracoastal and A1A to quieter inland streets west of I-95, drainage challenges shift from salt exposure to heavy vegetation and slower runoff conditions.</p>
<p>We also handle <a href="/locations/gutters-boynton-beach-fl/">gutters in Boynton Beach</a>, where similar coastal storm patterns create overflow risks during peak rainy months. Just north, we service <a href="/locations/gutters-greenacres-fl/">gutters in Greenacres</a>, where flat terrain and heavy rainfall require stronger drainage planning.</p>`,
      showCtas: true,
      showMapAfter: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-delray-consultation',
      heading: 'Get a Free Consultation in Delray Beach, Florida',
      body: `<p>If your gutters are showing signs of overflow, corrosion, or storm stress, All American Gutters is ready to help. We design systems built specifically for Delray Beach weather conditions and coastal exposure.</p>
<p>Call us today and get a free consultation with a trusted Delray Beach gutter company focused on long-term protection and reliable performance.</p>`,
      showCtas: true,
      renderAfterFaq: true,
    },
  ],
  faq: {
    _type: 'faq',
    headline: 'Delray Beach Gutters FAQs',
    headingId: 'delray-beach-gutters-faq',
    items: [
      {
        _type: 'faqItem',
        _key: 'aagf-delray-faq-overflow',
        question: 'Why do gutters in Delray Beach overflow even when they are cleaned regularly?',
        answerHtml:
          '<p>In Delray Beach, storms often deliver water faster than gutters can discharge it, especially during peak rainy season. Even clean systems can overflow if downspouts are undersized or slope is incorrect. This is common in coastal homes where rainfall intensity and wind direction change how water enters the system.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-delray-faq-rust',
        question: 'Why do gutters in Delray Beach rust or wear out faster near the coast?',
        answerHtml:
          '<p>Homes closer to the ocean in Delray Beach are exposed to salt air and constant humidity, which accelerates corrosion on metal gutters. Fasteners, seams, and hangers tend to deteriorate first, leading to leaks and sagging. Aluminum seamless systems are typically preferred because they resist rust better and maintain performance longer under continuous coastal exposure and moisture.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-delray-faq-pull-away',
        question: 'Why do gutters pull away from houses in Delray Beach over time?',
        answerHtml:
          '<p>Gutters in Delray Beach often pull away due to repeated stormwater overload and weakened fascia boards from humidity exposure. When debris blocks flow, water becomes heavy and stresses fasteners. Over time, wood behind the system softens, causing sections to sag or detach. Reinforcement and proper installation spacing help prevent structural separation and improve long-term performance.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-delray-faq-older-homes',
        question: 'Do older Delray Beach homes need upgraded gutter systems?',
        answerHtml:
          '<p>Often yes. Many older homes were built for lower rainfall intensity than what South Florida experiences today. Upgraded systems with improved capacity, better slope, and additional downspouts are often needed to handle modern storm patterns and prevent recurring overflow issues.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-delray-faq-standard',
        question: 'Are standard gutters enough for Delray Beach weather conditions?',
        answerHtml:
          '<p>Standard gutters often struggle in Delray Beach due to frequent heavy rainfall and coastal storm activity. Many homes benefit from oversized seamless aluminum systems that can handle higher water volume. Without proper sizing, overflow is common during storms. Upgrading capacity and improving downspout placement helps protect roofs, walls, and foundations from recurring water damage.</p>',
      },
    ],
  },
}
