"use client";

import { KyksLogo } from "@/components/KyksLogo";
import { useGsap } from "@/hooks/useGsap";
import { useTranslations } from "next-intl";

export function Hero() {
	const t = useTranslations("hero");

	const ref = useGsap((gsap, scope) => {
		const lines = scope.querySelectorAll("[data-anim='hero-line']");
		const eyebrow = scope.querySelector("[data-anim='hero-eyebrow']");
		const subtitle = scope.querySelector("[data-anim='hero-subtitle']");
		const ctas = scope.querySelectorAll("[data-anim='hero-cta']");
		const visual = scope.querySelector("[data-anim='hero-visual']");

		// Set initial states explicitly
		gsap.set(lines, { yPercent: 120 });
		gsap.set(eyebrow, { opacity: 0, y: 12 });
		gsap.set(subtitle, { opacity: 0, y: 16 });
		gsap.set(ctas, { opacity: 0, y: 10 });
		gsap.set(visual, {
			opacity: 0,
			scale: 0.96,
			willChange: "opacity, transform",
		});

		const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
		tl.to(lines, { yPercent: 0, duration: 1.1, stagger: 0.08 })
			.to(eyebrow, { opacity: 1, y: 0, duration: 0.8 }, "-=0.9")
			.to(subtitle, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
			.to(ctas, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 }, "-=0.5")
			.to(
				visual,
				{
					opacity: 0.07,
					scale: 1,
					duration: 1.2,
					ease: "power2.out",
					clearProps: "willChange",
				},
				"-=1.2",
			);

		return () => tl.kill();
	});

	return (
		<section
			ref={ref as React.RefObject<HTMLElement>}
			className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32"
		>
			{/* Ghost logo — decorative brand marker */}
			<div
				data-anim="hero-visual"
				aria-hidden="true"
				className="pointer-events-none absolute -right-24 top-1/2 hidden -translate-y-1/2 opacity-[0.06] md:block lg:-right-12 lg:opacity-[0.08]"
			>
				<KyksLogo size={720} className="h-[min(720px,70vh)] w-auto" />
			</div>

			<div className="container-editorial relative">
				<span
					data-anim="hero-eyebrow"
					className="mb-6 inline-block text-xs font-medium uppercase tracking-[0.24em] text-[var(--color-accent)]"
				>
					{t("eyebrow")}
				</span>
				<h1 className="max-w-[18ch] text-[var(--text-hero)] font-medium leading-[1.08] tracking-[-0.03em]">
					{t("title")
						.split(" ")
						.map((word, i) => (
							<span
								// biome-ignore lint/suspicious/noArrayIndexKey: hero copy is static
								key={i}
								className="inline-block overflow-hidden pr-[0.28em] align-bottom"
							>
								<span data-anim="hero-line" className="inline-block">
									{word}
								</span>
							</span>
						))}
				</h1>
				<p
					data-anim="hero-subtitle"
					className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)]"
				>
					{t("subtitle")}
				</p>
				<div className="mt-10 flex flex-wrap items-center gap-3">
					<a
						data-anim="hero-cta"
						href="#contact"
						className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white shadow-[var(--shadow-soft)] transition-all hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-lifted)]"
					>
						{t("ctaPrimary")}
						<span aria-hidden className="transition-transform group-hover:translate-x-0.5">
							→
						</span>
					</a>
					<a
						data-anim="hero-cta"
						href="#projects"
						className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] px-6 py-3 text-sm font-medium transition-colors hover:bg-[var(--color-surface-alt)]"
					>
						{t("ctaSecondary")}
					</a>
				</div>
			</div>
		</section>
	);
}
