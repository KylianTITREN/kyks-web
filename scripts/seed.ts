/**
 * Seed script — hydrate Sanity avec le contenu KYKS initial.
 *
 * Usage :
 *   pnpm seed                # upsert (createOrReplace, idempotent)
 *   pnpm seed -- --dry-run   # log uniquement, rien n'est envoyé
 *
 * Le script est idempotent : chaque doc a un _id déterministe,
 * relancer met à jour les docs existants sans créer de doublons.
 */

import { config as loadEnv } from "dotenv";
import { createClient } from "@sanity/client";

loadEnv({ path: ".env.local" });
loadEnv({ path: ".env" });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const token = process.env.SANITY_API_TOKEN;
const dryRun = process.argv.includes("--dry-run");

if (!projectId) throw new Error("NEXT_PUBLIC_SANITY_PROJECT_ID manquant dans .env.local");
if (!token) throw new Error("SANITY_API_TOKEN manquant dans .env.local");

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2025-01-01",
  token,
  useCdn: false,
});

// ---------- Contenu ----------

const siteSettings = {
  _id: "siteSettings",
  _type: "siteSettings",
  tagline: {
    fr: "On construit des produits digitaux qui performent.",
    en: "We build digital products that perform.",
  },
  pitch: {
    fr: "Studio tech spécialisé JS/TS — React, Next.js, Node.js. KYKS accompagne startups et grands comptes sur la conception, le développement et la scalabilité de leurs plateformes.",
    en: "Tech studio specialized in JS/TS — React, Next.js, Node.js. KYKS helps startups and enterprises design, build and scale their platforms.",
  },
  contactEmail: "hello@kyks.io",
};

const collaborations = [
  {
    _id: "collaboration.boulanger",
    _type: "collaboration",
    name: "Boulanger",
    slug: { _type: "slug", current: "boulanger" },
    url: "https://www.boulanger.com",
    role: { fr: "Mission tech — frontend & BFF", en: "Tech engagement — frontend & BFF" },
    summary: {
      fr: "Modernisation de l'architecture web et du BFF sur un des plus gros sites e-commerce français.",
      en: "Web architecture and BFF modernization on one of France's largest e-commerce sites.",
    },
    contributions: {
      fr: [
        "Mise en œuvre de solutions micro-frontend pour faire évoluer l'architecture du site",
        "Intégration de Qwik pour améliorer les performances et l'accessibilité",
        "Développement et optimisation d'un Backend for Frontend (BFF) en Node.js",
      ],
      en: [
        "Implementation of micro-frontend solutions to evolve the site architecture",
        "Qwik integration to improve performance and accessibility",
        "Design and optimization of a Node.js Backend for Frontend (BFF)",
      ],
    },
    period: "2023 — 2024",
    order: 10,
    featured: true,
  },
  {
    _id: "collaboration.reconomia",
    _type: "collaboration",
    name: "Reconomia",
    slug: { _type: "slug", current: "reconomia" },
    url: "https://reconomia.fr",
    role: { fr: "Mission tech — mobile & plateforme", en: "Tech engagement — mobile & platform" },
    summary: {
      fr: "Apps React Native pour reconditionneurs et réparateurs terrain, plus une plateforme d'administration.",
      en: "React Native apps for refurbishers and field repair teams, plus an admin platform.",
    },
    contributions: {
      fr: [
        "Développement d'applications React Native pour les reconditionneurs (consultation, validation, déclaration produits)",
        "Création d'une plateforme d'administration pour la gestion des contenus",
        "Intégration des API et synchronisation des données en temps réel",
        "Déploiement sur appareils professionnels Zebra pour accompagner les réparateurs terrain",
      ],
      en: [
        "React Native apps for refurbishers (product browsing, validation, reporting)",
        "Admin platform for content management",
        "API integration and real-time data sync",
        "Deployment on Zebra professional devices for field repair teams",
      ],
    },
    period: "2023",
    order: 20,
    featured: true,
  },
];

