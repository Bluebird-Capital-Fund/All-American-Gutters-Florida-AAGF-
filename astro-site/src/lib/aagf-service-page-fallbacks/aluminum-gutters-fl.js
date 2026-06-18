/** Fallback `cityServicePage` payload when Sanity has not been patched yet. */
export const ALUMINUM_GUTTERS_FL_SLUG = 'aluminum-gutters-fl'

const MEDIA = 'Media (AAGF)/Images (AAGF)'

export const aluminumGuttersFlPage = {
  title: 'Aluminum Gutters South Florida',
  slug: { _type: 'slug', current: ALUMINUM_GUTTERS_FL_SLUG },
  eyebrow: 'Aluminum Gutters',
  headline: 'Aluminum Gutters in South Florida',
  lead:
    'Heavy South Florida rain puts constant pressure on roof edges and drainage systems, especially when water has nowhere to go during storms. Our aluminum gutters in South Florida are built to protect your home from overflow and long-term moisture damage.',
  heroFormIntro:
    'Schedule a free consultation and see how aluminum gutters can improve drainage on your South Florida property.',
  meta: {
    _type: 'meta',
    title: 'Aluminum Gutters in South Florida | Free Consultation',
    description:
      'High-quality aluminum gutters in South Florida for efficient drainage and lasting performance. Book a free consultation today.',
  },
  layoutBackgrounds: {
    _type: 'layoutBackgrounds',
    hero: {
      _type: 'layoutBackgroundSection',
      imageSrc: `${MEDIA}/all-american-gutters-gutter-replacement-palm-beach-gardens-fl-aluminum-gutter-system-backyard.webp`,
    },
  },
  contentSections: [
    {
      _type: 'cityContentSection',
      _key: 'aagf-aluminum-fail',
      heading: 'Why Gutters Fail in South Florida Weather',
      body: `<p>South Florida weather doesn’t give roof systems much time to recover. Afternoon downpours, tropical storms, and year-round humidity keep water moving almost constantly. Older homes, tile roofs, and dense tree coverage make the system work harder than it was designed for.</p>
<p>Homeowners usually notice:</p>
<ul>
<li>Water spilling over the edge during sudden downpours</li>
<li>Staining starting to run along fascia and soffit lines</li>
<li>Pooling near the foundation after storms pass</li>
<li>Palm debris, sand, and roof grit slowing water flow</li>
<li>Sections shifting or loosening after wind and heavy rain cycles</li>
</ul>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-deerfield-beach-fl-seamless-gutter-installation-front-home.webp`,
      imageAlt: 'Aluminum gutter installation on a South Florida home',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-aluminum-services',
      heading: 'Our South Florida Aluminum Gutter Services',
      body: `<p>We install and service aluminum gutter systems built to keep up with South Florida rain, moving water quickly off the roof and away from the structure so it doesn’t back up, overflow, or sit against the roof edge during long storm cycles.</p>
<p>Our aluminum gutter services include:</p>
<ul>
<li>Full aluminum gutter installation and replacement sized for roof flow</li>
<li>Repairs for leaking, sagging, or separated sections</li>
<li>System adjustments to improve drainage and reduce overflow points</li>
<li>Downspout alignment and discharge correction for better runoff control</li>
</ul>
<p>We also work with custom and architectural options like copper gutters in South Florida when a project requires a different finish or design approach. Every system is reviewed alongside <a href="/roof-fascia-south-florida/">South Florida roof fascia</a> to ensure the roof edge is properly supported.</p>`,
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-aluminum-why-matters',
      heading: 'Why Aluminum Gutters Matter in South Florida Weather',
      body: `<p>South Florida doesn’t give drainage systems much margin for error. When aluminum gutters are installed correctly, they move large volumes of water fast and keep it away from the roof edge, fascia, and foundation. When they’re not, small issues show up quickly during the first strong storm.</p>
<p>What homeowners often run into with improper installation:</p>
<ul>
<li>Overflow during short, intense rain bursts</li>
<li>Water running behind the system and damaging fascia boards</li>
<li>Sagging sections that collect standing water</li>
<li>Improper slope causing slow or uneven drainage</li>
<li>Early wear from constant moisture exposure</li>
</ul>
<p>A properly installed aluminum system depends on correct sizing, pitch, and roofline fit. In South Florida’s heavy rain, small mistakes show fast. Our work focuses on getting those details right from the start.</p>`,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-aluminum-process',
      heading: 'Our Aluminum Gutter Installation Process in South Florida',
      body: `<p>We follow a clear, step-by-step approach so the system is built for real South Florida weather, not just standard conditions.</p>
<p>We start by inspecting the roofline and drainage points to understand how water moves during heavy rain. From there, we measure and size the aluminum system based on actual roof load and runoff volume. Once installed, we secure proper slope and alignment so water moves quickly without pooling or overflow. Every section is checked for tight connections and clean discharge flow before we finish the job.</p>
<p>Before we leave, we also make sure you understand how to take care of your gutters going forward, so you feel confident about maintaining them between visits.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-replacement-boca-raton-fl-roof-gutter-system.webp`,
      imageAlt: 'Aluminum gutter system on a South Florida roofline',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-aluminum-why-choose',
      heading: 'Why Choose All American Gutters',
      body: `<p>At All American Gutters, we treat gutter cleaning as more than just clearing debris—it’s about keeping the system working properly in real South Florida conditions.</p>
<p>Homeowners and property managers choose us because:</p>
<ul>
<li>100+ positive reviews with a 4.8 Google rating</li>
<li>Transparent, detailed estimates with no guesswork</li>
<li>Clear communication throughout the entire project</li>
<li>Strong focus on long-term system performance</li>
<li>Careful attention to roofline alignment and water flow</li>
<li>1-year workmanship warranty and 20-year aluminum materials warranty</li>
<li>Clean, organized job sites on every project</li>
</ul>`,
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-aluminum-consultation',
      heading: 'Get a Free Consultation Today',
      body: `<p>If your system is showing overflow, leaks, or fascia staining, it usually means water isn’t being controlled properly during South Florida storms. Call us today or schedule a free inspection to restore proper drainage and protect your roof edge.</p>`,
      showCtas: true,
      renderAfterFaq: true,
    },
  ],
  faq: {
    _type: 'faq',
    headline: 'South Florida Aluminum Gutter FAQs',
    headingId: 'aluminum-gutters-fl-faq',
    items: [
      {
        _type: 'faqItem',
        _key: 'aagf-aluminum-faq-good-choice',
        question: 'Are aluminum gutters a good choice for South Florida homes?',
        answerHtml:
          '<p>Yes, aluminum is one of the most common materials used in South Florida because it handles heavy rain and humidity well. However, performance depends on proper sizing, slope, and installation quality. Poor setup can still lead to overflow, fascia damage, and early wear during frequent storm cycles.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-aluminum-faq-check',
        question: 'How often should aluminum gutters be checked in South Florida?',
        answerHtml:
          '<p>Due to constant rain, wind, and debris from palm trees and roofing materials, inspections should be done regularly. Small issues like loose brackets or minor clogs can escalate quickly during storm season, especially when water is not draining efficiently away from the structure.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-aluminum-faq-failing',
        question: 'What are signs my South Florida aluminum gutters are failing?',
        answerHtml:
          '<p>Common signs include water spilling over edges, visible sagging sections, staining along fascia boards, and pooling near the foundation after storms. In South Florida, these problems often appear faster because of heavy rainfall intensity and constant exposure to humidity.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-aluminum-faq-storms',
        question: 'Can aluminum gutters handle heavy South Florida storms?',
        answerHtml:
          '<p>Yes, when properly installed and sized for the roof, aluminum systems can handle strong rainfall. Issues usually come from incorrect slope, undersized sections, or weak attachment points. Storm conditions expose any installation weaknesses quickly, especially during peak rainy season.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-aluminum-faq-maintenance',
        question: 'Do aluminum gutters require maintenance in South Florida?',
        answerHtml:
          '<p>Yes. Even durable systems need maintenance due to constant exposure to debris, rain, and humidity. Regular cleaning and inspections help prevent clogs, overflow, and fascia-related damage, ensuring the system continues to perform properly during heavy storm activity.</p>',
      },
    ],
  },
}
