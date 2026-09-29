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
		title: isEn ? "Privacy · Tilto" : "Confidentialité · Tilto",
		description: isEn
			? "Privacy policy of the Tilto app (KYKS)."
			: "Politique de confidentialité de l'application Tilto (KYKS).",
		robots: { index: false, follow: false },
	};
}

export default async function TiltoPrivacyPage({
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

	const accountLink = (
		<a className="text-accent hover:underline" href={`/${locale}/tilto/compte`}>
			{isEn ? "Account deletion" : "Suppression de compte"}
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
			brand="Tilto"
			title={isEn ? "Privacy policy" : "Politique de confidentialité"}
			subtitle={
				isEn
					? "How Tilto collects, uses and protects your personal data."
					: "Comment Tilto collecte, utilise et protège vos données personnelles."
			}
			lastUpdated={isEn ? "September 29, 2026" : "29 septembre 2026"}
			lastUpdatedLabel={isEn ? "Last updated" : "Dernière mise à jour"}
		>
			{isEn ? (
				<p>
					Tilto is a mobile app published by <strong>KYKS</strong>: a party game for 2 to 12
					players. Each round, a card shows two extremes (Cold ↔ Hot, Salty ↔ Sweet…); the Tilter
					secretly sees a target hidden on a dial and gives a single clue, then the others tilt the
					needle to find it. You play on one phone passed around, or each on your own phone in an
					online room joined with a code, a QR code or an invite link. This page explains what data
					we process, why, and what your rights are, in accordance with the General Data Protection
					Regulation (GDPR).
				</p>
			) : (
				<p>
					Tilto est une application mobile éditée par <strong>KYKS</strong> : un jeu d'ambiance de 2
					à 12 joueurs. À chaque manche, une carte propose deux extrêmes (Froid ↔ Chaud, Salé ↔
					Sucré…) ; le Tilteur voit en secret une cible cachée sur un cadran et donne un seul
					indice, puis les autres penchent l'aiguille pour la retrouver. On joue sur un seul
					téléphone que l'on se passe, ou chacun sur le sien dans un salon en ligne rejoint avec un
					code, un QR code ou un lien d'invitation. Cette page explique quelles données nous
					traitons, pourquoi, et quels sont vos droits, conformément au Règlement général sur la
					protection des données (RGPD).
				</p>
			)}

			<LegalSection heading={isEn ? "1. Data controller" : "1. Responsable du traitement"}>
				{isEn ? (
					<p>
						The data controller is <strong>KYKS</strong>, a French single-shareholder simplified
						joint-stock company (SASU), registered with the Paris Trade and Companies Register under
						number 929 633 162, with its registered office at 14 rue Bausset, 75015 Paris, France.
						For any question about your data, contact us at {mailLink}.
					</p>
				) : (
					<p>
						Le responsable du traitement est <strong>KYKS</strong>, société par actions simplifiée
						unipersonnelle (SASU), immatriculée au Registre du commerce et des sociétés de Paris
						sous le numéro 929 633 162, dont le siège social est situé au 14 rue Bausset, 75015
						Paris. Pour toute question relative à vos données, contactez-nous à {mailLink}.
					</p>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "2. Data we process" : "2. Données que nous traitons"}>
				{isEn ? (
					<>
						<ul className="flex list-disc flex-col gap-2 pl-5">
							<li>
								<strong>Account</strong>: on first launch, an anonymous technical account tied to
								this phone is created — no e-mail address, no password. If you choose to link it
								from your profile with <strong>Continue with Apple</strong> (iPhone), our
								authentication service records the identifier Apple provides, the e-mail address you
								agree to share (your real address or Apple's private relay address) and your name if
								you share it. With <strong>Continue with Google</strong> (iPhone and Android), it
								records the identifier, e-mail address, name and profile-picture URL of your Google
								account. The app shows that e-mail address (or, failing that, that name) on your
								profile to indicate the linked account and only uses it to find your profile again
								on another phone; your in-game first name remains the one you type in the app.
							</li>
							<li>
								<strong>Profile</strong>: the first name you choose (12 characters at most), your
								needle colour, your counters (games played, wins, bullseyes) and the language chosen
								in the app, synced with your account so you can find them on another phone. The
								first name is free text: if you type your real first name, it becomes personal data
								and is treated as such.
							</li>
							<li>
								<strong>Online games</strong>: the rooms you create or join (code, host, mode,
								language, card packs, timer, "After midnight" option), your first name, colour and
								team in the room, your presence (connected or not, last activity) and, for each
								round, the card, the target, the clue typed by the Tilter (40 characters at most),
								the needles placed and the points. There is no free chat between players.
							</li>
							<li>
								<strong>Purchases</strong>: the entitlements unlocked by your purchases (packs,
								Tilto Pass) and the date they were last updated, recorded by our server. Payment is
								processed by Apple on iPhone and by Google Play on Android — we never have access to
								your banking details, your name or your billing address.
							</li>
							<li>
								<strong>Notifications</strong>: your phone's notification token and the app's
								language, only if notifications are allowed on your phone (the app asks when you
								enter an online room; on Android 12 and earlier, the system allows them by default)
								and the Profile → Notifications setting is on.
							</li>
							<li>
								<strong>Diagnostics</strong>: in released versions, when the app crashes or hits an
								unexpected error, a technical report (stack trace, device model and OS version, app
								version and a random installation identifier specific to Crashlytics) is sent to
								Google Firebase Crashlytics so we can fix the bug. These reports contain neither
								your account identifier, nor your first name, nor your e-mail address, nor any game
								content.
							</li>
							<li>
								<strong>Camera</strong>: only to scan a room's QR code, when you choose "Scan a QR
								code". The image is analysed on your phone; it is neither recorded nor sent.
							</li>
							<li>
								<strong>Local settings</strong>: sound and haptics preferences, the last timer
								chosen, the age confirmation and the switch for the "After midnight" pack, and, in
								single-phone mode, the names of the last table and the game in progress — stored on
								your device only and never sent to us.
							</li>
						</ul>
						<p>
							Tilto embeds no advertising, audience-measurement or tracking SDK and does not access
							your phone's advertising identifier; its only diagnostic tool is the crash reporting
							described above. We do not collect your location, contacts, photos or microphone. In
							single-phone mode, the names of the players at the table never leave the device.
						</p>
					</>
				) : (
					<>
						<ul className="flex list-disc flex-col gap-2 pl-5">
							<li>
								<strong>Compte</strong> : au premier lancement, un compte anonyme technique propre à
								ce téléphone est créé — aucune adresse e-mail, aucun mot de passe. Si vous
								choisissez de le lier depuis votre profil avec <strong>Continuer avec Apple</strong>{" "}
								(iPhone), notre service d'authentification enregistre l'identifiant fourni par
								Apple, l'adresse e-mail que vous acceptez de partager (votre adresse réelle ou
								l'adresse relais privée d'Apple) et votre nom si vous le partagez. Avec{" "}
								<strong>Continuer avec Google</strong> (iPhone et Android), il enregistre
								l'identifiant, l'adresse e-mail, le nom et l'adresse de la photo de profil de votre
								compte Google. L'application affiche cette adresse e-mail (ou, à défaut, ce nom) sur
								votre profil pour indiquer le compte lié et ne s'en sert que pour retrouver votre
								profil sur un autre téléphone ; votre prénom de jeu reste celui que vous saisissez
								dans l'application.
							</li>
							<li>
								<strong>Profil</strong> : le prénom que vous choisissez (12 caractères au plus), la
								couleur de votre aiguille, vos compteurs (parties jouées, victoires, cibles à 4
								points) et la langue choisie dans l'application, synchronisés avec votre compte pour
								les retrouver sur un autre téléphone. Le prénom est libre : si vous y saisissez
								votre vrai prénom, il devient une donnée personnelle et est traité comme telle.
							</li>
							<li>
								<strong>Parties en ligne</strong> : les salons que vous créez ou rejoignez (code,
								hôte, mode, langue, packs de cartes, chrono, option « Après minuit »), votre prénom,
								votre couleur et votre équipe dans le salon, votre présence (connecté ou non,
								dernière activité) et, pour chaque manche, la carte, la cible, l'indice saisi par le
								Tilteur (40 caractères au plus), les aiguilles posées et les points. Il n'y a pas de
								discussion libre entre joueurs.
							</li>
							<li>
								<strong>Achats</strong> : les droits débloqués par vos achats (packs, Tilto Pass) et
								leur date de mise à jour, enregistrés par notre serveur. Le paiement est traité par
								Apple sur iPhone et par Google Play sur Android — nous n'avons jamais accès à vos
								données bancaires, à votre nom ni à votre adresse de facturation.
							</li>
							<li>
								<strong>Notifications</strong> : le jeton de notification de votre téléphone et la
								langue de l'application, uniquement si les notifications sont autorisées sur votre
								téléphone (l'application le demande en entrant dans un salon en ligne ; sur Android
								12 et versions antérieures, le système les autorise par défaut) et que le réglage
								Profil → Notifications est activé.
							</li>
							<li>
								<strong>Diagnostic</strong> : dans les versions publiées, en cas de plantage ou
								d'erreur inattendue, un rapport technique (trace d'exécution, modèle et version du
								système, version de l'application et un identifiant d'installation aléatoire propre
								à Crashlytics) est envoyé à Google Firebase Crashlytics pour que nous puissions
								corriger le bug. Ces rapports ne contiennent ni l'identifiant de votre compte, ni
								votre prénom, ni votre adresse e-mail, ni contenu de partie.
							</li>
							<li>
								<strong>Caméra</strong> : uniquement pour scanner le QR code d'un salon, lorsque
								vous choisissez « Scanner un QR code ». L'image est analysée sur votre téléphone ;
								elle n'est ni enregistrée ni transmise.
							</li>
							<li>
								<strong>Réglages locaux</strong> : préférences de sons et de vibrations, dernier
								chrono choisi, confirmation de majorité et interrupteur du pack « Après minuit » et,
								en mode 1 téléphone, les prénoms de la dernière table et la partie en cours —
								stockés sur votre appareil uniquement et jamais transmis.
							</li>
						</ul>
						<p>
							Tilto n'embarque aucun SDK publicitaire, de mesure d'audience ni de pistage et
							n'accède pas à l'identifiant publicitaire de votre téléphone ; son seul outil de
							diagnostic est le rapport de plantage décrit ci-dessus. Nous ne collectons ni votre
							position, ni vos contacts, ni vos photos, ni votre micro. En mode 1 téléphone, les
							prénoms des joueurs de la table ne quittent jamais l'appareil.
						</p>
					</>
				)}
			</LegalSection>

			<LegalSection
				heading={isEn ? "3. Purposes and legal bases" : "3. Finalités et bases légales"}
			>
				{isEn ? (
					<ul className="flex list-disc flex-col gap-2 pl-5">
						<li>
							<strong>Running online games</strong> (rooms, rounds, scores, rematch): your account,
							first name and game data — performance of the service contract.
						</li>
						<li>
							<strong>Keeping and syncing your profile</strong> (first name, colour, counters):
							performance of the service contract.
						</li>
						<li>
							<strong>Finding your profile on another phone</strong>: Continue with Apple or
							Continue with Google, at your own initiative — performance of the service contract.
						</li>
						<li>
							<strong>In-app purchases and Tilto Pass</strong>: your entitlements and the events
							RevenueCat sends us — performance of the contract and our legal obligations (proof of
							purchase, refunds, accounting).
						</li>
						<li>
							<strong>Game notifications</strong> (game start, your turn to tilt, time to guess, end
							of game): your notification token — your consent, given through the system permission
							and revocable at any time in your phone's settings or in Profile → Notifications.
							Their text never contains the target or the clue.
						</li>
						<li>
							<strong>Scanning a QR code</strong>: your consent, given through the system camera
							permission. You can always type the code by hand instead.
						</li>
						<li>
							<strong>Security and fair play</strong> (server-side game logic, target kept secret
							until the reveal, limits on attempts against abuse, authenticated purchase webhooks,
							technical logs): our legitimate interest in keeping games honest and the service
							reliable.
						</li>
						<li>
							<strong>App stability</strong> (crash reports): our legitimate interest in finding and
							fixing bugs.
						</li>
					</ul>
				) : (
					<ul className="flex list-disc flex-col gap-2 pl-5">
						<li>
							<strong>Faire fonctionner le jeu en ligne</strong> (salons, manches, scores, revanche)
							: votre compte, votre prénom et vos données de partie — exécution du contrat de
							service.
						</li>
						<li>
							<strong>Conserver et synchroniser votre profil</strong> (prénom, couleur, compteurs) :
							exécution du contrat de service.
						</li>
						<li>
							<strong>Retrouver votre profil sur un autre téléphone</strong> : Continuer avec Apple
							ou Continuer avec Google, à votre initiative — exécution du contrat de service.
						</li>
						<li>
							<strong>Achats intégrés et Tilto Pass</strong> : vos droits d'achat et les événements
							que RevenueCat nous transmet — exécution du contrat et obligations légales (preuve
							d'achat, remboursements, comptabilité).
						</li>
						<li>
							<strong>Notifications de partie</strong> (début de partie, à toi de tilter, à vous de
							deviner, fin de partie) : votre jeton de notification — votre consentement, donné via
							la permission du système et révocable à tout moment dans les réglages du téléphone ou
							dans Profil → Notifications. Leur texte ne contient jamais la cible ni l'indice.
						</li>
						<li>
							<strong>Scan du QR code</strong> : votre consentement, donné via la permission caméra
							du système. Vous pouvez toujours saisir le code à la main.
						</li>
						<li>
							<strong>Sécurité et fair-play</strong> (logique de jeu côté serveur, cible gardée
							secrète jusqu'à la révélation, limites de tentatives contre les abus, webhooks d'achat
							authentifiés, journaux techniques) : notre intérêt légitime à garder les parties
							honnêtes et le service fiable.
						</li>
						<li>
							<strong>Stabilité de l'application</strong> (rapports de plantage) : notre intérêt
							légitime à trouver et corriger les bugs.
						</li>
					</ul>
				)}
			</LegalSection>

			<LegalSection
				heading={isEn ? "4. Visibility between players" : "4. Visibilité entre joueurs"}
			>
				{isEn ? (
					<p>
						In an online room, the other members see your first name, your needle colour, your team,
						whether you are connected, the scores and, when you are the Tilter, your clue. The
						target is visible to <strong>the Tilter only</strong> until the round is revealed, and
						the needles placed are revealed to the room only at that point. Your profile counters
						and your account's e-mail address are never shown to other players. In single-phone
						mode, everything stays on the device.
					</p>
				) : (
					<p>
						Dans un salon en ligne, les autres membres voient votre prénom, la couleur de votre
						aiguille, votre équipe, si vous êtes connecté, les scores et, quand vous êtes le
						Tilteur, votre indice. La cible n'est visible que <strong>du seul Tilteur</strong>{" "}
						jusqu'à la révélation de la manche, et les aiguilles posées ne sont dévoilées au salon
						qu'à ce moment-là. Vos compteurs de profil et l'adresse e-mail de votre compte ne sont
						jamais montrés aux autres joueurs. En mode 1 téléphone, tout reste sur l'appareil.
					</p>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "5. In-app purchases" : "5. Achats intégrés"}>
				{isEn ? (
					<p>
						Tilto includes the Classic pack (200 cards) for free. The Happy hour, Pop culture,
						Family and After midnight packs are sold individually; the <strong>Tilto Pass</strong>{" "}
						unlocks every pack, current and future, through a monthly subscription or a one-time
						lifetime purchase. Payment is handled entirely by <strong>Apple</strong> (App Store) on
						iPhone and by <strong>Google Play</strong> (Google Play Billing) on Android, under their
						own terms: we never see your payment method or your identity.{" "}
						<strong>RevenueCat</strong> receives the transaction receipts from Apple and Google
						Play, checks them and notifies our server, which records the active entitlements of your
						account. Your RevenueCat identifier is your account identifier. Purchases stay tied to
						your Apple or Google account and can be recovered with "Restore purchases". Refunds and
						subscription management (renewal, cancellation) are handled by Apple or Google Play, not
						by us: in your Apple account settings on iPhone, or on Android in the Play Store
						(profile → Payments &amp; subscriptions → Subscriptions).
					</p>
				) : (
					<p>
						Tilto inclut gratuitement le pack Classique (200 cartes). Les packs Apéro, Culture pop,
						Famille et Après minuit s'achètent à l'unité ; le <strong>Tilto Pass</strong> débloque
						tous les packs, actuels et à venir, par un abonnement mensuel ou un achat unique à vie.
						Le paiement est entièrement géré par <strong>Apple</strong> (App Store) sur iPhone et
						par <strong>Google Play</strong> (Google Play Billing) sur Android, selon leurs propres
						conditions : nous ne voyons jamais votre moyen de paiement ni votre identité.{" "}
						<strong>RevenueCat</strong> reçoit d'Apple et de Google Play les reçus de transaction,
						les vérifie et prévient notre serveur, qui enregistre les droits actifs de votre compte.
						Votre identifiant RevenueCat est l'identifiant de votre compte. Les achats restent liés
						à votre compte Apple ou Google et se récupèrent avec « Restaurer les achats ». Les
						remboursements et la gestion de l'abonnement (renouvellement, résiliation) relèvent
						d'Apple ou de Google Play, pas de nous : dans les réglages de votre compte Apple sur
						iPhone, ou sur Android dans le Play Store (profil → Paiements et abonnements →
						Abonnements).
					</p>
				)}
			</LegalSection>

			<LegalSection
				heading={isEn ? "6. Hosting and processors" : "6. Hébergement et sous-traitants"}
			>
				{isEn ? (
					<>
						<p>We rely on strictly necessary technical providers:</p>
						<ul className="flex list-disc flex-col gap-2 pl-5">
							<li>
								<strong>Google Firebase</strong> — authentication, database and server logic. Our
								server functions run in the <strong>europe-west1</strong> region (Belgium) and the
								database is hosted in the <strong>eur3</strong> multi-region (European Union).
								Authentication, which holds your Apple or Google identifier and e-mail (and, for
								Google, the name and profile-picture URL of your Google account) if you link your
								account, is a global Google service.
							</li>
							<li>
								<strong>Google Firebase Cloud Messaging</strong> — routing of game notifications to
								Apple's notification service (iOS) and to Android: Google sees your notification
								token and the text of each notification.
							</li>
							<li>
								<strong>Google Firebase Crashlytics</strong> — crash and error reports (stack trace,
								device and OS, app version, installation identifier), kept 90 days.
							</li>
							<li>
								<strong>Apple</strong> — Sign in with Apple (if you link your account), processing
								of in-app purchases and delivery of notifications on iOS.
							</li>
							<li>
								<strong>Google</strong> — Google Sign-In (Continue with Google, if you link your
								account) and processing of in-app purchases on Android through Google Play (Google
								Play Billing).
							</li>
							<li>
								<strong>RevenueCat</strong> — technical management of in-app purchases (never any
								banking details), limited to your account identifier and your purchase history. The
								RevenueCat SDK may also collect device identifiers under its own privacy policy.
							</li>
						</ul>
						<p>
							Google, Apple and RevenueCat are established in the <strong>United States</strong>.
							These transfers outside the European Union rely on the European Commission's standard
							contractual clauses (Article 46 GDPR) incorporated into their data processing terms
							(Google Cloud Data Processing Addendum, Apple Developer Program License Agreement,
							RevenueCat Data Processing Addendum).
						</p>
						<p>No data is ever sold, shared for advertising, or transferred to anyone else.</p>
					</>
				) : (
					<>
						<p>Nous faisons appel à des prestataires techniques strictement nécessaires :</p>
						<ul className="flex list-disc flex-col gap-2 pl-5">
							<li>
								<strong>Google Firebase</strong> — authentification, base de données et logique
								serveur. Nos fonctions serveur s'exécutent en région <strong>europe-west1</strong>{" "}
								(Belgique) et la base de données est hébergée dans la multi-région{" "}
								<strong>eur3</strong> (Union européenne). L'authentification, qui détient votre
								identifiant Apple ou Google et votre e-mail (et, pour Google, le nom et l'adresse de
								la photo de profil de votre compte Google) si vous liez votre compte, est un service
								Google mondial.
							</li>
							<li>
								<strong>Google Firebase Cloud Messaging</strong> — acheminement des notifications de
								partie vers le service de notification d'Apple (iOS) et vers Android : Google voit
								votre jeton de notification et le texte de chaque notification.
							</li>
							<li>
								<strong>Google Firebase Crashlytics</strong> — rapports de plantage et d'erreur
								(trace d'exécution, appareil et système, version de l'application, identifiant
								d'installation), conservés 90 jours.
							</li>
							<li>
								<strong>Apple</strong> — Se connecter avec Apple (si vous liez votre compte),
								traitement des achats intégrés et remise des notifications sur iOS.
							</li>
							<li>
								<strong>Google</strong> — Google Sign-In (Continuer avec Google, si vous liez votre
								compte) et traitement des achats intégrés sur Android via Google Play (Google Play
								Billing).
							</li>
							<li>
								<strong>RevenueCat</strong> — gestion technique des achats intégrés (jamais de
								données bancaires), limitée à l'identifiant de votre compte et à votre historique
								d'achats. Le SDK RevenueCat peut par ailleurs collecter des identifiants d'appareil
								selon sa propre politique de confidentialité.
							</li>
						</ul>
						<p>
							Google, Apple et RevenueCat sont établis aux <strong>États-Unis</strong>. Ces
							transferts hors Union européenne reposent sur les clauses contractuelles types de la
							Commission européenne (art. 46 RGPD) intégrées à leurs conditions de traitement des
							données (Google Cloud Data Processing Addendum, Apple Developer Program License
							Agreement, RevenueCat Data Processing Addendum).
						</p>
						<p>
							Aucune donnée n'est vendue, partagée à des fins publicitaires ni transmise à qui que
							ce soit d'autre.
						</p>
					</>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "7. Data retention" : "7. Durée de conservation"}>
				{isEn ? (
					<ul className="flex list-disc flex-col gap-2 pl-5">
						<li>
							<strong>Account, profile and entitlements</strong>: as long as your account exists,
							i.e. until you delete it from the app or ask us to (see section 10).
						</li>
						<li>
							<strong>Online rooms</strong>: a room still waiting <strong>24 hours</strong> after
							its creation is closed, and a game with no activity for <strong>6 hours</strong> is
							stopped; their players are then removed from them. Ended or closed rooms are{" "}
							<strong>automatically erased 30 days</strong> after their last activity, together with
							their rounds, targets, clues and needles. Until then, an ended room keeps its players'
							first names and scores for the end screen and the rematch.
						</li>
						<li>
							<strong>Purchase history at RevenueCat</strong>: as long as your account exists; it is
							deleted together with it (the deletion is retried automatically if RevenueCat is
							temporarily unavailable). Accounting records are kept for the legal retention period,
							in a form that no longer identifies you.
						</li>
						<li>
							<strong>Notification token</strong>: until you turn notifications off in your Profile
							or it is reported as invalid when a notification is sent, and at the latest until your
							account is deleted.
						</li>
						<li>
							<strong>Crash reports</strong>: 90 days at Google Firebase Crashlytics.
						</li>
						<li>
							<strong>Local settings</strong>: on your device until you uninstall the app or delete
							your account.
						</li>
					</ul>
				) : (
					<ul className="flex list-disc flex-col gap-2 pl-5">
						<li>
							<strong>Compte, profil et droits d'achat</strong> : tant que votre compte existe,
							c'est-à-dire jusqu'à ce que vous le supprimiez depuis l'application ou nous le
							demandiez (voir la section 10).
						</li>
						<li>
							<strong>Salons en ligne</strong> : un salon encore en attente{" "}
							<strong>24 heures</strong> après sa création est fermé, et une partie sans activité
							depuis <strong>6 heures</strong> est interrompue ; leurs joueurs en sont alors
							retirés. Les salons terminés ou fermés sont{" "}
							<strong>effacés automatiquement 30 jours</strong> après leur dernière activité, avec
							leurs manches, leurs cibles, leurs indices et leurs aiguilles. D'ici là, un salon
							terminé garde les prénoms et les scores de ses joueurs pour l'écran de fin et la
							revanche.
						</li>
						<li>
							<strong>Historique d'achats chez RevenueCat</strong> : tant que votre compte existe ;
							il est supprimé avec lui (la suppression est relancée automatiquement si RevenueCat
							est momentanément indisponible). Les pièces comptables sont conservées pendant la
							durée légale, sous une forme qui ne vous identifie plus.
						</li>
						<li>
							<strong>Jeton de notification</strong> : jusqu'à ce que vous désactiviez les
							notifications dans votre Profil ou qu'il soit signalé comme invalide lors d'un envoi,
							et au plus tard jusqu'à la suppression de votre compte.
						</li>
						<li>
							<strong>Rapports de plantage</strong> : 90 jours chez Google Firebase Crashlytics.
						</li>
						<li>
							<strong>Réglages locaux</strong> : sur votre appareil jusqu'à la désinstallation de
							l'application ou la suppression de votre compte.
						</li>
					</ul>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "8. Security" : "8. Sécurité"}>
				{isEn ? (
					<p>
						All exchanges are encrypted (HTTPS). Every game action (cards, target, clue, needles,
						scores) goes through our server, which validates it: the app can only write its own
						profile and its presence in a room directly. The database access rules keep the target
						readable by the Tilter only until the reveal, restrict each room to its members and each
						profile to its owner. Purchases are verified by RevenueCat and our server before
						anything is unlocked. Your session is stored in your phone's secure keychain on iPhone,
						and in the app's private storage, inaccessible to other apps, on Android.
					</p>
				) : (
					<p>
						Les échanges sont chiffrés (HTTPS). Toutes les actions de jeu (cartes, cible, indice,
						aiguilles, scores) passent par notre serveur, qui les valide : l'application ne peut
						écrire directement que son propre profil et sa présence dans un salon. Les règles
						d'accès de la base réservent la cible au seul Tilteur jusqu'à la révélation, chaque
						salon à ses membres et chaque profil à son propriétaire. Les achats sont vérifiés par
						RevenueCat et par notre serveur avant tout déblocage. Votre session est stockée dans le
						trousseau sécurisé de votre téléphone sur iPhone, et dans l'espace privé de
						l'application, inaccessible aux autres applications, sur Android.
					</p>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "9. Audience" : "9. Public concerné"}>
				{isEn ? (
					<p>
						Tilto is intended for ages <strong>13 and up</strong>. The "After midnight" pack, with
						its suggestive cards, is reserved for adults: the app asks you to confirm that you are
						18 or older before buying it or, with the Tilto Pass, the first time you turn it on, and
						its cards only enter a game if the host turns them on for the room (off by default).
						Beyond this confirmation, the app does not verify your age: we rely on the store ratings
						and on the good judgement of players and parents. We collect no data specifically about
						children beyond what is described on this page.
					</p>
				) : (
					<p>
						Tilto s'adresse aux personnes de <strong>13 ans et plus</strong>. Le pack « Après minuit
						», aux cartes suggestives, est réservé aux adultes : l'application demande de confirmer
						avoir 18 ans ou plus avant de l'acheter ou, avec le Tilto Pass, à sa première
						activation, et ses cartes n'entrent dans une partie que si l'hôte les active pour le
						salon (désactivées par défaut). Au-delà de cette confirmation, l'application ne vérifie
						pas votre âge : nous nous appuyons sur les classifications des stores et sur le bon sens
						des joueurs et des parents. Nous ne collectons aucune donnée spécifique aux enfants
						au-delà de ce qui est décrit sur cette page.
					</p>
				)}
			</LegalSection>

			<LegalSection
				heading={
					isEn ? "10. Your rights and account deletion" : "10. Vos droits et suppression du compte"
				}
			>
				{isEn ? (
					<>
						<p>Under the GDPR, you have the following rights:</p>
						<ul className="flex list-disc flex-col gap-2 pl-5">
							<li>Access, rectification and erasure of your data.</li>
							<li>Portability, restriction and objection to processing.</li>
							<li>
								Withdrawal of your consent at any time for notifications and the camera, in your
								phone's settings (and for notifications, in Profile → Notifications).
							</li>
						</ul>
						<p>
							To delete your account, open the app, tap your avatar at the top right of the home
							screen (Profile), then, at the bottom of the screen,{" "}
							<strong>Delete my account</strong> and <strong>Confirm deletion</strong>. The effect
							is immediate: your authentication account, your profile, the entitlements we store,
							your notification tokens and your history at RevenueCat are erased, so is the app's
							data on your phone, and the app starts again with a new anonymous profile. If your
							account is linked to Apple (iPhone), the app also revokes the access granted to Tilto
							through Sign in with Apple (after asking you to confirm with Apple); if it is linked
							to Google, it signs you out of Google in the app. Deletion is refused while you are in
							an ongoing online game: leave it first. If you no longer have access to the app, write
							to us at {mailLink} from the address linked to your account, with the subject "Tilto —
							account deletion": we delete the account within <strong>30 days</strong> and confirm
							by reply. Deleting your account does not cancel an ongoing Tilto Pass subscription:
							manage or cancel it from your Apple account on iPhone, or in the Play Store on Android
							(profile → Payments &amp; subscriptions → Subscriptions). You can also, on your own:
							uninstall the app (this erases the settings and data stored in it), revoke "Sign in
							with Apple" for Tilto in your Apple ID settings and remove Tilto's access in your
							Google account settings. Details on the {accountLink} page.
						</p>
						<p>
							To exercise any of these rights, write to us at {mailLink}. You may also lodge a
							complaint with the French supervisory authority, the CNIL ({cnilLink}).
						</p>
					</>
				) : (
					<>
						<p>Conformément au RGPD, vous disposez des droits suivants :</p>
						<ul className="flex list-disc flex-col gap-2 pl-5">
							<li>Accès, rectification et effacement de vos données.</li>
							<li>Portabilité, limitation et opposition au traitement.</li>
							<li>
								Retrait de votre consentement à tout moment pour les notifications et la caméra,
								dans les réglages de votre téléphone (et, pour les notifications, dans Profil →
								Notifications).
							</li>
						</ul>
						<p>
							Pour supprimer votre compte, ouvrez l'application, touchez votre avatar en haut à
							droite de l'accueil (Profil), puis, en bas de l'écran,{" "}
							<strong>Supprimer mon compte</strong> et <strong>Confirmer la suppression</strong>.
							L'effet est immédiat : votre compte d'authentification, votre profil, vos droits
							d'achat enregistrés chez nous, vos jetons de notification et votre historique chez
							RevenueCat sont effacés, les données de l'application sur votre téléphone aussi, et
							l'application repart avec un nouveau profil anonyme. Si votre compte est lié à Apple
							(iPhone), l'application révoque aussi l'accès accordé à Tilto via Se connecter avec
							Apple (après vous avoir demandé de confirmer avec Apple) ; s'il est lié à Google, elle
							vous déconnecte de Google dans l'application. La suppression est refusée tant que vous
							êtes dans une partie en ligne en cours : quittez-la d'abord. Si vous n'avez plus accès
							à l'application, écrivez-nous à {mailLink} depuis l'adresse liée à votre compte, avec
							pour objet « Tilto — suppression de compte » : nous supprimons le compte sous{" "}
							<strong>30 jours</strong> et vous le confirmons par retour. La suppression du compte
							ne résilie pas un abonnement Tilto Pass en cours : gérez-le ou résiliez-le depuis
							votre compte Apple sur iPhone, ou dans le Play Store sur Android (profil → Paiements
							et abonnements → Abonnements). Vous pouvez aussi, de votre côté : désinstaller
							l'application (ce qui efface les réglages et les données qu'elle stocke), révoquer «
							Se connecter avec Apple » pour Tilto dans les réglages de votre identifiant Apple et
							retirer l'accès de Tilto dans les paramètres de votre compte Google. Détails sur la
							page {accountLink}.
						</p>
						<p>
							Pour exercer l'un de ces droits, écrivez-nous à {mailLink}. Vous pouvez également
							introduire une réclamation auprès de la CNIL ({cnilLink}).
						</p>
					</>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "11. Changes" : "11. Évolutions"}>
				{isEn ? (
					<p>
						If Tilto evolves in a way that changes the data we process, this policy and the store
						privacy labels will be updated <strong>before</strong> that version is released, and the
						app will ask for your consent where the law requires it. The date at the top of this
						page indicates the latest revision.
					</p>
				) : (
					<p>
						Si Tilto évolue d'une manière qui change les données que nous traitons, cette politique
						et les étiquettes de confidentialité des stores seront mises à jour{" "}
						<strong>avant</strong> la sortie de cette version, et l'application demandera votre
						consentement là où la loi l'exige. La date en haut de cette page indique la dernière
						révision.
					</p>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "12. Contact" : "12. Contact"}>
				{isEn ? (
					<p>
						For any question about this policy or your data, write to <strong>KYKS</strong> at{" "}
						{mailLink} or by post at 14 rue Bausset, 75015 Paris, France.
					</p>
				) : (
					<p>
						Pour toute question sur cette politique ou sur vos données, écrivez à{" "}
						<strong>KYKS</strong> à {mailLink} ou par courrier au 14 rue Bausset, 75015 Paris.
					</p>
				)}
			</LegalSection>
		</LegalShell>
	);
}
