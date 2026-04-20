import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { KylianEducation } from "@/components/sections/KylianEducation";
import { KylianExperience } from "@/components/sections/KylianExperience";
import { KylianIntro } from "@/components/sections/KylianIntro";
import { KylianProjects } from "@/components/sections/KylianProjects";
import { KylianSkills } from "@/components/sections/KylianSkills";
import { KylianSocial } from "@/components/sections/KylianSocial";
import type { Locale } from "@/i18n/routing";
import { previewClient } from "@/sanity/client";
import {
  educationQuery,
  experiencesQuery,
  projectsQuery,
  skillGroupsQuery,
  socialLinksQuery,
} from "@/sanity/queries";
import type {
  Education,
  Experience,
  Project,
  SkillGroup,
  SocialLink,
} from "@/sanity/types";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("kylianTitle"),
    description: t("kylianDescription"),
    robots: { index: false, follow: false },
  };
}

export default async function KylianPage({
  params,
}: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [experiences, projects, skillGroups, education, socialLinks] = await Promise.all([
    previewClient.fetch<Experience[]>(experiencesQuery).catch(() => []),
    previewClient.fetch<Project[]>(projectsQuery).catch(() => []),
    previewClient.fetch<SkillGroup[]>(skillGroupsQuery).catch(() => []),
    previewClient.fetch<Education[]>(educationQuery).catch(() => []),
    previewClient.fetch<SocialLink[]>(socialLinksQuery("kylian")).catch(() => []),
  ]);

  return (
    <>
      <KylianIntro />
      <KylianExperience experiences={experiences} locale={locale} />
      <KylianProjects projects={projects} locale={locale} />
      <KylianSkills skillGroups={skillGroups} locale={locale} />
      <KylianEducation education={education} locale={locale} />
      <KylianSocial links={socialLinks} />
    </>
  );
}
