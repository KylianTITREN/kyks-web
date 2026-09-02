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
		title: isEn ? "Support · Bluffo" : "Support · Bluffo",
		description: isEn
			? "Help and contact for the Bluffo app (KYKS)."
			: "Aide et contact pour l'application Bluffo (KYKS).",
		robots: { index: false, follow: false },
	};
}

type Faq = { q: string; a: string };

const FAQ: Record<Locale, Faq[]> = {
	fr: [
		{
			q: "Une carte est fausse ?",
			a: "Chaque carte porte un numéro en haut à droite. Envoyez-le-nous avec ce qui vous semble faux : on vérifie contre nos sources et on corrige dans la mise à jour suivante. Une carte fausse est notre priorité absolue.",
		},
		{
			q: "Mon achat n'apparaît pas.",
			a: "Ouvrez Paquets ou Réglages → Restaurer les achats, avec le même compte Apple ou Google que celui de l'achat. Si les paquets restent verrouillés, écrivez-nous avec le reçu Apple ou Google.",
		},
		{
			q: "L'application est dans la mauvaise langue.",
			a: "Bluffo suit la langue du téléphone : français ou anglais, avec des paquets de cartes propres à chaque langue. Pour changer, modifiez la langue de l'appareil (ou la langue par app dans les réglages iOS).",
		},
		{
			q: "Ça marche sans internet ?",
			a: "Oui, entièrement. Seul le déblocage des paquets passe par le store, qui a besoin d'une connexion au moment de l'achat ou de la restauration.",
		},
		{
			q: "Effacer les prénoms ou tout remettre à zéro ?",
			a: "Réglages → Effacer les prénoms supprime les prénoms mémorisés. Désinstaller l'application efface tout ce qu'elle a stocké ; votre achat reste lié à votre compte store et se restaure.",
		},
		{
			q: "Un remboursement ?",
			a: "Les remboursements sont gérés par Apple (reportaproblem.apple.com) ou par Google Play, selon leurs conditions. Nous n'avons pas accès à vos paiements.",
		},
	],
	en: [
		{
			q: "A card is wrong?",
			a: "Every card shows a number in its top-right corner. Send it to us with what looks wrong: we check it against our sources and fix it in the next update. A wrong card is our top priority.",
		},
		{
			q: "My purchase doesn't show up.",
			a: "Open Decks or Settings → Restore purchases, signed in with the same Apple or Google account you bought with. If the decks stay locked, write to us with your Apple or Google receipt.",
		},
		{
			q: "The app is in the wrong language.",
			a: "Bluffo follows your phone's language: French or English, each with its own card decks. To switch, change the device language (or the per-app language in iOS settings).",
		},
		{
			q: "Does it work offline?",
			a: "Yes, entirely. Only unlocking the decks goes through the store, which needs a connection at the moment of purchase or restore.",
		},
		{
			q: "Clear the names or reset everything?",
			a: "Settings → Clear names removes the remembered names. Uninstalling the app erases everything it stored; your purchase stays tied to your store account and can be restored.",
		},
		{
			q: "A refund?",
			a: "Refunds are handled by Apple (reportaproblem.apple.com) or by Google Play under their own terms. We have no access to your payments.",
		},
	],
};

export default async function BluffoSupportPage({
	params,
}: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	setRequestLocale(locale);
	const isEn = locale === "en";
	const faq = FAQ[locale];

	return (
		<LegalShell
			brand="Bluffo"
			title="Support"
			subtitle={
				isEn
					? "A question, a bug, a card you'd like to argue about? We're here."
					: "Une question, un bug, une carte à contester ? On est là."
			}
			lastUpdated={isEn ? "September 2, 2026" : "2 septembre 2026"}
			lastUpdatedLabel={isEn ? "Last updated" : "Dernière mise à jour"}
		>
			<LegalSection heading={isEn ? "Contact us" : "Nous contacter"}>
				<p>
					{isEn
						? "For any question, bug or suggestion about Bluffo, write to "
						: "Pour toute question, bug ou suggestion concernant Bluffo, écrivez-nous à "}
					<a className="text-accent hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
						{CONTACT_EMAIL}
					</a>
					{isEn
						? ". We usually reply within 48 working hours. Bluffo has no account: there is nothing to look up on our side, so please describe what you see on screen."
						: ". Nous répondons généralement sous 48 h ouvrées. Bluffo n'a pas de compte : nous n'avons rien à consulter de notre côté, décrivez-nous simplement ce que vous voyez à l'écran."}
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
					<a className="text-accent hover:underline" href={`/${locale}/bluffo/regles`}>
						{isEn ? "Terms of use" : "Conditions d'utilisation"}
					</a>
					{" · "}
					<a className="text-accent hover:underline" href={`/${locale}/bluffo/confidentialite`}>
						{isEn ? "Privacy policy" : "Politique de confidentialité"}
					</a>
				</p>
			</LegalSection>
		</LegalShell>
	);
}
