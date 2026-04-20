import type { Locale } from "@/i18n/routing";
import type { LocaleArray, LocaleString, LocaleText } from "@/sanity/types";

export const pickLocale = (
	field: LocaleString | LocaleText | undefined,
	locale: Locale,
	fallback: Locale = "fr",
): string => {
	if (!field) return "";
	return field[locale] ?? field[fallback] ?? "";
};

export const pickLocaleArray = (
	field: LocaleArray | undefined,
	locale: Locale,
	fallback: Locale = "fr",
): string[] => {
	if (!field) return [];
	return field[locale] ?? field[fallback] ?? [];
};
