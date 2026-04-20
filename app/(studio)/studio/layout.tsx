import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
	title: "KYKS Studio",
	robots: { index: false, follow: false },
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	viewportFit: "cover",
};

export default function StudioRootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body style={{ margin: 0 }}>{children}</body>
		</html>
	);
}
