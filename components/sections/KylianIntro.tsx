import Image from "next/image";
import { useTranslations } from "next-intl";

export function KylianIntro() {
  const t = useTranslations("kylian.intro");

  return (
    <section className="py-[var(--space-section)]">
      <div className="container-editorial grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <span className="mb-6 inline-block text-xs font-medium uppercase tracking-[0.24em] text-[var(--color-accent)]">
            {t("eyebrow")}
          </span>
          <h1 className="text-[var(--text-hero)] font-medium leading-[1.02] tracking-[-0.03em]">
            {t("title")}
          </h1>
          <p className="mt-8 max-w-xl text-lg text-[var(--color-text-muted)]">{t("subtitle")}</p>
        </div>
        <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-strong)] bg-[var(--color-surface-alt)]">
          <Image
            src="/kylian/portrait.jpg"
            alt="Kylian Titren"
            fill
            sizes="(max-width: 768px) 100vw, 280px"
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
