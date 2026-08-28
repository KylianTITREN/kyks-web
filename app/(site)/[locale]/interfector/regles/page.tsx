import { LegalSection, LegalShell } from "@/components/legal/LegalShell";
import type { Locale } from "@/i18n/routing";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

const CONTACT_EMAIL = "hello@kyks.io";
const LAST_UPDATED = "28 août 2026";

export const metadata: Metadata = {
	title: "Conditions & règles · Interfector",
	description:
		"Conditions d'utilisation et politique de contenu de l'application Interfector (KYKS).",
	robots: { index: false, follow: false },
};

export default async function InterfectorTermsPage({
	params,
}: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	setRequestLocale(locale);

	return (
		<LegalShell
			brand="Interfector"
			title="Conditions & règles"
			subtitle="Les conditions d'utilisation d'Interfector et notre politique de contenu."
			lastUpdated={LAST_UPDATED}
		>
			<p>
				Interfector est une application mobile éditée par <strong>KYKS</strong> (SASU, RCS Paris 929
				633 162, 14 rue Bausset, 75015 Paris) qui digitalise le jeu de soirée « Killer ». En
				installant ou en utilisant l'application, vous acceptez les présentes conditions.
			</p>

			<LegalSection heading="1. Le service">
				<p>
					Interfector permet d'organiser des parties de Killer entre amis : chaque joueur reçoit
					secrètement une cible et une mission absurde à lui faire accomplir dans la vraie vie.
					L'application orchestre la partie (distribution, déclarations, votes, classement) ; le jeu
					lui-même se joue entre personnes consentantes, dans la vie réelle, sous la seule
					responsabilité des joueurs.
				</p>
			</LegalSection>

			<LegalSection heading="2. Esprit du jeu et sécurité">
				<p>
					Interfector est un jeu d'ambiance au second degré. Trois limites ne se discutent pas :
				</p>
				<ul className="flex list-disc flex-col gap-2 pl-5">
					<li>
						<strong>Tout le monde est volontaire.</strong> On ne joue qu'avec des personnes qui ont
						accepté de jouer. Les personnes extérieures à la partie ne sont jamais des cibles ni des
						accessoires du jeu.
					</li>
					<li>
						<strong>Aucune mission dangereuse.</strong> Les missions proposées par l'application
						excluent l'alcool, les défis dangereux, la voie publique et tout contact physique non
						consenti. N'accomplissez jamais une mission d'une manière qui mettrait quelqu'un mal à
						l'aise ou en danger.
					</li>
					<li>
						<strong>Le jeu s'arrête quand quelqu'un le demande.</strong> Un joueur peut quitter une
						partie à tout moment depuis l'application.
					</li>
				</ul>
				<p>Interfector est recommandé à partir de 13 ans.</p>
			</LegalSection>

			<LegalSection heading="3. Compte et contenu utilisateur">
				<p>
					Vous choisissez un pseudonyme et, si vous le souhaitez, un prénom/nom et une photo de
					profil, visibles des autres joueurs de vos parties. Vous vous engagez à ce que ce contenu
					(ainsi que les noms de vos parties) ne soit pas offensant, haineux, sexuellement
					explicite, diffamatoire, ni ne se fasse passer pour une autre personne. Vous devez avoir
					le droit d'utiliser les contenus que vous fournissez.
				</p>
			</LegalSection>

			<LegalSection heading="4. Modération">
				<p>
					Tout joueur peut signaler un contenu inapproprié directement dans l'application (appui
					long sur un joueur → « Signaler ») ou par e-mail à{" "}
					<a className="text-accent hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
						{CONTACT_EMAIL}
					</a>
					. L'hôte d'un salon peut exclure un joueur avant le début de la partie. Nous examinons les
					signalements et pouvons retirer un contenu, anonymiser un profil ou suspendre un compte en
					cas de manquement aux présentes règles.
				</p>
			</LegalSection>

			<LegalSection heading="5. Achats">
				<p>
					Certains packs de missions sont payants. Les achats sont traités par Apple ou Google selon
					leurs conditions ; les prix sont affichés avant tout achat. Les packs achetés sont
					restaurables depuis l'application (Profil → Restaurer les achats).
				</p>
			</LegalSection>

			<LegalSection heading="6. Responsabilité">
				<p>
					L'application est fournie « en l'état ». KYKS n'est pas responsable du déroulement des
					parties dans la vie réelle, qui relèvent de la seule responsabilité des joueurs, ni des
					interruptions temporaires du service. Rien dans ces conditions n'exclut la responsabilité
					qui ne peut être exclue par la loi.
				</p>
			</LegalSection>

			<LegalSection heading="7. Droit applicable">
				<p>
					Les présentes conditions sont soumises au droit français. En cas de litige, une solution
					amiable sera recherchée avant toute action ; à défaut, les tribunaux compétents seront
					ceux du ressort de Paris, sous réserve des dispositions impératives applicables aux
					consommateurs. Vos données personnelles sont traitées conformément à notre{" "}
					<a
						className="text-accent hover:underline"
						href={`/${locale}/interfector/confidentialite`}
					>
						politique de confidentialité
					</a>
					.
				</p>
			</LegalSection>
		</LegalShell>
	);
}
