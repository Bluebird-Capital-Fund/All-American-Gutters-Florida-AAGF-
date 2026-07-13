#!/usr/bin/env node
/**
 * Gutter Cleaning South Florida service page — slug, SEO meta, and full page copy.
 *
 * Run: cd astro-site && node scripts/patch-aagf-gutter-cleaning-page.mjs
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
const NEW_SLUG = 'gutter-cleaning-south-florida'
const LEGACY_SLUGS = [
  'gutters-south-florida-cleaning',
  'gutter-cleaning-south-florida',
  'gutter-cleaning-tampa-fl',
]

const PAGE = {
  title: 'Gutter Cleaning South Florida',
  slug: { _type: 'slug', current: NEW_SLUG },
  eyebrow: 'Gutter Cleaning',
  headline: 'Gutter Cleaning in South Florida',
  lead:
    'If your gutters are overflowing every time it rains in South Florida, it usually means they’re already packed with palm debris, roof grit, or standing buildup. Our South Florida gutter cleaning service clears systems the right way so water can actually move again before it turns into leaks, fascia damage, or drainage issues.',
  heroFormIntro:
    'Schedule a free design consultation and get your gutters flowing properly again.',
  meta: {
    _type: 'meta',
    title: 'Gutter Cleaning in South Florida | Free Consultation',
    description:
      'Professional gutter cleaning in South Florida to remove debris and protect your home. Fast service with a free consultation included.',
  },
  layoutBackgrounds: {
    _type: 'layoutBackgrounds',
    hero: {
      _type: 'layoutBackgroundSection',
      imageSrc: `${MEDIA}/all-american-gutters-gutter-cleaning-fort-lauderdale-fl-gutter-corner-drainage.webp`,
    },
  },
  contentSections: [
    {
      _type: 'cityContentSection',
      _key: 'aagf-clean-reasons',
      heading: 'Common Reasons for Gutter Cleaning in South Florida',
      body: `<p>Gutters in South Florida don’t stay clear for long. Between heavy rain, constant wind, and trees dropping debris year-round, buildup happens faster than most people expect. Palm fronds, seed pods, roof grit, and sand get trapped easily, especially on tile roofs and older homes with tighter drainage paths.</p>
<p>Most homeowners and property managers call us after noticing:</p>
<ul>
<li>Water spilling over the sides during rain</li>
<li>Gutters sagging from heavy debris buildup</li>
<li>Plants or moss starting to grow inside the system</li>
<li>Staining along fascia boards or exterior walls</li>
<li>Water pooling around entryways, patios, or foundations</li>
</ul>
<p>In many cases, what looks like a small overflow issue is actually a system that hasn’t been properly cleaned in months.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-cleaning-coral-springs-fl-downspout-drainage-rock-bed.webp`,
      imageAlt: 'Gutter cleaning and downspout drainage on a South Florida home',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-clean-services',
      heading: 'Our South Florida Gutter Cleaning Services',
      body: `<p>We provide full gutter cleaning in South Florida, removing debris, clearing downspouts, and restoring proper water flow across all property types.</p>
<p>Our cleaning service includes:</p>
<ul>
<li>Full removal of leaves, palm debris, and roof buildup</li>
<li>Clearing downspouts so water drains properly</li>
<li>Flushing the system to confirm flow</li>
<li>Checking for early signs of leaks or separation</li>
<li>Light adjustments where sections are starting to clog or hold water</li>
</ul>
<p>We work across South Florida on homes, commercial buildings, and managed properties that need consistent maintenance to avoid drainage problems. If cleaning reveals larger issues, we may recommend <a href="/gutter-replacement-south-florida/">South Florida gutter replacement</a> or repair.</p>`,
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-clean-why-matters',
      heading: 'Why Professional Gutter Cleaning Matters in South Florida',
      body: `<p>Climbing a ladder and clearing a few leaves doesn’t fix what’s actually going on inside a gutter system in South Florida.</p>
<p>What most people miss:</p>
<ul>
<li>Blockages often sit deep inside downspouts</li>
<li>Packed debris holds water long after rain stops</li>
<li>Overflow usually starts before anything is visible from the ground</li>
<li>Improper cleaning can push debris further into the system</li>
</ul>
<p>In South Florida, clogged gutters can start affecting fascia boards, siding, and drainage around the property quickly because of constant rain cycles. We clean systems fully so water actually moves the way it’s supposed to.</p>
<p>If cleaning doesn’t solve the issue and problems keep returning, it may be time for a new <a href="/gutter-installation-south-florida/">gutter installation in South Florida</a>.</p>`,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-clean-process',
      heading: 'Our Gutter Cleaning Process in South Florida',
      body: `<p>We keep the process straightforward and thorough from start to finish. We start by inspecting the full gutter system to see where buildup is actually affecting flow.</p>
<p>Then we remove all debris by hand and clear out downspouts to make sure nothing is blocking drainage below the surface. After that, we flush the system to confirm everything is moving correctly during water flow.</p>
<p>Before we leave, we also make sure you understand how to take care of your gutters going forward, so you feel confident about maintaining them between visits.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-cleaning-boca-raton-fl-gutter-and-downspout-installation-home.webp`,
      imageAlt: 'Professional gutter cleaning on a South Florida home',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-clean-why-choose',
      heading: 'Why Choose All American Gutters',
      body: `<p>At <a href="/">All American Gutters South Florida</a>, we approach gutter cleaning with long-term performance in mind, helping your gutter system handle the heavy rain and debris common across South Florida.</p>
<p>Homeowners and property managers choose us because:</p>
<ul>
<li>100+ positive reviews and a 4.8 Google rating</li>
<li>Clear communication from start to finish</li>
<li>Meticulous attention to detail in every cleanout</li>
<li>Stress-free, reliable service without rushed work</li>
<li>Transparent pricing with clear expectations</li>
<li>1-year workmanship warranty and 20-year aluminum materials warranty</li>
<li>Clean job sites with full post-service cleanup</li>
</ul>`,
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-clean-consultation',
      heading: 'Get a Free Consultation Today',
      body: `<p>If your gutters are overflowing, holding water, or showing signs of buildup, it’s not something to ignore in South Florida weather. Call us today and get your free design consultation. We’ll clear your system properly so water flows the way it should and your property stays protected.</p>`,
      showCtas: true,
      renderAfterFaq: true,
    },
  ],
  faq: {
    _type: 'faq',
    headline: 'South Florida Gutter Cleaning FAQs',
    headingId: 'gutter-cleaning-south-florida-faq',
    items: [
      {
        _type: 'faqItem',
        _key: 'aagf-clean-faq-how-often',
        question: 'How often should gutters be cleaned in South Florida?',
        answerHtml:
          '<p>Most properties in South Florida need regular gutter cleaning due to constant debris from palm trees, storms, and roof grit. Heavy rain seasons can fill systems quickly, especially on older homes or properties near trees. Routine cleaning helps prevent overflow, fascia damage, and drainage issues before they turn into more expensive repairs.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-clean-faq-signs',
        question: 'What are the signs I need gutter cleaning in South Florida?',
        answerHtml:
          '<p>Common signs include water spilling over during rain, visible debris sticking out of gutters, or staining along fascia boards. You might also notice water pooling near walkways or patios. In South Florida, clogged gutters often show up during storms first, when the system can’t handle sudden heavy rainfall and starts backing up.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-clean-faq-neglect',
        question: 'What happens if I don’t clean my gutters regularly in South Florida?',
        answerHtml:
          '<p>Blocked gutters in South Florida can lead to overflow that damages fascia boards, siding, and landscaping. Standing water also attracts pests and can cause mold or wood rot over time. Because rainfall is frequent and heavy here, even short-term neglect can quickly turn into drainage problems that affect the entire property.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-clean-faq-damage',
        question: 'Can clogged gutters damage my property in South Florida?',
        answerHtml:
          '<p>Yes, especially with the amount of rain we get here. Overflowing gutters can push water toward the foundation, damage fascia boards, and stain exterior walls. Over time, repeated overflow can lead to structural wear and drainage issues. Keeping gutters clear is one of the simplest ways to protect a property long-term.</p>',
      },
    ],
  },
}

async function main() {
  exitOrSkipIfNoSanityWriteCreds(projectId, token, 'patch-aagf-gutter-cleaning-page')

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

  console.log(`Done. Gutter cleaning page is live at /${NEW_SLUG}/`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
