import type { Locale } from "@/i18n/routing";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Lilita_One, Nunito } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const lilita = Lilita_One({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-tilto-display",
	display: "swap",
});

const nunito = Nunito({
	subsets: ["latin"],
	variable: "--font-tilto-sans",
	display: "swap",
});

const APP_STORE_ID = "6816926288";
const APP_STORE_URL = `https://apps.apple.com/app/id${APP_STORE_ID}`;
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.kyks.games.tilto";

export async function generateMetadata({
	params,
}: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
	const { locale } = await params;
	const isEn = locale === "en";
	return {
		title: isEn ? "Tilto — Where's the needle?" : "Tilto — Où est l'aiguille ?",
		description: isEn
			? "Tilto, the party game where you read minds with a single clue. A KYKS project."
			: "Tilto, le party game où il faut lire dans les pensées avec un seul indice. Un projet KYKS.",
		robots: { index: false, follow: false, noarchive: true, nosnippet: true },
		alternates: { canonical: null },
		itunes: {
			appId: APP_STORE_ID,
			appArgument: "https://kyks.io/project/tilto",
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
	};
	iconAlt: string;
	credits: string;
};

const COPY: Record<Locale, Copy> = {
	fr: {
		badge: "Un projet KYKS · 2026",
		tagline: "Pensez pareil, marquez gros !",
		claim: "Le party game où il faut lire dans les pensées… avec un seul indice.",
		intro:
			"Chaque manche, une carte propose deux extrêmes. Le Tilteur voit en secret une cible cachée sur le cadran et n'a droit qu'à un seul indice. Les autres discutent, argumentent, puis penchent l'aiguille au doigt. Révélation : 4, 3 ou 2 points selon la précision.",
		pillars: [
			{
				title: "Une carte",
				body: "Deux extrêmes : Froid ↔ Chaud, Salé ↔ Sucré, Has-been ↔ Tendance…",
			},
			{
				title: "Un indice",
				body: "Le Tilteur voit la cible en secret. Un mot, un nom, une idée : un seul.",
			},
			{
				title: "Une aiguille",
				body: "Les autres débattent, puis la penchent au doigt. Dans le mille : 4 points.",
			},
		],
		storyboards: [
			{
				eyebrow: "Party game",
				title: "Qui pense comme toi ?",
				body: "Sur un seul téléphone qu'on se passe, ou chacun sur le sien : l'hôte crée la partie, les autres la rejoignent avec un code ou un QR code. De 2 à 12 joueurs, des parties de 15 à 30 minutes.",
				image: "/tilto/fr/screen-1.png",
				alt: "Accueil de Tilto — On joue à quoi ce soir ? Jouer sur 1 téléphone, Créer une partie, Rejoindre.",
			},
			{
				eyebrow: "Le Tilteur",
				title: "Un seul indice pour viser la cible.",
				body: "Une carte, deux extrêmes : Vieux ↔ Neuf. Le Tilteur est le seul à voir où se cache la cible sur le cadran. Un mot, un nom, une idée : un seul indice, pas de chiffres, pas de gestes.",
				image: "/tilto/fr/screen-2.png",
				alt: "Écran du Tilteur dans Tilto — Léa voit la cible entre Vieux et Neuf et écrit son indice.",
			},
			{
				eyebrow: "Les autres",
				title: "Débattez. Penchez l'aiguille.",
				body: "« Un dimanche pluvieux » : plutôt vieux, ou plutôt neuf ? L'équipe argumente, puis penche l'aiguille au doigt, avec ou sans chrono, et la partie se met en pause à tout moment.",
				image: "/tilto/fr/screen-3.png",
				alt: "Écran de devinette dans Tilto — l'équipe Corail place l'aiguille sur l'indice « Un dimanche pluvieux ».",
			},
			{
				eyebrow: "Révélation",
				title: "Qui a visé juste ?",
				body: "La cible se dévoile sous l'aiguille : dans le mille, 4 points ; tout près, 3 ; pas loin, 2. Trois modes : Coop sur 7 cartes, Chacun pour soi jusqu'à 15, Équipes jusqu'à 10.",
				image: "/tilto/fr/screen-4.png",
				alt: "Écran de révélation dans Tilto — +3, presque parfait pour l'équipe Corail.",
			},
			{
				eyebrow: "1 téléphone ou en ligne",
				title: "Jusqu'à 12 joueurs.",
				body: "En ligne, chacun joue sur son téléphone : un code à 4 caractères, un QR code ou un lien à partager, et le salon se remplit. Pas d'inscription, et la cible n'arrive sur le téléphone des autres qu'à la révélation.",
				image: "/tilto/fr/screen-5.png",
				alt: "Salon en ligne de Tilto avec le code KZ7Q, son QR code et deux équipes, Corail et Lagon.",
			},
		],
		stackKicker: "Stack",
		stackTitle: "Sous le capot.",
		stackItems: [
			{ label: "Flutter", detail: "iOS + Android, un seul codebase." },
			{ label: "Cloud Functions", detail: "TypeScript, arbitre de chaque manche." },
			{ label: "Firestore", detail: "Salons en ligne en temps réel, hébergés en Europe." },
			{ label: "Cible secrète", detail: "Lue par le seul Tilteur jusqu'à la révélation." },
			{ label: "RevenueCat", detail: "Packs et Tilto Pass sur iOS et Android." },
			{ label: "FR / EN", detail: "200 cartes incluses dans chaque langue." },
		],
		statusChip: "Disponible",
		statusTitle: "Statut",
		statusBody:
			"Tilto est disponible sur l'App Store et le Play Store. Le jeu de base est gratuit.",
		linksTitle: "En savoir plus",
		viewLegal: "Conditions d'utilisation",
		viewPrivacy: "Confidentialité",
		viewSupport: "Support Tilto",
		backToKyks: "Retour sur kyks.io",
		download: {
			kicker: "Télécharger",
			title: "Un seul téléphone suffit pour commencer.",
			body: "Sur iPhone et Android.",
			appleOverline: "Télécharger sur",
			appleLabel: "App Store",
			playOverline: "Disponible sur",
			playLabel: "Google Play",
		},
		iconAlt: "Icône de l'app Tilto : une aiguille penchée surmontée d'un point rose",
		credits: "Design, code et direction produit : Kylian Titren pour KYKS.",
	},
	en: {
		badge: "A KYKS project · 2026",
		tagline: "Think alike, score big!",
		claim: "The party game where you read minds… with a single clue.",
		intro:
			"Each round, a card offers two extremes. The Tilter secretly sees a target hidden on the dial and may give only one clue. The others discuss, argue, then tilt the needle with a finger. Reveal: 4, 3 or 2 points depending on how close you got.",
		pillars: [
			{
				title: "One card",
				body: "Two extremes: Cold ↔ Hot, Salty ↔ Sweet, Dated ↔ Trendy…",
			},
			{
				title: "One clue",
				body: "The Tilter sees the target in secret. A word, a name, an idea: just one.",
			},
			{
				title: "One needle",
				body: "The others debate, then tilt it with a finger. Bullseye: 4 points.",
			},
		],
		storyboards: [
			{
				eyebrow: "Party game",
				title: "Who thinks like you?",
				body: "On one phone passed around, or each on your own: the host creates the game, the others join with a code or a QR code. 2 to 12 players, 15 to 30-minute games.",
				image: "/tilto/en/screen-1.png",
				alt: "Tilto home screen — What are we playing tonight? Play on 1 phone, Create a game, Join.",
			},
			{
				eyebrow: "The Tilter",
				title: "One clue to hit the target.",
				body: "One card, two extremes: Old ↔ Brand new. Only the Tilter sees where the target hides on the dial. A word, a name, an idea: a single clue, no numbers, no gestures.",
				image: "/tilto/en/screen-2.png",
				alt: "Tilter screen in Tilto — Léa sees the target between Old and Brand new and types her clue.",
			},
			{
				eyebrow: "The others",
				title: "Debate. Tilt the needle.",
				body: "“A rainy Sunday”: more old, or more brand new? The team argues, then tilts the needle with a finger, with or without a timer, and the game can be paused anytime.",
				image: "/tilto/en/screen-3.png",
				alt: "Guessing screen in Tilto — team Coral sets the needle for the clue “A rainy Sunday”.",
			},
			{
				eyebrow: "Reveal",
				title: "Who aimed true?",
				body: "The target appears under the needle: bullseye, 4 points; very close, 3; not far, 2. Three modes: Co-op over 7 cards, Free-for-all to 15, Teams to 10.",
				image: "/tilto/en/screen-4.png",
				alt: "Reveal screen in Tilto — +3, almost perfect for team Coral.",
			},
			{
				eyebrow: "1 phone or online",
				title: "Up to 12 players.",
				body: "Online, everyone plays on their own phone: a 4-character code, a QR code or a link to share, and the room fills up. No sign-up, and the target only reaches the others' phones at the reveal.",
				image: "/tilto/en/screen-5.png",
				alt: "Tilto online lobby with the code KZ7Q, its QR code and two teams, Coral and Lagoon.",
			},
		],
		stackKicker: "Stack",
		stackTitle: "Under the hood.",
		stackItems: [
			{ label: "Flutter", detail: "iOS + Android, single codebase." },
			{ label: "Cloud Functions", detail: "TypeScript, referee of every round." },
			{ label: "Firestore", detail: "Real-time online rooms, hosted in Europe." },
			{ label: "Secret target", detail: "Readable by the Tilter only until the reveal." },
			{ label: "RevenueCat", detail: "Packs and Tilto Pass on iOS and Android." },
			{ label: "FR / EN", detail: "200 cards included in each language." },
		],
		statusChip: "Available",
		statusTitle: "Status",
		statusBody: "Tilto is out on the App Store and Play Store. The base game is free.",
		linksTitle: "Learn more",
		viewLegal: "Terms of use",
		viewPrivacy: "Privacy",
		viewSupport: "Tilto support",
		backToKyks: "Back to kyks.io",
		download: {
			kicker: "Download",
			title: "One phone is all you need to start.",
			body: "On iPhone and Android.",
			appleOverline: "Download on the",
			appleLabel: "App Store",
			playOverline: "Get it on",
			playLabel: "Google Play",
		},
		iconAlt: "Tilto app icon: a tilted needle topped with a pink dot",
		credits: "Design, code and product direction by Kylian Titren for KYKS.",
	},
};

// DA « Miel » de l'app (app/lib/core/theme/tokens.dart), mode sombre.
const INK = "#120E1F";
const SURFACE = "#1E1830";
const SURFACE_ALT = "#241D38";
const CREAM = "#FFF6E9";
const MUTED = "#B7AECF";
const DIVIDER = "#2A2342";
const HONEY = "#FFC23D";
const PINK = "#FF3D7F";
const LAGOON = "#2FD9C4";
/** Les trois cartes de l'accueil : 1 téléphone, créer, rejoindre. */
const ACCENTS = [HONEY, PINK, LAGOON];
const DISPLAY = "var(--font-tilto-display), system-ui, sans-serif";

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
	href,
}: { kind: "apple" | "play"; overline: string; label: string; href: string }) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer noopener"
			className="inline-flex flex-1 items-center gap-3 rounded-2xl px-5 py-3 transition-transform hover:-translate-y-0.5"
			style={{ background: CREAM, color: INK }}
			aria-label={`${overline} ${label}`}
		>
			{kind === "apple" ? <AppleLogo size={28} /> : <GooglePlayLogo size={28} />}
			<span className="flex flex-col leading-tight">
				<span
					className="text-[10px] font-semibold uppercase tracking-[0.16em]"
					style={{ color: `${INK}CC` }}
				>
					{overline}
				</span>
				<span className="text-xl font-extrabold tracking-[-0.01em]">{label}</span>
			</span>
		</a>
	);
}

