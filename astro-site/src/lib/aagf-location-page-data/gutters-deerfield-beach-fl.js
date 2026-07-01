/** Deerfield Beach location page — shared by Sanity patch + build fallback. */

export const GUTTERS_DEERFIELD_BEACH_FL_SLUG = 'gutters-deerfield-beach-fl'

const MEDIA = 'Media (AAGF)/Images (AAGF)'

const DEERFIELD_BEACH_MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28614.235836579686!2d-80.14294251241026!3d26.30124794596226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8e2903d4afb6f%3A0xe5982b2abf356617!2sDeerfield%20Beach%2C%20FL%2C%20USA!5e0!3m2!1sen!2scl!4v1781893735822!5m2!1sen!2scl'

export const guttersDeerfieldBeachFlPage = {
  title: 'Gutters in Deerfield Beach, FL',
  slug: { _type: 'slug', current: GUTTERS_DEERFIELD_BEACH_FL_SLUG },
  eyebrow: 'Deerfield Beach Gutters',
  headline: 'Gutters in Deerfield Beach',
  lead:
    'Deerfield Beach sits in a tight coastal corridor where ocean air, fast afternoon storms, and dense residential landscaping all combine to stress drainage systems year-round. That’s why Deerfield Beach gutters need to be designed for both salt exposure and high-volume rain. All American Gutters is a trusted Deerfield Beach gutter company focused on systems that hold up in real coastal conditions.',
  heroFormIntro:
    'Tell us about your Deerfield Beach property and get a free design consultation with clear next steps.',
  meta: {
    _type: 'meta',
    title: 'Gutters in Deerfield Beach | Free Consultation | All American',
    description:
      'Reliable Deerfield Beach gutters service for homes and businesses. Seamless systems and expert care with a free consultation included.',
  },
  seoDescription:
    'Reliable Deerfield Beach gutters service for homes and businesses. Seamless systems and expert care with a free consultation included.',
  layoutBackgrounds: {
    _type: 'layoutBackgrounds',
    hero: {
      _type: 'layoutBackgroundSection',
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-deerfield-beach-fl-seamless-gutter-installation-front-home.webp`,
    },
  },
  mapEmbedUrl: DEERFIELD_BEACH_MAP_EMBED,
  reviews: {
    headline: 'What Customers in Deerfield Beach Are Saying',
  },
  contentSections: [
    {
      _type: 'cityContentSection',
      _key: 'aagf-deerfield-local-services',
      heading: 'Fast, Local Gutters in Deerfield Beach',
      body: `<p>In Deerfield Beach, gutter issues tend to show up fast and repeat often if the system isn’t built for local weather patterns. Heavy rain bursts, coastal humidity, and constant organic debris all contribute to early wear.</p>
<p>We provide full-service gutter solutions for local conditions:</p>
<ul>
<li>Gutter Repair for storm overflow and structural damage</li>
<li>Gutter Installation built for high rainfall capacity</li>
<li>Gutter Cleaning to remove palm debris and coastal buildup</li>
<li>Gutter Replacement for failing or undersized systems</li>
<li>Gutter Guards for heavy vegetation zones</li>
<li>Gutter Downspout adjustments for proper drainage flow</li>
</ul>
<p>We work throughout Broward County, so we understand how Deerfield Beach compares to nearby coastal cities in storm impact and drainage demand.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-deerfield-beach-fl-front-entry-gutters.webp`,
      imageAlt: 'Front entry gutters on a Deerfield Beach home',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-deerfield-common-issues',
      heading: 'Common Deerfield Beach Gutter Issues',
      body: `<p>Deerfield Beach homes deal with a mix of coastal exposure, older residential construction in some neighborhoods, and intense seasonal rainfall that puts constant pressure on gutter systems. Properties closer to the beach also experience faster material wear due to salt air.</p>
<p>Most property owners reach out after noticing:</p>
<ul>
<li>Salt-air corrosion weakening hangers and seams on coastal-facing homes</li>
<li>Overflow during short, heavy storms that overwhelm standard gutter sizing</li>
<li>Constant palm debris and tropical vegetation buildup between cleanings</li>
<li>Misaligned or undersized systems on older homes west of US-1 that can’t handle modern rainfall intensity</li>
</ul>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-replacement-deerfield-beach-fl-gutter-system-home.webp`,
      imageAlt: 'Gutter system on a Deerfield Beach home',
      imagePosition: 'below-body',
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-deerfield-why-choose',
      heading: 'Why Choose a Deerfield Beach Gutter Company',
      body: `<p>Homeowners in Deerfield Beach often deal with contractors who treat coastal and inland homes the same, which leads to early system failures after storm season.</p>
<p>Homeowners and property managers across South Florida choose us because:</p>
<ul>
<li>100+ positive reviews reflecting consistent trust and satisfaction</li>
<li>Clear, proactive communication from start to finish</li>
<li>Stress-free, seamless service with clean job execution</li>
<li>Meticulous attention to slope accuracy and water flow design</li>
<li>Transparent pricing with clear expectations</li>
<li>Full-service gutter solutions including installation, repair, cleaning, and replacement</li>
<li>Strong warranties: 1-year workmanship and 20-year aluminum coverage</li>
<li>Long-term systems built for coastal humidity and storm exposure</li>
</ul>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-deerfield-beach-fl-second-story-gutter-install.webp`,
      imageAlt: 'Second-story gutter installation in Deerfield Beach',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-deerfield-neighborhoods',
      heading: 'Serving Deerfield Beach Neighborhoods',
      body: `<p>We work across Deerfield Beach with fast access to coastal and inland areas, including The Cove, Independence Bay, Deer Creek, and neighborhoods around Hillsboro Boulevard, Sample Road, and Federal Highway (US-1). We also regularly service homes near A1A and the border zones close to Boca Raton and Pompano Beach.</p>
<p>From ocean-exposed properties near the Intracoastal to residential streets west toward I-95, each area experiences different drainage pressure from wind, salt air, and storm runoff. We also handle <a href="/locations/gutters-west-palm-beach-fl/">West Palm Beach gutters</a>, where larger properties and longer rain cycles often demand more robust drainage setups. Nearby, we regularly service <a href="/locations/gutters-pompano-beach-fl/">gutters in Pompano Beach</a>, where coastal winds and sudden storm bursts tend to expose weak or undersized systems quickly.</p>`,
      showCtas: true,
      showMapAfter: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-deerfield-consultation',
      heading: 'Get a Free Consultation in Deerfield Beach, Florida',
      body: `<p>If your gutters are showing signs of overflow, corrosion, or storm stress, All American Gutters is ready to help. We provide durable solutions built specifically for coastal South Florida conditions.</p>
<p>Call us today and get a free consultation with a team that understands how Deerfield Beach gutters need to perform year-round.</p>`,
      showCtas: true,
      renderAfterFaq: true,
    },
  ],
  faq: {
    _type: 'faq',
    headline: 'Deerfield Beach Gutters FAQs',
    headingId: 'deerfield-beach-gutters-faq',
    items: [
      {
        _type: 'faqItem',
        _key: 'aagf-deerfield-faq-standard',
        question: 'Are standard gutters enough for Deerfield Beach storm seasons?',
        answerHtml:
          '<p>Standard gutters often struggle in Deerfield Beach during peak storm season because they are not designed for high-volume tropical rainfall. Sudden downpours can overwhelm smaller systems, especially when debris is present. Many homes benefit from oversized seamless aluminum gutters and properly spaced downspouts to handle fast water discharge and reduce overflow risk during hurricane season conditions.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-deerfield-faq-salt',
        question: 'Does salt air damage gutters in Deerfield Beach even if I’m not directly on the beach?',
        answerHtml:
          '<p>Yes. Salt air spreads inland and still affects homes west of the shoreline. Over time, it accelerates wear on fasteners, seams, and protective coatings. In Deerfield Beach, this leads to early corrosion issues even on aluminum systems, especially when combined with constant humidity and limited drying time between storms.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-deerfield-faq-older-homes',
        question: 'Why do gutters on older Deerfield Beach homes fail more often during heavy rain?',
        answerHtml:
          '<p>Many older homes were built with smaller gutter profiles that don’t match today’s rainfall intensity. During modern storms, those systems fill quickly and overflow. Combined with aging fascia and long-term humidity exposure, performance drops even if the system looks intact from the outside.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-deerfield-faq-foundation',
        question: 'Why do Deerfield Beach homes experience pooling around foundations?',
        answerHtml:
          '<p>Pooling around foundations often results from short or poorly directed downspouts, which is common in older Deerfield Beach neighborhoods. Heavy rainfall saturates the soil quickly, and without proper drainage extensions, water collects near slab edges. Over time, this can weaken soil stability and lead to minor shifting or cracking if not corrected with proper runoff management.</p>',
      },
    ],
  },
}
