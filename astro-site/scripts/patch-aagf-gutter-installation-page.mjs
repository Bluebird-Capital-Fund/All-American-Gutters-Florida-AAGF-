#!/usr/bin/env node
/**
 * Gutter Installation South Florida service page — slug, SEO meta, and full page copy.
 *
 * Run: cd astro-site && node scripts/patch-aagf-gutter-installation-page.mjs
 */

import { createClient } from '@sanity/client'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  exitOrSkipIfNoSanityWriteCreds,
  getSanityPatchCredentials,
  loadPatchDotEnv,
  tryPublishDraft,
} from './patch-env.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

loadPatchDotEnv(root)

const { projectId, dataset, token } = getSanityPatchCredentials()

const MEDIA = 'Media (AAGF)/Images (AAGF)'
const NEW_SLUG = 'gutter-installation-south-florida'
const LEGACY_SLUGS = [
  'gutters-south-florida',
  'gutter-installation-south-florida',
  'gutter-installation-tampa-fl',
  'seamless-gutters-south-florida',
  'seamless-gutters-tampa-fl',
]

const PAGE = {
  title: 'Gutter Installation South Florida',
  slug: { _type: 'slug', current: NEW_SLUG },
  eyebrow: 'Gutter Installation',
  headline: 'Gutter Installation in South Florida',
  lead:
    'If your property doesn’t have gutters or the current system can’t handle South Florida rain, you’re going to see water where it shouldn’t be. Overflow, pooling, and fascia damage show up fast here. Our South Florida gutter installation service is built to install systems that actually handle heavy storms, humidity, and daily wear without constant issues.',
  heroFormIntro:
    'Schedule a free consultation and get a gutter system built for South Florida storms.',
  meta: {
    _type: 'meta',
    title: 'Gutter Installation in South Florida | Free Consultation',
    description:
      'Gutter Installation in South Florida for strong, reliable systems built for heavy rain. Get expert service and a free consultation today.',
  },
  layoutBackgrounds: {
    _type: 'layoutBackgrounds',
    hero: {
      _type: 'layoutBackgroundSection',
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-deerfield-beach-fl-seamless-gutter-installation-front-home.webp`,
    },
  },
  contentSections: [
    {
      _type: 'cityContentSection',
      _key: 'aagf-install-reasons',
      heading: 'Common Reasons for Gutter Installation in South Florida',
      body: `<p>We usually see gutter installation requests in South Florida on homes with no gutters at all or systems that are too small to handle heavy storms. It’s common on older homes, additions, or properties that were never built with proper drainage in mind. In other cases, the existing gutters are too small or poorly placed to handle the volume of rain we get here.</p>
<p>Most property owners reach out after noticing:</p>
<ul>
<li>No gutters at all on parts of the home or the entire structure</li>
<li>Water pouring straight off the roof during storms</li>
<li>Existing gutters overflowing even with light to moderate rain</li>
<li>Sections pulling away from the fascia or roofline</li>
<li>Water pooling around walkways, patios, or the foundation</li>
</ul>
<p>In some cases, homeowners start with <a href="/gutter-repair-south-florida/">South Florida gutter repair</a> before realizing the system is too outdated or undersized and needs a full installation instead.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-fort-lauderdale-fl-townhome-gutter-system.webp`,
      imageAlt: 'Seamless gutter installation on a South Florida townhome',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-install-services',
      heading: 'Our South Florida Gutter Installation Services',
      body: `<p>We install gutter systems that are built to handle South Florida rain and weather.</p>
<p>Our gutter installation services include:</p>
<ul>
<li>South Florida seamless gutter installation for cleaner flow and fewer leaks</li>
<li>Custom-fit systems based on your roofline and drainage needs</li>
<li>Proper pitch and alignment so water moves efficiently</li>
<li>Downspout placement to direct water away from the structure</li>
<li>Reinforced attachment for wind and storm resistance</li>
</ul>
<p>We work with homeowners, commercial properties, HOAs, landlords, roofers, and developers across South Florida. If you’re upgrading an old system or installing new gutters, we focus on getting it done right so it holds up long-term.</p>`,
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-install-why-matters',
      heading: 'Why Proper Gutter Installation Matters in South Florida Weather',
      body: `<p>In South Florida, proper gutter installation comes down to how well the system handles real storm conditions, not just how it looks once installed.</p>
<p>What most people miss:</p>
<ul>
<li>Incorrect slope causes constant overflow</li>
<li>Poor placement leads to water pooling near the foundation</li>
<li>Weak fastening fails during storms</li>
<li>Undersized systems can’t handle heavy rainfall</li>
</ul>
<p>DIY or rushed installs often look fine at first but fail the moment heavy rain hits. We install gutter systems that perform in real South Florida weather, especially during heavy rain and storms. Routine <a href="/gutter-cleaning-south-florida/">gutter cleaning in South Florida</a> is also important to keep water moving during heavy rain and prevent buildup from palm debris, roof grit, and storm runoff.</p>`,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-install-process',
      heading: 'Our Gutter Installation Process in South Florida',
      body: `<p>We keep the process clear and organized from the start. We begin with a full evaluation of your roofline and drainage needs to understand how water is currently moving or where it’s failing.</p>
<p>Then we walk you through the layout, placement, and installation plan so everything is clear before work begins. Installation is completed with careful alignment, secure fastening, and proper pitch to ensure water flows the right way. After the work is done, we make sure your property is fully cleaned up, no debris or mess left behind.</p>
<p>Before we leave, we also make sure you understand how to take care of your gutters going forward, so you feel confident about maintaining them between visits.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-coral-springs-fl-seamless-gutter-installation-brandon-fl.webp`,
      imageAlt: 'Seamless gutter installation on a South Florida home',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-install-why-choose',
      heading: 'Why Choose All American Gutters',
      body: `<p>At All American Gutters, we keep things straightforward from start to finish. From the first call to the final walkthrough, the focus stays on clear communication and getting the job done right the first time.</p>
<p>Homeowners and property managers across South Florida choose us because:</p>
<ul>
<li>100+ positive reviews and a 4.8 Google rating</li>
<li>Clear communication at every stage of the project</li>
<li>Meticulous attention to detail in both installation and service</li>
<li>Stress-free, reliable experience from consultation to completion</li>
<li>Transparent pricing with detailed, easy-to-understand estimates</li>
<li>1-year workmanship warranty and 20-year aluminum materials warranty</li>
<li>A professional, service-driven approach focused on long-term, durable results</li>
</ul>`,
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-install-consultation',
      heading: 'Get a Free Gutter Consultation Today',
      body: `<p>If your property doesn’t have gutters or your current system isn’t keeping up with the rain, it’s only a matter of time before you start seeing damage. Call us today or schedule your free consultation. We’ll install a system that’s built to handle South Florida weather and protect your property long-term.</p>`,
      showCtas: true,
      renderAfterFaq: true,
    },
  ],
  faq: {
    _type: 'faq',
    headline: 'South Florida Gutter Installation FAQs',
    headingId: 'gutter-installation-south-florida-faq',
    items: [
      {
        _type: 'faqItem',
        _key: 'aagf-install-faq-need-new',
        question: 'How do I know if I need a new gutter installation in South Florida?',
        answerHtml:
          '<p>If your property has no gutters, or your current system constantly overflows during rain, it’s usually time for a new installation. In South Florida, undersized or poorly installed gutters fail quickly under heavy rainfall. Signs like water pooling near the foundation, fascia damage, or repeated repairs often point to needing a properly designed system.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-install-faq-best-type',
        question: 'What type of gutters work best in South Florida weather?',
        answerHtml:
          '<p>Seamless aluminum gutters are one of the most reliable options for South Florida conditions. They handle heavy rain well, resist rust in humid environments, and reduce leak points. Proper sizing and placement matter just as much as the material, especially with frequent storms, strong winds, and debris buildup from trees and roof surfaces.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-install-faq-no-gutters',
        question: 'What happens if I don’t install gutters on my South Florida property?',
        answerHtml:
          '<p>Without gutters, rainwater falls directly off the roof and collects around the structure. In South Florida, that can quickly lead to soil erosion, foundation stress, fascia rot, and water intrusion. Over time, this can affect siding, walkways, and landscaping. Gutters help control water and protect the property from long-term damage.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-install-faq-maintenance',
        question: 'How often should gutters be maintained in South Florida?',
        answerHtml:
          '<p>Most properties in South Florida benefit from regular maintenance due to heavy rain and debris buildup. Palm fronds, leaves, and roof grit can clog systems quickly. Routine gutter cleaning in South Florida helps keep water flowing properly and prevents overflow, especially before and after storm seasons when buildup happens fastest.</p>',
      },
    ],
  },
}

async function main() {
  exitOrSkipIfNoSanityWriteCreds(projectId, token, 'patch-aagf-gutter-installation-page')

  const client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    token,
    useCdn: false,
  })

  const page = await client.fetch(
    `*[_type == "cityServicePage" && slug.current in $slugs][0]{ _id, slug }`,
    { slugs: LEGACY_SLUGS },
  )

  if (!page?._id) {
    console.error(
      `No cityServicePage found for slugs: ${LEGACY_SLUGS.join(', ')}. Create one in Sanity or check the slug.`,
    )
    process.exit(1)
  }

  const oldSlug = String(page.slug?.current || '').trim()
  await client.patch(page._id).set(PAGE).commit()
  console.log(
    `Patched cityServicePage ${page._id}${oldSlug !== NEW_SLUG ? ` (${oldSlug} → ${NEW_SLUG})` : ''}.`,
  )

  if (await tryPublishDraft(client, page._id)) {
    console.log(`Published ${page._id}.`)
  }

  console.log(`Done. Gutter installation page is live at /${NEW_SLUG}/`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
