#!/usr/bin/env node
/**
 * Gutter Repair Boca Raton service page — slug, SEO meta, and full page copy.
 *
 * Run: cd astro-site && node scripts/patch-aagf-gutter-repair-page.mjs
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
const NEW_SLUG = 'gutter-repair-boca-raton-fl'
const LEGACY_SLUGS = [
  'gutter-repair-boca-raton-fl',
  'gutter-repair-south-florida',
  'gutters-south-florida-repair',
  'gutter-repair-tampa-fl',
]

const PAGE = {
  title: 'Gutter Repair in Boca Raton',
  slug: { _type: 'slug', current: NEW_SLUG },
  eyebrow: 'Gutter Repair',
  headline: 'Gutter Repair in Boca Raton',
  lead:
    'If your gutters are spilling over every time a Boca Raton storm rolls in, or you’re noticing water dripping where it shouldn’t, that’s usually a sign the system is struggling. Our Boca Raton gutter repair service at All American Gutters Florida is built to fix those issues quickly and properly, so your system can handle heavy rain, wind, and year-round humidity without falling apart again.',
  heroFormIntro:
    'Get clarity on your gutters with a free consultation and expert recommendations.',
  meta: {
    _type: 'meta',
    title: 'Gutter Repair in Boca Raton | Free Consultation | All American',
    description:
      'Gutter repair in Boca Raton for leaking, sagging, or storm-damaged gutters. Fast, reliable service with clear communication. Get a free consultation today.',
  },
  layoutBackgrounds: {
    _type: 'layoutBackgrounds',
    hero: {
      _type: 'layoutBackgroundSection',
      imageSrc: `${MEDIA}/all-american-gutters-gutter-repair-boca-raton-fl-white-gutters-curb-appeal.png`,
    },
  },
  contentSections: [
    {
      _type: 'cityContentSection',
      _key: 'aagf-repair-problems',
      heading: 'Common Gutter Problems in Boca Raton Homes',
      body: `<p>Gutters in Boca Raton don’t get an easy life. Between sudden downpours, hurricane-season winds, and constant debris, they’re always under pressure. It’s not just leaves either. Palm fronds, seed pods, tile roof grit, and even sand get pushed into the system and build up fast.</p>
<p>Most homeowners and property managers notice things like:</p>
<ul>
<li>Water pouring over the sides during storms</li>
<li>Gutters pulling away from the roofline</li>
<li>Dark streaks on walls or fascia boards</li>
<li>Puddles forming near the foundation after rain</li>
<li>Sections that look uneven or “bent”</li>
</ul>
<p>In neighborhoods across Boca Raton, especially older homes, tile-roofed properties, and tree-heavy streets, gutters often fail quietly until one heavy rain exposes everything at once.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-repair-deerfield-beach-fl-drill-securing-hanger.png`,
      imageAlt: 'Technician drilling a hanger to secure a white gutter during repair',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-repair-services',
      heading: 'What Our Boca Raton Gutter Repair Services Fix',
      body: `<p>We handle gutter repair work for homes and businesses across Boca Raton that need real fixes, not temporary patches. Our gutter repair services include:</p>
<ul>
<li>Fixing leaks at joints and seams</li>
<li>Re-securing loose or sagging gutters</li>
<li>Repairing <a href="/downspout-boca-raton-fl/">Boca Raton downspouts</a> that aren’t draining properly</li>
<li>Adjusting slope so water actually flows the right way</li>
<li>Reinforcing weak or separating sections</li>
<li>Addressing storm and wind damage</li>
</ul>
<p>Whether it’s repair, <a href="/gutter-replacement-boca-raton-fl/">Boca Raton gutter replacement</a>, or <a href="/boca-raton-gutter-installation-fl/">Boca Raton gutter installation</a>, we focus on getting water moving where it should go. If clogs are the root of the problem, our <a href="/gutter-cleaning-boca-raton-fl/">Boca Raton gutter cleaning</a> service can clear the system before small leaks turn into bigger repairs.</p>`,
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-repair-why-matters',
      heading: 'Why Gutter Repair Matters More in Boca Raton Weather',
      body: `<p>In Boca Raton, a small gutter issue doesn’t stay small for long. One loose section or slow leak can turn into:</p>
<ul>
<li>Rotting fascia boards behind the gutters</li>
<li>Water spilling down exterior walls</li>
<li>Foundation erosion after repeated storms</li>
<li>Mold and moisture buildup around the home</li>
</ul>
<p>Coastal Palm Beach County gets intense summer rain, tropical storms, and humid, salt-laden air that wears on fasteners and seams. Gutters here don’t get much downtime to “recover,” which is why quick, proper repair matters more.</p>`,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-repair-process',
      heading: 'Our Boca Raton Gutter Repair Process',
      body: `<p>When you reach out, we start with a full inspection of your gutter system so we can understand the real issue. We then explain everything in plain language so you know exactly what’s going on and what needs to be fixed.</p>
<p>Most repairs are handled on-site, focused on sealing, securing, and restoring proper drainage so your system works the way it should again. After the work is done, we make sure your property is fully cleaned up, no debris or mess left behind.</p>
<p>Before we leave, we also make sure you understand how to take care of your gutters going forward, so you feel confident about maintaining them between visits. For homes with heavy palm or oak debris, we may also suggest <a href="/boca-raton-gutter-leaf-guards-fl/">Boca Raton gutter leaf guards</a> to cut down on clogs.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-repair-fort-lauderdale-fl-joining-gutter-sections.png`,
      imageAlt: 'Hands joining white gutter sections during a Boca Raton repair',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-repair-why-choose',
      heading: 'Why Choose All American Gutters',
      body: `<p>At <a href="/">All American Gutters</a>, we keep things straightforward from start to finish. From the first call to the final walkthrough, the focus stays on clear communication and getting the job done right the first time.</p>
<p>Homeowners and property managers across Boca Raton choose us because:</p>
<ul>
<li>100+ positive reviews and a 4.8 Google rating</li>
<li>Meticulous attention to detail in both workmanship and service</li>
<li>Stress-free, reliable experience from consultation to completion</li>
<li>Experience with <a href="/copper-gutters-boca-raton-fl/">Boca Raton copper gutters</a> and <a href="/aluminum-gutters-boca-raton-fl/">Boca Raton aluminum gutters</a></li>
<li>Transparent pricing with clear expectations</li>
<li>1-year workmanship warranty and 20-year aluminum materials warranty</li>
<li>A professional, service-driven approach focused on long-term, durable results</li>
</ul>`,
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-repair-consultation',
      heading: 'Get a Free Consultation Today',
      body: `<p>If your gutters are leaking, sagging, or struggling every time it rains, it’s not something to ignore in Boca Raton weather. Call us today or schedule your free consultation and get your gutter system working the way it should: clean, secure, and ready for the next storm.</p>`,
      showCtas: true,
      renderAfterFaq: true,
    },
  ],
  faq: {
    _type: 'faq',
    headline: 'Boca Raton Gutter Repair FAQs',
    headingId: 'gutter-repair-boca-raton-fl-faq',
    items: [
      {
        _type: 'faqItem',
        _key: 'aagf-repair-faq-overflow',
        question: 'Why are my gutters overflowing every time it rains in Boca Raton?',
        answerHtml:
          '<p>Heavy Boca Raton rain can overwhelm gutters that are clogged, misaligned, or damaged. Even partial blockages from palm debris or tile roof grit can cause water to spill over quickly. In many cases, the issue is a system that’s no longer sloped or sealed correctly after years of storms and wear.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-repair-faq-repair-vs-replace',
        question: 'How do I know if I need gutter repair or full replacement in Boca Raton?',
        answerHtml:
          '<p>If your gutters are mostly intact but leaking, sagging in sections, or pulling away in spots, repair is usually enough. But if you’re seeing widespread rust or corrosion from humidity and salt air, repeated failures, or major structural issues, <a href="/gutter-replacement-boca-raton-fl/">replacement</a> may make more sense. We always inspect first and explain what’s realistic for your system.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-repair-faq-causes',
        question: 'What causes gutter damage in Boca Raton homes?',
        answerHtml:
          '<p>The biggest factors are heavy rainfall, tropical storm and hurricane winds, and constant debris like palm fronds and oak leaves. Because Boca Raton sits close to the coast, salt air also speeds up wear on fasteners and joints. Over time, these conditions loosen sections, create leaks, and push gutters out of alignment.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-repair-faq-ignore-leaks',
        question: 'Is it safe to ignore small gutter leaks in Boca Raton?',
        answerHtml:
          '<p>Small leaks rarely stay small in Boca Raton. Once water starts escaping, it can rot fascia boards, damage siding, and pool near the foundation after storms. Because rain is frequent and intense here, even minor issues tend to escalate faster than homeowners expect.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-repair-faq-how-often',
        question: 'How often should gutters be checked in Boca Raton?',
        answerHtml:
          '<p>Most Boca Raton homes benefit from at least seasonal inspections, especially before and after hurricane season. Palm debris, storms, and wind can shift or clog systems quickly, and tile roofs shed grit that collects in gutters. Regular checks help catch small issues early before they turn into larger repairs during peak rainfall months.</p>',
      },
    ],
  },
}

async function main() {
  exitOrSkipIfNoSanityWriteCreds(projectId, token, 'patch-aagf-gutter-repair-page')

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
  console.log(`Patched cityServicePage ${page._id}${oldSlug !== NEW_SLUG ? ` (${oldSlug} → ${NEW_SLUG})` : ''}.`)

  if (await tryPublishDraft(client, page._id)) {
    console.log(`Published ${page._id}.`)
  }

  console.log(`Done. Gutter repair page is live at /${NEW_SLUG}/`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
