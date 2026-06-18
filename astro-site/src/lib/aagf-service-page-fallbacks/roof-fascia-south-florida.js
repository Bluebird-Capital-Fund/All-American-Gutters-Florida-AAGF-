/** Fallback `cityServicePage` payload when Sanity has not been patched yet. */
export const ROOF_FASCIA_SOUTH_FLORIDA_SLUG = 'roof-fascia-south-florida'

const MEDIA = 'Media (AAGF)/Images (AAGF)'

export const roofFasciaSouthFloridaPage = {
  title: 'Roof Fascia South Florida',
  slug: { _type: 'slug', current: ROOF_FASCIA_SOUTH_FLORIDA_SLUG },
  eyebrow: 'Roof Fascia',
  headline: 'Roof Fascia in South Florida',
  lead:
    'If fascia boards are soft, pulling away, or showing water damage, it usually means the roof edge has been exposed to moisture for too long. Our South Florida roof fascia service restores and protects the structural edge of your roof so it can handle heavy rain, wind, and constant humidity without breaking down.',
  heroFormIntro:
    'Schedule a free consultation and get your roof fascia assessed for South Florida moisture and storm damage.',
  meta: {
    _type: 'meta',
    title: 'Roof Fascia in South Florida | Free Consultation | All American',
    description:
      'South Florida roof fascia repair and installation for strong, clean roof edges. Protect your home with expert service and a free consultation.',
  },
  layoutBackgrounds: {
    _type: 'layoutBackgrounds',
    hero: {
      _type: 'layoutBackgroundSection',
      imageSrc: `${MEDIA}/all-american-gutters-gutter-replacement-plantation-fl-front-elevation-gutter-install-stone-home.webp`,
    },
  },
  contentSections: [
    {
      _type: 'cityContentSection',
      _key: 'aagf-fascia-problems',
      heading: 'Common Roof Fascia Problems in South Florida',
      body: `<p>In South Florida, fascia damage is usually driven by constant moisture exposure, storm-driven wind, and overflowing drainage systems that push water where it shouldn’t go.</p>
<p>Most homeowners and property managers notice things like:</p>
<ul>
<li>Peeling or rotting wood along roof edges</li>
<li>Paint bubbling or dark water stains under the roofline</li>
<li>Sections pulling away after heavy rain or wind</li>
<li>Pest activity near roof edges and eaves</li>
<li>Soft or weakened fascia boards from long-term moisture exposure</li>
</ul>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-repair-pompano-beach-fl-brick-home-gutters.webp`,
      imageAlt: 'Roof fascia and gutters on a South Florida home',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-fascia-services',
      heading: 'Our South Florida Roof Fascia Services',
      body: `<p>We handle fascia repair and replacement when the roof edge starts showing wear, so it doesn’t keep weakening with every rainy season.</p>
<p>Our roof fascia services include:</p>
<ul>
<li>Fascia installation for new builds and full replacements</li>
<li>Fascia repair for localized damage or moisture impact</li>
<li>Fascia restoration to reinforce weakened roof edges</li>
<li>Inspection of surrounding roofline conditions and drainage behavior</li>
<li>Replacement of sections affected by rot or structural separation</li>
</ul>
<p>We also evaluate connected systems like aluminum gutters in South Florida since overflow is one of the main causes of fascia deterioration. Similarly, roof edge ventilation is also reviewed alongside <a href="/roof-soffit-south-florida/">South Florida roof soffit</a> to prevent recurring moisture buildup.</p>`,
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-fascia-why-matters',
      heading: 'Why Proper Roof Fascia Matters in South Florida',
      body: `<p>Fascia forms the structural edge of the roof and supports the gutter system along the perimeter. In South Florida, constant rain, humidity, and wind-driven moisture put steady pressure on it and speed up wear over time.</p>
<p>What often gets overlooked:</p>
<ul>
<li>Water traveling behind gutters during heavy storms</li>
<li>Slow rot developing beneath paint or surface layers</li>
<li>Weak points forming where soffit and fascia meet</li>
<li>Structural stress from long-term moisture exposure</li>
</ul>
<p>Once fascia starts breaking down, it can quickly affect the entire roof edge system.</p>`,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-fascia-process',
      heading: 'Our Roof Fascia Process in South Florida',
      body: `<p>We keep the process clear and straightforward from the first visit.</p>
<p>We begin with a full inspection of the roof edge to identify moisture damage, structural weakness, and any drainage-related issues. Damaged sections are then removed and replaced or restored depending on condition. The goal is to rebuild a solid, sealed edge that can handle South Florida weather conditions.</p>
<p>Before completion, the entire area is checked for alignment, structural integrity, and proper integration with surrounding roof components.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-replacement-highland-beach-fl-two-story-gutter-installation.webp`,
      imageAlt: 'Roof fascia and gutter installation on a South Florida home',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-fascia-why-choose',
      heading: 'Why Choose All American Gutters',
      body: `<p>At All American Gutters, we keep things straightforward from start to finish. From the first call to the final walkthrough, the focus stays on clear communication and getting the job done right the first time.</p>
<p>Property owners across South Florida choose us because:</p>
<ul>
<li>100+ positive reviews and a 4.8 Google rating</li>
<li>Clear communication throughout every stage of the project</li>
<li>Careful inspection of roof edge systems, not just surface damage</li>
<li>High-quality workmanship focused on long-term durability</li>
<li>Transparent pricing with clear scope of work</li>
<li>1-year workmanship warranty and 20-year aluminum materials warranty</li>
<li>Clean, organized job sites after completion</li>
</ul>`,
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-fascia-consultation',
      heading: 'Get a Free Consultation Today',
      body: `<p>If fascia is showing visible signs of damage, it usually means moisture has already been working its way into the roof edge for some time. Catching it early can prevent more serious structural issues, including rot and separation along the roofline. Call us today or schedule a free consultation so we can assess the damage and stop it from spreading further.</p>`,
      showCtas: true,
      renderAfterFaq: true,
    },
  ],
  faq: {
    _type: 'faq',
    headline: 'Roof Fascia FAQs',
    headingId: 'roof-fascia-south-florida-faq',
    items: [
      {
        _type: 'faqItem',
        _key: 'aagf-fascia-faq-damaged',
        question: 'How do I know if my roof fascia is damaged in South Florida?',
        answerHtml:
          '<p>Common signs include peeling paint, soft or rotting wood, and visible staining along roof edges. In South Florida, constant humidity and heavy rain often speed up fascia deterioration. You may also notice gutters pulling away or pest activity near rooflines, which usually indicates underlying moisture damage.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-fascia-faq-causes',
        question: 'What causes fascia damage in South Florida homes?',
        answerHtml:
          '<p>Fascia damage is typically caused by water exposure, overflowing gutters, and long-term humidity. In South Florida, heavy storms often push water behind the gutter line, which leads to rot and weakening over time. Poor ventilation at the roof edge can also trap moisture and accelerate structural breakdown.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-fascia-faq-roof-system',
        question: 'Can damaged fascia affect the rest of the roof system in South Florida?',
        answerHtml:
          '<p>Yes. Fascia supports both the roof edge and gutter system, so damage can lead to drainage issues and structural instability. In South Florida, ongoing moisture exposure can also affect soffit areas and allow water intrusion behind roof components, creating larger repair needs if left unaddressed.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-fascia-faq-repair-replace',
        question: 'Is fascia repair enough or does it need full replacement?',
        answerHtml:
          '<p>It depends on the level of damage. Small, localized issues can often be repaired, but widespread rot or structural weakening usually requires full replacement. In South Florida, many homes experience accelerated deterioration due to constant moisture and storm exposure, which can make full restoration necessary.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-fascia-faq-inspection',
        question: 'How often should roof fascia be inspected in South Florida?',
        answerHtml:
          '<p>Regular inspections are recommended due to high humidity, frequent rain, and storm activity. Fascia damage often starts small and spreads slowly under paint or trim. In South Florida, checking during routine roof or exterior maintenance helps catch issues early before they affect the gutter system or roof structure.</p>',
      },
    ],
  },
}
