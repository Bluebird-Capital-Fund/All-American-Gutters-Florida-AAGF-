/** Weston location page — shared by Sanity patch + build fallback. */

export const GUTTERS_WESTON_FL_SLUG = 'gutters-weston-fl'

const MEDIA = 'Media (AAGF)/Images (AAGF)'

const WESTON_MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57325.50614019121!2d-80.44731049060144!3d26.104006200212027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a091916ac747%3A0x89f4b74303b997e8!2sWeston%2C%20FL%2C%20USA!5e0!3m2!1sen!2scl!4v1782159895206!5m2!1sen!2scl'

export const guttersWestonFlPage = {
  title: 'Gutters in Weston, FL',
  slug: { _type: 'slug', current: GUTTERS_WESTON_FL_SLUG },
  eyebrow: 'Weston Gutters',
  headline: 'Gutters in Weston',
  lead:
    'Weston gutters have to handle intense seasonal rain, wide-roof suburban homes, and heavy landscaping debris from tree-lined communities. In neighborhoods near Weston Road and Royal Palm Boulevard, water moves fast during storms but struggles to drain evenly across flat, planned developments. As a trusted Weston gutter company, All American Gutters builds systems designed for consistent flow control, even under South Florida’s sudden downpours.',
  heroFormIntro:
    'Tell us about your Weston property and get a free consultation with clear next steps.',
  meta: {
    _type: 'meta',
    title: 'Gutters in Weston | Free Consultation | All American Gutters',
    description:
      'Reliable gutters in Weston for homes and businesses. Seamless systems and expert care with a free consultation included today.',
  },
  seoDescription:
    'Reliable gutters in Weston for homes and businesses. Seamless systems and expert care with a free consultation included today.',
  layoutBackgrounds: {
    _type: 'layoutBackgrounds',
    hero: {
      _type: 'layoutBackgroundSection',
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-coral-springs-fl-seamless-gutter-installation-brandon-fl.webp`,
    },
  },
  mapEmbedUrl: WESTON_MAP_EMBED,
  reviews: {
    headline: 'What Customers in Weston Are Saying',
  },
  contentSections: [
    {
      _type: 'cityContentSection',
      _key: 'aagf-weston-local-services',
      heading: 'Fast, Local Gutters in Weston',
      body: `<p>In Weston, drainage issues often show up after back-to-back rain events rather than single storms. HOA landscaping, lake systems, and mature neighborhood trees all contribute to steady debris buildup that overwhelms gutters over time.</p>
<p>We provide full-service solutions built for Weston conditions:</p>
<ul>
<li>Gutter Repair for leaks, sagging runs, and storm damage</li>
<li>Gutter Installation designed for large suburban rooflines</li>
<li>Gutter Cleaning to remove leaves, pods, and roof sediment</li>
<li>Gutter Replacement for aging or undersized systems</li>
<li>Gutter Maintenance to prevent seasonal overflow issues</li>
<li>Gutter Guards for HOA-heavy landscaping areas</li>
<li>Gutter Downspout adjustments to improve flow direction</li>
</ul>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-cleaning-coral-springs-fl-downspout-installation-white-gutter-drainage.webp`,
      imageAlt: 'White gutter downspout on a Broward County home near Weston',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-weston-common-issues',
      heading: 'Common Weston Gutter Issues',
      body: `<p>Weston's combination of planned suburban drainage, heavy landscaping, and frequent summer storms creates predictable but serious gutter stress. Even newer homes experience overflow when systems aren't designed for peak rainfall bursts.</p>
<p>Most property owners reach out after noticing:</p>
<ul>
<li>Overflow during sudden downpours when water volume exceeds gutter capacity</li>
<li>Leaf and palm debris buildup from dense residential landscaping</li>
<li>Downspouts discharging too close to foundations in flat yard layouts</li>
<li>Water pooling along roof edges due to slow drainage during long storms</li>
</ul>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-hollywood-fl-stone-home-downspout.webp`,
      imageAlt: 'Gutter downspout on a suburban home near Weston',
      imagePosition: 'below-body',
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-weston-why-choose',
      heading: 'Why Choose a Weston Gutter Company',
      body: `<p>Homeowners in Weston often deal with contractors who install generic systems that don't account for local storm intensity or neighborhood drainage behavior. That leads to repeat overflow problems even on newer homes.</p>
<p>Homeowners and property managers across South Florida choose us because:</p>
<ul>
<li>100+ positive reviews reflecting consistent trust and customer satisfaction</li>
<li>Clear, proactive communication from inspection to completion</li>
<li>Stress-free service that respects HOA rules and property standards</li>
<li>Meticulous attention to slope, flow, and water control</li>
<li>Transparent pricing with clear estimates and defined scope</li>
<li>Full-service gutter solutions including installation, repair, replacement, and cleaning</li>
<li>Strong warranties: 1-year workmanship and 20-year aluminum materials</li>
<li>Systems designed for planned-community drainage environments</li>
</ul>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-fort-lauderdale-fl-townhome-gutter-system.webp`,
      imageAlt: 'Gutter system on a townhome in Broward County',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-weston-neighborhoods',
      heading: 'Serving Weston Neighborhoods',
      body: `<p>We serve all Weston communities, including Savanna, Windmill Ranch Estates, Weston Hills, and The Ridges. We work throughout Weston with quick access to neighborhoods near Weston Road, Bonaventure Boulevard, and Royal Palm Boulevard, as well as communities around Indian Trace and Saddle Club Road.</p>
<p>We also regularly work along I-75 access points and surrounding western Broward corridors, where storm runoff can shift quickly during peak rainfall. Similarly, we service <a href="/locations/gutters-highland-beach-fl/">Highland Beach gutters</a>, where salt air drives faster corrosion, and <a href="/locations/gutters-parkland-fl/">gutters in Parkland</a>, where heavy tree coverage creates consistent debris and maintenance demand.</p>`,
      showCtas: true,
      showMapAfter: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-weston-consultation',
      heading: 'Get a Free Consultation in Weston, Florida',
      body: `<p>If your gutters are overflowing during storms or struggling with debris buildup, it's time to get them checked. As a trusted Weston gutter company, we'll assess your system and recommend a solution designed for local storm conditions and long-term reliability.</p>
<p>Call All American Gutters today for a free consultation. You get clear communication, dependable service, and a system built to handle Weston's weather year after year.</p>`,
      showCtas: true,
      renderAfterFaq: true,
    },
  ],
  faq: {
    _type: 'faq',
    headline: 'Weston Gutters FAQs',
    headingId: 'weston-gutters-faq',
    items: [
      {
        _type: 'faqItem',
        _key: 'aagf-weston-faq-overflow',
        question: 'Why do gutters overflow in Weston even on newer homes?',
        answerHtml:
          '<p>Weston experiences sudden, high-volume storms that can exceed the capacity of standard gutter systems, especially on wide suburban roofs. Even newer homes overflow when downspouts or slopes aren’t optimized. We evaluate flow design, not just cleanliness, to ensure water moves efficiently during peak rainfall events common in the area.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-weston-faq-cleaning',
        question: 'Is gutter cleaning enough in Weston, or do I need upgrades?',
        answerHtml:
          '<p>Cleaning is important, but in Weston it’s often only part of the solution. With dense landscaping, palm debris, and frequent heavy storms, many systems are already working at their limit. If gutters continue to overflow after cleaning, it usually points to capacity or design issues. In those cases, upgrades like larger seamless gutters or additional downspouts are often needed to properly manage water volume and prevent recurring problems during the rainy season.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-weston-faq-service',
        question: 'How often should gutters be serviced in Weston?',
        answerHtml:
          '<p>Due to year-round vegetation and frequent storms, Weston gutters typically need more consistent attention than in drier regions. Leaves, palm debris, and storm runoff all contribute to buildup. Regular maintenance helps prevent overflow, structural stress, and long-term water damage to roofing and fascia systems.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-weston-faq-standard',
        question: 'Are standard gutters enough for Weston’s weather conditions?',
        answerHtml:
          '<p>Standard gutters often fall short in Weston due to frequent heavy rainfall and hurricane-season storms. Many systems installed years ago were designed for lighter climates and struggle with sudden water surges. Homes benefit from oversized seamless gutters with properly spaced downspouts to improve drainage capacity. This helps reduce overflow risk and protects roofs, walls, and landscaping from water damage.</p>',
      },
    ],
  },
}
