import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <section className="grid-paper border-b border-line">
      <div className="shell grid gap-6 py-24 md:py-32">
        <Eyebrow>Erreur 404 · Point introuvable</Eyebrow>
        <h1 className="text-h1 max-w-[18ch]">Cette page ne figure pas sur notre plan.</h1>
        <p className="max-w-[48ch] text-lead text-slate">
          Le lien est peut-être ancien ou mal saisi. Repartez de l’accueil ou dites-nous directement ce que vous cherchez.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <ButtonLink href="/">Retour à l’accueil</ButtonLink>
          <ButtonLink href="/demande-de-devis" variant="outline">
            Décrire mon besoin
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
