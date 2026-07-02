/**
 * Root-level slugs for deleted blog posts — keep in sync with `vercel.json` redirects to `/blog/`.
 * `delete-aagf-blog-posts.mjs` appends newly discovered slugs when run.
 */
export const RETIRED_BLOG_SLUGS = [
  'the-dangers-of-frozen-gutters',
  'heavy-rain-gutter-problems-tampa-fl',
  'gutter-repair-cost-in-denver-co',
  'how-to-prevent-premature-gutter-failure',
  'spend-now-save-big-why-gutter-leaf-protection-is-worth-it',
  'gutter-cleaning-maintenance-101',
  'what-are-seamless-gutters-and-why-florida-homes-need-them',
  'seamless-gutters-the-homeowners-complete-guide',
  'super-gutters-upgrade-from-5-to-7-inch-for-maximum-flow',
  'diy-vs-professional-gutter-installation-why-hire-an-expert',
]

/** @param {string} slug */
export function isRetiredBlogSlug(slug) {
  const s = String(slug || '')
    .trim()
    .toLowerCase()
    .replace(/^\/+|\/+$/g, '')
  return RETIRED_BLOG_SLUGS.includes(s)
}
