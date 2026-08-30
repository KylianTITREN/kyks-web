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
		title: isEn ? "Privacy · Interfector" : "Confidentialité · Interfector",
		description: isEn
			? "Privacy policy of the Interfector app (KYKS)."
			: "Politique de confidentialité de l'application Interfector (KYKS).",
		robots: { index: false, follow: false },
	};
}

export default async function InterfectorPrivacyPage({
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
			brand="Interfector"
			title={isEn ? "Privacy policy" : "Politique de confidentialité"}
			subtitle={
				isEn
					? "How Interfector collects, uses and protects your personal data."
					: "Comment Interfector collecte, utilise et protège vos données personnelles."
			}
			lastUpdated={isEn ? "August 28, 2026" : "28 août 2026"}
			lastUpdatedLabel={isEn ? "Last updated" : "Dernière mise à jour"}
		>
			{isEn ? (
				<p>
					Interfector is a mobile app published by <strong>KYKS</strong> that brings the party game
					"Killer" to your phone: each player receives a secret target and a mission to carry out on
					them, among friends and in real life. This page explains what data we process, why, and
					what your rights are, in accordance with the General Data Protection Regulation (GDPR).
				</p>
			) : (
				<p>
					Interfector est une application mobile éditée par <strong>KYKS</strong> qui digitalise le
					jeu de soirée « Killer » : chaque joueur reçoit une cible secrète et une mission à lui
					faire accomplir, entre amis et dans la vraie vie. Cette page explique quelles données nous
					traitons, pourquoi, et quels sont vos droits, conformément au Règlement général sur la
					protection des données (RGPD).
				</p>
			)}

			<LegalSection heading={isEn ? "1. Data controller" : "1. Responsable du traitement"}>
				{isEn ? (
					<p>
						The data controller is <strong>KYKS</strong>, a French single-shareholder simplified
						joint-stock company (SASU), registered with the Paris Trade and Companies Register under
						number 929 633 162, with its registered office at 14 rue Bausset, 75015 Paris, France.
						For any question about your data, contact us at {mailLink}.
					</p>
				) : (
					<p>
						Le responsable du traitement est <strong>KYKS</strong>, société par actions simplifiée
						unipersonnelle (SASU), immatriculée au Registre du commerce et des sociétés de Paris
						sous le numéro 929 633 162, dont le siège social est situé au 14 rue Bausset, 75015
						Paris. Pour toute question relative à vos données, contactez-nous à {mailLink}.
					</p>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "2. Data we process" : "2. Données que nous traitons"}>
				{isEn ? (
					<>
						<ul className="flex list-disc flex-col gap-2 pl-5">
							<li>
								<strong>Profile</strong>: a nickname of your choosing, an avatar, and — if you wish
								— your first name (and last name) as well as a profile photo. First name, last name
								and photo are entirely optional: the game works with the nickname alone.
							</li>
							<li>
								<strong>Games</strong>: the games you take part in, your target and your mission
								(secret, readable by you only), eliminations, votes and the leaderboard.
							</li>
							<li>
								<strong>Account</strong>: by default, a technical anonymous account. If you link
								your account (Sign in with Apple or Google), the identifier provided by that
								service.
							</li>
							<li>
								<strong>Purchases</strong>: the mission packs you bought. Payment is processed by
								Apple or Google — we never have access to your banking details.
							</li>
							<li>
								<strong>Technical data</strong>: a notification token (if you enable notifications)
								and technical identifiers required for the service to work.
							</li>
						</ul>
						<p>
							This data is processed to provide the service (creating and joining games, secretly
							dealing targets and missions, keeping the feed and the leaderboard), on the basis of
							the performance of the service contract and, for the photo and notifications, of your
							consent.
						</p>
					</>
				) : (
					<>
						<ul className="flex list-disc flex-col gap-2 pl-5">
							<li>
								<strong>Profil</strong> : un pseudonyme choisi par vous, un avatar, et — si vous le
								souhaitez — votre prénom (et nom) ainsi qu'une photo de profil. Le prénom, le nom et
								la photo sont entièrement optionnels : le jeu fonctionne avec le pseudonyme seul.
							</li>
							<li>
								<strong>Parties</strong> : les parties auxquelles vous participez, votre cible et
								votre mission (secrètes, lisibles par vous seul), les éliminations, les votes et le
								classement.
							</li>
							<li>
								<strong>Compte</strong> : par défaut, un compte anonyme technique. Si vous liez
								votre compte (Sign in with Apple ou Google), l'identifiant fourni par ce service.
							</li>
							<li>
								<strong>Achats</strong> : les packs de missions achetés. Le paiement est traité par
								Apple ou Google — nous n'avons jamais accès à vos données bancaires.
							</li>
							<li>
								<strong>Données techniques</strong> : jeton de notification (si vous activez les
								notifications) et identifiants techniques nécessaires au fonctionnement du service.
							</li>
						</ul>
						<p>
							Ces données sont traitées pour vous fournir le service (créer et rejoindre des
							parties, distribuer secrètement cibles et missions, tenir le fil et le classement),
							sur la base de l'exécution du contrat de service et, pour la photo et les
							notifications, de votre consentement.
						</p>
					</>
				)}
			</LegalSection>

			<LegalSection
				heading={isEn ? "3. Visibility between players" : "3. Visibilité entre joueurs"}
			>
				{isEn ? (
					<p>
						Interfector is a social game: your nickname, your avatar and, if you provided them, your
						first/last name and profile photo are visible to the{" "}
						<strong>other players in your games</strong> (including the player whose target you
						are). Game events (eliminations, resolved votes, end of game) are visible to all its
						participants. Your target and your mission are <strong>never</strong> visible to other
						players.
					</p>
				) : (
					<p>
						Interfector est un jeu social : votre pseudonyme, votre avatar et, si vous les avez
						renseignés, votre prénom/nom et votre photo de profil sont visibles des{" "}
						<strong>autres joueurs de vos parties</strong> (y compris du joueur dont vous êtes la
						cible). Les événements de la partie (éliminations, votes résolus, fin de partie) sont
						visibles de tous ses participants. Votre cible et votre mission ne sont{" "}
						<strong>jamais</strong> visibles des autres joueurs.
					</p>
				)}
			</LegalSection>

			<LegalSection
				heading={isEn ? "4. Hosting and processors" : "4. Hébergement et sous-traitants"}
			>
				{isEn ? (
					<>
						<p>We rely on strictly necessary technical providers:</p>
						<ul className="flex list-disc flex-col gap-2 pl-5">
							<li>
								<strong>Google Firebase</strong> — hosting of the database, authentication and
								files, in the <strong>European Union</strong> region.
							</li>
							<li>
								<strong>Apple / Google</strong> — processing of in-app purchases and, if you enable
								them, delivery of notifications.
							</li>
							<li>
								<strong>RevenueCat</strong> — technical management of in-app purchases (never any
								banking details).
							</li>
						</ul>
					</>
				) : (
					<>
						<p>Nous faisons appel à des prestataires techniques strictement nécessaires :</p>
						<ul className="flex list-disc flex-col gap-2 pl-5">
							<li>
								<strong>Google Firebase</strong> — hébergement de la base de données, de
								l'authentification et des fichiers, en région <strong>Union européenne</strong>.
							</li>
							<li>
								<strong>Apple / Google</strong> — traitement des achats intégrés et, si vous les
								activez, acheminement des notifications.
							</li>
							<li>
								<strong>RevenueCat</strong> — gestion technique des achats intégrés (jamais de
								données bancaires).
							</li>
						</ul>
					</>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "5. Data retention" : "5. Durée de conservation"}>
				{isEn ? (
					<p>
						Your profile data is kept as long as your account is active. Finished games are kept for
						your history, then their detailed game data (event feed, claims, votes, targets) is
						automatically purged <strong>30 days</strong> after the game ends — only the summary and
						the leaderboard are kept. If you delete your account, all of your data is erased and
						your nickname is anonymized in past games (see the{" "}
						<a className="text-accent hover:underline" href={`/${locale}/interfector/compte`}>
							Account deletion
						</a>{" "}
						page).
					</p>
				) : (
					<p>
						Vos données de profil sont conservées tant que votre compte est actif. Les parties
						terminées sont conservées pour votre historique, puis leurs données de jeu détaillées
						(fil d'événements, déclarations, votes, cibles) sont automatiquement purgées{" "}
						<strong>30 jours</strong> après la fin de la partie — seuls le résumé et le classement
						sont conservés. En cas de suppression du compte, l'ensemble de vos données est effacé et
						votre pseudonyme est anonymisé dans les parties passées (voir la page{" "}
						<a className="text-accent hover:underline" href={`/${locale}/interfector/compte`}>
							Suppression de compte
						</a>
						).
					</p>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "6. Security" : "6. Sécurité"}>
				{isEn ? (
					<p>
						All exchanges are encrypted (HTTPS). Data access is partitioned per player at the
						database level: your target and your mission are technically readable by you only, and
						every game action is validated server-side. No data is ever sold or used for advertising
						purposes.
					</p>
				) : (
					<p>
						Les échanges sont chiffrés (HTTPS). L'accès aux données est cloisonné par joueur au
						niveau de la base : votre cible et votre mission ne sont techniquement lisibles que par
						vous, et toutes les actions de jeu sont validées côté serveur. Aucune donnée n'est
						vendue ni utilisée à des fins publicitaires.
					</p>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "7. Audience" : "7. Public concerné"}>
				{isEn ? (
					<p>
						Interfector is a tongue-in-cheek party game, recommended for ages 13 and up. The
						missions offered by the app exclude alcohol, dangerous dares and any non-consensual
						physical contact.
					</p>
				) : (
					<p>
						Interfector est un jeu d'ambiance au second degré, recommandé à partir de 13 ans. Les
						missions proposées par l'application excluent l'alcool, les défis dangereux et tout
						contact physique non consenti.
					</p>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "8. Your rights" : "8. Vos droits"}>
				{isEn ? (
					<>
						<p>Under the GDPR, you have the following rights:</p>
						<ul className="flex list-disc flex-col gap-2 pl-5">
							<li>Access, rectification and erasure of your data.</li>
							<li>
								Deletion of your account and all your data directly from the app (Profile → Delete
								my account).
							</li>
							<li>Portability, restriction and objection to processing.</li>
						</ul>
						<p>
							To exercise these rights, write to us at {mailLink}. You may also lodge a complaint
							with the French supervisory authority, the CNIL (
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
					</>
				) : (
					<>
						<p>Conformément au RGPD, vous disposez des droits suivants :</p>
						<ul className="flex list-disc flex-col gap-2 pl-5">
							<li>Accès, rectification et effacement de vos données.</li>
							<li>
								Suppression de votre compte et de toutes vos données directement depuis
								l'application (Profil → Supprimer mon compte).
							</li>
							<li>Portabilité, limitation et opposition au traitement.</li>
						</ul>
						<p>
							Pour exercer ces droits, écrivez-nous à {mailLink}. Vous pouvez également introduire
							une réclamation auprès de la CNIL (
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
					</>
				)}
			</LegalSection>
		</LegalShell>
	);
}
