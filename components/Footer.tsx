import { useTranslations } from "next-intl";
import { ManageConsentButton } from "./ManageConsentButton";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] py-12">
      <div className="container-editorial flex flex-col gap-4 text-sm text-[var(--color-text-muted)] md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-[var(--font-display)] text-base text-[var(--color-text)]">KYKS</span>
          <span>{t("tagline")}</span>
        </div>
        <div className="flex flex-col gap-1 md:items-end">
          <span>
            © {year} KYKS — {t("rights")}
          </span>
          <div className="flex items-center gap-3">
            <span className="text-[var(--color-text-subtle)]">{t("credits")}</span>
            <span className="text-[var(--color-border-strong)]">·</span>
            <ManageConsentButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
