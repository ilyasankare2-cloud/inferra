import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0b0c0f",
          color: "#e7e9ee",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "#6ea8fe",
              display: "flex",
            }}
          />
          <span style={{ fontSize: 40, fontWeight: 700 }}>{site.name}</span>
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 800,
            lineHeight: 1.1,
            marginTop: 40,
            maxWidth: 900,
          }}
        >
          {site.tagline}
        </div>
        <div style={{ fontSize: 30, color: "#9aa0ac", marginTop: 28 }}>
          Practical guides to deploying machine learning
        </div>
      </div>
    ),
    { ...size },
  );
}
