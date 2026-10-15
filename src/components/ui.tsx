import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-fog">
      <span className="h-1.5 w-1.5 rounded-full bg-lime" aria-hidden="true" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  children?: ReactNode;
}) {
  const centered = align === "center";
  return (
    <div
      className={`flex flex-col gap-4 ${
        centered ? "items-center text-center" : "items-start"
      }`}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        className={`max-w-3xl text-3xl font-semibold tracking-tight text-snow sm:text-4xl ${
          centered ? "mx-auto" : ""
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`max-w-2xl text-base leading-relaxed text-fog ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}

/** Shared button styles (rendered on <a> so they remain accessible links). */
export const button = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-lg bg-lime px-5 py-2.5 text-sm font-semibold text-night transition-colors hover:bg-lime-dim",
  secondary:
    "inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-snow transition-colors hover:border-lime/40 hover:bg-surface-2",
  ghost:
    "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-fog transition-colors hover:text-snow",
};

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-line bg-surface/70 p-6 transition-colors hover:border-lime/30 ${className}`}
    >
      {children}
    </div>
  );
}
