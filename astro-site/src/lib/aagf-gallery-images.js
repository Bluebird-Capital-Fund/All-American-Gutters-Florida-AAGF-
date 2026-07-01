import { locationLabelFromImageSrc } from './project-slide-locations.js'

const MEDIA = 'Media (AAGF)/Images (AAGF)'

/** New portfolio photos — synced to `Media (AAGF)/Images (AAGF)/` via repo media folder. */
const GALLERY_IMAGE_FILES = [
  'all-american-gutters-gutter-installation-hollywood-fl-stone-home-downspout.png',
  'all-american-gutters-gutter-replacement-palm-beach-gardens-fl-aluminum-gutter-system-backyard.png',
  'all-american-gutters-gutter-replacement-delray-beach-fl-copper-gutter-system.png',
  'all-american-gutters-gutter-repair-palm-beach-gardens-fl-copper-gutter-installation-2.png',
  'all-american-gutters-gutter-installation-west-palm-beach-fl-white-gutter-side-yard.png',
  'all-american-gutters-gutter-installation-pompano-beach-fl-residential-gutter-install.png',
  'all-american-gutters-gutter-installation-oakland-park-fl-entryway-gutter-installation.png',
  'all-american-gutters-gutter-installation-oakland-park-fl-downspout-detail.png',
  'all-american-gutters-gutter-installation-lighthouse-point-fl-copper-gutter-installation.png',
  'all-american-gutters-gutter-installation-lighthouse-point-fl-bay-window-gutter-system.png',
  'all-american-gutters-gutter-installation-highland-beach-fl-downspout-installation-side-yard-drainage.png',
  'all-american-gutters-gutter-installation-deerfield-beach-fl-downspout-drainage.png',
  'all-american-gutters-gutter-installation-boynton-beach-fl-townhome-gutter-installation.png',
  'all-american-gutters-gutter-installation-boca-raton-fl-black-gutters-modern-home.png',
  'all-american-gutters-gutter-replacement-plantation-fl-front-elevation-gutter-install-stone-home.png',
]

function gallerySlide(filename) {
  const imageSrc = `${MEDIA}/${filename}`
  const location = locationLabelFromImageSrc(imageSrc) || 'South Florida'
  const city = location.replace(/, FL$/, '')
  return {
    imageSrc,
    imageAlt: `Gutter project in ${city}, Florida`,
    location,
  }
}

/** Extra gallery slides merged on `/gallery/` (before Sanity `galleryPage` + home carousel). */
export const AAGF_GALLERY_EXTRA_SLIDES = GALLERY_IMAGE_FILES.map(gallerySlide)
