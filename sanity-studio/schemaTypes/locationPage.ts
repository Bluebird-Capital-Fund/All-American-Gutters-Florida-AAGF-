import {defineField, defineType} from 'sanity'
import {EarthGlobeIcon} from '@sanity/icons'

export const locationPage = defineType({
  name: 'locationPage',
  title: 'Location landing page',
  type: 'document',
  icon: EarthGlobeIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta description',
      type: 'text',
      rows: 2,
      description: 'Optional. Used for the HTML meta description; defaults to the hero lead.',
    }),
    defineField({name: 'eyebrow', type: 'string'}),
    defineField({name: 'headline', type: 'string'}),
    defineField({name: 'lead', type: 'text', rows: 3}),
    defineField({
      name: 'heroFormIntro',
      type: 'text',
      title: 'Hero form intro',
      rows: 2,
      description: 'Optional subheading under the hero form title.',
    }),
    defineField({
      name: 'meta',
      type: 'meta',
      title: 'SEO Meta',
      description: 'Page title and meta description. Falls back to headline when unset.',
    }),
    defineField({
      name: 'layoutBackgrounds',
      type: 'layoutBackgrounds',
      title: 'Background Images',
      description: 'Page-specific section backgrounds for this location.',
    }),
    defineField({
      name: 'contentSections',
      title: 'Content Sections',
      type: 'array',
      of: [{type: 'cityContentSection'}],
      description: 'Local landing copy (intro, services highlights, FAQs context, etc.).',
    }),
    defineField({
      name: 'reviews',
      type: 'reviews',
      title: 'Page Reviews',
      description: 'Optional. Falls back to global / homepage reviews when empty.',
    }),
    defineField({
      name: 'faq',
      type: 'faq',
      title: 'Page FAQ',
    }),
    defineField({
      name: 'mapEmbedUrl',
      type: 'text',
      rows: 2,
      title: 'Map Embed URL',
      description: 'Optional. Falls back to global site map.',
    }),
  ],
})
