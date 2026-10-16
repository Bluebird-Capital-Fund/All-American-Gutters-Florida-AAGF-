#!/usr/bin/env node
/**
 * Boca Raton Gutter Leaf Guards service page — slug, SEO meta, and full page copy.
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
const NEW_SLUG = 'boca-raton-gutter-leaf-guards-fl'
/** Document identity stays on the original id so existing docs are patched in place. */
const DOC_ID = 'cityServicePage.gutter-guards-south-florida'
const LEGACY_SLUGS = [
  'gutters-south-florida-guards',
  'gutter-guards-south-florida',
  'gutter-guards-tampa-fl',
  'boca-raton-gutter-leaf-guards-fl',
]

const PAGE = {
  title: 'Boca Raton Gutter Leaf Guards',
  slug: { _type: 'slug', current: NEW_SLUG },
  eyebrow: 'Gutter Leaf Guards',
  headline: 'Boca Raton Gutter Leaf Guards',
  lead:
    'If your gutters keep filling up with palm debris, roof grit, and buildup after every storm, you’re stuck in a cycle of constant cleanouts. Our Boca Raton gutter leaf guards help block that debris at the surface so water can keep moving without the system packing up every few weeks.',
  heroFormIntro:
    'Schedule a free consultation and see how gutter leaf guards can reduce buildup on your Boca Raton property.',
  meta: {
    _type: 'meta',
    title: 'Boca Raton Gutter Leaf Guards | Free Consultation | All American',
    description:
      'Professional gutter leaf guards in Boca Raton for homes and businesses. Keep palm debris out and water flowing with a free consultation today.',
  },
  layoutBackgrounds: {
    _type: 'layoutBackgrounds',
    hero: {
      _type: 'layoutBackgroundSection',
      imageSrc: `${MEDIA}/all-american-gutters-gutter-guards-boca-raton-fl-black-mesh-roofline.png`,
    },
  },
  contentSections: [
    {
      _type: 'cityContentSection',
      _key: 'aagf-guards-clogging',
      heading: 'Why Gutters Keep Clogging in Boca Raton',
      body: `<p>Most clogs come from debris that’s been sitting through multiple storms, packed into the runs and downspouts until water has nowhere to go. In Boca Raton, palm fronds, seed pods, and gritty roof granules are the usual culprits.</p>
<p>Most property owners start noticing:</p>
<ul>
<li>Gutters filling up shortly after cleaning</li>
<li>Water spilling over even when the system was recently cleared</li>
<li>Debris packed tightly inside the channels</li>
<li>Downspouts slowing down or backing up</li>
<li>Staining along fascia or exterior walls</li>
</ul>
<p>One heavy rain can undo a recent cleaning if the system isn’t protected.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-guards-deerfield-beach-fl-mesh-closeup-stone.png`,
      imageAlt: 'Close-up of mesh gutter guards on a Boca Raton home with stone veneer',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-guards-services',
      heading: 'Gutter Leaf Guard Installation in Boca Raton, FL',
      body: `<p>We install gutter leaf guards that help keep debris out while allowing water to move through the system properly.</p>
<p>Our gutter leaf guard service includes:</p>
<ul>
<li>Fitting guards to match your existing gutter system</li>
<li>Securing guards so they stay in place during heavy rain and wind</li>
<li>Adjusting for proper water flow across the roofline</li>
<li>Making sure downspouts stay open and functional</li>
<li>Checking the full system before installation and identifying whether repairs or <a href="/gutter-replacement-boca-raton-fl/">gutter replacement in Boca Raton</a> may be needed to improve overall performance.</li>
</ul>
<p>We install leaf guards across Boca Raton on residential homes, commercial buildings, and managed properties that deal with constant debris. In many cases, leaf guards work best when paired with a properly functioning system, including a clear and working <a href="/downspout-boca-raton-fl/">downspout in Boca Raton</a> to keep water moving away from the structure. If your gutters are already clogged, a <a href="/gutter-cleaning-boca-raton-fl/">gutter cleaning in Boca Raton</a> before the guards go on gives the new system a clean start.</p>`,
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-guards-why-matters',
      heading: 'Why Gutter Leaf Guards Matter in Boca Raton Weather',
      body: `<p>Most gutter problems start when debris sits through multiple rain cycles and turns into wet, compacted buildup that the system can’t move.</p>
<p>Without any guard in place, debris builds up inside and you start seeing:</p>
<ul>
<li>Debris traps moisture and adds weight inside the gutter</li>
<li>Repeated buildup slows water before it reaches the downspouts</li>
<li>Overflow often starts before the gutter looks full</li>
<li>Packed debris creates pressure on seams and fasteners</li>
</ul>
<p>With a long rainy season, afternoon storms, and palms and tile roofs shedding debris year-round, gutters here don’t get a chance to dry out. Guards help reduce how much buildup gets inside in the first place.</p>`,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-guards-process',
      heading: 'Our Boca Raton Gutter Leaf Guard Installation Process',
      body: `<p>We keep the process clear and practical.</p>
<p>We start by checking the gutter system to make sure it’s in good condition before adding leaf guards. If there’s buildup or drainage issues, we address that first.</p>
<p>Then we install the guards so they sit properly along the gutter line without blocking water flow. We secure everything so it holds up under wind and heavy rain. Before we leave, we walk you through how the system works and what to expect going forward.</p>`,
      imageSrc: `${MEDIA}/all-american-gutters-gutter-guards-fort-lauderdale-fl-mesh-installation-landscape.png`,
      imageAlt: 'Gutter guard mesh installation along a Boca Raton roofline',
      imagePosition: 'below-body',
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-guards-why-choose',
      heading: 'Why Choose All American Gutters',
      body: `<p>At <a href="/">All American Gutters</a>, we install gutter leaf guards the same way we handle the rest of the system, aligned right, secured properly, and built to last.</p>
<p>Homeowners and property managers across Boca Raton and South Florida choose us because:</p>
<ul>
<li>100+ positive reviews and a 4.8 Google rating</li>
<li>Clear communication from start to finish</li>
<li>Careful, detail-focused installation</li>
<li>Stress-free, reliable service without rushed jobs</li>
<li>Transparent pricing with clear expectations</li>
<li>1-year workmanship warranty and 20-year aluminum materials warranty</li>
<li>Clean job sites and full walkthrough after installation</li>
</ul>
<p>Leaf guards are one part of a complete system. We also handle <a href="/gutter-repair-boca-raton-fl/">gutter repair in Boca Raton</a> and <a href="/boca-raton-gutter-installation-fl/">gutter installation in Boca Raton</a>, including <a href="/aluminum-gutters-boca-raton-fl/">aluminum gutters in Boca Raton</a> and <a href="/copper-gutters-boca-raton-fl/">copper gutters in Boca Raton</a>.</p>`,
      showCtas: true,
    },
    {
      _type: 'cityContentSection',
      _key: 'aagf-guards-consultation',
      heading: 'Get a Free Consultation Today',
      body: `<p>If you’re dealing with constant gutter buildup or repeated overflow, adding gutter protection can help reduce the problem before it starts. Call us today or schedule your free consultation. We’ll help you set up a system that stays clearer, drains better, and holds up in Boca Raton weather.</p>`,
      showCtas: true,
      renderAfterFaq: true,
    },
  ],
  faq: {
    _type: 'faq',
    headline: 'Boca Raton Gutter Leaf Guards FAQs',
    headingId: 'boca-raton-gutter-leaf-guards-fl-faq',
    items: [
      {
        _type: 'faqItem',
        _key: 'aagf-guards-faq-work',
        question: 'Do gutter leaf guards work in Boca Raton?',
        answerHtml:
          '<p>Yes, but only when they’re installed correctly and matched to the system. In Boca Raton, leaf guards need to handle intense rain bursts and wind-driven debris like palm fronds, seed pods, and roof grit. Poorly installed gutter protection can block flow or shift during storms. A proper setup lets water enter while keeping larger debris out, so the system can still handle sudden downpours.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-guards-faq-cleaning',
        question: 'Will Boca Raton gutter leaf guards eliminate the need for cleaning?',
        answerHtml:
          '<p>No, but they reduce how often cleaning is needed. In Palm Beach County, fine debris like tile and shingle grit, pollen, and small palm particles can still work through or settle on top of guards over time. Leaf guards keep large debris from filling the system quickly, but periodic inspection and cleaning are still important, especially after the summer rainy season and any tropical storm.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-guards-faq-right',
        question: 'How do I know if gutter leaf guards are right for my Boca Raton property?',
        answerHtml:
          '<p>If your gutters fill up quickly after cleaning or you’re dealing with constant overflow from debris, guards can help reduce buildup. Boca Raton properties with palms, oaks, or other mature trees nearby, tile or shingle roofs that shed grit, or frequent storm exposure tend to benefit the most. We usually inspect the system first to confirm that guards will actually improve performance.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-guards-faq-overflow',
        question: 'Can gutter leaf guards cause water to overflow in Boca Raton?',
        answerHtml:
          '<p>Yes, they can if they’re installed incorrectly or if the system underneath isn’t draining properly. Heavy Boca Raton downpours expose installation problems quickly, and water can shoot over a guard that doesn’t match the roof pitch or the gutter profile. That’s why the gutter needs proper slope and open downspouts before guards go on, so water can move through without backing up.</p>',
      },
      {
        _type: 'faqItem',
        _key: 'aagf-guards-faq-worth',
        question: 'Are gutter leaf guards worth it in Boca Raton’s climate?',
        answerHtml:
          '<p>For many properties, yes, especially where debris buildup is constant. With frequent rain, palm debris, and tile roof grit, leaf guards reduce how often gutters fill up and lower the risk of overflow between cleanings. They don’t replace maintenance completely, and no guard is storm-proof during a hurricane, but they make it easier to keep the system working consistently year-round.</p>',
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

  console.log(`Done. Gutter leaf guards page is live at /${NEW_SLUG}/`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
