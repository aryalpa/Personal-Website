import { defineField, defineType } from "sanity";

export default defineType({
  name: "award",
  title: "Award",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Award Title",
      type: "string",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "organization",
      title: "Organization",
      type: "string",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "period",
      title: "Period",
      type: "string",
      description: "Example: 2025 or Jan 2024",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
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
      subtitle: "organization",
    },
  },
});