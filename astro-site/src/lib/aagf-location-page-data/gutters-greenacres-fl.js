/** Greenacres location page — shared by Sanity patch + build fallback. */

export const GUTTERS_GREENACRES_FL_SLUG = 'gutters-greenacres-fl'

const MEDIA = 'Media (AAGF)/Images (AAGF)'

const GREENACRES_MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57065.54209524735!2d-80.1767898869465!3d26.629381268081975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d925f7783b870b%3A0x47af8b58f3e6685e!2sGreenacres%2C%20FL%2C%20USA!5e0!3m2!1sen!2scl!4v1781897505195!5m2!1sen!2scl'

export const guttersGreenacresFlPage = {
  title: 'Gutters in Greenacres, FL',
  slug: { _type: 'slug', current: GUTTERS_GREENACRES_FL_SLUG },
  eyebrow: 'Greenacres Gutters',
  headline: 'Gutters in Greenacres',
  lead:
    'Greenacres sits in a high-rainfall pocket of central Palm Beach County where flat terrain, fast summer storms, and dense residential landscaping all combine to push gutter systems to their limit. Water tends to sit longer and move slower here, especially during extended rainy periods. That’s why Greenacres gutters need to be designed for consistent flow and heavy runoff management. All American Gutters is a trusted Greenacres gutter company focused on long-term drainage performance in these conditions.',
  heroFormIntro:
    'Tell us about your Greenacres property and get a free consultation with clear next steps.',
  meta: {
    _type: 'meta',
    title: 'Gutters in Greenacres | Free Consultation | All American Gutters',
    description:
      'Reliable gutters in Greenacres for homes and businesses. Seamless systems and expert care with a free consultation included today.',
  },
  seoDescription:
    'Reliable gutters in Greenacres for homes and businesses. Seamless systems and expert care with a free consultation included today.',
  layoutBackgrounds: {
    _type: 'layoutBackgrounds',
    hero: {
      _type: 'layoutBackgroundSection',
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-west-palm-beach-fl-backyard-gutter-install.webp`,
    },
  },
  mapEmbedUrl: GREENACRES_MAP_EMBED,
  reviews: {
    headline: 'What Customers in Greenacres Are Saying',
  },
  contentSections: [
    {
      _type: 'cityContentSection',
      _key: 'aagf-greenacres-local-services',
      heading: 'Fast, Local Gutters in Greenacres',
      body: `<p>In Greenacres, gutter problems often show up during long rainy stretches when water has nowhere to go and begins backing up along rooflines and fascia.</p>
<p>We provide full-service gutter solutions:</p>
<ul>
<li>Gutter Repair for overflow and storm-related strain</li>
<li>Gutter Installation designed for flat-terrain runoff</li>
<li>Gutter Cleaning to remove heavy landscaping debris</li>
<li>Gutter Replacement for aging or undersized systems</li>
<li>Gutter Guards for tree-heavy residential areas</li>
<li>Gutter Downspout adjustments for improved drainage flow</li>
</ul>
<p>We work throughout Palm Beach County, so we understand how Greenacres conditions differ from coastal-only drainage environments.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-delray-beach-fl-corner-downspout.webp`,
      imageAlt: 'Corner downspout on a Palm Beach County home',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-greenacres-common-issues',
      heading: 'Common Greenacres Gutter Issues',
      body: `<p>Greenacres homes often sit in neighborhoods with mature trees, wide residential lots, and flat ground that slows water movement. Combined with strong seasonal rainfall, this creates steady pressure on gutter systems rather than short impact events.</p>
<p>Most property owners reach out after noticing:</p>
<ul>
<li>Standing water in gutters during long-duration storms due to slow discharge</li>
<li>Heavy leaf and branch buildup from dense suburban tree coverage</li>
<li>Downspout overflow when runoff has limited exit paths on flat lots</li>
<li>Sagging gutters from repeated water load during extended rain cycles</li>
</ul>
<p>These issues usually point to drainage design problems, not just maintenance needs. Correcting slope, capacity, and runoff direction is key to preventing repeat failures.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-replacement-delray-beach-fl-copper-gutter-system.webp`,
      imageAlt: 'Gutter system on a Palm Beach County home',
      imagePosition: 'below-body',
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-greenacres-why-choose',
      heading: 'Why Choose a Greenacres Gutter Company',
      body: `<p>Homeowners in Greenacres often deal with contractors who overlook how flat terrain changes drainage behavior, leading to systems that underperform during sustained rain.</p>
<p>Homeowners and property managers across South Florida choose us because:</p>
<ul>
<li>100+ positive reviews reflecting consistent customer trust</li>
<li>Clear, proactive communication from start to finish</li>
<li>Stress-free, seamless service with clean job execution</li>
<li>Meticulous attention to slope and drainage planning</li>
<li>Transparent pricing with clear expectations</li>
<li>Full-service gutter solutions including installation, repair, cleaning, and replacement</li>
<li>Strong warranties: 1-year workmanship and 20-year aluminum coverage</li>
<li>Systems built for high-moisture, high-rain environments</li>
</ul>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-west-palm-beach-fl-white-gutter-side-yard.webp`,
      imageAlt: 'White gutters on a side yard in Palm Beach County',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-greenacres-neighborhoods',
      heading: 'Serving Greenacres Neighborhoods',
      body: `<p>We work across Greenacres with fast access to residential zones including Joggers Run, River Bridge, Sherwood Lakes, and neighborhoods near Haverhill Road, Lake Worth Road, and Forest Hill Boulevard. Our crews also move easily along Military Trail and Jog Road, allowing efficient coverage across central Palm Beach County.</p>
<p>From established inland subdivisions to newer developments, drainage challenges often shift between heavy vegetation runoff and flat-ground water retention.</p>
<p>We also install <a href="/locations/gutters-hollywood-fl/">seamless gutters in Hollywood, FL</a>, where wind-driven rain creates different overflow patterns. Further south, we regularly service <a href="/locations/gutters-delray-beach-fl/">gutters in Delray Beach</a>, where coastal exposure and fast storm bursts increase wear on exterior systems.</p>`,
      showCtas: true,
      showMapAfter: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-greenacres-consultation',
      heading: 'Get a Free Consultation in Greenacres, Florida',
      body: `<p>If your gutters are struggling with overflow, standing water, or storm-related wear, All American Gutters is a trusted Greenacres gutter company ready to help. We design systems built for Greenacres conditions and long-term drainage performance.</p>
<p>Call us today and get a free consultation with a team that understands how Greenacres gutters need to perform year-round.</p>`,
      showCtas: true,
      renderAfterFaq: true,
    },
  ],
  faq: {
    _type: 'faq',
    headline: 'Greenacres Gutters FAQs',
    headingId: 'greenacres-gutters-faq',
    items: [
      {
        _type: 'faqItem',
        _key: 'aagf-greenacres-faq-pooling',
        question: 'Why does water pool around foundations in Greenacres even with gutters installed?',
        answerHtml:
          '<p>Pooling around foundations in Greenacres usually happens when downspouts release water too close to the home. The flat terrain and sandy soil slow natural drainage, especially after heavy rain. Over time, water saturates the soil near slab edges, creating recurring puddles. Proper downspout extensions and improved drainage direction are essential to move water safely away from the structure.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-greenacres-faq-sagging',
        question: 'Why do gutters sag more often in Greenacres homes?',
        answerHtml:
          '<p>Sagging is usually caused by repeated heavy water load during long rain events. Because storms can last longer in Palm Beach County, gutters stay full for extended periods. If brackets are spaced too far apart or aging, the added weight gradually pulls the system out of alignment.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-greenacres-faq-sizing',
        question: 'Do Greenacres homes need different gutter sizing than coastal areas?',
        answerHtml:
          '<p>Often yes. Inland homes like those in Greenacres experience longer rainfall duration and more tree debris compared to coastal-only zones. This combination usually requires higher-capacity gutters and better downspout planning to handle both volume and slow drainage conditions effectively.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-greenacres-faq-guards',
        question: 'Are gutter guards useful in Greenacres?',
        answerHtml:
          '<p>Gutter guards can be useful in Greenacres, especially in neighborhoods with mature trees that drop leaves and seed pods. However, not all systems handle heavy rainfall well. Low-quality guards can restrict flow during storms. High-flow, professionally installed guards perform better by reducing clogs while still allowing fast water discharge during intense South Florida rain events.</p>',
      },
    ],
  },
}
