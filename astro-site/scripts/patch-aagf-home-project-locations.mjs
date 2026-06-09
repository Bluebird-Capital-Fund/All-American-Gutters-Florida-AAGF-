#!/usr/bin/env node
/**
 * Syncs `homePageSingleton.projects.slides[].location` with South Florida cities
 * encoded in each slide's `imageSrc` filename.
 *
 * Run: cd astro-site && node scripts/patch-aagf-home-project-locations.mjs
 */

import { createClient } from '@sanity/client'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { projectSlideLocation } from '../src/lib/project-slide-locations.js'
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

async function main() {
  exitOrSkipIfNoSanityWriteCreds(projectId, token, 'patch-aagf-home-project-locations')

  const client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    token,
    useCdn: false,
  })

  const home = await client.fetch(`*[_id == "homePageSingleton"][0]{ projects }`)
  const slides = Array.isArray(home?.projects?.slides) ? home.projects.slides : []
  if (slides.length === 0) {
    console.log('No homePageSingleton.projects.slides to update.')
    return
  }

  let changed = 0
  const nextSlides = slides.map((slide) => {
    const imageSrc = String(slide?.imageSrc || '')
    const current = String(slide?.location || '').trim()
    const nextLocation = projectSlideLocation(slide)
    if (nextLocation === current) return slide
    changed += 1
    console.log(`  ${current || '(empty)'} → ${nextLocation} (${imageSrc.split('/').pop()})`)
    return { ...slide, location: nextLocation }
  })

  if (changed === 0) {
    console.log('Project slide locations already match image filenames.')
    return
  }

  await client.patch('homePageSingleton').set({ 'projects.slides': nextSlides }).commit()
  console.log(`Patched homePageSingleton → ${changed} project slide location(s).`)

  if (await tryPublishDraft(client, 'homePageSingleton')) {
    console.log('Published homePageSingleton.')
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
