/**
 * Contenu de la page « À propos ».
 * Les textes marqués `draft: true` sont des propositions à valider ou à
 * remplacer par les mots du cabinet. Les listes vides masquent leur section.
 */

export const about = {
  intro: {
    draft: true,
    paragraphs: [
      "GeoBati accompagne particuliers, familles, entreprises et porteurs de projets dans leurs projets de terrain au Cameroun.",
      "Notre métier consiste à mesurer, représenter et expliquer : connaître un terrain avec précision, et faire en sorte que chacun comprenne ce que les mesures veulent dire pour son projet.",
    ],
  },
  mission: {
    draft: true,
    text: "Donner à chaque projet de terrain une base fiable, avec des explications claires à chaque étape.",
  },
  manager: {
    draft: true,
    name: null as string | null,
    role: "Géomètre, responsable du cabinet",
    quote:
      "Notre ambition est d’accompagner chaque client avec sérieux et clarté, en tenant compte des réalités de son terrain et de son projet.",
  },
  /** Membres que le cabinet souhaite présenter. Liste vide : la section n'affiche que le texte d'équipe. */
  team: [] as { name: string; role: string; bio: string; photo?: string }[],
  teamText: {
    draft: true,
    text: "Derrière chaque terrain, il y a un projet, une famille, une entreprise ou un investissement. Notre rôle est de vous accompagner avec attention, du premier échange à la compréhension des résultats.",
  },
  /** Matériel : ne garder que ce que le cabinet utilise réellement. */
  equipment: {
    draft: true,
    items: [
      {
        name: "Station totale",
        text: "Mesure les angles et les distances depuis un point connu. Instrument de référence pour l’implantation et les relevés détaillés.",
      },
      {
        name: "Récepteur GNSS",
        text: "Positionne un point par satellites. Utile pour rattacher les mesures à un système de coordonnées et couvrir rapidement un terrain dégagé.",
      },
      {
        name: "Drone de cartographie",
        text: "Photographie un site depuis les airs pour produire orthophotos et modèles de terrain sur de grandes surfaces.",
      },
      {
        name: "Logiciels de calcul, DAO et SIG",
        text: "Traitent les mesures et produisent les plans, les fichiers pour l’architecte et les cartes.",
      },
    ],
  },
  /** Agréments, inscriptions professionnelles, références : uniquement après vérification. */
  credentials: [] as { label: string; detail: string }[],
};
