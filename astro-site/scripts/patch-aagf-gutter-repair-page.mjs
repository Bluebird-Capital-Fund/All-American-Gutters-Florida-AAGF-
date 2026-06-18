#!/usr/bin/env node
/**
 * Gutter Repair South Florida service page — slug, SEO meta, and full page copy.
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
const NEW_SLUG = 'gutter-repair-south-florida'
const LEGACY_SLUGS = ['gutters-south-florida-repair', 'gutter-repair-south-florida', 'gutter-repair-tampa-fl']

const PAGE = {
  title: 'Gutter Repair South Florida',
  slug: { _type: 'slug', current: NEW_SLUG },
  eyebrow: 'Gutter Repair',
  headline: 'Gutter Repair in South Florida',
  lead:
    'If your gutters are spilling over every time a South Florida storm rolls in, or you’re noticing water dripping where it shouldn’t, that’s usually a sign the system is struggling—not just “a little clogged.” Our South Florida gutter repair service at All American Gutters Florida is built to fix those issues quickly and properly, so your system can handle heavy rain, wind, and year-round humidity without falling apart again.',
  heroFormIntro:
    'Get clarity on your gutters with a free inspection and expert recommendations.',
  meta: {
    _type: 'meta',
    title: 'Gutter Repair in South Florida | Free Consultation',
    description:
      'Gutter repair in South Florida for leaking or damaged systems. Fast, reliable service with clear communication. Schedule a free inspection today.',
  },
  layoutBackgrounds: {
    _type: 'layoutBackgrounds',
    hero: {
      _type: 'layoutBackgroundSection',
      imageSrc: `${MEDIA}/all-american-gutters-gutter-repair-pompano-beach-fl-brick-home-gutters.webp`,
    },
  },
  contentSections: [
    {
      _type: 'cityContentSection',
      _key: 'aagf-repair-problems',
      heading: 'Common Gutter Problems in South Florida Homes',
      body: `<p>Gutters in South Florida don’t get an easy life. Between sudden downpours, hurricane-season winds, and constant debris, they’re always under pressure. It’s not just leaves either. Palm fronds, seed pods, roof grit, and even sand get pushed into the system and build up fast.</p>
<p>Most homeowners and property managers notice things like:</p>
<ul>
<li>Water pouring over the sides during storms</li>
<li>Gutters pulling away from the roofline</li>
<li>Gutters damaging the roof fascia in South Florida homes</li>
<li>Dark streaks on walls or fascia boards</li>
<li>Puddles forming near the foundation after rain</li>
<li>Sections that look uneven or “bent”</li>
</ul>
<p>In neighborhoods across South Florida, especially older homes and tree-heavy streets, gutters often fail quietly until one heavy rain exposes everything at once.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-repair-west-palm-beach-fl-townhome-gutter-install.webp`,
      imageAlt: 'Gutter repair on a South Florida townhome after storm damage',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-repair-services',
      heading: 'What Our South Florida Gutter Repair Services Fix',
      body: `<p>We handle gutter repair work for homes and businesses across South Florida that need real fixes, not temporary patches. Our gutter repair services include:</p>
<ul>
<li>Fixing leaks at joints and seams</li>
<li>Re-securing loose or sagging gutters</li>
<li>Repairing downspouts that aren’t draining properly</li>
<li>Adjusting slope so water actually flows the right way</li>
<li>Reinforcing weak or separating sections</li>
<li>Addressing storm and wind damage</li>
</ul>
<p>Whether it’s repair, replacement, or <a href="/gutter-installation-south-florida/">South Florida gutter installation</a>, we focus on getting water moving where it should go.</p>`,
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-repair-why-matters',
      heading: 'Why Gutter Repair Matters More in South Florida Weather',
      body: `<p>In South Florida, a small gutter issue doesn’t stay small for long. One loose section or slow leak can turn into:</p>
<ul>
<li>Rotting fascia boards behind the gutters</li>
<li>Water spilling down exterior walls</li>
<li>Foundation erosion after repeated storms</li>
<li>Mold and moisture buildup around the home</li>
</ul>
<p>And with the kind of rain we get here, especially in summer and hurricane season, gutters don’t get much downtime to “recover.” That’s why quick, proper repair matters more here.</p>`,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-repair-process',
      heading: 'Our South Florida Gutter Repair Process',
      body: `<p>When you reach out, we start with a full inspection of your gutter system so we can understand the real issue. We then explain everything in plain language so you know exactly what’s going on and what needs to be fixed.</p>
<p>Most repairs are handled on-site, focused on sealing, securing, and restoring proper drainage so your system works the way it should again. After the work is done, we make sure your property is fully cleaned up—no debris or mess left behind.</p>
<p>Before we leave, we also make sure you understand how to take care of your gutters going forward, so you feel confident about maintaining them between visits.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-repair-palm-beach-gardens-fl-copper-gutter-installation-2.webp`,
      imageAlt: 'Copper gutter repair and installation on a South Florida home',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-repair-why-choose',
      heading: 'Why Choose All American Gutters',
      body: `<p>At All American Gutters, we keep things straightforward from start to finish. From the first call to the final walkthrough, the focus stays on clear communication and getting the job done right the first time.</p>
<p>Homeowners and property managers across South Florida choose us because:</p>
<ul>
<li>100+ positive reviews and a 4.8 Google rating</li>
<li>Meticulous attention to detail in both workmanship and service</li>
<li>Stress-free, reliable experience from consultation to completion</li>
<li>Transparent pricing with detailed estimates and clear timelines</li>
<li>1-year workmanship warranty and 20-year aluminum materials warranty</li>
<li>A professional, service-driven approach focused on long-term, durable results</li>
</ul>`,
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-repair-consultation',
      heading: 'Get a Free Consultation Today',
      body: `<p>If your gutters are leaking, sagging, or struggling every time it rains, it’s not something to ignore in South Florida weather. Call us today or schedule your free consultation and get your gutter system working the way it should: clean, secure, and ready for the next storm.</p>`,
      showCtas: true,
      renderAfterFaq: true,
    },
  ],
  faq: {
    _type: 'faq',
    headline: 'South Florida Gutter Repair FAQs',
    headingId: 'gutter-repair-south-florida-faq',
    items: [
      {
        _type: 'faqItem',
        _key: 'aagf-repair-faq-overflow',
        question: 'Why are my gutters overflowing every time it rains in South Florida?',
        answerHtml:
          '<p>Heavy South Florida rain can overwhelm gutters that are clogged, misaligned, or damaged. Even partial blockages from palm debris or roof grit can cause water to spill over quickly. In many cases, the issue isn’t just dirt—it’s a system that’s no longer sloped or sealed correctly after years of storms and wear.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-repair-faq-repair-vs-replace',
        question: 'How do I know if I need gutter repair or full replacement?',
        answerHtml:
          '<p>If your gutters are mostly intact but leaking, sagging in sections, or pulling away in spots, repair is usually enough. But if you’re seeing widespread rust, repeated failures, or major structural issues, replacement may make more sense. We always inspect first and explain what’s realistic for your system.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-repair-faq-causes',
        question: 'What causes gutter damage in South Florida homes?',
        answerHtml:
          '<p>The biggest factors are heavy rainfall, hurricane winds, and constant debris like palm fronds and oak leaves. Salt air near the coast also speeds up wear on fasteners and joints. Over time, these conditions loosen sections, create leaks, and push gutters out of alignment.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-repair-faq-ignore-leaks',
        question: 'Is it safe to ignore small gutter leaks in South Florida?',
        answerHtml:
          '<p>Small leaks rarely stay small in South Florida. Once water starts escaping, it can rot fascia boards, damage siding, and pool near the foundation after storms. Because rain is frequent and intense here, even minor issues tend to escalate faster than homeowners expect.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-repair-faq-how-often',
        question: 'How often should gutters be checked in South Florida?',
        answerHtml:
          '<p>Most homes here benefit from at least seasonal inspections, especially before and after heavy storm periods. Trees, storms, and wind can shift or clog systems quickly. Regular checks help catch small issues early before they turn into larger repairs during peak rainfall months.</p>',
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
