import { LegalSection, LegalShell } from "@/components/legal/LegalShell";
import type { Locale } from "@/i18n/routing";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

const CONTACT_EMAIL = "hello@kyks.io";
const LAST_UPDATED = "11 juillet 2026";

export const metadata: Metadata = {
	title: "Confidentialité · Clork",
	description: "Politique de confidentialité de l'application Clork (KYKS).",
	robots: { index: false, follow: false },
};

export default async function ClorkPrivacyPage({
	params,
}: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	setRequestLocale(locale);

	return (
		<LegalShell
			title="Politique de confidentialité"
			subtitle="Comment Clork collecte, utilise et protège vos données personnelles."
			lastUpdated={LAST_UPDATED}
		>
			<p>
				Clork est une application mobile éditée par <strong>KYKS</strong> qui transforme la photo
				d'un planning papier en calendrier personnel. Cette page explique quelles données nous
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
						<strong>Compte</strong> : adresse e-mail, prénom ou pseudonyme, mot de passe (stocké
						sous forme chiffrée, jamais en clair).
					</li>
					<li>
						<strong>Plannings</strong> : vos horaires de travail, pauses, congés et absences, saisis
						ou extraits d'une photo.
					</li>
					<li>
						<strong>Photos de planning</strong> que vous choisissez de scanner (voir la section 3).
					</li>
					<li>
						<strong>Préférences</strong> : thème, créneaux types, réglages de pause et de rappels.
					</li>
					<li>
						<strong>Données techniques</strong> : jeton de notification (si vous activez les
						rappels), identifiants techniques nécessaires au fonctionnement du service.
					</li>
				</ul>
				<p>
					Ces données sont traitées pour vous fournir le service (lecture des plannings, calendrier,
					partage entre collègues, export vers votre calendrier), sur la base de l'exécution du
					contrat de service et de votre consentement.
				</p>
			</LegalSection>

			<LegalSection heading="3. Photos de planning et données de tiers">
				<p>
					Une photo de planning de magasin contient généralement les horaires et les noms{" "}
					<strong>d'autres personnes que vous</strong> (vos collègues). En scannant un planning,
					vous en restez responsable et vous vous engagez à n'utiliser ces informations que dans le
					cadre professionnel prévu (connaître vos horaires et ceux de votre équipe).
				</p>
				<p>
					La photo est envoyée de façon sécurisée à notre service d'extraction, puis{" "}
					<strong>supprimée automatiquement dès que la lecture des horaires est terminée</strong>.
					Elle n'est jamais rendue publique, ni utilisée à des fins publicitaires ou de revente.
				</p>
			</LegalSection>

			<LegalSection heading="4. Hébergement et sous-traitants">
				<p>Nous faisons appel à des prestataires techniques strictement nécessaires :</p>
				<ul className="flex list-disc flex-col gap-2 pl-5">
					<li>
						<strong>Supabase</strong> — hébergement de la base de données, de l'authentification et
						des fichiers (région Union européenne).
					</li>
					<li>
						<strong>Anthropic (Claude)</strong> — lecture des plannings par intelligence
						artificielle. Ce traitement implique un{" "}
						<strong>transfert de la photo vers les États-Unis</strong>, encadré par les clauses
						contractuelles types de la Commission européenne. Les données ne sont pas utilisées pour
						entraîner les modèles.
					</li>
					<li>
						<strong>Apple / Expo</strong> — acheminement des notifications, si vous les activez.
					</li>
				</ul>
			</LegalSection>

			<LegalSection heading="5. Durée de conservation">
				<p>
					Vos plannings et données de compte sont conservés tant que votre compte est actif. Les
					photos scannées sont supprimées immédiatement après leur lecture. En cas de suppression du
					compte, l'ensemble de vos données (plannings, scans, partages) est effacé.
				</p>
			</LegalSection>

			<LegalSection heading="6. Sécurité">
				<p>
					Les échanges sont chiffrés (HTTPS). L'accès aux données est cloisonné par utilisateur au
					niveau de la base (row level security), de sorte que vous ne pouvez accéder qu'à vos
					propres données et à celles explicitement partagées avec vous.
				</p>
			</LegalSection>

			<LegalSection heading="7. Vos droits">
				<p>Conformément au RGPD, vous disposez des droits suivants :</p>
				<ul className="flex list-disc flex-col gap-2 pl-5">
					<li>Accès, rectification et effacement de vos données.</li>
					<li>
						Suppression de votre compte et de toutes vos données directement depuis l'application
						(Profil → Compte → Supprimer mon compte).
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
