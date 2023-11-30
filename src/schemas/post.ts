import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content' },
    { name: 'meta', title: 'Meta' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      // validation: (Rule) => Rule.required(),
      group: 'content',
    }),

    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'content',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),

    defineField({
      name: 'meta_title',
      title: 'Meta Title',
      type: 'string',
      description: 'browser tab name',
      validation: (Rule) => Rule.required(),
      group: 'meta',
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 5,
      description: 'short description for preview',
      validation: (Rule) => Rule.required(),
      group: 'meta',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'path name in the browser address bar',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
      group: 'meta',
    }),
    defineField({
      name: 'publishedDate',
      title: 'Published Date',
      type: 'date',
      group: 'meta',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
