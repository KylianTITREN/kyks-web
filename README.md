# KYKS — Site vitrine

Site vitrine du studio tech [**KYKS**](https://kyks.io) + page CV Kylian Titren.

## Stack

- **Next.js 16** (app router, Turbopack) + TypeScript
- **Tailwind v4** + tokens CSS custom props (OKLCH)
- **Sanity** (CMS headless, Studio embedded sur `studio.kyks.io`)
- **next-intl** (FR / EN)
- **GSAP** + ScrollTrigger (animations)
- **PostHog** (analytics avec consent banner)
- **Biome** (format + lint)
- Hébergement **Vercel**

## Dev

```bash
pnpm install
pnpm dev              # http://localhost:3333
pnpm build            # build prod
pnpm typecheck        # tsc --noEmit
pnpm check            # biome check
pnpm check:fix        # biome check + auto-fix
```

## Studio Sanity

```bash
pnpm dev              # puis http://localhost:3333/studio
pnpm studio:dev       # studio standalone (hors Next)
pnpm studio:deploy    # publier le studio hosted sanity.studio
```

En prod le Studio est accessible via `https://studio.kyks.io` (même deploy Vercel, middleware route le subdomain vers `/studio`).

## Déploiement

Auto-deploy via Vercel sur push `main`. Pas de branche `staging` : **main = prod**.

### Variables d'environnement Vercel

| Variable | Valeur |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `v7dw6vnm` |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `NEXT_PUBLIC_SANITY_API_VERSION` | `2025-01-01` |
| `SANITY_API_TOKEN` | (viewer token, optionnel) |
| `NEXT_PUBLIC_POSTHOG_KEY` | (à créer sur posthog.com) |
| `NEXT_PUBLIC_POSTHOG_HOST` | `https://eu.i.posthog.com` |
| `NEXT_PUBLIC_SITE_URL` | `https://kyks.io` |
| `NEXT_PUBLIC_STUDIO_HOST` | `studio.kyks.io` |

### DNS kyks.io

- `@` → `76.76.21.21` (Vercel A record)
- `www` → `cname.vercel-dns.com`
- `studio` → `cname.vercel-dns.com`

Dans Vercel : ajouter les 3 domaines au projet (`kyks.io`, `www.kyks.io`, `studio.kyks.io`).

## Structure

```
.
├── app/
│   ├── [locale]/           # pages publiques (fr, en)
│   │   ├── layout.tsx
│   │   ├── page.tsx        # landing KYKS
│   │   └── kylian/page.tsx # CV Kylian
│   ├── studio/             # Sanity Studio embedded
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── sections/           # sections de pages
│   └── ...                 # UI + providers
├── hooks/                  # useTheme, useReducedMotion, useGsap
├── i18n/                   # routing + request config next-intl
├── lib/                    # consent, posthog, locale helpers
├── messages/               # fr.json, en.json
├── sanity/                 # env, client, schemas, queries, types
├── public/                 # assets statiques
├── middleware.ts           # i18n + rewrite studio subdomain
├── next.config.ts
├── sanity.config.ts
└── tsconfig.json
```
