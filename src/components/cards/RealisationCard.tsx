import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Photo } from "@/components/ui/Photo";
import type { ResolvedImage } from "@/lib/images";

export type RealisationCardData = {
  slug: string;
  title: string;
  categoryLabel: string;
  mission: string;
  locality: string | null;
  illustrative: boolean;
  image: ResolvedImage;
};

export function RealisationCard({ item, headingLevel = "h3" }: { item: RealisationCardData; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <article className="group relative grid content-start gap-4">
      <Photo
        image={item.image}
        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
        className="aspect-[4/3] transition-[filter] duration-500 group-hover:brightness-[0.92]"
      />
      <div className="grid gap-2">
        <p className="label flex flex-wrap items-center gap-x-3 gap-y-1 text-slate">
          <span className="text-navy">{item.categoryLabel}</span>
          {item.illustrative && <span>Exemple illustratif</span>}
          {item.locality && <span>{item.locality}</span>}
        </p>
        <Heading className="text-[1.3rem] leading-tight">
          <Link href={`/realisations/${item.slug}`} className="after:absolute after:inset-0 hover:text-teal-deep">
            {item.title}
          </Link>
        </Heading>
        <p className="text-[0.98rem] text-slate">{item.mission}</p>
        <span aria-hidden="true" className="inline-flex items-center gap-1.5 text-[0.92rem] font-semibold text-navy">
          Voir la fiche
          <ArrowUpRight className="size-4 transition-transform duration-300 ease-survey group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </article>
  );
}
