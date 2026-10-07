/**
 * Every `/locations/` page, in display order, for the sitewide "South Florida communities" links.
 * Keep in sync with `src/lib/aagf-location-page-data/` (one entry per location data file).
 */
export const AAGF_SERVICE_AREA_CITIES = [
  { name: 'Boca Raton', slug: 'gutters-boca-raton-fl' },
  { name: 'Boynton Beach', slug: 'gutters-boynton-beach-fl' },
  { name: 'Broward County', slug: 'gutters-broward-fl' },
  { name: 'Coral Springs', slug: 'gutters-coral-springs-fl' },
  { name: 'Davie', slug: 'gutters-davie-fl' },
  { name: 'Deerfield Beach', slug: 'gutters-deerfield-beach-fl' },
  { name: 'Delray Beach', slug: 'gutters-delray-beach-fl' },
  { name: 'Fort Lauderdale', slug: 'gutters-fort-lauderdale-fl' },
  { name: 'Greenacres', slug: 'gutters-greenacres-fl' },
  { name: 'Highland Beach', slug: 'gutters-highland-beach-fl' },
  { name: 'Hollywood', slug: 'gutters-hollywood-fl' },
  { name: 'Lantana', slug: 'lantana-gutters-fl' },
  { name: 'Lighthouse Point', slug: 'gutters-lighthouse-point-fl' },
  { name: 'Palm Beach Gardens', slug: 'gutters-palm-beach-gardens-fl' },
  { name: 'Palm Springs', slug: 'gutters-palm-springs-fl' },
  { name: 'Parkland', slug: 'gutters-parkland-fl' },
  { name: 'Pembroke Pines', slug: 'gutters-pembroke-pines-fl' },
  { name: 'Pompano Beach', slug: 'gutters-pompano-beach-fl' },
  { name: 'West Palm Beach', slug: 'gutters-west-palm-beach-fl' },
  { name: 'Weston', slug: 'gutters-weston-fl' },
  { name: 'Wilton Manors', slug: 'gutters-wilton-manors-fl' },
].map((c) => ({ ...c, href: `/locations/${c.slug}/` }))
