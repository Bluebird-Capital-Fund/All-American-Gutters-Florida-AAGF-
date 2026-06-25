#!/usr/bin/env node
/**
 * Gutter Guards South Florida service page — slug, SEO meta, and full page copy.
 *
 * Run: cd astro-site && node scripts/patch-aagf-gutter-guards-page.mjs
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
const NEW_SLUG = 'gutter-guards-south-florida'
const DOC_ID = 'cityServicePage.gutter-guards-south-florida'
const LEGACY_SLUGS = [
  'gutters-south-florida-guards',
  'gutter-guards-south-florida',
  'gutter-guards-tampa-fl',
]

const PAGE = {
  title: 'Gutter Guards South Florida',
  slug: { _type: 'slug', current: NEW_SLUG },
  eyebrow: 'Gutter Guards',
  headline: 'Gutter Guards in South Florida',
  lead:
    'If your gutters keep filling up with palm debris, roof grit, and buildup after every storm, you’re stuck in a cycle of constant cleanouts. Our South Florida gutter guards help block that debris at the surface so water can keep moving without the system packing up every few weeks.',
  heroFormIntro:
    'Schedule a free consultation and see how gutter guards can reduce buildup on your South Florida property.',
  meta: {
    _type: 'meta',
    title: 'Gutter Guards in South Florida | Free Consultation | All American',
    description:
      'Professional gutter guards in South Florida for homes and businesses. Keep debris out and water flowing with a free consultation today.',
  },
  layoutBackgrounds: {
    _type: 'layoutBackgrounds',
    hero: {
      _type: 'layoutBackgroundSection',
      imageSrc: `${MEDIA}/all-american-gutters-gutter-guards-delray-beach-fl-screened-patio-gutter-install.webp`,
    },
  },
  contentSections: [
    {
      _type: 'cityContentSection',
      _key: 'aagf-guards-clogging',
      heading: 'Why Gutters Keep Clogging in South Florida',
      body: `<p>Most clogs come from debris that’s been sitting through multiple storms, packed into the runs and downspouts until water has nowhere to go.</p>
<p>Most property owners start noticing:</p>
<ul>
<li>Gutters filling up shortly after cleaning</li>
<li>Water spilling over even when the system was recently cleared</li>
<li>Debris packed tightly inside the channels</li>
<li>Downspouts slowing down or backing up</li>
<li>Staining along fascia or exterior walls</li>
</ul>
<p>One heavy rain can undo a recent cleaning if the system isn’t protected.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-guards-plantation-fl-screen-enclosure-gutters.webp`,
      imageAlt: 'Gutter guards on a South Florida screened enclosure',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-guards-services',
      heading: 'Gutter Guard Installation in South Florida, FL',
      body: `<p>We install gutter guards that help keep debris out while allowing water to move through the system properly.</p>
<p>Our gutter guard service includes:</p>
<ul>
<li>Fitting guards to match your existing gutter system</li>
<li>Securing guards so they stay in place during heavy rain and wind</li>
<li>Adjusting for proper water flow across the roofline</li>
<li>Making sure downspouts stay open and functional</li>
<li>Checking the full system before installation and identifying whether repairs or <a href="/gutter-replacement-south-florida/">gutter replacement in South Florida</a> may be needed to improve overall performance.</li>
</ul>
<p>We install gutter guards across South Florida on residential homes, commercial buildings, and managed properties that deal with constant debris. In many cases, leaf guards work best when paired with a properly functioning system, including a clear and working <a href="/gutter-downspout-south-florida/">gutter downspout in South Florida</a> to keep water moving away from the structure.</p>`,
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-guards-why-matters',
      heading: 'Why Gutter Guards Matter in South Florida Weather',
      body: `<p>Most gutter problems start when debris sits through multiple rain cycles and turns into wet, compacted buildup that the system can’t move.</p>
<p>Without any guard in place, debris builds up inside and you start seeing:</p>
<ul>
<li>Debris traps moisture and adds weight inside the gutter</li>
<li>Repeated buildup slows water before it reaches the downspouts</li>
<li>Overflow often starts before the gutter looks full</li>
<li>Packed debris creates pressure on seams and fasteners</li>
</ul>
<p>With constant rain and debris, gutters here don’t get a chance to dry out. Guards help reduce how much buildup gets inside in the first place.</p>`,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-guards-process',
      heading: 'Our South Florida Gutter Guard Installation Process',
      body: `<p>We keep the process clear and practical.</p>
<p>We start by checking the gutter system to make sure it’s in good condition before adding leaf guards. If there’s buildup or drainage issues, we address that first.</p>
<p>Then we install the guards so they sit properly along the gutter line without blocking water flow. We secure everything so it holds up under wind and heavy rain. Before we leave, we walk you through how the system works and what to expect going forward.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-guards-sunrise-fl-screened-patio-gutters.webp`,
      imageAlt: 'Gutter guard installation on a South Florida screened patio',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-guards-why-choose',
      heading: 'Why Choose All American Gutters',
      body: `<p>At All American Gutters, we install gutter guards the same way we handle the rest of the system, aligned right, secured properly, and built to last.</p>
<p>Homeowners and property managers across South Florida choose us because:</p>
<ul>
<li>100+ positive reviews and a 4.8 Google rating</li>
<li>Clear communication from start to finish</li>
<li>Careful, detail-focused installation</li>
<li>Stress-free, reliable service without rushed jobs</li>
<li>Transparent pricing with clear expectations</li>
<li>1-year workmanship warranty and 20-year aluminum materials warranty</li>
<li>Clean job sites and full walkthrough after installation</li>
</ul>`,
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-guards-consultation',
      heading: 'Get a Free Consultation Today',
      body: `<p>If you’re dealing with constant gutter buildup or repeated overflow, adding gutter protection can help reduce the problem before it starts. Call us today or schedule your free consultation. We’ll help you set up a system that stays clearer, drains better, and holds up in South Florida weather.</p>`,
      showCtas: true,
      renderAfterFaq: true,
    },
  ],
  faq: {
    _type: 'faq',
    headline: 'South Florida Gutter Guards FAQs',
    headingId: 'gutter-guards-south-florida-faq',
    items: [
      {
        _type: 'faqItem',
        _key: 'aagf-guards-faq-work',
        question: 'Do gutter guards work in South Florida?',
        answerHtml:
          '<p>Yes, but only when they’re installed correctly and matched to the system. In South Florida, leaf guards need to handle both heavy rain and wind-driven debris. Poorly installed gutter protection can block flow or shift during storms. A proper setup allows water to enter while keeping larger debris out, so the system can still handle sudden downpours.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-guards-faq-cleaning',
        question: 'Will South Florida gutter guards eliminate the need for cleaning?',
        answerHtml:
          '<p>No, but they reduce how often cleaning is needed. In South Florida, fine debris like roof grit and small particles can still build up over time. Gutter guards help prevent large debris from filling the system quickly, but periodic maintenance is still important to keep everything draining properly, especially after heavy storm seasons.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-guards-faq-right',
        question: 'How do I know if gutter guards are right for my South Florida property?',
        answerHtml:
          '<p>If your gutters fill up quickly after cleaning or you’re dealing with constant overflow from debris, guards can help reduce buildup. South Florida properties with nearby trees, tile roofs, or frequent storm exposure benefit the most. We usually inspect the system first to confirm if guards will actually improve performance.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-guards-faq-overflow',
        question: 'Can gutter guards cause water to overflow in South Florida?',
        answerHtml:
          '<p>Yes, gutter guards can cause water to overflow if they’re installed incorrectly or if the system underneath isn’t working properly. In South Florida, heavy rain exposes any installation issues quickly. That’s why the gutter system itself needs to be properly sloped and draining before guards are added, so water can move through without backing up.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-guards-faq-worth',
        question: 'Are gutter guards worth it in South Florida conditions?',
        answerHtml:
          '<p>For many properties, yes—especially where debris buildup is constant. Leaf guards help reduce how often gutters fill up and lower the risk of overflow between cleanings. They don’t replace maintenance completely, but they make it easier to keep the system working consistently in a climate with frequent rain and debris.</p>',
      },
    ],
  },
}

async function main() {
  exitOrSkipIfNoSanityWriteCreds(projectId, token, 'patch-aagf-gutter-guards-page')

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

  console.log(`Done. Gutter guards page is live at /${NEW_SLUG}/`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
