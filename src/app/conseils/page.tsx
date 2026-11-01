import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { articles } from "@/content/articles";
import { getImage } from "@/lib/images";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { whatsappUrl } from "@/lib/whatsapp";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { ButtonLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { JsonLd } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Conseils fonciers",
  description:
    "Relevé topographique, délimitation, préparation d’un projet : des réponses claires aux questions courantes sur les terrains au Cameroun.",
  alternates: { canonical: "/conseils" },
};

const breadcrumbs = [
  { name: "Accueil", href: "/" },
  { name: "Conseils", href: "/conseils" },
];

export default function ConseilsPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Conseils fonciers"
        title="Comprendre son terrain avant d’agir."
        text="Des réponses claires aux questions que l’on nous pose le plus souvent. Pour une situation précise, écrivez-nous."
      />

      <section className="py-16 md:py-20">
        <div className="shell grid gap-14">
          <article className="group relative grid gap-8 md:grid-cols-12 md:items-center md:gap-12" data-reveal="">
            <Photo image={getImage(featured.image)} sizes="(min-width: 768px) 50vw, 100vw" className="aspect-[16/10] md:col-span-7" />
            <div className="grid gap-4 md:col-span-5">
              <p className="label text-slate">Lecture · {featured.readingMinutes} min</p>
              <h2 className="text-h2">
                <Link href={`/conseils/${featured.slug}`} className="after:absolute after:inset-0 hover:text-forest-soft">
                  {featured.title}
                </Link>
              </h2>
              <p className="text-lead text-slate">{featured.excerpt}</p>
              <span aria-hidden="true" className="inline-flex items-center gap-2 font-semibold text-forest">
                Lire l’article
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </article>

          <ul className="border-t border-line">
            {rest.map((article) => (
              <li key={article.slug} className="border-b border-line" data-reveal="">
                <article className="group relative grid gap-3 py-7 md:grid-cols-12 md:items-baseline md:gap-8">
                  <p className="label text-slate md:col-span-2">Lecture · {article.readingMinutes} min</p>
                  <h2 className="text-[clamp(1.25rem,1.05rem+0.8vw,1.6rem)] leading-tight md:col-span-6">
                    <Link href={`/conseils/${article.slug}`} className="after:absolute after:inset-0 group-hover:text-forest-soft">
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-slate md:col-span-4">{article.excerpt}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        eyebrow="Une question précise ?"
        title="Votre situation ne ressemble à aucun article ?"
        text="C’est normal : chaque terrain est différent. Posez-nous directement votre question."
      >
        <ButtonLink href={whatsappUrl("Bonjour, j’ai une question sur mon terrain :")} icon="whatsapp" size="lg">
          Poser une question sur WhatsApp
        </ButtonLink>
      </CtaBand>

      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
    </>
  );
}
