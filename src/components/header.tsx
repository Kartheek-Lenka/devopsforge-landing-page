"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Brand } from "./brand";
import { AppLink } from "./app-link";
import { button, Container } from "./ui";
import { NAV } from "@/lib/site";
import { ANALYTICS_EVENTS, track } from "@/lib/analytics";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line bg-night/85 backdrop-blur supports-[backdrop-filter]:bg-night/70"
          : "border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Brand />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV.map((item) =>
            item.kind === "anchor" ? (
              <a
                key={item.label}
                href={item.href}
                onClick={() => track(ANALYTICS_EVENTS.navClick, { item: item.label })}
                className="rounded-lg px-3 py-2 text-sm font-medium text-fog transition-colors hover:text-snow"
              >
                {item.label}
              </a>
            ) : (
              <AppLink
                key={item.label}
                to={item.href}
                event={ANALYTICS_EVENTS.navClick}
                eventProps={{ item: item.label }}
                className="rounded-lg px-3 py-2 text-sm font-medium text-fog transition-colors hover:text-snow"
              >
                {item.label}
              </AppLink>
            )
          )}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <AppLink
            to="/login"
            event={ANALYTICS_EVENTS.signInClick}
            className={button.ghost}
          >
            Sign in
          </AppLink>
          <AppLink
            to="/register"
            event={ANALYTICS_EVENTS.exploreCta}
            eventProps={{ location: "header" }}
            className={button.primary}
          >
            Explore for Free
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </AppLink>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-snow md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </Container>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-line bg-night/95 backdrop-blur md:hidden"
        >
          <Container className="flex flex-col gap-2 py-4">
            {NAV.map((item) =>
              item.kind === "anchor" ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-fog hover:bg-surface-2 hover:text-snow"
                >
                  {item.label}
                </a>
              ) : (
                <AppLink
                  key={item.label}
                  to={item.href}
                  event={ANALYTICS_EVENTS.navClick}
                  eventProps={{ item: item.label, location: "mobile" }}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-fog hover:bg-surface-2 hover:text-snow"
                >
                  {item.label}
                </AppLink>
              )
            )}
            <div className="mt-2 flex flex-col gap-2 border-t border-line pt-3">
              <AppLink
                to="/login"
                event={ANALYTICS_EVENTS.signInClick}
                onClick={closeMenu}
                className={`${button.secondary} w-full`}
              >
                Sign in
              </AppLink>
              <AppLink
                to="/register"
                event={ANALYTICS_EVENTS.exploreCta}
                eventProps={{ location: "mobile-menu" }}
                onClick={closeMenu}
                className={`${button.primary} w-full`}
              >
                Explore for Free
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </AppLink>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
