// @ts-check
import { readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/** Canonical production URL (set PUBLIC_SITE_URL on Vercel and in astro-site/.env) */
const site =
  process.env.PUBLIC_SITE_URL?.replace(/\/+$/, '') || 'http://localhost:4321';

/** Literal Vercel redirect/rewrite sources are not canonical pages, even when Astro builds a file for them. */
function vercelRoutedPaths() {
  try {
    const cfg = JSON.parse(readFileSync(new URL('./vercel.json', import.meta.url), 'utf8'));
    return new Set(
      [...(cfg.redirects ?? []), ...(cfg.rewrites ?? [])]
        .map((r) => String(r?.source ?? ''))
        .filter((s) => s.startsWith('/') && !/[:(*]/.test(s))
        .map((s) => (s.endsWith('/') ? s : `${s}/`)),
    );
  } catch {
    return new Set();
  }
}

const SITEMAP_EXCLUDED_PATHS = new Set([
  ...vercelRoutedPaths(),
  '/thank-you/',
  '/gutter-art-south-florida/',
  '/gutter-art-south-florida-2/',
]);

// https://astro.build/config
export default defineConfig({
  site,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname;
        return !path.startsWith('/lp/') && !SITEMAP_EXCLUDED_PATHS.has(path);
      },
    }),
  ],
});
