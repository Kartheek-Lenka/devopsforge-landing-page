/**
 * Central site config for the DevOpsForge marketing landing page.
 *
 * Routes below are VERIFIED against the main application repository
 * (C:\Users\karth\DevOpsForge). Do not invent routes — the main app protects
 * every page except /, /login, /register, /forgot-password and /reset-password,
 * so the public entry point is the create-account flow.
 */

export const SITE = {
  name: "DevOpsForge",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://devopsforge.co",
  /** The main application origin that this marketing page links out to. */
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://app.devopsforge.co",
  github: "https://github.com/Kartheek-Lenka/DevOpsForge",
  title: "DevOpsForge — Practical Learning for Software Engineers",
  description:
    "Explore practical DevOps, cloud, software engineering, troubleshooting, roadmap, and interview-preparation resources with DevOpsForge.",
} as const;

/**
 * Header navigation.
 * "Explore" / "Resources" scroll to on-page sections; the rest are real app routes.
 */
export const NAV = [
  { label: "Explore", href: "#explore", kind: "anchor" as const },
  { label: "Learning Paths", href: "/roadmaps", kind: "app" as const },
  { label: "Resources", href: "#resources", kind: "anchor" as const },
] as const;

/** Section E — learning categories (verified main-app routes). */
export const CATEGORIES = [
  {
    title: "Development",
    icon: "code",
    href: "/dev",
    description: "Full-stack, frontend, backend and system-design fundamentals.",
  },
  {
    title: "DevOps & Infrastructure",
    icon: "cloud",
    href: "/devops",
    description: "Docker, Kubernetes, Terraform, CI/CD and platform engineering.",
  },
  {
    title: "Cloud Engineering",
    icon: "server",
    href: "/cloud-engineering",
    description: "AWS, Azure and GCP services, architecture and operations.",
  },
  {
    title: "Data Engineering",
    icon: "database",
    href: "/data-engineering",
    description: "Pipelines, warehouses, streaming and data infrastructure.",
  },
  {
    title: "Data Science & ML",
    icon: "brain",
    href: "/data-science",
    description: "Machine learning, modelling and applied data science.",
  },
  {
    title: "AI Engineering",
    icon: "bot",
    href: "/ai-engineering",
    description: "Building with LLMs, embeddings, RAG and AI tooling.",
  },
  {
    title: "MLOps",
    icon: "cpu",
    href: "/mlops",
    description: "Deploying, serving and monitoring models in production.",
  },
  {
    title: "Testing",
    icon: "flask",
    href: "/testing",
    description: "Unit, integration, API and performance testing practices.",
  },
  {
    title: "Cyber Security",
    icon: "shield",
    href: "/cyber-security",
    description: "Security fundamentals, hardening and defensive engineering.",
  },
  {
    title: "DSA",
    icon: "brainCircuit",
    href: "/dsa",
    description: "Data structures, algorithms and problem-solving patterns.",
  },
  {
    title: "BI & Analytics",
    icon: "chart",
    href: "/bi",
    description: "Business intelligence, dashboards and analytics workflows.",
  },
] as const;

/** Section F — practical resource types (verified main-app routes). */
export const RESOURCES = [
  {
    title: "Learning roadmaps",
    icon: "map",
    href: "/roadmaps",
    description: "Step-by-step paths that show what to learn next, in the right order.",
  },
  {
    title: "Cheat sheets & commands",
    icon: "scroll",
    href: "/cheat-sheets",
    description: "Quick, searchable references for the tools you use every day.",
  },
  {
    title: "Troubleshooting guides",
    icon: "bug",
    href: "/troubleshoot",
    description: "Common failures explained with root cause, fix steps and prevention.",
  },
  {
    title: "Infrastructure templates",
    icon: "layout",
    href: "/templates",
    description: "Production-style templates for infrastructure and deployments.",
  },
  {
    title: "Projects & guidance",
    icon: "folder",
    href: "/projects",
    description: "Real builds with implementation guidance to grow a portfolio.",
  },
  {
    title: "Interview preparation",
    icon: "userSearch",
    href: "/interview",
    description: "Concept review and technical questions for interview practice.",
  },
] as const;

/** Section K — FAQ. Answers reflect verified product behaviour. */
export const FAQS = [
  {
    q: "What is DevOpsForge?",
    a: "DevOpsForge is a practical learning platform for engineers. It brings concepts, roadmaps, cheat sheets, troubleshooting guides, templates, projects and interview preparation together in one place, so you can connect technical knowledge with real application.",
  },
  {
    q: "Who can use DevOpsForge?",
    a: "Students and freshers starting out, software developers, DevOps and cloud engineers, and working professionals who want to strengthen their technical skills or prepare for interviews.",
  },
  {
    q: "Is DevOpsForge free to explore?",
    a: "Yes. DevOpsForge is currently free to explore and there are no paid plans on this site. You can create a free account and access the learning sections.",
  },
  {
    q: "What kinds of technical resources are available?",
    a: "Learning roadmaps, cheat sheets and command references, troubleshooting guides, infrastructure templates, projects with implementation guidance, and technical interview preparation across areas such as DevOps, cloud, development, data, testing and security.",
  },
  {
    q: "Do I need to create an account?",
    a: "You can read everything on this page without an account. The learning sections in the main application require a free account, so create one to start exploring roadmaps, cheat sheets, troubleshooting and more.",
  },
  {
    q: "Can I use DevOpsForge while preparing for technical interviews?",
    a: "Yes. The platform includes interview preparation material and question practice, along with the underlying concepts you will want to revise — so you can use it as part of your interview preparation routine.",
  },
] as const;

/** Section D — workflow steps. Distinguishes static material from interactive features. */
export const WORKFLOW = [
  {
    step: "Learn",
    icon: "book",
    description:
      "Understand technical concepts through organised resources and clear explanations.",
  },
  {
    step: "Practise",
    icon: "terminal",
    description:
      "Use command references and practical material to reinforce what you learn.",
  },
  {
    step: "Build",
    icon: "folder",
    description:
      "Explore projects and templates with implementation guidance where available.",
  },
  {
    step: "Troubleshoot",
    icon: "wrench",
    description:
      "Learn systematic approaches to diagnosing common technical failures.",
  },
] as const;

/** Section C — the practical problems. */
export const PROBLEMS = [
  {
    icon: "scatter",
    title: "Resources are scattered",
    body: "Concepts, commands, templates and fixes live across a dozen tabs, docs and bookmarks.",
  },
  {
    icon: "bridge",
    title: "Theory to troubleshooting is a gap",
    body: "It is one thing to finish a tutorial; it is another to debug a real, unfamiliar failure.",
  },
  {
    icon: "compass",
    title: "What to learn next is unclear",
    body: "Without a sequence, it is hard to know which skill to build and what to practise.",
  },
] as const;

/** Section I — audience. */
export const AUDIENCE = [
  {
    title: "Starting out",
    icon: "sparkles",
    body: "Discover what to learn and build a solid foundation with structured paths and concepts.",
  },
  {
    title: "Building skills",
    icon: "hammer",
    body: "Practise with technical resources, projects and templates to turn knowledge into ability.",
  },
  {
    title: "Preparing for interviews",
    icon: "target",
    body: "Review concepts and explore relevant technical questions as part of your preparation.",
  },
] as const;

/** Section G — diagnostic sequence for the educational scenario. */
export const DIAGNOSTIC_STEPS = [
  "Inspect application logs",
  "Verify application health",
  "Check service ports and routing",
  "Investigate dependencies",
  "Review relevant recent changes",
] as const;
