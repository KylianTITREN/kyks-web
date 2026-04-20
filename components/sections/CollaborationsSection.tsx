import { useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { pickLocale, pickLocaleArray } from "@/lib/locale";
import type { Collaboration } from "@/sanity/types";
import { SectionHeader } from "./SectionHeader";

type Props = { collaborations: Collaboration[]; locale: Locale };

export function CollaborationsSection({ collaborations, locale }: Props) {
  const t = useTranslations("collaborations");

  return (
    <section id="collaborations" className="py-[var(--space-section)]">
      <div className="container-editorial">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />
        {collaborations.length === 0 ? (
          <p className="text-[var(--color-text-muted)]">
            Ajoute des collaborations dans Sanity pour les afficher ici.
          </p>
        ) : (
          <ul className="grid gap-10 md:grid-cols-2">
            {collaborations.map((c) => (
              <li
                key={c._id}
                className="group border-t border-[var(--color-border-strong)] pt-6"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-[var(--font-display)] text-2xl">{c.name}</h3>
                  {c.period ? (
                    <span className="text-xs uppercase tracking-wider text-[var(--color-text-subtle)]">
                      {c.period}
                    </span>
                  ) : null}
                </div>
                {c.role ? (
                  <p className="mt-1 text-sm text-[var(--color-accent)]">
                    {pickLocale(c.role, locale)}
                  </p>
                ) : null}
                {c.summary ? (
                  <p className="mt-4 text-[var(--color-text-muted)]">
                    {pickLocale(c.summary, locale)}
                  </p>
                ) : null}
                {c.contributions && pickLocaleArray(c.contributions, locale).length > 0 ? (
                  <ul className="mt-4 space-y-2 text-sm text-[var(--color-text-muted)]">
                    {pickLocaleArray(c.contributions, locale).map((item, i) => (
                      <li
                        // biome-ignore lint/suspicious/noArrayIndexKey: bullet items are stable
                        key={i}
                        className="flex gap-3"
                      >
                        <span aria-hidden className="mt-[0.6em] h-px w-4 shrink-0 bg-[var(--color-accent)]" />
                        {item}
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
