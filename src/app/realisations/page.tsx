import type { Metadata } from "next";
import { categoryLabel, realisationCategories, realisations } from "@/content/realisations";
import { getImage } from "@/lib/images";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { ButtonLink } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/primitives";
import { RealisationsExplorer } from "@/components/cards/RealisationsExplorer";

export const metadata: Metadata = {
  title: "Nos réalisations",
  description:
    "Foncier, topographie, urbanisme, travaux publics : découvrez le type de missions que réalise GéoBati, cabinet de géomètre expert à Douala.",
  alternates: { canonical: "/realisations" },
};

const breadcrumbs = [
  { name: "Accueil", href: "/" },
  { name: "Réalisations", href: "/realisations" },
];

export default function RealisationsPage() {
  const items = realisations.map((item) => ({
    slug: item.slug,
    title: item.title,
    category: item.category,
    categoryLabel: categoryLabel(item.category),
    mission: item.mission,
    locality: item.locality,
    illustrative: item.illustrative,
    image: getImage(item.images[0]),
  }));
  const hasIllustrative = realisations.some((item) => item.illustrative);

  return (
    <>
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Réalisations"
        title="Des missions concrètes, sur le terrain."
        text="Voici le type de missions que nous réalisons. Chaque fiche présente le besoin du client, le travail effectué et les documents remis."
      />

      <section className="py-16 md:py-20">
        <div className="shell grid gap-10">
          {hasIllustrative && (
            <p className="flex max-w-3xl gap-3 border-l-2 border-teal bg-white px-5 py-4 text-[0.98rem] text-slate" data-reveal="">
              <span>
                <strong className="font-semibold text-ink">Exemples illustratifs.</strong> Les fiches signalées comme telles
                décrivent des missions types. Elles seront remplacées par des projets réels du cabinet, publiés avec
                l’accord des clients.
              </span>
            </p>
          )}
          <RealisationsExplorer items={items} categories={realisationCategories} />
        </div>
      </section>

      <CtaBand
        eyebrow="Votre projet"
        title="Vous avez un projet similaire ?"
        text="Décrivez-le en quelques lignes : nous vous dirons comment nous pouvons intervenir."
      >
        <ButtonLink href="/demande-de-devis" size="lg">
          Présenter mon projet
        </ButtonLink>
      </CtaBand>

      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
    </>
  );
}
