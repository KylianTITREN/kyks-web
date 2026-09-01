import type { Locale } from "@/i18n/routing";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Interfector — Le jeu du Killer",
	description:
		"Interfector, l'app mobile qui digitalise le jeu du Killer. Une cible secrète, une mission absurde. Un projet KYKS.",
	robots: { index: false, follow: false, noarchive: true, nosnippet: true },
	alternates: { canonical: null },
};

type Storyboard = {
	eyebrow: string;
	title: string;
	body: string;
	image: string;
	alt: string;
};

type Copy = {
	badge: string;
	tagline: string;
	appName: string;
	claim: string;
	intro: string;
	pillars: { title: string; body: string }[];
	storyboards: Storyboard[];
	stackTitle: string;
	stackKicker: string;
	stackItems: { label: string; detail: string }[];
	statusTitle: string;
	statusBody: string;
	statusChip: string;
	linksTitle: string;
	backToKyks: string;
	viewLegal: string;
	viewSupport: string;
	credits: string;
};

const COPY: Record<Locale, Copy> = {
	fr: {
		badge: "Un projet KYKS · 2026",
		tagline: "Fais confiance à personne.",
		appName: "Interfector",
		claim: "Le jeu du Killer, digitalisé pour tes soirées.",
		intro:
			"Interfector transforme n'importe quelle soirée en partie de Killer. Chaque joueur reçoit une cible secrète et une mission absurde à lui faire accomplir dans la vraie vie. Mission réussie, la victime avoue, le tueur hérite de sa cible. Dernier survivant gagnant.",
		pillars: [
			{
				title: "Une cible",
				body: "Distribuée en secret par l'app. Personne d'autre ne la connaît.",
			},
			{
				title: "Une mission",
				body: "Absurde, jouable dans la vie réelle. Un témoin suffit à valider.",
			},
			{
				title: "Un survivant",
				body: "La chaîne se resserre, les alliances trahissent, un seul gagne.",
			},
		],
		storyboards: [
			{
				eyebrow: "Interfector — le jeu du Killer",
				title: "Une identité au couteau.",
				body: "Un nom, un logo, un ton. L'app assume son second degré dès la première seconde : capuche, silence, promesse claire — fais confiance à personne.",
				image: "/interfector/fr/screen-1.png",
				alt: "Écran d'accroche Interfector — Fais confiance à personne.",
			},
			{
				eyebrow: "Ta mission t'attend",
				title: "Une cible secrète. Une mission absurde.",
				body: "L'écran de mission tient sur une carte : ta cible, sa fiche, la mission à accomplir, et un seul bouton — J'ai réussi ma mission. Si tu te fais griller, tu le signales en un tap.",
				image: "/interfector/fr/screen-2.png",
				alt: "Écran mission Interfector avec cible Camille Reyes.",
			},
			{
				eyebrow: "La règle d'or",
				title: "Ta victime avoue. Tu hérites de sa cible.",
				body: "L'aveu déclenche tout : la victime confirme dans l'app, ton compteur monte, l'app te révèle ta nouvelle cible. La chaîne se resserre en temps réel.",
				image: "/interfector/fr/screen-3.png",
				alt: "Écran d'aveu Interfector — Camille est tombée.",
			},
			{
				eyebrow: "Prêt en 30 secondes",
				title: "Embarque tes amis en un tap.",
				body: "Un code à crier dans le salon, un partage rapide, et la liste des futures victimes se remplit. Jusqu'à 30 joueurs, un hôte, zéro friction.",
				image: "/interfector/fr/screen-4.png",
				alt: "Écran lobby Interfector avec code 482 913 et liste des joueurs.",
			},
			{
				eyebrow: "Jusqu'au bout",
				title: "Le dernier survivant gagne.",
				body: "Fin de partie : l'app compte les éliminations, distribue les prix ridicules — la plus fourbe, la mort la plus bête, la survie la plus courte — et propose de relancer une manche dans la foulée.",
				image: "/interfector/fr/screen-5.png",
				alt: "Écran fin de partie Interfector — Inès a survécu à tout le monde.",
			},
		],
		stackTitle: "Sous le capot.",
		stackKicker: "Stack",
		stackItems: [
			{ label: "Flutter", detail: "App iOS + Android, un seul codebase." },
			{ label: "Firebase Cloud Functions", detail: "TypeScript, autorité du jeu." },
			{ label: "Firestore", detail: "État de partie temps réel." },
			{ label: "Auth Firebase", detail: "Anonyme + Apple/Google, pas de mot de passe." },
			{ label: "Design system Ink", detail: "17 écrans hi-fi, dark-first." },
			{ label: "i18n FR / EN", detail: "Copy jouable dans les deux langues." },
		],
		statusTitle: "Statut",
		statusBody:
			"Interfector est en développement actif. Prochaine étape : bêta fermée avant dépôt sur l'App Store et le Play Store.",
		statusChip: "En développement",
		linksTitle: "En savoir plus",
		backToKyks: "Retour sur kyks.io",
		viewLegal: "Conditions & confidentialité",
		viewSupport: "Support Interfector",
		credits: "Design, code et direction produit : Kylian Titren pour KYKS.",
	},
	en: {
		badge: "A KYKS project · 2026",
		tagline: "Trust no one.",
		appName: "Interfector",
		claim: "The Killer party game, digitalised for your nights out.",
		intro:
			"Interfector turns any party into a game of Killer. Every player gets a secret target and an absurd mission to pull off in real life. Mission accomplished, the victim confesses, the killer inherits their target. Last one standing wins.",
		pillars: [
			{
				title: "One target",
				body: "Assigned secretly by the app. Nobody else knows who's after who.",
			},
			{
				title: "One mission",
				body: "Absurd, playable in real life. A single witness is enough to confirm.",
			},
			{
				title: "One survivor",
				body: "The chain tightens, alliances break, one player takes it all.",
			},
		],
		storyboards: [
			{
				eyebrow: "Interfector — the Killer game",
				title: "An identity with an edge.",
				body: "A name, a logo, a tone. The app owns its dark humour from second one: hood, silence, one clear promise — trust no one.",
				image: "/interfector/en/screen-1.png",
				alt: "Interfector splash — Trust no one.",
			},
			{
				eyebrow: "Your mission awaits",
				title: "A secret target. An absurd mission.",
				body: "The mission screen fits on a single card: your target, their bio, the mission to run, one button — I completed my mission. Get suspected? Report it in one tap.",
				image: "/interfector/en/screen-2.png",
				alt: "Interfector mission screen with target Camille Reyes.",
			},
			{
				eyebrow: "The golden rule",
				title: "Your victim confesses. You inherit their target.",
				body: "The confession triggers everything: the victim confirms in-app, your counter ticks up, the app reveals your next target. The chain tightens live.",
				image: "/interfector/en/screen-3.png",
				alt: "Interfector confession screen — Camille has fallen.",
			},
			{
				eyebrow: "Ready in 30 seconds",
				title: "Onboard your friends in one tap.",
				body: "A code to shout across the room, a quick share, and the list of future victims fills up. Up to 30 players, one host, zero friction.",
				image: "/interfector/en/screen-4.png",
				alt: "Interfector lobby with code 482 913 and player list.",
			},
			{
				eyebrow: "All the way",
				title: "The last survivor wins.",
				body: "End of game: the app counts eliminations, hands out silly trophies — sneakiest player, dumbest death, shortest survival — and offers to run another round on the spot.",
				image: "/interfector/en/screen-5.png",
				alt: "Interfector end screen — Inès survived everyone.",
			},
		],
		stackTitle: "Under the hood.",
		stackKicker: "Stack",
		stackItems: [
			{ label: "Flutter", detail: "iOS + Android, single codebase." },
			{ label: "Firebase Cloud Functions", detail: "TypeScript, game authority." },
			{ label: "Firestore", detail: "Real-time game state." },
			{ label: "Firebase Auth", detail: "Anonymous + Apple/Google, no password." },
			{ label: "Ink design system", detail: "17 hi-fi screens, dark-first." },
			{ label: "i18n FR / EN", detail: "Playable copy in both languages." },
		],
		statusTitle: "Status",
		statusBody:
			"Interfector is in active development. Next step: closed beta before hitting the App Store and Play Store.",
		statusChip: "In development",
		linksTitle: "Learn more",
		backToKyks: "Back to kyks.io",
		viewLegal: "Terms & privacy",
		viewSupport: "Interfector support",
		credits: "Design, code and product direction by Kylian Titren for KYKS.",
	},
};

