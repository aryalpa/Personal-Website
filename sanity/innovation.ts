import { defineField, defineType } from "sanity";

export default defineType({
  name: "innovation",
  title: "Innovation",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "video",
      title: "Video",
      type: "file",
      options: {
        accept: "video/mp4",
      },
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 1,
    }),
  ],

  preview: {
    select: {
      title: "title",
    },
  },
});