import { defineField, defineType } from "sanity";

export const profileType = defineType({
  name: "profile",
  title: "Profile",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "photo",
      title: "Profile Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "position",
      title: "Current Position",
      type: "string",
    }),

    defineField({
      name: "university",
      title: "University",
      type: "string",
    }),

    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),

    defineField({
      name: "bio",
      title: "Biography",
      type: "text",
      rows: 6,
    }),

    defineField({
      name: "researchInterests",
      title: "Research Interests",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "googleScholar",
      title: "Google Scholar",
      type: "url",
    }),

    defineField({
      name: "orcid",
      title: "ORCID",
      type: "url",
    }),

    defineField({
      name: "linkedin",
      title: "LinkedIn",
      type: "url",
    }),

    defineField({
      name: "github",
      title: "GitHub",
      type: "url",
    }),

    defineField({
      name: "cv",
      title: "CV",
      type: "file",
    }),
  ],
});