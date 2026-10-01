import { LegalSection, LegalShell } from "@/components/legal/LegalShell";
import type { Locale } from "@/i18n/routing";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

const CONTACT_EMAIL = "hello@kyks.io";

export async function generateMetadata({
	params,
}: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
	const { locale } = await params;
	const isEn = locale === "en";
	return {
		title: "Support · Tilto",
		description: isEn
			? "Help and contact for the Tilto app (KYKS)."
			: "Aide et contact pour l'application Tilto (KYKS).",
		robots: { index: false, follow: false },
	};
}

/** Une entrée de FAQ ; `link` ajoute un lien interne en fin de réponse. */
type Faq = { q: string; a: string; link?: { path: string; label: string } };

const ACCOUNT_PATH = "tilto/compte";

const FAQ: Record<Locale, Faq[]> = {
	fr: [
		{
			q: "Comment rejoindre une partie ?",
			a: "Sur l'accueil, touchez « Rejoindre » et saisissez le code à 4 caractères affiché sur le téléphone de l'hôte, ou touchez « Scanner un QR code » et visez le QR code de son écran. Vous pouvez aussi ouvrir le lien d'invitation qu'il a partagé : si Tilto est installé, le lien ouvre l'application sur ce salon. Un salon accueille jusqu'à 12 joueurs et n'accepte plus personne une fois la partie lancée.",
		},
		{
			q: "Mes achats n'apparaissent pas.",
			a: "Touchez « Restaurer les achats », en bas de la Boutique ou dans votre Profil, avec le même compte Apple ou Google que celui de l'achat. Si un pack ou le Tilto Pass reste verrouillé, écrivez-nous avec le reçu Apple ou Google.",
		},
		{
			q: "Résilier le Tilto Pass ou demander un remboursement ?",
			a: "L'abonnement mensuel se renouvelle automatiquement : résiliez-le au moins 24 h avant la fin de la période en cours, dans les réglages de votre compte Apple (Réglages → votre nom → Abonnements) ou dans le Play Store (profil → Paiements et abonnements → Abonnements). Les remboursements sont traités par Apple (reportaproblem.apple.com) ou par Google Play ; nous n'avons pas accès à vos paiements.",
		},
		{
			q: "Je ne reçois pas les notifications.",
			a: "Pendant une partie en ligne, Tilto vous prévient quand la partie commence, quand c'est à vous de tilter ou de deviner, et à la fin de la partie, si vous l'avez autorisé : l'application le demande en entrant dans un salon en ligne. Vérifiez que Profil → Notifications est activé et que les notifications de Tilto sont autorisées dans les réglages du téléphone.",
		},
		{
			q: "Retrouver mon profil sur un autre téléphone ?",
			a: "Dans votre Profil, touchez « Continuer avec Apple » (iPhone) ou « Continuer avec Google », puis connectez-vous de la même façon sur l'autre téléphone : prénom, couleur d'aiguille et statistiques vous suivent.",
		},
		{
			q: "Supprimer mon compte ?",
			a: "Touchez votre avatar en haut à droite de l'accueil (Profil), puis « Supprimer mon compte » et « Confirmer la suppression ». L'effacement est immédiat et définitif ; il est refusé pendant une partie en ligne en cours. Tout est détaillé sur la page",
			link: { path: ACCOUNT_PATH, label: "Suppression de compte" },
		},
	],
	en: [
		{
			q: "How do I join a game?",
			a: "On the home screen, tap “Join” and enter the 4-character code shown on the host's phone, or tap “Scan a QR code” and point at the QR code on their screen. You can also open the invite link they shared: if Tilto is installed, the link opens the app on that room. A room holds up to 12 players and accepts no one once the game has started.",
		},
		{
			q: "My purchases don't show up.",
			a: "Tap “Restore purchases”, at the bottom of the Shop or in your Profile, signed in with the same Apple or Google account you bought with. If a pack or the Tilto Pass stays locked, write to us with your Apple or Google receipt.",
		},
		{
			q: "Cancel the Tilto Pass or ask for a refund?",
			a: "The monthly subscription renews automatically: cancel it at least 24 hours before the end of the current period, in your Apple account settings (Settings → your name → Subscriptions) or in the Play Store (profile → Payments & subscriptions → Subscriptions). Refunds are handled by Apple (reportaproblem.apple.com) or by Google Play; we have no access to your payments.",
		},
		{
			q: "I don't get notifications.",
			a: "During an online game, Tilto lets you know when the game starts, when it's your turn to tilt or to guess, and when the game ends, if you allowed it: the app asks when you enter an online room. Check that Profile → Notifications is on and that Tilto's notifications are allowed in your phone's settings.",
		},
		{
			q: "Get my profile back on another phone?",
			a: "In your Profile, tap “Continue with Apple” (iPhone) or “Continue with Google”, then sign in the same way on the other phone: your first name, needle colour and stats follow you.",
		},
		{
			q: "Delete my account?",
			a: "Tap your avatar at the top right of the home screen (Profile), then “Delete my account” and “Confirm deletion”. Erasure is immediate and permanent; it is refused during an ongoing online game. Everything is detailed on the",
			link: { path: ACCOUNT_PATH, label: "Account deletion" },
		},
	],
};

