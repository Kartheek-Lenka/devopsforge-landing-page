import { SITE } from "./site";

/** Build an absolute URL into the main application. */
export function appLink(path: string): string {
  const base = SITE.appUrl.replace(/\/$/, "");
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

/** Read campaign params from the current URL (client only). */
export function currentCampaign(): Record<string, string> {
  const out: Record<string, string> = {};
  if (typeof window === "undefined") return out;
  try {
    const params = new URLSearchParams(window.location.search);
    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) out[key] = value;
    }
  } catch {
    /* ignore */
  }
  return out;
}

/** Append preserved campaign params to an app URL (client only). */
export function appLinkWithCampaign(path: string): string {
  const base = appLink(path);
  const campaign = currentCampaign();
  const query = new URLSearchParams(campaign).toString();
  if (!query) return base;
  return `${base}${base.includes("?") ? "&" : "?"}${query}`;
}
