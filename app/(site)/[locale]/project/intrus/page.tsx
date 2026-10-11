import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Baloo_2, Nunito } from "next/font/google";
import Image from "next/image";

const baloo = Baloo_2({
	subsets: ["latin"],
	weight: "800",
	variable: "--font-intrus-display",
	display: "swap",
});

const nunito = Nunito({
	subsets: ["latin"],
	variable: "--font-intrus-sans",
	display: "swap",
});

const APP_STORE_ID = "6807782222";
const APP_STORE_URL = `https://apps.apple.com/app/id${APP_STORE_ID}`;

export async function generateMetadata({
	params,
}: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
	const { locale } = await params;
	const isEn = locale === "en";
	return {
		title: isEn ? "Intrus — Spot the Intruder" : "Intrus — Trouve le traître",
		description: isEn
			? "Intrus, the deduction game played for real, at home, with 4 to 13 players and one phone each. A KYKS project."
			: "Intrus, le jeu de déduction qui se joue en vrai, chez soi, de 4 à 13 joueurs avec un téléphone chacun. Un projet KYKS.",
		robots: { index: false, follow: false, noarchive: true, nosnippet: true },
		alternates: { canonical: null },
		itunes: {
			appId: APP_STORE_ID,
			appArgument: "https://kyks.io/project/intrus",
		},
	};
}

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
	viewSupport: string;
	viewPrivacy: string;
	viewAccount: string;
	viewLegalNotice: string;
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
	iconAlt: string;
	credits: string;
};

