import { defineField, defineType } from "sanity";

export default defineType({
  name: "talk",
  title: "Talk",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Invited", value: "Invited" },
          { title: "Oral", value: "Oral" },
          { title: "Poster", value: "Poster" },
        ],
      },
    }),

    defineField({
      name: "event",
      title: "Conference/Event",
      type: "string",
    }),

    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),

    defineField({
      name: "date",
      title: "Date",
      type: "string",
    }),

    defineField({
      name: "year",
      title: "Year",
      type: "number",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
    }),

    defineField({
      name: "link",
      title: "External Link",
      type: "url",
    }),

    defineField({
      name: "order",
      title: "Order",
      type: "number",
      initialValue: 1,
    }),
  ],
});