const BG = "#161514";
const SURFACE = "#211F1E";
const SURFACE_ALT = "#262423";
const TEXT = "#F3F2F2";
const MUTED = "#C2BAB2";
const SUBTLE = "#8A837C";
const ACCENT = "#EC3013";
const DIVIDER = "#37342F";

function InterfectorMark({ size = 96 }: { size?: number }) {
	return (
		<Image
			src="/interfector/app-icon.png"
			alt="Interfector app icon"
			width={size}
			height={size}
			priority
			className="rounded-[22%] drop-shadow-[0_20px_50px_rgba(236,48,19,0.35)]"
			style={{ width: size, height: size }}
		/>
	);
}

export default async function InterfectorProjectPage({
	params,
}: {
	params: Promise<{ locale: Locale }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = COPY[locale];
	const legalPath = `/${locale}/interfector/regles`;
	const supportPath = `/${locale}/interfector/support`;

	return (
		<div
			className="relative isolate min-h-screen overflow-hidden font-[var(--font-sans)] antialiased"
			style={{ background: BG, color: TEXT }}
		>
			{/* subtle red glow, top-right */}
			<div
				aria-hidden
				className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full blur-3xl"
				style={{ background: `radial-gradient(closest-side, ${ACCENT}33, transparent)` }}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full blur-3xl"
				style={{ background: `radial-gradient(closest-side, ${ACCENT}22, transparent)` }}
			/>

			{/* HERO */}
			<section className="relative mx-auto max-w-6xl px-6 pb-16 pt-20 md:px-10 md:pt-28">
				<div
					className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em]"
					style={{ color: ACCENT }}
				>
					<span
						className="inline-flex h-6 items-center rounded-full px-3"
						style={{ background: `${ACCENT}22`, color: ACCENT }}
					>
						{t.badge}
					</span>
				</div>

				<div className="mt-10 grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
					<div>
						<h1 className="font-[family-name:var(--font-sans)] text-[clamp(3.5rem,10vw,8.5rem)] font-black leading-[0.9] tracking-[-0.04em]">
							{t.appName.toUpperCase()}
							<span style={{ color: ACCENT }}>.</span>
						</h1>
						<p
							className="mt-6 max-w-2xl text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-tight tracking-tight"
							style={{ color: TEXT }}
						>
							{t.tagline}
						</p>
						<p
							className="mt-6 max-w-xl text-base leading-relaxed md:text-lg"
							style={{ color: MUTED }}
						>
							{t.claim}
						</p>
					</div>
					<InterfectorMark size={140} />
				</div>

				<div
					className="mt-14 h-px w-full"
					style={{ background: `linear-gradient(90deg, ${DIVIDER}, transparent)` }}
				/>

				<p className="mt-10 max-w-3xl text-lg leading-relaxed md:text-xl" style={{ color: MUTED }}>
					{t.intro}
				</p>

				<div className="mt-12 grid gap-4 md:grid-cols-3">
					{t.pillars.map((p) => (
						<div
							key={p.title}
							className="rounded-2xl border p-6"
							style={{ borderColor: DIVIDER, background: SURFACE }}
						>
							<div
								className="text-xs font-semibold uppercase tracking-[0.2em]"
								style={{ color: ACCENT }}
							>
								{p.title}
							</div>
							<p className="mt-3 text-base leading-relaxed" style={{ color: TEXT }}>
								{p.body}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* STORYBOARDS */}
			<section className="relative mx-auto max-w-6xl px-6 py-24 md:px-10">
				<div className="flex flex-col gap-32 md:gap-40">
					{t.storyboards.map((s, i) => {
						const reverse = i % 2 === 1;
						return (
							<article
								key={s.image}
								className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
									reverse ? "md:[&>div:first-child]:order-2" : ""
								}`}
							>
								<div>
									<div
										className="text-xs font-semibold uppercase tracking-[0.24em]"
										style={{ color: ACCENT }}
									>
										{s.eyebrow}
									</div>
									<h2 className="mt-4 font-[family-name:var(--font-sans)] text-[clamp(2rem,4.5vw,3.5rem)] font-black leading-[0.95] tracking-[-0.035em]">
										{s.title}
									</h2>
									<p
										className="mt-6 max-w-md text-base leading-relaxed md:text-lg"
										style={{ color: MUTED }}
									>
										{s.body}
									</p>
									<div
										className="mt-8 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em]"
										style={{ color: SUBTLE }}
									>
										<span className="inline-block h-px w-8" style={{ background: ACCENT }} />
										{`0${i + 1} / 05`}
									</div>
								</div>
								<div className="relative">
									<div
										aria-hidden
										className="pointer-events-none absolute inset-0 rounded-[36px] blur-2xl"
										style={{ background: `${ACCENT}20`, transform: "translateY(20px) scale(0.92)" }}
									/>
									<div
										className="relative overflow-hidden rounded-[28px] border"
										style={{
											borderColor: DIVIDER,
											background: SURFACE,
										}}
									>
										<Image
											src={s.image}
											alt={s.alt}
											width={860}
											height={1780}
											className="h-auto w-full"
											sizes="(min-width: 768px) 480px, 100vw"
											priority={i === 0}
										/>
									</div>
								</div>
							</article>
						);
					})}
				</div>
			</section>

			{/* STACK */}
			<section className="relative border-y" style={{ borderColor: DIVIDER, background: SURFACE }}>
				<div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
					<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
						<div>
							<div
								className="text-xs font-semibold uppercase tracking-[0.24em]"
								style={{ color: ACCENT }}
							>
								{t.stackKicker}
							</div>
							<h2 className="mt-4 font-[family-name:var(--font-sans)] text-[clamp(2rem,4.5vw,3.5rem)] font-black leading-[0.95] tracking-[-0.035em]">
								{t.stackTitle}
							</h2>
						</div>
					</div>

					<ul
						className="mt-12 grid gap-px overflow-hidden rounded-2xl border md:grid-cols-3"
						style={{ borderColor: DIVIDER, background: DIVIDER }}
					>
						{t.stackItems.map((item) => (
							<li key={item.label} className="p-6 md:p-7" style={{ background: SURFACE_ALT }}>
								<div className="text-lg font-bold" style={{ color: TEXT }}>
									{item.label}
								</div>
								<div className="mt-2 text-sm leading-relaxed" style={{ color: MUTED }}>
									{item.detail}
								</div>
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* STATUS + LINKS */}
			<section className="relative mx-auto max-w-6xl px-6 py-24 md:px-10">
				<div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-20">
					<div>
						<div
							className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]"
							style={{ background: `${ACCENT}22`, color: ACCENT }}
						>
							<span
								className="inline-block h-2 w-2 rounded-full"
								style={{ background: ACCENT, boxShadow: `0 0 0 4px ${ACCENT}33` }}
							/>
							{t.statusChip}
						</div>
						<h2 className="mt-6 font-[family-name:var(--font-sans)] text-[clamp(2rem,4vw,3rem)] font-black leading-[0.95] tracking-[-0.03em]">
							{t.statusTitle}
						</h2>
						<p
							className="mt-6 max-w-xl text-base leading-relaxed md:text-lg"
							style={{ color: MUTED }}
						>
							{t.statusBody}
						</p>
					</div>

					<div
						className="rounded-2xl border p-6 md:p-8"
						style={{ borderColor: DIVIDER, background: SURFACE }}
					>
						<div
							className="text-xs font-semibold uppercase tracking-[0.24em]"
							style={{ color: ACCENT }}
						>
							{t.linksTitle}
						</div>
						<ul className="mt-6 flex flex-col divide-y" style={{ borderColor: DIVIDER }}>
							<li>
								<Link
									href={legalPath}
									className="group flex items-center justify-between py-4 text-base"
									style={{ color: TEXT }}
								>
									<span>{t.viewLegal}</span>
									<span
										aria-hidden
										className="transition-transform group-hover:translate-x-1"
										style={{ color: ACCENT }}
									>
										→
									</span>
								</Link>
							</li>
							<li style={{ borderTop: `1px solid ${DIVIDER}` }}>
								<Link
									href={supportPath}
									className="group flex items-center justify-between py-4 text-base"
									style={{ color: TEXT }}
								>
									<span>{t.viewSupport}</span>
									<span
										aria-hidden
										className="transition-transform group-hover:translate-x-1"
										style={{ color: ACCENT }}
									>
										→
									</span>
								</Link>
							</li>
							<li style={{ borderTop: `1px solid ${DIVIDER}` }}>
								<Link
									href={`/${locale}`}
									className="group flex items-center justify-between py-4 text-base"
									style={{ color: TEXT }}
								>
									<span>{t.backToKyks}</span>
									<span
										aria-hidden
										className="transition-transform group-hover:translate-x-1"
										style={{ color: ACCENT }}
									>
										→
									</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<p className="mt-20 text-xs uppercase tracking-[0.24em]" style={{ color: SUBTLE }}>
					{t.credits}
				</p>
			</section>
		</div>
	);
}
