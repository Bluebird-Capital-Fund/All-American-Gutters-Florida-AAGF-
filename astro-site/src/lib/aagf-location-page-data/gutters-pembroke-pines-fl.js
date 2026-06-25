/** Pembroke Pines location page — shared by Sanity patch + build fallback. */

export const GUTTERS_PEMBROKE_PINES_FL_SLUG = 'gutters-pembroke-pines-fl'

const MEDIA = 'Media (AAGF)/Images (AAGF)'

const PEMBROKE_PINES_MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114726.50761698748!2d-80.40997579841252!3d26.026901299120553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a698bf8cc6ab%3A0x9be2cf42d1963635!2sPembroke%20Pines%2C%20FL%2C%20USA!5e0!3m2!1sen!2scl!4v1782143043784!5m2!1sen!2scl'

export const guttersPembrokePinesFlPage = {
  title: 'Gutters in Pembroke Pines, FL',
  slug: { _type: 'slug', current: GUTTERS_PEMBROKE_PINES_FL_SLUG },
  eyebrow: 'Pembroke Pines Gutters',
  headline: 'Gutters in Pembroke Pines',
  lead:
    'Pembroke Pines sits in one of the most storm-active zones of Broward County, where heavy afternoon rain, long humid stretches, and dense suburban landscaping constantly push drainage systems to their limits. Pembroke Pines gutters need to handle sudden downpours, humidity, and wind-driven debris from mature trees across residential neighborhoods. All American Gutters is a trusted Pembroke Pines gutter company delivering durable, storm-ready solutions built for local conditions and year-round performance.',
  heroFormIntro:
    'Tell us about your Pembroke Pines property and get a free consultation with clear next steps.',
  meta: {
    _type: 'meta',
    title: 'Gutters in Pembroke Pines | Free Consultation | All American',
    description:
      'Reliable gutters in Pembroke Pines for homes and businesses. Seamless systems and expert care with a free consultation included today.',
  },
  seoDescription:
    'Reliable gutters in Pembroke Pines for homes and businesses. Seamless systems and expert care with a free consultation included today.',
  layoutBackgrounds: {
    _type: 'layoutBackgrounds',
    hero: {
      _type: 'layoutBackgroundSection',
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-coral-springs-fl-seamless-gutter-installation-brandon-fl.webp`,
    },
  },
  mapEmbedUrl: PEMBROKE_PINES_MAP_EMBED,
  reviews: {
    headline: 'What Customers in Pembroke Pines Are Saying',
  },
  contentSections: [
    {
      _type: 'cityContentSection',
      _key: 'aagf-pembroke-local-services',
      heading: 'Fast, Local Gutters in Pembroke Pines',
      body: `<p>Rain in Pembroke Pines typically comes in sudden, heavy bursts during the wet season, especially in afternoon storm cycles. That kind of rainfall exposes weak or undersized gutter systems almost immediately.</p>
<p>We provide full-service solutions built for Pembroke Pines conditions:</p>
<ul>
<li>Gutter Repair for storm stress, sagging, and leaks</li>
<li>Gutter Installation built for high-volume Florida rainfall</li>
<li>Gutter Cleaning to clear leaves, seed pods, and roof grit</li>
<li>Gutter Replacement for failing or undersized systems</li>
<li>Gutter Guards for heavy debris zones</li>
<li>Gutter Downspout adjustments for proper drainage flow</li>
</ul>
<p>From areas near Pines Boulevard and I-75 to residential communities deeper inland, we provide fast, local response backed by real South Florida experience.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-cleaning-coral-springs-fl-downspout-installation-white-gutter-drainage.webp`,
      imageAlt: 'Gutter and downspout installation in Pembroke Pines',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-pembroke-common-issues',
      heading: 'Common Pembroke Pines Gutter Issues',
      body: `<p>Pembroke Pines sits in a high-rainfall corridor where summer storms, humidity, and dense suburban landscaping all combine to stress gutter systems year-round. Many homes in communities like SilverLakes, Chapel Trail, and Towngate also deal with mature trees that constantly shed debris.</p>
<p>Most property owners reach out after noticing:</p>
<ul>
<li>Sudden overflow during afternoon storms due to undersized or aging gutters</li>
<li>Wind-blown palm fronds and oak leaves clogging downspouts after seasonal storms</li>
<li>Misaligned drainage on older homes or extensions added to original rooflines</li>
<li>Water pooling near foundations in flat-graded neighborhoods west of I-75</li>
</ul>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-hollywood-fl-stone-home-downspout.webp`,
      imageAlt: 'Downspout on a Broward County home near Pembroke Pines',
      imagePosition: 'below-body',
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-pembroke-why-choose',
      heading: 'Why Choose a Pembroke Pines Gutter Company',
      body: `<p>Homeowners in Pembroke Pines often deal with inconsistent contractor communication, rushed installations, and systems that fail again after the first major storm. We take a more local, detail-driven approach built for long-term reliability.</p>
<p>Homeowners and property managers across South Florida choose us because:</p>
<ul>
<li>100+ positive reviews reflecting consistent trust and customer satisfaction</li>
<li>Clear, proactive communication from start to finish</li>
<li>Stress-free, seamless service from consultation through cleanup</li>
<li>Meticulous attention to installation precision and slope alignment</li>
<li>Transparent pricing with no hidden changes or surprises</li>
<li>Full-service gutter solutions including installation, repair, and cleaning</li>
<li>Strong warranties backed by 1-year workmanship and 20-year aluminum coverage</li>
<li>Long-term systems designed for Broward’s rainfall intensity and humidity</li>
</ul>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-fort-lauderdale-fl-townhome-gutter-system.webp`,
      imageAlt: 'Townhome gutter system in Broward County',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-pembroke-neighborhoods',
      heading: 'Serving Pembroke Pines Neighborhoods',
      body: `<p>We work throughout Pembroke Pines with fast access to residential zones near Pines Boulevard, Sheridan Street, I-75, and Flamingo Road. From planned communities with wide rooflines to older inland neighborhoods, each area presents different drainage behavior based on tree density, elevation, and storm exposure.</p>
<p>We regularly service neighborhoods such as Silver Lakes, Towngate, Chapel Trail, and Encantada, along with surrounding Broward County corridors.</p>
<p>Our local coverage extends across Broward County’s western corridor, supporting homeowners dealing with drainage pressure common in <a href="/locations/gutters-broward-fl/">Broward gutters</a> conditions. We also frequently assist nearby service areas, including projects related to <a href="/locations/lantana-gutters-fl/">gutters in Lantana</a> when seasonal demand expands southward.</p>`,
      showCtas: true,
      showMapAfter: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-pembroke-consultation',
      heading: 'Get a Free Consultation in Pembroke Pines, Florida',
      body: `<p>If you need reliable Pembroke Pines gutters, All American Gutters delivers long-term solutions designed for South Florida weather and real storm conditions.</p>
<p>Call us today and get a free consultation with a trusted Pembroke Pines gutter company focused on durability, protection, and consistent performance.</p>`,
      showCtas: true,
      renderAfterFaq: true,
    },
  ],
  faq: {
    _type: 'faq',
    headline: 'Pembroke Pines Gutters FAQs',
    headingId: 'pembroke-pines-gutters-faq',
    items: [
      {
        _type: 'faqItem',
        _key: 'aagf-pembroke-faq-overflow',
        question: 'Why do gutters overflow so quickly in Pembroke Pines?',
        answerHtml:
          '<p>Pembroke Pines experiences intense rainfall bursts that can overwhelm standard gutter systems, especially in neighborhoods with large roof surfaces. When combined with palm debris and dense landscaping, water flow slows down quickly, leading to overflow along roof edges and potential fascia damage.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-pembroke-faq-cleaning',
        question: 'How often should gutters be cleaned in Pembroke Pines?',
        answerHtml:
          '<p>Most homes in Pembroke Pines require more frequent cleaning due to constant vegetation drop from palm trees and oaks. During the rainy season, buildup happens faster than expected, restricting water flow. Regular maintenance helps prevent sudden overflow during afternoon storms.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-pembroke-faq-pooling',
        question: 'Why is water pooling around foundations in Pembroke Pines homes?',
        answerHtml:
          '<p>Pooling around foundations in Pembroke Pines often happens when downspouts discharge too close to the home or lack proper extensions. The area’s flat terrain and compacted soil slow drainage after heavy rain. Water accumulates near slab edges and can lead to soil saturation over time. Extending runoff farther away helps prevent recurring moisture buildup and foundation stress.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-pembroke-faq-newer',
        question: 'Do newer Pembroke Pines homes still need regular gutter cleaning?',
        answerHtml:
          '<p>Yes. Even newer homes are affected by South Florida’s heavy rainfall and fast runoff patterns. Landscaping debris and roof design angles can still cause overflow if systems aren\'t cleaned regularly, especially during peak rainy months.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-pembroke-faq-standard',
        question: 'Are standard gutters enough for Pembroke Pines weather conditions?',
        answerHtml:
          '<p>Standard gutters often struggle in Pembroke Pines due to frequent heavy rainfall and seasonal storm activity. Many systems were installed for milder climates and can’t handle sudden downpours. Homes benefit from oversized seamless gutters and properly spaced downspouts to improve drainage. This reduces overflow risk and helps protect roofs, siding, and foundations from water damage.</p>',
      },
    ],
  },
}
