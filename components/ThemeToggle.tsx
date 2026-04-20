"use client";

import { useTheme } from "@/hooks/useTheme";
import { useTranslations } from "next-intl";

export function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();
	const t = useTranslations("nav");

	return (
		<button
			type="button"
			onClick={toggleTheme}
			aria-label={t("toggleTheme")}
			className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] transition-colors hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-alt)]"
		>
			<span aria-hidden="true" className="text-sm">
				{theme === "light" ? "◐" : "◑"}
			</span>
		</button>
	);
}
