import type { Metadata } from "next";
import { Suspense } from "react";
import { services, unknownServiceOption } from "@/content/services";
import { realisations } from "@/content/realisations";
import { site } from "@/content/site";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { Breadcrumbs, Eyebrow, JsonLd, MarkerList } from "@/components/ui/primitives";
import { QuoteForm, type QuoteOption } from "@/components/forms/QuoteForm";
import { QuoteFormWithParams } from "@/components/forms/QuoteFormWithParams";

export const metadata: Metadata = {
  title: "Demander un devis",
  description:
    "Décrivez votre besoin en trois étapes courtes : foncier, topographie, urbanisme ou travaux publics. Le message est prêt à envoyer sur WhatsApp au cabinet GéoBati.",
  alternates: { canonical: "/demande-de-devis" },
};

const breadcrumbs = [
  { name: "Accueil", href: "/" },
  { name: "Demander un devis", href: "/demande-de-devis" },
];

const options: QuoteOption[] = [
  ...services.map((service) => ({ slug: service.slug, name: service.name, icon: service.icon })),
  { slug: unknownServiceOption.slug, name: unknownServiceOption.name, hint: unknownServiceOption.hint },
];

const references = Object.fromEntries(realisations.map((item) => [item.slug, item.title]));

export default function QuotePage() {
  return (
    <section className="grid-paper border-b border-line">
      <div className="shell grid gap-10 pt-8 pb-16 md:pt-10 md:pb-24 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-8">
        <div className="grid content-start gap-6 lg:col-span-5 lg:row-start-1 lg:pt-6">
          <div data-intro="fade">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="grid gap-5 pt-4 md:pt-8">
            <div data-intro="fade">
              <Eyebrow>Demande de devis</Eyebrow>
            </div>
            <h1 data-intro="headline" className="text-h1 max-w-[16ch]">
              Expliquez-nous votre besoin en trois étapes.
            </h1>
            <p data-intro="fade" className="max-w-[46ch] text-lead text-slate">
              Nous préparons votre message à partir de vos réponses. Il ne reste qu’à l’envoyer sur WhatsApp, et nous
              poursuivons l’échange avec vous.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1" data-intro="fade">
          <Suspense fallback={<QuoteForm options={options} />}>
            <QuoteFormWithParams options={options} references={references} />
          </Suspense>
        </div>

        <div className="grid content-start gap-6 lg:col-span-5 lg:row-start-2">
          <div data-intro="fade" className="grid gap-4 border-t border-line pt-6">
            <MarkerList
              items={[
                "Pas besoin de connaître le nom technique de la prestation.",
                "Vous relisez votre message avant de l’envoyer.",
                "Aucune donnée n’est enregistrée sur ce site : le message part de votre propre WhatsApp.",
              ]}
            />
          </div>
          {site.phoneDisplay && site.phoneHref && (
            <p data-intro="fade" className="text-slate">
              Vous préférez appeler ?{" "}
              <a href={`tel:${site.phoneHref}`} className="font-semibold text-ink underline underline-offset-4">
                {site.phoneDisplay}
              </a>
            </p>
          )}
        </div>
      </div>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
    </section>
  );
}
