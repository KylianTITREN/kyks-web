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
		title: isEn ? "Terms of use · Bluffo" : "Conditions d'utilisation · Bluffo",
		description: isEn
			? "Terms of use of the Bluffo app (KYKS)."
			: "Conditions d'utilisation de l'application Bluffo (KYKS).",
		robots: { index: false, follow: false },
	};
}

export default async function BluffoTermsPage({ params }: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	setRequestLocale(locale);
	const isEn = locale === "en";

	const mailLink = (
		<a className="text-accent hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
			{CONTACT_EMAIL}
		</a>
	);
	const privacyLink = (
		<a className="text-accent hover:underline" href={`/${locale}/bluffo/confidentialite`}>
			{isEn ? "privacy policy" : "politique de confidentialité"}
		</a>
	);

	return (
		<LegalShell
			brand="Bluffo"
			title={isEn ? "Terms of use" : "Conditions d'utilisation"}
			subtitle={
				isEn
					? "The terms that apply when you install and play Bluffo."
					: "Les conditions qui s'appliquent quand vous installez et jouez à Bluffo."
			}
			lastUpdated={isEn ? "September 2, 2026" : "2 septembre 2026"}
			lastUpdatedLabel={isEn ? "Last updated" : "Dernière mise à jour"}
		>
			{isEn ? (
				<p>
					Bluffo is a mobile application published by <strong>KYKS</strong> (SASU, Paris Trade and
					Companies Register 929 633 162, 14 rue Bausset, 75015 Paris, France). By installing or
					using the app, you accept these terms.
				</p>
			) : (
				<p>
					Bluffo est une application mobile éditée par <strong>KYKS</strong> (SASU, RCS Paris 929
					633 162, 14 rue Bausset, 75015 Paris). En installant ou en utilisant l'application, vous
					acceptez les présentes conditions.
				</p>
			)}

			<LegalSection heading={isEn ? "1. The service" : "1. Le service"}>
				{isEn ? (
					<p>
						Bluffo is a party game played around a single phone by 3 to 8 people in the same room.
						One player reads a question aloud; the others read the real answer in secret and either
						tell it or invent one; the reader names the player they believe. The app deals the
						cards, enforces the rules and keeps the score. It requires no account and works without
						an internet connection.
					</p>
				) : (
					<p>
						Bluffo est un jeu de soirée qui se joue autour d'un seul téléphone, entre 3 et 8
						personnes réunies au même endroit. Un joueur lit une question à voix haute ; les autres
						lisent la vraie réponse en secret et la donnent ou en inventent une ; le lecteur désigne
						celui qu'il croit. L'application tire les cartes, fait respecter les règles et tient le
						score. Elle ne nécessite aucun compte et fonctionne sans connexion internet.
					</p>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "2. In-app purchase" : "2. Achat intégré"}>
				{isEn ? (
					<p>
						Two card decks per language are free. The other decks are unlocked by a single, one-time
						purchase processed by Apple or Google under their own terms; the price is shown before
						you confirm. The purchase is tied to your Apple or Google account and can be restored on
						any of your devices from the Decks screen or from Settings → Restore purchases. Refund
						requests are handled by Apple or Google according to their policies.
					</p>
				) : (
					<p>
						Deux paquets de cartes par langue sont gratuits. Les autres se débloquent par un achat
						unique et définitif, traité par Apple ou Google selon leurs conditions ; le prix est
						affiché avant confirmation. L'achat est lié à votre compte Apple ou Google et peut être
						restauré sur tous vos appareils depuis l'écran Paquets ou depuis Réglages → Restaurer
						les achats. Les demandes de remboursement sont traitées par Apple ou Google selon leurs
						politiques.
					</p>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "3. Cards and content" : "3. Cartes et contenu"}>
				{isEn ? (
					<p>
						Questions, answers and decks are written and checked by KYKS from documented sources and
						are protected by copyright. They may not be extracted, copied or reused outside the app.
						We aim for every answer to be accurate; if you spot an error, write to {mailLink} with
						the card number shown on screen and we will check and correct it in a later update.
						Bluffo is a game, not a reference work: no card should be relied on for anything other
						than a good evening.
					</p>
				) : (
					<p>
						Les questions, réponses et paquets sont rédigés et vérifiés par KYKS à partir de sources
						documentées et sont protégés par le droit d'auteur. Ils ne peuvent être extraits, copiés
						ou réutilisés hors de l'application. Nous visons l'exactitude de chaque réponse ; si
						vous repérez une erreur, écrivez à {mailLink} en indiquant le numéro de carte affiché à
						l'écran, nous vérifierons et corrigerons dans une mise à jour. Bluffo est un jeu, pas un
						ouvrage de référence : aucune carte ne doit servir à autre chose qu'à passer une bonne
						soirée.
					</p>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "4. Playing well" : "4. Bien jouer"}>
				{isEn ? (
					<p>
						Bluffo is recommended for ages <strong>12 and up</strong>. Lying is the whole point of
						the game and stays inside it: players' names typed into the app are for the table only,
						are never shared and can be erased from Settings. Play with people who agreed to play,
						and stop when someone asks.
					</p>
				) : (
					<p>
						Bluffo est recommandé <strong>à partir de 12 ans</strong>. Mentir est tout l'objet du
						jeu et n'en sort pas : les prénoms saisis dans l'application ne servent qu'à la table,
						ne sont jamais partagés et peuvent être effacés depuis Réglages. Jouez avec des
						personnes qui ont accepté de jouer, et arrêtez quand quelqu'un le demande.
					</p>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "5. Liability" : "5. Responsabilité"}>
				{isEn ? (
					<p>
						The app is provided "as is". KYKS is not liable for how games unfold between players,
						nor for the temporary unavailability of the app stores' purchase services. Nothing in
						these terms excludes liability that cannot be excluded by law.
					</p>
				) : (
					<p>
						L'application est fournie « en l'état ». KYKS n'est pas responsable du déroulement des
						parties entre joueurs, ni de l'indisponibilité temporaire des services d'achat des
						stores. Rien dans ces conditions n'exclut la responsabilité qui ne peut être exclue par
						la loi.
					</p>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "6. Governing law" : "6. Droit applicable"}>
				{isEn ? (
					<p>
						These terms are governed by French law. In the event of a dispute, an amicable solution
						will be sought before any legal action; failing that, the competent courts will be those
						of Paris, subject to mandatory consumer-protection provisions. Your personal data, of
						which Bluffo collects none, is covered by our {privacyLink}.
					</p>
				) : (
					<p>
						Les présentes conditions sont soumises au droit français. En cas de litige, une solution
						amiable sera recherchée avant toute action ; à défaut, les tribunaux compétents seront
						ceux du ressort de Paris, sous réserve des dispositions impératives applicables aux
						consommateurs. Vos données personnelles, dont Bluffo ne collecte aucune, sont couvertes
						par notre {privacyLink}.
					</p>
				)}
			</LegalSection>
		</LegalShell>
	);
}
