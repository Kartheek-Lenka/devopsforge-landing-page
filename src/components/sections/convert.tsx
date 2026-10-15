import { ArrowRight } from "lucide-react";
import { Reveal } from "../reveal";
import { Icon } from "../icon";
import { AppLink } from "../app-link";
import { Card, Container, SectionHeading, button } from "../ui";
import { ANALYTICS_EVENTS } from "@/lib/analytics";
import { AUDIENCE, FAQS } from "@/lib/site";

export function Audience() {
  return (
    <section className="border-t border-line py-20 sm:py-24" aria-labelledby="audience-title">
      <Container>
        <SectionHeading
          eyebrow="Who it is for"
          title={<span id="audience-title">Built for engineers at every stage.</span>}
          description="Wherever you are right now, there is a useful next step."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {AUDIENCE.map((a, i) => (
            <Reveal key={a.title} delay={i * 90}>
              <Card className="h-full">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface-2 text-lime">
                  <Icon name={a.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-snow">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">{a.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="border-t border-line py-20 sm:py-24" aria-labelledby="cta-title">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-lime/25 bg-gradient-to-br from-lime/[0.08] to-transparent px-6 py-12 text-center sm:px-12 sm:py-16">
            <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
            <div className="relative">
              <h2
                id="cta-title"
                className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-snow sm:text-4xl"
              >
                Your next technical skill starts here.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-fog">
                Explore DevOpsForge, find resources relevant to your goals, and take
                the next step in your engineering journey.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <AppLink
                  to="/register"
                  event={ANALYTICS_EVENTS.exploreCta}
                  eventProps={{ location: "final-cta" }}
                  className={button.primary}
                >
                  Explore for Free
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </AppLink>
                <AppLink
                  to="/roadmaps"
                  event={ANALYTICS_EVENTS.learningPathCta}
                  eventProps={{ location: "final-cta" }}
                  className={button.secondary}
                >
                  Browse Learning Paths
                </AppLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function Faq() {
  return (
    <section className="border-t border-line py-20 sm:py-24" aria-labelledby="faq-title">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title={<span id="faq-title">Questions, answered.</span>}
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={Math.min(i * 60, 240)}>
              <details className="group rounded-xl border border-line bg-surface/70 p-5 open:border-lime/30">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-semibold text-snow [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    className="text-lg leading-none text-fog transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-fog">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
