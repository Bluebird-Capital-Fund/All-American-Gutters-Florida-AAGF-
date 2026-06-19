/** West Palm Beach location page — shared by Sanity patch + build fallback. */

export const GUTTERS_WEST_PALM_BEACH_FL_SLUG = 'gutters-west-palm-beach-fl'

const MEDIA = 'Media (AAGF)/Images (AAGF)'

const WEST_PALM_BEACH_MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114019.02134761946!2d-80.21132627808906!3d26.741362948913586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d5ccb595adc1%3A0x15efc7b51fe16bde!2sWest%20Palm%20Beach%2C%20FL%2C%20USA!5e0!3m2!1sen!2scl!4v1781895010392!5m2!1sen!2scl'

export const guttersWestPalmBeachFlPage = {
  title: 'Gutters in West Palm Beach, FL',
  slug: { _type: 'slug', current: GUTTERS_WEST_PALM_BEACH_FL_SLUG },
  eyebrow: 'West Palm Beach Gutters',
  headline: 'Gutters in West Palm Beach',
  lead:
    'West Palm Beach homes deal with longer storm cycles, inland humidity, and sudden coastal weather shifts that can overwhelm drainage systems without warning. Heavy rain often builds over time here, not just in short bursts, which puts sustained pressure on gutters and downspouts. That’s why West Palm Beach gutters need to be designed for both volume and duration. All American Gutters is a trusted West Palm Beach gutter company focused on systems that perform through extended rain and humid conditions.',
  heroFormIntro:
    'Tell us about your West Palm Beach property and get a free consultation with clear next steps.',
  meta: {
    _type: 'meta',
    title: 'Gutters in West Palm Beach | Free Consultation | All American',
    description:
      'Reliable West Palm Beach gutters service for homes and businesses. Seamless systems and expert care with a free consultation included.',
  },
  seoDescription:
    'Reliable West Palm Beach gutters service for homes and businesses. Seamless systems and expert care with a free consultation included.',
  layoutBackgrounds: {
    _type: 'layoutBackgrounds',
    hero: {
      _type: 'layoutBackgroundSection',
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-west-palm-beach-fl-backyard-gutter-install.webp`,
    },
  },
  mapEmbedUrl: WEST_PALM_BEACH_MAP_EMBED,
  reviews: {
    headline: 'What Customers in West Palm Beach Are Saying',
  },
  contentSections: [
    {
      _type: 'cityContentSection',
      _key: 'aagf-wpb-local-services',
      heading: 'Local Gutters in West Palm Beach, FL',
      body: `<p>In West Palm Beach, gutter issues tend to develop gradually and then fail all at once when systems can’t keep up with prolonged rain.</p>
<p>We provide full-service gutter solutions built for local conditions:</p>
<ul>
<li>Gutter Repair for overflow, sagging, and storm-related damage</li>
<li>Gutter Installation designed for extended rainfall flow</li>
<li>Gutter Cleaning to manage debris from large trees and landscaping</li>
<li>Gutter Replacement for aging or undersized systems</li>
<li>Gutter Maintenance to prevent buildup and drainage failure</li>
<li>Gutter Guards for high-debris properties</li>
<li>Gutter Downspout adjustments for controlled runoff</li>
<li>Soffit repair from moisture exposure</li>
<li>Fascia repair from long-term water contact</li>
</ul>
<p>We stay active across Palm Beach County, so we understand how West Palm Beach differs from tighter coastal zones to the south.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-west-palm-beach-fl-white-gutter-side-yard.webp`,
      imageAlt: 'White gutters on a West Palm Beach home side yard',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-wpb-common-issues',
      heading: 'Common West Palm Beach Gutter Issues',
      body: `<p>West Palm Beach properties often sit on larger lots with heavier tree coverage, which creates different gutter challenges compared to denser coastal cities. Combined with longer rain cycles and high humidity, systems face continuous strain rather than short bursts alone.</p>
<p>Common issues we see:</p>
<ul>
<li>Slow overflow during extended storms that exceed system drainage capacity</li>
<li>Heavy organic buildup from large trees, not just palms, especially in older neighborhoods</li>
<li>Fascia deterioration from prolonged moisture exposure between rain cycles</li>
<li>Downspout backup caused by insufficient drainage planning on larger properties</li>
<li>Wear and separation at seams due to constant humidity and limited drying time</li>
</ul>
<p>These issues are often tied to system sizing and layout. Fixing the root problem prevents repeated overflow and ongoing structural damage.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-repair-west-palm-beach-fl-townhome-gutter-install.webp`,
      imageAlt: 'Gutter repair on a West Palm Beach townhome',
      imagePosition: 'below-body',
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-wpb-why-choose',
      heading: 'Why Choose a West Palm Beach Gutter Company',
      body: `<p>Homeowners in West Palm Beach often deal with inconsistent work quality, especially on larger homes where proper drainage planning matters more. Systems that aren’t built for extended rainfall cycles tend to fail early.</p>
<p>We focus on reliability built for local environments:</p>
<ul>
<li>100+ positive reviews reflecting consistent customer satisfaction</li>
<li>Clear, proactive communication throughout the entire process</li>
<li>Stress-free, seamless experience from inspection to cleanup</li>
<li>Meticulous attention to detail in installation and drainage design</li>
<li>Transparent pricing with clear expectations</li>
<li>Full-service gutter solutions including installation, repair, cleaning, and replacement</li>
<li>Strong warranties: 1-year workmanship and 20-year aluminum coverage</li>
<li>Systems built for long-term durability in humid, high-rain conditions</li>
</ul>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-hollywood-fl-white-gutter-install-two-story-home.webp`,
      imageAlt: 'Two-story home with white gutter installation in South Florida',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-wpb-neighborhoods',
      heading: 'Serving West Palm Beach Neighborhoods',
      body: `<p>We work across West Palm Beach with fast access to both coastal and inland areas, including El Cid, Flamingo Park, Northwood, and neighborhoods along Okeechobee Boulevard, Southern Boulevard, and Palm Beach Lakes Boulevard. Our crews regularly move between I-95 and the Florida Turnpike corridors, allowing us to cover both residential and larger-lot properties efficiently.</p>
<p>From homes closer to the Intracoastal to neighborhoods further inland, drainage challenges shift from salt exposure to heavy tree coverage and slower runoff patterns.</p>
<p>We also handle <a href="/locations/gutters-deerfield-beach-fl/">Deerfield Beach gutters</a>, where tighter coastal lots and faster storm bursts create different overflow risks. Further south, we work on <a href="/locations/gutters-hollywood-fl/">gutters in Hollywood, FL</a>, where wind-driven rain and dense development often expose weak drainage setups quickly.</p>`,
      showCtas: true,
      showMapAfter: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-wpb-consultation',
      heading: 'Get a Free Consultation in West Palm Beach, Florida',
      body: `<p>If your gutters are struggling with overflow, buildup, or long-term moisture exposure, All American Gutters is a trusted West Palm Beach gutter company ready to help. We build systems designed for West Palm Beach conditions and long rain cycles.</p>
<p>Call us today and get a free consultation with a team that understands how West Palm Beach gutters need to perform to protect your home over time.</p>`,
      showCtas: true,
      renderAfterFaq: true,
    },
  ],
  faq: {
    _type: 'faq',
    headline: 'West Palm Beach Gutters FAQs',
    headingId: 'west-palm-beach-gutters-faq',
    items: [
      {
        _type: 'faqItem',
        _key: 'aagf-wpb-faq-overflow',
        question: 'Why do gutters in West Palm Beach overflow during rainstorms?',
        answerHtml:
          '<p>Unlike areas with short bursts, West Palm Beach often sees extended rainfall that gradually fills gutters beyond capacity. Systems that seem fine at first can fail as water continues to build over time. This usually points to undersized gutters or limited downspout capacity, especially on larger homes where roof runoff volume is higher.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-wpb-faq-coastal',
        question: 'Why do gutters deteriorate faster near the coast in West Palm Beach?',
        answerHtml:
          '<p>Coastal areas in West Palm Beach expose gutters to constant salt air and high humidity, which accelerates corrosion on metal components. Fasteners, seams, and hangers tend to weaken first, leading to leaks and sagging sections. Homes closer to the Intracoastal or ocean see faster wear. Aluminum seamless systems are better suited because they resist rust and perform longer in these conditions.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-wpb-faq-pooling',
        question: 'Why do I see water pooling near my foundation in West Palm Beach after rain?',
        answerHtml:
          '<p>This often comes from downspouts not directing water far enough away from the home. On larger lots, water may spread instead of draining properly, especially in flat terrain. Over time, this leads to pooling and soil saturation near the foundation, increasing the risk of structural moisture issues.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-wpb-faq-larger-homes',
        question: 'Do larger homes in West Palm Beach need different gutter systems?',
        answerHtml:
          '<p>Yes. Larger roof areas produce more runoff, especially during extended storms. Standard gutter systems often can’t handle the volume effectively. These homes typically need upgraded sizing, additional downspouts, and better layout planning to manage water flow properly and prevent overflow during sustained rainfall conditions.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-wpb-faq-standard',
        question: 'Are standard gutter systems enough for West Palm Beach weather?',
        answerHtml:
          '<p>Standard gutter systems often fall short in West Palm Beach due to the volume and intensity of tropical rainfall. Many homes benefit from oversized seamless gutters and additional downspouts to improve water flow. Systems designed for milder climates tend to overflow during storms. A properly sized and installed system is key to protecting the home from water intrusion and exterior damage.</p>',
      },
    ],
  },
}