function ArrowLink({ href, label }: { href: string; label: string }) {
	return (
		<Link
			href={href}
			className="group flex items-center justify-between py-4 text-base"
			style={{ color: CREAM }}
		>
			<span>{label}</span>
			<span
				aria-hidden
				className="transition-transform group-hover:translate-x-1"
				style={{ color: HONEY }}
			>
				→
			</span>
		</Link>
	);
}

export default async function TiltoProjectPage({
	params,
}: {
	params: Promise<{ locale: Locale }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = COPY[locale];

	return (
		<div
			className={`${lilita.variable} ${nunito.variable} relative isolate min-h-screen overflow-hidden antialiased`}
			style={{
				background: INK,
				color: CREAM,
				fontFamily: "var(--font-tilto-sans), system-ui, sans-serif",
			}}
		>
			<div
				aria-hidden
				className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full blur-3xl"
				style={{ background: `radial-gradient(closest-side, ${HONEY}33, transparent)` }}
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
					style={{ background: `${HONEY}22`, color: HONEY }}
				>
					{t.badge}
				</span>

				<div className="mt-10 grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
					<div>
						<h1
							className="text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.9] tracking-[-0.02em]"
							style={{ fontFamily: DISPLAY }}
						>
							Tilto
							<span style={{ color: PINK }}>.</span>
						</h1>
						<p
							className="mt-6 max-w-2xl text-[clamp(1.5rem,3vw,2.25rem)] leading-tight"
							style={{ fontFamily: DISPLAY, color: HONEY }}
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
						src="/tilto/app-icon.png"
						alt={t.iconAlt}
						width={140}
						height={140}
						priority
						className="rounded-[22%] drop-shadow-[0_20px_50px_rgba(255,194,61,0.35)]"
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
								className="text-xl tracking-[0.02em]"
								style={{ fontFamily: DISPLAY, color: ACCENTS[i % 3] }}
							>
								{p.title}
							</div>
							<p className="mt-3 text-base leading-relaxed" style={{ color: CREAM }}>
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
						const accent = ACCENTS[i % 3];
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
										className="mt-4 text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.98] tracking-[-0.01em]"
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
											height={1861}
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
						style={{ color: HONEY }}
					>
						{t.stackKicker}
					</div>
					<h2
						className="mt-4 text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.98] tracking-[-0.01em]"
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
								<div className="text-lg font-extrabold" style={{ color: CREAM }}>
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
							style={{ background: `${LAGOON}22`, color: LAGOON }}
						>
							<span
								className="inline-block h-2 w-2 rounded-full"
								style={{ background: LAGOON, boxShadow: `0 0 0 4px ${LAGOON}33` }}
							/>
							{t.statusChip}
						</div>
						<h2
							className="mt-6 text-[clamp(2rem,4vw,3rem)] leading-[0.98] tracking-[-0.01em]"
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
							style={{ color: HONEY }}
						>
							{t.linksTitle}
						</div>
						<ul className="mt-6 flex flex-col">
							<li>
								<ArrowLink href={`/${locale}/tilto/conditions`} label={t.viewLegal} />
							</li>
							<li style={{ borderTop: `1px solid ${DIVIDER}` }}>
								<ArrowLink href={`/${locale}/tilto/confidentialite`} label={t.viewPrivacy} />
							</li>
							<li style={{ borderTop: `1px solid ${DIVIDER}` }}>
								<ArrowLink href={`/${locale}/tilto/support`} label={t.viewSupport} />
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
					className="mt-24 scroll-mt-24 rounded-[32px] border p-8 md:p-12"
					style={{ borderColor: DIVIDER, background: SURFACE }}
				>
					<div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-16">
						<div>
							<div
								className="text-xs font-extrabold uppercase tracking-[0.24em]"
								style={{ color: HONEY }}
							>
								{t.download.kicker}
							</div>
							<h2
								className="mt-4 text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.02] tracking-[-0.01em]"
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
								href={PLAY_STORE_URL}
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