export default async function TiltoSupportPage({
	params,
}: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	setRequestLocale(locale);
	const isEn = locale === "en";
	const faq = FAQ[locale];

	return (
		<LegalShell
			brand="Tilto"
			title="Support"
			subtitle={
				isEn
					? "A question, a bug, a needle that just won't land? We're here."
					: "Une question, un bug, une aiguille qui ne tombe jamais juste ? On est là."
			}
			lastUpdated={isEn ? "September 29, 2026" : "29 septembre 2026"}
			lastUpdatedLabel={isEn ? "Last updated" : "Dernière mise à jour"}
		>
			<LegalSection heading={isEn ? "Contact us" : "Nous contacter"}>
				<p>
					{isEn
						? "For any question, bug or suggestion about Tilto, write to "
						: "Pour toute question, bug ou suggestion concernant Tilto, écrivez-nous à "}
					<a className="text-accent hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
						{CONTACT_EMAIL}
					</a>
					{isEn
						? ". We usually reply within 48 working hours. Tell us your phone model and, if the problem happened during an online game, the room code: it helps us find what went wrong."
						: ". Nous répondons généralement sous 48 h ouvrées. Indiquez-nous votre modèle de téléphone et, si le problème est survenu pendant une partie en ligne, le code du salon : cela nous aide à retrouver ce qui s'est passé."}
				</p>
			</LegalSection>

			<LegalSection heading={isEn ? "Frequently asked questions" : "Questions fréquentes"}>
				<ul className="flex list-disc flex-col gap-3 pl-5">
					{faq.map((item) => (
						<li key={item.q}>
							<strong>{item.q}</strong> {item.a}
							{item.link ? (
								<>
									{" "}
									<a className="text-accent hover:underline" href={`/${locale}/${item.link.path}`}>
										{item.link.label}
									</a>
									.
								</>
							) : null}
						</li>
					))}
				</ul>
			</LegalSection>

			<LegalSection heading={isEn ? "Legal pages" : "Pages légales"}>
				<p>
					<a className="text-accent hover:underline" href={`/${locale}/tilto/conditions`}>
						{isEn ? "Terms of use" : "Conditions d'utilisation"}
					</a>
					{" · "}
					<a className="text-accent hover:underline" href={`/${locale}/tilto/confidentialite`}>
						{isEn ? "Privacy policy" : "Politique de confidentialité"}
					</a>
					{" · "}
					<a className="text-accent hover:underline" href={`/${locale}/${ACCOUNT_PATH}`}>
						{isEn ? "Account deletion" : "Suppression de compte"}
					</a>
				</p>
			</LegalSection>
		</LegalShell>
	);
}
