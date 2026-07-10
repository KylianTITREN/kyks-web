import { LegalSection, LegalShell } from "@/components/legal/LegalShell";
import type { Locale } from "@/i18n/routing";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

const SUPPORT_EMAIL = "hello@kyks.io";
const LAST_UPDATED = "10 juillet 2026";

export const metadata: Metadata = {
	title: "Support · Clork",
	description: "Aide et contact pour l'application Clork (KYKS).",
	robots: { index: false, follow: false },
};

export default async function ClorkSupportPage({
	params,
}: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	setRequestLocale(locale);

	return (
		<LegalShell
			title="Aide & support"
			subtitle="Une question, un souci, une suggestion sur Clork ? On est là."
			lastUpdated={LAST_UPDATED}
		>
			<LegalSection heading="Nous contacter">
				<p>
					Écrivez-nous à{" "}
					<a className="text-accent hover:underline" href={`mailto:${SUPPORT_EMAIL}`}>
						{SUPPORT_EMAIL}
					</a>
					. Nous répondons généralement sous 48 heures ouvrées. Décrivez votre problème le plus
					précisément possible (ce que vous faisiez, ce qui s'est passé) — une capture d'écran aide
					beaucoup.
				</p>
			</LegalSection>

			<LegalSection heading="Questions fréquentes">
				<div className="flex flex-col gap-6">
					<div className="flex flex-col gap-2">
						<h3 className="font-sans text-base font-semibold text-text">
							Comment scanner un planning ?
						</h3>
						<p>
							Onglet <strong>Ajouter</strong> → <strong>Scanner le planning</strong>. Prenez le
							tableau en photo bien à plat, sans reflet et en cadrant l'ensemble. L'intelligence
							artificielle lit les horaires, puis vous validez votre ligne avant l'enregistrement.
						</p>
					</div>
					<div className="flex flex-col gap-2">
						<h3 className="font-sans text-base font-semibold text-text">
							Le scan lit mal mes horaires
						</h3>
						<p>
							Reprenez la photo avec un meilleur éclairage et un cadrage plus net. Vous pouvez
							toujours corriger chaque créneau à la main sur l'écran de validation.
						</p>
					</div>
					<div className="flex flex-col gap-2">
						<h3 className="font-sans text-base font-semibold text-text">
							Comment partager mon planning à un collègue ?
						</h3>
						<p>
							Après un scan, un code de partage est généré ; votre collègue le saisit dans l'app
							(Ajouter → « J'ai reçu un code ») pour récupérer ses propres horaires sans re-scanner.
						</p>
					</div>
					<div className="flex flex-col gap-2">
						<h3 className="font-sans text-base font-semibold text-text">
							Comment supprimer mon compte et mes données ?
						</h3>
						<p>
							Depuis l'application : <strong>Profil → Compte → Supprimer mon compte</strong>. Toutes
							vos données (plannings, scans, partages) sont définitivement effacées.
						</p>
					</div>
					<div className="flex flex-col gap-2">
						<h3 className="font-sans text-base font-semibold text-text">
							Comment fonctionne l'accès Premium ?
						</h3>
						<p>
							La version gratuite permet d'utiliser Clork au quotidien (récupération de plannings
							par code, ajout manuel). Les fonctions Premium (scans illimités, thèmes, export
							calendrier, partage, vue équipe) se débloquent avec un abonnement ou un code d'accès
							fourni par l'équipe.
						</p>
					</div>
				</div>
			</LegalSection>

			<LegalSection heading="Confidentialité">
				<p>
					Le traitement de vos données est détaillé dans notre{" "}
					<a className="text-accent hover:underline" href={`/${locale}/clork/confidentialite`}>
						politique de confidentialité
					</a>
					.
				</p>
			</LegalSection>
		</LegalShell>
	);
}
