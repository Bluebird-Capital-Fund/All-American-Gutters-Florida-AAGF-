/** Palm Beach Gardens location page — shared by Sanity patch + build fallback. */

export const GUTTERS_PALM_BEACH_GARDENS_FL_SLUG = 'gutters-palm-beach-gardens-fl'

const MEDIA = 'Media (AAGF)/Images (AAGF)'

const PALM_BEACH_GARDENS_MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113920.572561506!2d-80.24587682525463!3d26.83938320610374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88ded3cc384717a5%3A0x668c3a32a925c261!2sPalm%20Beach%20Gardens%2C%20FL%2C%20USA!5e0!3m2!1sen!2scl!4v1782166064980!5m2!1sen!2scl'

export const guttersPalmBeachGardensFlPage = {
  title: 'Gutters in Palm Beach Gardens, FL',
  slug: { _type: 'slug', current: GUTTERS_PALM_BEACH_GARDENS_FL_SLUG },
  eyebrow: 'Palm Beach Gardens Gutters',
  headline: 'Gutters in Palm Beach Gardens',
  lead:
    'Palm Beach Gardens sits in a pocket of Palm Beach County where heavy summer rain bands, tropical moisture, and dense landscaping all push drainage systems hard year-round. Palm Beach Gardens gutters need to handle heavy rain bursts, constant leaf and palm debris, and high humidity that keeps moisture sitting in shaded areas. All American Gutters is a trusted Palm Beach Gardens gutter company helping homeowners prevent overflow, fascia damage, and long-term structural water issues.',
  heroFormIntro:
    'Tell us about your Palm Beach Gardens property and get a free design consultation with clear next steps.',
  meta: {
    _type: 'meta',
    title: 'Gutters in Palm Beach Gardens | Free Consultation | All American',
    description:
      'Reliable gutters in Palm Beach Gardens for homes and businesses. Seamless systems and expert care with a free consultation included today.',
  },
  seoDescription:
    'Reliable gutters in Palm Beach Gardens for homes and businesses. Seamless systems and expert care with a free consultation included today.',
  layoutBackgrounds: {
    _type: 'layoutBackgrounds',
    hero: {
      _type: 'layoutBackgroundSection',
      imageSrc: `${MEDIA}/all-american-gutters-gutter-repair-palm-beach-gardens-fl-copper-gutter-installation-2.webp`,
    },
  },
  mapEmbedUrl: PALM_BEACH_GARDENS_MAP_EMBED,
  reviews: {
    headline: 'What Customers in Palm Beach Gardens Are Saying',
  },
  contentSections: [
    {
      _type: 'cityContentSection',
      _key: 'aagf-palm-beach-gardens-local-services',
      heading: 'Fast, Local Gutters in Palm Beach Gardens',
      body: `<p>When storms roll in off the Atlantic, water volume can spike fast across Palm Beach Gardens neighborhoods, especially around large residential lots and golf-course communities. A delayed repair here often turns into fascia damage or overflow staining within a single storm cycle.</p>
<p>We provide full-service solutions built for Palm Beach Gardens conditions:</p>
<ul>
<li>Gutter Repair for leaks, separation, and storm-related damage</li>
<li>Gutter Installation designed for large residential and golf-community homes</li>
<li>Gutter Cleaning to remove palm fronds, oak leaves, and roof sediment</li>
<li>Gutter Replacement for aging or undersized systems</li>
<li>Gutter Guards for tree-heavy neighborhoods and shaded lots</li>
<li>Gutter Downspout adjustments for controlled runoff direction</li>
</ul>
<p>We stay local, so response times across Palm Beach Gardens are faster and more consistent than out-of-area contractors.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-west-palm-beach-fl-backyard-gutter-install.webp`,
      imageAlt: 'Backyard gutter installation on a home in Palm Beach Gardens',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-palm-beach-gardens-common-issues',
      heading: 'Common Palm Beach Gardens Gutter Issues',
      body: `<p>Palm Beach Gardens combines coastal humidity, landscaped communities, and storm-driven rainfall patterns that create year-round pressure on gutter systems. Even short storms can overwhelm partially restricted gutters, especially in heavily treed neighborhoods.</p>
<p>Most property managers and homeowners reach out after noticing:</p>
<ul>
<li>Sudden overflow during intense summer downpours that exceed system capacity</li>
<li>Constant palm frond and seed pod buildup from dense tropical landscaping</li>
<li>Downspout blockages caused by roof grit and organic debris after wind events</li>
<li>Water pooling around patios and walkways due to slow drainage in flat-lot areas</li>
</ul>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-replacement-delray-beach-fl-copper-gutter-system.webp`,
      imageAlt: 'Gutter system on a Palm Beach County home near Palm Beach Gardens',
      imagePosition: 'below-body',
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-palm-beach-gardens-why-choose',
      heading: 'Why Choose a Palm Beach Gardens Gutter Company',
      body: `<p>Homeowners in Palm Beach Gardens often deal with inconsistent contractor follow-ups, rushed installations, and systems that aren't built for sustained tropical moisture exposure. We focus on precision, communication, and long-term durability.</p>
<p>Homeowners and property managers across South Florida choose us because:</p>
<ul>
<li>100+ positive reviews reflecting consistent trust and workmanship quality</li>
<li>Clear, proactive communication from inspection to final cleanup</li>
<li>Stress-free service experience with organized scheduling and respect for property</li>
<li>Meticulous attention to slope, drainage flow, and roofline fit</li>
<li>Transparent pricing with clear expectations</li>
<li>Full-service gutter solutions including repair, replacement, and maintenance</li>
<li>Strong warranties: 1-year workmanship and 20-year aluminum materials</li>
<li>Long-term system design built for Florida humidity and storm conditions</li>
</ul>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-replacement-palm-beach-gardens-fl-aluminum-gutter-system-backyard.webp`,
      imageAlt: 'Aluminum gutter system on a backyard in Palm Beach Gardens',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-palm-beach-gardens-neighborhoods',
      heading: 'Serving Palm Beach Gardens Neighborhoods',
      body: `<p>We work throughout Palm Beach Gardens, including BallenIsles, Mirasol, PGA National, Frenchman's Creek, and communities along Northlake Boulevard, PGA Boulevard, and Military Trail. Access via I-95 and the Florida Turnpike allows us to reach both eastern coastal neighborhoods and western residential developments efficiently.</p>
<p>Conditions here differ from nearby areas like <a href="/locations/gutters-parkland-fl/">Parkland gutters</a> and <a href="/locations/gutters-fort-lauderdale-fl/">Fort Lauderdale gutters</a>, especially in how salt air, landscaping density, and storm exposure combine.</p>`,
      showCtas: true,
      showMapAfter: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-palm-beach-gardens-consultation',
      heading: 'Get a Free Consultation in Palm Beach Gardens',
      body: `<p>If your gutters are overflowing, sagging, or showing signs of wear, we can identify the cause and fix it properly. All American Gutters is a trusted Palm Beach Gardens gutter company focused on long-term protection built for local weather conditions.</p>
<p>Call us today and get a free consultation to keep your home protected year-round.</p>`,
      showCtas: true,
      renderAfterFaq: true,
    },
  ],
  faq: {
    _type: 'faq',
    headline: 'Palm Beach Gardens Gutters FAQs',
    headingId: 'palm-beach-gardens-gutters-faq',
    items: [
      {
        _type: 'faqItem',
        _key: 'aagf-pbg-faq-overflow',
        question: 'Why do gutters overflow so quickly during Palm Beach Gardens storms?',
        answerHtml:
          '<p>Storms in Palm Beach Gardens often arrive in short, intense bursts that push large water volumes through the system all at once. When even partial debris is present, gutters can’t discharge fast enough. This leads to overflow at roof edges, especially on homes with long tile rooflines and heavy landscaping nearby.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-pbg-faq-clog',
        question: 'Why do gutters clog frequently in Palm Beach Gardens neighborhoods?',
        answerHtml:
          '<p>Palm Beach Gardens has dense, well-maintained landscaping with palms, hedges, and mature trees that shed year-round. Wind and rain push this debris onto roofs, where it washes into gutters. Even small buildup can restrict flow at downspouts during storms. High-flow gutter guards and routine seasonal maintenance help reduce clogging in these landscaped residential communities.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-pbg-faq-pooling',
        question: 'Why is water pooling around foundations in Palm Beach Gardens homes?',
        answerHtml:
          '<p>Pooling around foundations in Palm Beach Gardens often happens when downspouts discharge too close to the home or into irrigation-saturated soil. The area’s flat terrain slows drainage after heavy rain, especially in landscaped yards. Water collects near slab edges, increasing moisture exposure. Extending downspouts and improving runoff direction helps prevent repeated foundation saturation and erosion.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-pbg-faq-larger-homes',
        question: 'Do larger homes in Palm Beach Gardens need stronger gutter systems?',
        answerHtml:
          '<p>Yes. Many homes in the area have extended roof spans and complex layouts that require higher-capacity drainage systems. Standard gutters often struggle during peak storms. Proper sizing, slope adjustment, and downspout placement are critical to prevent overflow and protect fascia and exterior surfaces.</p>',
      },
    ],
  },
}
