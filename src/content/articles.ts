import type { ImageKey } from "./images";

/**
 * Articles « Conseils fonciers ».
 * Contenu pédagogique et général. Tout passage réglementaire ou juridique
 * doit être vérifié par le cabinet avant publication.
 */

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  readingMinutes: number;
  image: ImageKey;
  relatedService: string;
  sections: ArticleSection[];
  /** Rappel des limites de l'article. */
  limits: string;
  /** Début du message WhatsApp proposé en fin d'article. */
  question: string;
};

export const articles: Article[] = [
  {
    slug: "a-quoi-sert-un-releve-topographique",
    title: "À quoi sert un relevé topographique ?",
    excerpt:
      "Relief, dimensions, éléments existants : ce que contient un relevé, à quoi il sert et à quel moment le demander.",
    readingMinutes: 4,
    image: "articleReleve",
    relatedService: "topographie",
    sections: [
      {
        heading: "Une photographie mesurée du terrain",
        paragraphs: [
          "Un relevé topographique décrit un terrain tel qu’il est au moment de la mesure. Le géomètre mesure des points sur le terrain puis les reporte sur un plan à une échelle donnée.",
          "Le résultat permet de connaître les dimensions de la parcelle, la forme du relief et la position de tout ce qui s’y trouve déjà.",
        ],
      },
      {
        heading: "Ce que l’on trouve sur un plan topographique",
        paragraphs: ["Le contenu dépend de l’usage prévu, mais on y retrouve souvent :"],
        list: [
          "les dimensions et la forme du terrain ;",
          "des points altimétriques, c’est-à-dire des altitudes mesurées ;",
          "des courbes de niveau, qui relient les points de même altitude et montrent les pentes ;",
          "les éléments existants : constructions, clôtures, voiries, arbres, regards visibles.",
        ],
      },
      {
        heading: "À quoi il sert concrètement",
        paragraphs: [
          "L’architecte s’en sert pour placer la construction en tenant compte des pentes et des accès. Le bureau d’études l’utilise pour concevoir l’assainissement, les terrassements ou les voiries. Un porteur de projet peut aussi s’en servir pour estimer des travaux ou présenter son terrain.",
          "Sans plan fiable, ces décisions reposent sur des estimations, avec un risque de mauvaises surprises au moment des travaux.",
        ],
      },
      {
        heading: "Quand le demander",
        paragraphs: [
          "Idéalement avant la conception du projet, au moment où les choix sont encore ouverts. Préparez la localité du terrain, l’usage prévu du plan et, si vous en avez, le contact de votre architecte : cela permet de définir le bon niveau de détail.",
        ],
      },
    ],
    limits:
      "Cet article présente le relevé topographique de manière générale. Le contenu exact d’un plan dépend de votre projet et se définit avec le géomètre avant l’intervention.",
    question: "Bonjour, j’ai lu votre article sur le relevé topographique et j’ai une question :",
  },
  {
    slug: "informations-a-preparer-avant-de-contacter-un-geometre",
    title: "Quelles informations préparer avant de contacter un géomètre ?",
    excerpt:
      "Quelques éléments simples suffisent pour un premier échange utile. Voici lesquels, et pourquoi ils comptent.",
    readingMinutes: 3,
    image: "articleInformations",
    relatedService: "prestations-foncieres",
    sections: [
      {
        heading: "Vous n’avez pas besoin d’un dossier complet",
        paragraphs: [
          "Beaucoup de personnes attendent d’avoir tous leurs documents avant d’écrire. Ce n’est pas nécessaire : le premier échange sert justement à identifier ce qui manque.",
        ],
      },
      {
        heading: "Les informations qui font gagner du temps",
        paragraphs: ["Pour un premier message, préparez si possible :"],
        list: [
          "la localité du terrain, avec le quartier ou un point de repère ;",
          "une description de votre projet ou de votre question, avec vos mots ;",
          "la superficie approximative, si vous la connaissez ;",
          "des photos lisibles des documents dont vous disposez ;",
          "vos délais, s’il y en a.",
        ],
      },
      {
        heading: "Pourquoi la localité compte autant",
        paragraphs: [
          "Elle permet au cabinet de savoir s’il peut intervenir, d’estimer les déplacements et parfois de connaître le contexte du secteur. Un nom de quartier ou un point de repère connu suffit au départ.",
        ],
      },
      {
        heading: "Et si vous ne savez pas quelle prestation demander ?",
        paragraphs: [
          "Décrivez simplement ce que vous voulez faire : construire, acheter, diviser, vérifier une limite. C’est au géomètre de traduire votre besoin en prestation.",
        ],
      },
    ],
    limits:
      "Cette liste est indicative. Selon votre situation, le cabinet pourra vous demander d’autres informations.",
    question: "Bonjour, j’ai lu votre article sur les informations à préparer et j’ai une question :",
  },
  {
    slug: "plan-de-terrain-ou-delimitation",
    title: "Quelle différence entre un plan de terrain et une intervention de délimitation ?",
    excerpt:
      "Les deux impliquent des mesures, mais ils ne répondent pas à la même question. Voici comment les distinguer.",
    readingMinutes: 4,
    image: "articleDelimitation",
    relatedService: "prestations-foncieres",
    sections: [
      {
        heading: "Deux questions différentes",
        paragraphs: [
          "Un plan de terrain répond à la question « à quoi ressemble ce terrain ? ». Une intervention de délimitation répond à la question « où se trouvent les limites de cette propriété ? ».",
        ],
      },
      {
        heading: "Le plan de terrain",
        paragraphs: [
          "Il représente ce qui existe : dimensions, relief, constructions, végétation. Il sert à concevoir un projet, à estimer des travaux ou à présenter un terrain.",
          "Il ne dit pas à lui seul où passent les limites de propriété, même s’il montre des clôtures ou des murs.",
        ],
      },
      {
        heading: "L’intervention de délimitation",
        paragraphs: [
          "Elle vise à identifier et matérialiser les limites d’une parcelle. Elle s’appuie sur les documents existants, sur les repères présents sur le terrain et, selon les cas, sur une procédure qui associe les voisins et l’administration.",
          "Au Cameroun, les procédures foncières sont encadrées par la réglementation. Le géomètre vous indique celles qui s’appliquent à votre situation.",
        ],
      },
      {
        heading: "Lequel vous faut-il ?",
        paragraphs: ["Quelques repères :"],
        list: [
          "vous préparez la conception d’une construction : le plan de terrain est souvent la première étape ;",
          "vous avez un doute sur une limite ou un voisin : parlez d’abord de délimitation ;",
          "vous achetez un terrain : les deux questions peuvent se poser, à examiner avec le géomètre.",
        ],
      },
    ],
    limits:
      "Cet article simplifie volontairement. Les démarches de délimitation dépendent de la situation foncière de chaque terrain et doivent être étudiées au cas par cas.",
    question: "Bonjour, j’ai lu votre article sur le plan de terrain et la délimitation et j’ai une question :",
  },
  {
    slug: "preparer-son-projet-avant-intervention",
    title: "Pourquoi préparer son projet avant une intervention sur le terrain ?",
    excerpt:
      "Une intervention bien préparée coûte moins cher, prend moins de temps et répond mieux à votre besoin.",
    readingMinutes: 3,
    image: "equipment",
    relatedService: "topographie",
    sections: [
      {
        heading: "Une intervention se prépare au bureau",
        paragraphs: [
          "Avant de se déplacer, le géomètre doit savoir ce qu’il va mesurer, avec quel niveau de détail et pour quel usage. Ces choix déterminent le matériel, la durée et les documents remis.",
        ],
      },
      {
        heading: "Ce que la préparation évite",
        paragraphs: ["Une mission mal cadrée peut conduire à :"],
        list: [
          "un second déplacement pour mesurer ce qui manquait ;",
          "un plan trop détaillé, donc plus coûteux que nécessaire ;",
          "ou au contraire un plan insuffisant pour votre architecte ;",
          "des retards sur le chantier.",
        ],
      },
      {
        heading: "Comment bien préparer",
        paragraphs: [
          "Expliquez le projet dans son ensemble, pas seulement la prestation demandée. Partagez les documents existants, même anciens. Mettez le géomètre en contact avec votre architecte ou votre entreprise si vous en avez une.",
        ],
      },
    ],
    limits:
      "Chaque projet a ses particularités. Le premier échange avec le cabinet permet de cadrer précisément l’intervention.",
    question: "Bonjour, j’ai lu votre article sur la préparation d’un projet et j’ai une question :",
  },
  {
    slug: "expliquer-son-besoin-a-un-geometre",
    title: "Comment expliquer son besoin à un géomètre ?",
    excerpt:
      "Pas besoin de connaître le vocabulaire technique. Voici une façon simple de présenter votre situation.",
    readingMinutes: 3,
    image: "articleEchange",
    relatedService: "prestations-foncieres",
    sections: [
      {
        heading: "Partez de votre objectif",
        paragraphs: [
          "Dites ce que vous voulez faire plutôt que la prestation que vous pensez nécessaire : « je veux construire une maison », « je veux vendre une partie de mon terrain », « mon voisin conteste une limite ».",
        ],
      },
      {
        heading: "Une structure simple en quatre points",
        paragraphs: ["Votre message peut tenir en quelques lignes :"],
        list: [
          "où se trouve le terrain ;",
          "ce que vous voulez faire ;",
          "ce que vous avez déjà (documents, plans, photos) ;",
          "ce qui vous inquiète ou vos questions.",
        ],
      },
      {
        heading: "Un exemple",
        paragraphs: [
          "« Mon terrain se trouve à Douala, secteur de Bonabéri. Je souhaite connaître ses limites avant de construire. J’ai une copie de mon titre et quelques photos. Je ne sais pas par où commencer. »",
          "Avec ces informations, le géomètre peut déjà vous orienter et vous dire ce qu’il faut préparer.",
        ],
      },
    ],
    limits:
      "Ces conseils facilitent le premier contact. Le géomètre vous posera ensuite les questions nécessaires pour bien comprendre votre situation.",
    question: "Bonjour, j’ai lu votre article sur la façon d’expliquer son besoin et j’ai une question :",
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
