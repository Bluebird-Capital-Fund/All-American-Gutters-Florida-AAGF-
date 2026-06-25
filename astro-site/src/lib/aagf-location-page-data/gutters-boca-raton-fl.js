/** Boca Raton location page — shared by Sanity patch + build fallback. */

export const GUTTERS_BOCA_RATON_FL_SLUG = 'gutters-boca-raton-fl'

const MEDIA = 'Media (AAGF)/Images (AAGF)'

const BOCA_RATON_MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57193.13757018171!2d-80.15796848874183!3d26.372731029740343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d923c2ef36fb27%3A0xd23ea6eeca6095c9!2sBoca%20Raton%2C%20FL%2C%20USA!5e0!3m2!1sen!2scl!4v1781883038033!5m2!1sen!2scl'

export const guttersBocaRatonFlPage = {
  title: 'Gutters in Boca Raton, FL',
  slug: { _type: 'slug', current: GUTTERS_BOCA_RATON_FL_SLUG },
  eyebrow: 'Boca Raton Gutters',
  headline: 'Gutters in Boca Raton',
  lead:
    'Boca Raton’s mix of coastal exposure, dense landscaping, and fast-moving storm cells puts constant pressure on home drainage systems. When gutters fail here, it usually happens during peak rain, not gradually. That’s why Boca Raton gutters need to be built and maintained with local rainfall intensity and salt-air conditions in mind. All American Gutters is a trusted Boca Raton gutter company focused on systems that hold up through long humid seasons and sudden downpours.',
  heroFormIntro:
    'Tell us about your Boca Raton property and get a free consultation with clear next steps.',
  meta: {
    _type: 'meta',
    title: 'Gutters in Boca Raton | Free Consultation | All American',
    description:
      'Boca Raton gutters designed for storm protection and long-term performance. Expert care for homes and businesses with a free consultation.',
  },
  seoDescription:
    'Boca Raton gutters designed for storm protection and long-term performance. Expert care for homes and businesses with a free consultation.',
  layoutBackgrounds: {
    _type: 'layoutBackgrounds',
    hero: {
      _type: 'layoutBackgroundSection',
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-boca-raton-fl-black-gutters-modern-home.webp`,
    },
  },
  mapEmbedUrl: BOCA_RATON_MAP_EMBED,
  reviews: {
    headline: 'What Customers in Boca Raton Are Saying',
  },
  contentSections: [
    {
      _type: 'cityContentSection',
      _key: 'aagf-boca-local-services',
      heading: 'Fast, Local Gutters in Boca Raton',
      body: `<p>In Boca Raton, gutter issues don’t wait for “bad seasons.” Afternoon storms, ocean humidity, and year-round landscaping debris can push systems past their limits at any time.</p>
<p>We provide full-service gutter work designed for local conditions:</p>
<ul>
<li>Gutter Repair for storm and overflow damage</li>
<li>Gutter Installation sized for heavy rainfall flow</li>
<li>Gutter Cleaning for palm debris and organic buildup</li>
<li>Gutter Replacement for aging or undersized systems</li>
<li>Gutter Guards for heavy tree coverage areas</li>
<li>Gutter Downspout adjustments for better drainage direction</li>
</ul>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-boca-raton-fl-modern-home-black-gutters.webp`,
      imageAlt: 'Black gutters on a modern Boca Raton home',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-boca-common-issues',
      heading: 'Common Boca Raton Gutter Issues',
      body: `<p>Boca Raton homes deal with a unique combination of coastal air, tropical landscaping, and high-volume rain bursts that stress gutters in very specific ways. Many properties also have tile roofs and older drainage layouts that weren’t designed for today’s rainfall intensity.</p>
<p>Common issues we see:</p>
<ul>
<li>Salt-air wear weakening fasteners and joints on homes closer to the Intracoastal</li>
<li>Overflow during short but heavy storms that overwhelm undersized systems</li>
<li>Constant debris buildup from palms, ficus hedges, and dense HOA landscaping</li>
<li>Misaligned or undersized gutters on older homes west of Federal Highway</li>
</ul>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-cleaning-boca-raton-fl-gutter-and-downspout-installation-home.webp`,
      imageAlt: 'Gutter and downspout installation on a Boca Raton home',
      imagePosition: 'below-body',
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-boca-why-choose',
      heading: 'Why Choose a Boca Raton Gutter Company',
      body: `<p>Homeowners in Boca Raton often deal with contractors who treat every home the same, even though coastal conditions vary block by block. That leads to repeated failures after storms and avoidable water damage.</p>
<p>Homeowners and property managers across South Florida choose us because:</p>
<ul>
<li>100+ positive reviews reflecting consistent trust and satisfaction</li>
<li>Clear, proactive communication from start to finish</li>
<li>Stress-free, seamless experience with clean job execution</li>
<li>Meticulous attention to detail in slope, sealing, and installation</li>
<li>Transparent pricing with clear estimates and expectations</li>
<li>Full-service gutter solutions including repair, installation, cleaning, and replacement</li>
<li>Strong warranties: 1-year workmanship and 20-year aluminum coverage</li>
<li>Durable systems designed for South Florida rain intensity and humidity</li>
</ul>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-replacement-boca-raton-fl-roof-gutter-system.webp`,
      imageAlt: 'Roof gutter system on a Boca Raton home',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-boca-neighborhoods',
      heading: 'Serving Boca Raton Neighborhoods',
      body: `<p>We work across Boca Raton with fast access to both coastal and inland communities, including Royal Palm Yacht &amp; Country Club, Boca Del Mar, Boca Pointe, and East Boca near A1A. We also service areas around Glades Road, Palmetto Park Road, and Federal Highway (US-1).</p>
<p>From ocean-exposed homes near the beach to shaded residential streets west of I-95, each area presents different drainage challenges we account for during installation and repair. We also handle <a href="/locations/gutters-fort-lauderdale-fl/">gutters in Fort Lauderdale</a>, where intense afternoon storms and older drainage systems often require more frequent adjustments and upgrades. North along the coast, we also work on <a href="/locations/gutters-pompano-beach-fl/">Pompano Beach gutters</a>, where salt air exposure and wind-driven rain add extra strain to gutter systems over time.</p>`,
      showCtas: true,
      showMapAfter: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-boca-consultation',
      heading: 'Get a Free Consultation in Boca Raton, Florida',
      body: `<p>If your gutters are showing signs of overflow, corrosion, or storm stress, All American Gutters is here to help. We’re a trusted local team focused on long-term protection built for Boca Raton conditions.</p>
<p>Call us today and get a free consultation with a Boca Raton gutter company that understands how coastal weather actually impacts your home.</p>`,
      showCtas: true,
      renderAfterFaq: true,
    },
  ],
  faq: {
    _type: 'faq',
    headline: 'Boca Raton Gutters FAQs',
    headingId: 'boca-raton-gutters-faq',
    items: [
      {
        _type: 'faqItem',
        _key: 'aagf-boca-faq-overflow',
        question: 'Why do gutters in Boca Raton overflow even when they look clean?',
        answerHtml:
          '<p>This often happens when gutters are undersized for Boca Raton’s rainfall intensity. Even without visible debris, heavy afternoon storms can overwhelm systems that weren’t designed for fast water volume. Homes near the coast also deal with wind-driven rain that enters at angles, increasing flow beyond what standard setups can handle during peak storm bursts.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-boca-faq-intracoastal',
        question: 'Do homes near the Intracoastal need different gutter setups in Boca Raton?',
        answerHtml:
          '<p>Yes. Coastal exposure near the Intracoastal increases salt-air corrosion and accelerates wear on fasteners and seams. These homes often need stronger materials and tighter installation methods. Without upgrades, small weaknesses develop faster, especially in shaded or high-humidity areas where drying time is limited between storms.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-boca-faq-best-type',
        question: 'What type of gutters work best for Boca Raton homes?',
        answerHtml:
          '<p>Seamless aluminum gutters are the most effective option in Boca Raton due to humidity, salt air exposure, and heavy rainfall. Many homes benefit from larger 6-inch systems that handle high-volume stormwater better than standard sizes. Seamless designs reduce leak points, while corrosion-resistant materials improve lifespan in coastal environments where moisture and salt accelerate wear on traditional gutter systems.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-boca-faq-maintenance',
        question: 'Is gutter cleaning more important in Boca Raton than other Florida cities?',
        answerHtml:
          '<p>Yes. Year-round vegetation growth, palm debris, and frequent storms mean gutters fill and reset faster here than in many inland areas. Even systems with guards still need periodic checks. Without consistent cleaning, small buildup turns into overflow quickly, especially during sudden high-volume rainfall events common in coastal South Florida.</p>',
      },
    ],
  },
}