const COPY: Record<Locale, Copy> = {
	fr: {
		badge: "Un projet KYKS · 2026",
		tagline: "Le traître est dans la pièce d'à côté.",
		claim: "Le jeu de déduction qui se joue en vrai, chez toi, avec un téléphone chacun.",
		intro:
			"Ton appartement devient le terrain de jeu. Parmi vous se cache un intrus, et personne ne sait qui. De 4 à 13 joueurs, un téléphone chacun : le Bluetooth sait qui est près de qui. L'intrus doit être à portée de sa cible pour l'éliminer, et gare aux témoins. En fin de partie, la chronologie complète rejoue tout, jusqu'à l'instant exact où tu t'es fait avoir.",
		pillars: [
			{
				title: "Une maison",
				body: "L'hôte active les pièces jouables, chacune avec sa mission, et choisit le point de ralliement.",
			},
			{
				title: "Un traître",
				body: "L'intrus élimine à portée Bluetooth, loin des regards, et se fond dans le groupe.",
			},
			{
				title: "Un vote",
				body: "Un corps signalé ou une réunion d'urgence : tout le monde au ralliement pour débattre, accuser, voter.",
			},
		],
		storyboards: [
			{
				eyebrow: "Jeu de déduction",
				title: "Ton salon devient le terrain de jeu.",
				body: "Pas de plateau, pas de cartes. De 4 à 13 joueurs au même endroit, un téléphone chacun : l'hôte crée la partie et annonce le code, chacun rejoint depuis son téléphone.",
				image: "/intrus/fr/screen-1.png",
				alt: "Visuel d'Intrus — Ton salon devient le terrain de jeu : un robot salue dans une maison pendant que d'autres se cachent derrière les meubles.",
			},
			{
				eyebrow: "Ton rôle",
				title: "Un rôle. Un secret.",
				body: "Équipier ou intrus : colle l'écran contre toi, personne ne doit le voir. L'intrus a ses outils : éliminations à portée Bluetooth, black-out, brouillage, compte à rebours, et un temps de recharge qui laisse juste assez de temps pour s'inventer un alibi.",
				image: "/intrus/fr/screen-2.png",
				alt: "Écran de rôle d'Intrus — Camp des intrus : un robot aux yeux rouges et aux oreilles de chat, « Élimine à portée Bluetooth, loin des regards. »",
			},
			{
				eyebrow: "Les missions",
				title: "Une mission par pièce.",
				body: "L'hôte configure sa propre maison : salon, cuisine, garage, bureau… Tableau électrique, radio à rejouer, carafe à remplir, coffre-fort à ouvrir : il faut être dans la bonne pièce, souvent seul, donc vulnérable.",
				image: "/intrus/fr/screen-3.png",
				alt: "Écran des missions d'Intrus — tableau électrique au garage, radio au salon, carafe en cuisine, coffre-fort au bureau, et le mini-jeu de la radio.",
			},
			{
				eyebrow: "Réunion d'urgence",
				title: "Qui est l'intrus ?",
				body: "Signale un corps, ou déclenche une réunion d'urgence sur un simple soupçon. Tout le monde se retrouve au point de ralliement : on débat, on accuse, on vote, avant la fin du chrono.",
				image: "/intrus/fr/screen-4.png",
				alt: "Écran de vote d'Intrus — Marc a tiré la sonnette sur soupçon, six joueurs dont Sami éliminé, bouton « Voter Julie ».",
			},
			{
				eyebrow: "Ton robot",
				title: "Ton robot, ton style.",
				body: "Couleurs, accessoires et 11 expressions animées. Gagne des sonars en jouant et débloque de nouveaux looks. INTRUS+, facultatif, ajoute ses cosmétiques, 300 sonars chaque mois et +25 % d'XP et de sonars par partie.",
				image: "/intrus/fr/screen-5.png",
				alt: "Écran de personnalisation d'Intrus — trois robots (chapeau de fête, couronne, casque) et une grille d'accessoires et d'expressions.",
			},
		],
		stackKicker: "Stack",
		stackTitle: "Sous le capot.",
		stackItems: [
			{ label: "Flutter", detail: "iOS + Android, un seul codebase." },
			{
				label: "Bluetooth Low Energy",
				detail: "Un jeton temporaire par partie : qui est proche, jamais où.",
			},
			{
				label: "Cloud Functions",
				detail: "TypeScript, la logique de partie côté serveur, en europe-west1.",
			},
			{ label: "Firestore", detail: "Salons et parties en temps réel, hébergés en Europe." },
			{
				label: "Firebase Auth",
				detail: "Profil anonyme, Apple ou Google pour le retrouver ailleurs.",
			},
			{ label: "RevenueCat", detail: "INTRUS+ et packs de sonars." },
		],
		statusChip: "Disponible sur iPhone",
		statusTitle: "Statut",
		statusBody:
			"Intrus est disponible sur l'App Store pour iPhone. La version Android arrive bientôt sur Google Play. INTRUS+ reste facultatif.",
		linksTitle: "En savoir plus",
		viewSupport: "Support Intrus",
		viewPrivacy: "Confidentialité",
		viewAccount: "Suppression de compte",
		viewLegalNotice: "Mentions légales",
		backToKyks: "Retour sur kyks.io",
		download: {
			kicker: "Télécharger",
			title: "Un téléphone chacun. Un traître parmi vous.",
			body: "Sur iPhone dès maintenant, bientôt sur Android.",
			appleOverline: "Télécharger sur",
			appleLabel: "App Store",
			playOverline: "Android",
			playLabel: "Google Play",
			soon: "Bientôt",
		},
		iconAlt: "Icône de l'app Intrus : une visière violette, deux yeux lime tournés vers la droite",
		credits: "Design, code et direction produit : Kylian Titren pour KYKS.",
	},
	en: {
		badge: "A KYKS project · 2026",
		tagline: "The traitor is in the next room.",
		claim: "The deduction game played for real, at home, with one phone each.",
		intro:
			"Your home becomes the game board. An intruder is hiding among you, and nobody knows who. 4 to 13 players, one phone each: Bluetooth knows who is near whom. The intruder has to be within range of their target to strike, and witnesses are a risk. At the end, the full timeline replays everything, down to the exact second you got played.",
		pillars: [
			{
				title: "One house",
				body: "The host turns on the rooms in play, each with its own mission, and picks the rally point.",
			},
			{
				title: "One traitor",
				body: "The intruder eliminates within Bluetooth range, away from prying eyes, and blends into the group.",
			},
			{
				title: "One vote",
				body: "A reported body or an emergency meeting: everyone to the rally point to debate, accuse, vote.",
			},
		],
		storyboards: [
			{
				eyebrow: "Deduction game",
				title: "Your living room is the game board.",
				body: "No board, no cards. 4 to 13 players in the same place, one phone each: the host creates the game and announces the code, everyone joins from their own phone.",
				image: "/intrus/en/screen-1.png",
				alt: "Intrus key visual — Your living room is the game board: a robot waves inside a home while others hide behind the furniture.",
			},
			{
				eyebrow: "Your role",
				title: "One role. One secret.",
				body: "Crewmate or intruder: press the screen against you, nobody must see it. The intruder has tools: Bluetooth-range eliminations, blackouts, jamming, countdowns, plus a cooldown that leaves just enough time to build an alibi.",
				image: "/intrus/en/screen-2.png",
				alt: "Intrus role screen — Intruder side: a red-eyed robot with cat ears, “Eliminate within Bluetooth range, away from prying eyes.”",
			},
			{
				eyebrow: "Missions",
				title: "A mission in every room.",
				body: "The host maps their own home: living room, kitchen, garage, office… Fuse board, radio jingle, water pitcher, safe cracking: you have to be in the right room, usually alone, which means vulnerable.",
				image: "/intrus/en/screen-3.png",
				alt: "Intrus missions screen — fuse board in the garage, radio in the living room, pitcher in the kitchen, safe in the office, and the radio mini-game.",
			},
			{
				eyebrow: "Emergency meeting",
				title: "Who is the intruder?",
				body: "Report a body, or call an emergency meeting on a hunch. Everyone meets at the rally point: debate, accuse, vote, before the timer runs out.",
				image: "/intrus/en/screen-4.png",
				alt: "Intrus voting screen — Marc rang the alarm on suspicion, six players including Sami eliminated, “Vote Julie” button.",
			},
			{
				eyebrow: "Your robot",
				title: "Your robot, your style.",
				body: "Colours, accessories and 11 animated expressions. Earn sonars by playing and unlock new looks. The optional INTRUS+ adds its own cosmetics, 300 sonars every month and +25% XP and sonars per game.",
				image: "/intrus/en/screen-5.png",
				alt: "Intrus customisation screen — three robots (party hat, crown, headphones) and a grid of accessories and expressions.",
			},
		],
		stackKicker: "Stack",
		stackTitle: "Under the hood.",
		stackItems: [
			{ label: "Flutter", detail: "iOS + Android, single codebase." },
			{
				label: "Bluetooth Low Energy",
				detail: "A temporary token per game: who is near, never where.",
			},
			{ label: "Cloud Functions", detail: "TypeScript, server-side game logic, in europe-west1." },
			{ label: "Firestore", detail: "Real-time rooms and games, hosted in Europe." },
			{
				label: "Firebase Auth",
				detail: "Anonymous profile, Apple or Google to get it back elsewhere.",
			},
			{ label: "RevenueCat", detail: "INTRUS+ and sonar packs." },
		],
		statusChip: "Available on iPhone",
		statusTitle: "Status",
		statusBody:
			"Intrus is out on the App Store for iPhone. The Android version is coming soon to Google Play. INTRUS+ stays optional.",
		linksTitle: "Learn more",
		viewSupport: "Intrus support",
		viewPrivacy: "Privacy",
		viewAccount: "Account deletion",
		viewLegalNotice: "Legal notice",
		backToKyks: "Back to kyks.io",
		download: {
			kicker: "Download",
			title: "One phone each. One traitor among you.",
			body: "On iPhone now, coming soon to Android.",
			appleOverline: "Download on the",
			appleLabel: "App Store",
			playOverline: "Android",
			playLabel: "Google Play",
			soon: "Coming soon",
		},
		iconAlt: "Intrus app icon: a purple visor with two lime eyes glancing to the right",
		credits: "Design, code and product direction by Kylian Titren for KYKS.",
	},
};

