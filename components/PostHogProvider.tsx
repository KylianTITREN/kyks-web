"use client";

import { readConsent } from "@/lib/consent";
import { initPostHog } from "@/lib/posthog";
import { useEffect } from "react";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		if (readConsent() === "accepted") initPostHog();
	}, []);

	return <>{children}</>;
}
