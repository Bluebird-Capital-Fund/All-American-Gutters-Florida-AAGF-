/** Fallback `cityServicePage` payload when Sanity has not been patched yet. */
export const SOFFIT_REPAIR_SOUTH_FLORIDA_SLUG = 'soffit-repair-south-florida'

/** @deprecated use SOFFIT_REPAIR_SOUTH_FLORIDA_SLUG */
export const ROOF_SOFFIT_SOUTH_FLORIDA_SLUG = SOFFIT_REPAIR_SOUTH_FLORIDA_SLUG

const MEDIA = 'Media (AAGF)/Images (AAGF)'

export const roofSoffitSouthFloridaPage = {
  title: 'Soffit Repair South Florida',
  slug: { _type: 'slug', current: SOFFIT_REPAIR_SOUTH_FLORIDA_SLUG },
  eyebrow: 'Roof Soffit',
  headline: 'Soffit Repair in South Florida',
  lead:
    'If soffit panels are sagging, stained, or pulling apart, it usually means moisture or airflow issues are already affecting the roofline. Our South Florida soffit repair service restores proper ventilation and helps protect the edge of your roof from ongoing damage.',
  heroFormIntro:
    'Schedule a free consultation and get your roof soffit assessed for South Florida humidity and storm exposure.',
  meta: {
    _type: 'meta',
    title: 'Soffit Repair in South Florida | Free Consultation | All American',
    description:
      'South Florida soffit repair solutions to improve airflow and prevent damage. Reliable service with a free consultation included.',
  },
  layoutBackgrounds: {
    _type: 'layoutBackgrounds',
    hero: {
      _type: 'layoutBackgroundSection',
      imageSrc: `${MEDIA}/all-american-gutters-gutter-replacement-boca-raton-fl-roof-gutter-system.webp`,
    },
  },
  contentSections: [
    {
      _type: 'cityContentSection',
      _key: 'aagf-soffit-problems',
      heading: 'Common Soffit Repair Problems in South Florida',
      body: `<p>In South Florida, soffit issues are usually tied to constant moisture, trapped heat, and storm-driven wind pushing debris into roof edges. Once airflow is restricted, problems show up fast.</p>
<p>Most homeowners and property managers notice things like:</p>
<ul>
<li>Peeling or soft soffit panels after heavy rain</li>
<li>Pest activity entering roof edges through gaps</li>
<li>Moisture stains near fascia and roofline transitions</li>
<li>Sagging sections after long humidity exposure</li>
<li>Blocked ventilation in older or poorly maintained systems</li>
</ul>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-replacement-deerfield-beach-fl-gutter-system-home.webp`,
      imageAlt: 'Roof soffit and gutter system on a South Florida home',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-soffit-services',
      heading: 'Our South Florida Soffit Repair Services',
      body: `<p>We repair and replace soffit systems so the roof edge stays protected and properly ventilated under South Florida conditions.</p>
<p>Our soffit repair services include:</p>
<ul>
<li>Soffit installation for new builds, additions, or full system upgrades</li>
<li>Soffit repair for damaged or loose panels</li>
<li>Full soffit replacement where sections have failed</li>
<li>Ventilation correction to improve airflow under the roof</li>
<li>Moisture damage inspection along roof edges and eaves</li>
<li>Integration checks with surrounding roof components</li>
</ul>
<p>We also provide <a href="/roof-fascia-south-florida/">fascia repair in South Florida</a> because soffit damage rarely happens on its own, and both usually show the same moisture and airflow stress. Additionally, we check how the <a href="/gutter-downspout-south-florida/">South Florida gutter downspout</a> is moving water away to reduce repeat buildup.</p>`,
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-soffit-why-matters',
      heading: 'Why Proper Soffit Repair Matters in South Florida',
      body: `<p>In South Florida, soffit is not just a finishing detail. It manages airflow under the roof and helps protect roof edges from constant heat, humidity, and moisture buildup.</p>
<p>What often gets overlooked:</p>
<ul>
<li>Restricted ventilation that traps heat in the attic space</li>
<li>Moisture buildup along roof edges during rainy seasons</li>
<li>Pest entry through small gaps or softened material</li>
<li>Hidden rot forming where soffit meets fascia</li>
</ul>
<p>In South Florida, constant humidity and storm cycles make these issues develop faster than most expect.</p>`,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-soffit-process',
      heading: 'Our Soffit Repair Process in South Florida',
      body: `<p>We keep the process clear and straightforward from the first visit. We start by inspecting the full roof edge to identify moisture damage, airflow restrictions, and structural separation.</p>
<p>Next, we remove damaged soffit sections and correct any underlying issues affecting ventilation or moisture control. New soffit is installed with proper alignment and airflow spacing so the roof edge can breathe and stay protected through heavy rain and heat cycles.</p>
<p>Before finishing, the entire area is checked for secure fitment and clean integration with surrounding roof components.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-deerfield-beach-fl-second-story-gutter-install.webp`,
      imageAlt: 'Roof edge and soffit area on a South Florida home',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-soffit-why-choose',
      heading: 'Why Choose All American Gutters',
      body: `<p>At All American Gutters, we keep things straightforward from start to finish. From the first call to the final walkthrough, the focus stays on clear communication and getting the job done right the first time.</p>
<p>Property owners across South Florida choose us because:</p>
<ul>
<li>100+ positive reviews and a 4.8 Google rating</li>
<li>Clear communication throughout the project</li>
<li>Stress-free, reliable experience from consultation to completion</li>
<li>Clean, precise installation with attention to alignment and airflow</li>
<li>Transparent pricing with no unclear scope of work</li>
<li>1-year workmanship warranty and 20-year aluminum materials warranty</li>
<li>A professional, service-driven approach focused on long-term, durable results</li>
</ul>`,
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-soffit-consultation',
      heading: 'Get a Free Consultation Today',
      body: `<p>If soffit damage is starting to show, it often points to moisture or airflow issues already affecting your roofline. Call us today or schedule your free consultation so we can assess the area and help prevent further deterioration.</p>`,
      showCtas: true,
      renderAfterFaq: true,
    },
  ],
  faq: {
    _type: 'faq',
    headline: 'South Florida Soffit repair FAQs',
    headingId: 'soffit-repair-south-florida-faq',
    items: [
      {
        _type: 'faqItem',
        _key: 'aagf-soffit-faq-damaged',
        question: 'How do I know if my soffit is damaged in South Florida?',
        answerHtml:
          '<p>Common signs include peeling panels, visible gaps, or moisture stains along the roof edge. In South Florida, humidity and heavy rain often accelerate deterioration, especially on older homes. You may also notice pests entering roof areas or uneven ventilation inside the attic, both of which can point to soffit failure.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-soffit-faq-causes',
        question: 'What causes soffit problems in South Florida homes?',
        answerHtml:
          '<p>Most issues come from moisture exposure, poor ventilation, and storm-driven debris. Constant humidity can soften materials over time, while blocked airflow traps heat under the roof. In South Florida, heavy rain and wind also push water into roof edges, which speeds up deterioration of soffit panels and surrounding structures.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-soffit-faq-other-parts',
        question: 'Can damaged soffit affect other parts of the roof system in South Florida?',
        answerHtml:
          '<p>Yes. Soffit issues often lead to moisture buildup along fascia boards and roof edges. Over time, this can contribute to rot, pest entry, and ventilation problems in the attic. In South Florida, the combination of heat and rain makes these interconnected issues develop faster if not addressed early.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-soffit-faq-repair-replace',
        question: 'Do soffit issues require full replacement or just repair?',
        answerHtml:
          '<p>It depends on the extent of the damage. Small sections can often be repaired if the structure underneath is still sound. However, widespread moisture damage or ventilation failure usually requires full replacement. In South Florida, it’s common for older homes to need a combination of both repair and replacement work.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-soffit-faq-inspection',
        question: 'How often should soffit be inspected in South Florida?',
        answerHtml:
          '<p>Regular inspections are recommended due to constant humidity, storms, and heat exposure. Small issues can develop quickly and spread along the roof edge if not caught early. In South Florida, checking soffit during routine roof or exterior maintenance helps prevent larger structural problems later.</p>',
      },
    ],
  },
}
