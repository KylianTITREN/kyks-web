import type { Locale } from "@/i18n/routing";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Bitter, Public_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const bitter = Bitter({
	subsets: ["latin"],
	style: ["normal", "italic"],
	variable: "--font-bluffo-display",
	display: "swap",
});

const publicSans = Public_Sans({
	subsets: ["latin"],
	variable: "--font-bluffo-sans",
	display: "swap",
});

const APP_STORE_ID = "6807730198";
const APP_STORE_URL = `https://apps.apple.com/fr/app/id${APP_STORE_ID}`;

export const metadata: Metadata = {
	title: "Bluffo — Le jeu de soirée où l'on ment bien",
	description:
		"Bluffo, l'app mobile de bluff autour d'un seul téléphone : un seul dit la vérité, les autres inventent. Un projet KYKS.",
	robots: { index: false, follow: false, noarchive: true, nosnippet: true },
	alternates: { canonical: null },
	itunes: {
		appId: APP_STORE_ID,
		appArgument: "https://kyks.io/project/bluffo",
	},
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
	claim: string;
	intro: string;
	pillars: { title: string; body: string }[];
	storyboards: Storyboard[];
	stackKicker: string;
	stackTitle: string;
	stackItems: { label: string; detail: string }[];
	statusChip: string;
	statusTitle: string;
	statusBody: string;
	linksTitle: string;
	viewLegal: string;
	viewPrivacy: string;
	viewSupport: string;
	backToKyks: string;
	download: {
		kicker: string;
		title: string;
		body: string;
		appleOverline: string;
		appleLabel: string;
		playOverline: string;
		playLabel: string;
		soon: string;
	};
	credits: string;
};

