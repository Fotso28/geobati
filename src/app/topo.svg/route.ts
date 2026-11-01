import { contourPaths } from "@/lib/topo";

/** Motif de courbes de niveau utilisé par les emplacements photo vides. Généré au build. */
export function GET() {
  const paths = contourPaths({
    summits: [
      { x: 520, y: 210, radius: 360, stretch: 1.3 },
      { x: 90, y: 560, radius: 220 },
    ],
    levels: 8,
    seed: 5,
  });
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice"><g fill="none" stroke="#1a4d40" stroke-opacity="0.32">${paths
    .map((d, index) => `<path d="${d}" stroke-width="${index % 5 === 4 ? 1.6 : 1}"/>`)
    .join("")}</g></svg>`;
  return new Response(svg, {
    headers: { "Content-Type": "image/svg+xml", "Cache-Control": "public, max-age=31536000, immutable" },
  });
}
