/**
 * Courbes de niveau décoratives, générées de façon déterministe
 * (même résultat à chaque rendu, sans aléatoire au moment de la requête).
 */

type Summit = { x: number; y: number; radius: number; stretch?: number };

type TopoOptions = {
  summits: Summit[];
  levels: number;
  points?: number;
  seed?: number;
};

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const round = (value: number) => Math.round(value * 10) / 10;

/** Courbe fermée lissée (Catmull-Rom convertie en Bézier cubiques). */
function closedSmoothPath(points: [number, number][]): string {
  const n = points.length;
  let d = `M${round(points[0][0])} ${round(points[0][1])}`;
  for (let i = 0; i < n; i++) {
    const p0 = points[(i - 1 + n) % n];
    const p1 = points[i];
    const p2 = points[(i + 1) % n];
    const p3 = points[(i + 2) % n];
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += `C${round(c1x)} ${round(c1y)} ${round(c2x)} ${round(c2y)} ${round(p2[0])} ${round(p2[1])}`;
  }
  return `${d}Z`;
}

export function contourPaths({ summits, levels, points = 26, seed = 7 }: TopoOptions): string[] {
  const random = mulberry32(seed);
  const paths: string[] = [];
  for (const summit of summits) {
    const phases = Array.from({ length: 4 }, () => random() * Math.PI * 2);
    const amplitudes = [0.16 + random() * 0.08, 0.07 + random() * 0.05, 0.04 + random() * 0.03];
    const stretch = summit.stretch ?? 1.25;
    for (let level = 1; level <= levels; level++) {
      const radius = (summit.radius / levels) * level;
      const drift = level * 0.22;
      const ring: [number, number][] = [];
      for (let i = 0; i < points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const wobble =
          1 +
          amplitudes[0] * Math.sin(2 * angle + phases[0] + drift) +
          amplitudes[1] * Math.sin(3 * angle + phases[1] - drift * 0.6) +
          amplitudes[2] * Math.cos(5 * angle + phases[2] + drift * 0.3);
        const r = radius * wobble;
        ring.push([summit.x + r * Math.cos(angle) * stretch, summit.y + r * Math.sin(angle)]);
      }
      paths.push(closedSmoothPath(ring));
    }
  }
  return paths;
}
