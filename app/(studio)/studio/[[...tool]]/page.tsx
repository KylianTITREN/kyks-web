"use client";

import dynamic from "next/dynamic";
import config from "@/sanity.config";

const NextStudio = dynamic(() => import("next-sanity/studio").then((m) => m.NextStudio), {
  ssr: false,
  loading: () => (
    <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      Chargement du studio…
    </div>
  ),
});

export default function StudioPage() {
  return <NextStudio config={config} />;
}
