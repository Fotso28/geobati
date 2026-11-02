import { cn } from "@/lib/cn";
import { StationMark } from "./icons";

/**
 * Étapes présentées comme un cheminement de géomètre : chaque étape est une
 * station, reliée à la suivante par une ligne qui se trace au défilement.
 */
export function Traverse({
  steps,
  className,
}: {
  steps: { title: string; text: string }[];
  className?: string;
}) {
  const columns = steps.length === 4 ? "md:grid-cols-4" : "md:grid-cols-3";
  return (
    <ol data-traverse="" className={cn("relative grid gap-10 md:gap-8", columns, className)}>
      <span aria-hidden="true" className="traverse-line bg-line-strong" style={{ "--cols": steps.length } as React.CSSProperties} />
      <span
        aria-hidden="true"
        data-traverse-progress=""
        className="traverse-line traverse-line--progress bg-teal"
        style={{ "--cols": steps.length } as React.CSSProperties}
      />
      {steps.map((step, index) => (
        <li key={step.title} className="relative grid gap-2 pl-11 md:pt-12 md:pl-0" data-reveal="">
          <StationMark className="absolute top-0 left-0 size-6 text-navy" />
          <p className="label text-slate">Étape {index + 1}</p>
          <h3 className="text-h3">{step.title}</h3>
          <p className="max-w-[34ch] text-slate">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
