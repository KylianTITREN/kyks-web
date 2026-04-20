import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { KyksLogo } from "./KyksLogo";
import { LangSwitcher } from "./LangSwitcher";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:rounded-md focus:bg-[var(--color-accent)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        {t("skipToContent")}
      </a>
      <div className="container-editorial flex h-16 items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2"
          aria-label="KYKS — Accueil"
        >
          <KyksLogo size={32} />
          <span className="sr-only">KYKS</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm md:flex" aria-label="Main">
          <Link
            href="/#collaborations"
            className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
          >
            {t("collaborations")}
          </Link>
          <Link
            href="/#projects"
            className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
          >
            {t("projects")}
          </Link>
          <Link
            href="/#contact"
            className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
          >
            {t("contact")}
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <LangSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
