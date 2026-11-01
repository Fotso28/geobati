import type { FaqItem } from "./services";

/** Engagements du cabinet, à valider avec lui. */
export const commitments = [
  {
    title: "Écoute",
    text: "Comprendre votre projet et votre terrain avant de proposer une démarche.",
  },
  {
    title: "Précision",
    text: "Employer des méthodes et un matériel adaptés à chaque mission.",
  },
  {
    title: "Clarté",
    text: "Expliquer les étapes, les documents attendus et les résultats remis.",
  },
  {
    title: "Proximité",
    text: "Rester joignable et répondre à vos questions tout au long de la mission.",
  },
];

/** Les trois temps du premier contact. */
export const processSteps = [
  {
    title: "Vous nous expliquez votre besoin",
    text: "Par WhatsApp, avec vos mots. Une localité et quelques lignes suffisent.",
  },
  {
    title: "Nous échangeons sur votre terrain",
    text: "Nous vous posons les bonnes questions et regardons les documents disponibles.",
  },
  {
    title: "Nous définissons la suite",
    text: "Vous savez quelle intervention convient, comment elle se déroule et ce qu’elle coûte.",
  },
];

export const homeFaq: FaqItem[] = [
  {
    question: "Comment savoir quelle prestation me convient ?",
    answer:
      "Vous n’avez pas besoin de le savoir à l’avance. Décrivez ce que vous voulez faire (construire, acheter, diviser, vérifier une limite) et nous vous orienterons vers la prestation adaptée.",
  },
  {
    question: "Quels documents préparer pour mon premier échange ?",
    answer:
      "La localité du terrain, une courte description de votre situation et, si vous en avez, des photos de vos documents. Nous vous dirons ensuite ce qui est utile pour la suite.",
  },
  {
    question: "Le cabinet intervient-il dans ma localité ?",
    answer:
      "Précisez la ville et le quartier de votre terrain dans votre message : nous vous confirmerons rapidement les possibilités d’intervention.",
  },
  {
    question: "Comment obtenir un devis ?",
    answer:
      "Remplissez le formulaire de demande ou écrivez-nous sur WhatsApp. Après un premier échange sur votre besoin, nous vous proposons un devis adapté.",
  },
];
