import { defineField, defineType } from "sanity";

export const socialLink = defineType({
	name: "socialLink",
	title: "Lien social",
	type: "document",
	fields: [
		defineField({
			name: "label",
			title: "Label",
			type: "string",
			validation: (r) => r.required(),
		}),
		defineField({
			name: "url",
			title: "URL",
			type: "url",
			validation: (r) => r.required(),
		}),
		defineField({
			name: "platform",
			title: "Plateforme",
			type: "string",
			options: {
				list: [
					{ title: "LinkedIn", value: "linkedin" },
					{ title: "GitHub", value: "github" },
					{ title: "X / Twitter", value: "x" },
					{ title: "Notion", value: "notion" },
					{ title: "Email", value: "email" },
					{ title: "Autre", value: "other" },
				],
			},
		}),
		defineField({
			name: "scope",
			title: "Affiché sur",
			type: "string",
			options: {
				list: [
					{ title: "KYKS (site)", value: "kyks" },
					{ title: "Kylian (CV)", value: "kylian" },
					{ title: "Les deux", value: "both" },
				],
			},
			initialValue: "both",
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
		select: { title: "label", subtitle: "url" },
	},
});
