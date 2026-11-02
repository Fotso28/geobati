import Link from "next/link";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { whatsappUrl, generalMessage } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "./Logo";

const cabinetLinks = [
  { href: "/a-propos", label: "Le cabinet" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/conseils", label: "Conseils fonciers" },
  { href: "/contact", label: "Contact" },
  { href: "/demande-de-devis", label: "Demander un devis" },
];

export function Footer() {
  const contactLines = [
    site.phoneDisplay && { label: "Téléphone", value: site.phoneDisplay, href: site.phoneHref ? `tel:${site.phoneHref}` : undefined },
    site.email && { label: "E-mail", value: site.email, href: `mailto:${site.email}` },
    (site.address.street || site.address.locality) && {
      label: "Adresse",
      value: [site.address.street, site.address.locality].filter(Boolean).join(", "),
      href: site.mapUrl ?? undefined,
    },
    site.hours?.length && { label: "Horaires", value: site.hours.join(" · ") },
  ].filter(Boolean) as { label: string; value: string; href?: string }[];

  return (
    <footer className="bg-navy-deep text-mist">
      <div className="shell grid gap-12 py-16 md:grid-cols-12 md:gap-8">
        <div className="grid content-start gap-5 md:col-span-4">
          <Logo variant="light" className="h-14" />
          <p className="max-w-[36ch] text-[0.98rem]">{site.description}</p>
          <div>
            <ButtonLink href={whatsappUrl(generalMessage)} icon="whatsapp" variant="outline-light">
              Écrire sur WhatsApp
            </ButtonLink>
          </div>
        </div>

        <FooterColumn title="Services" className="md:col-span-3">
          {services.map((service) => (
            <FooterLink key={service.slug} href={`/services/${service.slug}`}>
              {service.name}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Cabinet" className="md:col-span-2">
          {cabinetLinks.map((link) => (
            <FooterLink key={link.href} href={link.href}>
              {link.label}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Coordonnées" className="md:col-span-3">
          {contactLines.length ? (
            contactLines.map((line) => (
              <li key={line.label} className="grid gap-0.5">
                <span className="label text-[0.62rem] text-mist/70">{line.label}</span>
                {line.href ? (
                  <a href={line.href} className="text-white hover:text-teal">
                    {line.value}
                  </a>
                ) : (
                  <span className="text-white">{line.value}</span>
                )}
              </li>
            ))
          ) : (
            <li className="max-w-[30ch] text-[0.95rem]">
              Les coordonnées du cabinet seront publiées prochainement. En attendant, écrivez-nous sur WhatsApp.
            </li>
          )}
        </FooterColumn>
      </div>

      <div className="border-t border-navy-line/50">
        <div className="shell flex flex-col gap-3 py-6 text-[0.85rem] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.name} · Cabinet de géomètre expert au {site.address.country}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/mentions-legales" className="hover:text-white">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/confidentialite" className="hover:text-white">
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <h2 className="label mb-5 text-teal [font-stretch:100%]">{title}</h2>
      <ul className="grid gap-3 text-[0.96rem]">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-mist transition-colors hover:text-white">
        {children}
      </Link>
    </li>
  );
}
