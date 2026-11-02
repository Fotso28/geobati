import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { getService, services, servicesStepsNote } from "@/content/services";
import { getImage } from "@/lib/images";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { whatsappUrl } from "@/lib/whatsapp";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { ButtonLink } from "@/components/ui/Button";
import { Faq } from "@/components/ui/Faq";
import { Traverse } from "@/components/ui/Traverse";
import { ServiceIcon } from "@/components/ui/icons";
import { JsonLd, MarkerList, SectionHeading } from "@/components/ui/primitives";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.seo.title,
    description: service.seo.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: service.seo.title, description: service.seo.description },
  };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const breadcrumbs = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: service.name, href: `/services/${service.slug}` },
  ];
  const formHref = `/demande-de-devis?service=${service.slug}`;
  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow={service.name}
        title={service.hero.title}
        text={service.hero.text}
        image={getImage(service.image)}
        actions={
          <>
            <ButtonLink href={formHref} size="lg">
              {service.ctaLabel}
            </ButtonLink>
            <ButtonLink href={whatsappUrl(service.whatsappIntro)} variant="quiet" icon="whatsapp">
              Écrire directement sur WhatsApp
            </ButtonLink>
          </>
        }
      />

      {/* Prestations du domaine */}
      <section className="border-b border-line bg-white py-20 md:py-24">
        <div className="shell grid gap-12">
          <SectionHeading
            eyebrow={`${service.prestations.length} prestations`}
            title="Le détail de nos prestations"
            text={service.summary}
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.prestations.map((prestation) => (
              <li key={prestation.title} className="grid content-start gap-3 border border-line bg-paper p-6 md:p-7" data-reveal="">
                <div aria-hidden="true" className="cote w-12 text-teal" />
                <h3 className="text-h3">{prestation.title}</h3>
                <p className="text-slate">{prestation.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Situations */}
      <section className="py-20 md:py-24">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Pour qui" title="Dans quelles situations ?" text={service.visitorQuestion} />
          </div>
          <ul className="grid gap-px self-start border border-line bg-line sm:grid-cols-2 lg:col-span-7">
            {service.situations.map((situation) => (
              <li key={situation} className="flex gap-4 bg-paper p-6" data-reveal="">
                <ServiceIcon name={service.icon} className="mt-0.5 size-5 shrink-0 text-navy" />
                <span>{situation}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Déroulement */}
      <section className="grid-paper border-y border-line py-20 md:py-24">
        <div className="shell grid gap-14">
          <SectionHeading eyebrow="Déroulement" title="Comment se déroule l’accompagnement ?" />
          <Traverse steps={service.steps} />
          <p className="label max-w-[60ch] text-slate normal-case tracking-normal" data-reveal="">
            {servicesStepsNote}
          </p>
        </div>
      </section>

      {/* À préparer */}
      <section className="py-20 md:py-24">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Premier échange"
              title="Que préparer pour le premier échange ?"
              text="Rien d’obligatoire : écrivez-nous avec ce que vous avez. Ces éléments nous aident à vous répondre plus vite."
            />
          </div>
          <div className="bg-tint p-7 md:p-10 lg:col-span-7" data-reveal="">
            <MarkerList items={service.prepare} className="gap-4 text-[1.05rem]" />
            <div className="mt-8 border-t border-ink/15 pt-6">
              <ButtonLink href={formHref} variant="dark">
                Préparer mon message
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-white py-20 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Questions fréquentes" title={`${service.shortName} : vos questions`} />
          </div>
          <div className="lg:col-span-8">
            <Faq items={service.faq} group={`faq-${service.slug}`} />
          </div>
        </div>
      </section>

      <CtaBand eyebrow={service.name} title={service.closing.title} text={service.closing.text}>
        <ButtonLink href={whatsappUrl(service.whatsappIntro)} icon="whatsapp" size="lg">
          Continuer sur WhatsApp
        </ButtonLink>
        <ButtonLink href={formHref} variant="outline-light" size="lg">
          {service.ctaLabel}
        </ButtonLink>
      </CtaBand>

      {/* Autres services */}
      <nav aria-labelledby="autres-services" className="py-16 md:py-20">
        <div className="shell grid gap-8">
          <h2 id="autres-services" className="label text-slate">
            Autres prestations
          </h2>
          <ul className="grid border-t border-line sm:grid-cols-2 lg:grid-cols-5">
            {others.map((item) => (
              <li key={item.slug} className="border-b border-line lg:border-r lg:last:border-r-0 lg:first:[&>a]:pl-0">
                <Link href={`/services/${item.slug}`} className="group flex h-full items-center justify-between gap-3 py-5 lg:px-4">
                  <span className="flex items-center gap-3 font-semibold">
                    <ServiceIcon name={item.icon} className="size-5 shrink-0 text-navy" />
                    {item.shortName}
                  </span>
                  <ArrowRight aria-hidden="true" className="size-4 text-teal-deep transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <JsonLd data={[serviceJsonLd(service), faqJsonLd(service.faq), breadcrumbJsonLd(breadcrumbs)]} />
    </>
  );
}
