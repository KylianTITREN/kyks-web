import "@/app/globals.css";

import { ConsentBanner } from "@/components/ConsentBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PostHogProvider } from "@/components/PostHogProvider";
import { ThemeScript } from "@/components/ThemeScript";
import { routing } from "@/i18n/routing";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Fraunces, Inter } from "next/font/google";
import { notFound } from "next/navigation";

const fraunces = Fraunces({
	subsets: ["latin"],
	variable: "--font-display",
	display: "swap",
	axes: ["opsz", "SOFT"],
});

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
	display: "swap",
});

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
	params,
}: { params: Promise<{ locale: string }> }): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "meta" });
	return {
		metadataBase: new URL("https://kyks.io"),
		title: { default: t("defaultTitle"), template: "%s · KYKS" },
		description: t("defaultDescription"),
		openGraph: {
			title: t("defaultTitle"),
			description: t("defaultDescription"),
			siteName: t("siteName"),
			locale: locale === "fr" ? "fr_FR" : "en_US",
			type: "website",
			images: [
				{
					url: `/api/og?locale=${locale}`,
					width: 1200,
					height: 630,
					alt: t("defaultTitle"),
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			images: [`/api/og?locale=${locale}`],
		},
	};
}

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) notFound();
	setRequestLocale(locale);
	const messages = await getMessages();

	return (
		<html
			lang={locale}
			className={`${fraunces.variable} ${inter.variable}`}
			suppressHydrationWarning
		>
			<head>
				<ThemeScript />
			</head>
			<body>
				<NextIntlClientProvider messages={messages}>
					<PostHogProvider>
						<Header />
						<main id="main-content">{children}</main>
						<Footer />
						<ConsentBanner />
					</PostHogProvider>
					<Analytics />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
