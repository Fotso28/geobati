import type { ImageKey } from "./images";

/**
 * Domaines d'intervention du cabinet.
 * Chaque domaine a sa page (/services/<slug>) et regroupe plusieurs prestations.
 * Retirez ou ajoutez une entrée ici : les pages, menus et formulaires suivent automatiquement.
 */

export type ServiceIcon = "foncier" | "topographie" | "urbanisme" | "travaux";

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
  /** Prestations proposées dans ce domaine. */
  prestations: { title: string; text: string }[];
  hero: { title: string; text: string };
  ctaLabel: string;
  situations: string[];
  steps: { title: string; text: string }[];
  prepare: string[];
  faq: FaqItem[];
  closing: { title: string; text: string };
  /** Début du message WhatsApp envoyé depuis la page du domaine. */
  whatsappIntro: string;
  seo: { title: string; description: string };
};

export const servicesStepsNote =
  "Les étapes exactes sont précisées avec le cabinet selon la nature de la mission.";

export const services: Service[] = [
  {
    slug: "prestations-foncieres",
    name: "Prestations foncières",
    shortName: "Foncier",
    icon: "foncier",
    image: "bornage",
    need: "Je veux sécuriser les limites ou le dossier de mon terrain",
    visitorQuestion: "Comment sécuriser mon terrain et mon dossier foncier ?",
    summary:
      "Bornage, délimitation, morcellement et dossiers techniques fonciers, pour sécuriser vos terrains, vos achats et vos ventes.",
    examples: [
      "Borner ou délimiter une parcelle",
      "Diviser un terrain par morcellement",
      "Préparer le dossier technique d’une immatriculation",
    ],
    prestations: [
      {
        title: "Bornage et délimitation",
        text: "Identification et matérialisation des limites d’une parcelle, à partir des documents existants et des repères du terrain.",
      },
      {
        title: "Morcellement",
        text: "Division d’un terrain en plusieurs parcelles, avec les plans et documents techniques nécessaires.",
      },
      {
        title: "Dossiers techniques fonciers",
        text: "Plans et pièces techniques pour les procédures d’immatriculation, de mutation ou de régularisation.",
      },
      {
        title: "Vérification avant achat",
        text: "Contrôle de la concordance entre le terrain, ses limites et les documents présentés par le vendeur.",
      },
      {
        title: "Conseil foncier",
        text: "Explication de vos documents et des démarches à engager, avant toute décision.",
      },
    ],
    hero: {
      title: "Sécurisez vos terrains et vos dossiers fonciers.",
      text: "Bornage, morcellement, dossiers techniques : votre géomètre expert établit des limites fiables et des documents conformes, avant une construction, un achat ou une vente.",
    },
    ctaLabel: "Parler de mon terrain",
    situations: [
      "Vous voulez connaître ou matérialiser les limites de votre parcelle.",
      "Vous souhaitez diviser un terrain pour le vendre ou le partager.",
      "Vous préparez l’immatriculation ou la régularisation d’un terrain.",
      "Vous envisagez un achat et voulez vérifier ce qui vous est présenté.",
    ],
    steps: [
      { title: "Premier échange", text: "Vous nous décrivez le terrain, sa localité et votre objectif." },
      { title: "Analyse des documents", text: "Nous examinons les titres, plans et pièces disponibles sur la parcelle." },
      { title: "Intervention sur le terrain", text: "Nous réalisons les mesures, la recherche des limites ou le bornage convenus." },
      { title: "Remise des documents", text: "Nous vous remettons les plans et pièces techniques, et vous les expliquons." },
    ],
    prepare: [
      "La localité du terrain et, si possible, un point de repère.",
      "Une description de votre situation et de votre objectif.",
      "Les documents disponibles : titre foncier, plan, attestation… (photos ou copies).",
      "Les questions que vous souhaitez poser.",
    ],
    faq: [
      {
        question: "Dois-je avoir tous mes documents avant de vous écrire ?",
        answer:
          "Non. Écrivez-nous avec ce dont vous disposez. Nous vous indiquerons ensuite les documents utiles pour la suite.",
      },
      {
        question: "Combien de temps prend un bornage ou un morcellement ?",
        answer:
          "Cela dépend de la situation du terrain et de la procédure applicable. Nous vous donnons une estimation après l’analyse des documents.",
      },
      {
        question: "Pouvez-vous vérifier un terrain avant que je l’achète ?",
        answer:
          "Nous vérifions sur le terrain la concordance avec les plans et documents présentés. Les vérifications administratives se font auprès des services compétents ; nous vous indiquons lesquelles.",
      },
      {
        question: "Comment connaître le coût de l’intervention ?",
        answer:
          "Le coût dépend de la prestation, de la superficie, de l’accès au terrain et des documents disponibles. Un premier échange permet d’établir un devis adapté.",
      },
    ],
    closing: {
      title: "Parlons de votre terrain.",
      text: "Décrivez-nous votre situation : nous vous indiquerons les documents utiles et la démarche à suivre.",
    },
    whatsappIntro: "Bonjour, je souhaite des informations sur une prestation foncière (bornage, morcellement, dossier foncier).",
    seo: {
      title: "Bornage, morcellement et dossiers fonciers à Douala",
      description:
        "Cabinet de géomètre expert à Douala : bornage, délimitation, morcellement, dossiers techniques fonciers et vérification avant achat au Cameroun.",
    },
  },
  {
    slug: "topographie",
    name: "Topographie et mesures techniques",
    shortName: "Topographie",
    icon: "topographie",
    image: "topographie",
    need: "J’ai besoin de mesures précises pour mon projet ou mon chantier",
    visitorQuestion: "Comment obtenir des mesures fiables de mon terrain ou de mon ouvrage ?",
    summary:
      "Levés topographiques, nivellement, implantation d’ouvrages et contrôles de chantier, avec un matériel adapté à chaque mission.",
    examples: [
      "Lever un plan topographique avant la conception",
      "Implanter un bâtiment avant les fondations",
      "Contrôler la position et les niveaux d’un ouvrage",
    ],
    prestations: [
      {
        title: "Levés topographiques",
        text: "Plans cotés avec relief, courbes de niveau et éléments existants, pour concevoir ou présenter un projet.",
      },
      {
        title: "Nivellement",
        text: "Mesure des altitudes et des pentes pour l’assainissement, les terrassements et les ouvrages.",
      },
      {
        title: "Implantation d’ouvrages",
        text: "Report sur le terrain des axes, angles et niveaux prévus par les plans, avant les fondations.",
      },
      {
        title: "Contrôle et suivi de chantier",
        text: "Vérification de la position et des niveaux des ouvrages aux étapes clés de la construction.",
      },
      {
        title: "Calcul de surfaces et de volumes",
        text: "Superficies, cubatures de déblais et de remblais, métrés à partir des mesures.",
      },
      {
        title: "Drone et orthophoto",
        text: "Prises de vue aériennes pour documenter rapidement un site étendu.",
      },
    ],
    hero: {
      title: "Des mesures précises pour bâtir sur du solide.",
      text: "Levés, nivellement, implantation, contrôles : nous fournissons des mesures fiables à chaque étape de votre projet, de la conception à la réception des travaux.",
    },
    ctaLabel: "Demander un levé",
    situations: [
      "Votre architecte ou bureau d’études a besoin d’un plan topographique.",
      "Vous démarrez une construction et devez implanter les fondations.",
      "Vous voulez contrôler la position ou les niveaux d’un ouvrage en cours.",
      "Vous devez calculer une surface ou un volume de terrassement.",
    ],
    steps: [
      { title: "Premier échange", text: "Nous parlons du terrain, du projet et de l’usage prévu des mesures." },
      { title: "Cahier des charges", text: "Nous fixons ensemble le niveau de détail, l’échelle et les documents attendus." },
      { title: "Mesures sur le terrain", text: "Nous intervenons avec la station totale, le GNSS, le niveau ou le drone selon la mission." },
      { title: "Résultats remis", text: "Nous traitons les mesures et vous remettons les plans et fichiers convenus." },
    ],
    prepare: [
      "La localité et les conditions d’accès au terrain ou au chantier.",
      "L’usage des mesures : conception, implantation, contrôle, métré.",
      "Les plans existants, même anciens.",
      "Le contact de votre architecte, bureau d’études ou entreprise.",
    ],
    faq: [
      {
        question: "Quelle différence entre un levé topographique et un bornage ?",
        answer:
          "Le levé décrit le terrain tel qu’il est : relief, dimensions, éléments présents. Le bornage porte sur les limites de propriété. Les deux se complètent souvent.",
      },
      {
        question: "Quels documents vais-je recevoir ?",
        answer:
          "Ils sont définis avant l’intervention : plan coté, courbes de niveau, profils, fichiers numériques pour l’architecte, rapport d’implantation ou de contrôle.",
      },
      {
        question: "Combien de temps faut-il ?",
        answer:
          "Cela dépend de la surface, du relief et du niveau de détail demandé. Nous vous donnons une estimation lors du premier échange.",
      },
      {
        question: "Comment connaître le coût ?",
        answer: "Décrivez-nous le terrain et l’usage des mesures. Nous vous proposerons un devis après ce premier échange.",
      },
    ],
    closing: {
      title: "Parlons de vos mesures.",
      text: "Indiquez-nous la localité, le projet et l’usage prévu : nous vous dirons comment procéder.",
    },
    whatsappIntro: "Bonjour, je souhaite des informations sur un levé topographique ou des mesures techniques.",
    seo: {
      title: "Topographie, levés et implantation à Douala",
      description:
        "Levés topographiques, nivellement, implantation d’ouvrages, contrôles de chantier, cubatures et drone : les mesures techniques de votre géomètre expert à Douala.",
    },
  },
  {
    slug: "urbanisme-amenagement",
    name: "Urbanisme et aménagement",
    shortName: "Urbanisme",
    icon: "urbanisme",
    image: "lotissement",
    need: "Je veux lotir ou aménager un terrain",
    visitorQuestion: "Comment préparer le lotissement ou l’aménagement de mon terrain ?",
    summary:
      "Études de lotissement, plans d’aménagement et accompagnement des projets urbains, du découpage des lots aux voies d’accès.",
    examples: [
      "Étudier un projet de lotissement",
      "Concevoir un plan d’aménagement ou de masse",
      "Préparer les pièces d’un dossier d’urbanisme",
    ],
    prestations: [
      {
        title: "Études de lotissement",
        text: "Découpage en lots, voies d’accès et espaces communs, dans le respect des règles applicables.",
      },
      {
        title: "Plans d’aménagement et plans de masse",
        text: "Organisation d’un site : implantation des bâtiments, circulations, espaces libres.",
      },
      {
        title: "Études de faisabilité",
        text: "Analyse du terrain et de ses contraintes avant d’engager un projet.",
      },
      {
        title: "Voirie et réseaux",
        text: "Tracé des voies et des réseaux, en lien avec les bureaux d’études.",
      },
      {
        title: "Dossiers d’urbanisme",
        text: "Plans et pièces techniques pour vos démarches auprès des services compétents.",
      },
    ],
    hero: {
      title: "Donnez forme à vos projets d’aménagement.",
      text: "Lotissement, plan d’aménagement, étude de faisabilité : nous vous aidons à transformer un terrain en projet réaliste, conforme aux règles et prêt à être réalisé.",
    },
    ctaLabel: "Présenter mon projet",
    situations: [
      "Vous souhaitez lotir un terrain pour vendre ou construire des lots.",
      "Vous devez organiser un site : bâtiments, voies, espaces communs.",
      "Vous voulez vérifier qu’un projet est réalisable avant d’investir.",
      "Vous préparez des démarches auprès des services d’urbanisme.",
    ],
    steps: [
      { title: "Vos objectifs", text: "Nous échangeons sur le terrain, le programme envisagé et vos délais." },
      { title: "Analyse du terrain", text: "Nous étudions les documents, le relief et les contraintes connues." },
      { title: "Proposition", text: "Nous vous présentons un découpage ou un plan d’aménagement et les étapes à suivre." },
      { title: "Accompagnement", text: "Nous finalisons les plans et vous accompagnons dans la suite du projet." },
    ],
    prepare: [
      "La localité et la superficie approximative du terrain.",
      "Les documents fonciers disponibles.",
      "Votre programme : nombre de lots, type de constructions, usage prévu.",
      "Vos délais, s’il y en a.",
    ],
    faq: [
      {
        question: "Puis-je lotir mon terrain moi-même ?",
        answer:
          "Le lotissement suit des règles et des démarches précises. Lors du premier échange, nous vous expliquons les étapes et les intervenants qui s’appliquent à votre situation.",
      },
      {
        question: "Faut-il un levé avant d’étudier le découpage ?",
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
      title: "Lotissement, urbanisme et aménagement à Douala",
      description:
        "Études de lotissement, plans d’aménagement, études de faisabilité et dossiers d’urbanisme avec un cabinet de géomètre expert à Douala.",
    },
  },
  {
    slug: "travaux-publics",
    name: "Travaux publics",
    shortName: "Travaux publics",
    icon: "travaux",
    image: "travauxPublics",
    need: "Je conduis un chantier de route, de voirie ou d’ouvrage",
    visitorQuestion: "Comment assurer le suivi topographique d’un chantier de travaux publics ?",
    summary:
      "Levés, implantations et suivi topographique pour les routes, voiries, ouvrages d’art et terrassements, aux côtés des entreprises et des maîtres d’ouvrage.",
    examples: [
      "Lever un corridor avant l’étude d’une route",
      "Implanter l’axe d’une voirie",
      "Suivre les volumes de terrassement",
    ],
    prestations: [
      {
        title: "Levés de corridors et d’emprises",
        text: "Relevés préalables aux études de routes, pistes, réseaux et ouvrages.",
      },
      {
        title: "Implantation d’axes et d’ouvrages",
        text: "Axes routiers, profils, ouvrages d’art et réseaux reportés sur le terrain.",
      },
      {
        title: "Profils en long et en travers",
        text: "Profils pour le calcul des terrassements et le contrôle des pentes.",
      },
      {
        title: "Suivi des terrassements",
        text: "Mesures d’avancement et calcul des volumes de déblais et de remblais.",
      },
      {
        title: "Contrôle et récolement",
        text: "Vérification des ouvrages réalisés et plans de récolement en fin de chantier.",
      },
    ],
    hero: {
      title: "Un appui topographique fiable pour vos chantiers.",
      text: "Routes, voiries, ouvrages d’art, terrassements : nous accompagnons entreprises et maîtres d’ouvrage avec des levés, des implantations et un suivi rigoureux du chantier.",
    },
    ctaLabel: "Parler de mon chantier",
    situations: [
      "Vous préparez l’étude d’une route, d’une piste ou d’une voirie.",
      "Votre entreprise a besoin d’implantations fiables sur le chantier.",
      "Vous devez suivre l’avancement et les volumes de terrassement.",
      "Vous devez produire les plans de récolement d’un ouvrage.",
    ],
    steps: [
      { title: "Premier échange", text: "Nous parlons du projet, de son emprise et du planning des travaux." },
      { title: "Organisation de la mission", text: "Nous définissons les points d’appui, les livrables et la fréquence des interventions." },
      { title: "Interventions sur le chantier", text: "Levés, implantations et contrôles au rythme de l’avancement des travaux." },
      { title: "Rendus et récolement", text: "Nous remettons profils, calculs de volumes et plans de récolement." },
    ],
    prepare: [
      "La localisation et l’emprise du projet.",
      "Les plans du projet ou les études disponibles.",
      "Le planning prévisionnel des travaux.",
      "Le contact du conducteur de travaux ou du maître d’œuvre.",
    ],
    faq: [
      {
        question: "Pour qui intervenez-vous sur les chantiers ?",
        answer:
          "Pour les entreprises de travaux, les bureaux d’études et les maîtres d’ouvrage, publics ou privés. Décrivez-nous votre chantier et votre rôle dans le projet.",
      },
      {
        question: "Pouvez-vous suivre tout le chantier ?",
        answer:
          "Oui. L’intervention peut être ponctuelle ou régulière, selon le planning des travaux et les contrôles à réaliser.",
      },
      {
        question: "Quels documents remettez-vous ?",
        answer:
          "Selon la mission : plans topographiques, profils en long et en travers, calculs de volumes, rapports de contrôle, plans de récolement.",
      },
      {
        question: "Comment connaître le coût ?",
        answer: "Le devis dépend de l’emprise, de la durée du chantier et de la fréquence des interventions. Décrivez-nous votre projet.",
      },
    ],
    closing: {
      title: "Parlons de votre chantier.",
      text: "Indiquez-nous la localisation, le type d’ouvrage et le planning : nous organiserons l’appui topographique avec vous.",
    },
    whatsappIntro: "Bonjour, je souhaite des informations pour un chantier de travaux publics.",
    seo: {
      title: "Topographie pour travaux publics : routes, voiries, terrassements",
      description:
        "Levés de corridors, implantation d’axes, profils, suivi des terrassements et récolement : l’appui topographique d’un géomètre expert pour vos chantiers au Cameroun.",
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
