import { currentCampaign } from "./site-links";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type Props = Record<string, unknown>;

/**
 * Lightweight, dependency-free event tracking.
 *
 * Forwards events to Google Analytics (gtag) and the GTM dataLayer if either is
 * present on the page. If NEXT_PUBLIC_GA_ID is configured, the GA script is
 * loaded in the layout. When no analytics provider is present this is a no-op
 * (except a dev-only debug log), so no data leaves the browser unexpectedly.
 */
export function track(event: string, props: Props = {}): void {
  if (typeof window === "undefined") return;

  const payload = { event, ...props, ...currentCampaign() };

  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
    window.gtag?.("event", event, props);
  } catch {
    /* ignore */
  }

  if (process.env.NODE_ENV !== "production") {
    console.debug("[analytics]", payload);
  }
}

export const ANALYTICS_EVENTS = {
  pageView: "landing_page_viewed",
  exploreCta: "explore_cta_clicked",
  learningPathCta: "learning_path_cta_clicked",
  resourceClick: "resource_card_clicked",
  categoryClick: "category_card_clicked",
  navClick: "nav_link_clicked",
  githubClick: "github_link_clicked",
  signUpCta: "sign_up_cta_clicked",
  signInClick: "sign_in_clicked",
  faqOpen: "faq_item_opened",
} as const;
