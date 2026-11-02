import Image from "next/image";
import { cn } from "@/lib/cn";
import type { ResolvedImage } from "@/lib/images";

type PhotoProps = {
  image: ResolvedImage;
  sizes: string;
  className?: string;
  /** Précharge l'image (bannière principale uniquement). */
  preload?: boolean;
  /** Active un léger effet de profondeur au défilement. */
  parallax?: boolean;
};

/**
 * Photo d'un emplacement. Sans fichier déposé, affiche un visuel « plan »
 * (quadrillage et courbes de niveau) plutôt qu'une image cassée.
 */
export function Photo({ image, sizes, className, preload, parallax }: PhotoProps) {
  return (
    <div className={cn("relative overflow-hidden bg-paper-2", className)}>
      {image.src ? (
        <div className={cn("absolute inset-0", parallax && "-inset-y-[8%]")} data-parallax={parallax ? "" : undefined}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes}
            preload={preload}
            className={image.fit === "contain" ? "object-contain p-[8%]" : "object-cover"}
            style={image.position ? { objectPosition: image.position } : undefined}
          />
        </div>
      ) : (
        <PhotoPlaceholder image={image} />
      )}
    </div>
  );
}

function PhotoPlaceholder({ image }: { image: ResolvedImage }) {
  const isDev = process.env.NODE_ENV === "development";
  return (
    <div role="img" aria-label={image.alt} className="grid-paper absolute inset-0 text-navy">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/topo.svg')] bg-cover bg-center opacity-80"
      />
      <div aria-hidden="true" className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4">
        <p className="label max-w-[34ch] text-[0.62rem] leading-snug text-slate">
          Fig. — {image.alt}
          {isDev && <span className="mt-1 block normal-case text-teal-deep">public/images/{image.file}.webp</span>}
        </p>
        <svg viewBox="0 0 64 14" className="hidden w-16 shrink-0 text-slate sm:block" aria-hidden="true">
          <path d="M1 3v8M21 3v8M42 3v8M63 3v8M1 11h62" fill="none" stroke="currentColor" strokeWidth="1" />
          <rect x="1" y="9" width="20" height="2" fill="currentColor" />
          <rect x="42" y="9" width="21" height="2" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
