import { ImageResponse } from "next/og";
import { openGraphDescription, openGraphTitle } from "@/lib/seo";

export const runtime = "edge";
export const alt = openGraphTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(135deg, #0f172a 0%, #134e4a 45%, #0f766e 100%)",
          color: "#ffffff",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.85 }}>
          LoopC Business Strategies
        </div>
        <div>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, marginBottom: 24 }}>
            {openGraphTitle}
          </div>
          <div style={{ fontSize: 32, lineHeight: 1.35, maxWidth: 900, opacity: 0.92 }}>
            {openGraphDescription}
          </div>
        </div>
        <div style={{ fontSize: 24, opacity: 0.8 }}>Trading · Inventory · Finance · Operations</div>
      </div>
    ),
    { ...size },
  );
}