const COPY: Record<Locale, Copy> = {
	fr: {
		badge: "Un projet KYKS · 2026",
		tagline: "Dis la vérité, ou mens très bien.",
		claim: "Le jeu de soirée où l'on ment bien, autour d'un seul téléphone.",
		intro:
			"Un joueur tire une carte et lit la question à voix haute. Puis le téléphone fait le tour de la table, et chacun lit quelque chose qu'il n'a pas le droit de répéter : la vraie réponse. Dire la vérité en plaçant les trois mots rouges, ou inventer sans en prononcer un seul. Le candidat désigne celui qu'il croit. La carte s'ouvre.",
		pillars: [
			{
				title: "Une carte",
				body: "Une question lue à voix haute, une vraie réponse lue en secret. Des faits vérifiés, jamais des légendes.",
			},
			{
				title: "Trois mots rouges",
				body: "À placer tous si tu dis vrai. À ne jamais prononcer si tu inventes. L'app veille au reste.",
			},
			{
				title: "Un menteur à désigner",
				body: "Le candidat choisit, la carte se dévoile. Le plus convaincant gagne, pas le plus honnête.",
			},
		],
		storyboards: [
			{
				eyebrow: "Le jeu",
				title: "Un seul dira la vérité.",
				body: "Pas de compte, pas de réseau. Les prénoms restent sur le téléphone, et le téléphone reste sur la table. Une identité encre et papier, un point rouge en guise de signature.",
				image: "/bluffo/fr/screen-1.png",
				alt: "Écran d'accueil Bluffo — Dis la vérité, ou mens très bien.",
			},
			{
				eyebrow: "La carte",
				title: "Chacun lit la vraie réponse. En secret.",
				body: "La carte papier porte la question, la vraie réponse et ses mots rouges. Un tap masque l'écran quand un voisin se penche. Puis on choisit : je dis la vérité, ou j'invente.",
				image: "/bluffo/fr/screen-2.png",
				alt: "Écran secret Bluffo avec la vraie réponse et les mots rouges soulignés.",
			},
			{
				eyebrow: "La règle",
				title: "Trois mots à placer. Ou à ne jamais dire.",
				body: "Si tu dis vrai, les mots rouges doivent tous y être, reformulés comme tu veux. Si tu inventes, pas un seul ne doit sortir. La vérité ne peut être prise qu'une fois : l'app bloque les suivants.",
				image: "/bluffo/fr/screen-3.png",
				alt: "Écran Bluffo — mots à placer absolument et mots interdits.",
			},
			{
				eyebrow: "Le tour",
				title: "Le téléphone fait le tour de la table.",
				body: "Un écran de passage entre chaque joueur, avec son prénom en grand. Personne d'autre ne regarde. Le suivant confirme que c'est bien lui avant de découvrir la carte.",
				image: "/bluffo/fr/screen-4.png",
				alt: "Écran de passage Bluffo — Passe le téléphone à Salomé.",
			},
			{
				eyebrow: "La chute",
				title: "Puis il faut désigner un menteur.",
				body: "Le candidat désigne celui qu'il croit. Roulé ou bien vu : la carte s'ouvre, chacun révèle ce qu'il a vraiment fait, les cartes Point et Question changent de main.",
				image: "/bluffo/fr/screen-5.png",
				alt: "Écran de révélation Bluffo — Léo t'a bluffé.",
			},
		],
		stackKicker: "Stack",
		stackTitle: "Sous le capot.",
		stackItems: [
			{ label: "Flutter", detail: "iOS + Android, un seul codebase." },
			{ label: "100 % hors ligne", detail: "Aucun serveur, aucun compte, rien de collecté." },
			{ label: "Un seul achat", detail: "StoreKit et Play Billing en direct, sans intermédiaire." },
			{ label: "Contenu vérifié", detail: "Deux sources par carte, relecture adversariale." },
			{ label: "Encre & papier", detail: "Bitter + Public Sans, 13 écrans hi-fi." },
			{ label: "FR / EN natifs", detail: "Des paquets écrits dans chaque langue, pas traduits." },
		],
		statusChip: "Disponible",
		statusTitle: "Statut",
		statusBody:
			"Bluffo est disponible sur l'App Store depuis septembre 2026. Prochaine étape : la version Android sur le Play Store.",
		linksTitle: "En savoir plus",
		viewLegal: "Conditions d'utilisation",
		viewPrivacy: "Confidentialité",
		viewSupport: "Support Bluffo",
		backToKyks: "Retour sur kyks.io",
		download: {
			kicker: "Télécharger",
			title: "Un téléphone. Une table. Un menteur.",
			body: "Disponible sur iPhone. Bientôt sur Android.",
			appleOverline: "Télécharger sur",
			appleLabel: "App Store",
			playOverline: "Disponible sur",
			playLabel: "Google Play",
			soon: "Bientôt",
		},
		credits: "Design, code et direction produit : Kylian Titren pour KYKS.",
	},
	en: {
		badge: "A KYKS project · 2026",
		tagline: "Tell the truth, or lie beautifully.",
		claim: "The party game of lying well, around a single phone.",
		intro:
			"One player draws a card and reads the question out loud. Then the phone goes round the table, and everyone else reads something they aren't allowed to repeat: the real answer. Tell the truth and work in all three red words, or invent something entirely and never let one of them slip. The reader names the one they believe. The card opens.",
		pillars: [
			{
				title: "One card",
				body: "A question read out loud, a real answer read in secret. Checked facts, never legends.",
			},
			{
				title: "Three red words",
				body: "All of them if you tell the truth. None of them if you make it up. The app enforces the rest.",
			},
			{
				title: "One liar to name",
				body: "The reader chooses, the card opens. The most convincing player wins, not the most honest.",
			},
		],
		storyboards: [
			{
				eyebrow: "The game",
				title: "Only one of them is telling the truth.",
				body: "No accounts, no wifi. Names stay on the phone, and the phone stays on the table. An ink-and-paper identity with a red full stop for a signature.",
				image: "/bluffo/en/screen-1.png",
				alt: "Bluffo home screen — Tell the truth, or lie beautifully.",
			},
			{
				eyebrow: "The card",
				title: "Everyone reads the real answer. In secret.",
				body: "The paper card carries the question, the real answer and its red words. One tap hides the screen when a neighbour leans in. Then you choose: I'll tell the truth, or I'll make it up.",
				image: "/bluffo/en/screen-2.png",
				alt: "Bluffo secret screen with the real answer and underlined red words.",
			},
			{
				eyebrow: "The rule",
				title: "Three words to slip in. Or never to say.",
				body: "Telling the truth? Every red word must be in there, phrased any way you like. Making it up? Not one may cross your lips. The truth can only be taken once: the app blocks whoever comes next.",
				image: "/bluffo/en/screen-3.png",
				alt: "Bluffo screen — words you must use and words you must avoid.",
			},
			{
				eyebrow: "The round",
				title: "The phone goes round the table.",
				body: "A hand-over screen between players, with the next name in large type. No one else is looking. The next player confirms it's them before the card is revealed.",
				image: "/bluffo/en/screen-4.png",
				alt: "Bluffo hand-over screen — Pass the phone to Nora.",
			},
			{
				eyebrow: "The reckoning",
				title: "Then you have to name a liar.",
				body: "The reader names the one they believe. Taken in or well spotted: the card opens, everyone reveals what they actually did, and the Point and Question cards change hands.",
				image: "/bluffo/en/screen-5.png",
				alt: "Bluffo reveal screen — Leo had you.",
			},
		],
		stackKicker: "Stack",
		stackTitle: "Under the hood.",
		stackItems: [
			{ label: "Flutter", detail: "iOS + Android, single codebase." },
			{ label: "100% offline", detail: "No server, no account, nothing collected." },
			{ label: "One purchase", detail: "StoreKit and Play Billing directly, no middleman." },
			{ label: "Checked content", detail: "Two sources per card, adversarial review." },
			{ label: "Ink & paper", detail: "Bitter + Public Sans, 13 hi-fi screens." },
			{ label: "Native FR / EN", detail: "Decks written in each language, not translated." },
		],
		statusChip: "Available",
		statusTitle: "Status",
		statusBody:
			"Bluffo has been on the App Store since September 2026. Next step: the Android version on the Play Store.",
		linksTitle: "Learn more",
		viewLegal: "Terms of use",
		viewPrivacy: "Privacy",
		viewSupport: "Bluffo support",
		backToKyks: "Back to kyks.io",
		download: {
			kicker: "Download",
			title: "One phone. One table. One liar.",
			body: "Available on iPhone. Android coming soon.",
			appleOverline: "Download on the",
			appleLabel: "App Store",
			playOverline: "Get it on",
			playLabel: "Google Play",
			soon: "Coming soon",
		},
		credits: "Design, code and product direction by Kylian Titren for KYKS.",
	},
};

