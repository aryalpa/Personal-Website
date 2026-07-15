import { defineField, defineType } from "sanity";

export default defineType({
  name: "conferencePhoto",
  title: "Conference Photo",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "order",
      title: "Order",
      type: "number",
      initialValue: 1,
    }),
  ],
});