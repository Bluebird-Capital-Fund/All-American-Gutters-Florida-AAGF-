#!/usr/bin/env node
/**
 * Vercel / CI entry: run scripted Sanity patches only when write credentials exist,
 * then `astro build`. Avoids exit 1 on deploy when SANITY_API_TOKEN is not configured.
 *
 * Set SANITY_REQUIRE_CONTENT_PATCH=1 to fail the build if credentials are missing
 * (strict mode for teams that always want CMS sync on deploy).
 */
import { spawnSync } from 'node:child_process'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { getSanityPatchCredentials, loadPatchDotEnv } from './patch-env.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const astroRoot = resolve(__dirname, '..')

loadPatchDotEnv(astroRoot)
const { projectId, token } = getSanityPatchCredentials()
const strict = String(process.env.SANITY_REQUIRE_CONTENT_PATCH || '').trim() === '1'

function runNode(scriptFile) {
  const r = spawnSync(process.execPath, [resolve(astroRoot, 'scripts', scriptFile)], {
    cwd: astroRoot,
    stdio: 'inherit',
    env: process.env,
  })
  return typeof r.status === 'number' ? r.status : 1
}

function runContentAagf() {
  const steps = [
    'patch-aagf-business.mjs',
    'patch-aagf-home-hero.mjs',
    'patch-aagf-home-services.mjs',
    'patch-aagf-home-service-area.mjs',
  ]
  for (const f of steps) {
    const c = runNode(f)
    if (c !== 0) return c
  }
  return 0
}

function runNpm(script) {
  const r = spawnSync('npm', ['run', script], {
    cwd: astroRoot,
    stdio: 'inherit',
    env: process.env,
    shell: process.platform === 'win32',
  })
  return typeof r.status === 'number' ? r.status : 1
}

if (projectId && token) {
  console.log('[vercel-build] Sanity write credentials found → running content patch scripts')
  const code = runContentAagf()
  if (code !== 0) process.exit(code)
} else if (strict) {
  console.error(
    '[vercel-build] SANITY_REQUIRE_CONTENT_PATCH=1 but missing PUBLIC_SANITY_PROJECT_ID/SANITY_PROJECT_ID or SANITY_API_TOKEN/SANITY_API_WRITE_TOKEN.',
  )
  process.exit(1)
} else {
  console.warn(
    '[vercel-build] Skipping content:aagf (no Sanity write token and/or project id in env). Site will build from current published CMS data.',
  )
  console.warn(
    '[vercel-build] Add SANITY_API_TOKEN + SANITY_PROJECT_ID (or PUBLIC_*) on Vercel to sync scripted content on each deploy.',
  )
}

const buildCode = runNpm('build')
process.exit(buildCode)
