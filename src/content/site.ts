/**
 * Informations générales du cabinet.
 *
 * Tout ce qui vaut `null` n'est pas encore confirmé : le site l'affiche comme
 * « communiqué prochainement » ou masque l'élément. Remplacez chaque valeur
 * par l'information réelle du cabinet, sans rien inventer (qualifications,
 * années d'expérience, zones d'intervention, etc.).
 */

export type SiteConfig = {
  /** Nom du cabinet, tel qu'il figure sur le logo. */
  name: string;
  /** Signature du logo. */
  tagline: string;
  /** Raison sociale complète, pour les mentions légales. */
  legalName: string | null;
  /** Courte description utilisée dans les métadonnées et le pied de page. */
  description: string;
  /** Adresse publique du site, sans barre finale. */
  url: string;
  /** Numéro WhatsApp au format international, sans "+" ni espaces (ex. 2376XXXXXXXX). */
  whatsappNumber: string;
  /** Numéro de téléphone tel qu'il doit s'afficher (ex. "+237 6XX XX XX XX"). */
  phoneDisplay: string | null;
  /** Numéro de téléphone pour le lien d'appel (ex. "+2376XXXXXXXX"). */
  phoneHref: string | null;
  email: string | null;
  address: {
    street: string | null;
    locality: string | null;
    region: string | null;
    country: string;
  };
  /** Horaires d'ouverture, une ligne par plage, tels qu'ils s'affichent. */
  hours: string[] | null;
  /** Mêmes horaires au format schema.org (ex. "Mo-Sa 08:00-16:00"). */
  openingHoursSchema: string[] | null;
  /** Lien Google Maps vers le cabinet, une fois l'adresse validée. */
  mapUrl: string | null;
  /** Zones d'intervention confirmées par le cabinet. */
  serviceAreas: string[];
  social: {
    facebook: string | null;
    linkedin: string | null;
    instagram: string | null;
  };
};

/**
 * Adresse publique du site : NEXT_PUBLIC_SITE_URL si elle est définie (nom de domaine
 * du cabinet), sinon l'adresse de production fournie automatiquement par Vercel.
 */
function siteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  const vercel = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const url = explicit || (vercel ? `https://${vercel}` : "http://localhost:3000");
  return url.replace(/\/$/, "");
}

export const site: SiteConfig = {
  name: "GéoBati",
  tagline: "Géomètres bâtisseurs 3.0",
  legalName: null,
  description:
    "Cabinet de géomètre expert à Douala, Cameroun : prestations foncières, topographie et mesures techniques, urbanisme et aménagement, travaux publics.",
  url: siteUrl(),
  whatsappNumber: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "237655030815").replace(/\D/g, ""),
  phoneDisplay: "+237 655 03 08 15",
  phoneHref: "+237655030815",
  email: "contact@geobati.com",
  address: {
    street: "Yassa",
    locality: "Douala",
    region: "Littoral",
    country: "Cameroun",
  },
  hours: ["Du lundi au samedi, de 8 h à 16 h"],
  openingHoursSchema: ["Mo-Sa 08:00-16:00"],
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Yassa%2C%20Douala%2C%20Cameroun",
  serviceAreas: [],
  social: {
    facebook: null,
    linkedin: null,
    instagram: null,
  },
};

export const mainNav = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/a-propos", label: "À propos" },
  { href: "/conseils", label: "Conseils" },
  { href: "/contact", label: "Contact" },
] as const;

/** Affiche un numéro international lisiblement, ex. 237655030815 → +237 655 03 08 15. */
export function formatPhone(digits: string): string {
  const match = digits.match(/^237(\d{3})(\d{2})(\d{2})(\d{2})$/);
  return match ? `+237 ${match.slice(1).join(" ")}` : `+${digits}`;
}

/** Les notes « à valider » s'affichent en développement, ou si la variable l'active. */
export const showDraftNotes =
  process.env.NODE_ENV === "development" ||
  process.env.NEXT_PUBLIC_SHOW_DRAFT_NOTES === "true";
