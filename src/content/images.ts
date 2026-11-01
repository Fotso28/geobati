/**
 * Emplacements photo du site.
 *
 * Déposez chaque photo dans `public/images/` sous le nom de l'emplacement
 * (extension .jpg, .jpeg, .png, .webp ou .avif) : elle apparaît automatiquement.
 * Tant qu'un fichier manque, un visuel « plan » neutre le remplace.
 *
 * `illustration: true` signale une image d'illustration (banque d'images,
 * image générée, mise en scène). Passez-la à `false` uniquement pour une photo
 * réelle du cabinet, publiée avec l'accord des personnes concernées.
 */

export type ImageSlot = {
  /** Nom du fichier attendu dans public/images (sans extension). */
  file: string;
  alt: string;
  /** Ce que la photo doit montrer, pour choisir dans la banque d'images. */
  brief: string;
  illustration: boolean;
};

export const imageSlots = {
  hero: {
    file: "hero",
    alt: "Équipe de géomètres en intervention sur un terrain avec une station totale",
    brief: "Équipe camerounaise de géomètres en intervention, matériel professionnel visible, format paysage.",
    illustration: true,
  },
  team: {
    file: "equipe",
    alt: "L'équipe du cabinet réunie devant le matériel de mesure",
    brief: "Vraie photo de l'équipe ou du géomètre responsable.",
    illustration: true,
  },
  manager: {
    file: "responsable",
    alt: "Portrait du géomètre responsable du cabinet",
    brief: "Portrait professionnel du responsable, cadrage buste, format vertical.",
    illustration: true,
  },
  office: {
    file: "cabinet",
    alt: "Bureau du cabinet, plans et poste de travail cartographique",
    brief: "Bureau, poste de dessin ou de cartographie, plans sur la table.",
    illustration: true,
  },
  equipment: {
    file: "equipement",
    alt: "Station totale et récepteur GNSS installés sur trépied",
    brief: "Matériel réellement utilisé : station totale, GNSS, drone.",
    illustration: true,
  },
  bornage: {
    file: "service-bornage",
    alt: "Géomètre posant une borne en limite de parcelle",
    brief: "Pose ou repérage d'une borne, limite de parcelle.",
    illustration: true,
  },
  topographie: {
    file: "service-topographie",
    alt: "Relevé topographique au récepteur GNSS sur un terrain en pente",
    brief: "Relevé au GNSS ou à la station totale, terrain naturel.",
    illustration: true,
  },
  lotissement: {
    file: "service-lotissement",
    alt: "Terrain en cours d'aménagement avec piquets de délimitation des lots",
    brief: "Terrain découpé, piquets, voie d'accès en cours d'ouverture.",
    illustration: true,
  },
  implantation: {
    file: "service-implantation",
    alt: "Implantation des axes d'un bâtiment sur un chantier",
    brief: "Chantier, chaises d'implantation, cordeaux, fondations.",
    illustration: true,
  },
  drone: {
    file: "service-drone",
    alt: "Drone de cartographie en vol au-dessus d'un site",
    brief: "Drone en vol ou vue aérienne d'un site.",
    illustration: true,
  },
  conseil: {
    file: "service-conseil",
    alt: "Géomètre expliquant un plan à un client",
    brief: "Échange avec un client autour d'un plan ou de documents.",
    illustration: true,
  },
  intervention1: {
    file: "intervention-1",
    alt: "Relevé topographique sur une parcelle",
    brief: "Relevé topographique.",
    illustration: true,
  },
  intervention2: {
    file: "intervention-2",
    alt: "Intervention d'un géomètre sur une parcelle",
    brief: "Intervention sur une parcelle.",
    illustration: true,
  },
  intervention3: {
    file: "intervention-3",
    alt: "Implantation sur un chantier de construction",
    brief: "Implantation sur chantier.",
    illustration: true,
  },
  contact: {
    file: "contact",
    alt: "Géomètre au téléphone sur le terrain",
    brief: "Échange téléphonique ou accueil au cabinet.",
    illustration: true,
  },
} satisfies Record<string, ImageSlot>;

export type ImageKey = keyof typeof imageSlots;
