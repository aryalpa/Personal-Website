import { BarChartIcon } from "@sanity/icons/BarChart";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "publicationPageSettings",
  title: "Publication Page Settings",
  type: "document",
  icon: BarChartIcon,
  fields: [
    defineField({
      name: "citationCount",
      title: "Citation Count",
      type: "number",
      description: "Total citations displayed in the publications page stats.",
      initialValue: 414,
      validation: (rule) => rule.required().integer().min(0),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Publication Page Settings",
      };
    },
  },
});
