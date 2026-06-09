import { asStr } from './sanity-strings.js'

/** Rotating hero images under `Media (AAGF)/Images (AAGF)/` (sync via `npm run sync:media`). */
const HERO_POOL = [
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-installation-boynton-beach-fl-copper-gutter-front-home.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-installation-deerfield-beach-fl-downspout-drainage.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-installation-deerfield-beach-fl-gutter-installation-residential-2.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-installation-deerfield-beach-fl-side-yard-drainage.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-installation-deerfield-beach-fl-front-entry-gutters.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-replacement-deerfield-beach-fl-gutter-system-home.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-installation-deerfield-beach-fl-seamless-gutter-installation-front-home.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-installation-deerfield-beach-fl-second-story-gutter-install.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-installation-deerfield-beach-fl-side-yard-downspout.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-replacement-deerfield-beach-fl-white-gutter-downspout.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-installation-deerfield-beach-fl-downspout-installation.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-installation-boca-raton-fl-black-gutters-modern-home.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-cleaning-boca-raton-fl-downspout-detail.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-installation-boca-raton-fl-modern-home-black-gutters.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-replacement-boca-raton-fl-roof-gutter-system.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-installation-boca-raton-fl-copper-gutters-home.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-installation-pompano-beach-fl-residential-gutter-install.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-installation-pompano-beach-fl-white-downspout-detail.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-repair-pompano-beach-fl-brick-home-gutters.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-cleaning-fort-lauderdale-fl-gutter-corner-drainage.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-installation-fort-lauderdale-fl-townhome-gutter-system.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-installation-fort-lauderdale-fl-black-gutter-downspout.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-replacement-delray-beach-fl-copper-gutter-system.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-installation-delray-beach-fl-corner-downspout.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-cleaning-coral-springs-fl-downspout-drainage-rock-bed.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-cleaning-coral-springs-fl-downspout-installation-white-gutter-drainage.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-installation-hollywood-fl-downspout-installation.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-installation-hollywood-fl-white-gutter-install-two-story-home.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-installation-west-palm-beach-fl-white-gutter-side-yard.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-installation-west-palm-beach-fl-backyard-gutter-install.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-repair-palm-beach-gardens-fl-copper-gutter-installation-2.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-installation-lighthouse-point-fl-copper-gutter-installation.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-installation-highland-beach-fl-downspout-installation-side-yard-drainage.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-installation-oakland-park-fl-entryway-gutter-installation.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-replacement-plantation-fl-front-elevation-gutter-install-stone-home.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-installation-sunrise-fl-front-porch-gutter-installation-seamless-brandon-fl-2.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-installation-deerfield-beach-fl-garage-gutter-install.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-cleaning-boca-raton-fl-gutter-and-downspout-installation-home.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-installation-pompano-beach-fl-modern-home-black-gutters.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-installation-fort-lauderdale-fl-residential-gutter-install.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-guards-delray-beach-fl-screened-patio-gutter-install.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-installation-coral-springs-fl-seamless-gutter-installation-brandon-fl.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-installation-hollywood-fl-stone-home-downspout.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-repair-west-palm-beach-fl-townhome-gutter-install.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-installation-boynton-beach-fl-townhome-gutter-installation.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-replacement-palm-beach-gardens-fl-aluminum-gutter-system-backyard.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-installation-lighthouse-point-fl-bay-window-gutter-system.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-replacement-highland-beach-fl-two-story-gutter-installation.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-installation-oakland-park-fl-downspout-detail.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-guards-plantation-fl-screen-enclosure-gutters.webp',
  'Media (AAGF)/Images (AAGF)/all-american-gutters-gutter-guards-sunrise-fl-screened-patio-gutters.webp',
]

function seedIndex(seed) {
  const s = asStr(seed)
  let hash = 0
  for (let i = 0; i < s.length; i += 1) hash = (hash * 31 + s.charCodeAt(i)) >>> 0
  return HERO_POOL.length ? hash % HERO_POOL.length : 0
}

export function heroBackgroundFor(seed) {
  if (!HERO_POOL.length) return ''
  return HERO_POOL[seedIndex(seed)]
}
