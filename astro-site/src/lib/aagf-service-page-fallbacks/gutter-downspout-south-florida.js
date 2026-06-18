/** Fallback `cityServicePage` payload when Sanity has not been patched yet. */
export const GUTTER_DOWNSPOUT_SOUTH_FLORIDA_SLUG = 'gutter-downspout-south-florida'

const MEDIA = 'Media (AAGF)/Images (AAGF)'

export const gutterDownspoutSouthFloridaPage = {
  title: 'Gutter Downspout South Florida',
  slug: { _type: 'slug', current: GUTTER_DOWNSPOUT_SOUTH_FLORIDA_SLUG },
  eyebrow: 'Gutter Downspout',
  headline: 'Gutter Downspout in South Florida',
  lead:
    'If water is collecting around your foundation or flooding walkways during rain, your downspouts aren’t doing their job. Our South Florida gutter downspout service fixes drainage at the source so water is directed away properly, not left sitting around your property.',
  heroFormIntro:
    'Schedule a free consultation and get your downspouts moving water away from your South Florida property.',
  meta: {
    _type: 'meta',
    title: 'Gutter Downspout in South Florida | Free Consultation',
    description:
      'South Florida gutter downspout services to improve water flow and prevent buildup. Protect your property with expert service and a free consultation.',
  },
  layoutBackgrounds: {
    _type: 'layoutBackgrounds',
    hero: {
      _type: 'layoutBackgroundSection',
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-deerfield-beach-fl-downspout-installation.webp`,
    },
  },
  contentSections: [
    {
      _type: 'cityContentSection',
      _key: 'aagf-downspout-problems',
      heading: 'Common Downspout Problems in South Florida',
      body: `<p>In South Florida, drainage problems usually appear when water doesn’t move far enough away during a storm. Heavy rain hits fast, and if downspouts are undersized, blocked, or poorly placed, water has nowhere to go.</p>
<p>Most homeowners and property managers notice things like:</p>
<ul>
<li>Water dumping straight at the base of the home during storms</li>
<li>Downspouts clogging with roof grit, sand, and palm debris</li>
<li>Short extensions that release water too close to walkways or patios</li>
<li>Disconnected or loose sections after wind or storm activity</li>
<li>Overflow backing up because downspouts can’t keep up</li>
</ul>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-cleaning-coral-springs-fl-downspout-installation-white-gutter-drainage.webp`,
      imageAlt: 'Gutter downspout and drainage on a South Florida home',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-downspout-services',
      heading: 'Our South Florida Gutter Downspout Services',
      body: `<p>We install and correct downspout systems so water gets carried well away from the structure instead of just being released right next to it.</p>
<p>Our service includes:</p>
<ul>
<li>Downspout installation based on roof size, layout, and actual water flow needs</li>
<li>Downspout repair for loose, damaged, or separated sections that affect drainage</li>
<li>Downspout cleaning to clear blockages caused by palm debris, sand, and roof grit</li>
<li>Adjustments to rain gutter downspout systems that aren’t moving water efficiently</li>
<li>Downspout drainage corrections to improve how and where water exits the property</li>
<li>Proper placement to carry water away from foundations and walkways</li>
<li>Reinforced connections to handle wind and heavy rain</li>
</ul>
<p>We also look at how your full system is working, including areas like <a href="/roof-soffit-south-florida/">roof soffit in South Florida</a> where moisture exposure can become an issue over time. In some cases, adding <a href="/gutter-guards-south-florida/">gutter guards in South Florida</a> helps reduce debris entering the system.</p>`,
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-downspout-why-matters',
      heading: 'Why Proper Downspout Setup Matters in South Florida',
      body: `<p>In South Florida, water hits hard and fast. If it’s not carried away properly, it settles around foundations, seeps into walkways, and creates ongoing moisture problems.</p>
<p>Most drainage problems in South Florida show up at the discharge point, where water leaves the system and is either directed properly or left too close to the structure.</p>
<p>What typically causes the problem:</p>
<ul>
<li>Downspouts that are too small for the roof volume</li>
<li>Discharge points that send water back toward the structure</li>
<li>Hidden clogs below the elbow or ground level</li>
<li>Extensions that shift or disconnect during storms</li>
</ul>`,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-downspout-process',
      heading: 'Our South Florida Gutter Downspout Process',
      body: `<p>We keep the process clear and focused on fixing the actual drainage issue.</p>
<p>We start by checking how water moves from the roof through the gutters and out of the downspouts. Then we identify where it’s slowing down, backing up, or draining in the wrong place.</p>
<p>Next, we install or adjust the downspouts with proper sizing, placement, and secure connections. We make sure water is directed away from the structure, not left near the base. Before we finish, we test the flow and clean up the area so everything is working the way it should.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-highland-beach-fl-downspout-installation-side-yard-drainage.webp`,
      imageAlt: 'Gutter downspout installation and side-yard drainage in South Florida',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-downspout-why-choose',
      heading: 'Why Choose All American Gutters',
      body: `<p>At All American Gutters, we keep things straightforward from start to finish. From the first call to the final walkthrough, the focus stays on clear communication and getting the job done right the first time.</p>
<p>Property owners across South Florida choose us because:</p>
<ul>
<li>100+ positive reviews and a 4.8 Google rating</li>
<li>Clear communication from first call to final walkthrough</li>
<li>Stress-free, reliable experience from consultation to completion</li>
<li>Attention to detail in placement, flow, and finishing</li>
<li>Transparent pricing with clear scope of work</li>
<li>1-year workmanship warranty and 20-year aluminum materials warranty</li>
<li>A professional, service-driven approach focused on long-term, durable results</li>
</ul>`,
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-downspout-consultation',
      heading: 'Get a Free Consultation in South Florida',
      body: `<p>If water is collecting where it shouldn’t, your downspouts are likely the issue. Call us today or schedule your free consultation. We’ll install a system that’s built to handle South Florida weather and protect your property long-term.</p>`,
      showCtas: true,
      renderAfterFaq: true,
    },
  ],
  faq: {
    _type: 'faq',
    headline: 'South Florida Gutter Downspout FAQs',
    headingId: 'gutter-downspout-south-florida-faq',
    items: [
      {
        _type: 'faqItem',
        _key: 'aagf-downspout-faq-drainage',
        question: 'How do I know if my downspouts are causing drainage problems?',
        answerHtml:
          '<p>If you see water pooling near your foundation, walkways, or entry points during rain, your downspouts may not be draining properly. In South Florida, this often shows up quickly during storms when water can’t move away fast enough. Staining, erosion, or repeated overflow are strong signs the downspout system needs adjustment or replacement.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-downspout-faq-sizing',
        question: 'What size downspouts are needed in South Florida?',
        answerHtml:
          '<p>Downspout sizing depends on roof area and how much water your gutter system collects. In South Florida, heavier rainfall means standard sizing doesn’t always work. Undersized downspouts can’t keep up, leading to overflow and backups. Proper sizing ensures water moves through the system efficiently, even during sudden heavy storms.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-downspout-faq-clog-damage',
        question: 'Can clogged downspouts damage my South Florida property?',
        answerHtml:
          '<p>Yes. When downspouts clog, water backs up into the gutter system and spills over. In South Florida, that water often ends up near the foundation, fascia boards, or siding. Over time, this can cause erosion, wood damage, and moisture buildup. Keeping downspouts clear and properly installed helps prevent these issues.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-downspout-faq-extensions',
        question: 'Do downspouts need extensions in South Florida homes?',
        answerHtml:
          '<p>In many cases, yes. Short or poorly placed downspouts release water too close to the structure. With the amount of rain South Florida gets, that leads to pooling and drainage issues fast. Extensions help carry water farther away from the home, protecting the foundation, landscaping, and surrounding surfaces from repeated exposure.</p>',
      },
    ],
  },
}
