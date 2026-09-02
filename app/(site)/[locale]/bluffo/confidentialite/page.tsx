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
		title: isEn ? "Privacy · Bluffo" : "Confidentialité · Bluffo",
		description: isEn
			? "Privacy policy of the Bluffo app (KYKS): no data collected."
			: "Politique de confidentialité de l'application Bluffo (KYKS) : aucune donnée collectée.",
		robots: { index: false, follow: false },
	};
}

export default async function BluffoPrivacyPage({
	params,
}: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	setRequestLocale(locale);
	const isEn = locale === "en";

	const mailLink = (
		<a className="text-accent hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
			{CONTACT_EMAIL}
		</a>
	);

	return (
		<LegalShell
			brand="Bluffo"
			title={isEn ? "Privacy policy" : "Politique de confidentialité"}
			subtitle={
				isEn
					? "Bluffo collects no personal data. Here is exactly what that means."
					: "Bluffo ne collecte aucune donnée personnelle. Voici exactement ce que cela veut dire."
			}
			lastUpdated={isEn ? "September 2, 2026" : "2 septembre 2026"}
			lastUpdatedLabel={isEn ? "Last updated" : "Dernière mise à jour"}
		>
			{isEn ? (
				<p>
					Bluffo is a mobile party game published by <strong>KYKS</strong>: one player reads a
					question, everyone else reads the real answer in secret and decides whether to tell it or
					make one up, around a single phone. The app works entirely offline and never sends
					anything to us. This page explains what stays on your device, what Apple and Google handle
					on their side, and what your rights are under the General Data Protection Regulation
					(GDPR).
				</p>
			) : (
				<p>
					Bluffo est un jeu de soirée mobile édité par <strong>KYKS</strong> : un joueur lit une
					question, les autres lisent la vraie réponse en secret et choisissent de la dire ou d'en
					inventer une, autour d'un seul téléphone. L'application fonctionne entièrement hors ligne
					et ne nous transmet rien. Cette page explique ce qui reste sur votre appareil, ce qu'Apple
					et Google traitent de leur côté, et quels sont vos droits au titre du Règlement général
					sur la protection des données (RGPD).
				</p>
			)}

			<LegalSection heading={isEn ? "1. Publisher" : "1. Éditeur"}>
				{isEn ? (
					<p>
						Bluffo is published by <strong>KYKS</strong>, a French single-shareholder simplified
						joint-stock company (SASU), registered with the Paris Trade and Companies Register under
						number 929 633 162, with its registered office at 14 rue Bausset, 75015 Paris, France.
						For any question about this policy, write to {mailLink}.
					</p>
				) : (
					<p>
						Bluffo est éditée par <strong>KYKS</strong>, société par actions simplifiée
						unipersonnelle (SASU), immatriculée au Registre du commerce et des sociétés de Paris
						sous le numéro 929 633 162, dont le siège social est situé au 14 rue Bausset, 75015
						Paris. Pour toute question sur cette politique, écrivez à {mailLink}.
					</p>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "2. No data collected" : "2. Aucune donnée collectée"}>
				{isEn ? (
					<>
						<p>
							Bluffo has no account, no sign-in, no server and no analytics. The app makes no
							network request of its own: it does not know who you are, where you are, or how you
							play.
						</p>
						<ul className="flex list-disc flex-col gap-2 pl-5">
							<li>
								<strong>Player names</strong> typed at the start of a game are stored on your device
								only, so that they can be suggested again next time. They never leave the phone. You
								can erase them at any time from Settings → Clear names, and uninstalling the app
								removes them.
							</li>
							<li>
								<strong>The game in progress</strong> (players, scores, current card) is saved on
								your device so that you can resume it if the app is closed, and is deleted when the
								game ends or is abandoned.
							</li>
							<li>
								<strong>Your settings</strong> (rounds per player, strict rules, full recap) are
								stored on your device only.
							</li>
						</ul>
						<p>
							None of this is personal data in our hands: we never receive it and cannot access it.
						</p>
					</>
				) : (
					<>
						<p>
							Bluffo n'a ni compte, ni connexion, ni serveur, ni outil de mesure d'audience.
							L'application n'émet aucune requête réseau de son propre chef : elle ne sait pas qui
							vous êtes, où vous êtes, ni comment vous jouez.
						</p>
						<ul className="flex list-disc flex-col gap-2 pl-5">
							<li>
								<strong>Les prénoms</strong> saisis en début de partie sont stockés sur votre
								appareil uniquement, pour être proposés à nouveau la fois suivante. Ils ne quittent
								jamais le téléphone. Vous pouvez les effacer à tout moment depuis Réglages → Effacer
								les prénoms ; la désinstallation de l'application les supprime.
							</li>
							<li>
								<strong>La partie en cours</strong> (joueurs, scores, carte du moment) est
								sauvegardée sur votre appareil pour pouvoir reprendre si l'application est fermée,
								et supprimée à la fin ou à l'abandon de la partie.
							</li>
							<li>
								<strong>Vos réglages</strong> (manches par joueur, règles strictes, récapitulatif
								complet) sont stockés sur votre appareil uniquement.
							</li>
						</ul>
						<p>
							Rien de tout cela ne constitue une donnée personnelle entre nos mains : nous ne la
							recevons jamais et ne pouvons pas y accéder.
						</p>
					</>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "3. In-app purchase" : "3. Achat intégré"}>
				{isEn ? (
					<p>
						Additional card decks are unlocked through a single purchase processed by{" "}
						<strong>Apple</strong> (App Store) or <strong>Google</strong> (Google Play), under their
						own terms and privacy policies. We never see your identity, your payment details or your
						billing address. The app only keeps, on your device, the fact that the purchase was
						made, so that the decks stay unlocked; "Restore purchases" asks the store to confirm it
						again. Apple and Google provide us with aggregated sales figures only.
					</p>
				) : (
					<p>
						Les paquets de cartes supplémentaires se débloquent par un achat unique traité par{" "}
						<strong>Apple</strong> (App Store) ou <strong>Google</strong> (Google Play), selon leurs
						propres conditions et politiques de confidentialité. Nous ne voyons jamais votre
						identité, vos données bancaires ni votre adresse de facturation. L'application conserve
						seulement, sur votre appareil, le fait que l'achat a eu lieu, pour que les paquets
						restent débloqués ; « Restaurer les achats » redemande cette confirmation au store.
						Apple et Google ne nous fournissent que des chiffres de ventes agrégés.
					</p>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "4. Crash reports" : "4. Rapports de plantage"}>
				{isEn ? (
					<p>
						Bluffo embeds no crash-reporting or analytics SDK. If your device is set to share
						diagnostics with developers (an iOS or Android setting that is off unless you enabled
						it), Apple or Google may send us anonymised, aggregated crash reports. They contain no
						game data and cannot identify you.
					</p>
				) : (
					<p>
						Bluffo n'embarque aucun SDK de rapport de plantage ni de mesure d'audience. Si votre
						appareil est réglé pour partager les diagnostics avec les développeurs (un réglage iOS
						ou Android, désactivé sauf si vous l'avez activé), Apple ou Google peuvent nous
						transmettre des rapports de plantage anonymisés et agrégés. Ils ne contiennent aucune
						donnée de jeu et ne permettent pas de vous identifier.
					</p>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "5. Audience" : "5. Public concerné"}>
				{isEn ? (
					<p>
						Bluffo is recommended for ages <strong>12 and up</strong>: the cards contain no shocking
						content, but the game explicitly rewards lying well. The app does not verify your age
						and, since it collects nothing, processes no data about children.
					</p>
				) : (
					<p>
						Bluffo est recommandé <strong>à partir de 12 ans</strong> : les cartes ne contiennent
						aucun contenu choquant, mais le jeu récompense explicitement l'art de bien mentir.
						L'application ne vérifie pas votre âge et, puisqu'elle ne collecte rien, ne traite
						aucune donnée relative à des enfants.
					</p>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "6. Your rights" : "6. Vos droits"}>
				{isEn ? (
					<p>
						Under the GDPR you have rights of access, rectification, erasure, portability,
						restriction and objection. Because we hold no data about you, there is nothing for us to
						access or erase: everything lives on your device, under your control. If you believe we
						do hold something, or have any question, write to {mailLink}. You may also lodge a
						complaint with the French supervisory authority, the CNIL (
						<a
							className="text-accent hover:underline"
							href="https://www.cnil.fr"
							rel="noreferrer"
							target="_blank"
						>
							cnil.fr
						</a>
						).
					</p>
				) : (
					<p>
						Conformément au RGPD, vous disposez de droits d'accès, de rectification, d'effacement,
						de portabilité, de limitation et d'opposition. Comme nous ne détenons aucune donnée vous
						concernant, nous n'avons rien à vous communiquer ni à effacer : tout est sur votre
						appareil, sous votre contrôle. Si vous pensez que nous détenons quelque chose, ou pour
						toute question, écrivez à {mailLink}. Vous pouvez également introduire une réclamation
						auprès de la CNIL (
						<a
							className="text-accent hover:underline"
							href="https://www.cnil.fr"
							rel="noreferrer"
							target="_blank"
						>
							cnil.fr
						</a>
						).
					</p>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "7. Changes" : "7. Évolutions"}>
				{isEn ? (
					<p>
						If a future version of Bluffo ever needed to process data (for instance an online mode),
						this policy, the App Store privacy label and the Google Play data safety form would be
						updated <strong>before</strong> that version is released, and the app would ask for your
						consent where the law requires it.
					</p>
				) : (
					<p>
						Si une future version de Bluffo devait un jour traiter des données (par exemple un mode
						en ligne), cette politique, l'étiquette de confidentialité de l'App Store et le
						formulaire de sécurité des données de Google Play seraient mis à jour{" "}
						<strong>avant</strong> la sortie de cette version, et l'application demanderait votre
						consentement là où la loi l'exige.
					</p>
				)}
			</LegalSection>
		</LegalShell>
	);
}
