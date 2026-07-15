import { defineField, defineType } from "sanity";

export default defineType({
  name: "contact",
  title: "Contact Page",
  type: "document",

  fields: [
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: Rule => Rule.required().email(),
    }),

    defineField({
      name: "department",
      title: "Department",
      type: "string",
    }),

    defineField({
      name: "university",
      title: "University",
      type: "string",
    }),

    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),

    defineField({
      name: "departmentLink",
      title: "Department Website",
      type: "url",
    }),

    defineField({
      name: "collaborationTitle",
      title: "Collaboration Badge",
      type: "string",
      initialValue: "Grow Together",
    }),

    defineField({
      name: "collaborationDescription",
      title: "Collaboration Description",
      type: "text",
      rows: 6,
    }),
  ],
});