const INK = "#14120e";
const INK_DEEP = "#0f0d0a";
const SURFACE = "#1b1813";
const SURFACE_ALT = "#201c16";
const PAPER = "#f2ece0";
const MUTED = "rgba(242,236,224,0.72)";
const SUBTLE = "rgba(242,236,224,0.5)";
const DIVIDER = "rgba(242,236,224,0.12)";
const VERMILION = "#c3341c";
const BRASS = "#c98b2e";
const RED_TEXT = "#e08a72";

function AppleLogo({ size = 22 }: { size?: number }) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="currentColor"
			aria-hidden="true"
			role="img"
		>
			<path d="M17.564 13.02c-.026-2.65 2.163-3.919 2.262-3.98-1.232-1.801-3.15-2.048-3.834-2.079-1.634-.165-3.19.962-4.02.962-.833 0-2.108-.937-3.464-.912-1.783.026-3.428 1.037-4.348 2.633-1.855 3.213-.474 7.968 1.334 10.578.88 1.28 1.93 2.716 3.303 2.665 1.327-.053 1.826-.86 3.43-.86 1.605 0 2.055.86 3.457.833 1.427-.026 2.331-1.302 3.204-2.585 1.008-1.484 1.423-2.923 1.447-2.998-.031-.014-2.773-1.065-2.798-4.203M14.968 5.297C15.7 4.41 16.19 3.19 16.056 1.98c-1.038.041-2.293.688-3.05 1.575-.68.786-1.273 2.038-1.114 3.223 1.157.09 2.34-.588 3.076-1.482" />
		</svg>
	);
}

function GooglePlayLogo({ size = 22 }: { size?: number }) {
	return (
		<svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" role="img">
			<path
				d="M3.609 1.814L13.792 12 3.61 22.186a1.5 1.5 0 01-.61-1.21V3.024c0-.478.234-.9.61-1.21z"
				fill="#00C3FF"
			/>
			<path
				d="M16.807 8.917l-2.518 2.518L4.243 1.39a1.5 1.5 0 01.746.199l11.818 7.328z"
				fill="#00E676"
			/>
			<path
				d="M20.16 10.995a1.5 1.5 0 010 2.61l-3.354 2.077-2.517-2.517 2.517-2.518 3.354 2.348z"
				fill="#FFC107"
			/>
			<path
				d="M16.807 15.083L4.99 22.41a1.5 1.5 0 01-.747.2l10.046-10.045 2.518 2.518z"
				fill="#FF3D00"
			/>
		</svg>
	);
}

function BluffoMark({ size = 96 }: { size?: number }) {
	return (
		<Image
			src="/bluffo/app-icon.png"
			alt="Icône de l'app Bluffo : un B raturé d'une barre rouge"
			width={size}
			height={size}
			priority
			className="rounded-[22%] drop-shadow-[0_20px_50px_rgba(195,52,28,0.35)]"
			style={{ width: size, height: size }}
		/>
	);
}

