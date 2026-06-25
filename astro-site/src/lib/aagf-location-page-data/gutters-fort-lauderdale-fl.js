/** Fort Lauderdale location page — shared by Sanity patch + build fallback. */

export const GUTTERS_FORT_LAUDERDALE_FL_SLUG = 'gutters-fort-lauderdale-fl'

const MEDIA = 'Media (AAGF)/Images (AAGF)'

const FORT_LAUDERDALE_MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114614.37719455468!2d-80.23237734519691!3d26.141346125451495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9012720facaf5%3A0x7602be7540bf8ebe!2sFort%20Lauderdale%2C%20FL%2C%20USA!5e0!3m2!1sen!2scl!4v1781881291100!5m2!1sen!2scl'

export const guttersFortLauderdaleFlPage = {
  title: 'Gutters in Fort Lauderdale, FL',
  slug: { _type: 'slug', current: GUTTERS_FORT_LAUDERDALE_FL_SLUG },
  eyebrow: 'Fort Lauderdale Gutters',
  headline: 'Gutters in Fort Lauderdale',
  lead:
    'In Fort Lauderdale, sudden downpours, salt-heavy air, and long humid stretches push every system to its limit. When water can’t move fast enough, it spills into fascia, soffits, and foundations fast. That’s why Fort Lauderdale gutters need to be installed and maintained with local conditions in mind. All American Gutters is a trusted Fort Lauderdale gutter company focused on systems built to handle coastal pressure and year-round rainfall.',
  heroFormIntro:
    'Tell us about your Fort Lauderdale property and get a free consultation with clear next steps.',
  meta: {
    _type: 'meta',
    title: 'Gutters in Fort Lauderdale | Free Consultation | All American',
    description:
      'Fort Lauderdale gutters installed and repaired for strong, storm-ready protection. Expert service for homes and businesses with a free consultation.',
  },
  seoDescription:
    'Fort Lauderdale gutters installed and repaired for strong, storm-ready protection. Expert service for homes and businesses with a free consultation.',
  layoutBackgrounds: {
    _type: 'layoutBackgrounds',
    hero: {
      _type: 'layoutBackgroundSection',
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-fort-lauderdale-fl-residential-gutter-install.webp`,
    },
  },
  mapEmbedUrl: FORT_LAUDERDALE_MAP_EMBED,
  reviews: {
    headline: 'What Customers in Fort Lauderdale Are Saying',
  },
  contentSections: [
    {
      _type: 'cityContentSection',
      _key: 'aagf-ftl-local-services',
      heading: 'Fast, Local Gutters in Fort Lauderdale',
      body: `<p>In Fort Lauderdale, gutter problems don’t stay small for long. Heavy rain bands, tropical storms, and constant humidity can turn minor overflow into real property damage within a single season.</p>
<p>We handle full-service gutter work built for local conditions:</p>
<ul>
<li>Gutter Repair for storm and overflow damage</li>
<li>Gutter Installation for new and replacement systems</li>
<li>Gutter Cleaning to remove palm debris and buildup</li>
<li>Gutter Replacement for failing or undersized systems</li>
<li>Gutter Guards for heavy foliage areas</li>
<li>Gutter Downspout adjustments for drainage control</li>
</ul>
<p>Unlike out-of-area contractors, we work in Fort Lauderdale year-round and understand how fast coastal weather exposes weak systems.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-fort-lauderdale-fl-townhome-gutter-system.webp`,
      imageAlt: 'Gutter installation on a Fort Lauderdale townhome',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-ftl-common-issues',
      heading: 'Common Fort Lauderdale Gutter Issues',
      body: `<p>Fort Lauderdale homes deal with a constant mix of coastal moisture, salt air, and intense rain bursts that test gutter systems far beyond standard conditions. Many neighborhoods also have dense landscaping and mature palms that shed debris year-round.</p>
<p>Most property owners reach out after noticing:</p>
<ul>
<li>Rapid clogging from palm fronds and tropical plant debris during rainy stretches</li>
<li>Salt-air corrosion weakening fasteners and aluminum over time near coastal zones</li>
<li>Overflow during short, heavy storms common in summer and hurricane season</li>
<li>Misaligned systems on older stucco homes that can’t handle modern rainfall intensity</li>
</ul>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-cleaning-fort-lauderdale-fl-gutter-corner-drainage.webp`,
      imageAlt: 'Gutter corner drainage on a Fort Lauderdale home',
      imagePosition: 'below-body',
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-ftl-why-choose',
      heading: 'Why Choose a Fort Lauderdale Gutter Company',
      body: `<p>Homeowners in Fort Lauderdale often deal with contractors who underestimate how aggressive local weather really is. That leads to rushed installs, weak drainage planning, and systems that fail right when storm season hits.</p>
<p>Homeowners and property managers across South Florida choose us because:</p>
<ul>
<li>100+ positive reviews reflecting consistent trust and satisfaction</li>
<li>Clear, proactive communication from start to finish</li>
<li>Stress-free, seamless service with clean job sites</li>
<li>Meticulous attention to installation detail and slope accuracy</li>
<li>Transparent pricing with clear estimates and defined expectations</li>
<li>Full-service solutions including repair, installation, cleaning, and replacement</li>
<li>Strong warranties: 1-year workmanship and 20-year aluminum coverage</li>
<li>Durable systems designed for Florida rain intensity and humidity cycles</li>
</ul>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-fort-lauderdale-fl-black-gutter-downspout.webp`,
      imageAlt: 'Black gutter downspout installation in Fort Lauderdale',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-ftl-neighborhoods',
      heading: 'Serving Fort Lauderdale Neighborhoods',
      body: `<p>We work across Fort Lauderdale with fast access to both coastal and inland neighborhoods, including Victoria Park, Coral Ridge, Rio Vista, and Harbordale. We also regularly service areas near Las Olas Boulevard, Sunrise Boulevard, Broward Boulevard, and Federal Highway (US-1).</p>
<p>From waterfront homes near A1A to older properties west of I-95, each area has different drainage stress points we account for during installation and repair.</p>
<p>We also extend service into nearby communities, including <a href="/gutters-boca-raton-fl/">gutters in Boca Raton</a>, where coastal humidity and heavy rainfall can quickly expose weak drainage systems over time. We also work with <a href="/locations/gutters-palm-beach-gardens-fl/">gutters in Palm Beach Gardens</a>, where heavy rain and dense landscaping put constant pressure on residential drainage systems.</p>`,
      showCtas: true,
      showMapAfter: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-ftl-consultation',
      heading: 'Get a Free Consultation in Fort Lauderdale, Florida',
      body: `<p>If your gutters are struggling with overflow, corrosion, or storm-related wear, All American Gutters is ready to help. We’re a local team focused on building systems that hold up through Fort Lauderdale’s toughest weather cycles.</p>
<p>Reach out for a clear, no-surprise estimate and a system designed for long-term protection. Call us today and get a free consultation with our Fort Lauderdale team.</p>`,
      showCtas: true,
      renderAfterFaq: true,
    },
  ],
  faq: {
    _type: 'faq',
    headline: 'Fort Lauderdale Gutters FAQs',
    headingId: 'fort-lauderdale-gutters-faq',
    items: [
      {
        _type: 'faqItem',
        _key: 'aagf-ftl-faq-salt',
        question:
          'Can salt air damage gutters even if I’m not directly on the beach in Fort Lauderdale?',
        answerHtml:
          '<p>Yes. Salt air travels farther inland than most homeowners expect, especially in eastern Fort Lauderdale and areas near major waterways. Over time, it affects hangers, screws, and seams, even on aluminum systems. This leads to slow weakening that often shows up later as leaks, sagging sections, or loose gutter lines after storms.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-ftl-faq-overflow',
        question: 'Why do my gutters overflow only during certain storms in Fort Lauderdale?',
        answerHtml:
          '<p>Fort Lauderdale’s rainfall pattern is intense but short, meaning gutters may appear fine in normal rain but fail during high-volume bursts. When downpours hit quickly, undersized downspouts or slight pitch issues get exposed immediately. This intermittent failure is usually a sign of capacity or flow design problems, not just debris buildup.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-ftl-faq-clog',
        question: 'Why do my gutters clog so fast even after cleaning in Fort Lauderdale?',
        answerHtml:
          '<p>In Fort Lauderdale, gutters don’t just deal with leaves—they constantly collect palm debris, seed pods, roof grit, and windblown organic material. Because rain events are frequent and intense, even small buildup quickly compacts and blocks water flow again. If the system has weak filtration or poor slope, clogs return faster than expected.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-ftl-faq-newer-homes',
        question:
          'Why do newer homes in Fort Lauderdale still have gutter problems if everything was just installed?',
        answerHtml:
          '<p>This is common in newer developments where builder-grade systems are installed for basic compliance, not local heavy rainfall performance. In Fort Lauderdale, those systems often struggle with intense afternoon storms and flat roof runoff patterns. The issue usually isn’t installation quality alone, but undersized design that can’t handle real coastal rainfall conditions long-term.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-ftl-faq-older-homes',
        question: 'Do you help with older homes and outdated gutter systems in Fort Lauderdale?',
        answerHtml:
          '<p>Yes, many Fort Lauderdale homes, especially older stucco properties, have undersized or poorly pitched gutter systems. We assess whether repair or full replacement is the better long-term solution. In many cases, upgrading improves drainage capacity significantly and reduces recurring issues caused by outdated designs that weren’t built for today’s rainfall intensity.</p>',
      },
    ],
  },
}
