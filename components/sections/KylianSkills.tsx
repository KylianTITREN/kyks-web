import { useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { pickLocale } from "@/lib/locale";
import type { SkillGroup } from "@/sanity/types";

type Props = { skillGroups: SkillGroup[]; locale: Locale };

export function KylianSkills({ skillGroups, locale }: Props) {
  const t = useTranslations("kylian.sections");

  return (
    <section className="border-t border-[var(--color-border)] py-[var(--space-section)]">
      <div className="container-editorial">
        <h2 className="mb-12 font-[var(--font-display)] text-[var(--text-3xl)]">{t("skills")}</h2>
        {skillGroups.length === 0 ? (
          <p className="text-[var(--color-text-muted)]">Aucune compétence à afficher.</p>
        ) : (
          <ul className="grid gap-10 md:grid-cols-2">
            {skillGroups.map((g) => (
              <li key={g._id}>
                <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
                  {pickLocale(g.title, locale)}
                </h3>
                {g.skills && g.skills.length > 0 ? (
                  <ul className="flex flex-wrap gap-2">
                    {g.skills.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-[var(--color-border)] px-3 py-1 text-sm"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
