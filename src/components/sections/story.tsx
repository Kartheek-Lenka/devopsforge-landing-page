import { ArrowRight } from "lucide-react";
import { Reveal } from "../reveal";
import { Icon } from "../icon";
import { AppLink } from "../app-link";
import { Card, Container, SectionHeading, button } from "../ui";
import { ANALYTICS_EVENTS } from "@/lib/analytics";
import { DIAGNOSTIC_STEPS, PROBLEMS, WORKFLOW } from "@/lib/site";

export function Problem() {
  return (
    <section className="border-t border-line py-20 sm:py-24" aria-labelledby="problem-title">
      <Container>
        <SectionHeading
          eyebrow="The problem"
          title={<span id="problem-title">Knowing the theory is only the beginning.</span>}
          description="Most engineers do not struggle to find information. They struggle to turn it into practical ability."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <Card className="h-full">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface-2 text-lime">
                  <Icon name={p.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-snow">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">{p.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Workflow() {
  return (
    <section className="border-t border-line py-20 sm:py-24" aria-labelledby="workflow-title">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title={<span id="workflow-title">Learn. Practise. Build. Troubleshoot.</span>}
          description="A practical loop that connects understanding to application. Steps marked with a note are interactive; the rest are structured learning material."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {WORKFLOW.map((s, i) => (
            <Reveal key={s.step} delay={i * 90} className="h-full">
              <Card className="flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface-2 text-lime">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs text-fog/70">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold uppercase tracking-wide text-snow">
                  {s.step}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">{s.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-xs text-fog/80">
          Note: some areas include interactive, hands-on features (for example
          labs), while others are reading material such as roadmaps, cheat sheets
          and guides.
        </p>
      </Container>
    </section>
  );
}

export function Scenario() {
  return (
    <section className="border-t border-line py-20 sm:py-24" aria-labelledby="scenario-title">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Think like an engineer"
              title={<span id="scenario-title">What would you check first?</span>}
              description="DevOpsForge guides you from a symptom to a systematic investigation, instead of jumping straight to a guessed fix."
            />
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-line bg-surface/70 p-6 sm:p-8">
              <p className="text-sm font-medium text-fog">Scenario</p>
              <p className="mt-2 text-lg font-semibold leading-snug text-snow">
                Your deployment pipeline is green, but users cannot access your
                application. Where would you investigate?
              </p>

              <ol className="mt-6 space-y-3">
                {DIAGNOSTIC_STEPS.map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line bg-night font-mono text-[11px] text-lime">
                      {i + 1}
                    </span>
                    <span className="text-sm text-snow">{step}</span>
                  </li>
                ))}
              </ol>

              <div className="mt-7">
                <AppLink
                  to="/troubleshoot"
                  event={ANALYTICS_EVENTS.resourceClick}
                  eventProps={{ source: "scenario" }}
                  className={button.secondary}
                >
                  Explore troubleshooting guides
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </AppLink>
              </div>
            </div>
          </Reveal>
        </div>

        <p className="mt-6 text-xs text-fog/80">
          This is an educational example to illustrate a diagnostic approach — not
          a reported incident.
        </p>
      </Container>
    </section>
  );
}
