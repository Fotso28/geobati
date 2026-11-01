import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} · Cabinet de géomètre au Cameroun`;
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
          padding: "72px 80px",
          background: "#0e3a30",
          color: "#fbfbf9",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 56, height: 56, border: "5px solid #e0a32e", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 14, height: 14, background: "#e0a32e" }} />
          </div>
          <div style={{ display: "flex", fontSize: 44, fontWeight: 700, letterSpacing: -1 }}>
            Geo<span style={{ color: "#e0a32e" }}>Bati</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.04, letterSpacing: -2, maxWidth: 900 }}>
            Vos projets méritent de partir sur des bases solides.
          </div>
          <div style={{ fontSize: 28, color: "#c9d8cf" }}>
            Bornage · Topographie · Lotissement · Implantation · Conseil foncier
          </div>
        </div>
      </div>
    ),
    size,
  );
}
