import type { ReactNode } from "react";

type LegalShellProps = {
	title: string;
	subtitle: string;
	lastUpdated: string;
	lastUpdatedLabel?: string;
	brand?: string;
	children: ReactNode;
};

/**
 * Mise en page commune des pages légales des apps KYKS (Clork, Interfector…).
 * Contenu statique, non indexé, hors navigation — accessible par URL directe.
 */
export function LegalShell({
	title,
	subtitle,
	lastUpdated,
	lastUpdatedLabel = "Dernière mise à jour",
	brand = "Clork",
	children,
}: LegalShellProps) {
	return (
		<main className="mx-auto max-w-2xl px-6 py-24 md:py-32">
			<header className="mb-12 border-b border-border pb-8">
				<p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">{brand}</p>
				<h1 className="font-display text-4xl leading-tight text-text md:text-5xl">{title}</h1>
				<p className="mt-4 text-lg text-text-muted">{subtitle}</p>
				<p className="mt-6 text-sm text-text-subtle">
					{lastUpdatedLabel} : {lastUpdated}
				</p>
			</header>
			<div className="legal-prose flex flex-col gap-10 text-text-muted">{children}</div>
		</main>
	);
}

type SectionProps = { heading: string; children: ReactNode };

export function LegalSection({ heading, children }: SectionProps) {
	return (
		<section className="flex flex-col gap-3">
			<h2 className="font-display text-2xl text-text">{heading}</h2>
			{children}
		</section>
	);
}
