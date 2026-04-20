import { useTranslations } from "next-intl";

export function ContactSection() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="py-[var(--space-section)]">
      <div className="container-editorial">
        <span className="mb-4 block text-xs font-medium uppercase tracking-[0.24em] text-[var(--color-accent)]">
          {t("eyebrow")}
        </span>
        <h2 className="max-w-3xl text-[var(--text-4xl)] font-medium leading-[1.1] tracking-[-0.03em]">
          {t("title")}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)]">{t("description")}</p>
        <a
          href={`mailto:${t("email")}`}
          className="mt-10 inline-flex items-center gap-3 font-[var(--font-display)] text-[var(--text-3xl)] underline decoration-[var(--color-accent)] decoration-2 underline-offset-8 transition-all hover:decoration-4"
        >
          {t("email")}
          <span aria-hidden className="text-[var(--color-accent)]">→</span>
        </a>
      </div>
    </section>
  );
}