// Palette des captures de l'app (fond nuit, violet, rose, lime).
const BG_TOP = "#0B0B24";
const BG_BOTTOM = "#1A1240";
const SURFACE = "#15123A";
const SURFACE_ALT = "#1B1747";
const TEXT = "#F4F2FF";
const MUTED = "#B8B2DC";
const DIVIDER = "#2B2660";
const VIOLET = "#6C4BFF";
/** Violet éclairci pour le petit texte : le #6C4BFF manque de contraste sur le fond nuit. */
const LAVENDER = "#B3A4FF";
const PINK = "#FF5C7A";
const LIME = "#C6F24E";
const PILLAR_ACCENTS = [LIME, PINK, LAVENDER];
/** Une couleur par capture, reprise du titre de l'écran. */
const STORY_ACCENTS = [LIME, PINK, LAVENDER, PINK, LIME];
const DISPLAY = "var(--font-intrus-display), system-ui, sans-serif";

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
				className="inline-flex flex-1 items-center gap-3 rounded-2xl px-5 py-3 transition-transform hover:-translate-y-0.5"
				style={{ background: TEXT, color: BG_TOP }}
				aria-label={`${overline} ${label}`}
			>
				{logo}
				<span className="flex flex-col leading-tight">
					<span
						className="text-[10px] font-semibold uppercase tracking-[0.16em]"
						style={{ color: `${BG_TOP}CC` }}
					>
						{overline}
					</span>
					<span className="text-xl font-extrabold tracking-[-0.01em]">{label}</span>
				</span>
			</a>
		);
	}

	return (
		<div
			className="relative inline-flex flex-1 cursor-not-allowed items-center gap-3 rounded-2xl border px-5 py-3"
			style={{ borderColor: DIVIDER, background: SURFACE_ALT, color: MUTED, opacity: 0.75 }}
			aria-disabled="true"
			aria-label={`${label} — ${soon}`}
		>
			{logo}
			<span className="flex flex-col leading-tight">
				<span
					className="text-[10px] font-semibold uppercase tracking-[0.16em]"
					style={{ color: MUTED }}
				>
					{overline}
				</span>
				<span className="text-xl font-extrabold tracking-[-0.01em]" style={{ color: TEXT }}>
					{label}
				</span>
			</span>
			<span
				className="absolute -top-2 right-3 rounded-full px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-[0.16em]"
				style={{ background: PINK, color: BG_TOP }}
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
			style={{ color: TEXT }}
		>
			<span>{label}</span>
			<span
				aria-hidden
				className="transition-transform group-hover:translate-x-1"
				style={{ color: LIME }}
			>
				→
			</span>
		</Link>
	);
}

