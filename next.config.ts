import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	serverExternalPackages: ["sanity", "@sanity/vision"],
	images: {
		remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
	},
	async headers() {
		return [
			{
				source: "/:path*",
				headers: [
					{ key: "X-Content-Type-Options", value: "nosniff" },
					{ key: "X-Frame-Options", value: "SAMEORIGIN" },
					{ key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
					{
						key: "Permissions-Policy",
						value: "camera=(), microphone=(), geolocation=()",
					},
				],
			},
			// Liens universels Tilto : fichier sans extension, servi en JSON pour Apple.
			{
				source: "/.well-known/apple-app-site-association",
				headers: [{ key: "Content-Type", value: "application/json" }],
			},
		];
	},
};

export default withNextIntl(nextConfig);
