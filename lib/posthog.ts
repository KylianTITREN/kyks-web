"use client";

import posthog from "posthog-js";

let initialized = false;

export const initPostHog = () => {
	if (initialized || typeof window === "undefined") return;
	const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
	const host = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://eu.i.posthog.com";
	if (!key) return;

	posthog.init(key, {
		api_host: host,
		capture_pageview: true,
		capture_pageleave: true,
		persistence: "localStorage+cookie",
		autocapture: false,
		person_profiles: "identified_only",
		loaded: (ph) => {
			ph.register({ app: "kyks" });
		},
	});
	initialized = true;
};

export const optOutPostHog = () => {
	if (typeof window === "undefined") return;
	posthog.opt_out_capturing();
};

export { posthog };
