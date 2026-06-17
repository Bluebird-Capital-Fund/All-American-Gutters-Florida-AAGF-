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
  estimate: 'Request Free Estimate',
  estimateHref: '#contact',
}

const WHY_CHOOSE = {
  eyebrow: 'The All American difference',
  headline: 'Trusted gutter partner in South Florida',
  lead: 'From Deerfield Beach to Boca Raton and across Broward and Palm Beach counties, we install gutter systems built for heavy Florida rain.',
  location: 'Deerfield Beach, FL',
  imageAlt: 'Seamless gutters and downspouts on a South Florida home front entry',
  imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-deerfield-beach-fl-front-entry-gutters.webp`,
  note: 'Ask about gutter guards, downspout extensions, and seasonal maintenance visits.',
  bullets: [
    {
      _type: 'whyChooseBullet',
      _key: 'aagf-why-storm',
      title: 'Built for storm season:',
      text: 'We plan every system for strong rain, humidity, and coastal weather.',
    },
    {
      _type: 'whyChooseBullet',
      _key: 'aagf-why-team',
      title: 'One trusted team:',
      text: 'Installation, repairs, cleaning, and gutter guards are all handled by All American Gutters.',
    },
    {
      _type: 'whyChooseBullet',
      _key: 'aagf-why-local',
      title: 'Local reputation:',
      text: 'Homeowners across South Florida recommend us for reliable work and clear timelines.',
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
  eyebrow: 'Family-owned in South Florida',
  headline: 'Built for South Florida homes and weather',
  lead: 'All American Gutters installs and repairs seamless gutters, guards, and downspouts for homeowners across Broward and Palm Beach counties. From our base at 36 SW 8th Ct in Deerfield Beach, we bring honest estimates, on-time crews, and workmanship sized for heavy coastal rain.',
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
  headline: 'Simple, reliable service in South Florida',
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
      title: 'Clear estimates',
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
    'Call our Deerfield Beach office or send the estimate form. We will schedule the right crew for your project.',
  paragraph2: 'Prefer phone? We are available 24/7.',
  phoneIconSrc: 'Media (AAGF)/Icons (ALL)/Phone White PNG.png',
}

const TEAM = {
  headline: 'Meet the South Florida crew',
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
      _key: 'aagf-team-estimating',
      name: 'Estimating specialist',
      location: 'Pompano Beach, FL',
      bio: 'Walks your roofline, documents measurements, and delivers clear written quotes before any work starts.',
      imageSrc: `${MEDIA}/all-american-gutters-gutter-installation-pompano-beach-fl-residential-gutter-install.webp`,
      imageAlt: 'All American Gutters estimating specialist',
    },
    {
      _type: 'teamMember',
      _key: 'aagf-team-guards',
      name: 'Gutter guard lead',
      location: 'West Palm Beach, FL',
      bio: 'Designs micro-mesh and screen upgrades sized for palms, heavy rain, and coastal debris.',
      imageSrc: `${MEDIA}/all-american-gutters-gutter-repair-west-palm-beach-fl-townhome-gutter-install.webp`,
      imageAlt: 'All American Gutters gutter guard lead',
    },
  ],
}

const FAQ_HEADLINE = 'South Florida gutter questions answered'

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
      'faq.headline': FAQ_HEADLINE,
      'hero.typedPhrases': TYPED_PHRASES,
    })
    .commit()

  console.log('Patched homePageSingleton → whyChoose, about, uniquePoints, hero.typedPhrases.')

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
