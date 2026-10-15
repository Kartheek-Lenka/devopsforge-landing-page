import { ArrowRight, Check } from "lucide-react";
import { AppLink } from "../app-link";
import { Container, button } from "../ui";
import { ANALYTICS_EVENTS } from "@/lib/analytics";

const VALUE_POINTS = [
  "Practical resources",
  "Clear learning paths",
  "Real engineering problems",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      {/* Backdrop */}
      <div className="grid-bg grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-lime/10 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3 py-1 text-xs font-semibold text-lime">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-lime" aria-hidden="true" />
            Free to explore
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-snow sm:text-5xl lg:text-6xl">
            Stop Memorizing.
            <br />
            <span className="text-lime">Start Solving.</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-fog">
            Learn technical skills, explore practical resources, and develop the
            confidence to tackle real engineering problems with DevOpsForge.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <AppLink
              to="/register"
              event={ANALYTICS_EVENTS.exploreCta}
              eventProps={{ location: "hero" }}
              className={button.primary}
            >
              Explore for Free
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </AppLink>
            <AppLink
              to="/roadmaps"
              event={ANALYTICS_EVENTS.learningPathCta}
              eventProps={{ location: "hero" }}
              className={button.secondary}
            >
              Explore Learning Paths
            </AppLink>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
            {VALUE_POINTS.map((point) => (
              <li key={point} className="inline-flex items-center gap-2 text-sm text-fog">
                <Check className="h-4 w-4 text-lime" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <ProductPreview />
      </Container>
    </section>
  );
}

/**
 * Honest, representative interface composition built from the app's real
 * feature areas (tracks, cheat sheets, troubleshooting). It is an illustrative
 * preview — not a captured screenshot — and is labelled as such for users.
 */
function ProductPreview() {
  const tracks = [
    "Development",
    "DevOps",
    "Testing",
    "DSA",
    "Cloud Engineering",
    "Data & AI",
  ];

  return (
    <figure className="relative">
      <div className="animate-float rounded-2xl border border-line bg-surface/80 p-2 shadow-2xl backdrop-blur">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden="true" />
          <div className="ml-3 flex-1 truncate rounded-md border border-line bg-night px-3 py-1 font-mono text-[11px] text-fog">
            devopsforge.co/devops
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr]">
          {/* Sidebar */}
          <aside className="hidden border-r border-line p-3 sm:block">
            <p className="px-2 pb-2 text-[10px] font-semibold uppercase tracking-widest text-fog/70">
              Tracks
            </p>
            <ul className="space-y-0.5">
              {tracks.map((t) => (
                <li
                  key={t}
                  className={`rounded-md px-2 py-1.5 text-xs ${
                    t === "DevOps"
                      ? "bg-lime/10 font-medium text-lime"
                      : "text-fog"
                  }`}
                >
                  {t}
                </li>
              ))}
            </ul>
          </aside>

          {/* Main panel */}
          <div className="space-y-3 p-3">
            <div className="rounded-lg border border-line bg-night p-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-snow">
                  Terminal · practice
                </span>
                <span className="rounded-full border border-line px-2 py-0.5 text-[10px] text-fog">
                  illustrative
                </span>
              </div>
              <pre className="mt-2 overflow-hidden font-mono text-[11px] leading-relaxed text-fog">
                <code>
                  <span className="text-mint">$</span> kubectl get pods -n prod{"\n"}
                  NAME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;READY&nbsp;&nbsp;STATUS{"\n"}
                  api-7c9f4d8b6-2xk9p&nbsp;&nbsp;1/1&nbsp;&nbsp;&nbsp;Running{"\n"}
                  web-5d7b9c6f4-m2q8z&nbsp;&nbsp;1/1&nbsp;&nbsp;&nbsp;Running{"\n"}
                  <span className="text-mint">$</span> docker compose ps{" "}
                  <span className="animate-blink">▋</span>
                </code>
              </pre>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <PreviewCard
                tag="Cheat sheet"
                title="Docker & Kubernetes commands"
              />
              <PreviewCard
                tag="Troubleshooting"
                title="Pods stuck in CrashLoopBackOff"
              />
            </div>
          </div>
        </div>
      </div>

      <figcaption className="mt-3 text-center text-xs text-fog/70">
        Illustrative preview of the DevOpsForge interface.
      </figcaption>
    </figure>
  );
}

function PreviewCard({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="rounded-lg border border-line bg-surface-2 p-3">
      <span className="text-[10px] font-semibold uppercase tracking-widest text-lime">
        {tag}
      </span>
      <p className="mt-1 text-xs font-medium text-snow">{title}</p>
      <div className="mt-2 space-y-1" aria-hidden="true">
        <div className="h-1.5 w-4/5 rounded-full bg-line" />
        <div className="h-1.5 w-3/5 rounded-full bg-line" />
      </div>
    </div>
  );
}
