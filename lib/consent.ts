export const CONSENT_COOKIE = "kyks_consent";
export type ConsentValue = "accepted" | "declined";

const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;

export const readConsent = (): ConsentValue | null => {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/(?:^|; )kyks_consent=([^;]+)/);
  if (!match) return null;
  const value = decodeURIComponent(match[1]);
  return value === "accepted" || value === "declined" ? value : null;
};

export const writeConsent = (value: ConsentValue) => {
  if (typeof document === "undefined") return;
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE}=${value}; Max-Age=${ONE_YEAR_SECONDS}; Path=/; SameSite=Lax${secure}`;
};
