/** Davie location page — shared by Sanity patch + build fallback. */

export const GUTTERS_DAVIE_FL_SLUG = 'gutters-davie-fl'

const MEDIA = 'Media (AAGF)/Images (AAGF)'

const DAVIE_MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57339.046369703705!2d-80.31806539079149!3d26.076372772816807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a7e20aa07b1d%3A0xe7b2c8ac6892b1fc!2sDavie%2C%20FL%2C%20USA!5e0!3m2!1sen!2scl!4v1782156559875!5m2!1sen!2scl'

export const guttersDavieFlPage = {
  title: 'Gutters in Davie, FL',
  slug: { _type: 'slug', current: GUTTERS_DAVIE_FL_SLUG },
  eyebrow: 'Davie Gutters',
  headline: 'Gutters in Davie',
  lead:
    "Davie's mix of rural-style properties, dense tree coverage, and heavy summer rainfall creates constant pressure on drainage systems. All American Gutters is a trusted Davie gutter company helping homeowners prevent overflow, wood rot, and long-term structural damage.",
  heroFormIntro:
    'Tell us about your Davie property and get a free consultation with clear next steps.',
  meta: {
    _type: 'meta',
    title: 'Gutters in Davie | Free Consultation | All American Gutters',
    description:
      'Reliable gutters in Davie for homes and businesses. Seamless systems and expert care with a free consultation included today.',
  },
  seoDescription:
    'Reliable gutters in Davie for homes and businesses. Seamless systems and expert care with a free consultation included today.',
  layoutBackgrounds: {
    _type: 'layoutBackgrounds',
    hero: {
      _type: 'layoutBackgroundSection',
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-hollywood-fl-white-gutter-install-two-story-home.webp`,
    },
  },
  mapEmbedUrl: DAVIE_MAP_EMBED,
  reviews: {
    headline: 'What Customers in Davie Are Saying',
  },
  contentSections: [
    {
      _type: 'cityContentSection',
      _key: 'aagf-davie-local-services',
      heading: 'Fast, Local Gutters in Davie',
      body: `<p>In Davie, storms don't give you time to react. One heavy afternoon rain can overwhelm clogged or undersized gutters and push water straight toward your foundation or soffits.</p>
<p>We provide full-service solutions built for Davie conditions:</p>
<ul>
<li>Gutter Repair for storm damage, separation, and leaks</li>
<li>Gutter Installation designed for wide rooflines and heavy rainfall</li>
<li>Gutter Cleaning to clear leaves, branches, and organic buildup</li>
<li>Gutter Replacement for aging or undersized systems</li>
<li>Gutter Maintenance to prevent overflow during peak rainy months</li>
<li>Gutter Guards to reduce constant debris buildup</li>
<li>Gutter Downspout adjustments to improve drainage flow</li>
<li>Soffit repair from moisture intrusion and ventilation damage</li>
<li>Fascia repair caused by long-term water exposure</li>
</ul>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-hollywood-fl-downspout-installation.webp`,
      imageAlt: 'Downspout installation on a Broward County home near Davie',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-davie-common-issues',
      heading: 'Common Davie Gutter Issues',
      body: `<p>Davie's combination of heavy rainfall, shaded properties, and slower drainage creates constant pressure on gutter systems. Many properties also have extended rooflines or older drainage setups that weren't designed for today's storm intensity.</p>
<p>Most property owners reach out after noticing:</p>
<ul>
<li>Water pooling near foundations due to poor downspout placement</li>
<li>Gutters filling quickly with oak leaves and palm debris, especially after storms</li>
<li>Overflow during sudden downpours that exceed system capacity</li>
<li>Moisture damage along fascia and soffits from trapped humidity</li>
</ul>
<p>We identify the full drainage problem so Davie gutters work properly through repeated storm cycles instead of failing under pressure.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-hollywood-fl-stone-home-downspout.webp`,
      imageAlt: 'Gutter downspout on a stone home in Broward County',
      imagePosition: 'below-body',
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-davie-why-choose',
      heading: 'Why Choose a Davie Gutter Company',
      body: `<p>Many Davie homeowners deal with contractors who underestimate how much debris and water these properties handle. The result is systems that clog quickly or fail after one storm season.</p>
<p>Homeowners and property managers across South Florida choose us because:</p>
<ul>
<li>100+ positive reviews reflecting consistent trust and customer satisfaction</li>
<li>Clear, proactive communication throughout every stage of the project</li>
<li>Stress-free, organized service with attention to property care</li>
<li>Transparent pricing with clear estimates and no unexpected changes</li>
<li>Full-service gutter solutions including installation, repair, replacement, and cleaning</li>
<li>Strong warranties: 1-year workmanship and 20-year aluminum materials</li>
<li>Systems designed for high-debris and high-rainfall environments</li>
</ul>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-fort-lauderdale-fl-black-gutter-downspout.webp`,
      imageAlt: 'Gutter installation on a home near Davie',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-davie-neighborhoods',
      heading: 'Serving Davie Neighborhoods',
      body: `<p>We work throughout Davie with quick access to areas near Flamingo Road, Griffin Road, and University Drive, as well as neighborhoods around Orange Drive, Pine Island Ridge, and Stirling Road. We regularly work along I-595 and State Road 84 corridors, where both older homes and expanding developments need updated drainage solutions built for long-term storm exposure.</p>
<p>From properties near Tree Tops Park to residential streets with heavy tree coverage, each home has different drainage behavior we account for during installation and repair. Flat terrain and larger lots require careful planning to keep water moving away from the structure.</p>
<p>Our service area also includes <a href="/locations/gutters-palm-springs-fl/">Palm Springs gutters</a> and gutters in Highland Beach, each with their own drainage challenges from lot size and coastal exposure.</p>`,
      showCtas: true,
      showMapAfter: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-davie-consultation',
      heading: 'Get a Free Consultation in Davie, Florida',
      body: `<p>If your gutters are overflowing, pulling away, or not handling Davie's rain, it's time to get them checked. As a trusted Davie gutter company, we'll assess your system, identify the real issues, and recommend a solution built for long-term performance.</p>
<p>Call All American Gutters today to schedule your free consultation. You get reliable protection, clear communication, and work done right the first time.</p>`,
      showCtas: true,
      renderAfterFaq: true,
    },
  ],
  faq: {
    _type: 'faq',
    headline: 'Davie Gutters FAQs',
    headingId: 'davie-gutters-faq',
    items: [
      {
        _type: 'faqItem',
        _key: 'aagf-davie-faq-runoff',
        question: 'Why do gutters in Davie struggle with runoff?',
        answerHtml:
          '<p>Homes in Davie often sit on larger lots with wide roof spans that shed a high volume of water quickly during storms. Standard gutter systems can’t always keep up with this concentrated runoff. When capacity is exceeded, water overshoots edges or backs up. Oversized gutters with additional downspouts are typically needed to handle these larger roof drainage demands.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-davie-faq-flood',
        question: 'Why does my yard flood even though I have gutters installed in Davie?',
        answerHtml:
          '<p>In Davie, gutters alone don’t always prevent yard flooding because runoff often drains into flat or poorly graded areas. During heavy rain, soil becomes saturated quickly and water spreads across the property. If downspouts aren’t directing water far enough away, they can worsen pooling. Proper drainage planning beyond the gutter system is often required.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-davie-faq-mud',
        question: 'Why do gutters fill with mud or dark buildup in Davie homes?',
        answerHtml:
          '<p>In Davie, it’s common for gutters to accumulate a muddy, dark buildup caused by decomposing leaves, pollen, and fine organic debris. With frequent rain and humidity, this material breaks down quickly and sticks to the gutter base. Over time, it restricts flow and creates sludge that’s harder to remove, especially in shaded or tree-heavy areas.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-davie-faq-standard',
        question: 'Are standard gutters enough for homes in Davie, Florida?',
        answerHtml:
          '<p>Standard gutters often fall short in Davie due to large roof areas and frequent heavy rain. Many systems installed years ago were not designed for current storm intensity. Homes benefit from oversized seamless gutters and properly placed downspouts to handle higher water volume. This improves drainage performance and helps protect foundations, landscaping, and exterior surfaces from water damage.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-davie-faq-necessary',
        question: 'Are gutters really necessary for homes in Davie?',
        answerHtml:
          '<p>Yes. Without gutters, heavy rainwater runs directly off the roof and collects near the foundation. In Davie’s flat terrain, that water doesn’t drain quickly, which increases the risk of soil erosion, foundation issues, and moisture intrusion. A properly installed system controls runoff and protects both the structure and surrounding landscape.</p>',
      },
    ],
  },
}
