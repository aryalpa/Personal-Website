import { defineField, defineType } from "sanity";

export default defineType({
  name: "publication",
  title: "Publication",
  type: "document",

  fields: [
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 1,
    }),

    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "authors",
      title: "Authors",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "journal",
      title: "Journal",
      type: "string",
    }),

    defineField({
  name: "image",
  title: "Publication Image",
  type: "image",
  options: {
    hotspot: true,
  },
}),

    defineField({
      name: "year",
      title: "Year",
      type: "number",
    }),

    defineField({
      name: "type",
      title: "Publication Type",
      type: "string",
      options: {
        list: [
          { title: "Journal", value: "Journal" },
          { title: "Conference", value: "Conference" },
          { title: "Review", value: "Review" },
          { title: "Book Chapter", value: "Book Chapter" },
          { title: "Research Article", value: "Research Article" },
        ],
      },
    }),

    defineField({
      name: "link",
      title: "Paper Link",
      type: "url",
    }),

    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "journal",
    },
  },

  
});