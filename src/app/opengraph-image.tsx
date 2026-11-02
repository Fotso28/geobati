import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} · Cabinet de géomètre expert au Cameroun`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public/brand/logo-clair.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          background: "#043b58",
          color: "#ffffff",
        }}
      >
        <img src={logoSrc} width={477} height={186} alt="" />
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontSize: 62, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 960 }}>
            Cabinet de géomètre expert à Douala, Cameroun
          </div>
          <div style={{ display: "flex", fontSize: 27, color: "#30b0b4" }}>
            Foncier · Topographie · Urbanisme · Travaux publics
          </div>
        </div>
      </div>
    ),
    size,
  );
}
