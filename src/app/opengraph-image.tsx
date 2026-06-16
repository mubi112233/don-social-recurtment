import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e3a8a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
          <div style={{ width: 56, height: 56, background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #3b82f6 100%)", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontWeight: 900, fontSize: 28 }}>D</span>
          </div>
          <span style={{ color: "#fff", fontWeight: 800, fontSize: 32 }}>Don Social Recruitment</span>
        </div>

        {/* Headline */}
        <h1 style={{ color: "#fff", fontSize: 64, fontWeight: 800, lineHeight: 1.1, margin: "0 0 24px 0", maxWidth: 800 }}>
          Social Media{" "}
          <span style={{ background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #3b82f6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Recruitment Agency</span>
        </h1>

        {/* Subtitle */}
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 28, margin: "0 0 48px 0", maxWidth: 700 }}>
          Find Top Talent Through LinkedIn, Instagram & TikTok. 80% Faster Than Traditional Methods.
        </p>

        {/* Stats */}
        <div style={{ display: "flex", gap: "40px" }}>
          {[["500+", "Placements"], ["80%", "Time Savings"], ["98%", "Satisfaction"]].map(([val, label]) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span style={{ color: "#3b82f6", fontSize: 36, fontWeight: 800 }}>{val}</span>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 18 }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Domain */}
        <div style={{ position: "absolute", bottom: 60, right: 80, color: "rgba(255,255,255,0.4)", fontSize: 22 }}>
          don-sr.com
        </div>
      </div>
    ),
    { ...size }
  );
}


