"use client";

import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "kyks-theme";

export function useTheme() {
	const [theme, setThemeState] = useState<Theme>("light");

	useEffect(() => {
		const stored = (localStorage.getItem(STORAGE_KEY) as Theme | null) ?? "light";
		setThemeState(stored);
		// Re-apply on mount (covers locale switch navigation)
		document.documentElement.setAttribute("data-theme", stored);
	}, []);

	const setTheme = (next: Theme) => {
		setThemeState(next);
		document.documentElement.setAttribute("data-theme", next);
		localStorage.setItem(STORAGE_KEY, next);
	};

	const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

	return { theme, setTheme, toggleTheme };
}
