import { CollaborationsSection } from "@/components/sections/CollaborationsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Hero } from "@/components/sections/Hero";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import type { Locale } from "@/i18n/routing";
import { previewClient } from "@/sanity/client";
import { collaborationsQuery, projectsQuery } from "@/sanity/queries";
import type { Collaboration, Project } from "@/sanity/types";
import { setRequestLocale } from "next-intl/server";

export const revalidate = 60;

export default async function LandingPage({ params }: { params: Promise<{ locale: Locale }> }) {
	const { locale } = await params;
	setRequestLocale(locale);

	const [collaborations, projects] = await Promise.all([
		previewClient.fetch<Collaboration[]>(collaborationsQuery).catch(() => []),
		previewClient.fetch<Project[]>(projectsQuery).catch(() => []),
	]);

	return (
		<>
			<Hero />
			<CollaborationsSection collaborations={collaborations} locale={locale} />
			<ProjectsSection projects={projects} locale={locale} />
			<ManifestoSection />
			<ContactSection />
		</>
	);
}
