import { useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { pickLocale } from "@/lib/locale";
import type { Education } from "@/sanity/types";

type Props = { education: Education[]; locale: Locale };

export function KylianEducation({ education, locale }: Props) {
  const t = useTranslations("kylian.sections");

  return (
    <section className="border-t border-[var(--color-border)] py-[var(--space-section)]">
      <div className="container-editorial">
        <h2 className="mb-12 font-[var(--font-display)] text-[var(--text-3xl)]">{t("education")}</h2>
        {education.length === 0 ? (
          <p className="text-[var(--color-text-muted)]">Aucune formation à afficher.</p>
        ) : (
          <ul className="space-y-6">
            {education.map((e) => (
              <li
                key={e._id}
                className="grid gap-3 border-t border-[var(--color-border)] pt-6 md:grid-cols-[200px_1fr]"
              >
                <div className="text-sm text-[var(--color-text-subtle)]">
                  {e.startDate ? new Date(e.startDate).getFullYear() : ""}
                  {e.endDate ? ` — ${new Date(e.endDate).getFullYear()}` : ""}
                </div>
                <div>
                  <h3 className="font-[var(--font-display)] text-lg">{e.school}</h3>
                  {e.degree ? (
                    <p className="mt-1 text-sm text-[var(--color-accent)]">
                      {pickLocale(e.degree, locale)}
                    </p>
                  ) : null}
                  {e.summary ? (
                    <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                      {pickLocale(e.summary, locale)}
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
