import { cn } from "@/lib/cn";
import { Breadcrumbs, Eyebrow } from "@/components/ui/primitives";
import { Photo } from "@/components/ui/Photo";
import type { ResolvedImage } from "@/lib/images";

type PageHeroProps = {
  breadcrumbs: { name: string; href: string }[];
  eyebrow?: string;
  title: string;
  text?: string;
  actions?: React.ReactNode;
  image?: ResolvedImage;
  children?: React.ReactNode;
};

/** Bannière des pages intérieures : texte à gauche, photo cadrée à droite. */
export function PageHero({ breadcrumbs, eyebrow, title, text, actions, image, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div aria-hidden="true" className="grid-paper absolute inset-y-0 right-0 hidden w-[44%] lg:block" />
      <div className="shell relative pt-8 md:pt-10" data-intro="fade">
        <Breadcrumbs items={breadcrumbs} />
      </div>
      <div
        className={cn(
          "shell relative grid gap-10 pt-8 pb-14 md:pt-12 md:pb-20",
          image && "lg:grid-cols-12 lg:items-center lg:gap-12",
        )}
      >
        <div className={cn("grid content-start gap-6", image ? "lg:col-span-7" : "max-w-4xl")}>
          <div className="grid gap-5">
            {eyebrow && (
              <div data-intro="fade">
                <Eyebrow>{eyebrow}</Eyebrow>
              </div>
            )}
            <h1 data-intro="headline" className="text-h1 max-w-[18ch]">
              {title}
            </h1>
            {text && (
              <p data-intro="fade" className="max-w-[54ch] text-lead text-slate">
                {text}
              </p>
            )}
          </div>
          {actions && (
            <div data-intro="fade" className="flex flex-wrap items-center gap-3 pt-2">
              {actions}
            </div>
          )}
          {children}
        </div>
        {image && (
          <div className="lg:col-span-5">
            <div className="corner-marks text-navy" data-intro="image">
              <Photo image={image} sizes="(min-width: 1024px) 38vw, 100vw" className="aspect-[4/3] lg:aspect-[5/6]" preload />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
