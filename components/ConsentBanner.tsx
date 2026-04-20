"use client";

import { readConsent, writeConsent } from "@/lib/consent";
import { initPostHog, optOutPostHog } from "@/lib/posthog";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export function ConsentBanner() {
	const t = useTranslations("consent");
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (readConsent() === null) setVisible(true);
	}, []);

	const handleAccept = () => {
		writeConsent("accepted");
		initPostHog();
		setVisible(false);
	};

	const handleDecline = () => {
		writeConsent("declined");
		optOutPostHog();
		setVisible(false);
	};

	if (!visible) return null;

	return (
		<dialog
			open
			aria-live="polite"
			aria-label={t("title")}
			className="fixed inset-x-4 bottom-4 z-50 max-w-xl rounded-[var(--radius-lg)] border border-[var(--color-border-strong)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-lifted)] md:inset-x-auto md:left-6 md:bottom-6"
		>
			<button
				type="button"
				onClick={handleDecline}
				className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-surface-alt)] hover:text-[var(--color-text)]"
				aria-label={t("decline")}
			>
				<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
					<path
						d="M1 1l12 12M13 1L1 13"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>
				</svg>
			</button>
			<p className="mb-2 font-[var(--font-display)] text-lg">{t("title")}</p>
			<p className="mb-5 text-sm leading-relaxed text-[var(--color-text-muted)]">{t("body")}</p>
			<div className="flex flex-wrap items-center gap-3">
				<button
					type="button"
					onClick={handleAccept}
					className="rounded-[var(--radius-md)] bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-hover)]"
				>
					{t("accept")}
				</button>
				<button
					type="button"
					onClick={handleDecline}
					className="rounded-[var(--radius-md)] border border-[var(--color-border-strong)] px-4 py-2 text-sm font-medium transition-colors hover:bg-[var(--color-surface-alt)]"
				>
					{t("decline")}
				</button>
			</div>
		</dialog>
	);
}
