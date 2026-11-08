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
		title: "Support · Kadran",
		description: isEn
			? "Help and contact for the Kadran app (KYKS)."
			: "Aide et contact pour l'application Kadran (KYKS).",
		robots: { index: false, follow: false },
	};
}

type Faq = { q: string; a: string };

const FAQ: Record<Locale, Faq[]> = {
	fr: [
		{
			q: "Comment ajouter un widget à l'écran d'accueil ?",
			a: "Créez-le d'abord dans Kadran. Puis touchez longuement un espace vide de l'écran d'accueil, « Modifier », « Ajouter des widgets », et choisissez Kadran dans la liste (son icône est le K sur la plaque de verre). Le widget « Kadran » affiche l'un de vos widgets : touchez-le longuement, « Modifier le widget », et choisissez lequel. Le widget « Horloge » affiche directement votre horloge.",
		},
		{
			q: "Pourquoi aucun nom n'apparaît sous l'icône et les widgets ?",
			a: "C'est voulu : Kadran a un nom invisible pour ne rien afficher sous vos widgets. Dans les Réglages de l'iPhone et la liste des widgets, repérez l'application à son icône.",
		},
		{
			q: "Mon widget ne se met pas à jour.",
			a: "iOS limite le nombre d'actualisations des widgets. L'heure et les comptes à rebours restent exacts ; la météo est actualisée environ toutes les heures, et les API et scripts selon la fréquence choisie dans l'éditeur. Ouvrir Kadran actualise aussitôt tous vos widgets.",
		},
		{
			q: "Le widget Agenda est vide.",
			a: "Autorisez l'accès au calendrier : dans l'éditeur du widget, touchez « Autoriser l'accès au calendrier », ou ouvrez les Réglages de l'iPhone, l'application Kadran, puis Calendriers, et choisissez « Accès complet ».",
		},
		{
			q: "Mon API ou mon script ne s'affiche pas.",
			a: "Dans l'éditeur, touchez « Tester » ou « Exécuter » : le message d'erreur et le journal s'affichent sous le bouton. Les adresses doivent être en HTTPS, ou en HTTP sur votre réseau local ; une réponse est limitée à 1 Mo et un script à 8 secondes.",
		},
		{
			q: "Mon achat Kadran Pro n'apparaît pas.",
			a: "Ouvrez l'écran Kadran Pro (par exemple en créant un 4e widget) et touchez « Restaurer mes achats », avec le même compte Apple que celui de l'achat. Le partage familial est inclus. Si rien ne change, écrivez-nous avec le reçu d'Apple.",
		},
		{
			q: "Résilier l'abonnement ou demander un remboursement ?",
			a: "L'abonnement se renouvelle automatiquement : résiliez-le au moins 24 h avant la fin de la période, dans Réglages, votre nom, puis Abonnements. Les remboursements sont traités par Apple sur reportaproblem.apple.com ; nous n'avons pas accès à vos paiements. Sans abonnement, vos 3 widgets les plus anciens restent disponibles et rien n'est supprimé.",
		},
	],
	en: [
		{
			q: "How do I add a widget to the Home Screen?",
			a: "Create it in Kadran first. Then touch and hold an empty area of the Home Screen, tap “Edit”, “Add Widgets”, and pick Kadran in the list (its icon is the K on a glass plate). The “Kadran” widget shows one of your widgets: touch and hold it, tap “Edit Widget”, and choose which one. The “Clock” widget shows your clock directly.",
		},
		{
			q: "Why is there no name under the icon and the widgets?",
			a: "It is on purpose: Kadran has an invisible name so that nothing shows under your widgets. In the iPhone Settings and the widget list, look for the app by its icon.",
		},
		{
			q: "My widget doesn't update.",
			a: "iOS limits how often widgets refresh. The time and countdowns stay exact; the weather refreshes about every hour, and APIs and scripts at the frequency chosen in the editor. Opening Kadran refreshes all your widgets right away.",
		},
		{
			q: "The Agenda widget is empty.",
			a: "Allow calendar access: in the widget editor, tap “Allow calendar access”, or open the iPhone Settings, the Kadran app, then Calendars, and choose “Full Access”.",
		},
		{
			q: "My API or script doesn't show up.",
			a: "In the editor, tap “Test” or “Run”: the error message and the log appear under the button. Addresses must use HTTPS, or HTTP on your local network; a response is limited to 1 MB and a script to 8 seconds.",
		},
		{
			q: "My Kadran Pro purchase doesn't appear.",
			a: "Open the Kadran Pro screen (for example by creating a 4th widget) and tap “Restore purchases”, with the same Apple Account you bought with. Family Sharing is included. If nothing changes, write to us with Apple's receipt.",
		},
		{
			q: "Cancel the subscription or request a refund?",
			a: "The subscription renews automatically: cancel it at least 24 hours before the end of the period, in Settings, your name, then Subscriptions. Refunds are handled by Apple at reportaproblem.apple.com; we have no access to your payments. Without a subscription, your 3 oldest widgets remain available and nothing is deleted.",
		},
	],
};

export default async function KadranSupportPage({
	params,
}: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	setRequestLocale(locale);
	const isEn = locale === "en";
	const faq = FAQ[locale];

	return (
		<LegalShell
			brand="Kadran"
			title="Support"
			subtitle={
				isEn
					? "A question, a bug, a widget that won't behave? We're here."
					: "Une question, un bug, un widget qui n'en fait qu'à sa tête ? On est là."
			}
			lastUpdated={isEn ? "November 8, 2026" : "8 novembre 2026"}
			lastUpdatedLabel={isEn ? "Last updated" : "Dernière mise à jour"}
		>
			<LegalSection heading={isEn ? "Contact us" : "Nous contacter"}>
				<p>
					{isEn
						? "For any question, bug or suggestion about Kadran, write to "
						: "Pour toute question, bug ou suggestion concernant Kadran, écrivez-nous à "}
					<a className="text-accent hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
						{CONTACT_EMAIL}
					</a>
					{isEn
						? ". We usually reply within 48 working hours. Tell us your iPhone model, your iOS version and which widget is involved."
						: ". Nous répondons généralement sous 48 h ouvrées. Indiquez-nous votre modèle d'iPhone, votre version d'iOS et le widget concerné."}
				</p>
			</LegalSection>

			<LegalSection heading={isEn ? "Frequently asked questions" : "Questions fréquentes"}>
				<ul className="flex list-disc flex-col gap-3 pl-5">
					{faq.map((item) => (
						<li key={item.q}>
							<strong>{item.q}</strong> {item.a}
						</li>
					))}
				</ul>
			</LegalSection>

			<LegalSection heading={isEn ? "Legal pages" : "Pages légales"}>
				<p>
					<a className="text-accent hover:underline" href={`/${locale}/kadran/confidentialite`}>
						{isEn ? "Privacy policy" : "Politique de confidentialité"}
					</a>
					{" · "}
					<a
						className="text-accent hover:underline"
						href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
						rel="noreferrer"
						target="_blank"
					>
						{isEn
							? "Terms of use (Apple standard EULA)"
							: "Conditions d'utilisation (CLUF standard d'Apple)"}
					</a>
				</p>
			</LegalSection>
		</LegalShell>
	);
}
