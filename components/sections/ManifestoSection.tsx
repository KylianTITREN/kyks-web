import { useTranslations } from "next-intl";

export function ManifestoSection() {
  const t = useTranslations("manifesto");

  return (
    <section className="bg-[var(--color-surface-alt)] py-[var(--space-section)]">
      <div className="container-editorial">
        <span className="mb-4 block text-xs font-medium uppercase tracking-[0.24em] text-[var(--color-accent)]">
          {t("eyebrow")}
        </span>
        <h2 className="max-w-4xl text-[var(--text-4xl)] font-medium leading-[1.1] tracking-[-0.03em]">
          {t("title")}
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--color-text-muted)]">
          {t("body")}
        </p>
      </div>
    </section>
  );
}
