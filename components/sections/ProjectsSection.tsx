import { ProjectCover } from "@/components/ProjectCover";
import type { Locale } from "@/i18n/routing";
import { pickLocale } from "@/lib/locale";
import type { Project } from "@/sanity/types";
import { useTranslations } from "next-intl";
import { SectionHeader } from "./SectionHeader";

type Props = { projects: Project[]; locale: Locale };

export function ProjectsSection({ projects, locale }: Props) {
	const t = useTranslations("projects");
	const active = projects.filter((p) => p.status !== "archived");

	return (
		<section id="projects" className="py-[var(--space-section)]">
			<div className="container-editorial">
				<SectionHeader eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
				{active.length === 0 ? (
					<p className="text-[var(--color-text-muted)]">
						Ajoute des projets dans Sanity pour les afficher ici.
					</p>
				) : (
					<ul className="grid gap-8 md:grid-cols-2">
						{active.map((p) => (
							<li key={p._id} className="group flex flex-col gap-5">
								<ProjectCover cover={p.cover} name={p.name} />
								<div className="flex items-baseline justify-between gap-4">
									<h3 className="font-[var(--font-display)] text-2xl">{p.name}</h3>
									{p.year ? (
										<span className="text-xs uppercase tracking-wider text-[var(--color-text-subtle)]">
											{p.year}
										</span>
									) : null}
								</div>
								{p.tagline ? (
									<p className="-mt-3 text-sm text-[var(--color-accent)]">
										{pickLocale(p.tagline, locale)}
									</p>
								) : null}
								{p.summary ? (
									<p className="text-[var(--color-text-muted)]">{pickLocale(p.summary, locale)}</p>
								) : null}
								{p.stack && p.stack.length > 0 ? (
									<ul className="flex flex-wrap gap-2">
										{p.stack.map((s) => (
											<li
												key={s}
												className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-text-muted)]"
											>
												{s}
											</li>
										))}
									</ul>
								) : null}
								{p.url ? (
									<a
										href={p.url}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)]"
									>
										Voir le projet <span aria-hidden>↗</span>
									</a>
								) : null}
							</li>
						))}
					</ul>
				)}
			</div>
		</section>
	);
}
