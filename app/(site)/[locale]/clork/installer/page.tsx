import { LegalSection, LegalShell } from "@/components/legal/LegalShell";
import type { Locale } from "@/i18n/routing";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

const CONTACT_EMAIL = "hello@kyks.io";
const LAST_UPDATED = "1er août 2026";

export const metadata: Metadata = {
	title: "Installer Clork",
	description: "Recevez le planning de votre magasin directement sur votre téléphone.",
	robots: { index: false, follow: false },
};

/**
 * Page d'atterrissage du lien « installer l'application » présent en pied des
 * e-mails de planning envoyés par Clork Pro. Elle est lue par des salariées de
 * magasin qui viennent de recevoir leurs horaires — pas par des développeurs.
 * Son adresse ne doit jamais changer : elle part dans des e-mails qu'on ne peut
 * plus modifier une fois envoyés.
 */
export default async function ClorkInstallPage({
	params,
}: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	setRequestLocale(locale);

	return (
		<LegalShell
			title="Installer Clork"
			subtitle="Votre planning de la semaine, directement sur votre téléphone."
			lastUpdated={LAST_UPDATED}
		>
			<LegalSection heading="À quoi ça sert">
				<p>
					Votre magasin publie désormais le planning dans Clork. Vous recevez déjà vos horaires par
					e-mail — avec l'application, vous les avez en plus sur votre téléphone, avec un rappel la
					veille au soir, et les changements arrivent en direct si votre responsable corrige quelque
					chose.
				</p>
			</LegalSection>

			<LegalSection heading="Disponibilité">
				<p>
					L'application est en cours de finalisation et arrive très bientôt sur l'App Store. En
					attendant, vous n'avez rien à faire :{" "}
					<strong>votre planning continue de vous être envoyé par e-mail</strong> à chaque
					publication.
				</p>
				<p>
					Pour être prévenue dès sa sortie, écrivez-nous à{" "}
					<a className="text-accent hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
						{CONTACT_EMAIL}
					</a>
					.
				</p>
			</LegalSection>

			<LegalSection heading="Une fois l'application installée">
				<p>
					Rendez-vous dans <strong>Réglages → Mon magasin</strong> et indiquez votre enseigne ainsi
					que le numéro de votre magasin (celui qui figure sur vos documents). Votre responsable
					confirme que vous faites partie de l'équipe, et vos horaires apparaissent automatiquement
					à chaque publication.
				</p>
				<p>
					Si votre responsable a déjà enregistré votre adresse e-mail, il n'y a même rien à saisir :
					créez simplement votre compte avec cette adresse et votre magasin sera déjà rattaché.
				</p>
			</LegalSection>

			<LegalSection heading="Ne plus recevoir ces e-mails">
				<p>
					Chaque e-mail de planning contient un lien de désinscription en bas de message. Vous
					pouvez l'utiliser à tout moment — cela n'affecte pas votre planning, seulement son envoi
					par e-mail.
				</p>
			</LegalSection>

			<LegalSection heading="Confidentialité">
				<p>
					Vos horaires sont transmis par votre employeur et traités pour son compte. Le détail
					figure dans notre{" "}
					<a className="text-accent hover:underline" href={`/${locale}/clork/confidentialite`}>
						politique de confidentialité
					</a>
					.
				</p>
			</LegalSection>
		</LegalShell>
	);
}
