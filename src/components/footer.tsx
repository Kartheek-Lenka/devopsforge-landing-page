import { Brand } from "./brand";
import { AppLink } from "./app-link";
import { Container } from "./ui";
import { SITE } from "@/lib/site";
import { ANALYTICS_EVENTS } from "@/lib/analytics";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "Learning paths", to: "/roadmaps", event: ANALYTICS_EVENTS.learningPathCta },
      { label: "Development", to: "/dev" },
      { label: "DevOps", to: "/devops" },
      { label: "Cloud engineering", to: "/cloud-engineering" },
      { label: "Data & AI", to: "/data-science" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Roadmaps", to: "/roadmaps" },
      { label: "Cheat sheets", to: "/cheat-sheets" },
      { label: "Troubleshooting", to: "/troubleshoot" },
      { label: "Templates", to: "/templates" },
      { label: "Projects", to: "/projects" },
    ],
  },
  {
    title: "Get started",
    links: [
      { label: "Create free account", to: "/register", event: ANALYTICS_EVENTS.signUpCta },
      { label: "Sign in", to: "/login", event: ANALYTICS_EVENTS.signInClick },
      { label: "Interview prep", to: "/interview" },
      { label: "Community", to: "/community" },
    ],
  },
] as const;

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.05.78 2.12v3.14c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

/** Evaluated once at build time — avoids unstable `new Date()` during prerender. */
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const year = CURRENT_YEAR;
  return (
    <footer className="border-t border-line bg-night-2">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Brand />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-fog">
              Practical learning for developers, DevOps engineers and cloud
              professionals. Learn concepts, explore resources, troubleshoot
              problems and prepare for interviews in one place.
            </p>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-fog transition-colors hover:text-snow"
            >
              <GithubIcon />
              GitHub
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-snow">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <AppLink
                      to={link.to}
                      event={"event" in link ? link.event : undefined}
                      eventProps={{ location: "footer" }}
                      className="text-sm text-fog transition-colors hover:text-snow"
                    >
                      {link.label}
                    </AppLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-fog sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p className="text-fog/80">
            DevOpsForge is currently free to explore.
          </p>
        </div>
      </Container>
    </footer>
  );
}
