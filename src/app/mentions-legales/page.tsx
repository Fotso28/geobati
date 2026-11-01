import type { Metadata } from "next";
import { site } from "@/content/site";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Mentions légales",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage
      title="Mentions légales"
      href="/mentions-legales"
      note="Page à compléter avec les informations officielles du cabinet (raison sociale, immatriculation, responsable de publication, hébergeur)."
      sections={[
        {
          heading: "Éditeur du site",
          body: [
            `Le site ${site.name} est édité par ${site.legalName ?? "le cabinet (raison sociale à compléter)"}.`,
            "Adresse, numéro d’immatriculation et responsable de la publication : à compléter.",
          ],
        },
        {
          heading: "Hébergement",
          body: ["Nom et coordonnées de l’hébergeur : à compléter."],
        },
        {
          heading: "Propriété intellectuelle",
          body: [
            "Les textes, logos et éléments graphiques de ce site sont la propriété du cabinet, sauf mention contraire. Toute reproduction sans autorisation est interdite.",
          ],
        },
        {
          heading: "Photographies",
          body: [
            "Les images signalées « Illustration » ou « Exemple illustratif » ne représentent pas des réalisations du cabinet. Les photos de projets réels sont publiées avec l’accord des personnes concernées.",
          ],
        },
        {
          heading: "Contenus informatifs",
          body: [
            "Les articles de conseil ont une portée générale et ne remplacent pas l’étude d’une situation particulière par un professionnel.",
          ],
        },
      ]}
    />
  );
}
