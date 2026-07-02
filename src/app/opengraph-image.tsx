import { ImageResponse } from "next/og";

export const alt = "Inhaus Khakhra — Premium Coin Khakhra";
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
          background: "#ff2d78",
          padding: "90px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 64,
            right: 90,
            display: "flex",
            width: 130,
            height: 130,
            borderRadius: "50%",
            border: "6px solid #191108",
            background: "#e7be7c",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 8,
            color: "#fbf1e0",
            textTransform: "uppercase",
          }}
        >
          Premium Coin Khakhra
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 140,
            fontWeight: 800,
            color: "#fbf1e0",
            lineHeight: 0.9,
            marginTop: 24,
            letterSpacing: -2,
          }}
        >
          CRUNCH
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 140,
            fontWeight: 800,
            color: "#fbf1e0",
            lineHeight: 0.9,
            letterSpacing: -2,
          }}
        >
          DIFFERENT.
        </div>
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            marginTop: 40,
            fontSize: 28,
            fontWeight: 700,
            color: "#191108",
            background: "#fbf1e0",
            padding: "14px 32px",
            borderRadius: 999,
          }}
        >
          INHAUS KHAKHRA
        </div>
      </div>
    ),
    { ...size }
  );
}