function StoreBadge({
	kind,
	overline,
	label,
	soon,
	href,
}: {
	kind: "apple" | "play";
	overline: string;
	label: string;
	/** Pastille « Bientôt » — attendue quand le badge n'a pas de `href`. */
	soon?: string;
	/** Fourni quand le store est ouvert : le badge devient un lien. */
	href?: string;
}) {
	const logo = kind === "apple" ? <AppleLogo size={28} /> : <GooglePlayLogo size={28} />;

	if (href) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noreferrer noopener"
				className="group inline-flex flex-1 items-center gap-3 rounded-[4px] px-5 py-3 transition-transform hover:-translate-y-0.5"
				style={{ background: PAPER, color: INK }}
				aria-label={`${overline} ${label}`}
			>
				{logo}
				<span className="flex flex-col leading-tight">
					<span
						className="text-[10px] font-medium uppercase tracking-[0.16em]"
						style={{ color: `${INK}CC` }}
					>
						{overline}
					</span>
					<span className="text-xl font-bold tracking-[-0.01em]">{label}</span>
				</span>
			</a>
		);
	}

	return (
		<div
			className="relative inline-flex flex-1 cursor-not-allowed items-center gap-3 rounded-[4px] border px-5 py-3"
			style={{ borderColor: DIVIDER, background: SURFACE_ALT, color: MUTED, opacity: 0.75 }}
			aria-disabled="true"
			aria-label={`${label} — ${soon}`}
		>
			{logo}
			<span className="flex flex-col leading-tight">
				<span
					className="text-[10px] font-medium uppercase tracking-[0.16em]"
					style={{ color: SUBTLE }}
				>
					{overline}
				</span>
				<span className="text-xl font-bold tracking-[-0.01em]" style={{ color: PAPER }}>
					{label}
				</span>
			</span>
			<span
				className="absolute -top-2 right-3 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em]"
				style={{ background: VERMILION, color: PAPER }}
			>
				{soon}
			</span>
		</div>
	);
}

function ArrowLink({ href, label }: { href: string; label: string }) {
	return (
		<Link
			href={href}
			className="group flex items-center justify-between py-4 text-base"
			style={{ color: PAPER }}
		>
			<span>{label}</span>
			<span
				aria-hidden
				className="transition-transform group-hover:translate-x-1"
				style={{ color: BRASS }}
			>
				→
			</span>
		</Link>
	);
}

