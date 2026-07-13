/** Palm Springs location page — shared by Sanity patch + build fallback. */

export const GUTTERS_PALM_SPRINGS_FL_SLUG = 'gutters-palm-springs-fl'

const MEDIA = 'Media (AAGF)/Images (AAGF)'

const PALM_SPRINGS_MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28531.555554764007!2d-80.11772501183492!3d26.634248771768362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d8008e8b3dd9%3A0xf6a5e03bd3401210!2sPalm%20Springs%2C%20FL%2C%20USA!5e0!3m2!1sen!2scl!4v1782147508717!5m2!1sen!2scl'

export const guttersPalmSpringsFlPage = {
  title: 'Gutters in Palm Springs, FL',
  slug: { _type: 'slug', current: GUTTERS_PALM_SPRINGS_FL_SLUG },
  eyebrow: 'Palm Springs Gutters',
  headline: 'Gutters in Palm Springs',
  lead:
    'Palm Springs sits in a dense residential pocket of Palm Beach County where summer downpours, fast drainage runoff, and mature tree coverage all put constant pressure on home gutter systems. All American Gutters is a trusted Palm Springs gutter company focused on durable, long-term protection. We handle Palm Springs gutters with systems designed for heavy rain bursts, debris-heavy environments, and Florida humidity that speeds up wear.',
  heroFormIntro:
    'Tell us about your Palm Springs property and get a free design consultation with clear next steps.',
  meta: {
    _type: 'meta',
    title: 'Gutters in Palm Springs | Free Consultation | All American',
    description:
      'Gutters in Palm Springs designed for durability and heavy rain performance. Keep your system working with a free consultation today.',
  },
  seoDescription:
    'Gutters in Palm Springs designed for durability and heavy rain performance. Keep your system working with a free consultation today.',
  layoutBackgrounds: {
    _type: 'layoutBackgrounds',
    hero: {
      _type: 'layoutBackgroundSection',
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-west-palm-beach-fl-backyard-gutter-install.webp`,
    },
  },
  mapEmbedUrl: PALM_SPRINGS_MAP_EMBED,
  reviews: {
    headline: 'What Customers in Palm Springs Are Saying',
  },
  contentSections: [
    {
      _type: 'cityContentSection',
      _key: 'aagf-palm-springs-local-services',
      heading: 'Fast, Local Gutters in Palm Springs',
      body: `<p>In Palm Springs, water hits hard and moves quickly, often pooling in low spots and stressing drainage systems. When afternoon storms hit near Lake Worth Road or spill through residential streets off Congress Avenue, gutters can fail quickly if they're not built for local flow conditions.</p>
<p>We provide full-service solutions built for Palm Springs conditions:</p>
<ul>
<li>Gutter Repair – fixing storm stress damage common after heavy summer rainfall</li>
<li>Gutter Installation – designed for high-volume rain and tree-heavy lots</li>
<li>Gutter Cleaning – clearing palm fronds, oak leaves, and seasonal debris buildup</li>
<li>Gutter Replacement – upgrading older systems that can't handle storm intensity</li>
<li>Gutter Guards – reducing constant clogging from dense residential tree cover</li>
<li>Gutter Downspout – improving flow control for flat suburban lots</li>
</ul>
<p>We stay local, so response times are faster than crews coming in from broader West Palm Beach routes.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-delray-beach-fl-corner-downspout.webp`,
      imageAlt: 'Corner downspout on a Palm Beach County home near Palm Springs',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-palm-springs-common-issues',
      heading: 'Common Palm Springs Gutter Issues',
      body: `<p>Palm Springs homes sit in a mix of older subdivisions and tighter residential layouts where trees, humidity, and storm runoff all interact at once. That combination creates predictable gutter stress patterns.</p>
<p>Most property owners reach out after noticing:</p>
<ul>
<li>Overflow during sudden downpours that overwhelm undersized or aging systems</li>
<li>Palm and oak debris buildup from mature neighborhood tree coverage</li>
<li>Fascia rot on older homes with long-term unnoticed leak points</li>
<li>Downspout backups caused by flat yard grading and poor runoff direction</li>
<li>Seam separation from repeated thermal expansion and storm vibration</li>
</ul>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-replacement-delray-beach-fl-copper-gutter-system.webp`,
      imageAlt: 'Gutter system on a residential home near Palm Springs',
      imagePosition: 'below-body',
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-palm-springs-why-choose',
      heading: 'Why Choose a Palm Springs Gutter Company',
      body: `<p>Many homeowners in Palm Springs deal with contractors who treat every job the same, without factoring in local drainage behavior or storm intensity. That's where problems repeat year after year.</p>
<p>Here’s why homeowners and property managers choose our <a href="/">gutter specialists in South Florida</a>:</p>
<ul>
<li>100+ positive reviews reflecting consistent trust and customer satisfaction</li>
<li>Clear, proactive communication throughout every stage of the job</li>
<li>Stress-free, seamless experience from inspection to cleanup</li>
<li>Meticulous attention to detail built around Florida rain conditions</li>
<li>Transparent pricing with clear expectations</li>
<li>Full-service gutter solutions: repair, replacement, cleaning, installation</li>
<li>Strong warranties: 1-year workmanship and 20-year aluminum materials</li>
<li>Long-term systems designed for heavy rain, humidity, and debris load</li>
</ul>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-west-palm-beach-fl-white-gutter-side-yard.webp`,
      imageAlt: 'White gutters on a side yard in Palm Beach County',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-palm-springs-neighborhoods',
      heading: 'Serving Palm Springs Neighborhoods',
      body: `<p>We work throughout Palm Springs with direct access via Lake Worth Road, Congress Avenue, and Melaleuca Lane, connecting quickly into surrounding Palm Beach County routes. From established residential streets near Cypress Lane and Davis Road to tighter inland subdivisions, each area presents different drainage flow challenges we account for during every installation and repair.</p>
<p>Across the region, we also provide services for <a href="/locations/lantana-gutters-fl/">Lantana gutters</a>, where coastal exposure leads to salt-air wear, as well as <a href="/locations/gutters-davie-fl/">gutters in Davie</a>, where dense tree coverage creates different but equally persistent clogging challenges.</p>`,
      showCtas: true,
      showMapAfter: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-palm-springs-consultation',
      heading: 'Get a Free Consultation in Palm Springs, Florida',
      body: `<p>If your gutters are overflowing, pulling away from the roofline, or struggling during every storm, we can take a look and identify what's going wrong.</p>
<p>Call us today for a free consultation with All American Gutters, your local Palm Springs gutter company. We focus on long-term protection built for Florida weather and reliable year-round performance.</p>`,
      showCtas: true,
      renderAfterFaq: true,
    },
  ],
  faq: {
    _type: 'faq',
    headline: 'Palm Springs Gutters FAQs',
    headingId: 'palm-springs-gutters-faq',
    items: [
      {
        _type: 'faqItem',
        _key: 'aagf-palm-springs-faq-overflow',
        question: 'Why do gutters overflow so often in Palm Springs homes?',
        answerHtml:
          '<p>Overflow in Palm Springs is usually caused by a mix of heavy summer rain bursts and debris from mature neighborhood trees. Many homes were not originally designed for today’s storm intensity, so water moves faster than older systems can handle. When gutters are undersized or partially blocked, even short storms can cause overflow along roof edges and fascia boards.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-palm-springs-faq-clog',
        question: 'Why do gutters clog frequently in Palm Springs neighborhoods?',
        answerHtml:
          '<p>Palm Springs has a mix of mature trees and landscaping that sheds leaves, seed pods, and organic debris year-round. Wind and rain push this material into gutters, where it builds up and restricts flow. Once partially blocked, heavy storms cause backups and overflow. Regular maintenance or high-flow gutter guards can significantly reduce clogging in these residential areas.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-palm-springs-faq-standard',
        question: 'Are standard gutters enough for Palm Springs weather conditions?',
        answerHtml:
          '<p>Standard gutters often struggle in Palm Springs due to frequent heavy rainfall and seasonal storm activity. Many systems were installed for lighter climates and can’t handle sudden downpours. Homes benefit from oversized seamless gutters and properly spaced downspouts to improve drainage capacity. This helps reduce overflow risk and protects roofs, siding, and foundations from water damage.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-palm-springs-faq-pull-away',
        question: 'Why do gutters start pulling away from homes in Palm Springs?',
        answerHtml:
          '<p>Gutters in Palm Springs often pull away due to repeated stormwater overload combined with fascia deterioration. When debris blocks flow, water becomes heavy and stresses fasteners. Over time, humidity weakens the wood behind the system, especially in older homes. Once the fascia softens, gutters begin to sag or detach and require reinforcement or replacement.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-palm-springs-faq-pooling',
        question: 'Why is water pooling around foundations in Palm Springs homes?',
        answerHtml:
          '<p>Pooling around foundations in Palm Springs often occurs when downspouts release water too close to the home. Flat terrain and compact soil slow drainage after heavy rain, allowing water to collect near slab edges. Over time, this can lead to soil saturation and minor shifting. Extending downspouts and improving runoff direction helps prevent recurring moisture buildup.</p>',
      },
    ],
  },
}
