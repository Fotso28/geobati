import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { realisations } from "@/content/realisations";
import { articles } from "@/content/articles";
import { absoluteUrl } from "@/lib/jsonld";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/demande-de-devis", priority: 0.9 },
    { path: "/contact", priority: 0.8 },
    { path: "/a-propos", priority: 0.6 },
    { path: "/realisations", priority: 0.6 },
    { path: "/conseils", priority: 0.6 },
    { path: "/mentions-legales", priority: 0.1 },
    { path: "/confidentialite", priority: 0.1 },
  ];
  return [
    ...staticPages.map(({ path, priority }) => ({ url: absoluteUrl(path), priority })),
    ...services.map((service) => ({ url: absoluteUrl(`/services/${service.slug}`), priority: 0.9 })),
    ...realisations.map((item) => ({ url: absoluteUrl(`/realisations/${item.slug}`), priority: 0.4 })),
    ...articles.map((article) => ({ url: absoluteUrl(`/conseils/${article.slug}`), priority: 0.5 })),
  ];
}
