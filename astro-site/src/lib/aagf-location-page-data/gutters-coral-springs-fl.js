/** Coral Springs location page — shared by Sanity patch + build fallback. */

export const GUTTERS_CORAL_SPRINGS_FL_SLUG = 'gutters-coral-springs-fl'

const MEDIA = 'Media (AAGF)/Images (AAGF)'

const CORAL_SPRINGS_MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57246.37616860937!2d-80.25882311503159!3d26.26495707765612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d905341976e065%3A0x8907b0b59129202b!2sCoral%20Springs%2C%20FL%2C%20USA!5e0!3m2!1sen!2scl!4v1782139784714!5m2!1sen!2scl'

export const guttersCoralSpringsFlPage = {
  title: 'Gutters in Coral Springs, FL',
  slug: { _type: 'slug', current: GUTTERS_CORAL_SPRINGS_FL_SLUG },
  eyebrow: 'Coral Springs Gutters',
  headline: 'Gutters in Coral Springs',
  lead:
    'Homes in Coral Springs deal with frequent afternoon storms, high humidity, and heavy tree coverage that quickly pushes gutter systems past their limit. Coral Springs gutters often fail when water can’t drain fast enough during sudden downpours, especially in neighborhoods with older rooflines or dense landscaping. All American Gutters is a trusted Coral Springs gutter company providing reliable systems built for local weather pressure and year-round runoff control.',
  heroFormIntro:
    'Tell us about your Coral Springs property and get a free design consultation with clear next steps.',
  meta: {
    _type: 'meta',
    title: 'Gutters in Coral Springs | Free Consultation | All American',
    description:
      'Reliable gutters in Coral Springs for homes and businesses. Seamless systems and expert care with a free consultation included today.',
  },
  seoDescription:
    'Reliable gutters in Coral Springs for homes and businesses. Seamless systems and expert care with a free consultation included today.',
  layoutBackgrounds: {
    _type: 'layoutBackgrounds',
    hero: {
      _type: 'layoutBackgroundSection',
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-coral-springs-fl-seamless-gutter-installation-brandon-fl.webp`,
    },
  },
  mapEmbedUrl: CORAL_SPRINGS_MAP_EMBED,
  reviews: {
    headline: 'What Customers in Coral Springs Are Saying',
  },
  contentSections: [
    {
      _type: 'cityContentSection',
      _key: 'aagf-coral-local-services',
      heading: 'Fast, Local Gutters in Coral Springs',
      body: `<p>When storms roll in across Coral Springs, clogged or damaged gutters can quickly lead to roof leaks, fascia rot, and pooling around foundations. We respond fast because local weather doesn’t wait, especially during peak rainy season.</p>
<p>We provide full-service solutions built for Coral Springs conditions:</p>
<ul>
<li>Gutter Repair – Fixing leaks, sagging sections, and storm damage</li>
<li>Gutter Installation – Custom-fit systems for South Florida rooflines and downpours</li>
<li>Gutter Cleaning – Removing organic debris in tree-heavy neighborhoods</li>
<li>Gutter Replacement – Upgrading aging or undersized systems</li>
<li>Gutter Guards – Reducing clogs from palm fronds and year-round vegetation drop</li>
<li>Gutter Downspout – Improving drainage away from foundations during storm surges</li>
</ul>
<p>From homes near Sample Road to properties around University Drive and Coral Ridge Drive corridors, we handle systems exposed to heavy runoff and constant humidity stress. Local presence means faster response than non-local crews who don’t understand Coral Springs drainage patterns.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-cleaning-coral-springs-fl-downspout-installation-white-gutter-drainage.webp`,
      imageAlt: 'White gutter and downspout installation in Coral Springs',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-coral-common-issues',
      heading: 'Common Coral Springs Gutter Issues',
      body: `<p>Coral Springs homes experience constant moisture exposure, fast storm bursts, and heavy vegetation shedding from mature trees. Combined with mixed housing ages and frequent roofline extensions, gutters often fail under inconsistent water flow.</p>
<p>Most property owners reach out after noticing:</p>
<ul>
<li>Overflow during sudden afternoon thunderstorms due to undersized systems</li>
<li>Algae and organic buildup from constant humidity and shaded rooflines</li>
<li>Tree debris accumulation from oak and palm-heavy neighborhoods</li>
<li>Misaligned drainage on older homes west of University Drive</li>
</ul>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-cleaning-coral-springs-fl-downspout-drainage-rock-bed.webp`,
      imageAlt: 'Downspout drainage on a Coral Springs home',
      imagePosition: 'below-body',
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-coral-why-choose',
      heading: 'Why Choose a Coral Springs Gutter Company',
      body: `<p>Homeowners in Coral Springs often deal with rushed installations, unclear pricing, and gutters that fail again after the first heavy storm. We focus on preventing that cycle with durable systems built for local rainfall intensity and long-term performance.</p>
<p>Homeowners and property managers across South Florida choose us because:</p>
<ul>
<li>100+ positive reviews reflecting consistent trust and customer satisfaction</li>
<li>Clear, proactive communication from start to finish</li>
<li>Stress-free, seamless service from consultation to cleanup</li>
<li>Meticulous attention to installation detail and alignment</li>
<li>Transparent pricing with no hidden surprises</li>
<li>Full-service gutter solutions including repair, replacement, and cleaning</li>
<li>Strong warranties backed by 1-year workmanship and 20-year aluminum coverage</li>
<li>Long-term systems designed for South Florida weather durability</li>
</ul>
<p>We also provide ongoing guidance so homeowners understand how to maintain performance through seasonal storms.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-fort-lauderdale-fl-townhome-gutter-system.webp`,
      imageAlt: 'Gutter system on a Broward County townhome near Coral Springs',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-coral-neighborhoods',
      heading: 'Serving Coral Springs Neighborhoods',
      body: `<p>We work across Coral Springs with quick access to residential zones near University Drive, Sample Road, Atlantic Boulevard, and Coral Springs Drive. From master-planned communities to older inland neighborhoods, each area presents different drainage behavior based on roof pitch, tree density, and storm exposure.</p>
<p>We regularly service homes in areas like The Windings, Wyndham Lakes, Eagle Trace, and neighborhoods surrounding the Sawgrass Expressway corridor.</p>
<p>We also handle nearby service routes connecting toward <a href="/locations/gutters-lighthouse-point-fl/">Lighthouse Point gutters</a> and properties familiar with <a href="/locations/gutters-broward-fl/">gutters in Broward</a>, where coastal weather patterns create similar drainage pressure and system wear.</p>`,
      showCtas: true,
      showMapAfter: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-coral-consultation',
      heading: 'Get a Free Consultation in Coral Springs, Florida',
      body: `<p>If you need dependable Coral Springs gutters, All American Gutters is ready to help with long-term solutions built for local weather conditions and real storm demands.</p>
<p>Call us today and get a free consultation with a trusted Coral Springs gutter company focused on durable protection and reliable service.</p>`,
      showCtas: true,
      renderAfterFaq: true,
    },
  ],
  faq: {
    _type: 'faq',
    headline: 'Coral Springs Gutters FAQs',
    headingId: 'coral-springs-gutters-faq',
    items: [
      {
        _type: 'faqItem',
        _key: 'aagf-coral-faq-overflow',
        question: 'Why do Coral Springs gutters overflow during storms?',
        answerHtml:
          '<p>Coral Springs often sees short, intense rainfall that overwhelms gutters already slowed by leaves, seed pods, and humidity buildup. When water can’t move quickly through downspouts, it spills over edges and damages fascia or landscaping. Regular cleaning and proper sizing are key to keeping Coral Springs gutters functioning during peak storm bursts.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-coral-faq-cleaning',
        question: 'How often should gutters be cleaned in Coral Springs?',
        answerHtml:
          '<p>Most homes in Coral Springs need cleaning more often than expected because of dense tree coverage and constant humidity. Debris breaks down quickly and sticks inside channels, restricting flow. We typically recommend inspections before and during the rainy season to prevent hidden buildup from turning into overflow or roof damage.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-coral-faq-clog',
        question: 'Why do gutters clog frequently in Coral Springs neighborhoods?',
        answerHtml:
          '<p>Coral Springs has dense tree coverage, which leads to constant gutter debris from leaves, seed pods, and small branches. During windy conditions, organic material builds up quickly inside gutters and downspouts. Once partially blocked, heavy rain causes backups and overflow. Regular cleaning and optional gutter guards help reduce clogging, especially in heavily wooded residential areas.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-coral-faq-standard',
        question: 'Are standard gutters enough for Coral Springs weather conditions?',
        answerHtml:
          '<p>Standard gutters often struggle in Coral Springs due to frequent heavy rainfall and seasonal storm activity. Many systems were installed for lighter climates and can’t handle sudden downpours. Homes benefit from oversized seamless gutters and properly placed downspouts to improve water flow. This reduces overflow risk and helps protect roofs, siding, and foundations from water damage.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-coral-faq-newer-homes',
        question: 'Do newer homes in Coral Springs still need regular gutter cleaning?',
        answerHtml:
          '<p>Yes. Even newer builds in Coral Springs face drainage issues because heavy rain volume and fast storm runoff can exceed standard installations. Landscaping debris and roof design angles also impact flow. Routine cleaning ensures systems continue performing as designed, especially during peak rainy months.</p>',
      },
    ],
  },
}
