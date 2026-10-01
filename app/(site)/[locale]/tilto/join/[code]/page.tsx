import type { Locale } from "@/i18n/routing";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

const APP_STORE_ID = "6816926288";
const APP_STORE_URL = `https://apps.apple.com/app/id${APP_STORE_ID}`;
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.kyks.games.tilto";

type Params = Promise<{ locale: Locale; code: string }>;

/** Même règle que l'app (`DeepLinks._code`) : 4 caractères alphanumériques, casse ignorée. */
function parseCode(raw: string): string | null {
	const code = raw.trim().toUpperCase();
	return /^[A-Z0-9]{4}$/.test(code) ? code : null;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
	const { locale, code: raw } = await params;
	const isEn = locale === "en";
	const code = parseCode(raw);
	const title = code
		? isEn
			? `Join game ${code} · Tilto`
			: `Rejoindre la partie ${code} · Tilto`
		: isEn
			? "Tilto invitation"
			: "Invitation Tilto";
	return {
		title,
		description: isEn
			? "Join a game of Tilto, the party game where one clue is all you get."
			: "Rejoignez une partie de Tilto, le jeu d'ambiance où un seul indice suffit.",
		robots: { index: false, follow: false },
		// Bannière Safari : « Ouvrir » relance le lien d'invitation dans l'app.
		itunes: {
			appId: APP_STORE_ID,
			appArgument: code ? `https://kyks.io/tilto/join/${code}` : undefined,
		},
	};
}

/**
 * Atterrissage des liens d'invitation https://kyks.io/tilto/join/CODE quand
 * l'app n'est pas installée (sinon iOS et Android ouvrent l'app directement).
 */
export default async function TiltoJoinPage({ params }: { params: Params }) {
	const { locale, code: raw } = await params;
	setRequestLocale(locale);
	const isEn = locale === "en";
	const code = parseCode(raw);

	return (
		<section className="mx-auto max-w-2xl px-6 py-24 md:py-32">
			<p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">Tilto</p>
			{code ? (
				<>
					<h1 className="font-display text-4xl leading-tight text-text md:text-5xl">
						{isEn ? "Join game" : "Rejoindre la partie"}{" "}
						<span className="whitespace-nowrap font-mono tracking-[0.2em] text-accent">{code}</span>
					</h1>
					<p className="mt-4 text-lg text-text-muted">
						{isEn
							? `Someone invited you to a game of Tilto. If the app is installed, open it straight on this room; otherwise install it, then tap “Join” on the home screen and enter the code ${code}.`
							: `On vous invite à une partie de Tilto. Si l'application est installée, ouvrez-la directement sur ce salon ; sinon, installez-la, puis touchez « Rejoindre » sur l'accueil et saisissez le code ${code}.`}
					</p>
					<a
						href={`tilto://join/${code}`}
						className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-[var(--shadow-soft)] transition-colors hover:bg-accent-hover"
					>
						{isEn ? "Open in Tilto" : "Ouvrir dans Tilto"}
						<span aria-hidden>→</span>
					</a>
				</>
			) : (
				<>
					<h1 className="font-display text-4xl leading-tight text-text md:text-5xl">
						{isEn ? "Tilto invitation" : "Invitation Tilto"}
					</h1>
					<p className="mt-4 text-lg text-text-muted">
						{isEn
							? "This invite link isn't valid. Ask the host to send it again, or tap “Join” in Tilto and enter the 4-character code shown on their phone."
							: "Ce lien d'invitation n'est pas valide. Demandez à l'hôte de vous le renvoyer, ou touchez « Rejoindre » dans Tilto et saisissez le code à 4 caractères affiché sur son téléphone."}
					</p>
				</>
			)}

			<div className="mt-16 border-t border-border pt-8">
				<h2 className="font-display text-2xl text-text">
					{isEn ? "Don't have Tilto yet?" : "Pas encore Tilto ?"}
				</h2>
				<div className="mt-6 flex flex-wrap gap-3">
					<a
						href={APP_STORE_URL}
						className="inline-flex items-center rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-text transition-colors hover:bg-surface-alt"
					>
						App Store
					</a>
					<a
						href={PLAY_STORE_URL}
						className="inline-flex items-center rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-text transition-colors hover:bg-surface-alt"
					>
						Google Play
					</a>
				</div>
				<p className="mt-6 text-sm text-text-subtle">
					{isEn
						? "A room holds up to 12 players and accepts no one once the game has started."
						: "Un salon accueille jusqu'à 12 joueurs et n'accepte plus personne une fois la partie lancée."}
				</p>
			</div>
		</section>
	);
}
