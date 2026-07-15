import { defineType, defineField } from "sanity";

export default defineType({
  name: "home",
  title: "Home",
  type: "document",

  fields: [
    defineField({
      name: "firstName",
      title: "First Name",
      type: "string",
    }),

    defineField({
      name: "lastName",
      title: "Last Name",
      type: "string",
    }),

    defineField({
      name: "degree",
      title: "Degree",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),

    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
  name: "profileVideo",
  title: "Profile Video",
  type: "file",
  options: {
    accept: "video/*",
  },
}),

    defineField({
      name: "backgroundVideo",
      title: "Background Video",
      type: "file",
    }),

    defineField({
      name: "cv",
      title: "CV",
      type: "file",
    }),

    defineField({
      name: "googleScholar",
      title: "Google Scholar URL",
      type: "url",
    }),

    defineField({
      name: "orcid",
      title: "ORCID URL",
      type: "url",
    }),

    defineField({
      name: "linkedin",
      title: "LinkedIn URL",
      type: "url",
    }),

    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
  ],
});