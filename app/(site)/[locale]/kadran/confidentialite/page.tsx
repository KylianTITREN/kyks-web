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
		title: isEn ? "Privacy · Kadran" : "Confidentialité · Kadran",
		description: isEn
			? "Privacy policy of the Kadran app (KYKS)."
			: "Politique de confidentialité de l'application Kadran (KYKS).",
		robots: { index: false, follow: false },
	};
}

export default async function KadranPrivacyPage({
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

	const appleLink = (
		<a
			className="text-accent hover:underline"
			href={
				isEn ? "https://www.apple.com/legal/privacy/" : "https://www.apple.com/fr/legal/privacy/"
			}
			rel="noreferrer"
			target="_blank"
		>
			{isEn ? "Apple's privacy policy" : "politique de confidentialité d'Apple"}
		</a>
	);

	const cnilLink = (
		<a
			className="text-accent hover:underline"
			href="https://www.cnil.fr"
			rel="noreferrer"
			target="_blank"
		>
			cnil.fr
		</a>
	);

	return (
		<LegalShell
			brand="Kadran"
			title={isEn ? "Privacy policy" : "Politique de confidentialité"}
			subtitle={
				isEn
					? "Kadran keeps your widgets on your iPhone. Here is exactly what that means."
					: "Kadran garde vos widgets sur votre iPhone. Voici précisément ce que cela veut dire."
			}
			lastUpdated={isEn ? "November 9, 2026" : "9 novembre 2026"}
			lastUpdatedLabel={isEn ? "Last updated" : "Dernière mise à jour"}
		>
			{isEn ? (
				<p>
					Kadran is an iPhone app published by <strong>KYKS</strong> for creating home screen
					widgets: clock, weather, calendar, reminders, music, activity, photos and memories, timer,
					shortcuts, and widgets fed by your own data (JSON APIs, Shortcuts, JavaScript scripts).
					This page explains what data the app handles, where it goes, and what your rights are, in
					accordance with the General Data Protection Regulation (GDPR).
				</p>
			) : (
				<p>
					Kadran est une application iPhone éditée par <strong>KYKS</strong> pour créer des widgets
					d'écran d'accueil : horloge, météo, agenda, rappels, musique, activité, photos et
					souvenirs, minuteur, raccourcis, et widgets alimentés par vos propres données (API JSON,
					Raccourcis, scripts JavaScript). Cette page explique quelles données l'application
					manipule, où elles vont, et quels sont vos droits, conformément au Règlement général sur
					la protection des données (RGPD).
				</p>
			)}

			<LegalSection heading={isEn ? "1. Data controller" : "1. Responsable du traitement"}>
				{isEn ? (
					<p>
						The publisher is <strong>KYKS</strong>, a French single-shareholder simplified
						joint-stock company (SASU), registered with the Paris Trade and Companies Register under
						number 929 633 162, with its registered office at 14 rue Bausset, 75015 Paris, France.
						For any question, contact us at {mailLink}.
					</p>
				) : (
					<p>
						L'éditeur est <strong>KYKS</strong>, société par actions simplifiée unipersonnelle
						(SASU), immatriculée au Registre du commerce et des sociétés de Paris sous le numéro 929
						633 162, dont le siège social est situé au 14 rue Bausset, 75015 Paris. Pour toute
						question, contactez-nous à {mailLink}.
					</p>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "2. In short" : "2. En bref"}>
				{isEn ? (
					<ul className="flex list-disc flex-col gap-2 pl-5">
						<li>
							<strong>No account, no Kadran server</strong>: your widgets, photos and settings stay
							on your iPhone. KYKS receives none of them.
						</li>
						<li>
							<strong>No advertising, no audience measurement, no tracking</strong>: the app
							contains no analytics, advertising or crash-reporting SDK.
						</li>
						<li>
							<strong>Your health data never leaves your iPhone</strong>: the Activity widget only
							reads today's step count. It is never sent, shared or used for advertising.
						</li>
						<li>
							When a widget needs outside data (weather, a city search, your own API), the request
							goes <strong>directly from your iPhone</strong> to the service concerned, as described
							below.
						</li>
					</ul>
				) : (
					<ul className="flex list-disc flex-col gap-2 pl-5">
						<li>
							<strong>Pas de compte, pas de serveur Kadran</strong> : vos widgets, vos photos et vos
							réglages restent sur votre iPhone. KYKS n'en reçoit aucun.
						</li>
						<li>
							<strong>Pas de publicité, pas de mesure d'audience, pas de pistage</strong> :
							l'application n'intègre aucun outil d'analyse, de publicité ni de rapport de plantage.
						</li>
						<li>
							<strong>Vos données de santé ne quittent jamais votre iPhone</strong> : le widget
							Activité lit seulement le nombre de pas du jour. Il n'est jamais envoyé, partagé ni
							utilisé à des fins publicitaires.
						</li>
						<li>
							Quand un widget a besoin d'une donnée extérieure (météo, recherche d'une ville, votre
							propre API), la demande part <strong>directement de votre iPhone</strong> vers le
							service concerné, comme décrit ci-dessous.
						</li>
					</ul>
				)}
			</LegalSection>

			<LegalSection
				heading={isEn ? "3. What stays on your iPhone" : "3. Ce qui reste sur votre iPhone"}
			>
				{isEn ? (
					<>
						<ul className="flex list-disc flex-col gap-2 pl-5">
							<li>
								<strong>Your widgets</strong>: their name, the texts and dates you type, the chosen
								place for the weather, the style (background, colours, font), and the values sent by
								Shortcuts or <code>kadran://</code> links. Also the state changed by the widgets'
								buttons: current page, running timer, today's counter, and the last step count read
								from Health, kept out of iCloud backups.
							</li>
							<li>
								<strong>Photos</strong>: only the photo you pick, reduced to the size of a widget
								and, when possible, cut out around its subject — on your iPhone, by Apple's Vision
								framework.
							</li>
							<li>
								<strong>Caches</strong>: the latest weather and the latest responses from your APIs
								and scripts, so that a widget can display something without a network.
							</li>
							<li>
								<strong>API tokens</strong>: stored in the iPhone Keychain, shared only between the
								app and its widgets, never written into a widget.
							</li>
						</ul>
						<p>
							This data lives in the app's storage on the device. It can be included in your iPhone
							backups (iCloud or computer) according to your own settings, under Apple's
							responsibility.
						</p>
					</>
				) : (
					<>
						<ul className="flex list-disc flex-col gap-2 pl-5">
							<li>
								<strong>Vos widgets</strong> : leur nom, les textes et dates que vous saisissez, le
								lieu choisi pour la météo, le style (fond, couleurs, police), et les valeurs
								envoyées par Raccourcis ou par les liens <code>kadran://</code>. S'y ajoute l'état
								changé par les boutons des widgets : page affichée, minuteur en cours, compteur du
								jour, et le dernier nombre de pas lu dans Santé, gardé hors des sauvegardes iCloud.
							</li>
							<li>
								<strong>Les photos</strong> : seulement la photo que vous choisissez, réduite à la
								taille d'un widget et, quand c'est possible, détourée autour de son sujet — sur
								votre iPhone, par le framework Vision d'Apple.
							</li>
							<li>
								<strong>Les caches</strong> : la dernière météo et les dernières réponses de vos API
								et de vos scripts, pour qu'un widget puisse s'afficher sans réseau.
							</li>
							<li>
								<strong>Les jetons d'API</strong> : rangés dans le Trousseau de l'iPhone, partagés
								uniquement entre l'application et ses widgets, jamais écrits dans un widget.
							</li>
						</ul>
						<p>
							Ces données vivent dans l'espace de stockage de l'application sur l'appareil. Elles
							peuvent être incluses dans les sauvegardes de votre iPhone (iCloud ou ordinateur)
							selon vos propres réglages, sous la responsabilité d'Apple.
						</p>
					</>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "4. Permissions" : "4. Autorisations"}>
				{isEn ? (
					<ul className="flex list-disc flex-col gap-2 pl-5">
						<li>
							<strong>Calendar</strong>: requested when you create an Agenda widget. Your upcoming
							events are read on the iPhone to be displayed, and never leave it.
						</li>
						<li>
							<strong>Reminders</strong>: requested when you create a Reminders widget. Your
							reminders to do are read on the iPhone to be displayed; tapping a reminder's circle in
							the widget marks it as completed. Nothing else is changed, and nothing leaves the
							iPhone.
						</li>
						<li>
							<strong>Photos</strong>: for a photo widget, Kadran uses the system photo picker, so
							it only receives the photo you choose. The Memories widget, if you add it, asks to
							read your library in order to show a photo taken on this day in past years (or one of
							your favourites): the photo is read and reduced on the iPhone, and Kadran keeps no
							copy of it.
						</li>
						<li>
							<strong>Health</strong>: requested when you create an Activity widget. Kadran only
							reads today's step count, never writes anything to Health, and does not store your
							health data in iCloud. This data is never sent to KYKS or to anyone else, and is never
							used for advertising or profiling.
						</li>
						<li>
							<strong>Apple Music</strong>: requested when you create a Vinyl widget. Kadran reads
							the track being played (title, artist, artwork, position) to display it, and the
							widget's buttons control playback. Your listening is never recorded or sent.
						</li>
						<li>
							<strong>Notifications</strong>: requested when you create a Timer widget, only to
							alert you when the timer ends. These notifications are created on the iPhone; Kadran
							does not use push notifications.
						</li>
						<li>
							<strong>Location</strong>: only if you tap "My location" in a Weather widget. The
							position is read once, approximately, to set the widget's place; only that place's
							coordinates are kept. Widgets never locate your iPhone.
						</li>
						<li>
							<strong>Local network</strong>: only if you enter the address of a device on your
							network (Home Assistant, a NAS…) in a data widget.
						</li>
					</ul>
				) : (
					<ul className="flex list-disc flex-col gap-2 pl-5">
						<li>
							<strong>Calendrier</strong> : demandé quand vous créez un widget Agenda. Vos prochains
							événements sont lus sur l'iPhone pour être affichés, et ne le quittent jamais.
						</li>
						<li>
							<strong>Rappels</strong> : demandé quand vous créez un widget Rappels. Vos rappels à
							faire sont lus sur l'iPhone pour être affichés ; toucher le rond d'un rappel dans le
							widget le marque comme fait. Rien d'autre n'est modifié, et rien ne quitte l'iPhone.
						</li>
						<li>
							<strong>Photos</strong> : pour un widget photo, Kadran passe par le sélecteur de
							photos du système ; il ne reçoit donc que la photo que vous choisissez. Le widget
							Souvenir, si vous l'ajoutez, demande à lire votre photothèque pour montrer une photo
							prise ce jour-là les années passées (ou l'une de vos favorites) : la photo est lue et
							réduite sur l'iPhone, et Kadran n'en garde aucune copie.
						</li>
						<li>
							<strong>Santé</strong> : demandé quand vous créez un widget Activité. Kadran lit
							seulement le nombre de pas du jour, n'écrit jamais rien dans Santé et ne stocke pas
							vos données de santé dans iCloud. Ces données ne sont jamais envoyées à KYKS ni à qui
							que ce soit, et ne servent jamais à la publicité ni au profilage.
						</li>
						<li>
							<strong>Apple Music</strong> : demandé quand vous créez un widget Vinyle. Kadran lit
							le morceau en cours (titre, artiste, pochette, position) pour l'afficher, et les
							boutons du widget pilotent la lecture. Votre écoute n'est ni enregistrée ni envoyée.
						</li>
						<li>
							<strong>Notifications</strong> : demandé quand vous créez un widget Minuteur,
							uniquement pour vous prévenir à la fin du minuteur. Ces notifications sont créées sur
							l'iPhone ; Kadran n'utilise pas de notifications à distance.
						</li>
						<li>
							<strong>Position</strong> : seulement si vous touchez « Ma position » dans un widget
							Météo. La position est lue une fois, de façon approximative, pour fixer le lieu du
							widget ; seules les coordonnées de ce lieu sont conservées. Les widgets ne localisent
							jamais votre iPhone.
						</li>
						<li>
							<strong>Réseau local</strong> : seulement si vous saisissez l'adresse d'un appareil de
							votre réseau (Home Assistant, NAS…) dans un widget de données.
						</li>
					</ul>
				)}
				<p>
					{isEn
						? "You can withdraw these permissions at any time in the iPhone Settings."
						: "Vous pouvez retirer ces autorisations à tout moment dans les Réglages de l'iPhone."}
				</p>
			</LegalSection>

			<LegalSection heading={isEn ? "5. Apple services" : "5. Services d'Apple"}>
				{isEn ? (
					<>
						<ul className="flex list-disc flex-col gap-2 pl-5">
							<li>
								<strong>Weather (WeatherKit)</strong>: the coordinates of the place chosen in a
								Weather widget are sent to Apple to get the forecast.
							</li>
							<li>
								<strong>Maps</strong>: the city name you search for (for the weather, the sun or the
								world clock), or your approximate position when you tap "My location", is sent to
								Apple to find the place, its name and its time zone.
							</li>
							<li>
								<strong>App Store</strong>: purchases are processed by Apple. Your Kadran Pro access
								is checked on your iPhone; KYKS never sees your name, your Apple Account or your
								payment details, only anonymous sales reports.
							</li>
							<li>
								<strong>Diagnostics</strong>: if you have agreed, in the iPhone Settings, to share
								analytics with app developers, Apple may pass anonymous crash reports on to KYKS.
							</li>
						</ul>
						<p>These services are governed by {appleLink}.</p>
					</>
				) : (
					<>
						<ul className="flex list-disc flex-col gap-2 pl-5">
							<li>
								<strong>Météo (WeatherKit)</strong> : les coordonnées du lieu choisi dans un widget
								Météo sont envoyées à Apple pour obtenir les prévisions.
							</li>
							<li>
								<strong>Plans</strong> : le nom de la ville que vous recherchez (pour la météo, le
								soleil ou l'horloge mondiale), ou votre position approximative quand vous touchez «
								Ma position », est envoyé à Apple pour trouver le lieu, son nom et son fuseau
								horaire.
							</li>
							<li>
								<strong>App Store</strong> : les achats sont traités par Apple. Votre accès à Kadran
								Pro est vérifié sur votre iPhone ; KYKS ne voit jamais votre nom, votre compte Apple
								ni vos moyens de paiement, seulement des rapports de ventes anonymes.
							</li>
							<li>
								<strong>Diagnostics</strong> : si vous avez accepté, dans les Réglages de l'iPhone,
								de partager les analyses avec les développeurs, Apple peut transmettre à KYKS des
								rapports de plantage anonymes.
							</li>
						</ul>
						<p>Ces services relèvent de la {appleLink}.</p>
					</>
				)}
			</LegalSection>

			<LegalSection
				heading={isEn ? "6. Connections you set up" : "6. Les connexions que vous configurez"}
			>
				{isEn ? (
					<>
						<p>
							A data widget calls the address <strong>you</strong> enter (a JSON API, a feed, a
							device on your network), and a script runs the code <strong>you</strong> write, on
							your iPhone. These requests go directly from your iPhone to that service, with the
							headers and token you have set: the service receives your IP address and what you send
							it, under its own privacy policy. KYKS does not see these requests or their responses.
						</p>
						<p>
							The same applies to Shortcuts and <code>kadran://</code> links: the values they send
							are written into the widget, on your iPhone.
						</p>
						<p>
							The Shortcuts and Launcher widgets only open what you configure: an app, a phone call,
							a message, an email, a route, one of your shortcuts or a web link. The number, address
							or link you enter stays in the widget; it is passed to the app concerned only when you
							tap it.
						</p>
					</>
				) : (
					<>
						<p>
							Un widget de données appelle l'adresse que <strong>vous</strong> saisissez (une API
							JSON, un flux, un appareil de votre réseau), et un script exécute le code que{" "}
							<strong>vous</strong> écrivez, sur votre iPhone. Ces requêtes partent directement de
							votre iPhone vers ce service, avec les en-têtes et le jeton que vous avez définis : le
							service reçoit votre adresse IP et ce que vous lui envoyez, selon sa propre politique
							de confidentialité. KYKS ne voit ni ces requêtes ni leurs réponses.
						</p>
						<p>
							Il en va de même pour Raccourcis et les liens <code>kadran://</code> : les valeurs
							qu'ils envoient sont écrites dans le widget, sur votre iPhone.
						</p>
						<p>
							Les widgets Raccourcis et Lanceur ouvrent seulement ce que vous configurez : une app,
							un appel, un message, un e-mail, un itinéraire, l'un de vos raccourcis ou un lien web.
							Le numéro, l'adresse ou le lien saisi reste dans le widget ; il n'est transmis à l'app
							concernée qu'au moment où vous le touchez.
						</p>
					</>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "7. Retention and deletion" : "7. Conservation et suppression"}>
				{isEn ? (
					<p>
						Everything stays on your iPhone until you delete it. Deleting a widget in the app also
						deletes its photos and its tokens; caches are replaced at each refresh. Deleting the app
						erases its data. To be sure your API tokens are erased from the Keychain, delete the
						widgets that use them before deleting the app.
					</p>
				) : (
					<p>
						Tout reste sur votre iPhone jusqu'à ce que vous le supprimiez. Supprimer un widget dans
						l'application supprime aussi ses photos et ses jetons ; les caches sont remplacés à
						chaque actualisation. Supprimer l'application efface ses données. Pour être sûr que vos
						jetons d'API soient effacés du Trousseau, supprimez les widgets qui les utilisent avant
						de supprimer l'application.
					</p>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "8. Audience" : "8. Public concerné"}>
				<p>
					{isEn
						? "Kadran is intended for a general audience. Since it collects no personal data, it collects none from children either."
						: "Kadran s'adresse au grand public. Comme elle ne collecte aucune donnée personnelle, elle n'en collecte pas non plus auprès des enfants."}
				</p>
			</LegalSection>

			<LegalSection heading={isEn ? "9. Your rights" : "9. Vos droits"}>
				{isEn ? (
					<p>
						Under the GDPR, you have the rights of access, rectification, erasure, portability,
						restriction and objection. As KYKS holds no data about you, you exercise them directly
						in the app and the iPhone Settings. For any question, write to {mailLink}. You can also
						lodge a complaint with the French supervisory authority, the CNIL ({cnilLink}).
					</p>
				) : (
					<p>
						Conformément au RGPD, vous disposez des droits d'accès, de rectification, d'effacement,
						de portabilité, de limitation et d'opposition. KYKS ne détenant aucune donnée vous
						concernant, vous les exercez directement dans l'application et dans les Réglages de
						l'iPhone. Pour toute question, écrivez à {mailLink}. Vous pouvez également introduire
						une réclamation auprès de la CNIL ({cnilLink}).
					</p>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "10. Changes" : "10. Évolutions"}>
				{isEn ? (
					<p>
						If Kadran evolves in a way that changes the data it handles (Contacts, location…), this
						policy and the App Store privacy label will be updated <strong>before</strong> that
						version is released. The date at the top of this page indicates the latest revision.
					</p>
				) : (
					<p>
						Si Kadran évolue d'une manière qui change les données qu'elle manipule (Contacts,
						position…), cette politique et l'étiquette de confidentialité de l'App Store seront
						mises à jour <strong>avant</strong> la sortie de cette version. La date en haut de cette
						page indique la dernière révision.
					</p>
				)}
			</LegalSection>

			<LegalSection heading="11. Contact">
				{isEn ? (
					<p>
						For any question about this policy, write to <strong>KYKS</strong> at {mailLink} or by
						post at 14 rue Bausset, 75015 Paris, France.
					</p>
				) : (
					<p>
						Pour toute question sur cette politique, écrivez à <strong>KYKS</strong> à {mailLink} ou
						par courrier au 14 rue Bausset, 75015 Paris.
					</p>
				)}
			</LegalSection>
		</LegalShell>
	);
}
