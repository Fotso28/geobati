import { site } from "@/content/site";
import { services, type FaqItem } from "@/content/services";

/** Données structurées schema.org. Seuls les faits confirmés dans site.ts sont publiés. */

export const absoluteUrl = (pathname = "/") => `${site.url}${pathname === "/" ? "" : pathname}`;

export function organizationJsonLd() {
  const { address } = site;
  const hasAddress = Boolean(address.street || address.locality);
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#cabinet`,
    name: site.name,
    ...(site.legalName ? { legalName: site.legalName } : {}),
    description: site.description,
    url: site.url,
    areaServed: site.serviceAreas.length
      ? site.serviceAreas.map((name) => ({ "@type": "Place", name }))
      : { "@type": "Country", name: "Cameroun" },
    ...(site.phoneHref ? { telephone: site.phoneHref } : {}),
    ...(site.email ? { email: site.email } : {}),
    ...(hasAddress
      ? {
          address: {
            "@type": "PostalAddress",
            ...(address.street ? { streetAddress: address.street } : {}),
            ...(address.locality ? { addressLocality: address.locality } : {}),
            ...(address.region ? { addressRegion: address.region } : {}),
            addressCountry: "CM",
          },
        }
      : {}),
    ...(site.openingHoursSchema?.length ? { openingHours: site.openingHoursSchema } : {}),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Prestations",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          url: absoluteUrl(`/services/${service.slug}`),
        },
      })),
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function serviceJsonLd(service: { name: string; summary: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.summary,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: { "@id": `${site.url}/#cabinet` },
    areaServed: { "@type": "Country", name: "Cameroun" },
  };
}

export function articleJsonLd(article: { title: string; excerpt: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    url: absoluteUrl(`/conseils/${article.slug}`),
    inLanguage: "fr",
    publisher: { "@id": `${site.url}/#cabinet` },
  };
}
