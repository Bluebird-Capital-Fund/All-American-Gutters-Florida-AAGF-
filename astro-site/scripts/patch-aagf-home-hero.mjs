#!/usr/bin/env node
/**
 * Fixes Home page hero copy (still on Tampa / SunLife template) and the call CTA placeholder typo.
 * Patches `homePageSingleton` and `siteSettingsSingleton` → header.callCtaTemplate (nav phone button).
 *
 * Run: cd astro-site && npm run content:aagf:home
 * (Also runs automatically after `npm run content:aagf`.)
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

/** Must match applyTemplate() keys in astro-site (see sanity-strings.js). */
const CALL_CTA_TEMPLATE = 'Call: {{phoneDisplay}}'

const HERO = {
  eyebrow: 'Book your free consultation',
  headline: 'Best Gutter Service in South Florida',
  lead: 'We install and repair seamless gutters, gutter guards, and downspouts for homes across South Florida. Free consultation, local crews, and reliable workmanship. Open 24/7 for your call.',
  callCtaTemplate: CALL_CTA_TEMPLATE,
}

const PROJECTS_HEADLINE = 'Recent South Florida Gutter Services'

async function main() {
  exitOrSkipIfNoSanityWriteCreds(projectId, token, 'patch-aagf-home-hero')

  const client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    token,
    useCdn: false,
  })

  const homePatch = {
    'hero.eyebrow': HERO.eyebrow,
    'hero.headline': HERO.headline,
    'hero.lead': HERO.lead,
    'hero.callCtaTemplate': HERO.callCtaTemplate,
    'projects.headline': PROJECTS_HEADLINE,
  }

  await client.patch('homePageSingleton').set(homePatch).commit()
  console.log('Patched homePageSingleton → hero + projects.headline.')

  const galleryPages = await client.fetch(`*[_type == "galleryPage"]{ _id, headline }`)
  if (Array.isArray(galleryPages)) {
    for (const page of galleryPages) {
      const old = String(page?.headline || '').trim()
      const legacy =
        /hillsborough|pinellas|recent installs/i.test(old) || old === 'Recent Jobs'
      if (!legacy && old === PROJECTS_HEADLINE) continue
      if (!legacy && old) continue
      await client.patch(page._id).set({ headline: PROJECTS_HEADLINE }).commit()
      console.log(`Patched galleryPage ${page._id} → headline.`)
      if (await tryPublishDraft(client, page._id)) {
        console.log(`Published galleryPage ${page._id}.`)
      }
    }
  }

  await client.patch('siteSettingsSingleton').set({ 'header.callCtaTemplate': CALL_CTA_TEMPLATE }).commit()
  console.log('Patched siteSettingsSingleton → header.callCtaTemplate (nav call button).')

  for (const id of ['homePageSingleton', 'siteSettingsSingleton']) {
    if (await tryPublishDraft(client, id)) {
      console.log(`Published ${id} (draft → live).`)
    } else {
      console.log(`No draft for ${id}; public API already had this revision or patch applied in place.`)
    }
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
