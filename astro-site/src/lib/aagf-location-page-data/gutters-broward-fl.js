/** Broward County location page — shared by Sanity patch + build fallback. */

export const GUTTERS_BROWARD_FL_SLUG = 'gutters-broward-fl'

const MEDIA = 'Media (AAGF)/Images (AAGF)'

const BROWARD_MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d458398.42161544616!2d-80.77861708704916!3d26.156388097294993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d97f7e1b824615%3A0xa0311f8ebf0bd614!2sBroward%20County%2C%20FL%2C%20USA!5e0!3m2!1sen!2scl!4v1782141262363!5m2!1sen!2scl'

export const guttersBrowardFlPage = {
  title: 'Gutters in Broward County, FL',
  slug: { _type: 'slug', current: GUTTERS_BROWARD_FL_SLUG },
  eyebrow: 'Broward County Gutters',
  headline: 'Gutters in Broward County',
  lead:
    'South Florida’s rapid storms, coastal humidity, and dense urban development put constant pressure on drainage systems across the region. Broward gutters often struggle with sudden downpours that overwhelm undersized systems, especially in neighborhoods with heavy tree cover or older roofing layouts. All American Gutters is a trusted Broward gutter company providing durable, storm-ready systems built for long-term performance in local conditions.',
  heroFormIntro:
    'Tell us about your Broward County property and get a free design consultation with clear next steps.',
  meta: {
    _type: 'meta',
    title: 'Gutters in Broward | Free Consultation | All American Gutters',
    description:
      'Reliable gutters in Broward for homes and businesses. Seamless systems and expert care with a free consultation included today.',
  },
  seoDescription:
    'Reliable gutters in Broward for homes and businesses. Seamless systems and expert care with a free consultation included today.',
  layoutBackgrounds: {
    _type: 'layoutBackgrounds',
    hero: {
      _type: 'layoutBackgroundSection',
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-fort-lauderdale-fl-residential-gutter-install.webp`,
    },
  },
  mapEmbedUrl: BROWARD_MAP_EMBED,
  reviews: {
    headline: 'What Customers in Broward Are Saying',
  },
  contentSections: [
    {
      _type: 'cityContentSection',
      _key: 'aagf-broward-local-services',
      heading: 'Fast, Local Gutters in Broward',
      body: `<p>When storms roll through Broward County, heavy rain can overwhelm gutters in a matter of minutes, especially on older homes or properties without updated drainage.</p>
<p>We provide full-service solutions designed for Broward conditions:</p>
<ul>
<li>Gutter Repair – Fixing storm-related leaks, sagging sections, and overflow damage</li>
<li>Gutter Installation – Custom systems built for South Florida’s high-volume rain patterns</li>
<li>Gutter Cleaning – Removing organic buildup common across Broward neighborhoods</li>
<li>Gutter Replacement – Upgrading old systems that can’t handle modern storm intensity</li>
<li>Gutter Guards – Reducing clogging from constant tree shedding and tropical debris</li>
<li>Gutter Downspout – Improving stormwater flow away from foundations</li>
</ul>
<p>From coastal zones near A1A to inland neighborhoods around I-95, we respond quickly with solutions built for Broward’s unpredictable weather patterns.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-hollywood-fl-white-gutter-install-two-story-home.webp`,
      imageAlt: 'Gutter installation on a Broward County home',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-broward-common-issues',
      heading: 'Common Broward Gutter Issues',
      body: `<p>Broward County’s combination of coastal humidity, tropical storm cycles, and dense residential landscaping creates constant strain on gutter systems. Many homes also mix older construction with newer additions, which often leads to inconsistent drainage performance.</p>
<p>Most property owners reach out after noticing:</p>
<ul>
<li>Overflow during sudden storm bursts that exceed standard gutter capacity</li>
<li>Salt air corrosion in coastal communities, weakening metal components over time</li>
<li>Clogged downspouts from palm fronds and year-round vegetation drop</li>
<li>Misaligned or undersized systems on older homes</li>
</ul>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-repair-pompano-beach-fl-brick-home-gutters.webp`,
      imageAlt: 'Gutter repair on a Broward County brick home',
      imagePosition: 'below-body',
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-broward-why-choose',
      heading: 'Why Choose a Broward Gutter Company',
      body: `<p>Homeowners across Broward often deal with inconsistent contractor communication, rushed installations, and systems that fail again after the first heavy storm. We take a more controlled, local-first approach built around real weather demands.</p>
<p>Homeowners and property managers across South Florida choose us because:</p>
<ul>
<li>100+ positive reviews reflecting consistent trust and customer satisfaction</li>
<li>Clear, proactive communication throughout every stage of the project</li>
<li>Stress-free, seamless service from consultation to final cleanup</li>
<li>Meticulous attention to detail in installation and alignment</li>
<li>Transparent pricing with no surprises or hidden adjustments</li>
<li>Full-service gutter solutions including installation, repair, and cleaning</li>
<li>Strong warranties backed by 1-year workmanship and 20-year aluminum coverage</li>
<li>Long-term systems designed specifically for South Florida rainfall intensity</li>
</ul>
<p>We also provide ongoing guidance so homeowners understand how to maintain performance through seasonal storms.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-deerfield-beach-fl-front-entry-gutters.webp`,
      imageAlt: 'Front entry gutters on a Broward County home',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-broward-neighborhoods',
      heading: 'Serving Broward Neighborhoods',
      body: `<p>We work throughout Broward County with fast access to residential and commercial areas across Fort Lauderdale, Coral Springs, Hollywood, Pembroke Pines, and surrounding inland and coastal communities. Major routes like I-95, Florida’s Turnpike, and US-1 allow quick response across the region.</p>
<p>From beachfront properties exposed to salt air to inland neighborhoods dealing with heavy tree coverage, each zone presents different drainage challenges that require tailored solutions.</p>
<p>We also service nearby demand corridors where <a href="/locations/gutters-coral-springs-fl/">Coral Springs gutters</a> and <a href="/locations/gutters-pembroke-pines-fl/">gutters in Pembroke Pines</a> are frequently affected by similar storm patterns and vegetation buildup.</p>`,
      showCtas: true,
      showMapAfter: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-broward-consultation',
      heading: 'Get a Free Consultation in Broward, Florida',
      body: `<p>If you need reliable Broward gutters, <a href="/">All American Gutters</a> provides long-term solutions built for South Florida weather and real storm conditions.</p>
<p>Call us today and get a free consultation with a trusted Broward gutter company focused on durability, protection, and dependable service.</p>`,
      showCtas: true,
      renderAfterFaq: true,
    },
  ],
  faq: {
    _type: 'faq',
    headline: 'Broward Gutters FAQs',
    headingId: 'broward-gutters-faq',
    items: [
      {
        _type: 'faqItem',
        _key: 'aagf-broward-faq-fail',
        question: 'Why do gutters fail so often in Broward County?',
        answerHtml:
          '<p>Broward’s mix of intense rainfall, humidity, and coastal exposure creates constant stress on gutter systems. Many homes experience sudden storm surges that overwhelm older or undersized setups. Over time, this leads to overflow, leaks, and structural wear, especially when maintenance is inconsistent during peak rainy months.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-broward-faq-corrosion',
        question: 'Why is gutter corrosion such a common issue in Broward homes?',
        answerHtml:
          '<p>Corrosion is common across Broward County due to constant humidity and coastal salt exposure, especially in eastern neighborhoods. Over time, fasteners, seams, and brackets begin to weaken, leading to leaks and sagging. Homes closer to the coast experience faster deterioration. Aluminum seamless gutters are preferred because they resist rust and maintain structural integrity in high-moisture, salt-heavy environments.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-broward-faq-sag',
        question: 'Why do gutters detach or sag in older Broward properties?',
        answerHtml:
          '<p>Older Broward homes frequently experience gutter sagging due to fascia deterioration and repeated stormwater overload. When gutters clog, water becomes heavy and stresses fasteners. Over time, humidity weakens the wood behind the system, reducing its ability to hold attachments securely. Reinforcement and correcting drainage flow are key to preventing repeated separation and structural failure.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-broward-faq-newer',
        question: 'Do newer Broward homes still need regular gutter cleaning?',
        answerHtml:
          '<p>Yes. Even newer homes in Broward face drainage pressure from intense storms and fast runoff. Landscaping debris and roof design angles also affect performance. Without regular cleaning, even modern systems can underperform during peak rainy season.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-broward-faq-standard',
        question: 'Are standard gutters enough for Broward County weather conditions?',
        answerHtml:
          '<p>Standard gutters often fall short in Broward County due to frequent heavy rain and hurricane-season storms. Many systems were installed for milder climates and can’t handle peak water volume. Homes benefit from oversized seamless aluminum gutters with properly spaced downspouts. This setup improves flow capacity, reduces overflow risk, and helps protect roofs, walls, and foundations year-round.</p>',
      },
    ],
  },
}
