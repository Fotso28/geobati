import { contourPaths } from "@/lib/topo";
import { cn } from "@/lib/cn";

const presets = {
  hero: contourPaths({
    summits: [
      { x: 980, y: 140, radius: 520, stretch: 1.35 },
      { x: 140, y: 640, radius: 300, stretch: 1.2 },
    ],
    levels: 9,
    seed: 11,
  }),
  band: contourPaths({
    summits: [
      { x: 1080, y: 360, radius: 460, stretch: 1.4 },
      { x: 90, y: -40, radius: 260 },
    ],
    levels: 8,
    seed: 23,
  }),
};

/** Courbes de niveau décoratives. `data-draw` déclenche leur tracé animé. */
export function TopoLines({ preset = "band", className }: { preset?: keyof typeof presets; className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 720"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
      data-draw=""
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    >
      <g fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke">
        {presets[preset].map((d, index) => (
          <path key={index} d={d} vectorEffect="non-scaling-stroke" strokeWidth={index % 5 === 4 ? 1.6 : 1} />
        ))}
      </g>
    </svg>
  );
}
