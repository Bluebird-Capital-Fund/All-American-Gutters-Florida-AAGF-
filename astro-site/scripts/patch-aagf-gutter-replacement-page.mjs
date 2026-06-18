#!/usr/bin/env node
/**
 * Gutter Replacement South Florida service page — slug, SEO meta, and full page copy.
 *
 * Run: cd astro-site && node scripts/patch-aagf-gutter-replacement-page.mjs
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
const NEW_SLUG = 'gutter-replacement-south-florida'
const LEGACY_SLUGS = [
  'gutters-south-florida-replacement',
  'gutter-replacement-south-florida',
  'gutter-replacement-tampa-fl',
]

const PAGE = {
  title: 'Gutter Replacement South Florida',
  slug: { _type: 'slug', current: NEW_SLUG },
  eyebrow: 'Gutter Replacement',
  headline: 'Gutter Replacement in South Florida, FL',
  lead:
    'If your gutters are leaking in multiple spots, pulling away from the roof, or overflowing no matter how often they’re cleaned, the system is usually past repair. Our South Florida gutter replacement service replaces failing systems with setups that can actually handle heavy rain, humidity, and daily wear without constant issues.',
  heroFormIntro:
    'Schedule a free consultation and get a replacement system built for South Florida weather.',
  meta: {
    _type: 'meta',
    title: 'Gutter Replacement in South Florida, FL | Free Consultation',
    description:
      'Reliable gutter replacement in South Florida, FL with high-quality materials and expert installation. Start with a free consultation today.',
  },
  layoutBackgrounds: {
    _type: 'layoutBackgrounds',
    hero: {
      _type: 'layoutBackgroundSection',
      imageSrc: `${MEDIA}/all-american-gutters-gutter-replacement-deerfield-beach-fl-gutter-system-home.webp`,
    },
  },
  contentSections: [
    {
      _type: 'cityContentSection',
      _key: 'aagf-replace-reasons',
      heading: 'Common Reasons for Gutter Replacement in South Florida',
      body: `<p>Most gutter replacement jobs in South Florida come from systems that have been patched too many times or were never built to handle this kind of weather. Between heavy rain, storm winds, and constant debris, weak systems start breaking down faster than expected, especially on older homes or tile roofs.</p>
<p>Homeowners and property owners usually reach out after noticing:</p>
<ul>
<li>Leaks showing up in multiple sections</li>
<li>Gutters separating from the fascia or roofline</li>
<li>Water spilling over even after cleaning</li>
<li>Rust, cracks, or soft spots along the system</li>
<li>Repeated repairs that don’t hold up after storms</li>
</ul>
<p>In some cases, ongoing <a href="/gutter-cleaning-south-florida/">South Florida gutter cleaning</a> or repairs stop being effective because the system itself is worn out or undersized.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-replacement-delray-beach-fl-copper-gutter-system.webp`,
      imageAlt: 'Gutter replacement on a South Florida home with copper gutter system',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-replace-services',
      heading: 'Our South Florida Gutter Replacement Services',
      body: `<p>We replace systems that have reached the point where repairs don’t make sense anymore.</p>
<p>Our gutter replacement services include:</p>
<ul>
<li>Removal of old or failing gutter systems</li>
<li>Installation of new seamless systems sized for proper flow</li>
<li>Correct pitch and alignment to prevent overflow</li>
<li>Downspout updates to improve drainage away from the property</li>
<li>Reinforced fastening for wind and storm resistance</li>
</ul>
<p>We handle gutter replacement across South Florida for residential, commercial, HOA, and multi-property systems. If the system is still in good shape, we’ll tell you. If not, we replace it properly so you’re not dealing with the same problems again.</p>`,
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-replace-why-matters',
      heading: 'Why Professional Gutter Replacement Matters in South Florida',
      body: `<p>Once a system starts failing in multiple areas, replacing it is usually the only way to fix the root problem. What most people don’t see right away:</p>
<ul>
<li>Small leaks often mean the seams are breaking down across the system</li>
<li>Sagging sections usually point to structural weakness, not just loose brackets</li>
<li>Repeated overflow can mean the system was undersized from the start</li>
<li>Old fasteners and joints don’t hold up well in humidity and salt air</li>
</ul>
<p>In South Florida, a failing gutter system quickly turns into water running down walls, soaking fascia, and collecting where it shouldn’t. We replace the system so you’re not dealing with the same overflow and drainage problems every time it rains.</p>`,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-replace-process',
      heading: 'Our Gutter Replacement Process in South Florida',
      body: `<p>We keep the process clear and straightforward from the first visit.</p>
<p>We start by inspecting the full system to confirm whether replacement is the right move or if repairs are still realistic.</p>
<p>Then we walk you through the layout, sizing, and placement so you understand how the new system will improve drainage. Once approved, we remove the old gutters and install the new system with proper alignment, secure fastening, and clean transitions.</p>
<p>Before we leave, we clean the work area and walk the system with you so you know exactly how it’s set up and how to maintain it. We also provide guidance on gutter maintenance in South Florida so the new system keeps performing over time.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-replacement-highland-beach-fl-two-story-gutter-installation.webp`,
      imageAlt: 'Two-story gutter replacement on a South Florida home',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-replace-why-choose',
      heading: 'Why Choose All American Gutters',
      body: `<p>At All American Gutters, we take our time on replacements so everything lines up, drains right, and stays put.</p>
<p>Homeowners and property managers across South Florida choose us because:</p>
<ul>
<li>100+ positive reviews and a 4.8 Google rating</li>
<li>Clear, consistent communication from start to finish</li>
<li>Meticulous attention to detail in both removal and installation</li>
<li>Stress-free, reliable experience from consultation to completion</li>
<li>Transparent pricing with clear, detailed estimates</li>
<li>1-year workmanship warranty and 20-year aluminum materials warranty</li>
<li>Thorough cleanup and post-service guidance</li>
</ul>`,
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-replace-consultation',
      heading: 'Get a Free Consultation Today',
      body: `<p>If your gutters are leaking, sagging, or no longer keeping up with the rain, it’s not something to keep patching. Call us today or schedule your free consultation. We’ll assess your system and replace it with something that actually works for South Florida conditions.</p>`,
      showCtas: true,
      renderAfterFaq: true,
    },
  ],
  faq: {
    _type: 'faq',
    headline: 'South Florida Gutter Replacement FAQs',
    headingId: 'gutter-replacement-south-florida-faq',
    items: [
      {
        _type: 'faqItem',
        _key: 'aagf-replace-faq-need',
        question: 'How do I know if I need gutter replacement in South Florida?',
        answerHtml:
          '<p>If your gutters are leaking in multiple areas, sagging, or still overflowing after cleaning and repairs, replacement is usually the better option. In South Florida, heavy rain and humidity wear systems down quickly. When problems keep coming back, it often means the system itself is failing, not just one section.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-replace-faq-repair-instead',
        question: 'Can I repair my South Florida gutters instead of replacing them?',
        answerHtml:
          '<p>Repairs work when issues are isolated, like a small leak or a loose section. But if you’re dealing with repeated problems across the system, replacement makes more sense long-term. In South Florida, patching a failing system often leads to ongoing issues, especially during heavy rain and storm seasons.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-replace-faq-causes',
        question: 'What causes gutters to fail in South Florida?',
        answerHtml:
          '<p>Heavy rainfall, strong winds, debris buildup, and constant humidity all play a role. Over time, these conditions weaken seams, fasteners, and supports. On older homes or poorly installed systems, gutters can become misaligned or undersized, leading to overflow and structural stress around the roofline and fascia.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-replace-faq-ignore',
        question: 'What happens if I don’t replace failing gutters in South Florida?',
        answerHtml:
          '<p>Failing gutters can lead to water spilling down walls, pooling near the foundation, and damaging fascia boards. In South Florida, frequent rain means these issues escalate quickly. Over time, it can lead to mold, wood rot, and structural wear that becomes more expensive to fix than replacing the system early.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-replace-faq-lifespan',
        question: 'How long should a gutter system last in South Florida?',
        answerHtml:
          '<p>A properly installed system can last many years, but performance depends on installation quality, maintenance, and exposure to weather. In South Florida, systems that are undersized or poorly installed tend to fail sooner. Regular maintenance and proper installation play a big role in how long the system holds up.</p>',
      },
    ],
  },
}

async function main() {
  exitOrSkipIfNoSanityWriteCreds(projectId, token, 'patch-aagf-gutter-replacement-page')

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

  console.log(`Done. Gutter replacement page is live at /${NEW_SLUG}/`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
