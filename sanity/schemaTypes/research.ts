import {defineField, defineType} from "sanity";

export default defineType({
  name: "research",
  title: "Research",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
  name: "articleLink",
  title: "Article Link",
  type: "url",
}),

    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: true,
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 1,
    }),

    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{type: "block"}],
    }),
  ],
});