export default async function IntrusProjectPage({
	params,
}: {
	params: Promise<{ locale: Locale }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = COPY[locale];

	return (
		<div
			className={`${baloo.variable} ${nunito.variable} relative isolate min-h-screen overflow-hidden antialiased`}
			style={{
				background: `linear-gradient(180deg, ${BG_TOP} 0%, ${BG_BOTTOM} 100%)`,
				color: TEXT,
				fontFamily: "var(--font-intrus-sans), system-ui, sans-serif",
			}}
		>
			<div
				aria-hidden
				className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full blur-3xl"
				style={{ background: `radial-gradient(closest-side, ${VIOLET}44, transparent)` }}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full blur-3xl"
				style={{ background: `radial-gradient(closest-side, ${PINK}22, transparent)` }}
			/>

			{/* HERO */}
			<section className="relative mx-auto max-w-6xl px-6 pb-16 pt-20 md:px-10 md:pt-28">
				<span
					className="inline-flex h-6 items-center rounded-full px-3 text-xs font-bold uppercase tracking-[0.24em]"
					style={{ background: `${LIME}1F`, color: LIME }}
				>
					{t.badge}
				</span>

				<div className="mt-10 grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
					<div>
						<h1
							className="text-[clamp(3.5rem,10vw,8.5rem)] font-extrabold leading-[0.9] tracking-[-0.02em]"
							style={{ fontFamily: DISPLAY }}
						>
							Intrus
							<span style={{ color: LIME }}>.</span>
						</h1>
						<p
							className="mt-6 max-w-2xl text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold leading-tight"
							style={{ fontFamily: DISPLAY, color: PINK }}
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
					<Image
						src="/intrus/app-icon.png"
						alt={t.iconAlt}
						width={140}
						height={140}
						priority
						className="rounded-[22%] drop-shadow-[0_20px_50px_rgba(108,75,255,0.45)]"
						style={{ width: 140, height: 140 }}
					/>
				</div>

				<div
					className="mt-14 h-px w-full"
					style={{ background: `linear-gradient(90deg, ${DIVIDER}, transparent)` }}
				/>

				<p className="mt-10 max-w-3xl text-lg leading-relaxed md:text-xl" style={{ color: MUTED }}>
					{t.intro}
				</p>

				<div className="mt-12 grid gap-4 md:grid-cols-3">
					{t.pillars.map((p, i) => (
						<div
							key={p.title}
							className="rounded-3xl border p-6"
							style={{ borderColor: DIVIDER, background: SURFACE }}
						>
							<div
								className="text-xl font-extrabold tracking-[0.01em]"
								style={{ fontFamily: DISPLAY, color: PILLAR_ACCENTS[i % 3] }}
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
						const accent = STORY_ACCENTS[i % STORY_ACCENTS.length];
						return (
							<article
								key={s.image}
								className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
									i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
								}`}
							>
								<div>
									<div
										className="text-xs font-extrabold uppercase tracking-[0.24em]"
										style={{ color: accent }}
									>
										{s.eyebrow}
									</div>
									<h2
										className="mt-4 text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[0.98] tracking-[-0.01em]"
										style={{ fontFamily: DISPLAY }}
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
										className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em]"
										style={{ color: MUTED }}
									>
										<span className="inline-block h-px w-8" style={{ background: accent }} />
										{`0${i + 1} / 05`}
									</div>
								</div>
								<div className="relative mx-auto w-full max-w-[420px]">
									<div
										aria-hidden
										className="pointer-events-none absolute inset-0 rounded-[36px] blur-2xl"
										style={{ background: `${accent}26`, transform: "translateY(20px) scale(0.92)" }}
									/>
									<div
										className="relative overflow-hidden rounded-[28px] border"
										style={{ borderColor: DIVIDER, background: SURFACE }}
									>
										<Image
											src={s.image}
											alt={s.alt}
											width={860}
											height={1864}
											className="h-auto w-full"
											sizes="(min-width: 768px) 420px, 100vw"
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
					<div
						className="text-xs font-extrabold uppercase tracking-[0.24em]"
						style={{ color: LIME }}
					>
						{t.stackKicker}
					</div>
					<h2
						className="mt-4 text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[0.98] tracking-[-0.01em]"
						style={{ fontFamily: DISPLAY }}
					>
						{t.stackTitle}
					</h2>

					<ul
						className="mt-12 grid gap-px overflow-hidden rounded-3xl border md:grid-cols-3"
						style={{ borderColor: DIVIDER, background: DIVIDER }}
					>
						{t.stackItems.map((item) => (
							<li key={item.label} className="p-6 md:p-7" style={{ background: SURFACE_ALT }}>
								<div className="text-lg font-extrabold" style={{ color: TEXT }}>
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
							className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-[0.2em]"
							style={{ background: `${LIME}1F`, color: LIME }}
						>
							<span
								className="inline-block h-2 w-2 rounded-full"
								style={{ background: LIME, boxShadow: `0 0 0 4px ${LIME}33` }}
							/>
							{t.statusChip}
						</div>
						<h2
							className="mt-6 text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[0.98] tracking-[-0.01em]"
							style={{ fontFamily: DISPLAY }}
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
						className="rounded-3xl border p-6 md:p-8"
						style={{ borderColor: DIVIDER, background: SURFACE }}
					>
						<div
							className="text-xs font-extrabold uppercase tracking-[0.24em]"
							style={{ color: LIME }}
						>
							{t.linksTitle}
						</div>
						<ul className="mt-6 flex flex-col">
							<li>
								<ArrowLink href="/intrus/support" label={t.viewSupport} />
							</li>
							<li style={{ borderTop: `1px solid ${DIVIDER}` }}>
								<ArrowLink href="/intrus/confidentialite" label={t.viewPrivacy} />
							</li>
							<li style={{ borderTop: `1px solid ${DIVIDER}` }}>
								<ArrowLink href="/intrus/compte" label={t.viewAccount} />
							</li>
							<li style={{ borderTop: `1px solid ${DIVIDER}` }}>
								<ArrowLink href="/mentions-legales" label={t.viewLegalNotice} />
							</li>
							<li style={{ borderTop: `1px solid ${DIVIDER}` }}>
								<ArrowLink href="/" label={t.backToKyks} />
							</li>
						</ul>
					</div>
				</div>

				{/* DOWNLOAD BADGES */}
				<div
					id="download"
					className="mt-24 scroll-mt-24 rounded-[32px] border p-8 md:p-12"
					style={{ borderColor: DIVIDER, background: SURFACE }}
				>
					<div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-16">
						<div>
							<div
								className="text-xs font-extrabold uppercase tracking-[0.24em]"
								style={{ color: LIME }}
							>
								{t.download.kicker}
							</div>
							<h2
								className="mt-4 text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-[1.02] tracking-[-0.01em]"
								style={{ fontFamily: DISPLAY }}
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

				<p className="mt-20 text-xs uppercase tracking-[0.24em]" style={{ color: MUTED }}>
					{t.credits}
				</p>
			</section>
		</div>
	);
}
