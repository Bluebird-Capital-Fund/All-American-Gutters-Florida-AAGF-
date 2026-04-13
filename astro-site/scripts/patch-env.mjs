/**
 * Shared env loading for Sanity patch scripts.
 * Merges repo-root `.env` then `astro-site/.env` (later wins on duplicate keys).
 *
 * Token: `SANITY_API_WRITE_TOKEN` or `SANITY_API_TOKEN`.
 * Project: `PUBLIC_SANITY_PROJECT_ID` or `SANITY_PROJECT_ID`.
 * Dataset: `PUBLIC_SANITY_DATASET` or `SANITY_DATASET` (default production).
 */
import { readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

/** @param {string} content */
function parseEnvContent(content) {
  /** @type {Record<string, string>} */
  const out = {}
  for (const line of content.split('\n')) {
    const t = line.trim()
    if (!t || t.startsWith('#')) continue
    const eq = t.indexOf('=')
    if (eq === -1) continue
    const key = t.slice(0, eq).trim()
    let val = t.slice(eq + 1).trim()
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1)
    }
    out[key] = val
  }
  return out
}

/** @param {string} astroSiteRoot */
export function loadPatchDotEnv(astroSiteRoot) {
  const paths = [
    resolve(astroSiteRoot, '..', '.env'),
    resolve(astroSiteRoot, '.env'),
  ]
  const merged = {}
  for (const p of paths) {
    if (!existsSync(p)) continue
    Object.assign(merged, parseEnvContent(readFileSync(p, 'utf8')))
  }
  // Do not override keys already set in the environment (Vercel/CI wins over .env files).
  for (const [key, val] of Object.entries(merged)) {
    if (process.env[key] === undefined) {
      process.env[key] = val
    }
  }
}

/**
 * Local dev: fail if creds missing. Vercel/CI: exit 0 (skip patch) unless SANITY_REQUIRE_CONTENT_PATCH=1.
 */
export function exitOrSkipIfNoSanityWriteCreds(projectId, token, scriptName) {
  if (projectId && token) return
  const strict = String(process.env.SANITY_REQUIRE_CONTENT_PATCH || '').trim() === '1'
  const onCi = Boolean(String(process.env.VERCEL || '').trim() || String(process.env.CI || '').trim())
  if (onCi && !strict) {
    console.warn(
      `[${scriptName}] Skipping — no Sanity write token and/or project id. Add SANITY_API_TOKEN + SANITY_PROJECT_ID on Vercel, or set SANITY_REQUIRE_CONTENT_PATCH=1 to fail the build when they are missing.`,
    )
    process.exit(0)
  }
  console.error(
    'Missing Sanity credentials: set PUBLIC_SANITY_PROJECT_ID or SANITY_PROJECT_ID, and SANITY_API_WRITE_TOKEN or SANITY_API_TOKEN (repo-root or astro-site/.env).',
  )
  process.exit(1)
}

export function getSanityPatchCredentials() {
  const projectId = (
    process.env.PUBLIC_SANITY_PROJECT_ID ||
    process.env.SANITY_PROJECT_ID ||
    ''
  ).trim()
  const dataset = (
    process.env.PUBLIC_SANITY_DATASET ||
    process.env.SANITY_DATASET ||
    'production'
  ).trim()
  const token = (
    process.env.SANITY_API_WRITE_TOKEN ||
    process.env.SANITY_API_TOKEN ||
    ''
  ).trim()
  return { projectId, dataset, token }
}

/**
 * If a `drafts.{id}` exists after a patch, publish it so the CDN / public API see changes.
 * @param {import('@sanity/client').SanityClient} client
 * @param {string} publishedId Document id without `drafts.` (e.g. `siteSettingsSingleton`)
 * @returns {Promise<boolean>} true if a draft was published
 */
export async function tryPublishDraft(client, publishedId) {
  const pubId = publishedId.replace(/^drafts\./, '')
  const draftId = `drafts.${pubId}`
  const count = await client.fetch(`count(*[_id == $draftId])`, { draftId })
  if (typeof count !== 'number' || count < 1) return false
  await client.action({
    actionType: 'sanity.action.document.publish',
    draftId,
    publishedId: pubId,
  })
  return true
}
