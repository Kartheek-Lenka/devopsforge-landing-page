import {
  BarChart3,
  BookOpen,
  Bot,
  Brain,
  BrainCircuit,
  Bug,
  Cloud,
  Code2,
  Compass,
  Cpu,
  Database,
  FlaskConical,
  FolderGit2,
  Hammer,
  LayoutTemplate,
  Map as MapIcon,
  ScrollText,
  Server,
  ShieldCheck,
  Shuffle,
  Sparkles,
  Target,
  Terminal,
  UserRoundSearch,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  code: Code2,
  cloud: Cloud,
  server: Server,
  database: Database,
  brain: Brain,
  bot: Bot,
  cpu: Cpu,
  flask: FlaskConical,
  shield: ShieldCheck,
  brainCircuit: BrainCircuit,
  chart: BarChart3,
  map: MapIcon,
  scroll: ScrollText,
  bug: Bug,
  layout: LayoutTemplate,
  folder: FolderGit2,
  userSearch: UserRoundSearch,
  book: BookOpen,
  terminal: Terminal,
  wrench: Wrench,
  scatter: Shuffle,
  bridge: Workflow,
  compass: Compass,
  sparkles: Sparkles,
  hammer: Hammer,
  target: Target,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = ICONS[name] ?? Sparkles;
  return <Cmp className={className} aria-hidden="true" />;
}
