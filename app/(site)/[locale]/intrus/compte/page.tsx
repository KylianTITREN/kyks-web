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
		title: isEn ? "Account deletion · Intrus" : "Suppression de compte · Intrus",
		description: isEn
			? "Delete your Intrus account and the data linked to it."
			: "Supprimer votre compte Intrus et les données associées.",
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
			brand="Intrus"
			title={isEn ? "Account deletion" : "Suppression de compte"}
			subtitle={
				isEn
					? "How to delete your Intrus account and all of your data."
					: "Comment supprimer votre compte Intrus et l'ensemble de vos données."
			}
			lastUpdated={isEn ? "September 29, 2026" : "29 septembre 2026"}
			lastUpdatedLabel={isEn ? "Last updated" : "Dernière mise à jour"}
		>
			<LegalSection
				heading={isEn ? "1. From the app (recommended)" : "1. Depuis l'application (recommandé)"}
			>
				{isEn ? (
					<>
						<p>
							Open Intrus, then <strong>Profile → Settings (gear icon) → Delete my account</strong>{" "}
							and confirm. Deletion is <strong>immediate and permanent</strong>: the app signs you
							out and restarts with a brand-new anonymous profile, as on first launch. This works
							for anonymous profiles as well as for profiles linked with Sign in with Apple (iPhone)
							or Continue with Google (iPhone and Android). If your profile is linked, the app also
							revokes the access granted to Intrus by your Apple account (after asking you to
							confirm with Apple) or signs you out of your Google account in the app; to remove
							Intrus from the apps connected to your Google account, go to your Google account
							settings.
						</p>
						<p>
							If you are a member of a game that has not ended yet, the app declines the request:
							leave the room or wait for the game to end, then try again.
						</p>
					</>
				) : (
					<>
						<p>
							Ouvrez Intrus puis{" "}
							<strong>Profil → Réglages (roue dentée) → Supprimer mon compte</strong> et confirmez.
							La suppression est <strong>immédiate et définitive</strong> : l'application vous
							déconnecte et redémarre avec un nouveau profil anonyme, comme au premier lancement.
							Cela vaut aussi bien pour un profil anonyme que pour un profil rattaché avec Se
							connecter avec Apple (iPhone) ou Continuer avec Google (iPhone et Android). Si votre
							profil est rattaché, l'application révoque aussi l'accès accordé à Intrus par votre
							compte Apple (après vous avoir demandé de confirmer avec Apple) ou vous déconnecte de
							votre compte Google dans l'application ; pour retirer Intrus des applications
							associées à votre compte Google, passez par les paramètres de votre compte Google.
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
						your account, tell us the e-mail address of the Apple or Google account you linked or,
						for an anonymous profile, your nickname and the code of a room you played in recently,
						sent from the phone that holds the profile. We handle the request within{" "}
						<strong>30 days</strong> at most.
					</p>
				) : (
					<p>
						Si vous n'avez plus accès à l'application, écrivez-nous à {mailLink}. Pour que nous
						puissions retrouver votre compte, indiquez l'adresse e-mail du compte Apple ou Google
						rattaché ou, pour un profil anonyme, votre pseudo et le code d'un salon dans lequel vous
						avez joué récemment, depuis le téléphone qui porte le profil. Nous traitons la demande
						sous <strong>30 jours</strong> au plus.
					</p>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "3. What is deleted" : "3. Ce qui est supprimé"}>
				{isEn ? (
					<>
						<ul className="flex list-disc flex-col gap-2 pl-5">
							<li>
								Your profile: nickname, avatar (colour, accessory, eyes), app language and
								notification token.
							</li>
							<li>
								Your progression: experience points, level, sonars, games played and won,
								achievements and the cosmetics you own.
							</li>
							<li>
								Your purchase log and your INTRUS+ status on our side (RevenueCat keeps its own
								transaction history, see section 5).
							</li>
							<li>
								Your authentication account, including, if you had linked it, the Apple or Google
								identifier and e-mail address (and, for Google, the name and profile-picture URL of
								your Google account).
							</li>
						</ul>
						<p>
							In the games you played that have ended, your player data is{" "}
							<strong>anonymised</strong>: your nickname is replaced by "Joueur supprimé" (including
							in the other players' game data) and your avatar by the default one, so that the other
							players keep their game history. Your private game data (role, missions, Bluetooth
							token) is erased. What remains until these games are erased is listed in section 5.
						</p>
					</>
				) : (
					<>
						<ul className="flex list-disc flex-col gap-2 pl-5">
							<li>
								Votre profil : pseudo, avatar (couleur, accessoire, yeux), langue de l'application
								et jeton de notification.
							</li>
							<li>
								Votre progression : points d'expérience, niveau, sonars, parties jouées et gagnées,
								succès et cosmétiques possédés.
							</li>
							<li>
								Votre journal d'achats et votre statut INTRUS+ de notre côté (RevenueCat conserve
								son propre historique des transactions, voir la section 5).
							</li>
							<li>
								Votre compte d'authentification, y compris, si vous l'aviez rattaché, l'identifiant
								Apple ou Google et l'adresse e-mail (et, pour Google, le nom et l'adresse de la
								photo de profil de votre compte Google).
							</li>
						</ul>
						<p>
							Dans les parties terminées auxquelles vous avez participé, vos données de joueur sont{" "}
							<strong>anonymisées</strong> : votre pseudo est remplacé par « Joueur supprimé » (y
							compris dans les données de partie des autres joueurs) et votre avatar par celui par
							défaut, afin que les autres joueurs conservent leur historique. Vos données privées de
							partie (rôle, missions, jeton Bluetooth) sont effacées. Ce qui subsiste jusqu'à
							l'effacement de ces parties est indiqué à la section 5.
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
							subscription: subscriptions are managed by Apple or Google Play, not by us. Before or
							after deleting, cancel it yourself, otherwise it keeps renewing: on iPhone from your
							Apple account settings (Settings → your name → Subscriptions), on Android in the Play
							Store (Play Store → profile → Payments &amp; subscriptions → Subscriptions). A free
							trial in progress is cancelled the same way.
						</p>
						<p>
							Sonar packs already spent and the <strong>lifetime</strong> INTRUS+ purchase are tied
							to the profile being deleted and are not restored on a new profile. Refunds are
							handled by Apple or Google Play under their own terms. Apple and Google Play keep
							their own purchase receipts under their own policies — we hold no banking data.
						</p>
					</>
				) : (
					<>
						<p>
							La suppression du compte ne résilie <strong>pas</strong> un abonnement INTRUS+ en
							cours : les abonnements sont gérés par Apple ou Google Play, pas par nous. Avant ou
							après la suppression, résiliez-le vous-même, sinon il continue de se renouveler : sur
							iPhone depuis les réglages de votre compte Apple (Réglages → votre nom → Abonnements),
							sur Android dans le Play Store (Play Store → profil → Paiements et abonnements →
							Abonnements). Un essai gratuit en cours s'annule de la même façon.
						</p>
						<p>
							Les packs de sonars déjà dépensés et l'achat INTRUS+ <strong>à vie</strong> sont liés
							au profil supprimé et ne sont pas restitués sur un nouveau profil. Les remboursements
							sont traités par Apple ou Google Play selon leurs propres conditions. Apple et Google
							Play conservent leurs propres reçus d'achat selon leurs politiques — nous ne détenons
							aucune donnée bancaire.
						</p>
					</>
				)}
			</LegalSection>

			<LegalSection
				heading={
					isEn ? "5. Data kept after deletion" : "5. Données conservées après la suppression"
				}
			>
				{isEn ? (
					<>
						<p>Some data is not erased straight away:</p>
						<ul className="flex list-disc flex-col gap-2 pl-5">
							<li>
								<strong>RevenueCat</strong>, which manages in-app purchases, keeps the history of
								your transactions under your pseudonymous account identifier (a random technical
								identifier, without your nickname or e-mail address). It is not deleted
								automatically: write to us at {mailLink} to have it deleted.
							</li>
							<li>
								Ended games you took part in still contain this identifier, but no longer your
								nickname, until they are automatically erased 90 days after their end (see the{" "}
								{privacyLink}).
							</li>
							<li>
								Crash reports sent before the deletion contain this identifier and are erased after
								90 days by Google Firebase Crashlytics.
							</li>
							<li>
								Any accounting records linked to purchases are kept for the period required by
								French law, in a form that no longer identifies you.
							</li>
						</ul>
					</>
				) : (
					<>
						<p>Certaines données ne sont pas effacées immédiatement :</p>
						<ul className="flex list-disc flex-col gap-2 pl-5">
							<li>
								<strong>RevenueCat</strong>, qui gère les achats intégrés, conserve l'historique de
								vos transactions sous l'identifiant pseudonyme de votre compte (un identifiant
								technique aléatoire, sans votre pseudo ni votre adresse e-mail). Il n'est pas
								supprimé automatiquement : écrivez-nous à {mailLink} pour le faire supprimer.
							</li>
							<li>
								Les parties terminées auxquelles vous avez participé contiennent encore cet
								identifiant, mais plus votre pseudo, jusqu'à leur effacement automatique 90 jours
								après leur fin (voir la {privacyLink}).
							</li>
							<li>
								Les rapports de plantage envoyés avant la suppression contiennent cet identifiant et
								sont effacés au bout de 90 jours par Google Firebase Crashlytics.
							</li>
							<li>
								Les éventuelles écritures comptables liées à des achats sont conservées le temps
								requis par la loi française, sous une forme qui ne vous identifie plus.
							</li>
						</ul>
					</>
				)}
			</LegalSection>
		</LegalShell>
	);
}
