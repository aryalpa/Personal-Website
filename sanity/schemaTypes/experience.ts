import { defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",

  fields: [
    defineField({
      name: "position",
      title: "Position",
      type: "string",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "institution",
      title: "Institution",
      type: "string",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Research", value: "Research" },
          { title: "Teaching", value: "Teaching" },
          { title: "Professional", value: "Professional" },
        ],
      },
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
      description: "Example: Jan 2024 – Present",
    }),

    defineField({
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }],
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
      title: "position",
      subtitle: "institution",
    },
  },
});