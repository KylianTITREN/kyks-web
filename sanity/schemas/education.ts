import { defineField, defineType } from "sanity";
import { localeString, localeText } from "./localeFields";

export const education = defineType({
  name: "education",
  title: "Formation",
  type: "document",
  fields: [
    defineField({
      name: "school",
      title: "École / organisme",
      type: "string",
      validation: (r) => r.required(),
    }),
    localeString("degree", "Diplôme / intitulé"),
    localeText("summary", "Résumé"),
    defineField({ name: "startDate", title: "Début", type: "date" }),
    defineField({ name: "endDate", title: "Fin", type: "date" }),
    defineField({ name: "location", title: "Localisation", type: "string" }),
    defineField({ name: "url", title: "Lien école", type: "url" }),
  ],
  orderings: [
    { title: "Date (desc)", name: "dateDesc", by: [{ field: "startDate", direction: "desc" }] },
  ],
  preview: {
    select: { title: "school", subtitle: "degree.fr" },
  },
});
