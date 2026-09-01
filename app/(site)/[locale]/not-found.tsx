import { KyksLogo } from "@/components/KyksLogo";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function LocaleNotFound() {
	const t = await getTranslations("notFound");

	return (
		<section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
			{/* Ghost logo — same trick as the hero, decorative brand marker */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -right-24 top-1/2 hidden -translate-y-1/2 opacity-[0.06] md:block lg:-right-12 lg:opacity-[0.08]"
			>
				<KyksLogo size={720} className="h-[min(720px,70vh)] w-auto" />
			</div>

			<div className="container-editorial relative">
				<div className="flex items-center gap-4">
					<span className="inline-block text-xs font-medium uppercase tracking-[0.24em] text-[var(--color-accent)]">
						{t("eyebrow")}
					</span>
					<span aria-hidden className="h-px w-12 bg-[var(--color-border-strong)]" />
					<span className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--color-text-subtle)]">
						{t("meta")}
					</span>
				</div>

				<div className="mt-8 flex items-end gap-6">
					<span
						aria-hidden
						className="font-[family-name:var(--font-display)] text-[clamp(6rem,18vw,14rem)] font-light leading-[0.85] tracking-[-0.04em] text-[var(--color-text)]"
					>
						404
					</span>
				</div>

				<h1 className="mt-10 max-w-[22ch] text-[var(--text-4xl)] font-medium leading-[1.05] tracking-[-0.02em]">
					{t("title")}
				</h1>

				<p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)]">
					{t("subtitle")}
				</p>

				<div className="mt-10 flex flex-wrap items-center gap-3">
					<Link
						href="/"
						className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white shadow-[var(--shadow-soft)] transition-all hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-lifted)]"
					>
						{t("ctaPrimary")}
						<span aria-hidden className="transition-transform group-hover:translate-x-0.5">
							→
						</span>
					</Link>
					<Link
						href="/kylian"
						className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] px-6 py-3 text-sm font-medium transition-colors hover:bg-[var(--color-surface-alt)]"
					>
						{t("ctaSecondary")}
					</Link>
				</div>
			</div>
		</section>
	);
}
