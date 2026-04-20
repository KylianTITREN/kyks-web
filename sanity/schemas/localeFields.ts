import { defineField } from "sanity";

export const localeString = (name: string, title: string) =>
	defineField({
		name,
		title,
		type: "object",
		fields: [
			{ name: "fr", title: "Français", type: "string" },
			{ name: "en", title: "English", type: "string" },
		],
		options: { columns: 2 },
	});

export const localeText = (name: string, title: string) =>
	defineField({
		name,
		title,
		type: "object",
		fields: [
			{ name: "fr", title: "Français", type: "text", rows: 4 },
			{ name: "en", title: "English", type: "text", rows: 4 },
		],
	});

export const localeArray = (name: string, title: string) =>
	defineField({
		name,
		title,
		type: "object",
		fields: [
			{
				name: "fr",
				title: "Français",
				type: "array",
				of: [{ type: "string" }],
			},
			{ name: "en", title: "English", type: "array", of: [{ type: "string" }] },
		],
	});
