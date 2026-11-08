import type { Locale } from "@/i18n/routing";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Big_Shoulders, Space_Grotesk } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const bigShoulders = Big_Shoulders({
	subsets: ["latin"],
	weight: ["700", "800"],
	variable: "--font-kadran-digits",
	display: "swap",
});

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	weight: ["500", "700"],
	variable: "--font-kadran-title",
	display: "swap",
});

export async function generateMetadata({
	params,
}: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
	const { locale } = await params;
	const isEn = locale === "en";
	return {
		title: isEn ? "Kadran — Widgets, your way" : "Kadran — Des widgets à votre image",
		description: isEn
			? "Kadran, native iPhone widgets that are beautiful for everyone and open to tinkerers. A KYKS project."
			: "Kadran, des widgets iPhone natifs, beaux pour tout le monde et ouverts aux bidouilleurs. Un projet KYKS.",
		robots: { index: false, follow: false, noarchive: true, nosnippet: true },
		alternates: { canonical: null },
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
	viewPrivacy: string;
	viewSupport: string;
	backToKyks: string;
	iconAlt: string;
	credits: string;
};

const COPY: Record<Locale, Copy> = {
	fr: {
		badge: "Un projet KYKS · 2026",
		tagline: "Des widgets à votre image.",
		claim:
			"Des widgets iPhone natifs, beaux pour tout le monde et ouverts aux bidouilleurs. Sans compte, sans serveur, sans publicité.",
		intro:
			"Choisissez un modèle, changez deux couleurs, c'est prêt. Ou branchez vos propres données : une API, un raccourci, quelques lignes de JavaScript. L'aperçu dans l'app est exactement le widget de votre écran d'accueil.",
		pillars: [
			{
				title: "Beau",
				body: "Grands chiffres, verre, fonds pleins ou nuit : une vraie direction artistique, pas un catalogue de gabarits.",
			},
			{
				title: "Ouvert",
				body: "API JSON, Raccourcis, liens kadran:// et scripts : vos données, sur votre écran d'accueil.",
			},
			{
				title: "Natif",
				body: "SwiftUI et WidgetKit : l'heure exacte, la météo d'Apple, et aucun nom sous vos widgets.",
			},
		],
		storyboards: [
			{
				eyebrow: "Vos widgets",
				title: "Tout votre écran, en un coup d'œil.",
				body: "Agenda, horloge, compte à rebours, météo, vos propres chiffres : chaque widget s'affiche en direct, tel qu'il apparaîtra sur votre écran d'accueil.",
				image: "/kadran/fr/screen-1.png",
				alt: "Accueil de Kadran — Mes widgets : Agenda, Étoiles Swift et Horloge en aperçu vivant.",
			},
			{
				eyebrow: "La galerie",
				title: "Un modèle, et c'est prêt.",
				body: "Horloge, Météo, Agenda, Ma voiture, Compte à rebours, Note, Mes données, Script : chaque modèle se montre avec de vraies données avant même d'être ajouté.",
				image: "/kadran/fr/screen-2.png",
				alt: "Galerie de Kadran : modèles Horloge, Météo et Agenda en aperçu.",
			},
			{
				eyebrow: "Vos données",
				title: "Sans serveur, sans compte.",
				body: "La météo d'Apple pour la ville de votre choix, votre calendrier lu sur l'iPhone, une API ou un script qui renvoie vos chiffres : tout part de votre iPhone, rien ne passe par nous.",
				image: "/kadran/fr/screen-3.png",
				alt: "Liste des widgets de Kadran : Horloge, compte à rebours Lisbonne et Météo Paris.",
			},
			{
				eyebrow: "L'éditeur",
				title: "Vous changez, il suit.",
				body: "Le nom, le texte, la date : l'aperçu se met à jour à chaque frappe, dans chaque taille. Les modèles évoluent, vos widgets aussi.",
				image: "/kadran/fr/screen-4.png",
				alt: "Éditeur de Kadran : compte à rebours Lisbonne, 23 jours, avec son contenu.",
			},
			{
				eyebrow: "Le style",
				title: "Uni, teinté, verre ou nuit.",
				body: "Cinq couleurs de la marque, six polices dont une étroite, une à empattements et une manuscrite, et Kadran veille à ce que vos chiffres restent lisibles.",
				image: "/kadran/fr/screen-5.png",
				alt: "Réglages de style de Kadran : fonds, accent, polices et couleur du texte.",
			},
		],
		stackKicker: "Stack",
		stackTitle: "Sous le capot.",
		stackItems: [
			{
				label: "SwiftUI + WidgetKit",
				detail: "Un seul moteur de rendu pour l'app et les widgets.",
			},
			{ label: "App Intents", detail: "Raccourcis, choix du widget, liens kadran://." },
			{ label: "WeatherKit", detail: "La météo d'Apple, mise en cache sur l'iPhone." },
			{ label: "JavaScriptCore", detail: "Vos scripts, isolés, exécutés sur l'appareil." },
			{ label: "StoreKit 2", detail: "Kadran Pro vérifié sur l'appareil, sans compte." },
			{ label: "FR / EN", detail: "Polices libres embarquées, dont Big Shoulders." },
		],
		statusChip: "Bientôt",
		statusTitle: "Statut",
		statusBody:
			"Kadran arrive sur l'App Store pour iPhone. Gratuit avec 3 widgets ; Kadran Pro débloque le reste.",
		linksTitle: "En savoir plus",
		viewPrivacy: "Confidentialité",
		viewSupport: "Support Kadran",
		backToKyks: "Retour sur kyks.io",
		iconAlt: "Icône de l'app Kadran : un K sur une plaque de verre devant des dunes",
		credits: "Design, code et direction produit : Kylian Titren pour KYKS.",
	},
	en: {
		badge: "A KYKS project · 2026",
		tagline: "Widgets, your way.",
		claim:
			"Native iPhone widgets, beautiful for everyone and open to tinkerers. No account, no server, no ads.",
		intro:
			"Pick a template, change two colours, done. Or plug in your own data: an API, a shortcut, a few lines of JavaScript. The preview in the app is exactly the widget on your Home Screen.",
		pillars: [
			{
				title: "Beautiful",
				body: "Big digits, glass, solid or night backgrounds: a real art direction, not a catalogue of templates.",
			},
			{
				title: "Open",
				body: "JSON APIs, Shortcuts, kadran:// links and scripts: your data, on your Home Screen.",
			},
			{
				title: "Native",
				body: "SwiftUI and WidgetKit: exact time, Apple weather, and no name under your widgets.",
			},
		],
		storyboards: [
			{
				eyebrow: "Your widgets",
				title: "Your whole screen, at a glance.",
				body: "Agenda, clock, countdown, weather, your own numbers: each widget is shown live, exactly as it will appear on your Home Screen.",
				image: "/kadran/en/screen-1.png",
				alt: "Kadran home — My widgets: Agenda, Clock and Lisbon shown live.",
			},
			{
				eyebrow: "The gallery",
				title: "One template, and you're done.",
				body: "Clock, Weather, Agenda, My car, Countdown, Note, My data, Script: each template shows itself with real data before you even add it.",
				image: "/kadran/en/screen-2.png",
				alt: "Kadran gallery: Clock, Weather and Agenda templates in preview.",
			},
			{
				eyebrow: "Your data",
				title: "No server, no account.",
				body: "Apple weather for the city of your choice, your calendar read on the iPhone, an API or a script returning your numbers: everything starts from your iPhone, nothing goes through us.",
				image: "/kadran/en/screen-3.png",
				alt: "Kadran widget list: Lisbon countdown, Swift stars and Paris weather.",
			},
			{
				eyebrow: "The editor",
				title: "You change it, it follows.",
				body: "Name, text, date: the preview updates with every keystroke, in every size. Templates evolve, and so do your widgets.",
				image: "/kadran/en/screen-4.png",
				alt: "Kadran editor: Lisbon countdown, 23 days, with its content.",
			},
			{
				eyebrow: "The style",
				title: "Solid, tinted, glass or night.",
				body: "Five brand colours, six fonts including a condensed, a serif and a handwritten one, and Kadran keeps your digits readable.",
				image: "/kadran/en/screen-5.png",
				alt: "Kadran style settings: backgrounds, accent, fonts and text colour.",
			},
		],
		stackKicker: "Stack",
		stackTitle: "Under the hood.",
		stackItems: [
			{ label: "SwiftUI + WidgetKit", detail: "One rendering engine for the app and the widgets." },
			{ label: "App Intents", detail: "Shortcuts, widget selection, kadran:// links." },
			{ label: "WeatherKit", detail: "Apple weather, cached on the iPhone." },
			{ label: "JavaScriptCore", detail: "Your scripts, sandboxed, run on the device." },
			{ label: "StoreKit 2", detail: "Kadran Pro checked on the device, no account." },
			{ label: "FR / EN", detail: "Embedded open fonts, including Big Shoulders." },
		],
		statusChip: "Coming soon",
		statusTitle: "Status",
		statusBody:
			"Kadran is coming to the App Store for iPhone. Free with 3 widgets; Kadran Pro unlocks the rest.",
		linksTitle: "Learn more",
		viewPrivacy: "Privacy",
		viewSupport: "Kadran support",
		backToKyks: "Back to kyks.io",
		iconAlt: "Kadran app icon: a K on a glass plate in front of dunes",
		credits: "Design, code and product direction by Kylian Titren for KYKS.",
	},
};

// DA « verre sable » de l'app (Packages/KadranDesign/Palette.swift).
const SAND = "#EEE6DE";
const INK = "#1C1C1E";
const DUNE = "#C98B63";
const AMBER = "#F2BE5C";
const SKY = "#7FA8DC";
const SAGE = "#93CFA0";
const GLASS = "rgba(255, 255, 255, 0.55)";
const MUTED = "rgba(28, 28, 30, 0.62)";
const DIVIDER = "rgba(28, 28, 30, 0.1)";
/** Couleurs vives réservées aux accents, comme dans l'app. */
const ACCENTS = [DUNE, SKY, SAGE];
const DIGITS = "var(--font-kadran-digits), system-ui, sans-serif";
const TITLE = "var(--font-kadran-title), system-ui, sans-serif";

function ArrowLink({ href, label }: { href: string; label: string }) {
	return (
		<Link
			href={href}
			className="group flex items-center justify-between py-4 text-base"
			style={{ color: INK }}
		>
			<span>{label}</span>
			<span
				aria-hidden
				className="transition-transform group-hover:translate-x-1"
				style={{ color: DUNE }}
			>
				→
			</span>
		</Link>
	);
}

export default async function KadranProjectPage({
	params,
}: {
	params: Promise<{ locale: Locale }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = COPY[locale];

	return (
		<div
			className={`${bigShoulders.variable} ${spaceGrotesk.variable} relative isolate min-h-screen overflow-hidden antialiased`}
			style={{
				background: SAND,
				color: INK,
				fontFamily: "var(--font-sans), system-ui, sans-serif",
			}}
		>
			<div
				aria-hidden
				className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full blur-3xl"
				style={{ background: `radial-gradient(closest-side, ${AMBER}55, transparent)` }}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute -left-40 top-[620px] h-[520px] w-[520px] rounded-full blur-3xl"
				style={{ background: `radial-gradient(closest-side, ${DUNE}33, transparent)` }}
			/>

			{/* HERO */}
			<section className="relative mx-auto max-w-6xl px-6 pb-16 pt-20 md:px-10 md:pt-28">
				<span
					className="inline-flex h-6 items-center rounded-full px-3 text-xs font-bold uppercase tracking-[0.24em]"
					style={{ background: GLASS, color: MUTED, fontFamily: TITLE }}
				>
					{t.badge}
				</span>

				<div className="mt-10 grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
					<div>
						<h1
							className="text-[clamp(4.5rem,13vw,11rem)] font-extrabold uppercase leading-[0.82] tracking-[-0.01em]"
							style={{ fontFamily: DIGITS }}
						>
							Kadran
						</h1>
						<p
							className="mt-6 max-w-2xl text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-tight"
							style={{ fontFamily: TITLE }}
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
						src="/kadran/app-icon.png"
						alt={t.iconAlt}
						width={140}
						height={140}
						priority
						className="rounded-[22%] drop-shadow-[0_24px_50px_rgba(201,139,99,0.45)]"
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
							className="rounded-3xl border p-6 backdrop-blur-md"
							style={{ borderColor: "rgba(255,255,255,0.8)", background: GLASS }}
						>
							<div
								className="text-3xl font-extrabold uppercase tracking-[0.02em]"
								style={{ fontFamily: DIGITS, color: ACCENTS[i % 3] }}
							>
								{p.title}
							</div>
							<p className="mt-3 text-base leading-relaxed">{p.body}</p>
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
										className="text-xs font-bold uppercase tracking-[0.24em]"
										style={{ color: accent, fontFamily: TITLE }}
									>
										{s.eyebrow}
									</div>
									<h2
										className="mt-4 text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1] tracking-[-0.02em]"
										style={{ fontFamily: TITLE }}
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
								<div className="relative mx-auto w-full max-w-[400px]">
									<div
										aria-hidden
										className="pointer-events-none absolute inset-0 rounded-[40px] blur-2xl"
										style={{ background: `${accent}40`, transform: "translateY(24px) scale(0.92)" }}
									/>
									<div
										className="relative overflow-hidden rounded-[32px] border-[6px]"
										style={{ borderColor: "rgba(255,255,255,0.85)", background: SAND }}
									>
										<Image
											src={s.image}
											alt={s.alt}
											width={860}
											height={1870}
											className="h-auto w-full"
											sizes="(min-width: 768px) 400px, 100vw"
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
			<section
				className="relative border-y"
				style={{ borderColor: DIVIDER, background: INK, color: SAND }}
			>
				<div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
					<div
						className="text-xs font-bold uppercase tracking-[0.24em]"
						style={{ color: AMBER, fontFamily: TITLE }}
					>
						{t.stackKicker}
					</div>
					<h2
						className="mt-4 text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1] tracking-[-0.02em]"
						style={{ fontFamily: TITLE }}
					>
						{t.stackTitle}
					</h2>
					<ul
						className="mt-12 grid gap-px overflow-hidden rounded-3xl border md:grid-cols-3"
						style={{ borderColor: "rgba(238,230,222,0.12)", background: "rgba(238,230,222,0.12)" }}
					>
						{t.stackItems.map((item) => (
							<li key={item.label} className="p-6 md:p-7" style={{ background: INK }}>
								<div className="text-lg font-bold" style={{ fontFamily: TITLE }}>
									{item.label}
								</div>
								<div
									className="mt-2 text-sm leading-relaxed"
									style={{ color: "rgba(238,230,222,0.65)" }}
								>
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
							className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.2em]"
							style={{ background: `${SAGE}40`, color: INK, fontFamily: TITLE }}
						>
							<span
								className="inline-block h-2 w-2 rounded-full"
								style={{ background: SAGE, boxShadow: `0 0 0 4px ${SAGE}55` }}
							/>
							{t.statusChip}
						</div>
						<h2
							className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1] tracking-[-0.02em]"
							style={{ fontFamily: TITLE }}
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
						className="rounded-3xl border p-6 backdrop-blur-md md:p-8"
						style={{ borderColor: "rgba(255,255,255,0.8)", background: GLASS }}
					>
						<div
							className="text-xs font-bold uppercase tracking-[0.24em]"
							style={{ color: DUNE, fontFamily: TITLE }}
						>
							{t.linksTitle}
						</div>
						<ul className="mt-6 flex flex-col">
							<li>
								<ArrowLink href={`/${locale}/kadran/confidentialite`} label={t.viewPrivacy} />
							</li>
							<li style={{ borderTop: `1px solid ${DIVIDER}` }}>
								<ArrowLink href={`/${locale}/kadran/support`} label={t.viewSupport} />
							</li>
							<li style={{ borderTop: `1px solid ${DIVIDER}` }}>
								<ArrowLink href={`/${locale}`} label={t.backToKyks} />
							</li>
						</ul>
					</div>
				</div>

				<p className="mt-20 text-xs uppercase tracking-[0.24em]" style={{ color: MUTED }}>
					{t.credits}
				</p>
			</section>
		</div>
	);
}
