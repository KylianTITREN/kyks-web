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
		title: isEn ? "Account deletion · Tilto" : "Suppression de compte · Tilto",
		description: isEn
			? "Delete your Tilto account and the data linked to it."
			: "Supprimer votre compte Tilto et les données associées.",
		robots: { index: false, follow: false },
	};
}

/** Servie aussi sous /tilto/delete-account, l'adresse déclarée aux stores. */
export default async function TiltoAccountDeletionPage({
	params,
}: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	setRequestLocale(locale);
	const isEn = locale === "en";

	const subject = isEn ? "Tilto — account deletion" : "Tilto — suppression de compte";
	const mailLink = (
		<a
			className="text-accent hover:underline"
			href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`}
		>
			{CONTACT_EMAIL}
		</a>
	);

	const privacyLink = (
		<a className="text-accent hover:underline" href={`/${locale}/tilto/confidentialite`}>
			{isEn ? "privacy policy" : "politique de confidentialité"}
		</a>
	);

	return (
		<LegalShell
			brand="Tilto"
			title={isEn ? "Account deletion" : "Suppression de compte"}
			subtitle={
				isEn
					? "How to delete your Tilto account and the data linked to it."
					: "Comment supprimer votre compte Tilto et les données associées."
			}
			lastUpdated={isEn ? "September 29, 2026" : "29 septembre 2026"}
			lastUpdatedLabel={isEn ? "Last updated" : "Dernière mise à jour"}
		>
			<LegalSection
				heading={isEn ? "1. From the app (recommended)" : "1. Depuis l'application (recommandé)"}
			>
				{isEn ? (
					<>
						<ol className="flex list-decimal flex-col gap-2 pl-5">
							<li>Open Tilto and tap your avatar at the top right of the home screen (Profile).</li>
							<li>
								At the bottom of the screen, tap <strong>Delete my account</strong>, then{" "}
								<strong>Confirm deletion</strong>.
							</li>
						</ol>
						<p>
							Deletion is <strong>immediate and permanent</strong>: the app also erases the data
							stored on your phone and starts again with a new anonymous profile. If your profile is
							linked to Apple (iPhone), the app asks you to confirm with Apple so that it can revoke
							the access granted to Tilto.
						</p>
						<p>Deletion is refused while you are in an ongoing online game: leave it first.</p>
					</>
				) : (
					<>
						<ol className="flex list-decimal flex-col gap-2 pl-5">
							<li>Ouvrez Tilto et touchez votre avatar en haut à droite de l'accueil (Profil).</li>
							<li>
								En bas de l'écran, touchez <strong>Supprimer mon compte</strong>, puis{" "}
								<strong>Confirmer la suppression</strong>.
							</li>
						</ol>
						<p>
							La suppression est <strong>immédiate et définitive</strong> : l'application efface
							aussi les données stockées sur votre téléphone et repart avec un nouveau profil
							anonyme. Si votre profil est lié à Apple (iPhone), l'application vous demande de
							confirmer avec Apple pour révoquer l'accès accordé à Tilto.
						</p>
						<p>
							La suppression est refusée tant que vous êtes dans une partie en ligne en cours :
							quittez-la d'abord.
						</p>
					</>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "2. Without the app" : "2. Sans l'application"}>
				{isEn ? (
					<p>
						Write to us at {mailLink} from the address linked to your account, with the subject
						"Tilto — account deletion". We delete the account within <strong>30 days</strong> and
						confirm by reply. An anonymous profile, never linked to Apple or Google, is tied to no
						e-mail address: delete it from the app.
					</p>
				) : (
					<p>
						Écrivez-nous à {mailLink} depuis l'adresse liée à votre compte, avec pour objet « Tilto
						— suppression de compte ». Nous supprimons le compte sous <strong>30 jours</strong> et
						vous le confirmons par retour. Un profil anonyme, jamais lié à Apple ou Google, n'est
						rattaché à aucune adresse e-mail : supprimez-le depuis l'application.
					</p>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "3. What is deleted" : "3. Ce qui est supprimé"}>
				{isEn ? (
					<ul className="flex list-disc flex-col gap-2 pl-5">
						<li>Your profile: first name, needle colour, stats and language.</li>
						<li>
							The purchase entitlements we store and your transaction history at RevenueCat, the
							provider that manages in-app purchases.
						</li>
						<li>Your notification tokens.</li>
						<li>
							Your sign-in identity: your authentication account and, if you had linked it, the
							identifier and e-mail address of your Apple or Google account.
						</li>
						<li>On your phone: settings, the last table's names and the game in progress.</li>
					</ul>
				) : (
					<ul className="flex list-disc flex-col gap-2 pl-5">
						<li>Votre profil : prénom, couleur d'aiguille, statistiques et langue.</li>
						<li>
							Vos droits d'achat enregistrés chez nous et votre historique de transactions chez
							RevenueCat, le prestataire qui gère les achats intégrés.
						</li>
						<li>Vos jetons de notification.</li>
						<li>
							Votre identifiant de connexion : votre compte d'authentification et, si vous l'aviez
							lié, l'identifiant et l'adresse e-mail de votre compte Apple ou Google.
						</li>
						<li>
							Sur votre téléphone : les réglages, les prénoms de la dernière table et la partie en
							cours.
						</li>
					</ul>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "4. Purchases and Tilto Pass" : "4. Achats et Tilto Pass"}>
				{isEn ? (
					<>
						<p>
							Purchases stay attached to your Apple or Google account: you can restore them with
							"Restore purchases", including after reinstalling the app.
						</p>
						<p>
							Deleting your account does <strong>not</strong> cancel an ongoing Tilto Pass
							subscription: subscriptions are managed by Apple or Google Play, not by us. Cancel it
							yourself, otherwise it keeps renewing: on iPhone from your Apple account settings
							(Settings → your name → Subscriptions), on Android in the Play Store (Play Store →
							profile → Payments &amp; subscriptions → Subscriptions). Refunds are handled by Apple
							or Google Play under their own terms.
						</p>
					</>
				) : (
					<>
						<p>
							Vos achats restent rattachés à votre compte Apple ou Google : vous pouvez les
							restaurer avec « Restaurer les achats », y compris après une réinstallation.
						</p>
						<p>
							La suppression du compte ne résilie <strong>pas</strong> un abonnement Tilto Pass en
							cours : les abonnements sont gérés par Apple ou Google Play, pas par nous. Résiliez-le
							vous-même, sinon il continue de se renouveler : sur iPhone depuis les réglages de
							votre compte Apple (Réglages → votre nom → Abonnements), sur Android dans le Play
							Store (Play Store → profil → Paiements et abonnements → Abonnements). Les
							remboursements sont traités par Apple ou Google Play selon leurs propres conditions.
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
					<ul className="flex list-disc flex-col gap-2 pl-5">
						<li>
							The online rooms you took part in keep your first name, clues, needles and scores,
							visible to their other members, until they are automatically erased, at the latest 30
							days after their last activity (see the {privacyLink}).
						</li>
						<li>
							If RevenueCat is temporarily unavailable, the deletion of your history there is
							retried automatically until it succeeds.
						</li>
						<li>
							Crash reports, which are not linked to your account, are erased after 90 days by
							Google Firebase Crashlytics.
						</li>
						<li>
							Any accounting records linked to purchases are kept for the period required by French
							law, in a form that no longer identifies you. Apple and Google keep their own purchase
							receipts under their own policies — we hold no banking data.
						</li>
					</ul>
				) : (
					<ul className="flex list-disc flex-col gap-2 pl-5">
						<li>
							Les salons en ligne auxquels vous avez participé gardent votre prénom, vos indices,
							vos aiguilles et vos scores, visibles de leurs autres membres, jusqu'à leur effacement
							automatique, au plus tard 30 jours après leur dernière activité (voir la {privacyLink}
							).
						</li>
						<li>
							Si RevenueCat est momentanément indisponible, la suppression de votre historique y est
							relancée automatiquement jusqu'à aboutir.
						</li>
						<li>
							Les rapports de plantage, qui ne sont pas liés à votre compte, sont effacés au bout de
							90 jours par Google Firebase Crashlytics.
						</li>
						<li>
							Les éventuelles écritures comptables liées à des achats sont conservées le temps
							requis par la loi française, sous une forme qui ne vous identifie plus. Apple et
							Google conservent leurs propres reçus d'achat selon leurs politiques — nous ne
							détenons aucune donnée bancaire.
						</li>
					</ul>
				)}
			</LegalSection>
		</LegalShell>
	);
}
