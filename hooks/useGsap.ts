"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "./useReducedMotion";

type GsapSetup = (
	gsap: typeof import("gsap").default,
	scope: HTMLElement,
) => (() => void) | undefined;

export function useGsap(setup: GsapSetup, deps: React.DependencyList = []) {
	const ref = useRef<HTMLElement>(null);
	const reduced = useReducedMotion();
	const mountCount = useRef(0);

	useEffect(() => {
		mountCount.current += 1;
		if (reduced || !ref.current) return;
		let cleanup: (() => void) | undefined;
		let cancelled = false;

		(async () => {
			const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
				import("gsap"),
				import("gsap/ScrollTrigger"),
			]);
			if (cancelled || !ref.current) return;
			gsap.registerPlugin(ScrollTrigger);
			cleanup = setup(gsap, ref.current) ?? undefined;
		})();

		return () => {
			cancelled = true;
			if (cleanup) {
				cleanup();
			}
			// Clear any GSAP inline styles so re-mounts start clean
			if (ref.current) {
				import("gsap").then(({ default: gsap }) => {
					if (ref.current) {
						gsap.set(ref.current.querySelectorAll("[data-anim]"), {
							clearProps: "all",
						});
					}
				});
			}
		};
	}, [reduced, setup, ...deps]);

	return ref;
}
