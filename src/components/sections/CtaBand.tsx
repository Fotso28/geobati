import { TopoLines } from "@/components/ui/TopoLines";
import { Eyebrow } from "@/components/ui/primitives";

/** Bande d'appel à l'action, sur fond vert forêt avec courbes de niveau. */
export function CtaBand({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-forest text-white">
      <TopoLines preset="band" className="-z-10 text-forest-line" />
      <div className="shell grid gap-10 py-20 md:grid-cols-12 md:items-end md:py-28">
        <div className="grid gap-5 md:col-span-7" data-reveal="">
          {eyebrow && <Eyebrow tone="light">{eyebrow}</Eyebrow>}
          <h2 className="text-h2 max-w-[20ch]">{title}</h2>
          {text && <p className="max-w-[50ch] text-lead text-mist">{text}</p>}
        </div>
        <div className="flex flex-wrap gap-3 md:col-span-5 md:flex-col md:items-stretch md:justify-self-end" data-reveal="">
          {children}
        </div>
      </div>
    </section>
  );
}
