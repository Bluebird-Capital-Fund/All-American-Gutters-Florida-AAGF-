#!/usr/bin/env node
/**
 * Patches remaining Tampa / SunLife / west-coast copy on `homePageSingleton`:
 * whyChoose, about, uniquePoints, and hero typed phrases (removes soffit & fascia).
 *
 * Run: cd astro-site && node scripts/patch-aagf-home-content.mjs
 * (Also runs after `npm run content:aagf`.)
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

const CTAS = {
  callTemplate: 'Call: {{phoneDisplay}}',
  estimate: 'Book a Consultation',
  estimateHref: '#contact',
}

const WHY_CHOOSE = {
  eyebrow: 'The All American difference',
  headline: 'Trusted Boca Raton Gutters',
  lead: 'From Deerfield Beach to Boca Raton and across Broward and Palm Beach counties, we install and service gutter systems built for heavy South Florida rain. Whether you need <a href="/gutter-repair-south-florida/">gutter repair in South Florida</a> or a full replacement, we’ve got you covered.',
  location: 'Deerfield Beach, FL',
  imageAlt: 'White seamless gutters and downspout on a stone-column South Florida home',
  imageSrc: `${MEDIA}/all-american-gutters-gutter-replacement-plantation-fl-front-elevation-gutter-install-stone-home.png`,
  note: 'Need added protection? Ask about gutter guards, downspout upgrades, and maintenance plans.',
  bullets: [
    {
      _type: 'whyChooseBullet',
      _key: 'aagf-why-experience',
      title: 'Reliable, stress-free experience:',
      text: 'We’re a trusted partner for homeowners, commercial properties, HOAs, and developers looking for high-quality systems and a smooth process from consultation to completion.',
    },
    {
      _type: 'whyChooseBullet',
      _key: 'aagf-why-storm',
      title: 'Built for storm season:',
      text: 'Our <a href="/aluminum-gutters-fl/">South Florida aluminum gutters</a> are designed to handle strong rain, humidity, and coastal conditions with long-term durability in mind.',
    },
    {
      _type: 'whyChooseBullet',
      _key: 'aagf-why-team',
      title: 'One trusted team:',
      text: 'From seamless gutters to repairs, cleaning, and gutter guards, everything is handled in-house for consistent quality.',
    },
    {
      _type: 'whyChooseBullet',
      _key: 'aagf-why-communication',
      title: 'Clear communication:',
      text: 'Expect transparent pricing, detailed recommendations, and timelines you can rely on.',
    },
  ],
  stamp: {
    homesCountKey: 'whyChooseHomesCount',
    homesCountTemplate: 'Over {{count}}',
    line2: 'South Florida',
    line3: 'Homes protected from roof to grade.',
  },
  ctas: CTAS,
}

const ABOUT = {
  eyebrow: 'Family-owned in Boca Raton',
  headline: 'Built for South Florida homes and weather',
  lead: 'All American Gutters installs and repairs seamless gutters, guards, and downspouts for homeowners across Broward and Palm Beach counties. From our base at 36 SW 8th Ct in Deerfield Beach, we bring honest recommendations, on-time crews, and workmanship sized for heavy coastal rain.',
  bullets: [
    'Seamless aluminum fabricated on site for a custom fit',
    'Hangers and pitch tuned for South Florida storm seasons',
    'Color-matched accessories for stucco, siding, and stone homes',
  ],
  badgesAriaLabel: 'Awards and credentials',
  badges: [
    {
      _type: 'aboutBadgeItem',
      _key: 'aagf-badge-best-of-fl',
      alt: 'Best of Florida 2023',
      imageSrc: 'Media (SGT)/Badges (SGT)/Best-of-Florida-2023-1.png',
    },
    {
      _type: 'aboutBadgeItem',
      _key: 'aagf-badge-homeadvisor',
      alt: 'HomeAdvisor Top Rated',
      imageSrc: 'Media (SGT)/Badges (SGT)/HomeAdvisor-Top-Rated.png',
    },
    {
      _type: 'aboutBadgeItem',
      _key: 'aagf-badge-nextdoor',
      alt: 'Nextdoor Faves',
      imageSrc: 'Media (SGT)/Badges (SGT)/Nextdoor-Faves.png',
    },
  ],
  ctas: CTAS,
  video: {
    posterLocation: 'Deerfield Beach, FL',
    posterSrc: `${MEDIA}/all-american-gutters-gutter-installation-boynton-beach-fl-copper-gutter-front-home.webp`,
    sourceSrc: 'Media (SGT)/Videos (SGT)/SunLife-Gutters-Homes Video.mp4',
    sourceType: 'video/mp4',
  },
}

const UNIQUE_POINTS = {
  eyebrow: 'Why homeowners choose us',
  headline: 'Reliable Gutter Company in Boca Raton & Deerfield Beach',
  items: [
    {
      _type: 'uniquePointItem',
      _key: 'aagf-up-visits',
      iconId: 'clock',
      title: 'Fast site visits',
      description: 'Our Deerfield Beach team can usually visit within a few days.',
    },
    {
      _type: 'uniquePointItem',
      _key: 'aagf-up-estimates',
      iconId: 'clipboard',
      title: 'Detailed proposals',
      description: 'We list materials, measurements, and options so pricing is easy to understand.',
    },
    {
      _type: 'uniquePointItem',
      _key: 'aagf-up-licensed',
      iconId: 'shield-check',
      title: 'Licensed and insured',
      description: 'We are fully covered for residential and light commercial work.',
    },
    {
      _type: 'uniquePointItem',
      _key: 'aagf-up-weather',
      iconId: 'package',
      title: 'Built for coastal weather',
      description: 'We use durable materials that hold up in salt air and heavy rain.',
    },
    {
      _type: 'uniquePointItem',
      _key: 'aagf-up-clean',
      iconId: 'sparkle',
      title: 'Clean job sites',
      description: 'We protect your landscaping and remove debris before we leave.',
    },
    {
      _type: 'uniquePointItem',
      _key: 'aagf-up-comms',
      iconId: 'message',
      title: 'Consistent communication',
      description: 'Our field and office teams stay aligned so follow-ups are smooth.',
    },
  ],
}

const CONTACT_BANNER = {
  headline: 'Ready for storm season?',
  paragraph1:
    'Call our Deerfield Beach office or fill out our contact form. We’ll schedule the right crew for your project.',
  paragraph2: 'Prefer phone? We are available 24/7.',
  phoneIconSrc: 'Media (AAGF)/Icons (ALL)/Phone White PNG.png',
}

const TEAM = {
  headline: 'Meet the Boca Raton Crew',
  members: [
    {
      _type: 'teamMember',
      _key: 'aagf-team-owner',
      name: 'Owner',
      personName: 'Bertram Hamilton',
      bio: "Bert, the owner and backbone of our business, who's been building his legacy in the construction industry for over 20 years. A family man at heart, he balances a tenacious work ethic, unwavering integrity, and yes his love for THE Ohio State Buckeyes! Known throughout the construction community for his knowledge and character. He is always just a phone call away for everyone and anyone.",
      imageSrc: `${MEDIA}/all-american-gutters-team-bertram-hamilton-owner.png`,
      imageAlt: 'Bertram Hamilton, owner of All American Gutters',
    },
    {
      _type: 'teamMember',
      _key: 'aagf-team-sales',
      name: 'Lead Sales Team',
      personName: 'Andrew Kain',
      bio: "Andrew, our lead salesman and go-to guy, hails from Georgia and is a proud UGA graduate. With a decade under his belt in Florida, he's been the cornerstone of our team for the past five years. A diehard Georgia fan (we can't hold that against him!), Andrew combines his southern charm, deep sales insight, and a relentless drive to help clients succeed all with a smile and a touch of wit.",
      imageSrc: `${MEDIA}/all-american-gutters-team-andrew-kain-lead-sales.png`,
      imageAlt: 'Andrew Kain, lead sales team at All American Gutters',
    },
    {
      _type: 'teamMember',
      _key: 'aagf-team-office-manager',
      name: 'Office Manager',
      personName: 'Kenya Watson',
      bio: 'Kenya, our Office Manager, has over 15 years of experience in business and construction office management. A proud FAU graduate (masters), she keeps the office running smoothly with professionalism and leadership. Outside of work, Kenya enjoys many outdoor activities, real estate, creating new plant based recipes, gardening, fitness and traveling.',
      imageSrc: `${MEDIA}/all-american-gutters-team-kenya-watson-office-manager.png`,
      imageAlt: 'Kenya Watson, office manager at All American Gutters',
    },
    {
      _type: 'teamMember',
      _key: 'aagf-team-chris-smiley',
      name: 'Sales Team',
      personName: 'Chris Smiley',
      bio: "Chris, originally from Tennessee, has called our community home for over 15 years. A proud University of Tennessee fan (we promise we still like him!), Chris brings his passion for people, his local church involvement, and a decade of sales expertise. With a warm smile and a sharp eye for opportunity, he's here to help you find the perfect solution every time.",
      imageSrc: `${MEDIA}/all-american-gutters-team-chris-smiley-sales-team.png`,
      imageAlt: 'Chris Smiley, sales team at All American Gutters',
    },
    {
      _type: 'teamMember',
      _key: 'aagf-team-jason-hollister',
      name: 'Sales Team',
      personName: 'Jason Hollister',
      bio: "Jason, with a solid foundation from both his military service and his sales experience, brings a steady, professional approach to our team. A native of Ohio, he's been a dynamic force since joining us over a year ago, bringing a strategic mindset, strong client focus, and a natural ability to lead. Jason is an integral part of our growth and success as he continues to thrive in Florida.",
      imageSrc: `${MEDIA}/all-american-gutters-team-jason-hollister-sales-team.png`,
      imageAlt: 'Jason Hollister, sales team at All American Gutters',
    },
  ],
}

const FAQ_HEADLINE = 'Boca Raton Gutters FAQs'

const FAQ = {
  _type: 'faq',
  headline: FAQ_HEADLINE,
  headingId: 'home-faq-heading',
  items: [
    {
      _type: 'faqItem',
      _key: 'aagf-home-faq-necessary',
      question: 'Are gutters necessary in Boca Raton?',
      answerHtml:
        '<p>Gutters are not always required by code in Boca Raton, but they’re strongly recommended for local homes. Afternoon thunderstorms, tropical moisture, and relatively flat lots mean runoff can pool quickly around foundations, driveways, and landscaping. Without a proper system, water can stain stucco, soften fascia, and stress landscaping around Boca Raton neighborhoods from the Intracoastal to west of I-95. Professionally installed gutters help manage heavy runoff and reduce long-term repair risk, especially heading into hurricane season.</p>',
    },
    {
      _type: 'faqItem',
      _key: 'aagf-home-faq-cost',
      question: 'How much do gutters cost in Boca Raton?',
      answerHtml:
        '<p>Gutter costs in Boca Raton vary by home size, roof layout, material, and system design. Most homeowners choose durable aluminum seamless gutters built for Palm Beach County’s heavy rain. Two-story homes, tile roofs, and properties near the coast may need oversized gutters or extra downspouts to keep water moving away from the structure, which can raise the price but improves performance and longevity in local storm conditions.</p>',
    },
    {
      _type: 'faqItem',
      _key: 'aagf-home-faq-best-type',
      question: 'What kind of gutters are best in Boca Raton?',
      answerHtml:
        '<p>Aluminum seamless gutters are the top choice for Boca Raton homes because they resist rust, handle humidity, and perform well in intense downpours. Oversized 6-inch systems are often recommended for larger roof areas and sudden tropical rain. Seamless designs reduce leak points and need less upkeep. Near coastal or Intracoastal properties, corrosion-resistant materials and secure fastening help systems hold up against salt air and strong winds.</p>',
    },
    {
      _type: 'faqItem',
      _key: 'aagf-home-faq-guards',
      question: 'Do gutter guards work well in Boca Raton?',
      answerHtml:
        '<p>Gutter guards can work well in Boca Raton, especially on streets with palms, oaks, and other mature landscaping that drop fronds, leaves, and seed pods into the channels. They help cut clogs and keep water moving during storms. Not every guard design handles tropical downpours the same way, so professionally installed, high-flow systems are recommended so Boca Raton homes don’t overflow during heavy rain or hurricane conditions.</p>',
    },
    {
      _type: 'faqItem',
      _key: 'aagf-home-faq-replace-timing',
      question: 'What is the best time of year to replace gutters in Boca Raton?',
      answerHtml:
        '<p>The best time to replace gutters in Boca Raton is during the drier months, typically from late fall through early spring, before the summer rainy pattern and hurricane season ramp up. Getting a new system in place ahead of peak storms helps protect your home when rainfall is heaviest. If your gutters are already leaking, sagging, or overflowing, it’s better to replace them right away rather than waiting for a seasonal window.</p>',
    },
    {
      _type: 'faqItem',
      _key: 'aagf-home-faq-cleaning',
      question: 'How often should gutters be cleaned in Boca Raton?',
      answerHtml:
        '<p>In Boca Raton, gutters should be cleaned at least twice a year, and homes with heavy tree or palm coverage may need service every 3–4 months. Wind, summer storms, and hurricane activity can fill channels with fronds, leaves, and roof grit quickly. Regular cleaning prevents overflow, protects fascia and foundations, and keeps your system ready for the sudden, high-volume rain common across Boca Raton and nearby Palm Beach County communities.</p>',
    },
  ],
}

const TYPED_PHRASES = [
  'Custom seamless gutter installation',
  'Leak repair & hanger reset',
  'Seasonal cleaning & flush-outs',
  'Micro-mesh & gutter guard upgrades',
  'Custom profiles & downspout tuning',
  'Downspout extensions & drainage',
]

async function main() {
  exitOrSkipIfNoSanityWriteCreds(projectId, token, 'patch-aagf-home-content')

  const client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    token,
    useCdn: false,
  })

  await client
    .patch('homePageSingleton')
    .set({
      whyChoose: WHY_CHOOSE,
      about: ABOUT,
      uniquePoints: UNIQUE_POINTS,
      contactBanner: CONTACT_BANNER,
      team: TEAM,
      faq: FAQ,
      'hero.typedPhrases': TYPED_PHRASES,
    })
    .commit()

  console.log('Patched homePageSingleton → whyChoose, about, uniquePoints, faq, hero.typedPhrases.')

  const legacy = await client.fetch('*[_id == "homePage"][0]._id')
  if (legacy) {
    await client.delete(legacy)
    const draftId = `drafts.${legacy}`
    try {
      await client.delete(draftId)
    } catch {
      // draft may not exist
    }
    console.log('Deleted legacy homePage document (site uses homePageSingleton).')
  }

  if (await tryPublishDraft(client, 'homePageSingleton')) {
    console.log('Published homePageSingleton (draft → live).')
  } else {
    console.log('No draft for homePageSingleton; public API may already match.')
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
