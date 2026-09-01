import "@/app/globals.css";
import { Fraunces, Inter } from "next/font/google";

const fraunces = Fraunces({
	subsets: ["latin"],
	variable: "--font-display",
	display: "swap",
	axes: ["opsz", "SOFT"],
});

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
	display: "swap",
});

export default function GlobalNotFound() {
	return (
		<html lang="fr" className={`${fraunces.variable} ${inter.variable}`}>
			<body>
				<main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-24 md:px-10">
					<span className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--color-accent)]">
						Erreur 404 · 404 error
					</span>
					<span
						aria-hidden
						className="mt-6 block font-[family-name:var(--font-display)] text-[clamp(6rem,18vw,14rem)] font-light leading-[0.85] tracking-[-0.04em] text-[var(--color-text)]"
					>
						404
					</span>
					<h1 className="mt-8 max-w-[22ch] font-[family-name:var(--font-display)] text-[var(--text-4xl)] font-medium leading-[1.05] tracking-[-0.02em]">
						Cette page a disparu du studio.
					</h1>
					<p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)]">
						Le lien que vous suivez n'existe plus, a été renommé, ou n'a peut-être jamais existé.
						Rien de grave : le reste du studio vous attend.
					</p>
					<div className="mt-10 flex flex-wrap items-center gap-3">
						<a
							href="/"
							className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white shadow-[var(--shadow-soft)] transition-all hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-lifted)]"
						>
							Retour à l'accueil
							<span aria-hidden>→</span>
						</a>
						<a
							href="/kylian"
							className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] px-6 py-3 text-sm font-medium transition-colors hover:bg-[var(--color-surface-alt)]"
						>
							Voir le CV de Kylian
						</a>
					</div>
				</main>
			</body>
		</html>
	);
}
