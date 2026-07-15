import { defineField, defineType } from "sanity";

export default defineType({
  name: "news",
  title: "News",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      rows: 3,
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "source",
      title: "Source",
      type: "string",
      description: "Example: Colorado State University, ACS, Nature, AAAS",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "image",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "url",
      title: "Article URL",
      type: "url",
      validation: Rule => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "source",
      media: "image",
    },
  },
});