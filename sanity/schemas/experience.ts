import { defineField, defineType } from "sanity";
import { localeArray, localeString, localeText } from "./localeFields";

export const experience = defineType({
	name: "experience",
	title: "Expérience (CV Kylian)",
	type: "document",
	fields: [
		defineField({
			name: "company",
			title: "Entreprise / client",
			type: "string",
			validation: (r) => r.required(),
		}),
		localeString("role", "Poste"),
		defineField({
			name: "startDate",
			title: "Début",
			type: "date",
			validation: (r) => r.required(),
		}),
		defineField({
			name: "endDate",
			title: "Fin (laisser vide si en cours)",
			type: "date",
		}),
		defineField({ name: "location", title: "Localisation", type: "string" }),
		localeText("summary", "Résumé"),
		localeArray("achievements", "Réalisations (bullets)"),
		defineField({
			name: "stack",
			title: "Stack",
			type: "array",
			of: [{ type: "string" }],
			options: { layout: "tags" },
		}),
		defineField({
			name: "url",
			title: "Lien entreprise",
			type: "url",
		}),
	],
	orderings: [
		{
			title: "Date (desc)",
			name: "dateDesc",
			by: [{ field: "startDate", direction: "desc" }],
		},
	],
	preview: {
		select: { title: "company", subtitle: "role.fr", startDate: "startDate" },
		prepare: ({ title, subtitle, startDate }) => ({
			title,
			subtitle: `${subtitle ?? ""} · ${startDate ?? ""}`,
		}),
	},
});
