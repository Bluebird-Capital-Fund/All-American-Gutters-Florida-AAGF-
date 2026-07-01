#!/usr/bin/env node
/**
 * Gutter Maintenance South Florida service page — slug, SEO meta, and full page copy.
 *
 * Run: cd astro-site && node scripts/patch-aagf-gutter-maintenance-page.mjs
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
const NEW_SLUG = 'gutter-maintenance-south-florida'
const DOC_ID = 'cityServicePage.gutter-maintenance-south-florida'
const LEGACY_SLUGS = [
  'gutters-south-florida-maintenance',
  'gutter-maintenance-south-florida',
  'gutter-maintenance-tampa-fl',
]

const PAGE = {
  title: 'Gutter Maintenance South Florida',
  slug: { _type: 'slug', current: NEW_SLUG },
  eyebrow: 'Gutter Maintenance',
  headline: 'Gutter Maintenance in South Florida',
  lead:
    'If your gutters only get attention when they overflow, you’re already one step behind South Florida weather. Between constant rain, wind, and debris, buildup and wear happen fast. Our South Florida gutter maintenance keeps your system clear, flowing, and working the way it should before small issues turn into bigger problems.',
  heroFormIntro:
    'Schedule a free design consultation and keep your gutters ready for South Florida storm season.',
  meta: {
    _type: 'meta',
    title: 'Gutter Maintenance in South Florida | Free Consultation',
    description:
      'Reliable gutter maintenance in South Florida to extend system life and improve drainage. Schedule your free consultation today.',
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
      _key: 'aagf-maint-reasons',
      heading: 'Common Reasons for Gutter Maintenance in South Florida',
      body: `<p>In this climate, gutters are always working and always taking impact.</p>
<p>Frequent storms, heavy rain, and debris from palms and trees keep systems under pressure year-round. On tile roofs and older homes, water moves slower, so buildup sits longer and causes more strain.</p>
<p>Most property owners start noticing:</p>
<ul>
<li>Water moving slower than usual through downspouts</li>
<li>Gutters holding standing water after rain</li>
<li>Debris collecting faster than expected</li>
<li>Early signs of sagging or separation</li>
<li>Staining along fascia or exterior walls</li>
</ul>
<p>In South Florida, gutter maintenance is what keeps the system working.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-cleaning-coral-springs-fl-downspout-installation-white-gutter-drainage.webp`,
      imageAlt: 'Gutter maintenance and downspout drainage on a South Florida home',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-maint-services',
      heading: 'Our South Florida Gutter Maintenance Services',
      body: `<p>We keep the system clear and draining so it doesn’t back up when it rains.</p>
<p>Our gutter maintenance service includes:</p>
<ul>
<li>Removing buildup before it turns into blockages</li>
<li>Checking flow through downspouts and drainage paths</li>
<li>Clearing early clogs and problem spots</li>
<li>Inspecting for loose sections, leaks, or early wear</li>
<li>Making minor adjustments to keep water moving properly</li>
</ul>
<p>We handle gutter maintenance across South Florida for homes, commercial properties, HOAs, and managed buildings that need consistent upkeep.</p>
<p>In some cases, maintenance helps extend the life of the system. In others, <a href="/gutter-replacement-south-florida/">gutter replacement in South Florida</a> makes more sense.</p>`,
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-maint-why-matters',
      heading: 'Why Proper Gutter Maintenance Matters in South Florida Weather',
      body: `<p>When maintenance is ignored, gutters clog, overflow, and start to pull away from the home.</p>
<p>What most people don’t see:</p>
<ul>
<li>Debris traps moisture, which weakens seams and fasteners</li>
<li>Slow drainage adds weight that causes sagging over time</li>
<li>Small blockages push water over the edges before it’s visible</li>
<li>Constant wet conditions speed up fascia damage and mold growth</li>
</ul>
<p>With the amount of rain South Florida gets, gutters don’t get a break. Maintenance is what keeps everything working between storms.</p>`,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-maint-process',
      heading: 'Our Gutter Maintenance Process in South Florida',
      body: `<p>We keep gutter maintenance simple and consistent. We start by checking the full system to see how water is currently moving and where buildup is starting to affect flow.</p>
<p>Then we clear debris, open up downspouts, and address early problem areas before they turn into bigger repairs. After that, we make small adjustments where needed so the system continues draining properly.</p>
<p>Before we leave, we go over what we found and what to watch for, so you’re not guessing between visits. We also walk you through options like <a href="/gutter-guards-south-florida/">South Florida gutter guards</a> if your property deals with constant debris buildup.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-cleaning-boca-raton-fl-downspout-detail.webp`,
      imageAlt: 'Professional gutter maintenance on a South Florida home',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-maint-why-choose',
      heading: 'Why Choose All American Gutters',
      body: `<p>At All American Gutters, we handle maintenance thoroughly, from removing buildup to confirming water is flowing off your roof properly.</p>
<p>Homeowners and property managers across South Florida choose us because:</p>
<ul>
<li>100+ positive reviews and a 4.8 Google rating</li>
<li>Clear communication at every stage</li>
<li>Meticulous attention to detail during every visit</li>
<li>Transparent pricing and clear expectations</li>
<li>Full-service support from maintenance to repairs and replacement</li>
<li>1-year workmanship warranty and 20-year aluminum materials warranty</li>
<li>Clean job sites and clear follow-up guidance</li>
</ul>`,
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-maint-consultation',
      heading: 'Get a Free Consultation Today',
      body: `<p>If your gutters are slowing down, holding water, or showing early signs of wear, it’s easier to stay ahead of it than fix it later. Call us today or schedule your free consultation. We’ll keep your system clear, working, and ready for whatever South Florida weather brings.</p>`,
      showCtas: true,
      renderAfterFaq: true,
    },
  ],
  faq: {
    _type: 'faq',
    headline: 'South Florida Gutter Maintenance FAQs',
    headingId: 'gutter-maintenance-south-florida-faq',
    items: [
      {
        _type: 'faqItem',
        _key: 'aagf-maint-faq-how-often',
        question: 'How often should I schedule gutter maintenance in South Florida?',
        answerHtml:
          '<p>Most properties in South Florida benefit from regular maintenance due to year-round debris and frequent storms. Palm fronds, leaves, and roof grit build up quickly, especially on tile roofs. Seasonal maintenance—before and after heavy rain periods—helps keep water flowing and prevents overflow, sagging, and long-term damage to fascia and drainage areas.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-maint-faq-signs',
        question: 'How do I know if my South Florida gutters need maintenance?',
        answerHtml:
          '<p>If water is draining slower, sitting in sections, or starting to spill over during rain, maintenance is overdue. You might also notice debris buildup, staining on fascia, or minor sagging. In South Florida, these signs show up quickly because systems are constantly exposed to heavy rain and debris throughout the year.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-maint-faq-skip',
        question: 'What happens if I skip gutter maintenance in South Florida?',
        answerHtml:
          '<p>Without maintenance, debris builds up and traps water inside the system. That added weight can cause sagging, leaks, and separation from the roofline. In South Florida, frequent rain speeds this up, leading to fascia damage, mold, and drainage problems around the property much faster than expected.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-maint-faq-replacement',
        question: 'Can maintenance prevent gutter replacement?',
        answerHtml:
          '<p>In many cases, yes. Regular maintenance helps catch small issues early and reduces stress on the system. But if the gutters are already worn out, leaking in multiple areas, or poorly installed, maintenance alone won’t fix it. That’s usually when replacement becomes the better long-term option.</p>',
      },
    ],
  },
}

async function main() {
  exitOrSkipIfNoSanityWriteCreds(projectId, token, 'patch-aagf-gutter-maintenance-page')

  const client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    token,
    useCdn: false,
  })

  let page = await client.fetch(
    `*[_type == "cityServicePage" && (slug.current in $slugs || _id == $docId)][0]{ _id, slug }`,
    { slugs: LEGACY_SLUGS, docId: DOC_ID },
  )

  if (!page?._id) {
    await client.create({
      _id: DOC_ID,
      _type: 'cityServicePage',
      ...PAGE,
    })
    page = { _id: DOC_ID, slug: { current: NEW_SLUG } }
    console.log(`Created cityServicePage ${DOC_ID}.`)
  } else {
    const oldSlug = String(page.slug?.current || '').trim()
    await client.patch(page._id).set(PAGE).commit()
    console.log(
      `Patched cityServicePage ${page._id}${oldSlug !== NEW_SLUG ? ` (${oldSlug} → ${NEW_SLUG})` : ''}.`,
    )
  }

  if (await tryPublishDraft(client, page._id)) {
    console.log(`Published ${page._id}.`)
  }

  console.log(`Done. Gutter maintenance page is live at /${NEW_SLUG}/`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