const projects = [
  {
    _id: "project.profin",
    _type: "project",
    name: "Profin",
    slug: { _type: "slug", current: "profin" },
    url: "https://pro-fin.fr",
    tagline: {
      fr: "SaaS apport d'affaires & matching ESN",
      en: "Business-referral & ESN matching SaaS",
    },
    summary: {
      fr: "Plateforme dédiée à l'apport d'affaires et au matching de profils — centralisation des missions et candidats, scoring de pertinence, partage sécurisé de profils entre ESN et entreprises.",
      en: "Platform for business referral and profile matching — mission and candidate centralization, relevance scoring, secure profile sharing between tech consultancies and companies.",
    },
    highlights: {
      fr: [
        "Centralisation des missions et des candidats",
        "Matching intelligent avec scoring de pertinence",
        "Partage sécurisé de profils entre ESN et entreprises",
      ],
      en: [
        "Mission and candidate centralization",
        "Smart matching with relevance scoring",
        "Secure profile sharing between ESNs and companies",
      ],
    },
    stack: ["React", "TypeScript", "Node.js", "Fastify", "PostgreSQL", "Drizzle", "Vercel"],
    category: "saas",
    status: "active",
    year: "2025",
    order: 10,
    featured: true,
  },
  {
    _id: "project.coutellerie-passion",
    _type: "project",
    name: "Coutellerie Passion",
    slug: { _type: "slug", current: "coutellerie-passion" },
    url: "https://coutellerie-passion.fr",
    tagline: {
      fr: "E-commerce coutellerie artisanale",
      en: "Artisan knife e-commerce",
    },
    summary: {
      fr: "Boutique en ligne complète avec CMS headless Strapi pour la gestion autonome des contenus et produits, et Stripe pour le paiement.",
      en: "Full-featured online store with Strapi headless CMS for autonomous content and product management, and Stripe payments.",
    },
    highlights: {
      fr: [
        "Tunnel d'achat complet",
        "CMS headless Strapi pour la gestion client",
        "Paiement Stripe intégré",
      ],
      en: ["Full checkout flow", "Strapi headless CMS for self-service management", "Stripe payment integration"],
    },
    stack: ["Next.js", "Strapi", "Stripe", "TypeScript"],
    category: "ecommerce",
    status: "shipped",
    year: "2024",
    order: 20,
  },
  {
    _id: "project.eco-den",
    _type: "project",
    name: "Eco-Den",
    slug: { _type: "slug", current: "eco-den" },
    url: "https://eco-den.fr",
    tagline: {
      fr: "Vitrine digitale pour salons professionnels",
      en: "Digital showcase for trade shows",
    },
    summary: {
      fr: "Site vitrine permettant de digitaliser la présence du client sur les salons — catalogue produit partageable avec les prospects et génération de leads.",
      en: "Showcase site that digitizes the client's presence at trade shows — shareable product catalog with prospects and lead generation.",
    },
    highlights: {
      fr: [
        "Catalogue produit accessible et partageable",
        "Génération de leads via formulaire de contact",
        "Optimisé pour partage en direct sur stand",
      ],
      en: ["Accessible and shareable product catalog", "Lead generation via contact form", "Optimized for live booth sharing"],
    },
    stack: ["Next.js", "TypeScript", "Tailwind"],
    category: "vitrine",
    status: "shipped",
    year: "2024",
    order: 30,
  },
  {
    _id: "project.fitisly",
    _type: "project",
    name: "Fitisly",
    slug: { _type: "slug", current: "fitisly" },
    tagline: {
      fr: "Le réseau social des sportifs",
      en: "The social network for athletes",
    },
    summary: {
      fr: "Projet initial autour de la mise en relation et du partage entre pratiquants sportifs. Aujourd'hui arrêté, a posé les bases du parcours entrepreneurial qui a mené à KYKS.",
      en: "Initial project around connecting and sharing between athletes. Now discontinued, laid the foundations of the entrepreneurial journey that led to KYKS.",
    },
    stack: ["React Native", "Node.js"],
    category: "mobile",
    status: "archived",
    year: "2022",
    order: 90,
  },
];

