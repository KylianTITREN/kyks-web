import { useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { pickLocale, pickLocaleArray } from "@/lib/locale";
import type { Experience } from "@/sanity/types";

type Props = { experiences: Experience[]; locale: Locale };

const formatPeriod = (start: string, end: string | undefined, locale: Locale) => {
  const fmt = (d: string) =>
    new Date(d).toLocaleDateString(locale, { month: "short", year: "numeric" });
  return `${fmt(start)} — ${end ? fmt(end) : locale === "fr" ? "en cours" : "present"}`;
};

export function KylianExperience({ experiences, locale }: Props) {
  const t = useTranslations("kylian.sections");

  return (
    <section className="border-t border-[var(--color-border)] py-[var(--space-section)]">
      <div className="container-editorial">
        <h2 className="mb-12 font-[var(--font-display)] text-[var(--text-3xl)]">
          {t("experience")}
        </h2>
        {experiences.length === 0 ? (
          <p className="text-[var(--color-text-muted)]">
            Ajoute des expériences dans Sanity pour les afficher ici.
          </p>
        ) : (
          <ol className="space-y-12">
            {experiences.map((exp) => (
              <li
                key={exp._id}
                className="grid gap-4 border-t border-[var(--color-border)] pt-8 md:grid-cols-[200px_1fr]"
              >
                <div>
                  <p className="text-sm text-[var(--color-text-subtle)]">
                    {formatPeriod(exp.startDate, exp.endDate, locale)}
                  </p>
                  {exp.location ? (
                    <p className="mt-1 text-xs text-[var(--color-text-subtle)]">{exp.location}</p>
                  ) : null}
                </div>
                <div>
                  <h3 className="font-[var(--font-display)] text-xl">
                    {pickLocale(exp.role, locale)}{" "}
                    <span className="text-[var(--color-accent)]">· {exp.company}</span>
                  </h3>
                  {exp.summary ? (
                    <p className="mt-3 text-[var(--color-text-muted)]">
                      {pickLocale(exp.summary, locale)}
                    </p>
                  ) : null}
                  {exp.achievements && pickLocaleArray(exp.achievements, locale).length > 0 ? (
                    <ul className="mt-4 space-y-2 text-sm text-[var(--color-text-muted)]">
                      {pickLocaleArray(exp.achievements, locale).map((item, i) => (
                        <li
                          // biome-ignore lint/suspicious/noArrayIndexKey: bullet list is stable
                          key={i}
                          className="flex gap-3"
                        >
                          <span
                            aria-hidden
                            className="mt-[0.6em] h-px w-4 shrink-0 bg-[var(--color-accent)]"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {exp.stack && exp.stack.length > 0 ? (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {exp.stack.map((s) => (
                        <li
                          key={s}
                          className="rounded-full border border-[var(--color-border)] px-2.5 py-0.5 text-xs text-[var(--color-text-subtle)]"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
