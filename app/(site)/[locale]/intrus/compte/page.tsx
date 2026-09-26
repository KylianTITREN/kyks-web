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
		title: isEn ? "Account deletion · INTRUS" : "Suppression de compte · INTRUS",
		description: isEn
			? "Delete your INTRUS account and the data linked to it."
			: "Supprimer votre compte INTRUS et les données associées.",
		robots: { index: false, follow: false },
	};
}

export default async function IntrusAccountDeletionPage({
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

	const privacyLink = (
		<a className="text-accent hover:underline" href={`/${locale}/intrus/confidentialite`}>
			{isEn ? "privacy policy" : "politique de confidentialité"}
		</a>
	);

	return (
		<LegalShell
			brand="INTRUS"
			title={isEn ? "Account deletion" : "Suppression de compte"}
			subtitle={
				isEn
					? "How to delete your INTRUS account and all of your data."
					: "Comment supprimer votre compte INTRUS et l'ensemble de vos données."
			}
			lastUpdated={isEn ? "September 26, 2026" : "26 septembre 2026"}
			lastUpdatedLabel={isEn ? "Last updated" : "Dernière mise à jour"}
		>
			<LegalSection
				heading={isEn ? "1. From the app (recommended)" : "1. Depuis l'application (recommandé)"}
			>
				{isEn ? (
					<>
						<p>
							Open INTRUS, then <strong>Profile → Account → Delete my account</strong> and confirm.
							Deletion is <strong>immediate and permanent</strong>: the app signs you out and
							restarts with a brand-new anonymous profile, as on first launch. This works for both
							anonymous profiles and profiles linked with Sign in with Apple.
						</p>
						<p>
							If you are a member of a game that has not ended yet, the app declines the request:
							leave the room or wait for the game to end, then try again.
						</p>
					</>
				) : (
					<>
						<p>
							Ouvrez INTRUS puis <strong>Profil → Compte → Supprimer mon compte</strong> et
							confirmez. La suppression est <strong>immédiate et définitive</strong> : l'application
							vous déconnecte et redémarre avec un nouveau profil anonyme, comme au premier
							lancement. Cela vaut aussi bien pour un profil anonyme que pour un profil rattaché
							avec Se connecter avec Apple.
						</p>
						<p>
							Si vous êtes membre d'une partie qui n'est pas terminée, l'application refuse la
							demande : quittez le salon ou attendez la fin de la partie, puis réessayez.
						</p>
					</>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "2. By e-mail" : "2. Par e-mail"}>
				{isEn ? (
					<p>
						If you no longer have access to the app, write to us at {mailLink}. So that we can find
						your account, tell us the e-mail address of the Apple account you linked or, for an
						anonymous profile, your nickname and the code of a room you played in recently, sent
						from the phone that holds the profile. We handle the request within{" "}
						<strong>30 days</strong> at most.
					</p>
				) : (
					<p>
						Si vous n'avez plus accès à l'application, écrivez-nous à {mailLink}. Pour que nous
						puissions retrouver votre compte, indiquez l'adresse e-mail du compte Apple rattaché ou,
						pour un profil anonyme, votre pseudo et le code d'un salon dans lequel vous avez joué
						récemment, depuis le téléphone qui porte le profil. Nous traitons la demande sous{" "}
						<strong>30 jours</strong> au plus.
					</p>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "3. What is deleted" : "3. Ce qui est supprimé"}>
				{isEn ? (
					<>
						<ul className="flex list-disc flex-col gap-2 pl-5">
							<li>
								Your profile: nickname, avatar (colour, accessory, eyes) and notification token.
							</li>
							<li>
								Your progression: experience points, level, sonars, games played and won,
								achievements and the cosmetics you own.
							</li>
							<li>Your purchase log and your INTRUS+ status on our side.</li>
							<li>
								Your authentication account, including the Apple identifier and e-mail address if
								you had linked it.
							</li>
						</ul>
						<p>
							In the games you played that have ended, your player data is{" "}
							<strong>anonymised</strong>: your nickname is replaced by "Deleted player" and your
							avatar by the default one, so that the other players keep their game history without
							being able to identify you. Your private game data (role, missions, Bluetooth token)
							is erased.
						</p>
					</>
				) : (
					<>
						<ul className="flex list-disc flex-col gap-2 pl-5">
							<li>
								Votre profil : pseudo, avatar (couleur, accessoire, yeux) et jeton de notification.
							</li>
							<li>
								Votre progression : points d'expérience, niveau, sonars, parties jouées et gagnées,
								succès et cosmétiques possédés.
							</li>
							<li>Votre journal d'achats et votre statut INTRUS+ de notre côté.</li>
							<li>
								Votre compte d'authentification, y compris l'identifiant Apple et l'adresse e-mail
								si vous l'aviez rattaché.
							</li>
						</ul>
						<p>
							Dans les parties terminées auxquelles vous avez participé, vos données de joueur sont{" "}
							<strong>anonymisées</strong> : votre pseudo est remplacé par « Joueur supprimé » et
							votre avatar par celui par défaut, afin que les autres joueurs conservent leur
							historique sans pouvoir vous identifier. Vos données privées de partie (rôle,
							missions, jeton Bluetooth) sont effacées.
						</p>
					</>
				)}
			</LegalSection>

			<LegalSection
				heading={isEn ? "4. INTRUS+ subscription and purchases" : "4. Abonnement INTRUS+ et achats"}
			>
				{isEn ? (
					<>
						<p>
							Deleting your account does <strong>not</strong> cancel an ongoing INTRUS+
							subscription: subscriptions are managed by Apple, not by us. Before or after deleting,
							cancel it yourself from your Apple account settings (Settings → your name →
							Subscriptions), otherwise it keeps renewing. A free trial in progress is cancelled the
							same way.
						</p>
						<p>
							Sonar packs already spent and the <strong>lifetime</strong> INTRUS+ purchase are tied
							to the profile being deleted and are not restored on a new profile. Refunds are
							handled by Apple under its own terms. Apple keeps its own purchase receipts under its
							own policies — we hold no banking data.
						</p>
					</>
				) : (
					<>
						<p>
							La suppression du compte ne résilie <strong>pas</strong> un abonnement INTRUS+ en
							cours : les abonnements sont gérés par Apple, pas par nous. Avant ou après la
							suppression, résiliez-le vous-même depuis les réglages de votre compte Apple (Réglages
							→ votre nom → Abonnements), sinon il continue de se renouveler. Un essai gratuit en
							cours s'annule de la même façon.
						</p>
						<p>
							Les packs de sonars déjà dépensés et l'achat INTRUS+ <strong>à vie</strong> sont liés
							au profil supprimé et ne sont pas restitués sur un nouveau profil. Les remboursements
							sont traités par Apple selon ses propres conditions. Apple conserve ses propres reçus
							d'achat selon ses politiques — nous ne détenons aucune donnée bancaire.
						</p>
					</>
				)}
			</LegalSection>

			<LegalSection
				heading={isEn ? "5. Data kept temporarily" : "5. Données conservées temporairement"}
			>
				{isEn ? (
					<p>
						None, apart from legal obligations: any accounting records linked to purchases are kept
						for the period required by French law, in a form that no longer identifies you. Ended
						games in which you appear as "Deleted player" are themselves automatically erased 90
						days after their end (see the {privacyLink}).
					</p>
				) : (
					<p>
						Aucune, hors obligations légales : les éventuelles écritures comptables liées à des
						achats sont conservées le temps requis par la loi française, sous une forme qui ne vous
						identifie plus. Les parties terminées où vous apparaissez comme « Joueur supprimé » sont
						elles-mêmes effacées automatiquement 90 jours après leur fin (voir la {privacyLink}).
					</p>
				)}
			</LegalSection>
		</LegalShell>
	);
}
