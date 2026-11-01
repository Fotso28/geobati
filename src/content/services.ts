import type { ImageKey } from "./images";

/**
 * Prestations du cabinet.
 * La liste doit correspondre aux prestations réellement proposées :
 * retirez ou ajoutez une entrée ici, les pages et menus suivent automatiquement.
 */

export type ServiceIcon = "bornage" | "topographie" | "lotissement" | "implantation" | "drone" | "conseil";

export type FaqItem = { question: string; answer: string };

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  icon: ServiceIcon;
  image: ImageKey;
  /** Le besoin tel que le visiteur l'exprime avec ses mots. */
  need: string;
  /** Question principale que se pose le visiteur. */
  visitorQuestion: string;
  summary: string;
  examples: string[];
  hero: { title: string; text: string };
  ctaLabel: string;
  situations: string[];
  steps: { title: string; text: string }[];
  prepare: string[];
  faq: FaqItem[];
  closing: { title: string; text: string };
  /** Début du message WhatsApp envoyé depuis la page du service. */
  whatsappIntro: string;
  seo: { title: string; description: string };
};

const stepsNote =
  "Les étapes exactes sont précisées avec le cabinet selon la nature de la mission.";

export const servicesStepsNote = stepsNote;

export const services: Service[] = [
  {
    slug: "bornage",
    name: "Bornage et délimitation",
    shortName: "Bornage",
    icon: "bornage",
    image: "bornage",
    need: "Je veux connaître les limites de mon terrain",
    visitorQuestion: "Où s’arrête exactement mon terrain ?",
    summary:
      "Identifier, matérialiser et documenter les limites d’une parcelle, avant un achat, une construction ou une démarche foncière.",
    examples: [
      "Repérer les limites d’une parcelle avant d’y construire",
      "Préparer une acquisition ou une vente",
      "Comprendre une démarche de délimitation",
    ],
    hero: {
      title: "Clarifiez les limites de votre terrain.",
      text: "Vous souhaitez mieux identifier les limites d’une parcelle ou préparer une démarche liée à votre terrain ? Parlons de votre situation pour identifier l’accompagnement adapté.",
    },
    ctaLabel: "Parler de mon terrain",
    situations: [
      "Vous souhaitez mieux connaître les limites d’une parcelle.",
      "Vous préparez une acquisition ou un projet sur un terrain.",
      "Vous souhaitez obtenir des informations sur une démarche de délimitation.",
      "Vous avez une question concernant votre dossier foncier.",
    ],
    steps: [
      { title: "Premier échange", text: "Vous nous décrivez le terrain, sa localité et ce que vous souhaitez savoir." },
      { title: "Analyse des documents", text: "Nous examinons les informations et documents disponibles sur la parcelle." },
      { title: "Intervention définie", text: "Nous vous proposons l’intervention adaptée et vous expliquons son déroulement." },
      { title: "Terrain et résultats", text: "Nous intervenons sur place puis vous présentons les résultats convenus." },
    ],
    prepare: [
      "La localité du terrain et, si possible, un point de repère.",
      "Une description de la situation, avec vos mots.",
      "Les documents déjà disponibles, s’il y en a (photos ou copies suffisent).",
      "Les questions que vous souhaitez poser.",
    ],
    faq: [
      {
        question: "Dois-je avoir tous mes documents avant de vous écrire ?",
        answer:
          "Non. Écrivez-nous avec ce dont vous disposez. Nous vous indiquerons ensuite les documents utiles pour la suite.",
      },
      {
        question: "Intervenez-vous dans ma localité ?",
        answer:
          "Indiquez la localité de votre terrain dans votre message : nous vous confirmerons les possibilités d’intervention.",
      },
      {
        question: "Comment connaître le coût de l’intervention ?",
        answer:
          "Le coût dépend de la mission, de la superficie, de l’accès au terrain et des documents disponibles. Un premier échange permet d’établir un devis adapté.",
      },
      {
        question: "Que faire si je ne connais pas la superficie exacte ?",
        answer: "Ce n’est pas un problème. Une estimation ou une simple description suffit pour commencer.",
      },
    ],
    closing: {
      title: "Parlons de votre terrain.",
      text: "Décrivez-nous votre situation : notre équipe vous indiquera les informations utiles pour commencer.",
    },
    whatsappIntro: "Bonjour, je souhaite des informations sur le bornage et la délimitation de mon terrain.",
    seo: {
      title: "Bornage et délimitation de terrain au Cameroun",
      description:
        "Identifier et documenter les limites d’une parcelle avant un achat ou une construction. Décrivez votre situation au cabinet GeoBati.",
    },
  },
  {
    slug: "topographie",
    name: "Topographie et relevés",
    shortName: "Topographie",
    icon: "topographie",
    image: "topographie",
    need: "Je veux mesurer ou cartographier un terrain",
    visitorQuestion: "Comment obtenir une représentation précise de mon terrain ?",
    summary:
      "Mesurer le relief, les dimensions et les éléments existants d’un terrain pour produire un plan fiable, base de tout projet.",
    examples: [
      "Fournir un plan à l’architecte avant la conception",
      "Connaître le relief et les pentes d’une parcelle",
      "Représenter bâtiments, voiries et arbres existants",
    ],
    hero: {
      title: "Une représentation précise de votre terrain.",
      text: "Relief, dimensions, éléments existants : un relevé topographique vous donne une base fiable pour concevoir, chiffrer ou présenter votre projet.",
    },
    ctaLabel: "Demander un relevé",
    situations: [
      "Votre architecte ou votre bureau d’études a besoin d’un plan du terrain.",
      "Vous voulez connaître le relief, les pentes et les points bas de votre parcelle.",
      "Vous devez représenter les éléments existants : constructions, clôtures, voiries, arbres.",
      "Vous préparez un dossier qui demande un plan à jour du terrain.",
    ],
    steps: [
      { title: "Premier échange", text: "Nous parlons du terrain et de l’usage prévu du plan." },
      { title: "Cahier des charges", text: "Nous fixons ensemble le niveau de détail, l’échelle et les documents attendus." },
      { title: "Relevés sur place", text: "Nous mesurons le terrain avec un matériel adapté à la surface et au relief." },
      { title: "Plan remis", text: "Nous traitons les mesures et vous remettons les documents convenus." },
    ],
    prepare: [
      "La localité et les conditions d’accès au terrain.",
      "L’usage du plan : construction, étude, dossier, vente.",
      "Les plans ou croquis existants, même anciens.",
      "Le contact de votre architecte ou bureau d’études, si vous en avez un.",
    ],
    faq: [
      {
        question: "Quelle différence entre un relevé topographique et un bornage ?",
        answer:
          "Le relevé décrit le terrain tel qu’il est : relief, dimensions, éléments présents. Le bornage porte sur les limites de propriété. Les deux peuvent se compléter selon votre projet.",
      },
      {
        question: "Quels documents vais-je recevoir ?",
        answer:
          "Ils sont définis avant l’intervention, selon l’usage prévu : plan coté, courbes de niveau, points altimétriques, fichiers numériques pour l’architecte.",
      },
      {
        question: "Combien de temps faut-il ?",
        answer:
          "Cela dépend de la surface, du relief et du niveau de détail demandé. Nous vous donnons une estimation lors du premier échange.",
      },
      {
        question: "Comment connaître le coût ?",
        answer:
          "Décrivez-nous le terrain et l’usage du plan. Nous vous proposerons un devis après ce premier échange.",
      },
    ],
    closing: {
      title: "Parlons de votre relevé.",
      text: "Indiquez-nous la localité du terrain et l’usage prévu du plan : nous vous dirons comment procéder.",
    },
    whatsappIntro: "Bonjour, je souhaite des informations sur un relevé topographique.",
    seo: {
      title: "Relevé topographique et plan de terrain au Cameroun",
      description:
        "Relief, dimensions, éléments existants : obtenez un plan topographique fiable pour concevoir ou présenter votre projet. Échangez avec GeoBati.",
    },
  },
  {
    slug: "lotissement",
    name: "Lotissement et aménagement",
    shortName: "Lotissement",
    icon: "lotissement",
    image: "lotissement",
    need: "Je souhaite diviser ou aménager un terrain",
    visitorQuestion: "Comment préparer la division ou l’aménagement de mon terrain ?",
    summary:
      "Étudier le découpage d’un terrain en lots, les accès et les espaces communs, et accompagner les étapes du projet.",
    examples: [
      "Diviser une parcelle en plusieurs lots",
      "Prévoir les voies d’accès et les espaces communs",
      "Vérifier la faisabilité d’un découpage",
    ],
    hero: {
      title: "Préparez la division ou l’aménagement de votre terrain.",
      text: "Diviser une parcelle, organiser des lots, prévoir les accès : un projet de lotissement se prépare avec méthode. Échangeons sur vos objectifs.",
    },
    ctaLabel: "Présenter mon projet",
    situations: [
      "Vous souhaitez diviser un terrain en plusieurs lots.",
      "Vous envisagez un aménagement avec voies d’accès et espaces communs.",
      "Vous voulez vérifier si un découpage est réaliste avant d’aller plus loin.",
      "Vous vous interrogez sur les étapes et les intervenants d’un lotissement.",
    ],
    steps: [
      { title: "Vos objectifs", text: "Nous échangeons sur le terrain, le nombre de lots envisagé et l’usage prévu." },
      { title: "Analyse du terrain", text: "Nous étudions les documents, le relief et les contraintes connues." },
      { title: "Démarche proposée", text: "Nous vous présentons les études nécessaires et l’ordre des étapes." },
      { title: "Accompagnement", text: "Nous réalisons la mission convenue et restons votre interlocuteur technique." },
    ],
    prepare: [
      "La localité et la superficie approximative du terrain.",
      "Les documents fonciers disponibles.",
      "Le nombre de lots ou le type d’aménagement envisagé.",
      "Vos délais, s’il y en a.",
    ],
    faq: [
      {
        question: "Puis-je diviser mon terrain moi-même ?",
        answer:
          "La division et le lotissement d’un terrain suivent des règles et des démarches précises. Lors du premier échange, nous vous expliquons les étapes et les intervenants qui s’appliquent à votre situation.",
      },
      {
        question: "Faut-il un relevé avant d’étudier le découpage ?",
        answer:
          "Le plus souvent, oui : un plan fiable du terrain permet de proposer un découpage réaliste. Nous vérifions d’abord ce qui existe déjà.",
      },
      {
        question: "Combien de lots puis-je créer ?",
        answer:
          "Cela dépend de la superficie, de la forme du terrain, des accès et des règles applicables. L’étude permet de répondre précisément.",
      },
      {
        question: "Comment connaître le coût ?",
        answer: "Présentez-nous votre projet. Le devis dépend des études nécessaires et de la taille du terrain.",
      },
    ],
    closing: {
      title: "Présentez-nous votre projet.",
      text: "Quelques informations suffisent pour commencer : localité, superficie approximative et ce que vous souhaitez réaliser.",
    },
    whatsappIntro: "Bonjour, je souhaite des informations pour un projet de lotissement ou d’aménagement.",
    seo: {
      title: "Lotissement et division de terrain au Cameroun",
      description:
        "Diviser une parcelle, organiser des lots, prévoir les accès : préparez votre projet de lotissement avec le cabinet GeoBati.",
    },
  },
  {
    slug: "implantation",
    name: "Implantation et suivi de chantier",
    shortName: "Implantation",
    icon: "implantation",
    image: "implantation",
    need: "Je prépare une construction",
    visitorQuestion: "Comment préparer l’implantation de mon ouvrage ?",
    summary:
      "Reporter sur le terrain la position exacte d’un ouvrage avant les fondations, puis contrôler les repères en cours de chantier.",
    examples: [
      "Implanter les axes et les angles d’un bâtiment",
      "Donner des niveaux de référence à l’entreprise",
      "Contrôler un ouvrage en cours de construction",
    ],
    hero: {
      title: "Implantez votre ouvrage au bon endroit.",
      text: "Avant les fondations, l’implantation reporte sur le terrain la position prévue de votre construction. Un repère juste au départ évite des corrections coûteuses ensuite.",
    },
    ctaLabel: "Parler de mon chantier",
    situations: [
      "Vous démarrez une construction et devez implanter les fondations.",
      "Votre entreprise a besoin d’axes et de niveaux de référence fiables.",
      "Vous voulez vérifier la position d’un ouvrage en cours de construction.",
      "Vous construisez sur une parcelle dont les limites restent à confirmer.",
    ],
    steps: [
      { title: "Premier échange", text: "Nous parlons du chantier, des plans et de la date de démarrage." },
      { title: "Vérification des plans", text: "Nous contrôlons les plans et les repères disponibles sur le terrain." },
      { title: "Implantation", text: "Nous matérialisons axes, angles et niveaux convenus avec l’entreprise." },
      { title: "Contrôles", text: "Nous vous remettons les informations d’implantation et assurons les contrôles prévus." },
    ],
    prepare: [
      "Le plan de masse ou les plans d’exécution.",
      "La localité du chantier.",
      "La date de démarrage prévue.",
      "Le contact du chef de chantier ou de l’entreprise.",
    ],
    faq: [
      {
        question: "À quel moment faire appel au géomètre ?",
        answer:
          "Avant le début des terrassements et des fondations. Plus l’échange a lieu tôt, plus l’implantation s’organise facilement avec l’entreprise.",
      },
      {
        question: "Les limites du terrain doivent-elles être connues ?",
        answer:
          "C’est préférable, car l’ouvrage se positionne par rapport aux limites. Si elles sont incertaines, nous en parlons dès le premier échange.",
      },
      {
        question: "Pouvez-vous intervenir en cours de chantier ?",
        answer: "Oui, pour contrôler la position ou les niveaux d’un ouvrage déjà commencé. Décrivez-nous l’avancement.",
      },
      {
        question: "Comment connaître le coût ?",
        answer: "Envoyez-nous les plans et la localité. Le devis dépend de l’ouvrage et des contrôles souhaités.",
      },
    ],
    closing: {
      title: "Parlons de votre chantier.",
      text: "Indiquez-nous la localité, le type d’ouvrage et la date de démarrage : nous organiserons l’implantation avec vous.",
    },
    whatsappIntro: "Bonjour, je souhaite des informations sur l’implantation de mon chantier.",
    seo: {
      title: "Implantation de bâtiment et suivi de chantier au Cameroun",
      description:
        "Axes, angles et niveaux reportés sur le terrain avant les fondations, puis contrôlés en cours de chantier. Parlez de votre chantier à GeoBati.",
    },
  },
  {
    slug: "drone-cartographie",
    name: "Drone et cartographie",
    shortName: "Drone",
    icon: "drone",
    image: "drone",
    need: "Je souhaite obtenir une vue d’ensemble",
    visitorQuestion: "Comment visualiser ou documenter une grande surface ?",
    summary:
      "Photographies aériennes, orthophotos et modèles de terrain pour documenter rapidement un site étendu ou suivre un chantier.",
    examples: [
      "Documenter un grand terrain ou un site difficile d’accès",
      "Suivre l’avancement d’un chantier",
      "Disposer d’une image aérienne récente du site",
    ],
    hero: {
      title: "Une vue d’ensemble de vos grandes surfaces.",
      text: "Photographies aériennes, orthophotos, modèles de terrain : le drone complète les méthodes au sol pour documenter rapidement un site étendu.",
    },
    ctaLabel: "Demander une intervention",
    situations: [
      "Vous devez documenter un grand terrain ou un site difficile d’accès.",
      "Vous souhaitez suivre l’avancement d’un chantier dans le temps.",
      "Vous avez besoin d’une image aérienne récente et mesurable du site.",
      "Vous voulez présenter un site à des partenaires ou à des investisseurs.",
    ],
    steps: [
      { title: "Premier échange", text: "Nous parlons du site, de sa surface et de ce que vous voulez en obtenir." },
      { title: "Préparation du vol", text: "Nous vérifions les conditions de vol et les autorisations nécessaires." },
      { title: "Acquisition", text: "Nous réalisons les prises de vue, avec des points de contrôle au sol si besoin." },
      { title: "Livrables", text: "Nous traitons les images et vous remettons les documents convenus." },
    ],
    prepare: [
      "La localisation et l’étendue approximative du site.",
      "L’objectif : suivi, plan, présentation, étude.",
      "Vos délais.",
      "Les contraintes d’accès connues.",
    ],
    faq: [
      {
        question: "Le drone remplace-t-il un relevé au sol ?",
        answer:
          "Pas toujours. Il couvre vite de grandes surfaces, mais la précision dépend de la méthode et des points de contrôle au sol. Nous vous conseillons la combinaison adaptée.",
      },
      {
        question: "Faut-il une autorisation pour faire voler un drone ?",
        answer:
          "L’usage des drones est encadré. Nous vérifions les conditions applicables au site avant toute intervention.",
      },
      {
        question: "Quels documents puis-je obtenir ?",
        answer:
          "Selon le besoin : photos aériennes, orthophoto (image aérienne redressée et mesurable), modèle numérique de terrain, plan.",
      },
      {
        question: "Comment connaître le coût ?",
        answer: "Le devis dépend de la surface, de l’accès au site et des livrables attendus. Décrivez-nous votre besoin.",
      },
    ],
    closing: {
      title: "Parlons de votre site.",
      text: "Indiquez-nous la localisation, l’étendue et l’objectif : nous vous dirons quelle intervention convient.",
    },
    whatsappIntro: "Bonjour, je souhaite des informations sur une intervention par drone et la cartographie d’un site.",
    seo: {
      title: "Drone, orthophoto et cartographie au Cameroun",
      description:
        "Photographies aériennes, orthophotos et modèles de terrain pour documenter un site étendu ou suivre un chantier. Échangez avec GeoBati.",
    },
  },
  {
    slug: "conseil-foncier",
    name: "Conseil et accompagnement foncier",
    shortName: "Conseil foncier",
    icon: "conseil",
    image: "conseil",
    need: "J’ai besoin de mieux comprendre mon dossier",
    visitorQuestion: "Par où commencer avec mon dossier ?",
    summary:
      "Comprendre vos documents, identifier les vérifications techniques utiles et savoir quelles démarches engager.",
    examples: [
      "Savoir quoi vérifier avant d’acheter un terrain",
      "Comprendre un plan ou un document foncier",
      "Identifier la prestation dont vous avez besoin",
    ],
    hero: {
      title: "Par où commencer avec votre dossier ?",
      text: "Achat d’un terrain, documents à réunir, démarches à engager : nous vous aidons à y voir plus clair et à identifier les bonnes étapes.",
    },
    ctaLabel: "Poser ma question",
    situations: [
      "Vous envisagez d’acheter un terrain et voulez savoir quoi vérifier.",
      "Vous avez des documents fonciers et souhaitez les comprendre.",
      "Vous ne savez pas quelle prestation demander.",
      "Vous préparez une démarche administrative liée à votre terrain.",
    ],
    steps: [
      { title: "Écoute", text: "Vous nous expliquez votre situation et vos questions." },
      { title: "Examen des documents", text: "Nous regardons les documents que vous nous transmettez." },
      { title: "Explications", text: "Nous vous expliquons ce qu’ils indiquent et les démarches possibles." },
      { title: "Suite proposée", text: "Si une intervention est utile, nous vous proposons la démarche adaptée." },
    ],
    prepare: [
      "Une description de votre situation.",
      "Les documents dont vous disposez (photos ou copies).",
      "La localité du terrain.",
      "La liste de vos questions.",
    ],
    faq: [
      {
        question: "Pouvez-vous me dire si un terrain est sûr à acheter ?",
        answer:
          "Un échange ne remplace pas les vérifications officielles. Nous vous expliquons les vérifications techniques utiles et vous orientons vers les services et professionnels compétents, comme les services des domaines et du cadastre ou un notaire.",
      },
      {
        question: "Je ne comprends pas mes documents. Pouvez-vous m’aider ?",
        answer: "Oui. Envoyez-nous des photos lisibles des documents et vos questions : nous vous expliquerons ce qu’ils contiennent.",
      },
      {
        question: "Je ne sais pas de quelle prestation j’ai besoin.",
        answer: "C’est fréquent. Décrivez votre projet avec vos mots, nous vous aiderons à identifier la suite.",
      },
      {
        question: "Le conseil est-il payant ?",
        answer:
          "Le premier échange sert à comprendre votre besoin. Si une étude ou une intervention est nécessaire, nous vous proposons un devis avant de commencer.",
      },
    ],
    closing: {
      title: "Posez-nous votre question.",
      text: "Expliquez votre situation avec vos mots, même si elle vous semble compliquée. Nous vous aiderons à identifier la suite.",
    },
    whatsappIntro: "Bonjour, j’ai une question sur mon dossier foncier.",
    seo: {
      title: "Conseil et accompagnement foncier au Cameroun",
      description:
        "Comprendre vos documents, savoir quoi vérifier avant d’acheter un terrain, identifier les démarches à engager. Posez votre question à GeoBati.",
    },
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

/** Option « Je ne sais pas encore » du formulaire de demande. */
export const unknownServiceOption = {
  slug: "a-definir",
  name: "Je ne sais pas encore",
  hint: "Nous vous aiderons à identifier la prestation.",
} as const;
