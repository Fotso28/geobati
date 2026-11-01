import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Info } from "lucide-react";
import { articles, getArticle } from "@/content/articles";
import { getService } from "@/content/services";
import { getImage } from "@/lib/images";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { whatsappUrl } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Breadcrumbs, JsonLd, MarkerList } from "@/components/ui/primitives";
import { ServiceIcon } from "@/components/ui/icons";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps<"/conseils/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/conseils/${article.slug}` },
    openGraph: { type: "article", title: article.title, description: article.excerpt },
  };
}

export default async function ArticlePage({ params }: PageProps<"/conseils/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const service = getService(article.relatedService);
  const breadcrumbs = [
    { name: "Accueil", href: "/" },
    { name: "Conseils", href: "/conseils" },
    { name: article.title, href: `/conseils/${article.slug}` },
  ];
  const others = articles.filter((other) => other.slug !== article.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="border-b border-line">
          <div className="shell grid gap-6 pt-8 pb-12 md:pt-10 md:pb-16">
            <div data-intro="fade">
              <Breadcrumbs items={breadcrumbs} />
            </div>
            <div className="grid max-w-4xl gap-5 pt-4 md:pt-8">
              <p data-intro="fade" className="label text-slate">
                Conseils fonciers · Lecture {article.readingMinutes} min
              </p>
              <h1 data-intro="headline" className="text-h1">
                {article.title}
              </h1>
              <p data-intro="fade" className="max-w-[56ch] text-lead text-slate">
                {article.excerpt}
              </p>
            </div>
          </div>
        </header>

        <div className="shell grid gap-12 py-14 md:py-20 lg:grid-cols-12 lg:gap-10">
          <div className="grid gap-12 lg:col-span-8">
            <Photo image={getImage(article.image)} sizes="(min-width: 1024px) 60vw, 100vw" className="aspect-[16/9]" />
            {article.sections.map((section) => (
              <section key={section.heading} className="prose-gb grid gap-4" data-reveal="">
                <h2 className="text-[clamp(1.4rem,1.2rem+0.8vw,1.85rem)] leading-tight">{section.heading}</h2>
                <div className="text-[1.08rem] leading-[1.75]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mt-3 first:mt-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.list && <MarkerList items={section.list} className="text-[1.05rem]" />}
              </section>
            ))}

            <aside className="prose-gb flex gap-4 border border-line bg-white p-6" data-reveal="">
              <Info aria-hidden="true" className="mt-1 size-5 shrink-0 text-forest" />
              <div className="grid gap-1">
                <p className="font-semibold">Les limites de cet article</p>
                <p className="text-slate">{article.limits}</p>
              </div>
            </aside>
          </div>

          <aside className="lg:col-span-4">
            <div className="grid gap-5 bg-forest p-7 text-white lg:sticky lg:top-28">
              <p className="label text-mist">Une question sur votre situation ?</p>
              <p className="text-[1.35rem] leading-tight font-[620] tracking-[-0.015em] [font-stretch:90%]">
                Posez-la directement au cabinet, avec vos mots.
              </p>
              <ButtonLink href={whatsappUrl(article.question)} icon="whatsapp">
                Poser une question sur WhatsApp
              </ButtonLink>
              {service && (
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex items-center justify-between gap-3 border-t border-forest-line pt-5 text-mist hover:text-white"
                >
                  <span className="flex items-center gap-3">
                    <ServiceIcon name={service.icon} className="size-5 text-ochre" />
                    {service.name}
                  </span>
                  <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              )}
            </div>
          </aside>
        </div>
      </article>

      <section className="border-t border-line bg-white py-16 md:py-20">
        <div className="shell grid gap-8">
          <h2 className="label text-slate">À lire aussi</h2>
          <ul className="grid gap-px border border-line bg-line md:grid-cols-3">
            {others.map((other) => (
              <li key={other.slug} className="bg-white">
                <Link href={`/conseils/${other.slug}`} className="group grid h-full content-between gap-6 p-6 hover:bg-paper">
                  <span className="text-[1.15rem] leading-snug font-semibold group-hover:text-forest-soft">{other.title}</span>
                  <span className="label text-slate">Lecture · {other.readingMinutes} min</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <JsonLd data={[articleJsonLd(article), breadcrumbJsonLd(breadcrumbs)]} />
    </>
  );
}
