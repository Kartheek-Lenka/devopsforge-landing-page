"use client";

import { useEffect } from "react";
import { ANALYTICS_EVENTS, track } from "@/lib/analytics";

/** Fires a single landing-page-view event on mount. */
export function PageView() {
  useEffect(() => {
    track(ANALYTICS_EVENTS.pageView, {
      path: window.location.pathname,
      referrer: document.referrer || null,
    });
  }, []);

  return null;
}
