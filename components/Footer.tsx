import { useTranslations } from "next-intl";
import { ManageConsentButton } from "./ManageConsentButton";

const LINKEDIN_URL = "https://www.linkedin.com/company/kyks";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61592403042733";

function LinkedInIcon({ size = 16 }: { size?: number }) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="currentColor"
			aria-hidden="true"
			role="img"
		>
			<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
		</svg>
	);
}

function FacebookIcon({ size = 16 }: { size?: number }) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="currentColor"
			aria-hidden="true"
			role="img"
		>
			<path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
		</svg>
	);
}

export function Footer() {
	const t = useTranslations("footer");
	const year = new Date().getFullYear();

	return (
		<footer className="border-t border-[var(--color-border)] py-12">
			<div className="container-editorial flex flex-col gap-6 text-sm text-[var(--color-text-muted)] md:flex-row md:items-center md:justify-between">
				<div className="flex flex-col gap-1">
					<span className="font-[var(--font-display)] text-base text-[var(--color-text)]">
						KYKS
					</span>
					<span>{t("tagline")}</span>
				</div>
				<div className="flex flex-col gap-3 md:items-end">
					<div className="flex items-center gap-2">
						<a
							href={LINKEDIN_URL}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={t("linkedin")}
							className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-border-strong)] hover:text-[var(--color-text)]"
						>
							<LinkedInIcon />
						</a>
						<a
							href={FACEBOOK_URL}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={t("facebook")}
							className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-border-strong)] hover:text-[var(--color-text)]"
						>
							<FacebookIcon />
						</a>
					</div>
					<span>
						© {year} KYKS — {t("rights")}
					</span>
					<div className="flex items-center gap-3">
						<span className="text-[var(--color-text-subtle)]">{t("credits")}</span>
						<span className="text-[var(--color-border-strong)]">·</span>
						<ManageConsentButton />
					</div>
				</div>
			</div>
		</footer>
	);
}
