import { useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { pickLocale } from "@/lib/locale";
import type { Project } from "@/sanity/types";

type Props = { projects: Project[]; locale: Locale };

export function KylianProjects({ projects, locale }: Props) {
  const t = useTranslations("kylian.sections");

  return (
    <section className="border-t border-[var(--color-border)] py-[var(--space-section)]">
      <div className="container-editorial">
        <h2 className="mb-12 font-[var(--font-display)] text-[var(--text-3xl)]">{t("projects")}</h2>
        {projects.length === 0 ? (
          <p className="text-[var(--color-text-muted)]">Aucun projet à afficher.</p>
        ) : (
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <li
                key={p._id}
                className="rounded-[var(--radius-md)] border border-[var(--color-border)] p-6 transition-colors hover:border-[var(--color-border-strong)]"
              >
                <h3 className="font-[var(--font-display)] text-xl">{p.name}</h3>
                {p.tagline ? (
                  <p className="mt-1 text-sm text-[var(--color-accent)]">
                    {pickLocale(p.tagline, locale)}
                  </p>
                ) : null}
                {p.summary ? (
                  <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                    {pickLocale(p.summary, locale)}
                  </p>
                ) : null}
                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-xs font-medium"
                  >
                    {new URL(p.url).hostname} <span aria-hidden>↗</span>
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
