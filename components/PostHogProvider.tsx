"use client";

import { useEffect } from "react";
import { readConsent } from "@/lib/consent";
import { initPostHog } from "@/lib/posthog";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (readConsent() === "accepted") initPostHog();
  }, []);

  return <>{children}</>;
}
