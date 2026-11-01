import { site } from "@/content/site";
import { services } from "@/content/services";
import { articles } from "@/content/articles";
import { absoluteUrl } from "@/lib/jsonld";

/**
 * llms.txt : résumé en texte clair du cabinet, pour les assistants IA.
 * Généré à partir des mêmes contenus que le site ; seuls les faits confirmés y figurent.
 */
export function GET() {
  const contact = [
    site.phoneDisplay && `- Téléphone : ${site.phoneDisplay}`,
    site.whatsappNumber && `- WhatsApp : +${site.whatsappNumber}`,
    site.email && `- E-mail : ${site.email}`,
    (site.address.street || site.address.locality) &&
      `- Adresse : ${[site.address.street, site.address.locality, site.address.country].filter(Boolean).join(", ")}`,
    site.hours?.length && `- Horaires : ${site.hours.join(" ; ")}`,
    site.serviceAreas.length && `- Zones d'intervention : ${site.serviceAreas.join(", ")}`,
  ].filter(Boolean);

  const body = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    "Les demandes se font par WhatsApp, directement ou via un formulaire en trois étapes qui prépare le message.",
    "",
    "## Prestations",
    ...services.map((service) => `- [${service.name}](${absoluteUrl(`/services/${service.slug}`)}) : ${service.summary}`),
    "",
    "## Contact",
    `- [Demander un devis](${absoluteUrl("/demande-de-devis")})`,
    `- [Page contact](${absoluteUrl("/contact")})`,
    ...contact,
    "",
    "## Conseils fonciers",
    ...articles.map((article) => `- [${article.title}](${absoluteUrl(`/conseils/${article.slug}`)}) : ${article.excerpt}`),
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
