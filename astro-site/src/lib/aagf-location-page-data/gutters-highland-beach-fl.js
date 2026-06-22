/** Highland Beach location page — shared by Sanity patch + build fallback. */

export const GUTTERS_HIGHLAND_BEACH_FL_SLUG = 'gutters-highland-beach-fl'

const MEDIA = 'Media (AAGF)/Images (AAGF)'

const HIGHLAND_BEACH_MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28586.955921047447!2d-80.08506301222054!3d26.41155040494612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8e04e4da04f5f%3A0x1e6ec7966f68feae!2sHighland%20Beach%2C%20FL%2C%20USA!5e0!3m2!1sen!2scl!4v1782157936923!5m2!1sen!2scl'

export const guttersHighlandBeachFlPage = {
  title: 'Gutters in Highland Beach, FL',
  slug: { _type: 'slug', current: GUTTERS_HIGHLAND_BEACH_FL_SLUG },
  eyebrow: 'Highland Beach Gutters',
  headline: 'Gutters in Highland Beach',
  lead:
    'Highland Beach sits directly along the coastline, where salt air, strong winds, and sudden coastal storms put constant pressure on exterior systems. Gutters are exposed to corrosion, heavy rain bursts, and wind-driven water that pushes gutters beyond normal capacity. As a trusted Highland Beach gutter company, All American Gutters installs and services systems built to resist salt exposure and handle coastal drainage demands.',
  heroFormIntro:
    'Tell us about your Highland Beach property and get a free consultation with clear next steps.',
  meta: {
    _type: 'meta',
    title: 'Gutters in Highland Beach | Free Consultation | All American',
    description:
      'Reliable gutters in Highland Beach for homes and businesses. Seamless systems and expert care with a free consultation included today.',
  },
  seoDescription:
    'Reliable gutters in Highland Beach for homes and businesses. Seamless systems and expert care with a free consultation included today.',
  layoutBackgrounds: {
    _type: 'layoutBackgrounds',
    hero: {
      _type: 'layoutBackgroundSection',
      imageSrc: `${MEDIA}/all-american-gutters-gutter-replacement-highland-beach-fl-two-story-gutter-installation.webp`,
    },
  },
  mapEmbedUrl: HIGHLAND_BEACH_MAP_EMBED,
  reviews: {
    headline: 'What Customers in Highland Beach Are Saying',
  },
  contentSections: [
    {
      _type: 'cityContentSection',
      _key: 'aagf-highland-beach-local-services',
      heading: 'Fast, Local Gutters in Highland Beach',
      body: `<p>In Highland Beach, gutter issues escalate quickly. Salt exposure and storm cycles weaken systems over time, and one heavy storm is often enough to expose hidden failures.</p>
<p>We provide full-service solutions built for Highland Beach conditions:</p>
<ul>
<li>Gutter Repair for corrosion damage, leaks, and separation</li>
<li>Gutter Installation designed for coastal wind and rain exposure</li>
<li>Gutter Cleaning to remove sand, salt residue, and debris</li>
<li>Gutter Replacement for systems compromised by long-term exposure</li>
<li>Gutter Maintenance to prevent ongoing coastal wear issues</li>
<li>Gutter Guards for wind-driven debris control</li>
<li>Gutter Downspout adjustments for proper drainage away from structures</li>
<li>Soffit repair from moisture intrusion and salt-air deterioration</li>
<li>Fascia repair caused by prolonged water exposure</li>
</ul>
<p>We stay local to the area, so we understand how coastal conditions affect gutter performance compared to inland contractors.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-delray-beach-fl-corner-downspout.webp`,
      imageAlt: 'Corner downspout on a coastal home near Highland Beach',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-highland-beach-common-issues',
      heading: 'Common Highland Beach Gutter Issues',
      body: `<p>Highland Beach properties face a different kind of stress than inland areas. Coastal exposure, combined with high humidity and frequent storms, leads to faster system wear and more aggressive failure patterns.</p>
<p>Most property owners reach out after noticing:</p>
<ul>
<li>Accelerated rust and corrosion from constant salt air exposure</li>
<li>Wind-driven rain bypassing gutters and causing overflow at roof edges</li>
<li>Sand and fine debris buildup restricting water flow over time</li>
<li>Water spilling too close to foundations due to narrow lot layouts</li>
<li>Fascia and soffit deterioration from constant moisture and salt exposure</li>
</ul>
<p>We focus on identifying early damage and reinforcing systems so Highland Beach gutters last longer under coastal conditions.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-replacement-delray-beach-fl-copper-gutter-system.webp`,
      imageAlt: 'Gutter system on a coastal South Florida home near Highland Beach',
      imagePosition: 'below-body',
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-highland-beach-why-choose',
      heading: 'Why Choose a Highland Beach Gutter Company',
      body: `<p>In coastal areas like Highland Beach, poor workmanship shows up quickly. Homeowners often deal with rushed installs, materials that don't hold up to salt exposure, and contractors who don't account for wind-driven rain.</p>
<p>Homeowners and property managers across South Florida choose us because:</p>
<ul>
<li>100+ positive reviews reflecting consistent trust and customer satisfaction</li>
<li>Clear, proactive communication throughout every stage of the project</li>
<li>Stress-free experience from inspection to final cleanup</li>
<li>Meticulous attention to detail in coastal installation conditions</li>
<li>Transparent pricing with clear estimates and defined scope</li>
<li>Full-service gutter solutions including installation, repair, replacement, and cleaning</li>
<li>Strong warranties: 1-year workmanship and 20-year aluminum materials</li>
<li>Systems built specifically for coastal durability and long-term performance</li>
</ul>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-lighthouse-point-fl-copper-gutter-installation.webp`,
      imageAlt: 'Copper gutter installation near Highland Beach',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-highland-beach-neighborhoods',
      heading: 'Serving Highland Beach Neighborhoods',
      body: `<p>We work throughout Highland Beach with direct access along A1A, covering oceanfront properties and communities between the Atlantic Ocean and Intracoastal Waterway.</p>
<p>From condo-lined stretches to single-family homes near Spanish River Boulevard and Linton Boulevard, each property presents different drainage challenges based on exposure, elevation, and lot layout. Coastal wind and limited spacing require careful planning to move water away effectively.</p>
<p>Across the region, we also provide services for Davie gutters, where larger lots and tree coverage create heavy debris pressure, and for gutters in Weston, where planned communities bring different drainage layouts and runoff patterns.</p>`,
      showCtas: true,
      showMapAfter: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-highland-beach-consultation',
      heading: 'Get a Free Consultation in Highland Beach, Florida',
      body: `<p>If your gutters are showing signs of corrosion, overflow, or storm damage, it's time to have them checked. As a trusted Highland Beach gutter company, we'll evaluate your system and recommend a solution built for coastal durability.</p>
<p>Call us today to schedule your free consultation. You get long-term protection, clear communication, and reliable work designed to hold up in Highland Beach conditions.</p>`,
      showCtas: true,
      renderAfterFaq: true,
    },
  ],
  faq: {
    _type: 'faq',
    headline: 'Highland Beach Gutters FAQs',
    headingId: 'highland-beach-gutters-faq',
    items: [
      {
        _type: 'faqItem',
        _key: 'aagf-highland-beach-faq-deteriorate',
        question: 'Why do gutters in Highland Beach deteriorate faster than inland areas?',
        answerHtml:
          '<p>In Highland Beach, gutters deteriorate faster due to constant salt-air exposure from the Atlantic and Intracoastal. This accelerates corrosion on fasteners, seams, and brackets, especially in older coastal buildings. Combined with high humidity and storm-driven rain, systems weaken more quickly than inland areas. Aluminum seamless gutters with corrosion-resistant hardware are typically preferred for longer lifespan in this environment.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-highland-beach-faq-overflow',
        question: 'Why do gutters overflow during heavy rain even in newer Highland Beach homes?',
        answerHtml:
          '<p>Even newer homes in Highland Beach can experience overflow during intense coastal storms because rainfall rates often exceed standard gutter capacity. Many systems are designed for moderate climates, not South Florida downpours. When combined with roof debris or slight pitch issues, water backs up quickly. Oversized systems and additional downspouts help manage high-volume storm runoff more effectively.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-highland-beach-faq-staining',
        question: 'Why is water staining common on stucco and balconies in Highland Beach?',
        answerHtml:
          '<p>Water staining in Highland Beach often results from overflow or wind-driven rain bypassing gutters, especially in high-rise or coastal homes. Saltwater residue mixed with runoff leaves visible streaks on stucco, railings, and balconies. Humidity locks in discoloration over time. This usually indicates drainage inefficiency or undersized systems rather than cosmetic surface wear alone.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-highland-beach-faq-pull-away',
        question: 'Why do gutters pull away from coastal homes in Highland Beach?',
        answerHtml:
          '<p>Gutters in Highland Beach often pull away due to long-term exposure to salt air, humidity, and repeated stormwater stress. Fasteners corrode and fascia boards weaken over time, especially when overflow occurs. Heavy rain adds extra weight that strains attachment points. Reinforcement and corrosion-resistant installation materials are essential to maintain structural stability in coastal conditions.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-highland-beach-faq-standard',
        question: 'Are standard gutters suitable for Highland Beach oceanfront properties?',
        answerHtml:
          '<p>Standard gutters are often not suitable for Highland Beach oceanfront homes due to extreme salt exposure and high-intensity rainfall. These conditions accelerate wear and overwhelm smaller systems. Most properties benefit from oversized seamless aluminum gutters with heavy-duty fasteners. This improves durability, reduces maintenance frequency, and ensures better water management during coastal storms and hurricane-season events.</p>',
      },
    ],
  },
}
