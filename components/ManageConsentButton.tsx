"use client";

import { writeConsent } from "@/lib/consent";
import { useTranslations } from "next-intl";

export function ManageConsentButton() {
	const t = useTranslations("consent");

	const handleClick = () => {
		writeConsent("declined" as never);
		// Remove the cookie so the banner re-appears
		document.cookie = "kyks_consent=; Max-Age=0; Path=/; SameSite=Lax";
		window.location.reload();
	};

	return (
		<button
			type="button"
			onClick={handleClick}
			className="text-[var(--color-text-subtle)] underline decoration-[var(--color-border-strong)] underline-offset-4 transition-colors hover:text-[var(--color-text-muted)]"
		>
			{t("manage")}
		</button>
	);
}
