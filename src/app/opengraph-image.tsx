import { ImageResponse } from "next/og";

export const alt = "Rohan Gawande — Full Stack Developer & SaaS Architect";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#0B0B0F",
          color: "#F5F2EA",
          fontFamily: "system-ui, -apple-system, sans-serif",
          border: "16px solid rgba(124, 131, 255, 0.2)",
        }}
      >
        {/* Top Bar: Monogram Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "16px",
                backgroundColor: "#7C83FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                fontWeight: "900",
                color: "#0B0B0F",
              }}
            >
              RG
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#FFFFFF",
                }}
              >
                Rohan Gawande
              </span>
              <span
                style={{
                  fontSize: "14px",
                  color: "#7C83FF",
                  fontFamily: "monospace",
                  letterSpacing: "0.1em",
                }}
              >
                PORTFOLIO 2026
              </span>
            </div>
          </div>

          <div
            style={{
              padding: "8px 20px",
              borderRadius: "999px",
              backgroundColor: "rgba(124, 131, 255, 0.15)",
              border: "1px solid rgba(124, 131, 255, 0.3)",
              fontSize: "14px",
              fontFamily: "monospace",
              color: "#7C83FF",
            }}
          >
            MUMBAI, INDIA
          </div>
        </div>

        {/* Center: Typographic Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <span
            style={{
              fontSize: "64px",
              fontWeight: "900",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              color: "#FFFFFF",
            }}
          >
            Full Stack Developer &amp; SaaS Architect
          </span>
          <span
            style={{
              fontSize: "26px",
              color: "#A09D95",
              fontWeight: "normal",
            }}
          >
            Multi-Tenant Systems · Privacy-First AI · Production Web Platforms
          </span>
        </div>

        {/* Bottom Bar: Tech Stack Tags */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "14px",
            fontFamily: "monospace",
            color: "#A09D95",
          }}
        >
          <span>Next.js 16</span>
          <span>·</span>
          <span>FastAPI</span>
          <span>·</span>
          <span>PostgreSQL</span>
          <span>·</span>
          <span>Docker</span>
          <span>·</span>
          <span>Gemini AI</span>
          <span>·</span>
          <span>TypeScript</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
