import { LegalSection, LegalShell } from "@/components/legal/LegalShell";
import type { Locale } from "@/i18n/routing";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

const CONTACT_EMAIL = "hello@kyks.io";
const LAST_UPDATED = "28 août 2026";

export const metadata: Metadata = {
	title: "Support · Interfector",
	description: "Aide et contact pour l'application Interfector (KYKS).",
	robots: { index: false, follow: false },
};

export default async function InterfectorSupportPage({
	params,
}: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	setRequestLocale(locale);

	return (
		<LegalShell
			brand="Interfector"
			title="Support"
			subtitle="Une question, un souci, un litige de mauvaise foi ? On est là."
			lastUpdated={LAST_UPDATED}
		>
			<LegalSection heading="Nous contacter">
				<p>
					Pour toute question, bug ou suggestion concernant Interfector, écrivez-nous à{" "}
					<a className="text-accent hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
						{CONTACT_EMAIL}
					</a>
					. Nous répondons généralement sous 48 h ouvrées.
				</p>
			</LegalSection>

			<LegalSection heading="Questions fréquentes">
				<ul className="flex list-disc flex-col gap-2 pl-5">
					<li>
						<strong>Ma cible a quitté la partie, que se passe-t-il ?</strong> Vous héritez
						automatiquement de sa cible — la chasse continue.
					</li>
					<li>
						<strong>Ma victime refuse d'avouer.</strong> Déclarez votre mission accomplie : si elle
						nie, les autres joueurs votent. Et si personne ne répond, le jeu tranche tout seul au
						bout d'un moment.
					</li>
					<li>
						<strong>Un achat n'apparaît pas.</strong> Ouvrez Profil → Restaurer les achats. Si le
						pack n'apparaît toujours pas, contactez-nous avec le reçu Apple ou Google.
					</li>
					<li>
						<strong>Supprimer mon compte ?</strong> Voir la page{" "}
						<a className="text-accent hover:underline" href={`/${locale}/interfector/compte`}>
							Suppression de compte
						</a>
						.
					</li>
				</ul>
			</LegalSection>

			<LegalSection heading="Signaler un contenu ou un joueur">
				<p>
					Un pseudonyme ou une photo de profil inapproprié se signale directement dans
					l'application, ou par e-mail. Nous examinons chaque signalement et retirons rapidement
					tout contenu contraire à nos règles.
				</p>
			</LegalSection>
		</LegalShell>
	);
}
