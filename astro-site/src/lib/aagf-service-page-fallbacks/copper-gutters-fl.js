/** Fallback `cityServicePage` payload when Sanity has not been patched yet. */
export const COPPER_GUTTERS_FL_SLUG = 'copper-gutters-fl'

const MEDIA = 'Media (AAGF)/Images (AAGF)'

export const copperGuttersFlPage = {
  title: 'Copper Gutters South Florida',
  slug: { _type: 'slug', current: COPPER_GUTTERS_FL_SLUG },
  eyebrow: 'Copper Gutters',
  headline: 'Copper Gutters in South Florida',
  lead:
    'South Florida rain, humidity, and salt-heavy air push standard drainage systems to wear out faster. Our copper gutters in South Florida are designed to handle constant moisture while adding long-term strength and a clean architectural finish to your roofline.',
  heroFormIntro:
    'Schedule a free design consultation and see how copper gutters can improve drainage and curb appeal on your South Florida property.',
  meta: {
    _type: 'meta',
    title: 'Copper Gutters in South Florida | Free Consultation',
    description:
      'Copper gutters in South Florida installed for long-term strength and elegant curb appeal. Get expert help and a free consultation.',
  },
  layoutBackgrounds: {
    _type: 'layoutBackgrounds',
    hero: {
      _type: 'layoutBackgroundSection',
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-boynton-beach-fl-copper-gutter-front-home.webp`,
    },
  },
  contentSections: [
    {
      _type: 'cityContentSection',
      _key: 'aagf-copper-why-choose-material',
      heading: 'Why Choose Copper Gutters in South Florida',
      body: `<p>South Florida weather is tough on exterior materials. Heavy rain, coastal air, and constant humidity accelerate corrosion and wear on standard systems, especially on older homes and coastal properties. Copper is often chosen because it holds up under these conditions while maintaining its appearance over time.</p>
<p>Homeowners usually switch to copper when they notice:</p>
<ul>
<li>Water staining along aging gutter lines</li>
<li>Frequent rust or deterioration on existing systems</li>
<li>Visible wear from salt air exposure near the coast</li>
<li>Rooflines where aesthetics matter as much as performance</li>
<li>Repeated repairs that no longer solve the issue long-term</li>
</ul>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-replacement-delray-beach-fl-copper-gutter-system.webp`,
      imageAlt: 'Copper gutter system on a South Florida home',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-copper-services',
      heading: 'Our South Florida Copper Gutter Services',
      body: `<p>We install copper gutter systems built for long-term performance in South Florida’s coastal climate, where moisture and salt exposure are constant factors.</p>
<p>Our copper gutter services include:</p>
<ul>
<li>Full copper gutter installation for residential and commercial properties</li>
<li>Replacement of aging or corroded drainage systems</li>
<li>Custom sizing and fabrication for architectural rooflines</li>
<li>Downspout integration for proper water discharge and flow control</li>
<li>Seam alignment and sealing for long-term durability</li>
</ul>
<p>We also offer support when needed through <a href="/gutter-repair-south-florida/">gutter repairs in South Florida</a> to ensure full system performance. For properties considering alternative materials, we also install <a href="/aluminum-gutters-fl/">South Florida aluminum gutters</a> as a functional option depending on budget and design needs.</p>`,
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-copper-why-matters',
      heading: 'Why Copper Gutters Matter in South Florida Weather',
      body: `<p>Copper behaves differently from standard materials in South Florida’s climate. Copper gutters naturally resist corrosion and develop a protective patina over time, which helps them withstand constant moisture and coastal exposure.</p>
<p>Where most systems break down:</p>
<ul>
<li>Joint wear from constant rainfall</li>
<li>Surface corrosion from salt-heavy air</li>
<li>Aging that affects both function and appearance</li>
<li>Weak points forming at seams over time</li>
<li>High maintenance demand on standard materials</li>
</ul>
<p>Copper reduces many of these long-term issues, especially in coastal and high-rainfall zones.</p>`,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-copper-process',
      heading: 'Our Copper Gutter Installation Process in South Florida',
      body: `<p>We follow a clear, step-by-step approach so the system is built for real South Florida weather. We start with a full roofline evaluation to understand slope, drainage load, and architectural design. Next, copper sections are measured and fabricated to match the structure for clean flow and alignment.</p>
<p>Installation focuses on secure fastening, proper pitch, and sealed connections to handle heavy rain events. Each system is tested for smooth discharge before completion. We also review the full drainage path to ensure water is moving away from the structure efficiently.</p>
<p>Before we leave, we also make sure you understand how to take care of your copper gutters going forward, so you feel confident about maintaining them between visits.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-lighthouse-point-fl-copper-gutter-installation.webp`,
      imageAlt: 'Copper gutter installation on a South Florida home',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-copper-why-choose',
      heading: 'Why Choose All American Gutters',
      body: `<p>At All American Gutters, we don’t just clear debris. We help keep your gutter system working properly in South Florida’s demanding conditions.</p>
<p>Homeowners and property managers choose us because:</p>
<ul>
<li>100+ positive reviews with a 4.8 Google rating</li>
<li>Clear communication from start to finish</li>
<li>Transparent pricing with clear expectations</li>
<li>Precision-focused installation and fabrication work</li>
<li>Strong experience with coastal South Florida properties</li>
<li>Long-term approach to durability and performance</li>
<li>Clean, organized job sites on every project</li>
</ul>`,
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-copper-consultation',
      heading: 'Get a Free Consultation Today',
      body: `<p>If your current system is failing, rusting, or not matching the durability your property needs in South Florida weather, copper gutters are a long-term upgrade worth considering. Call us today or request a free design consultation to get a system built for performance and longevity.</p>`,
      showCtas: true,
      renderAfterFaq: true,
    },
  ],
  faq: {
    _type: 'faq',
    headline: 'South Florida Copper Gutter FAQs',
    headingId: 'copper-gutters-fl-faq',
    items: [
      {
        _type: 'faqItem',
        _key: 'aagf-copper-faq-worth',
        question: 'Are copper gutters worth it in South Florida?',
        answerHtml:
          '<p>Yes, copper gutters are often chosen in South Florida because they handle constant rain and coastal exposure well. They also resist corrosion better than many standard materials. While they require a higher upfront investment, they offer long-term durability and reduce the need for frequent replacements or repairs in harsh weather conditions.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-copper-faq-longevity',
        question: 'How long do copper gutters last in South Florida?',
        answerHtml:
          '<p>In South Florida, copper gutters can last for decades when properly installed. The material naturally develops a protective patina that helps resist corrosion. Performance depends on installation quality, roof design, and regular maintenance, but copper generally outperforms standard materials in coastal and high-humidity environments.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-copper-faq-patina',
        question: 'Will copper gutters change color over time in South Florida?',
        answerHtml:
          '<p>Yes, copper naturally develops a patina over time, shifting from bright copper to deeper browns and eventually a greenish tone. This is a natural process and actually helps protect the material from corrosion, especially in humid and coastal environments like South Florida.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-copper-faq-storms',
        question: 'Can copper gutters handle heavy South Florida storms?',
        answerHtml:
          '<p>Yes, when properly designed and installed, copper gutters handle heavy rainfall effectively. The key is correct sizing and slope to ensure fast water movement. In South Florida, storm intensity makes proper installation critical to prevent overflow and protect the roof edge and foundation areas.</p>',
      },
    ],
  },
}
