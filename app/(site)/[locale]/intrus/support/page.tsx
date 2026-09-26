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
		title: "Support · INTRUS",
		description: isEn
			? "Help and contact for the INTRUS app (KYKS)."
			: "Aide et contact pour l'application INTRUS (KYKS).",
		robots: { index: false, follow: false },
	};
}

/** Une entrée de FAQ ; `link` ajoute un lien interne en fin de réponse. */
type Faq = { q: string; a: string; link?: { path: string; label: string } };

const ACCOUNT_PATH = "intrus/compte";

const FAQ: Record<Locale, Faq[]> = {
	fr: [
		{
			q: "Comment rejoindre un salon ?",
			a: "L'hôte crée la partie, déclare les pièces de sa maison et ouvre un salon : un code à 4 caractères s'affiche sur son écran. Sur l'accueil, touchez « Rejoindre — j'ai un code », saisissez-le (ou collez-le, ou ouvrez le lien d'invitation partagé par l'hôte), choisissez votre pseudo et votre avatar. Un salon dont la partie a déjà commencé n'accepte plus de nouveaux joueurs.",
		},
		{
			q: "Combien de joueurs ?",
			a: "De 3 à 15 joueurs, tous au même endroit, chacun avec son téléphone. L'hôte règle le nombre d'imposteurs, le nombre de missions par joueur, la durée de la partie et les options avancées (réunions d'urgence, temps de débat et de vote, votes anonymes…).",
		},
		{
			q: "Faut-il le Bluetooth ?",
			a: "Oui, pour le radar et les éliminations : chaque téléphone émet un jeton temporaire propre à la partie et détecte les joueurs proches, sans jamais mesurer de distance précise ni de position. Activez le Bluetooth et accordez la permission à INTRUS dans les réglages du téléphone, et gardez l'application au premier plan pendant la partie. Sans Bluetooth, la partie continue en mode honneur : missions, réunions et votes fonctionnent, mais le radar et les éliminations Bluetooth sont indisponibles.",
		},
		{
			q: "Faut-il créer un compte ?",
			a: "Non. Au premier lancement, INTRUS crée un profil anonyme lié à ce téléphone : aucune adresse e-mail ni mot de passe. Pour retrouver votre progression (niveau, sonars, cosmétiques) sur un autre appareil ou après une réinstallation, ouvrez Profil → Compte → Continuer avec Apple, puis connectez-vous de la même façon ailleurs.",
		},
		{
			q: "Qu'est-ce qu'INTRUS+ et l'essai gratuit ?",
			a: "INTRUS+ est l'abonnement du jeu : cosmétiques exclusifs, +300 sonars offerts chaque mois, +25 % d'XP et de sonars par partie et badge INTRUS+ sur votre avatar. Trois formules dans la Boutique : 1,49 €/mois, 9,99 €/an ou 14,99 € une fois, à vie. Les formules mensuelle et annuelle commencent par 7 jours gratuits (une seule fois par compte) ; sans résiliation avant la fin de l'essai, l'abonnement démarre au tarif indiqué. Le paiement passe par Apple.",
		},
		{
			q: "Mon achat ou mon abonnement n'apparaît pas.",
			a: "Ouvrez Boutique → Restaurer les achats, avec le même compte Apple que celui de l'achat. Les sonars d'un pack sont crédités par notre serveur quelques secondes après la confirmation d'Apple ; si INTRUS+ ou vos sonars ne reviennent pas, écrivez-nous avec le reçu Apple.",
		},
		{
			q: "Résilier INTRUS+ ou demander un remboursement ?",
			a: "L'abonnement se gère dans les réglages de votre compte Apple (Réglages → votre nom → Abonnements) : la résiliation prend effet à la fin de la période en cours, et l'essai gratuit s'annule de la même façon. Les remboursements sont traités par Apple sur reportaproblem.apple.com ; nous n'avons pas accès à vos paiements.",
		},
		{
			q: "À quoi servent les sonars et les cosmétiques ?",
			a: "Les sonars sont la monnaie du jeu : vous en gagnez, avec de l'XP, à chaque fin de partie. Ils débloquent dans Mon avatar les accessoires et les yeux qui ne sont pas encore atteints par votre niveau ; chaque objet acheté reste à vous pour toujours. La Boutique propose aussi des packs de sonars pour ne pas attendre.",
		},
		{
			q: "Je ne reçois pas les notifications de partie.",
			a: "INTRUS ne prévient (début de partie, réunion convoquée, crise, fin de partie) que si vous avez accepté les notifications lorsque l'application vous l'a demandé. Vous pouvez les réactiver dans Réglages → Notifications → INTRUS.",
		},
		{
			q: "Supprimer mon compte ?",
			a: "Depuis l'application : Profil → Compte → Supprimer mon compte. L'effacement est immédiat et définitif. Tout est détaillé sur la page",
			link: { path: ACCOUNT_PATH, label: "Suppression de compte" },
		},
		{
			q: "Signaler un bug ?",
			a: "Écrivez-nous avec votre modèle de téléphone, la version d'iOS, votre pseudo et, si le problème est survenu pendant une partie, le code du salon et l'heure approximative : cela nous permet de retrouver la partie et de reproduire le souci.",
		},
	],
	en: [
		{
			q: "How do I join a room?",
			a: 'The host creates the game, lists the rooms of their house and opens a lobby: a 4-character code shows up on their screen. On the home screen, tap "Join — I have a code", type it in (or paste it, or open the invite link the host shared), then pick your nickname and avatar. A room whose game has already started no longer accepts new players.',
		},
		{
			q: "How many players?",
			a: "From 3 to 15 players, all in the same place, each with their own phone. The host sets the number of impostors, the number of missions per player, the game duration and the advanced options (emergency meetings, discussion and voting time, anonymous votes…).",
		},
		{
			q: "Is Bluetooth required?",
			a: "Yes, for the radar and for eliminations: every phone broadcasts a temporary token specific to the game and detects nearby players, without ever measuring a precise distance or a location. Turn Bluetooth on, grant INTRUS the permission in your phone's settings, and keep the app in the foreground during the game. Without Bluetooth the game carries on in honour mode: missions, meetings and votes keep working, but the radar and Bluetooth eliminations are unavailable.",
		},
		{
			q: "Do I need an account?",
			a: "No. On first launch, INTRUS creates an anonymous profile tied to this phone: no e-mail address, no password. To get your progression (level, sonars, cosmetics) back on another device or after reinstalling, open Profile → Account → Continue with Apple, then sign in the same way elsewhere.",
		},
		{
			q: "What are INTRUS+ and the free trial?",
			a: "INTRUS+ is the game's subscription: exclusive cosmetics, +300 free sonars every month, +25% XP and sonars per game and an INTRUS+ badge on your avatar. Three plans in the Store: €1.49/month, €9.99/year or €14.99 once, for life. The monthly and yearly plans start with 7 free days (once per account); unless you cancel before the end of the trial, the subscription starts at the price shown. Payment goes through Apple.",
		},
		{
			q: "My purchase or subscription doesn't show up.",
			a: "Open Store → Restore purchases, signed in with the same Apple account you bought with. The sonars of a pack are credited by our server a few seconds after Apple confirms the purchase; if INTRUS+ or your sonars don't come back, write to us with your Apple receipt.",
		},
		{
			q: "Cancel INTRUS+ or ask for a refund?",
			a: "The subscription is managed in your Apple account settings (Settings → your name → Subscriptions): cancellation takes effect at the end of the current period, and the free trial is cancelled the same way. Refunds are handled by Apple at reportaproblem.apple.com; we have no access to your payments.",
		},
		{
			q: "What are sonars and cosmetics for?",
			a: "Sonars are the in-game currency: you earn them, along with XP, at the end of every game. In My avatar, they unlock the accessories and eyes your level hasn't reached yet; every item you buy is yours for good. The Store also sells sonar packs if you don't want to wait.",
		},
		{
			q: "I don't get game notifications.",
			a: "INTRUS only notifies you (game start, meeting called, crisis, end of game) if you allowed notifications when the app asked. You can turn them back on in Settings → Notifications → INTRUS.",
		},
		{
			q: "Delete my account?",
			a: "From the app: Profile → Account → Delete my account. Erasure is immediate and permanent. Everything is detailed on the",
			link: { path: ACCOUNT_PATH, label: "Account deletion" },
		},
		{
			q: "Report a bug?",
			a: "Write to us with your phone model, your iOS version, your nickname and, if the problem happened during a game, the room code and the approximate time: it lets us find the game and reproduce the issue.",
		},
	],
};

