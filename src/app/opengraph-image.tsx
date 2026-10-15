import { ImageResponse } from "next/og";

export const alt = "DevOpsForge — Practical Learning for Software Engineers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#06090f",
          padding: "72px",
          backgroundImage:
            "linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              backgroundColor: "#f59e0b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#06090f",
              fontSize: 26,
              fontWeight: 800,
            }}
          >
            D
          </div>
          <div
            style={{
              color: "#e9eef8",
              fontSize: 30,
              fontWeight: 700,
              display: "flex",
            }}
          >
            <span>DevOps</span>
            <span style={{ color: "#f59e0b" }}>Forge</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              color: "#e9eef8",
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Stop Memorizing.</span>
            <span style={{ color: "#f59e0b" }}>Start Solving.</span>
          </div>
          <div style={{ color: "#93a1b8", fontSize: 30, maxWidth: 900 }}>
            Practical resources. Clear learning paths. Real engineering problems.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#93a1b8",
            fontSize: 24,
          }}
        >
          <span>Practical learning for software engineers.</span>
          <span style={{ color: "#f59e0b" }}>Free to explore</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
