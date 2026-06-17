/**
 * Absolute canonical URLs for <link rel="canonical">.
 * Origin from PUBLIC_SITE_URL (see astro.config.mjs).
 */
import { CANONICAL_SITE_ORIGIN } from './local-business-json-ld.js'
import { renameSouthFloridaGutterSlug } from './service-routes.js'

/**
 * @param {string} [pathname] Path or slug (e.g. `/gutter-repair-south-florida/`).
 * @returns {string}
 */
export function canonicalPageUrl(pathname = '/') {
  const origin = String(CANONICAL_SITE_ORIGIN || '').replace(/\/+$/, '') || 'http://localhost:4321'
  let path = String(pathname || '/').trim()
  if (!path.startsWith('/')) path = `/${path}`

  const slugOnly = path.replace(/^\/+|\/+$/g, '')
  if (slugOnly && !slugOnly.includes('/')) {
    path = `/${renameSouthFloridaGutterSlug(slugOnly)}/`
  } else {
    path = path.endsWith('/') ? path : `${path}/`
  }

  return `${origin}${path}`
}
