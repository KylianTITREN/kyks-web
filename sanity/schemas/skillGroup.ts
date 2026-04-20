import { defineField, defineType } from "sanity";
import { localeString } from "./localeFields";

export const skillGroup = defineType({
	name: "skillGroup",
	title: "Groupe de compétences",
	type: "document",
	fields: [
		localeString("title", "Titre du groupe"),
		defineField({
			name: "skills",
			title: "Compétences",
			type: "array",
			of: [{ type: "string" }],
			options: { layout: "tags" },
		}),
		defineField({
			name: "order",
			title: "Ordre d'affichage",
			type: "number",
			initialValue: 100,
		}),
	],
	orderings: [
		{
			title: "Order",
			name: "orderAsc",
			by: [{ field: "order", direction: "asc" }],
		},
	],
	preview: {
		select: { title: "title.fr", skills: "skills" },
		prepare: ({ title, skills }) => ({
			title,
			subtitle: Array.isArray(skills) ? skills.slice(0, 4).join(", ") : "",
		}),
	},
});
