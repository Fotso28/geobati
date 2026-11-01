import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categoryLabel, getRealisation, realisations } from "@/content/realisations";
import { getService } from "@/content/services";
import { getImage } from "@/lib/images";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { ButtonLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { JsonLd, MarkerList } from "@/components/ui/primitives";
import { RealisationCard } from "@/components/cards/RealisationCard";

export function generateStaticParams() {
  return realisations.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps<"/realisations/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = getRealisation(slug);
  if (!item) return {};
  return {
    title: item.title,
    description: `${item.mission} ${item.context}`.slice(0, 160),
    alternates: { canonical: `/realisations/${item.slug}` },
  };
}

export default async function RealisationPage({ params }: PageProps<"/realisations/[slug]">) {
  const { slug } = await params;
  const item = getRealisation(slug);
  if (!item) notFound();

  const service = getService(item.serviceSlug);
  const breadcrumbs = [
    { name: "Accueil", href: "/" },
    { name: "Réalisations", href: "/realisations" },
    { name: item.title, href: `/realisations/${item.slug}` },
  ];
  const [cover, ...gallery] = item.images.map(getImage);
  const similarHref = `/demande-de-devis?service=${item.serviceSlug}&ref=${item.slug}`;
  const related = realisations.filter((other) => other.slug !== item.slug).slice(0, 3);

  return (
    <>
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow={categoryLabel(item.category)}
        title={item.title}
        text={item.mission}
        image={cover}
        actions={
          <ButtonLink href={similarHref} size="lg">
            J’ai un projet similaire
          </ButtonLink>
        }
      />

      <section className="py-20 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-10">
          <dl className="grid content-start gap-px self-start border border-line bg-line lg:col-span-4">
            {[
              { label: "Type de mission", value: service?.name ?? categoryLabel(item.category) },
              { label: "Localité", value: item.locality ?? "Non communiquée" },
              { label: "Statut de la fiche", value: item.illustrative ? "Exemple illustratif" : "Projet réalisé par le cabinet" },
            ].map((row) => (
              <div key={row.label} className="grid gap-1 bg-paper p-5" data-reveal="">
                <dt className="label text-slate">{row.label}</dt>
                <dd className="font-semibold">{row.value}</dd>
              </div>
            ))}
          </dl>

          <div className="grid gap-12 lg:col-span-8">
            <div className="grid gap-4" data-reveal="">
              <h2 className="text-h2">Contexte et besoin du client</h2>
              <p className="prose-gb text-lead text-slate">{item.context}</p>
            </div>
            <div className="grid gap-5" data-reveal="">
              <h2 className="text-h2">Travail réalisé</h2>
              <MarkerList items={item.work} className="text-[1.05rem]" />
            </div>
            {gallery.length > 0 && (
              <div className="grid gap-6 sm:grid-cols-2">
                {gallery.map((image) => (
                  <Photo key={image.key} image={image} badge sizes="(min-width: 640px) 30vw, 100vw" className="aspect-[4/3]" />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Projet similaire"
        title="Votre projet ressemble à celui-ci ?"
        text="Le formulaire reprend le type de mission : il ne vous reste qu’à indiquer la localité et votre nom."
      >
        <ButtonLink href={similarHref} size="lg">
          J’ai un projet similaire
        </ButtonLink>
      </CtaBand>

      <section className="py-16 md:py-20">
        <div className="shell grid gap-10">
          <h2 className="text-h2">Autres réalisations</h2>
          <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((other) => (
              <li key={other.slug} data-reveal="">
                <RealisationCard
                  item={{
                    slug: other.slug,
                    title: other.title,
                    categoryLabel: categoryLabel(other.category),
                    mission: other.mission,
                    locality: other.locality,
                    illustrative: other.illustrative,
                    image: getImage(other.images[0]),
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
    </>
  );
}
