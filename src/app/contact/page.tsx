import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { formatPhone, site } from "@/content/site";
import { services } from "@/content/services";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { getImage } from "@/lib/images";
import { whatsappUrl, generalMessage } from "@/lib/whatsapp";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/icons";
import { DraftNote, JsonLd } from "@/components/ui/primitives";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez le cabinet de géomètre GeoBati : WhatsApp, téléphone, adresse et formulaire de contact. Décrivez votre projet de terrain au Cameroun.",
  alternates: { canonical: "/contact" },
};

const breadcrumbs = [
  { name: "Accueil", href: "/" },
  { name: "Contact", href: "/contact" },
];

export default function ContactPage() {
  const address = [site.address.street, site.address.locality, site.address.region].filter(Boolean).join(", ");
  const rows = [
    {
      icon: <WhatsAppIcon className="size-5" />,
      label: "WhatsApp",
      value: site.whatsappNumber ? formatPhone(site.whatsappNumber) : null,
      href: whatsappUrl(generalMessage),
      linkLabel: "Écrire sur WhatsApp",
    },
    {
      icon: <Phone aria-hidden="true" className="size-5" strokeWidth={1.6} />,
      label: "Téléphone",
      value: site.phoneDisplay,
      href: site.phoneHref ? `tel:${site.phoneHref}` : null,
    },
    {
      icon: <Mail aria-hidden="true" className="size-5" strokeWidth={1.6} />,
      label: "E-mail",
      value: site.email,
      href: site.email ? `mailto:${site.email}` : null,
    },
    {
      icon: <MapPin aria-hidden="true" className="size-5" strokeWidth={1.6} />,
      label: "Adresse",
      value: address || null,
      href: site.mapUrl,
      linkLabel: "Voir sur la carte",
    },
    {
      icon: <Clock aria-hidden="true" className="size-5" strokeWidth={1.6} />,
      label: "Horaires",
      value: site.hours?.join(" · ") ?? null,
      href: null,
    },
  ];
  const subjects = [...services.map((service) => service.name), "Autre question"];

  return (
    <>
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Contact"
        title="Parlons de votre terrain."
        image={getImage("contact")}
        text="Le plus simple : un message WhatsApp avec la localité du terrain et quelques lignes sur votre projet."
        actions={
          <>
            <ButtonLink href={whatsappUrl(generalMessage)} icon="whatsapp" size="lg">
              Écrire sur WhatsApp
            </ButtonLink>
            {site.phoneHref && (
              <ButtonLink href={`tel:${site.phoneHref}`} variant="outline" icon="none" size="lg">
                Appeler le cabinet
              </ButtonLink>
            )}
            <ButtonLink href="/demande-de-devis" variant="quiet">
              Demander un devis
            </ButtonLink>
          </>
        }
      />

      <section className="py-16 md:py-20">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="grid content-start gap-8 lg:col-span-5">
            <h2 className="text-h2" data-reveal="">
              Coordonnées
            </h2>
            <dl className="border-t border-line">
              {rows.map((row) => (
                <div key={row.label} className="grid grid-cols-[2rem_1fr] gap-x-3 gap-y-1 border-b border-line py-5" data-reveal="">
                  <span className="row-span-2 pt-0.5 text-forest">{row.icon}</span>
                  <dt className="label text-slate">{row.label}</dt>
                  <dd>
                    {row.value ? (
                      row.href ? (
                        <a
                          href={row.href}
                          {...(row.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="font-semibold underline decoration-line-strong underline-offset-4 hover:decoration-ochre-deep"
                        >
                          {row.value}
                        </a>
                      ) : (
                        <span className="font-semibold">{row.value}</span>
                      )
                    ) : row.href && row.linkLabel ? (
                      <a href={row.href} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">
                        {row.linkLabel}
                      </a>
                    ) : (
                      <span className="text-slate">Communiqué prochainement</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <DraftNote>Renseigner les coordonnées réelles dans src/content/site.ts (et le numéro WhatsApp dans .env).</DraftNote>
          </div>

          <div className="grid content-start gap-6 lg:col-span-7">
            <h2 className="text-h2" data-reveal="">
              Écrire au cabinet
            </h2>
            <div data-reveal="">
              <ContactForm subjects={subjects} />
            </div>
          </div>
        </div>
      </section>

      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
    </>
  );
}
