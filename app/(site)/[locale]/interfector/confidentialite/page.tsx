import { LegalSection, LegalShell } from "@/components/legal/LegalShell";
import type { Locale } from "@/i18n/routing";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

const CONTACT_EMAIL = "hello@kyks.io";
const LAST_UPDATED = "28 août 2026";

export const metadata: Metadata = {
	title: "Confidentialité · Interfector",
	description: "Politique de confidentialité de l'application Interfector (KYKS).",
	robots: { index: false, follow: false },
};

export default async function InterfectorPrivacyPage({
	params,
}: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	setRequestLocale(locale);

	return (
		<LegalShell
			brand="Interfector"
			title="Politique de confidentialité"
			subtitle="Comment Interfector collecte, utilise et protège vos données personnelles."
			lastUpdated={LAST_UPDATED}
		>
			<p>
				Interfector est une application mobile éditée par <strong>KYKS</strong> qui digitalise le
				jeu de soirée « Killer » : chaque joueur reçoit une cible secrète et une mission à lui faire
				accomplir, entre amis et dans la vraie vie. Cette page explique quelles données nous
				traitons, pourquoi, et quels sont vos droits, conformément au Règlement général sur la
				protection des données (RGPD).
			</p>

			<LegalSection heading="1. Responsable du traitement">
				<p>
					Le responsable du traitement est <strong>KYKS</strong>, société par actions simplifiée
					unipersonnelle (SASU), immatriculée au Registre du commerce et des sociétés de Paris sous
					le numéro 929 633 162, dont le siège social est situé au 14 rue Bausset, 75015 Paris. Pour
					toute question relative à vos données, contactez-nous à{" "}
					<a className="text-accent hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
						{CONTACT_EMAIL}
					</a>
					.
				</p>
			</LegalSection>

			<LegalSection heading="2. Données que nous traitons">
				<ul className="flex list-disc flex-col gap-2 pl-5">
					<li>
						<strong>Profil</strong> : un pseudonyme choisi par vous, un avatar, et — si vous le
						souhaitez — une photo de profil. La photo est entièrement optionnelle : le jeu
						fonctionne sans.
					</li>
					<li>
						<strong>Parties</strong> : les parties auxquelles vous participez, votre cible et votre
						mission (secrètes, lisibles par vous seul), les éliminations, les votes et le
						classement.
					</li>
					<li>
						<strong>Compte</strong> : par défaut, un compte anonyme technique. Si vous liez votre
						compte (Sign in with Apple ou Google), l'identifiant fourni par ce service.
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
					Ces données sont traitées pour vous fournir le service (créer et rejoindre des parties,
					distribuer secrètement cibles et missions, tenir le fil et le classement), sur la base de
					l'exécution du contrat de service et, pour la photo et les notifications, de votre
					consentement.
				</p>
			</LegalSection>

			<LegalSection heading="3. Visibilité entre joueurs">
				<p>
					Interfector est un jeu social : votre pseudonyme, votre avatar et, si vous en avez ajouté
					une, votre photo de profil sont visibles des{" "}
					<strong>autres joueurs de vos parties</strong> (y compris du joueur dont vous êtes la
					cible). Les événements de la partie (éliminations, votes résolus, fin de partie) sont
					visibles de tous ses participants. Votre cible et votre mission ne sont{" "}
					<strong>jamais</strong> visibles des autres joueurs.
				</p>
			</LegalSection>

			<LegalSection heading="4. Hébergement et sous-traitants">
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
						<strong>RevenueCat</strong> — gestion technique des achats intégrés (jamais de données
						bancaires).
					</li>
				</ul>
			</LegalSection>

			<LegalSection heading="5. Durée de conservation">
				<p>
					Vos données de profil sont conservées tant que votre compte est actif. Les parties
					terminées sont conservées pour votre historique puis purgées de leurs données de jeu
					détaillées. En cas de suppression du compte, l'ensemble de vos données est effacé et votre
					pseudonyme est anonymisé dans les parties passées (voir la page{" "}
					<a className="text-accent hover:underline" href={`/${locale}/interfector/compte`}>
						Suppression de compte
					</a>
					).
				</p>
			</LegalSection>

			<LegalSection heading="6. Sécurité">
				<p>
					Les échanges sont chiffrés (HTTPS). L'accès aux données est cloisonné par joueur au niveau
					de la base : votre cible et votre mission ne sont techniquement lisibles que par vous, et
					toutes les actions de jeu sont validées côté serveur. Aucune donnée n'est vendue ni
					utilisée à des fins publicitaires.
				</p>
			</LegalSection>

			<LegalSection heading="7. Public concerné">
				<p>
					Interfector est un jeu d'ambiance au second degré, recommandé à partir de 13 ans. Les
					missions proposées par l'application excluent l'alcool, les défis dangereux et tout
					contact physique non consenti.
				</p>
			</LegalSection>

			<LegalSection heading="8. Vos droits">
				<p>Conformément au RGPD, vous disposez des droits suivants :</p>
				<ul className="flex list-disc flex-col gap-2 pl-5">
					<li>Accès, rectification et effacement de vos données.</li>
					<li>
						Suppression de votre compte et de toutes vos données directement depuis l'application
						(Profil → Supprimer mon compte).
					</li>
					<li>Portabilité, limitation et opposition au traitement.</li>
				</ul>
				<p>
					Pour exercer ces droits, écrivez-nous à{" "}
					<a className="text-accent hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
						{CONTACT_EMAIL}
					</a>
					. Vous pouvez également introduire une réclamation auprès de la CNIL (
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
			</LegalSection>
		</LegalShell>
	);
}
