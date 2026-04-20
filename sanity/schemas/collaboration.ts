import { defineField, defineType } from "sanity";
import { localeArray, localeString, localeText } from "./localeFields";

export const collaboration = defineType({
  name: "collaboration",
  title: "Collaboration",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nom du client",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "url",
      title: "URL client",
      type: "url",
    }),
    localeString("role", "Rôle / poste"),
    localeText("summary", "Résumé court"),
    localeArray("contributions", "Contributions (bullets)"),
    defineField({
      name: "period",
      title: "Période",
      type: "string",
      description: "Ex: 2023 — 2024",
    }),
    defineField({
      name: "order",
      title: "Ordre d'affichage",
      type: "number",
      initialValue: 100,
    }),
    defineField({
      name: "featured",
      title: "Mettre en avant",
      type: "boolean",
      initialValue: false,
    }),
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "name", subtitle: "period", media: "logo" },
  },
});
