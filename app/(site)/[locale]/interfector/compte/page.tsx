import { LegalSection, LegalShell } from "@/components/legal/LegalShell";
import type { Locale } from "@/i18n/routing";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

const CONTACT_EMAIL = "hello@kyks.io";
const LAST_UPDATED = "28 août 2026";

export const metadata: Metadata = {
	title: "Suppression de compte · Interfector",
	description: "Supprimer votre compte Interfector et les données associées.",
	robots: { index: false, follow: false },
};

export default async function InterfectorAccountDeletionPage({
	params,
}: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	setRequestLocale(locale);

	return (
		<LegalShell
			brand="Interfector"
			title="Suppression de compte"
			subtitle="Comment supprimer votre compte Interfector et l'ensemble de vos données."
			lastUpdated={LAST_UPDATED}
		>
			<LegalSection heading="1. Depuis l'application (recommandé)">
				<p>
					Ouvrez Interfector puis <strong>Profil → Supprimer mon compte</strong>. La suppression est
					immédiate et définitive. Si vous êtes en pleine partie, vous en êtes retiré proprement (le
					jeu continue sans vous) avant l'effacement de vos données.
				</p>
			</LegalSection>

			<LegalSection heading="2. Par e-mail">
				<p>
					Si vous n'avez plus accès à l'application, écrivez-nous à{" "}
					<a className="text-accent hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
						{CONTACT_EMAIL}
					</a>{" "}
					depuis une adresse permettant de vous identifier, en précisant votre pseudonyme. Nous
					traitons la demande sous <strong>30 jours</strong> au plus.
				</p>
			</LegalSection>

			<LegalSection heading="3. Ce qui est supprimé">
				<ul className="flex list-disc flex-col gap-2 pl-5">
					<li>Votre profil : pseudonyme, avatar et photo éventuelle.</li>
					<li>Votre historique de parties, vos statistiques et votre liste d'amis.</li>
					<li>Votre compte d'authentification et vos jetons de notification.</li>
				</ul>
				<p>
					Dans les parties passées auxquelles vous avez participé, votre pseudonyme est{" "}
					<strong>anonymisé</strong> (les autres joueurs conservent leur propre historique, sans
					pouvoir vous identifier). Les justificatifs d'achat restent conservés par Apple ou Google
					selon leurs propres politiques — nous n'en détenons aucune donnée bancaire.
				</p>
			</LegalSection>

			<LegalSection heading="4. Données conservées temporairement">
				<p>
					Aucune, hors obligations légales : les éventuelles écritures comptables liées à des achats
					sont conservées le temps requis par la loi française, sans lien avec votre profil de jeu.
				</p>
			</LegalSection>
		</LegalShell>
	);
}
