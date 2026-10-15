"use client";

import { useEffect, useRef, type AnchorHTMLAttributes } from "react";
import { appLink, appLinkWithCampaign } from "@/lib/site-links";
import { track } from "@/lib/analytics";

type AppLinkProps = {
  /** Path inside the main application, e.g. "/register". */
  to: string;
  /** Optional analytics event name fired on click. */
  event?: string;
  /** Optional analytics payload. */
  eventProps?: Record<string, unknown>;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

/**
 * Link into the main application. Preserves current UTM campaign params by
 * updating the anchor's href on the DOM after mount (no state churn) and
 * optionally reports a click event.
 */
export function AppLink({
  to,
  event,
  eventProps,
  children,
  onClick,
  ...rest
}: AppLinkProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (node) node.href = appLinkWithCampaign(to);
  }, [to]);

  return (
    <a
      ref={ref}
      href={appLink(to)}
      onClick={(e) => {
        if (event) track(event, { target: to, ...eventProps });
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
