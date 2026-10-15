import { ArrowRight } from "lucide-react";
import { Reveal } from "../reveal";
import { Icon } from "../icon";
import { AppLink } from "../app-link";
import { Card, Container, SectionHeading, button } from "../ui";
import { ANALYTICS_EVENTS } from "@/lib/analytics";
import { CATEGORIES, RESOURCES } from "@/lib/site";

export function Explore() {
  return (
    <section
      id="explore"
      className="scroll-mt-20 border-t border-line py-20 sm:py-24"
      aria-labelledby="explore-title"
    >
      <Container>
        <SectionHeading
          eyebrow="Explore the platform"
          title={<span id="explore-title">Find the track that fits where you are.</span>}
          description="Organised areas that cover the skills engineers actually use. Open any of them in the app to start learning."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 80}>
              <AppLink
                to={c.href}
                event={ANALYTICS_EVENTS.categoryClick}
                eventProps={{ category: c.title }}
                className="group block h-full rounded-xl border border-line bg-surface/70 p-6 transition-colors hover:border-lime/40 hover:bg-surface-2"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-night text-lime">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <ArrowRight
                    className="h-4 w-4 text-fog transition-transform group-hover:translate-x-0.5 group-hover:text-lime"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-snow">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">{c.description}</p>
              </AppLink>
            </Reveal>
          ))}
        </div>

        <div className="mt-8">
          <AppLink
            to="/learn"
            event={ANALYTICS_EVENTS.learningPathCta}
            eventProps={{ location: "explore-all" }}
            className={button.secondary}
          >
            Browse all learning paths
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </AppLink>
        </div>
      </Container>
    </section>
  );
}

export function Resources() {
  return (
    <section
      id="resources"
      className="scroll-mt-20 border-t border-line py-20 sm:py-24"
      aria-labelledby="resources-title"
    >
      <Container>
        <SectionHeading
          eyebrow="Resource types"
          title={<span id="resources-title">Everything in one place.</span>}
          description="The goal is simple: help you find the right information and apply it to the task in front of you."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 80}>
              <Card className="h-full">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-night text-lime">
                  <Icon name={r.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-snow">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">{r.description}</p>
                <AppLink
                  to={r.href}
                  event={ANALYTICS_EVENTS.resourceClick}
                  eventProps={{ resource: r.title, location: "resources" }}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-lime hover:text-lime-dim"
                >
                  Open in app
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </AppLink>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Demo() {
  const actions = [
    "Open a learning section",
    "Find a resource that matches your task",
    "Follow a roadmap step by step",
    "Work through a troubleshooting guide",
  ];

  return (
    <section className="border-t border-line py-20 sm:py-24" aria-labelledby="demo-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="See what you can explore"
              title={<span id="demo-title">From a question to a concrete next step.</span>}
              description="Browse organised sections and resources, then open exactly what you need. No hunting across scattered tabs and bookmarks."
            />
            <ol className="mt-8 space-y-4">
              {actions.map((a, i) => (
                <li key={a} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime/15 font-mono text-[11px] font-semibold text-lime">
                    {i + 1}
                  </span>
                  <span className="text-sm text-snow">{a}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8">
              <AppLink
                to="/register"
                event={ANALYTICS_EVENTS.exploreCta}
                eventProps={{ location: "demo" }}
                className={button.primary}
              >
                Explore for Free
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </AppLink>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <DemoPreview />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function DemoPreview() {
  const steps = [
    { label: "Linux fundamentals", done: true },
    { label: "Networking basics", done: true },
    { label: "Docker & containers", done: false },
    { label: "Kubernetes", done: false },
  ];

  return (
    <figure>
      <div className="rounded-2xl border border-line bg-surface/80 p-2 shadow-xl">
        <div className="flex items-center gap-2 px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden="true" />
          <span className="ml-3 rounded-md border border-line bg-night px-3 py-1 font-mono text-[11px] text-fog">
            devopsforge.co/roadmaps
          </span>
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-snow">DevOps roadmap</h3>
            <span className="rounded-full border border-line px-2 py-0.5 text-[10px] text-fog">
              illustrative
            </span>
          </div>

          <ul className="mt-4 space-y-2">
            {steps.map((s) => (
              <li
                key={s.label}
                className="flex items-center gap-3 rounded-lg border border-line bg-night px-3 py-2.5"
              >
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                    s.done
                      ? "bg-lime text-night"
                      : "border border-line text-fog"
                  }`}
                  aria-hidden="true"
                >
                  {s.done ? "✓" : ""}
                </span>
                <span
                  className={`text-sm ${s.done ? "text-fog line-through" : "text-snow"}`}
                >
                  {s.label}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-line bg-surface-2 p-3">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-lime">
                Cheat sheet
              </span>
              <p className="mt-1 text-xs text-snow">Git & Linux commands</p>
            </div>
            <div className="rounded-lg border border-line bg-surface-2 p-3">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-lime">
                Guide
              </span>
              <p className="mt-1 text-xs text-snow">Debug a failing deploy</p>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs text-fog/70">
        Illustrative preview of a roadmap and resources.
      </figcaption>
    </figure>
  );
}
