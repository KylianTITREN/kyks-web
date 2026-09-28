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
		title: isEn ? "Privacy · Intrus" : "Confidentialité · Intrus",
		description: isEn
			? "Privacy policy of the Intrus app (KYKS)."
			: "Politique de confidentialité de l'application Intrus (KYKS).",
		robots: { index: false, follow: false },
	};
}

export default async function IntrusPrivacyPage({
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
		<a className="text-accent hover:underline" href={`/${locale}/intrus/compte`}>
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
			brand="Intrus"
			title={isEn ? "Privacy policy" : "Politique de confidentialité"}
			subtitle={
				isEn
					? "How Intrus collects, uses and protects your personal data."
					: "Comment Intrus collecte, utilise et protège vos données personnelles."
			}
			lastUpdated={isEn ? "September 28, 2026" : "28 septembre 2026"}
			lastUpdatedLabel={isEn ? "Last updated" : "Dernière mise à jour"}
		>
			{isEn ? (
				<p>
					Intrus is a mobile app published by <strong>KYKS</strong> that brings the social-deduction
					game made famous by Among Us into real life: friends gather in a house, each with their
					own phone. The host opens a room and lists its rooms, the others join with a 4-character
					code, pick a nickname and an avatar, then privately learn their role. Crewmates complete
					missions around the house while intruders eliminate them; reporting a body or calling an
					emergency meeting starts a timed debate and a vote. A Bluetooth radar tells you who is
					nearby. This page explains what data we process, why, and what your rights are, in
					accordance with the General Data Protection Regulation (GDPR).
				</p>
			) : (
				<p>
					Intrus est une application mobile éditée par <strong>KYKS</strong> qui fait passer le jeu
					de déduction sociale popularisé par Among Us dans la vraie vie : des amis se réunissent
					dans une maison, chacun avec son téléphone. L'hôte ouvre un salon et y déclare les pièces,
					les autres rejoignent avec un code à 4 caractères, choisissent un pseudo et un avatar,
					puis découvrent en privé leur rôle. Les équipiers accomplissent des missions dans la
					maison pendant que les intrus les éliminent ; signaler un corps ou déclencher une réunion
					d'urgence lance un débat chronométré et un vote. Un radar Bluetooth indique qui se trouve
					à proximité. Cette page explique quelles données nous traitons, pourquoi, et quels sont
					vos droits, conformément au Règlement général sur la protection des données (RGPD).
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
								<strong>Game identity</strong>: a nickname of your choosing (14 characters at most),
								a colour, an accessory and the eyes of your avatar. The nickname is free text: if
								you type your real first name, it becomes personal data and is treated as such.
							</li>
							<li>
								<strong>Account</strong>: by default, an anonymous technical account created on
								first launch, tied to this phone. If you choose to link it from your profile with{" "}
								<strong>Sign in with Apple</strong> (iPhone), the identifier Apple provides and the
								e-mail address you agree to share (your real address or Apple's private relay
								address). If you link it with <strong>Continue with Google</strong> (iPhone and
								Android), our authentication service records the identifier, e-mail address, name
								and profile-picture URL of your Google account; the app reads neither that name nor
								that picture, and your in-game nickname remains the one you chose in the app. These
								e-mail addresses are kept in our authentication service only: the app does not use
								them for anything other than finding your account again on another phone.
							</li>
							<li>
								<strong>Games</strong>: the rooms you join (code, host, room names typed by the
								host, options), your role, missions and allies (secret, readable by you only), the
								room you declare, your alive/dead status, meetings, votes, the event timeline and
								the end-of-game rewards.
							</li>
							<li>
								<strong>Progression</strong>: your experience points, your sonars (the in-game
								currency), the number of games played and won, the cosmetics you own, your
								achievements and the status of your INTRUS+ subscription, including whether you have
								already used the 7-day free trial.
							</li>
							<li>
								<strong>Purchases</strong>: a log of your in-app purchases (product, type of event,
								date, what was granted and, if a purchase is transferred from or to another Intrus
								account, the identifier of that account). Payment is processed by Apple on iPhone
								and by Google Play on Android — we never have access to your banking details, your
								name or your billing address.
							</li>
							<li>
								<strong>Notifications</strong>: a notification token, only if you allow
								notifications when the app asks (on Android 12 and earlier, where the system allows
								them by default, as long as you have not turned them off in your phone's settings).
							</li>
							<li>
								<strong>Bluetooth</strong>: a token generated by our server for each game and used
								to detect nearby players. Proximity itself is measured on your phone only (see
								section 5).
							</li>
							<li>
								<strong>Diagnostics</strong>: when the app crashes or hits an unexpected error, a
								technical report (stack trace, device model and OS version, app version and build,
								your anonymous account identifier) is sent to Google Firebase Crashlytics so we can
								fix the bug. These reports contain no nickname, no game content and no location.
							</li>
							<li>
								<strong>Local settings</strong>: sound, haptics and animated-eyes preferences,
								stored on your device only and never sent to us.
							</li>
						</ul>
						<p>
							Intrus embeds no advertising, audience-measurement or tracking SDK; its only
							diagnostic tool is the crash reporting described above. We do not collect your
							location, contacts, photos, camera or microphone, and the app does not store any file
							or profile picture.
						</p>
					</>
				) : (
					<>
						<ul className="flex list-disc flex-col gap-2 pl-5">
							<li>
								<strong>Identité de jeu</strong> : un pseudo choisi par vous (14 caractères
								maximum), une couleur, un accessoire et les yeux de votre avatar. Le pseudo est
								libre : si vous y saisissez votre vrai prénom, il devient une donnée personnelle et
								est traité comme telle.
							</li>
							<li>
								<strong>Compte</strong> : par défaut, un compte anonyme technique créé au premier
								lancement et propre à ce téléphone. Si vous choisissez de le rattacher depuis votre
								profil avec <strong>Se connecter avec Apple</strong> (iPhone), l'identifiant fourni
								par Apple et l'adresse e-mail que vous acceptez de partager (votre adresse réelle ou
								l'adresse relais privée d'Apple). Si vous le rattachez avec{" "}
								<strong>Continuer avec Google</strong> (iPhone et Android), notre service
								d'authentification enregistre l'identifiant, l'adresse e-mail, le nom et l'adresse
								de la photo de profil de votre compte Google ; l'application ne lit ni ce nom ni
								cette photo, et votre pseudo de jeu reste celui que vous avez choisi dans
								l'application. Ces adresses e-mail sont conservées uniquement dans notre service
								d'authentification : l'application ne s'en sert que pour retrouver votre compte sur
								un autre téléphone.
							</li>
							<li>
								<strong>Parties</strong> : les salons que vous rejoignez (code, hôte, noms des
								pièces saisis par l'hôte, options), votre rôle, vos missions et vos alliés (secrets,
								lisibles par vous seul), la pièce que vous déclarez, votre statut vivant/éliminé,
								les réunions, les votes, la chronologie des événements et les récompenses de fin de
								partie.
							</li>
							<li>
								<strong>Progression</strong> : vos points d'expérience, vos sonars (la monnaie du
								jeu), le nombre de parties jouées et gagnées, les cosmétiques que vous possédez, vos
								succès et l'état de votre abonnement INTRUS+, y compris le fait d'avoir déjà utilisé
								l'essai gratuit de 7 jours.
							</li>
							<li>
								<strong>Achats</strong> : un journal de vos achats intégrés (produit, type
								d'événement, date, ce qui a été crédité et, si un achat est transféré depuis ou vers
								un autre compte Intrus, l'identifiant de ce compte). Le paiement est traité par
								Apple sur iPhone et par Google Play sur Android — nous n'avons jamais accès à vos
								données bancaires, à votre nom ni à votre adresse de facturation.
							</li>
							<li>
								<strong>Notifications</strong> : un jeton de notification, uniquement si vous
								acceptez les notifications lorsque l'application vous le demande (sur Android 12 et
								versions antérieures, où le système les autorise par défaut, tant que vous ne les
								avez pas désactivées dans les réglages du téléphone).
							</li>
							<li>
								<strong>Bluetooth</strong> : un jeton généré par notre serveur pour chaque partie et
								servant à détecter les joueurs à proximité. La proximité elle-même est mesurée sur
								votre téléphone uniquement (voir la section 5).
							</li>
							<li>
								<strong>Diagnostic</strong> : en cas de plantage ou d'erreur inattendue, un rapport
								technique (trace d'exécution, modèle et version du système, version et numéro de
								build de l'application, identifiant de votre compte anonyme) est envoyé à Google
								Firebase Crashlytics pour que nous puissions corriger le bug. Ces rapports ne
								contiennent ni pseudo, ni contenu de partie, ni position.
							</li>
							<li>
								<strong>Réglages locaux</strong> : préférences de son, de vibrations et d'yeux
								animés, stockées sur votre appareil uniquement et jamais transmises.
							</li>
						</ul>
						<p>
							Intrus n'embarque aucun SDK publicitaire, de mesure d'audience ni de pistage ; son
							seul outil de diagnostic est le rapport de plantage décrit ci-dessus. Nous ne
							collectons ni votre position, ni vos contacts, ni vos photos, ni votre caméra ou
							micro, et l'application ne stocke aucun fichier ni photo de profil.
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
							<strong>Running the game</strong> (rooms, roles, missions, meetings, votes, results):
							your account, game identity and game data — performance of the service contract.
						</li>
						<li>
							<strong>Keeping your progression</strong> (XP, sonars, cosmetics, achievements):
							performance of the service contract.
						</li>
						<li>
							<strong>Finding your profile on another phone</strong>: Sign in with Apple or Continue
							with Google, at your own initiative — performance of the service contract.
						</li>
						<li>
							<strong>In-app purchases and INTRUS+ entitlements</strong>: your purchase log and the
							events RevenueCat sends us — performance of the contract and our legal obligations
							(proof of purchase, refunds, accounting).
						</li>
						<li>
							<strong>Game notifications</strong> (game start, meeting called, oxygen/reactor
							crisis, end of game): your notification token — your consent, given through the system
							permission and revocable at any time in your phone's settings. Their text only
							contains the name of the rally room or of the consoles typed by the host.
						</li>
						<li>
							<strong>Bluetooth proximity</strong> (radar, eliminations): your consent, given
							through the system permission. Declining it keeps the game playable in "honour mode".
						</li>
						<li>
							<strong>Security and fair play</strong> (server-side validation of every action,
							authenticated purchase webhooks, technical logs): our legitimate interest in keeping
							games honest and the service reliable.
						</li>
						<li>
							<strong>App stability</strong> (crash and error reports): our legitimate interest in
							finding and fixing bugs.
						</li>
					</ul>
				) : (
					<ul className="flex list-disc flex-col gap-2 pl-5">
						<li>
							<strong>Faire fonctionner le jeu</strong> (salons, rôles, missions, réunions, votes,
							résultats) : votre compte, votre identité de jeu et vos données de partie — exécution
							du contrat de service.
						</li>
						<li>
							<strong>Conserver votre progression</strong> (XP, sonars, cosmétiques, succès) :
							exécution du contrat de service.
						</li>
						<li>
							<strong>Retrouver votre profil sur un autre téléphone</strong> : Se connecter avec
							Apple ou Continuer avec Google, à votre initiative — exécution du contrat de service.
						</li>
						<li>
							<strong>Achats intégrés et droits INTRUS+</strong> : votre journal d'achats et les
							événements que RevenueCat nous transmet — exécution du contrat et obligations légales
							(preuve d'achat, remboursements, comptabilité).
						</li>
						<li>
							<strong>Notifications de partie</strong> (début de partie, réunion convoquée, crise
							oxygène/réacteur, fin de partie) : votre jeton de notification — votre consentement,
							donné via la permission du système et révocable à tout moment dans les réglages du
							téléphone. Leur texte ne contient que le nom de la pièce de ralliement ou des consoles
							saisi par l'hôte.
						</li>
						<li>
							<strong>Proximité Bluetooth</strong> (radar, éliminations) : votre consentement, donné
							via la permission du système. Le refuser laisse la partie jouable en « mode honneur ».
						</li>
						<li>
							<strong>Sécurité et fair-play</strong> (validation côté serveur de chaque action,
							authentification des webhooks d'achat, journaux techniques) : notre intérêt légitime à
							garder les parties honnêtes et le service fiable.
						</li>
						<li>
							<strong>Stabilité de l'application</strong> (rapports de plantage et d'erreur) : notre
							intérêt légitime à trouver et corriger les bugs.
						</li>
					</ul>
				)}
			</LegalSection>

			<LegalSection
				heading={isEn ? "4. Visibility between players" : "4. Visibilité entre joueurs"}
			>
				{isEn ? (
					<p>
						Intrus is a social game: the other members of a room see your nickname, your avatar,
						your INTRUS+ badge if you have one, the room you declare, whether you are alive, the
						outcome of meetings (who was ejected, vote counts). Your role, your missions and your
						allies are <strong>not visible to other players during the game</strong>; once it has
						ended, the roles of every player and the event timeline (who eliminated whom) are
						revealed to the members of the room. If the host enables the corresponding option, the
						role of an ejected player is revealed at the end of the vote. Individual votes are never
						readable by any player — only the totals are. Intruders, and every player when the host
						enables the "unmasked radar" option, can see the names of nearby players; otherwise the
						radar is anonymous.
					</p>
				) : (
					<p>
						Intrus est un jeu social : les autres membres d'un salon voient votre pseudo, votre
						avatar, votre badge INTRUS+ si vous en avez un, la pièce que vous déclarez, si vous êtes
						en vie, l'issue des réunions (qui est éjecté, le décompte des votes). Votre rôle, vos
						missions et vos alliés ne sont{" "}
						<strong>pas visibles des autres joueurs pendant la partie</strong> ; à la fin, les rôles
						de tous les joueurs et la chronologie (qui a éliminé qui) sont révélés aux membres du
						salon. Si l'hôte active l'option correspondante, le rôle d'un joueur éjecté est révélé à
						l'issue du vote. Les votes individuels ne sont jamais lisibles par aucun joueur — seuls
						les totaux le sont. Les intrus, ainsi que tous les joueurs lorsque l'hôte active
						l'option « radar nominatif », voient le nom des joueurs proches ; sinon le radar est
						anonyme.
					</p>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "5. Bluetooth and proximity" : "5. Bluetooth et proximité"}>
				{isEn ? (
					<>
						<p>
							During the game phase only, your phone broadcasts a short Bluetooth Low Energy signal
							containing a <strong>temporary token</strong> generated by our server for that game,
							and listens for the tokens of the other players in the same room. The strength of the
							received signal is smoothed and classified into rough zones (very close, close, far) —
							never into a precise distance.
						</p>
						<p>
							The token is generated by our server and kept in your private game data (it is what
							lets your phone match a received token with a player of the room). Proximity itself is
							computed <strong>on your phone only</strong>: signal strength, zones and encounters
							are never sent to our servers or stored. When an intruder eliminates a player, the app
							only sends the target's identifier. The token changes with every game and is not
							reused outside of it.
						</p>
						<p>
							Intrus does <strong>not</strong> geolocate you. On iOS, the app only requests the
							Bluetooth permission. On Android 12 and later, it only requests the "Nearby devices"
							permission, declared to the system as never used to derive your location. On Android
							11 and earlier, the system requires the location permission in order to scan for
							Bluetooth devices; the app never reads your position. If you decline Bluetooth, the
							game switches to "honour mode" and remains fully playable.
						</p>
					</>
				) : (
					<>
						<p>
							Pendant la phase de jeu uniquement, votre téléphone émet un court signal Bluetooth Low
							Energy contenant un <strong>jeton temporaire</strong> généré par notre serveur pour
							cette partie, et écoute les jetons des autres joueurs du même salon. La puissance du
							signal reçu est lissée et classée en zones approximatives (très proche, proche, loin)
							— jamais en distance précise.
						</p>
						<p>
							Le jeton est généré par notre serveur et conservé dans vos données privées de partie
							(c'est ce qui permet à votre téléphone de faire correspondre un jeton reçu avec un
							joueur du salon). La proximité elle-même est calculée{" "}
							<strong>sur votre téléphone uniquement</strong> : la puissance du signal, les zones et
							les rencontres ne sont jamais envoyées à nos serveurs ni stockées. Lorsqu'un intrus
							élimine un joueur, l'application n'envoie que l'identifiant de la cible. Le jeton
							change à chaque partie et n'est pas réutilisé en dehors d'elle.
						</p>
						<p>
							Intrus ne vous géolocalise <strong>pas</strong>. Sur iOS, l'application ne demande que
							la permission Bluetooth. Sur Android 12 et versions ultérieures, elle ne demande que
							la permission « Appareils à proximité », déclarée au système comme n'étant jamais
							utilisée pour déterminer votre position. Sur Android 11 et versions antérieures, le
							système exige la permission de localisation pour rechercher des appareils Bluetooth ;
							l'application ne lit jamais votre position. Si vous refusez le Bluetooth, la partie
							bascule en « mode honneur » et reste entièrement jouable.
						</p>
					</>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "6. In-app purchases" : "6. Achats intégrés"}>
				{isEn ? (
					<p>
						Intrus offers an <strong>INTRUS+</strong> subscription (monthly, yearly or lifetime) and
						sonar packs. Payment is handled entirely by <strong>Apple</strong> (App Store) on iPhone
						and by <strong>Google Play</strong> (Google Play Billing) on Android, under their own
						terms: we never see your payment method or your identity. <strong>RevenueCat</strong>{" "}
						receives the transaction receipts from Apple and Google Play, checks them and notifies
						our server, which credits your sonars or activates INTRUS+ and records the event in your
						purchase log (product, event type, date, what was granted, and whether it came from the
						production or test environment). The monthly and yearly plans start with a{" "}
						<strong>7-day free trial</strong>, which converts into a paid subscription unless you
						cancel before the end of the trial in your Apple settings (iPhone) or in the Play Store
						(Android); your profile remembers that you used the trial. If a purchase is transferred
						from another Intrus account (same Apple ID or same Google account), the purchase log
						keeps a trace of it. Your RevenueCat identifier is your anonymous account identifier.
						Refunds and subscription management (renewal, cancellation) are handled by Apple or
						Google Play, not by us: in your Apple account settings on iPhone, or on Android in the
						Play Store (profile → Payments &amp; subscriptions → Subscriptions).
					</p>
				) : (
					<p>
						Intrus propose un abonnement <strong>INTRUS+</strong> (mensuel, annuel ou à vie) et des
						packs de sonars. Le paiement est entièrement géré par <strong>Apple</strong> (App Store)
						sur iPhone et par <strong>Google Play</strong> (Google Play Billing) sur Android, selon
						leurs propres conditions : nous ne voyons jamais votre moyen de paiement ni votre
						identité. <strong>RevenueCat</strong> reçoit d'Apple et de Google Play les reçus de
						transaction, les vérifie et prévient notre serveur, qui crédite vos sonars ou active
						INTRUS+ et inscrit l'événement dans votre journal d'achats (produit, type d'événement,
						date, ce qui a été crédité, et s'il provient de l'environnement de production ou de
						test). Les formules mensuelle et annuelle commencent par un{" "}
						<strong>essai gratuit de 7 jours</strong>, converti en abonnement payant sauf
						résiliation avant la fin de l'essai dans les réglages Apple (iPhone) ou dans le Play
						Store (Android) ; votre profil garde en mémoire que vous avez utilisé cet essai. Si un
						achat est transféré depuis un autre compte Intrus (même identifiant Apple ou même compte
						Google), le journal d'achats en garde la trace. Votre identifiant RevenueCat est
						l'identifiant de votre compte anonyme. Les remboursements et la gestion de l'abonnement
						(renouvellement, résiliation) relèvent d'Apple ou de Google Play, pas de nous : dans les
						réglages de votre compte Apple sur iPhone, ou sur Android dans le Play Store (profil →
						Paiements et abonnements → Abonnements).
					</p>
				)}
			</LegalSection>

			<LegalSection
				heading={isEn ? "7. Hosting and processors" : "7. Hébergement et sous-traitants"}
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
								device and OS, app version, anonymous account identifier), kept 90 days.
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
								banking details), limited to your anonymous account identifier and your purchase
								history. The RevenueCat SDK may also collect device identifiers under its own
								privacy policy.
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
								la photo de profil de votre compte Google) si vous rattachez votre compte, est un
								service Google mondial.
							</li>
							<li>
								<strong>Google Firebase Cloud Messaging</strong> — acheminement des notifications de
								partie vers le service de notification d'Apple (iOS) et vers Android : Google voit
								votre jeton de notification et le texte de chaque notification.
							</li>
							<li>
								<strong>Google Firebase Crashlytics</strong> — rapports de plantage et d'erreur
								(trace d'exécution, appareil et système, version de l'application, identifiant de
								compte anonyme), conservés 90 jours.
							</li>
							<li>
								<strong>Apple</strong> — Se connecter avec Apple (si vous rattachez votre compte),
								traitement des achats intégrés et remise des notifications sur iOS.
							</li>
							<li>
								<strong>Google</strong> — Google Sign-In (Continuer avec Google, si vous rattachez
								votre compte) et traitement des achats intégrés sur Android via Google Play (Google
								Play Billing).
							</li>
							<li>
								<strong>RevenueCat</strong> — gestion technique des achats intégrés (jamais de
								données bancaires), limitée à l'identifiant de votre compte anonyme et à votre
								historique d'achats. Le SDK RevenueCat peut par ailleurs collecter des identifiants
								d'appareil selon sa propre politique de confidentialité.
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

			<LegalSection heading={isEn ? "8. Data retention" : "8. Durée de conservation"}>
				{isEn ? (
					<ul className="flex list-disc flex-col gap-2 pl-5">
						<li>
							<strong>Account, game identity and progression</strong>: as long as your account
							exists, i.e. until you delete it from the app or ask us to (see section 11).
						</li>
						<li>
							<strong>Ended games</strong>: kept with their summary, timeline and the players' game
							data for the history of the room, then <strong>automatically erased 90 days</strong>{" "}
							after the end of the game, together with all of their data. When you delete your
							account, your player data is anonymised in them straight away; your nickname is
							replaced everywhere, including in the private game data of other players, and only
							your pseudonymous account identifier remains in them until they are erased.
						</li>
						<li>
							<strong>Rooms that never started</strong>: automatically erased{" "}
							<strong>7 days</strong> after their creation.
						</li>
						<li>
							<strong>Purchase log</strong>: as long as your account exists; erased when you delete
							it. RevenueCat keeps the history of your transactions, under your pseudonymous account
							identifier, until you ask us to have it deleted by writing to {mailLink}. Accounting
							records are kept for the legal retention period, in a form that no longer identifies
							you.
						</li>
						<li>
							<strong>Notification token</strong>: replaced each time your phone renews it, erased
							when your account is deleted.
						</li>
						<li>
							<strong>Bluetooth tokens</strong>: specific to one game and kept with it (see Ended
							games); proximity measurements are never stored.
						</li>
						<li>
							<strong>Crash reports</strong>: 90 days at Google Firebase Crashlytics.
						</li>
						<li>
							<strong>Local settings</strong>: on your device until you uninstall the app.
						</li>
					</ul>
				) : (
					<ul className="flex list-disc flex-col gap-2 pl-5">
						<li>
							<strong>Compte, identité de jeu et progression</strong> : tant que votre compte
							existe, c'est-à-dire jusqu'à ce que vous le supprimiez depuis l'application ou nous le
							demandiez (voir la section 11).
						</li>
						<li>
							<strong>Parties terminées</strong> : conservées avec leur résumé, leur chronologie et
							les données de partie des joueurs pour l'historique du salon, puis{" "}
							<strong>effacées automatiquement 90 jours</strong> après la fin de la partie, avec
							l'ensemble de leurs données. Lorsque vous supprimez votre compte, vos données de
							joueur y sont anonymisées immédiatement ; votre pseudo est remplacé partout, y compris
							dans les données privées de partie des autres joueurs, et seul l'identifiant
							pseudonyme de votre compte y subsiste jusqu'à leur effacement.
						</li>
						<li>
							<strong>Salons jamais démarrés</strong> : effacés automatiquement{" "}
							<strong>7 jours</strong> après leur création.
						</li>
						<li>
							<strong>Journal d'achats</strong> : tant que votre compte existe ; effacé lors de sa
							suppression. RevenueCat conserve l'historique de vos transactions, sous l'identifiant
							pseudonyme de votre compte, jusqu'à ce que vous nous demandiez de le faire supprimer
							en écrivant à {mailLink}. Les pièces comptables sont conservées pendant la durée
							légale, sous une forme qui ne vous identifie plus.
						</li>
						<li>
							<strong>Jeton de notification</strong> : remplacé à chaque renouvellement par votre
							téléphone, effacé lors de la suppression de votre compte.
						</li>
						<li>
							<strong>Jetons Bluetooth</strong> : propres à une partie et conservés avec elle (voir
							Parties terminées) ; les mesures de proximité ne sont jamais stockées.
						</li>
						<li>
							<strong>Rapports de plantage</strong> : 90 jours chez Google Firebase Crashlytics.
						</li>
						<li>
							<strong>Réglages locaux</strong> : sur votre appareil jusqu'à la désinstallation de
							l'application.
						</li>
					</ul>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "9. Security" : "9. Sécurité"}>
				{isEn ? (
					<p>
						All exchanges are encrypted (HTTPS). Data access is partitioned per player at the
						database level: while the game is running, your role, missions and allies are
						technically readable by you only (they are revealed to the room once the game has ended,
						see section 4), individual votes are readable by no player, and every game action
						(roles, missions, eliminations, votes, rewards) is computed and validated server-side —
						the app can only read them. Purchases are verified by RevenueCat and our server before
						anything is credited. Your session is stored in your phone's secure keychain on iPhone,
						and in the app's private storage, inaccessible to other apps, on Android.
					</p>
				) : (
					<p>
						Les échanges sont chiffrés (HTTPS). L'accès aux données est cloisonné par joueur au
						niveau de la base : pendant la partie, votre rôle, vos missions et vos alliés ne sont
						techniquement lisibles que par vous (ils sont révélés au salon une fois la partie
						terminée, voir la section 4), les votes individuels ne sont lisibles par aucun joueur,
						et toutes les actions de jeu (rôles, missions, éliminations, votes, récompenses) sont
						calculées et validées côté serveur — l'application ne fait que les lire. Les achats sont
						vérifiés par RevenueCat et par notre serveur avant tout crédit. Votre session est
						stockée dans le trousseau sécurisé de votre téléphone sur iPhone, et dans l'espace privé
						de l'application, inaccessible aux autres applications, sur Android.
					</p>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "10. Audience" : "10. Public concerné"}>
				{isEn ? (
					<p>
						Intrus is a party game about bluffing and eliminating your friends in good fun, which we
						recommend for ages <strong>13 and up</strong>. The app does not verify your age: we rely
						on the store ratings and on the good judgement of players and parents. We collect no
						data specifically about children beyond what is described on this page.
					</p>
				) : (
					<p>
						Intrus est un jeu d'ambiance où l'on bluffe et élimine ses amis pour rire, que nous
						recommandons <strong>à partir de 13 ans</strong>. L'application ne vérifie pas votre âge
						: nous nous appuyons sur les classifications des stores et sur le bon sens des joueurs
						et des parents. Nous ne collectons aucune donnée spécifique aux enfants au-delà de ce
						qui est décrit sur cette page.
					</p>
				)}
			</LegalSection>

			<LegalSection
				heading={
					isEn ? "11. Your rights and account deletion" : "11. Vos droits et suppression du compte"
				}
			>
				{isEn ? (
					<>
						<p>Under the GDPR, you have the following rights:</p>
						<ul className="flex list-disc flex-col gap-2 pl-5">
							<li>Access, rectification and erasure of your data.</li>
							<li>Portability, restriction and objection to processing.</li>
							<li>
								Withdrawal of your consent at any time for notifications and Bluetooth, in your
								phone's settings.
							</li>
						</ul>
						<p>
							To delete your account, open the app and go to{" "}
							<strong>Profile → Settings (gear icon) → Delete my account</strong>. The effect is
							immediate: your authentication account, your profile, your progression and your
							purchase log are erased, your player data is anonymised in your ended games and the
							app restarts with a new anonymous profile. The app also revokes the access you had
							granted to Intrus through Sign in with Apple (iPhone) and signs you out of Google in
							the app. RevenueCat, which manages in-app purchases, keeps the history of your
							transactions under your pseudonymous account identifier: to have it deleted, write to
							us at {mailLink}. If you no longer have access to the app, write to us at {mailLink}:
							so that we can find your account, tell us the e-mail address of the Apple or Google
							account you linked or, for an anonymous account, your nickname and the code of a room
							you played in recently, sent from the phone that holds the account, and we will handle
							the request within <strong>30 days</strong>. Deleting your account does not cancel an
							ongoing INTRUS+ subscription: manage or cancel it from your Apple account on iPhone,
							or in the Play Store on Android (profile → Payments &amp; subscriptions →
							Subscriptions). You can also, on your own: uninstall the app (this erases the local
							settings and the anonymous session of this phone), revoke "Sign in with Apple" for
							Intrus in your Apple ID settings and remove Intrus's access in your Google account
							settings. Details on the {accountLink} page.
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
								Retrait de votre consentement à tout moment pour les notifications et le Bluetooth,
								dans les réglages de votre téléphone.
							</li>
						</ul>
						<p>
							Pour supprimer votre compte, ouvrez l'application puis{" "}
							<strong>Profil → Réglages (roue dentée) → Supprimer mon compte</strong>. L'effet est
							immédiat : votre compte d'authentification, votre profil, votre progression et votre
							journal d'achats sont effacés, vos données de joueur sont anonymisées dans vos parties
							terminées et l'application redémarre avec un nouveau profil anonyme. L'application
							révoque aussi l'accès accordé à Intrus via Se connecter avec Apple (iPhone) et vous
							déconnecte de Google dans l'application. RevenueCat, qui gère les achats intégrés,
							conserve l'historique de vos transactions sous l'identifiant pseudonyme de votre
							compte : pour le faire supprimer, écrivez-nous à {mailLink}. Si vous n'avez plus accès
							à l'application, écrivez-nous à {mailLink} : pour que nous puissions retrouver votre
							compte, indiquez l'adresse e-mail du compte Apple ou Google rattaché ou, pour un
							compte anonyme, votre pseudo et le code d'un salon dans lequel vous avez joué
							récemment, depuis le téléphone qui porte le compte, et nous traiterons la demande sous{" "}
							<strong>30 jours</strong>. La suppression du compte ne résilie pas un abonnement
							INTRUS+ en cours : gérez-le ou résiliez-le depuis votre compte Apple sur iPhone, ou
							dans le Play Store sur Android (profil → Paiements et abonnements → Abonnements). Vous
							pouvez aussi, de votre côté : désinstaller l'application (ce qui efface les réglages
							locaux et la session anonyme de ce téléphone), révoquer « Se connecter avec Apple »
							pour Intrus dans les réglages de votre identifiant Apple et retirer l'accès d'Intrus
							dans les paramètres de votre compte Google. Détails sur la page {accountLink}.
						</p>
						<p>
							Pour exercer l'un de ces droits, écrivez-nous à {mailLink}. Vous pouvez également
							introduire une réclamation auprès de la CNIL ({cnilLink}).
						</p>
					</>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "12. Changes" : "12. Évolutions"}>
				{isEn ? (
					<p>
						If Intrus evolves in a way that changes the data we process (for instance new features
						relying on Bluetooth data), this policy and the store privacy labels will be updated{" "}
						<strong>before</strong> that version is released, and the app will ask for your consent
						where the law requires it. The date at the top of this page indicates the latest
						revision.
					</p>
				) : (
					<p>
						Si Intrus évolue d'une manière qui change les données que nous traitons (par exemple de
						nouvelles fonctionnalités s'appuyant sur les données Bluetooth), cette politique et les
						étiquettes de confidentialité des stores seront mises à jour <strong>avant</strong> la
						sortie de cette version, et l'application demandera votre consentement là où la loi
						l'exige. La date en haut de cette page indique la dernière révision.
					</p>
				)}
			</LegalSection>

			<LegalSection heading={isEn ? "13. Contact" : "13. Contact"}>
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
