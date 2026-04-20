import { defineField, defineType } from "sanity";
import { localeString, localeText } from "./localeFields";

export const siteSettings = defineType({
	name: "siteSettings",
	title: "Réglages site",
	type: "document",
	fields: [
		localeString("tagline", "Tagline (hero)"),
		localeText("pitch", "Pitch court (meta description)"),
		defineField({
			name: "contactEmail",
			title: "Email contact public",
			type: "string",
			initialValue: "hello@kyks.io",
		}),
		defineField({
			name: "openGraphImage",
			title: "Image Open Graph par défaut",
			type: "image",
		}),
		defineField({
			name: "kylianPortrait",
			title: "Portrait Kylian (/kylian)",
			type: "image",
			options: { hotspot: true },
		}),
	],
	preview: {
		prepare: () => ({ title: "Réglages site" }),
	},
});
