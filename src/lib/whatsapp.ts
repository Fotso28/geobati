import { site } from "@/content/site";

/** Lien WhatsApp vers le cabinet, avec message prérempli facultatif. */
export function whatsappUrl(message?: string): string {
  const base = site.whatsappNumber ? `https://wa.me/${site.whatsappNumber}` : "https://wa.me/";
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const generalMessage = "Bonjour, je souhaite obtenir des informations sur vos services.";

export type QuoteDetails = {
  name: string;
  need: string;
  city: string;
  district?: string;
  description?: string;
  extra?: string;
  reference?: string;
};

/** Message envoyé à la fin du formulaire de demande. Le gras WhatsApp utilise *…*. */
export function buildQuoteMessage(details: QuoteDetails): string {
  const location = [details.city.trim(), details.district?.trim()].filter(Boolean).join(", ");
  const lines = [
    "Bonjour, je souhaite obtenir des informations pour un projet.",
    "",
    `*Nom :* ${details.name.trim()}`,
    `*Besoin :* ${details.need}`,
    `*Localisation :* ${location}`,
  ];
  if (details.description?.trim()) lines.push(`*Précisions :* ${details.description.trim()}`);
  if (details.reference?.trim()) lines.push(`*Référence :* ${details.reference.trim()}`);
  if (details.extra?.trim()) lines.push(`*Complément :* ${details.extra.trim()}`);
  lines.push("", "Pouvez-vous m’indiquer la marche à suivre ?");
  return lines.join("\n");
}
