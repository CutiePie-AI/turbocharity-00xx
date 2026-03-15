import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "TurboCharity — From idea to 501(c)(3) in days, not months.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1E40AF 0%, #2563EB 50%, #3B82F6 100%)",
          padding: "60px",
        }}
      >
        {/* Lightning bolt icon */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 32 32"
          fill="none"
          style={{ marginBottom: "24px" }}
        >
          <path
            d="M18 3L5 18h8l-2 11L24 14h-8l2-11z"
            fill="#FFFFFF"
            stroke="#FFFFFF"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#FFFFFF",
            letterSpacing: "-2px",
            lineHeight: 1,
            marginBottom: "20px",
          }}
        >
          TurboCharity
        </div>

        <div
          style={{
            fontSize: 28,
            color: "rgba(255, 255, 255, 0.9)",
            fontWeight: 400,
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          From idea to 501(c)(3) in days, not months.
        </div>

        {/* Subtle bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: 16,
            color: "rgba(255, 255, 255, 0.6)",
            fontWeight: 500,
            letterSpacing: "2px",
            textTransform: "uppercase" as const,
          }}
        >
          turbocharity.com
        </div>
      </div>
    ),
    { ...size }
  );
}
