import type { ImageKey } from "./images";

/**
 * Réalisations.
 *
 * Les fiches ci-dessous sont des EXEMPLES ILLUSTRATIFS (`illustrative: true`) :
 * ils montrent le type de missions possibles et sont signalés comme tels sur le site.
 * Remplacez-les par de vrais projets du cabinet, avec l'accord des clients
 * pour la localité et les photos, puis passez `illustrative` à `false`.
 */

export type RealisationCategory = "foncier" | "topographie" | "urbanisme" | "travaux-publics";

export const realisationCategories: { key: RealisationCategory; label: string }[] = [
  { key: "foncier", label: "Foncier" },
  { key: "topographie", label: "Topographie" },
  { key: "urbanisme", label: "Urbanisme" },
  { key: "travaux-publics", label: "Travaux publics" },
];

export type Realisation = {
  slug: string;
  title: string;
  category: RealisationCategory;
  /** Prestation à présélectionner dans le formulaire « J'ai un projet similaire ». */
  serviceSlug: string;
  /** Localité, uniquement si sa publication est autorisée. */
  locality: string | null;
  mission: string;
  context: string;
  work: string[];
  images: ImageKey[];
  illustrative: boolean;
};

export const realisations: Realisation[] = [
  {
    slug: "releve-topographique-projet-amenagement",
    title: "Relevé topographique pour un projet d’aménagement",
    category: "topographie",
    serviceSlug: "topographie",
    locality: null,
    mission: "Relevé et production de documents de travail adaptés au projet.",
    context:
      "Un porteur de projet prépare l’aménagement d’un terrain en pente. Son bureau d’études a besoin d’un plan à jour pour concevoir les accès et l’assainissement.",
    work: [
      "Définition du niveau de détail avec le bureau d’études",
      "Relevé du relief et des éléments existants",
      "Plan coté avec courbes de niveau et points altimétriques",
      "Remise des fichiers numériques pour la conception",
    ],
    images: ["realReleve", "realReleve2"],
    illustrative: true,
  },
  {
    slug: "delimitation-parcelle-avant-construction",
    title: "Délimitation d’une parcelle avant construction",
    category: "foncier",
    serviceSlug: "prestations-foncieres",
    locality: null,
    mission: "Repérage des limites et explication des résultats au propriétaire.",
    context:
      "Une famille souhaite construire et veut s’assurer de la position des limites de sa parcelle avant de lancer les travaux.",
    work: [
      "Examen des documents disponibles sur la parcelle",
      "Recherche et repérage des limites sur le terrain",
      "Présentation des résultats au propriétaire",
    ],
    images: ["realDelimitation", "bornage"],
    illustrative: true,
  },
  {
    slug: "implantation-batiment-residentiel",
    title: "Implantation d’un bâtiment résidentiel",
    category: "topographie",
    serviceSlug: "topographie",
    locality: null,
    mission: "Implantation des axes et des niveaux avant les fondations.",
    context:
      "Une entreprise de construction démarre un bâtiment résidentiel et a besoin de repères fiables pour lancer les terrassements.",
    work: [
      "Vérification du plan de masse et des repères existants",
      "Implantation des axes et des angles du bâtiment",
      "Transmission des niveaux de référence au chef de chantier",
    ],
    images: ["realImplantation", "realImplantation2"],
    illustrative: true,
  },
  {
    slug: "etude-prealable-division-terrain",
    title: "Étude préalable à la division d’un terrain",
    category: "urbanisme",
    serviceSlug: "urbanisme-amenagement",
    locality: null,
    mission: "Analyse du terrain et proposition d’une démarche de découpage.",
    context:
      "Un propriétaire envisage de diviser un grand terrain en plusieurs lots et veut savoir si son projet est réaliste avant d’engager des frais.",
    work: [
      "Échange sur les objectifs et le nombre de lots envisagé",
      "Analyse des documents et du relief",
      "Présentation des étapes et des études nécessaires",
    ],
    images: ["realDivision", "conseil"],
    illustrative: true,
  },
  {
    slug: "cartographie-aerienne-chantier-infrastructure",
    title: "Cartographie aérienne d’un chantier d’infrastructure",
    category: "travaux-publics",
    serviceSlug: "travaux-publics",
    locality: null,
    mission: "Prises de vue par drone et production d’une orthophoto du site.",
    context:
      "Un gestionnaire de site a besoin d’une image aérienne récente et mesurable pour planifier des travaux sur une grande surface.",
    work: [
      "Vérification des conditions de vol",
      "Prises de vue avec points de contrôle au sol",
      "Production d’une orthophoto et d’un plan de situation",
    ],
    images: ["realCartographie", "realCartographie2"],
    illustrative: true,
  },
  {
    slug: "suivi-topographique-chantier-terrassement",
    title: "Suivi topographique d’un chantier de terrassement",
    category: "travaux-publics",
    serviceSlug: "travaux-publics",
    locality: null,
    mission: "Contrôles de position et de niveaux à des étapes clés du chantier.",
    context:
      "Un maître d’ouvrage veut vérifier que l’ouvrage reste conforme aux plans au fil de la construction.",
    work: [
      "Définition des étapes de contrôle avec l’entreprise",
      "Contrôles de position et de niveaux sur place",
      "Compte rendu des écarts constatés",
    ],
    images: ["realSuivi", "realSuivi2"],
    illustrative: true,
  },
];

export function getRealisation(slug: string): Realisation | undefined {
  return realisations.find((item) => item.slug === slug);
}

export function categoryLabel(key: RealisationCategory): string {
  return realisationCategories.find((category) => category.key === key)?.label ?? key;
}
