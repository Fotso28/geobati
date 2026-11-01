import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  alternates: { canonical: "/confidentialite" },
  robots: { index: false },
};

export default function ConfidentialitePage() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      href="/confidentialite"
      note="Texte de départ à faire valider. À mettre à jour si un outil de mesure d’audience ou un formulaire enregistré est ajouté."
      sections={[
        {
          heading: "Données saisies dans les formulaires",
          body: [
            "Les formulaires du site ne stockent aucune donnée. Ils préparent un message que vous envoyez vous-même depuis votre application WhatsApp.",
            "Les informations que vous choisissez d’envoyer (nom, localité, description du projet) servent uniquement à répondre à votre demande et à préparer un devis.",
          ],
        },
        {
          heading: "WhatsApp",
          body: [
            "Les échanges sur WhatsApp sont soumis aux conditions et à la politique de confidentialité de ce service, édité par une société tierce.",
          ],
        },
        {
          heading: "Cookies et mesure d’audience",
          body: [
            "Le site ne dépose pas de cookie publicitaire. Si un outil de mesure d’audience est ajouté, cette page sera mise à jour pour l’indiquer.",
          ],
        },
        {
          heading: "Vos droits",
          body: [
            "Vous pouvez demander l’accès, la rectification ou la suppression des informations que vous avez transmises au cabinet en le contactant directement.",
          ],
        },
      ]}
    />
  );
}