export default async function IntrusSupportPage({
	params,
}: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	setRequestLocale(locale);
	const isEn = locale === "en";
	const faq = FAQ[locale];

	return (
		<LegalShell
			brand="INTRUS"
			title="Support"
			subtitle={
				isEn
					? "A question, a bug, an impostor who swears they're innocent? We're here."
					: "Une question, un bug, un imposteur qui jure qu'il est innocent ? On est là."
			}
			lastUpdated={isEn ? "September 26, 2026" : "26 septembre 2026"}
			lastUpdatedLabel={isEn ? "Last updated" : "Dernière mise à jour"}
		>
			<LegalSection heading={isEn ? "Contact us" : "Nous contacter"}>
				<p>
					{isEn
						? "For any question, bug or suggestion about INTRUS, write to "
						: "Pour toute question, bug ou suggestion concernant INTRUS, écrivez-nous à "}
					<a className="text-accent hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
						{CONTACT_EMAIL}
					</a>
					{isEn
						? ". We usually reply within 48 working hours. Tell us your nickname and, if the problem happened during a game, the room code: it helps us find what went wrong."
						: ". Nous répondons généralement sous 48 h ouvrées. Indiquez-nous votre pseudo et, si le problème est survenu pendant une partie, le code du salon : cela nous aide à retrouver ce qui s'est passé."}
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
					<a className="text-accent hover:underline" href={`/${locale}/intrus/confidentialite`}>
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
