import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/services";
import { getImage } from "@/lib/images";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { whatsappUrl } from "@/lib/whatsapp";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { ServiceIcon } from "@/components/ui/icons";
import { JsonLd, MarkerList } from "@/components/ui/primitives";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Nos services de géomètre",
  description:
    "Bornage, topographie, lotissement, implantation de chantier, drone et conseil foncier : comparez les prestations du cabinet GéoBati et trouvez celle qui correspond à votre projet.",
  alternates: { canonical: "/services" },
};

const breadcrumbs = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "/services" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow={`${services.length} domaines d’intervention`}
        title="Une expertise adaptée à chaque projet de terrain."
        text="Découvrez nos domaines d’intervention, du repérage de votre parcelle à l’accompagnement de vos projets d’aménagement."
      >
        <nav aria-label="Aller à une prestation" className="pt-4" data-intro="fade">
          <ul className="flex flex-wrap gap-2">
            {services.map((service) => (
              <li key={service.slug}>
                <a
                  href={`#${service.slug}`}
                  className="inline-flex items-center gap-2 border border-line-strong bg-white/60 px-3 py-2 text-[0.9rem] font-medium hover:border-navy hover:text-navy"
                >
                  <ServiceIcon name={service.icon} className="size-4 text-navy" />
                  {service.shortName}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      <div className="shell divide-y divide-line">
        {services.map((service, index) => (
          <section
            key={service.slug}
            id={service.slug}
            aria-labelledby={`${service.slug}-titre`}
            className="grid scroll-mt-24 gap-8 py-16 md:grid-cols-12 md:items-center md:gap-12 md:py-20"
          >
            <div className={cn("md:col-span-5", index % 2 === 1 && "md:order-2 md:col-start-8")} data-reveal="">
              <Link href={`/services/${service.slug}`} tabIndex={-1} aria-hidden="true" className="block">
                <Photo
                  image={getImage(service.image)}
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="aspect-[4/3] transition-[filter] duration-500 hover:brightness-95"
                />
              </Link>
            </div>
            <div className={cn("grid content-center gap-5 md:col-span-6", index % 2 === 1 ? "md:order-1" : "md:col-start-7")}>
              <p className="label flex items-center gap-2.5 text-navy" data-reveal="">
                <ServiceIcon name={service.icon} className="size-4" />
                {service.visitorQuestion}
              </p>
              <h2 id={`${service.slug}-titre`} className="text-h2" data-reveal="">
                <Link href={`/services/${service.slug}`} className="hover:text-teal-deep">
                  {service.name}
                </Link>
              </h2>
              <p className="max-w-[52ch] text-lead text-slate" data-reveal="">
                {service.summary}
              </p>
              <div data-reveal="">
                <MarkerList items={service.examples} />
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2" data-reveal="">
                <ButtonLink href={`/services/${service.slug}`} variant="dark">
                  Découvrir ce service
                </ButtonLink>
                <ButtonLink href={whatsappUrl(service.whatsappIntro)} variant="quiet" icon="whatsapp">
                  En parler sur WhatsApp
                </ButtonLink>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="border-t border-line bg-white py-20 md:py-24">
        <div className="shell grid gap-8 md:grid-cols-12 md:items-center">
          <div className="grid gap-4 md:col-span-8" data-reveal="">
            <h2 className="text-h2">Vous ne savez pas quel service choisir ?</h2>
            <p className="max-w-[54ch] text-lead text-slate">
              Expliquez-nous votre situation avec vos mots. Nous vous aiderons à identifier la suite.
            </p>
          </div>
          <div className="md:col-span-4 md:flex md:justify-end" data-reveal="">
            <ButtonLink href="/demande-de-devis?service=a-definir" size="lg">
              Décrire mon besoin
            </ButtonLink>
          </div>
        </div>
      </section>

      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
    </>
  );
}
