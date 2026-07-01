/** Parkland location page — shared by Sanity patch + build fallback. */

export const GUTTERS_PARKLAND_FL_SLUG = 'gutters-parkland-fl'

const MEDIA = 'Media (AAGF)/Images (AAGF)'

const PARKLAND_MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57218.69387810016!2d-80.29109493910107!3d26.32104707223491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91b19697e1479%3A0x79e4d80b8740b25d!2sParkland%2C%20FL%2C%20USA!5e0!3m2!1sen!2scl!4v1782161556931!5m2!1sen!2scl'

export const guttersParklandFlPage = {
  title: 'Gutters in Parkland, FL',
  slug: { _type: 'slug', current: GUTTERS_PARKLAND_FL_SLUG },
  eyebrow: 'Parkland Gutters',
  headline: 'Gutters in Parkland, Florida',
  lead:
    'Parkland sits between dense tree cover and managed canal systems, where sudden summer downpours and hurricane-season bands can push drainage systems to their limits. Parkland gutters need to manage heavy leaf load, steady rainfall, and moisture that lingers in tree-covered areas. All American Gutters is a trusted Parkland gutter company helping homeowners prevent overflow, fascia damage, and long-term water intrusion.',
  heroFormIntro:
    'Tell us about your Parkland property and get a free design consultation with clear next steps.',
  meta: {
    _type: 'meta',
    title: 'Gutters in Parkland | Free Consultation | All American Gutters',
    description:
      'Reliable gutters in Parkland for homes and businesses. Seamless systems and expert care with a free consultation included today.',
  },
  seoDescription:
    'Reliable gutters in Parkland for homes and businesses. Seamless systems and expert care with a free consultation included today.',
  layoutBackgrounds: {
    _type: 'layoutBackgrounds',
    hero: {
      _type: 'layoutBackgroundSection',
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-coral-springs-fl-seamless-gutter-installation-brandon-fl.webp`,
    },
  },
  mapEmbedUrl: PARKLAND_MAP_EMBED,
  reviews: {
    headline: 'What Customers in Parkland Are Saying',
  },
  contentSections: [
    {
      _type: 'cityContentSection',
      _key: 'aagf-parkland-local-services',
      heading: 'Fast, Local Gutters in Parkland',
      body: `<p>In Parkland, gutter problems rarely come from a single storm. It's the buildup—leaves, pods, and organic debris—that slowly reduces system performance until the next heavy rain exposes the failure.</p>
<p>We provide full-service solutions built for Parkland conditions:</p>
<ul>
<li>Gutter Repair for leaks, sagging sections, and storm stress</li>
<li>Gutter Installation designed for large suburban rooflines</li>
<li>Gutter Cleaning to remove dense tree debris and organic buildup</li>
<li>Gutter Replacement for aging or undersized systems</li>
<li>Gutter Guards for high-tree-density neighborhoods</li>
<li>Gutter Downspout adjustments for controlled drainage flow</li>
</ul>
<p>You'll get a faster response without waiting on contractors coming from outside Broward County.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-cleaning-coral-springs-fl-downspout-installation-white-gutter-drainage.webp`,
      imageAlt: 'White gutter downspout on a Broward County home near Parkland',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-parkland-common-issues',
      heading: 'Common Parkland Gutter Issues',
      body: `<p>Parkland's mix of canopy-heavy streets, large lots, and engineered drainage systems creates unique stress points for gutters year-round. Afternoon storms can overwhelm partially clogged systems in minutes, especially on homes backing canals or green corridors.</p>
<p>Most property managers and homeowners reach out after noticing:</p>
<ul>
<li>Rapid overflow during short, high-intensity summer rain bursts</li>
<li>Roof debris buildup across shaded neighborhoods</li>
<li>Gutter sagging on long roof runs typical in estate-style homes in Heron Bay</li>
<li>Water backing into fascia due to blocked downspouts near landscaped swales</li>
<li>Wind-driven rain forcing water behind gutters during storms from the Everglades side</li>
</ul>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-hollywood-fl-stone-home-downspout.webp`,
      imageAlt: 'Gutter downspout on a suburban home near Parkland',
      imagePosition: 'below-body',
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-parkland-why-choose',
      heading: 'Why Choose a Parkland Gutter Company',
      body: `<p>Parkland homeowners often deal with contractors who underestimate how much tree density affects long-term gutter performance. Systems get cleaned but not corrected, leading to repeated overflow issues.</p>
<p>Homeowners and property managers across South Florida choose us because:</p>
<ul>
<li>100+ positive reviews reflecting consistent trust and workmanship quality</li>
<li>Clear, proactive communication from inspection to final walkthrough</li>
<li>Stress-free service experience with organized scheduling and site care</li>
<li>Transparent pricing with clear expectations</li>
<li>Full-service gutter solutions across installation, repair, and maintenance</li>
<li>Strong warranties: 1-year workmanship and 20-year aluminum materials</li>
<li>Long-term system design focused on durability in Florida storm conditions</li>
</ul>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-fort-lauderdale-fl-townhome-gutter-system.webp`,
      imageAlt: 'Gutter system on a home in Broward County near Parkland',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-parkland-neighborhoods',
      heading: 'Serving Parkland Neighborhoods',
      body: `<p>We work throughout Parkland's residential zones, including Heron Bay, Parkland Golf &amp; Country Club, Miralago, Watercrest, and neighborhoods along Holmberg Road, University Drive, and Pine Island Road. We also regularly work near Sawgrass Expressway access points and western Broward corridors where storm runoff can shift quickly during heavy rainfall.</p>
<p>These conditions often differ slightly from nearby areas like <a href="/locations/gutters-weston-fl/">Weston gutters</a> and <a href="/locations/gutters-palm-beach-gardens-fl/">Palm Beach Gardens gutters</a>, especially due to Parkland's heavier tree density and larger roof spans.</p>`,
      showCtas: true,
      showMapAfter: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-parkland-consultation',
      heading: 'Get a Free Consultation in Parkland, Florida',
      body: `<p>If your system is showing overflow, sagging, or visible wear, we can assess what's happening and fix the root cause. All American Gutters is a trusted Parkland gutter company focused on long-term protection and reliable storm performance.</p>
<p>Call us today to get a free design consultation and keep your property protected year-round.</p>`,
      showCtas: true,
      renderAfterFaq: true,
    },
  ],
  faq: {
    _type: 'faq',
    headline: 'Parkland Gutters FAQs',
    headingId: 'parkland-gutters-faq',
    items: [
      {
        _type: 'faqItem',
        _key: 'aagf-parkland-faq-overflow',
        question: 'Why do gutters overflow so quickly during Parkland storms?',
        answerHtml:
          '<p>Parkland’s rainfall often arrives in short, high-intensity bursts that overwhelm partially restricted systems. When leaves or roof grit are already present, water has no time to exit through downspouts. We often find that overflow starts at minor blockages that become major failures during peak storm season across western Broward neighborhoods.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-parkland-faq-cleaning',
        question: 'How often should gutters be cleaned in tree-heavy Parkland areas?',
        answerHtml:
          '<p>Most Parkland homes need more frequent cleaning due to constant leaf drop from oaks and palms. In shaded neighborhoods like Heron Bay or golf communities, buildup happens faster than expected. Regular maintenance helps prevent hidden blockages that can lead to fascia rot and water pooling around foundations.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-parkland-faq-clog',
        question: 'Why do Parkland gutters clog so often despite regular cleaning?',
        answerHtml:
          '<p>Parkland’s heavy landscaping and tree-lined communities constantly shed leaves, pollen, and palm debris. Wind carries this material onto roofs, where it washes into gutters during rain. High-flow gutter guards and seasonal cleaning help reduce frequent clogging in these landscaped residential environments.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-parkland-faq-standard',
        question: 'Are standard gutters enough for Parkland weather conditions?',
        answerHtml:
          '<p>Standard gutters often struggle in Parkland due to frequent heavy rainfall and seasonal storm activity. Many systems were installed for lighter climates and can’t handle sudden water surges. Homes benefit from oversized seamless aluminum gutters with properly spaced downspouts to improve drainage capacity. This helps reduce overflow risk and protects roofs, walls, and landscaping from water damage.</p>',
      },
    ],
  },
}
