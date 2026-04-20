"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";

export function LangSwitcher() {
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();
	const t = useTranslations("nav");

	const other = routing.locales.find((l) => l !== locale) ?? routing.defaultLocale;

	return (
		<button
			type="button"
			onClick={() => router.replace(pathname, { locale: other })}
			aria-label={t("switchLang")}
			className="inline-flex h-9 items-center rounded-[var(--radius-md)] border border-[var(--color-border)] px-3 text-xs font-medium uppercase tracking-wider transition-colors hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-alt)]"
		>
			{other}
		</button>
	);
}
