import { useTranslations } from "next-intl";
import type { SocialLink } from "@/sanity/types";

const FALLBACK_LINKS: SocialLink[] = [
  { _id: "fallback-linkedin", label: "LinkedIn", url: "https://www.linkedin.com/company/kyks/", platform: "linkedin" },
  { _id: "fallback-email", label: "hello@kyks.io", url: "mailto:hello@kyks.io", platform: "email" },
];

type Props = { links: SocialLink[] };

export function KylianSocial({ links }: Props) {
  const t = useTranslations("kylian.sections");
  const items = links.length > 0 ? links : FALLBACK_LINKS;

  return (
    <section className="border-t border-[var(--color-border)] py-[var(--space-section)]">
      <div className="container-editorial">
        <h2 className="mb-12 font-[var(--font-display)] text-[var(--text-3xl)]">{t("social")}</h2>
        <ul className="flex flex-col gap-4">
          {items.map((link) => (
            <li key={link._id}>
              <a
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-baseline justify-between gap-4 border-b border-[var(--color-border)] py-4 text-lg transition-colors hover:border-[var(--color-border-strong)] hover:text-[var(--color-accent)]"
              >
                <span>{link.label}</span>
                <span
                  aria-hidden
                  className="text-[var(--color-text-subtle)] transition-colors group-hover:text-[var(--color-accent)]"
                >
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
