import { LegalSection, LegalShell } from "@/components/legal/LegalShell";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

const CONTACT_EMAIL = "hello@kyks.io";
const PHONE = "+33 7 85 26 41 10";
const PHONE_HREF = "tel:+33785264110";

/** Apps dont la politique de confidentialité est publiée sur ce site. */
const APPS = [
	{ slug: "intrus", name: "Intrus" },
	{ slug: "interfector", name: "Interfector" },
	{ slug: "bluffo", name: "Bluffo" },
	{ slug: "tilto", name: "Tilto" },
	{ slug: "clork", name: "Clork", frenchOnly: true },
];

const linkClass = "text-accent hover:underline";

export async function generateMetadata({
	params,
}: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
	const { locale } = await params;
	const isEn = locale === "en";
	return {
		title: isEn ? "Legal notice" : "Mentions légales",
		description: isEn
			? "Legal notice of the kyks.io website: publisher, publication director, hosting."
			: "Mentions légales du site kyks.io : éditeur, directeur de la publication, hébergement.",
		robots: { index: false, follow: false },
	};
}

export default async function LegalNoticePage({ params }: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	setRequestLocale(locale);
	const isEn = locale === "en";

	const mailLink = (
		<a className={linkClass} href={`mailto:${CONTACT_EMAIL}`}>
			{CONTACT_EMAIL}
		</a>
	);

	const cnilLink = (
		<a className={linkClass} href="https://www.cnil.fr" rel="noreferrer" target="_blank">
			cnil.fr
		</a>
	);

	return (
		<LegalShell
			brand="KYKS"
			title={isEn ? "Legal notice" : "Mentions légales"}
			subtitle={
				isEn
					? "Legal information about the kyks.io website and its publisher."
					: "Informations légales relatives au site kyks.io et à son éditeur."
			}
			lastUpdated={isEn ? "October 1, 2026" : "1er octobre 2026"}
			lastUpdatedLabel={isEn ? "Last updated" : "Dernière mise à jour"}
		>
			<p>
				{isEn
					? "In accordance with French law no. 2004-575 of 21 June 2004 on confidence in the digital economy (LCEN), this page sets out the information relating to the publisher and the host of the kyks.io website."
					: "Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN), cette page présente les informations relatives à l'éditeur et à l'hébergeur du site kyks.io."}
			</p>

			<LegalSection heading={isEn ? "1. Publisher" : "1. Éditeur"}>
				{isEn ? (
					<p>
						The kyks.io website is published by <strong>KYKS</strong>, a French single-shareholder
						simplified joint-stock company (SASU) with a share capital of €1,000, registered with
						the Paris Trade and Companies Register (RCS Paris) under number 929 633 162, with its
						registered office at 14 rue Bausset, 75015 Paris, France.
					</p>
				) : (
					<p>
						Le site kyks.io est édité par <strong>KYKS</strong>, société par actions simplifiée
						unipersonnelle (SASU) au capital de 1 000 €, immatriculée au Registre du commerce et des
						sociétés de Paris (RCS Paris) sous le numéro 929 633 162, dont le siège social est situé
						au 14 rue Bausset, 75015 Paris, France.
					</p>
				)}
				<p>
					{isEn
						? "KYKS also publishes the mobile apps Intrus, Interfector, Bluffo, Tilto and Clork, whose information and support pages are hosted on this website."
						: "KYKS édite également les applications mobiles Intrus, Interfector, Bluffo, Tilto et Clork, dont les pages d'information et d'assistance sont publiées sur ce site."}
				</p>
			</LegalSection>

			<LegalSection heading={isEn ? "2. Publication director" : "2. Directeur de la publication"}>
				<p>{isEn ? "Kylian Titren, President of KYKS." : "Kylian Titren, Président de KYKS."}</p>
			</LegalSection>

			<LegalSection heading="3. Contact">
				<ul className="flex list-disc flex-col gap-2 pl-5">
					<li>
						{isEn ? "E-mail: " : "E-mail : "}
						{mailLink}
					</li>
					<li>
						{isEn ? "Phone: " : "Téléphone : "}
						<a className={linkClass} href={PHONE_HREF}>
							{PHONE}
						</a>
					</li>
					<li>{isEn ? "Post: " : "Courrier : "}KYKS, 14 rue Bausset, 75015 Paris, France</li>
				</ul>
			</LegalSection>

			<LegalSection heading={isEn ? "4. Hosting" : "4. Hébergement"}>
				<p>
					{isEn ? "The website is hosted by " : "Le site est hébergé par "}
					<strong>Vercel Inc.</strong>, 440 N Barranca Ave #4133, Covina, CA 91723,{" "}
					{isEn ? "United States" : "États-Unis"} — +1 559 288 7060 —{" "}
					<a className={linkClass} href="https://vercel.com" rel="noreferrer" target="_blank">
						vercel.com
					</a>
					.
				</p>
				<p>
					{isEn
						? "KYKS apps are distributed through Apple's App Store and Google Play, depending on the platforms on which each one is available. The data they process is hosted by the providers listed in each app's privacy policy (see section 6)."
						: "Les applications de KYKS sont distribuées par l'App Store d'Apple et par Google Play, selon les plateformes sur lesquelles chacune est disponible. Les données qu'elles traitent sont hébergées par les prestataires indiqués dans la politique de confidentialité de chaque application (voir la section 6)."}
				</p>
			</LegalSection>

			<LegalSection heading={isEn ? "5. Intellectual property" : "5. Propriété intellectuelle"}>
				<p>
					{isEn
						? "Unless otherwise stated, all elements of the kyks.io website — texts, visuals, logos, interfaces, as well as the names and graphic elements of KYKS and its apps — are the property of KYKS. Any reproduction, representation, adaptation or use, in whole or in part, without KYKS's prior written consent is prohibited and may constitute an infringement punishable under Articles L. 335-2 et seq. of the French Intellectual Property Code."
						: "Sauf mention contraire, l'ensemble des éléments du site kyks.io — textes, visuels, logos, interfaces, ainsi que les noms et éléments graphiques de KYKS et de ses applications — est la propriété de KYKS. Toute reproduction, représentation, adaptation ou exploitation, totale ou partielle, sans l'autorisation écrite préalable de KYKS est interdite et constitue une contrefaçon sanctionnée par les articles L. 335-2 et suivants du Code de la propriété intellectuelle."}
				</p>
				<p>
					{isEn
						? "Third-party names, trademarks and logos mentioned on the website, in particular in the collaborations section, remain the property of their respective owners."
						: "Les noms, marques et logos de tiers cités sur le site, notamment dans les références de collaborations, restent la propriété de leurs titulaires respectifs."}
				</p>
			</LegalSection>

			<LegalSection heading={isEn ? "6. Personal data" : "6. Données personnelles"}>
				<p>
					{isEn
						? "The website's analytics cookies are only set with your consent, collected through the banner shown on your first visit; no data is shared for advertising purposes. You can change your choice at any time with the “Manage cookies” link at the bottom of every page."
						: "Les cookies d'analyse du site ne sont déposés qu'avec votre accord, recueilli par le bandeau affiché lors de votre première visite ; aucune donnée n'est partagée à des fins publicitaires. Vous pouvez modifier votre choix à tout moment grâce au lien « Gérer les cookies » en bas de chaque page."}
				</p>
				<p>
					{isEn
						? "How each app processes your personal data is described in its own privacy policy:"
						: "Le traitement de vos données personnelles par chaque application est décrit dans sa politique de confidentialité :"}
				</p>
				<ul className="flex list-disc flex-col gap-2 pl-5">
					{APPS.map((app) => (
						<li key={app.slug}>
							<Link className={linkClass} href={`/${app.slug}/confidentialite`}>
								{app.name}
							</Link>
							{isEn && app.frenchOnly ? " (in French)" : null}
						</li>
					))}
				</ul>
				<p>
					{isEn
						? "To exercise your rights (access, rectification, erasure, etc.) or for any question, write to "
						: "Pour exercer vos droits (accès, rectification, effacement…) ou pour toute question, écrivez à "}
					{mailLink}.{" "}
					{isEn
						? "You may also lodge a complaint with the French supervisory authority, the CNIL "
						: "Vous pouvez également introduire une réclamation auprès de la CNIL "}
					({cnilLink}).
				</p>
			</LegalSection>
		</LegalShell>
	);
}
