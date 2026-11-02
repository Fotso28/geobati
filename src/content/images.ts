/**
 * Emplacements photo du site.
 *
 * Chaque photo se trouve dans `public/images/` sous le nom de l'emplacement
 * (extension .webp, .avif, .jpg, .jpeg ou .png) : elle apparaît automatiquement.
 * Tant qu'un fichier manque, un visuel « plan » neutre le remplace.
 *
 * `illustration: true` signale une image d'illustration (banque d'images,
 * image générée, mise en scène). Passez-la à `false` uniquement pour une photo
 * réelle du cabinet, publiée avec l'accord des personnes concernées.
 * `position` règle le cadrage (CSS object-position) quand la photo est recadrée.
 * `fit: "contain"` affiche la photo entière, pour les objets détourés.
 */

export type ImageSlot = {
  /** Nom du fichier attendu dans public/images (sans extension). */
  file: string;
  alt: string;
  /** Ce que la photo doit montrer, pour choisir dans la banque d'images. */
  brief: string;
  illustration: boolean;
  position?: string;
  fit?: "cover" | "contain";
};

export const imageSlots = {
  hero: {
    file: "hero",
    alt: "Géomètre à la station totale sur une route en latérite, un porte-mire en arrière-plan",
    brief: "Équipe de géomètres en intervention, matériel professionnel visible, format paysage.",
    illustration: true,
    position: "38% 50%",
  },
  team: {
    file: "equipe",
    alt: "Deux techniciens partent en intervention avec un trépied et une valise de matériel",
    brief: "Photo de l'équipe ou du géomètre responsable.",
    illustration: true,
  },
  manager: {
    file: "responsable",
    alt: "Portrait d'un membre du cabinet à son bureau",
    brief: "Portrait professionnel du responsable, cadrage buste, format vertical.",
    illustration: true,
    position: "50% 25%",
  },
  office: {
    file: "cabinet",
    alt: "Plan topographique annoté au premier plan, géomètre en mesure sur le terrain en arrière-plan",
    brief: "Bureau, poste de dessin ou de cartographie, plans sur la table.",
    illustration: true,
    position: "45% 50%",
  },
  equipment: {
    file: "equipement",
    alt: "Kit GNSS dans sa valise, tablette de terrain et carte, trépied en arrière-plan",
    brief: "Matériel réellement utilisé : station totale, GNSS, drone.",
    illustration: true,
  },
  bornage: {
    file: "service-bornage",
    alt: "Repère de délimitation scellé dans le béton et marqué de peinture orange",
    brief: "Pose ou repérage d'une borne, limite de parcelle.",
    illustration: true,
  },
  topographie: {
    file: "service-topographie",
    alt: "Topographe avec un récepteur GNSS sur trépied et une tablette, au-dessus d'une vallée",
    brief: "Relevé au GNSS ou à la station totale, terrain naturel.",
    illustration: true,
    position: "35% 50%",
  },
  lotissement: {
    file: "service-lotissement",
    alt: "Vue aérienne d'un lotissement en cours d'aménagement, voies en latérite et premières maisons",
    brief: "Terrain découpé, piquets, voie d'accès en cours d'ouverture.",
    illustration: true,
  },
  implantation: {
    file: "service-implantation",
    alt: "Station totale installée sur un chantier, entre tas de sable et de gravier",
    brief: "Chantier, chaises d'implantation, cordeaux, fondations.",
    illustration: true,
    position: "25% 50%",
  },
  drone: {
    file: "service-drone",
    alt: "Télépilote préparant un drone de cartographie sur son aire de décollage",
    brief: "Drone en vol ou vue aérienne d'un site.",
    illustration: true,
  },
  conseil: {
    file: "service-conseil",
    alt: "Mains traçant un plan de lotissement avec un crayon et une règle à échelle",
    brief: "Échange avec un client autour d'un plan ou de documents.",
    illustration: true,
  },
  intervention1: {
    file: "intervention-1",
    alt: "Relevé à la station totale au bord d'une rivière, près d'un pont",
    brief: "Relevé topographique.",
    illustration: true,
    position: "35% 50%",
  },
  intervention2: {
    file: "intervention-2",
    alt: "Topographe avec une canne GNSS sur une parcelle débroussaillée",
    brief: "Intervention sur une parcelle.",
    illustration: true,
  },
  intervention3: {
    file: "intervention-3",
    alt: "Mire de nivellement et niveau sur trépied devant des fondations",
    brief: "Implantation sur chantier.",
    illustration: true,
  },
  contact: {
    file: "contact",
    alt: "Technicien au téléphone sur le terrain, station totale installée le long d'une voie ferrée",
    brief: "Échange téléphonique ou accueil au cabinet.",
    illustration: true,
    position: "100% 45%",
  },

  // Réalisations
  realReleve: {
    file: "realisation-releve",
    alt: "Station totale sur trépied au bord d'un fleuve",
    brief: "Relevé topographique en site naturel.",
    illustration: true,
    position: "30% 50%",
  },
  realReleve2: {
    file: "realisation-releve-2",
    alt: "Opérateur saisissant les mesures sur un carnet électronique, station totale en arrière-plan",
    brief: "Saisie des mesures sur le terrain.",
    illustration: true,
  },
  realDelimitation: {
    file: "realisation-delimitation",
    alt: "Prisme de visée sur une piste en latérite, opérateur en arrière-plan",
    brief: "Visée de délimitation sur une parcelle.",
    illustration: true,
  },
  realImplantation: {
    file: "realisation-implantation",
    alt: "Mise en station d'un instrument : calage sur le trépied",
    brief: "Préparation de l'implantation.",
    illustration: true,
  },
  realImplantation2: {
    file: "realisation-implantation-2",
    alt: "Mesure au télémètre laser sur un mur de bâtiment en construction",
    brief: "Contrôle de cotes sur un bâtiment.",
    illustration: true,
  },
  realDivision: {
    file: "realisation-division",
    alt: "Vue aérienne d'un quartier résidentiel et de ses voies en terre",
    brief: "Terrain ou quartier vu du ciel.",
    illustration: true,
  },
  realCartographie: {
    file: "realisation-cartographie",
    alt: "Vue aérienne d'un chantier étendu : fondations, silos et conteneurs",
    brief: "Site étendu vu par drone.",
    illustration: true,
  },
  realCartographie2: {
    file: "realisation-cartographie-2",
    alt: "Drone de cartographie en vol au-dessus d'un terrain terrassé",
    brief: "Drone en vol.",
    illustration: true,
  },
  realSuivi: {
    file: "realisation-suivi",
    alt: "Topographe à la station totale sur un terrassement, bulldozer en arrière-plan",
    brief: "Contrôle sur un chantier de terrassement.",
    illustration: true,
    position: "30% 50%",
  },
  realSuivi2: {
    file: "realisation-suivi-2",
    alt: "Vue aérienne d'un chantier de voirie, niveleuse sur la couche de gravier",
    brief: "Chantier vu du ciel.",
    illustration: true,
  },

  // Conseils fonciers
  articleReleve: {
    file: "conseil-releve",
    alt: "Écran affichant une carte avec courbes de niveau, station totale près de la fenêtre",
    brief: "Plan topographique à l'écran.",
    illustration: true,
    position: "62% 50%",
  },
  articleInformations: {
    file: "conseil-informations",
    alt: "Plans, équerre et casque sur une table de chantier",
    brief: "Documents et plans.",
    illustration: true,
  },
  articleDelimitation: {
    file: "conseil-delimitation",
    alt: "Illustration d'une parcelle délimitée par des bornes, avec une station totale",
    brief: "Parcelle et bornes.",
    illustration: true,
  },
  articleEchange: {
    file: "conseil-echange",
    alt: "Échange autour d'un plan topographique, récepteur GNSS et ordinateur sur la table",
    brief: "Échange autour d'un plan.",
    illustration: true,
  },

  // Matériel (objets détourés)
  matStation: {
    file: "materiel-station-totale",
    alt: "Station totale",
    brief: "Station totale détourée.",
    illustration: true,
    fit: "contain",
  },
  matGnss: {
    file: "materiel-gnss",
    alt: "Récepteur GNSS monté sur son carnet de terrain",
    brief: "Récepteur GNSS détouré.",
    illustration: true,
    fit: "contain",
  },
  matNiveau: {
    file: "materiel-niveau",
    alt: "Niveau optique de chantier",
    brief: "Niveau optique détouré.",
    illustration: true,
    fit: "contain",
  },
  matDrone: {
    file: "materiel-drone",
    alt: "Drone de cartographie",
    brief: "Drone détouré.",
    illustration: true,
    fit: "contain",
  },
} satisfies Record<string, ImageSlot>;

export type ImageKey = keyof typeof imageSlots;