export default async function BluffoProjectPage({
	params,
}: {
	params: Promise<{ locale: Locale }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = COPY[locale];
	const legalPath = `/${locale}/bluffo/regles`;
	const privacyPath = `/${locale}/bluffo/confidentialite`;
	const supportPath = `/${locale}/bluffo/support`;

	return (
		<div
			className={`${bitter.variable} ${publicSans.variable} relative isolate min-h-screen overflow-hidden antialiased`}
			style={{
				background: INK,
				color: PAPER,
				fontFamily: "var(--font-bluffo-sans), system-ui, sans-serif",
			}}
		>
			<div
				aria-hidden
				className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full blur-3xl"
				style={{ background: `radial-gradient(closest-side, ${VERMILION}33, transparent)` }}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute left-0 right-0 top-0 h-px"
				style={{ background: `linear-gradient(90deg, transparent, ${BRASS}88, transparent)` }}
			/>

			{/* HERO */}
			<section className="relative mx-auto max-w-6xl px-6 pb-16 pt-20 md:px-10 md:pt-28">
				<div
					className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em]"
					style={{ color: BRASS }}
				>
					<span
						className="inline-flex h-6 items-center rounded-full px-3"
						style={{ background: `${BRASS}22`, color: BRASS }}
					>
						{t.badge}
					</span>
				</div>

				<div className="mt-10 grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
					<div>
						<h1
							className="text-[clamp(3.5rem,10vw,8.5rem)] font-bold leading-[0.9] tracking-[-0.04em]"
							style={{ fontFamily: "var(--font-bluffo-display), Georgia, serif" }}
						>
							Bluffo
							<span style={{ color: VERMILION }}>.</span>
						</h1>
						<p
							className="mt-6 max-w-2xl text-[clamp(1.5rem,3vw,2.25rem)] italic leading-tight tracking-tight"
							style={{ fontFamily: "var(--font-bluffo-display), Georgia, serif", color: PAPER }}
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
					<BluffoMark size={140} />
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
							className="rounded-[4px] border p-6"
							style={{ borderColor: DIVIDER, background: SURFACE }}
						>
							<div
								className="text-xs font-semibold uppercase tracking-[0.2em]"
								style={{ color: BRASS }}
							>
								{p.title}
							</div>
							<p className="mt-3 text-base leading-relaxed" style={{ color: PAPER }}>
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
										style={{ color: i === 4 ? RED_TEXT : BRASS }}
									>
										{s.eyebrow}
									</div>
									<h2
										className="mt-4 text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[0.98] tracking-[-0.03em]"
										style={{ fontFamily: "var(--font-bluffo-display), Georgia, serif" }}
									>
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
										<span className="inline-block h-px w-8" style={{ background: VERMILION }} />
										{`0${i + 1} / 05`}
									</div>
								</div>
								<div className="relative">
									<div
										aria-hidden
										className="pointer-events-none absolute inset-0 rounded-[36px] blur-2xl"
										style={{
											background: `${VERMILION}1f`,
											transform: "translateY(20px) scale(0.92)",
										}}
									/>
									<div
										className="relative overflow-hidden rounded-[28px] border"
										style={{ borderColor: DIVIDER, background: INK_DEEP }}
									>
										<Image
											src={s.image}
											alt={s.alt}
											width={1290}
											height={2796}
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
					<div>
						<div
							className="text-xs font-semibold uppercase tracking-[0.24em]"
							style={{ color: BRASS }}
						>
							{t.stackKicker}
						</div>
						<h2
							className="mt-4 text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[0.98] tracking-[-0.03em]"
							style={{ fontFamily: "var(--font-bluffo-display), Georgia, serif" }}
						>
							{t.stackTitle}
						</h2>
					</div>

					<ul
						className="mt-12 grid gap-px overflow-hidden rounded-[4px] border md:grid-cols-3"
						style={{ borderColor: DIVIDER, background: DIVIDER }}
					>
						{t.stackItems.map((item) => (
							<li key={item.label} className="p-6 md:p-7" style={{ background: SURFACE_ALT }}>
								<div
									className="text-lg font-bold"
									style={{ color: PAPER, fontFamily: "var(--font-bluffo-display), Georgia, serif" }}
								>
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
							style={{ background: `${BRASS}22`, color: BRASS }}
						>
							<span
								className="inline-block h-2 w-2 rounded-full"
								style={{ background: BRASS, boxShadow: `0 0 0 4px ${BRASS}33` }}
							/>
							{t.statusChip}
						</div>
						<h2
							className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[0.98] tracking-[-0.03em]"
							style={{ fontFamily: "var(--font-bluffo-display), Georgia, serif" }}
						>
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
						className="rounded-[4px] border p-6 md:p-8"
						style={{ borderColor: DIVIDER, background: SURFACE }}
					>
						<div
							className="text-xs font-semibold uppercase tracking-[0.24em]"
							style={{ color: BRASS }}
						>
							{t.linksTitle}
						</div>
						<ul className="mt-6 flex flex-col">
							<li>
								<ArrowLink href={legalPath} label={t.viewLegal} />
							</li>
							<li style={{ borderTop: `1px solid ${DIVIDER}` }}>
								<ArrowLink href={privacyPath} label={t.viewPrivacy} />
							</li>
							<li style={{ borderTop: `1px solid ${DIVIDER}` }}>
								<ArrowLink href={supportPath} label={t.viewSupport} />
							</li>
							<li style={{ borderTop: `1px solid ${DIVIDER}` }}>
								<ArrowLink href={`/${locale}`} label={t.backToKyks} />
							</li>
						</ul>
					</div>
				</div>

				{/* DOWNLOAD BADGES */}
				<div
					id="download"
					className="mt-24 scroll-mt-24 rounded-[6px] border p-8 md:p-12"
					style={{ borderColor: DIVIDER, background: SURFACE }}
				>
					<div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-16">
						<div>
							<div
								className="text-xs font-semibold uppercase tracking-[0.24em]"
								style={{ color: BRASS }}
							>
								{t.download.kicker}
							</div>
							<h2
								className="mt-4 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.02] tracking-[-0.03em]"
								style={{ fontFamily: "var(--font-bluffo-display), Georgia, serif" }}
							>
								{t.download.title}
							</h2>
							<p className="mt-4 max-w-md text-base leading-relaxed" style={{ color: MUTED }}>
								{t.download.body}
							</p>
						</div>

						<div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-stretch">
							<StoreBadge
								kind="apple"
								overline={t.download.appleOverline}
								label={t.download.appleLabel}
								href={APP_STORE_URL}
							/>
							<StoreBadge
								kind="play"
								overline={t.download.playOverline}
								label={t.download.playLabel}
								soon={t.download.soon}
							/>
						</div>
					</div>
				</div>

				<p className="mt-20 text-xs uppercase tracking-[0.24em]" style={{ color: SUBTLE }}>
					{t.credits}
				</p>
			</section>
		</div>
	);
}