const experiences = [
  {
    _id: "experience.kyks-founder",
    _type: "experience",
    company: "KYKS",
    role: { fr: "Fondateur · Développeur full-stack", en: "Founder · Full-stack developer" },
    startDate: "2023-06-01",
    location: "Paris · Remote",
    summary: {
      fr: "Studio tech spécialisé JS/TS. Accompagnement technique de startups et grands comptes — conception, développement, scalabilité.",
      en: "JS/TS tech studio. Technical partner for startups and enterprises — design, development, scalability.",
    },
    achievements: {
      fr: [
        "Mission Boulanger : micro-frontend, Qwik, BFF Node.js",
        "Mission Reconomia : apps React Native + plateforme admin",
        "Livraison Coutellerie Passion (e-commerce Strapi + Stripe) et Eco-Den (vitrine)",
        "Développement de Profin, SaaS d'apport d'affaires",
      ],
      en: [
        "Boulanger engagement: micro-frontend, Qwik, Node.js BFF",
        "Reconomia engagement: React Native apps + admin platform",
        "Shipped Coutellerie Passion (Strapi + Stripe e-commerce) and Eco-Den (showcase)",
        "Building Profin, a business-referral SaaS",
      ],
    },
    stack: ["React", "Next.js", "Node.js", "React Native", "TypeScript", "PostgreSQL"],
  },
];

const skillGroups = [
  {
    _id: "skillGroup.frontend",
    _type: "skillGroup",
    title: { fr: "Frontend", en: "Frontend" },
    skills: ["React", "Next.js", "Qwik", "TypeScript", "Tailwind CSS", "CSS moderne", "GSAP", "Accessibilité"],
    order: 10,
  },
  {
    _id: "skillGroup.backend",
    _type: "skillGroup",
    title: { fr: "Backend", en: "Backend" },
    skills: ["Node.js", "Fastify", "Express", "BFF", "REST", "GraphQL", "PostgreSQL", "Drizzle ORM"],
    order: 20,
  },
  {
    _id: "skillGroup.mobile",
    _type: "skillGroup",
    title: { fr: "Mobile", en: "Mobile" },
    skills: ["React Native", "Expo", "Intégration Zebra"],
    order: 30,
  },
  {
    _id: "skillGroup.devops",
    _type: "skillGroup",
    title: { fr: "Outils & plateformes", en: "Tools & platforms" },
    skills: ["Vercel", "GitHub Actions", "Sanity", "Strapi", "Stripe", "PostHog", "Sentry"],
    order: 40,
  },
];

const socialLinks = [
  {
    _id: "social.linkedin-kyks",
    _type: "socialLink",
    label: "LinkedIn KYKS",
    url: "https://www.linkedin.com/company/kyks/",
    platform: "linkedin",
    scope: "kyks",
    order: 10,
  },
  {
    _id: "social.email-kyks",
    _type: "socialLink",
    label: "hello@kyks.io",
    url: "mailto:hello@kyks.io",
    platform: "email",
    scope: "both",
    order: 20,
  },
  {
    _id: "social.linkedin-kylian",
    _type: "socialLink",
    label: "LinkedIn Kylian",
    url: "https://www.linkedin.com/in/kyliantitren/",
    platform: "linkedin",
    scope: "kylian",
    order: 30,
  },
];

type SeedDoc = { _id: string; _type: string; [key: string]: unknown };

const allDocs: SeedDoc[] = [
  siteSettings,
  ...collaborations,
  ...projects,
  ...experiences,
  ...skillGroups,
  ...socialLinks,
];

// ---------- Run ----------

async function seed() {
  console.log(`\n▸ Project: ${projectId}  ·  Dataset: ${dataset}`);
  console.log(`▸ ${allDocs.length} documents à écrire${dryRun ? " (DRY RUN)" : ""}\n`);

  if (dryRun) {
    for (const doc of allDocs) {
      console.log(`  ${doc._type.padEnd(15)}  ${doc._id}`);
    }
    console.log("\n✓ Dry run terminé — aucune écriture.");
    return;
  }

  const tx = client.transaction();
  for (const doc of allDocs) tx.createOrReplace(doc);

  try {
    const result = await tx.commit();
    console.log(`✓ Transaction commitée — ${result.documentIds?.length ?? allDocs.length} docs upsertés.`);
  } catch (err) {
    if (err instanceof Error && /insufficient permissions/i.test(err.message)) {
      console.error("\n✗ Le token SANITY_API_TOKEN n'a pas les droits d'écriture.");
      console.error("  Crée un token Editor sur https://sanity.io/manage → Settings → API");
      console.error("  puis remplace SANITY_API_TOKEN dans .env.local.\n");
    } else {
      console.error("\n✗ Erreur:", err);
    }
    process.exit(1);
  }
}

seed();
