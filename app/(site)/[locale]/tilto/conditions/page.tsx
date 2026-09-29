// À relire et valider par Kylian avant mise en ligne.
import { LegalSection, LegalShell } from "@/components/legal/LegalShell";
import type { Locale } from "@/i18n/routing";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

const CONTACT_EMAIL = "hello@kyks.io";
const APPLE_EULA_URL = "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";

export async function generateMetadata({
	params,
}: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
	const { locale } = await params;
	const isEn = locale === "en";
	return {
		title: isEn ? "Terms of use · Tilto" : "Conditions d'utilisation · Tilto",
		description: isEn
			? "Terms of use of the Tilto app (KYKS)."
			: "Conditions d'utilisation de l'application Tilto (KYKS).",
		robots: { index: false, follow: false },
	};
}

export default async function TiltoTermsPage({ params }: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	setRequestLocale(locale);
	const isEn = locale === "en";

	const mailLink = (
		<a className="text-accent hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
			{CONTACT_EMAIL}
		</a>
	);
	const privacyLink = (
		<a className="text-accent hover:underline" href={`/${locale}/tilto/confidentialite`}>
			{isEn ? "privacy policy" : "politique de confidentialité"}
		</a>
	);
	const accountLink = (
		<a className="text-accent hover:underline" href={`/${locale}/tilto/compte`}>
			{isEn ? "Account deletion" : "Suppression de compte"}
		</a>
	);
	const eulaLink = (
		<a
			className="text-accent hover:underline"
			href={APPLE_EULA_URL}
			rel="noreferrer"
			target="_blank"
		>
			{isEn
				? "Apple's standard Licensed Application End User License Agreement"
				: "contrat de licence standard d'Apple pour les applications (Licensed Application End User License Agreement)"}
		</a>
	);

	return (
		<LegalShell
			brand="Tilto"
			title={isEn ? "Terms of use" : "Conditions d'utilisation"}
			subtitle={
				isEn
					? "The terms that apply when you install and play Tilto."
					: "Les conditions qui s'appliquent quand vous installez et jouez à Tilto."
			}
			lastUpdated={isEn ? "September 29, 2026" : "29 septembre 2026"}
			lastUpdatedLabel={isEn ? "Last updated" : "Dernière mise à jour"}
		>
			{isEn ? (
				<p>By installing or using the Tilto app, you accept these terms of use.</p>
			) : (
				<p>
					En installant ou en utilisant l'application Tilto, vous acceptez les présentes conditions
					d'utilisation.
				</p>
			)}

			<LegalSection heading={isEn ? "1. Publisher" : "1. Éditeur"}>
				{isEn ? (
					<p>
						Tilto is published by <strong>KYKS</strong>, a French single-shareholder simplified
						joint-stock company (SASU), registered with the Paris Trade and Companies Register under
						number 929 633 162, with its registered office at 14 rue Bausset, 75015 Paris, France.
						Contact: {mailLink}.
					</p>
				) : (
					<p>
						Tilto est éditée par <strong>KYKS</strong>, société par actions simplifiée
						unipersonnelle (SASU) immatriculée au Registre du commerce et des sociétés de Paris sous
						le numéro 929 633 162, dont le siège social est situé au 14 rue Bausset, 75015 Paris.
						Contact : {mailLink}.
					</p>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "2. The service" : "2. Le service"}>
				{isEn ? (
					<p>
						Tilto is a party game for 2 to 12 players. Each round, a card shows two extremes; the
						Tilter secretly sees a target on a dial and gives a single clue, then the others tilt
						the needle to find it. The three modes (Co-op, Free-for-all, Teams) can be played on one
						phone passed around, which works without a connection, or each on your own phone in an
						online room. The Classic pack (200 cards) is included for free; additional packs and the
						Tilto Pass are offered as in-app purchases (section 6). The game, its cards and its
						features evolve with updates.
					</p>
				) : (
					<p>
						Tilto est un jeu d'ambiance de 2 à 12 joueurs. À chaque manche, une carte propose deux
						extrêmes ; le Tilteur voit en secret une cible sur un cadran et donne un seul indice,
						puis les autres penchent l'aiguille pour la retrouver. Les trois modes (Coop, Chacun
						pour soi, Équipes) se jouent sur un seul téléphone que l'on se passe, qui fonctionne
						sans connexion, ou chacun sur son téléphone dans un salon en ligne. Le pack Classique
						(200 cartes) est inclus gratuitement ; des packs supplémentaires et le Tilto Pass sont
						proposés en achat intégré (section 6). Le jeu, ses cartes et ses fonctionnalités
						évoluent au fil des mises à jour.
					</p>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "3. Your account" : "3. Votre compte"}>
				{isEn ? (
					<p>
						On first launch, Tilto creates an anonymous account tied to your phone, with no e-mail
						address and no password. You can link it to your Apple account (iPhone) or your Google
						account from your Profile to find your profile on another device. Online play requires
						an internet connection. You are responsible for the use of Tilto from your devices. You
						can delete your account at any time from the app (Profile → Delete my account); the
						steps and their effects are described on the {accountLink} page.
					</p>
				) : (
					<p>
						Au premier lancement, Tilto crée un compte anonyme propre à votre téléphone, sans
						adresse e-mail ni mot de passe. Vous pouvez le lier à votre compte Apple (iPhone) ou
						Google depuis votre Profil pour retrouver votre profil sur un autre appareil. Le jeu en
						ligne nécessite une connexion à internet. Vous êtes responsable de l'usage de Tilto
						depuis vos appareils. Vous pouvez supprimer votre compte à tout moment depuis
						l'application (Profil → Supprimer mon compte) ; la marche à suivre et ses effets sont
						décrits sur la page {accountLink}.
					</p>
				)}
			</LegalSection>

			<LegalSection
				heading={isEn ? "4. Fair play in online rooms" : "4. Bon usage des salons en ligne"}
			>
				{isEn ? (
					<>
						<p>
							In an online room, your first name and your clues are seen by the other players. You
							agree that they are not insulting, hateful, discriminatory, harassing, sexually
							explicit or defamatory, that you do not impersonate anyone, and that you do not post
							other people's personal data (address, phone number…). Only share a room's code, QR
							code or invite link with the people you play with, and do not join a room you were not
							invited to. The host of a room can remove a player from it. You must not disrupt the
							service, work around its rules or technical limits, or access it other than through
							the app.
						</p>
						<p>
							To report inappropriate behaviour or content, write to {mailLink} with the room code.
							We may remove the content concerned and suspend or delete the account of a player who
							does not follow these rules.
						</p>
					</>
				) : (
					<>
						<p>
							Dans un salon en ligne, votre prénom et vos indices sont vus par les autres joueurs.
							Vous vous engagez à ce qu'ils ne soient pas injurieux, haineux, discriminatoires,
							harcelants, sexuellement explicites ou diffamatoires, à ne pas vous faire passer pour
							quelqu'un d'autre et à ne pas y publier de données personnelles de tiers (adresse,
							numéro de téléphone…). Ne partagez le code, le QR code ou le lien d'invitation d'un
							salon qu'avec les personnes avec qui vous jouez, et ne rejoignez pas un salon auquel
							vous n'avez pas été invité. L'hôte d'un salon peut en retirer un joueur. Il est
							interdit de perturber le service, de contourner ses règles ou ses limites techniques,
							ou d'y accéder autrement que par l'application.
						</p>
						<p>
							Pour signaler un comportement ou un contenu inapproprié, écrivez-nous à {mailLink} en
							indiquant le code du salon. Nous pouvons supprimer le contenu en cause et suspendre ou
							supprimer le compte d'un joueur qui ne respecte pas ces règles.
						</p>
					</>
				)}
			</LegalSection>

			<LegalSection
				heading={isEn ? "5. Content for adults only" : "5. Contenus réservés aux adultes"}
			>
				{isEn ? (
					<p>
						Tilto is recommended for ages 13 and up. The "After midnight" pack contains suggestive
						cards reserved for people aged <strong>18 and over</strong>. Before you buy it (or, with
						the Tilto Pass, the first time you turn it on), the app asks you to confirm that you are
						18 or older; its cards then stay out of games until the host turns them on for the room
						("After midnight cards · 18+", off by default). By turning them on, the host undertakes
						to play only with consenting adults.
					</p>
				) : (
					<p>
						Tilto est recommandé à partir de 13 ans. Le pack « Après minuit » contient des cartes
						suggestives réservées aux personnes de <strong>18 ans et plus</strong>. Avant de
						l'acheter (ou, avec le Tilto Pass, à sa première activation), l'application vous demande
						de confirmer que vous avez 18 ans ou plus ; ses cartes restent ensuite hors des parties
						tant que l'hôte ne les active pas pour le salon (« Cartes Après minuit · 18+ »,
						désactivé par défaut). En les activant, l'hôte s'engage à ne jouer qu'avec des adultes
						consentants.
					</p>
				)}
			</LegalSection>

			<LegalSection
				heading={isEn ? "6. In-app purchases and Tilto Pass" : "6. Achats intégrés et Tilto Pass"}
			>
				{isEn ? (
					<ul className="flex list-disc flex-col gap-2 pl-5">
						<li>
							<strong>Packs</strong>: the Happy hour, Pop culture, Family and After midnight packs
							are bought individually, with a one-time payment.
						</li>
						<li>
							<strong>Tilto Pass</strong>: it unlocks every pack, current and future, either through
							a monthly subscription or through a one-time lifetime purchase.
						</li>
						<li>
							<strong>Price and payment</strong>: the price is the one shown in the app by the App
							Store or Google Play before you confirm. Payment is charged to your Apple or Google
							account when you confirm the purchase; it is processed by Apple or Google under their
							own terms, and we never have access to your payment details.
						</li>
						<li>
							<strong>Monthly subscription</strong>: it renews automatically every month unless you
							cancel it at least 24 hours before the end of the current period, in your Apple
							account settings (Settings → your name → Subscriptions) or in Google Play (Play Store
							→ profile → Payments &amp; subscriptions → Subscriptions). Cancellation takes effect
							at the end of the current period, until which the Pass stays active. Uninstalling the
							app or deleting your account does not cancel the subscription.
						</li>
						<li>
							<strong>Refunds</strong>: refund requests, including any right of withdrawal, are
							handled by Apple or Google under their own terms (for Apple:
							reportaproblem.apple.com).
						</li>
						<li>
							<strong>Restoring purchases</strong>: your purchases are tied to your Apple or Google
							account. To get them back on a new device or after reinstalling, tap "Restore
							purchases" in the Shop or in your Profile, signed in with the same Apple or Google
							account.
						</li>
						<li>
							<strong>App Store</strong>: if you obtained Tilto from the App Store, {eulaLink} also
							applies.
						</li>
					</ul>
				) : (
					<ul className="flex list-disc flex-col gap-2 pl-5">
						<li>
							<strong>Packs</strong> : les packs Apéro, Culture pop, Famille et Après minuit
							s'achètent à l'unité, en paiement unique.
						</li>
						<li>
							<strong>Tilto Pass</strong> : il débloque tous les packs, actuels et à venir, soit par
							un abonnement mensuel, soit par un achat unique à vie.
						</li>
						<li>
							<strong>Prix et paiement</strong> : le prix est celui affiché dans l'application par
							l'App Store ou Google Play avant votre confirmation. Le paiement est débité sur votre
							compte Apple ou Google à la confirmation de l'achat ; il est traité par Apple ou
							Google selon leurs propres conditions, et nous n'avons jamais accès à vos moyens de
							paiement.
						</li>
						<li>
							<strong>Abonnement mensuel</strong> : il se renouvelle automatiquement chaque mois
							sauf résiliation au moins 24 heures avant la fin de la période en cours, dans les
							réglages de votre compte Apple (Réglages → votre nom → Abonnements) ou dans Google
							Play (Play Store → profil → Paiements et abonnements → Abonnements). La résiliation
							prend effet à la fin de la période en cours, jusqu'à laquelle le Pass reste actif.
							Désinstaller l'application ou supprimer votre compte ne résilie pas l'abonnement.
						</li>
						<li>
							<strong>Remboursements</strong> : les demandes de remboursement, y compris l'exercice
							d'un éventuel droit de rétractation, sont traitées par Apple ou Google selon leurs
							propres conditions (pour Apple : reportaproblem.apple.com).
						</li>
						<li>
							<strong>Restauration des achats</strong> : vos achats sont liés à votre compte Apple
							ou Google. Pour les retrouver sur un nouvel appareil ou après une réinstallation,
							touchez « Restaurer les achats » dans la Boutique ou dans votre Profil, avec le même
							compte Apple ou Google.
						</li>
						<li>
							<strong>App Store</strong> : si vous avez obtenu Tilto sur l'App Store, le {eulaLink}{" "}
							s'applique également.
						</li>
					</ul>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "7. Intellectual property" : "7. Propriété intellectuelle"}>
				{isEn ? (
					<p>
						The Tilto app, its cards, texts, visuals, sounds, name and logo are protected by
						intellectual property law and belong to KYKS or its licensors. KYKS grants you a
						personal, non-exclusive, non-transferable right to use the app for private,
						non-commercial purposes. You may not extract, copy or reuse the cards or any other part
						of the app outside of it, or exploit them commercially, without our written permission.
					</p>
				) : (
					<p>
						L'application Tilto, ses cartes, ses textes, ses visuels, ses sons, son nom et son logo
						sont protégés par le droit de la propriété intellectuelle et appartiennent à KYKS ou à
						ses concédants. KYKS vous accorde un droit personnel, non exclusif et non transférable
						d'utiliser l'application à des fins privées et non commerciales. Il est interdit
						d'extraire, de copier ou de réutiliser les cartes ou tout autre élément de l'application
						en dehors de celle-ci, ou de les exploiter commercialement, sans notre autorisation
						écrite.
					</p>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "8. Liability" : "8. Responsabilité"}>
				{isEn ? (
					<p>
						The app is provided "as is". We do our best to keep online play available, but it
						depends on your connection and on third-party services (hosting, app stores) and may be
						interrupted, in particular for maintenance. KYKS is not liable for how games unfold
						between players, nor for the content (first names, clues) they type. Nothing in these
						terms excludes liability or statutory guarantees that cannot be excluded by law, in
						particular the legal guarantee of conformity for digital content.
					</p>
				) : (
					<p>
						L'application est fournie « en l'état ». Nous faisons notre possible pour que le jeu en
						ligne reste disponible, mais il dépend de votre connexion et de services tiers
						(hébergement, stores) et peut être interrompu, notamment pour maintenance. KYKS n'est
						pas responsable du déroulement des parties entre joueurs ni des contenus (prénoms,
						indices) qu'ils saisissent. Rien dans ces conditions n'exclut la responsabilité ni les
						garanties légales qui ne peuvent l'être en vertu de la loi, notamment la garantie légale
						de conformité des contenus numériques.
					</p>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "9. Changes to these terms" : "9. Modification des conditions"}>
				{isEn ? (
					<p>
						We may change these terms to follow the evolution of Tilto or of the law. The version in
						force is the one published on this page, dated at the top; if you keep using Tilto after
						a change, the new version applies.
					</p>
				) : (
					<p>
						Nous pouvons modifier ces conditions pour suivre l'évolution de Tilto ou de la
						réglementation. La version en vigueur est celle publiée sur cette page, datée en haut ;
						si vous continuez à utiliser Tilto après une modification, la nouvelle version
						s'applique.
					</p>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "10. Governing law" : "10. Droit applicable"}>
				{isEn ? (
					<p>
						These terms are governed by French law. In the event of a dispute, an amicable solution
						will be sought before any legal action; failing that, the competent courts will be those
						of Paris, subject to mandatory consumer-protection provisions. Your personal data is
						processed in accordance with our {privacyLink}.
					</p>
				) : (
					<p>
						Les présentes conditions sont soumises au droit français. En cas de litige, une solution
						amiable sera recherchée avant toute action ; à défaut, les tribunaux compétents seront
						ceux du ressort de Paris, sous réserve des dispositions impératives applicables aux
						consommateurs. Vos données personnelles sont traitées conformément à notre {privacyLink}
						.
					</p>
				)}
			</LegalSection>
		</LegalShell>
	);
}
