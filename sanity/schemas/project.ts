import { defineField, defineType } from "sanity";
import { localeArray, localeString, localeText } from "./localeFields";

export const project = defineType({
	name: "project",
	title: "Projet",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Nom du projet",
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
			name: "url",
			title: "URL publique",
			type: "url",
		}),
		defineField({
			name: "cover",
			title: "Visuel de couverture",
			type: "image",
			options: { hotspot: true },
		}),
		localeString("tagline", "Tagline courte"),
		localeText("summary", "Résumé"),
		localeArray("highlights", "Highlights (bullets)"),
		defineField({
			name: "stack",
			title: "Stack",
			type: "array",
			of: [{ type: "string" }],
			options: { layout: "tags" },
		}),
		defineField({
			name: "category",
			title: "Catégorie",
			type: "string",
			options: {
				list: [
					{ title: "Vitrine", value: "vitrine" },
					{ title: "E-commerce", value: "ecommerce" },
					{ title: "SaaS", value: "saas" },
					{ title: "Mobile", value: "mobile" },
					{ title: "Tool", value: "tool" },
				],
			},
		}),
		defineField({
			name: "status",
			title: "Statut",
			type: "string",
			options: {
				list: [
					{ title: "En cours", value: "active" },
					{ title: "Livré", value: "shipped" },
					{ title: "Archivé", value: "archived" },
				],
			},
			initialValue: "shipped",
		}),
		defineField({
			name: "year",
			title: "Année",
			type: "string",
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
	orderings: [
		{
			title: "Order",
			name: "orderAsc",
			by: [{ field: "order", direction: "asc" }],
		},
	],
	preview: {
		select: { title: "name", subtitle: "category", media: "cover" },
	},
});
