import type { Metadata } from "next";
import { about } from "@/content/about";
import { site } from "@/content/site";
import { getImage } from "@/lib/images";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { whatsappUrl, generalMessage } from "@/lib/whatsapp";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { ButtonLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { DraftNote, JsonLd, SectionHeading } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Le cabinet et son équipe",
  description:
    "Découvrez le cabinet de géomètre GeoBati : sa démarche, son équipe et le matériel utilisé pour vos projets de terrain au Cameroun.",
  alternates: { canonical: "/a-propos" },
};

const breadcrumbs = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/a-propos" },
];

export default function AboutPage() {
  const zones = site.serviceAreas;

  return (
    <>
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Le cabinet"
        title="Mesurer avec précision, expliquer avec clarté."
        text={about.mission.text}
        image={getImage("office")}
      />

      {/* Présentation */}
      <section className="py-20 md:py-24">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Présentation" title={`Qui est ${site.name} ?`} />
          </div>
          <div className="grid gap-8 lg:col-span-8">
            <div className="prose-gb text-lead text-slate" data-reveal="">
              {about.intro.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {about.intro.draft && (
              <DraftNote>Remplacer par le nom réel, l’histoire et la mission du cabinet.</DraftNote>
            )}
            <dl className="grid gap-px border border-line bg-line sm:grid-cols-2" data-reveal="">
              <div className="grid gap-2 bg-paper p-6">
                <dt className="label text-slate">Zones d’intervention</dt>
                <dd>
                  {zones.length
                    ? zones.join(", ")
                    : "Indiquez la localité de votre terrain : nous vous confirmons les possibilités d’intervention."}
                </dd>
              </div>
              <div className="grid gap-2 bg-paper p-6">
                <dt className="label text-slate">Premier contact</dt>
                <dd>Par WhatsApp, avec une description de votre projet et la localité du terrain.</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Mot du responsable */}
      <section className="border-y border-line bg-white py-20 md:py-24">
        <div className="shell grid gap-12 md:grid-cols-12 md:items-center md:gap-14">
          <div className="md:col-span-4" data-reveal="">
            <div className="corner-marks text-forest">
              <Photo image={getImage("manager")} sizes="(min-width: 768px) 30vw, 100vw" className="aspect-[4/5]" />
            </div>
          </div>
          <figure className="grid gap-8 md:col-span-8">
            <p className="label text-slate" data-reveal="">
              Mot du responsable
            </p>
            <blockquote
              className="max-w-[28ch] text-[clamp(1.6rem,1.2rem+1.6vw,2.6rem)] leading-[1.12] font-[560] tracking-[-0.02em] [font-stretch:90%]"
              data-reveal=""
            >
              «&nbsp;{about.manager.quote}&nbsp;»
            </blockquote>
            <figcaption className="grid gap-0.5" data-reveal="">
              {about.manager.name && <span className="font-semibold">{about.manager.name}</span>}
              <span className="text-slate">{about.manager.role}</span>
            </figcaption>
            {about.manager.draft && <DraftNote>Texte à valider ou à remplacer par les mots du responsable, avec son nom.</DraftNote>}
          </figure>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-20 md:py-24">
        <div className="shell grid gap-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <SectionHeading eyebrow="L’équipe" title="Des interlocuteurs que vous connaissez" text={about.teamText.text} />
            </div>
            <div className="lg:col-span-6" data-reveal="">
              <Photo image={getImage("team")} sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[16/10]" />
            </div>
          </div>
          {about.team.length > 0 ? (
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {about.team.map((member) => (
                <li key={member.name} className="grid gap-2 border-t border-line pt-5" data-reveal="">
                  <p className="text-h3">{member.name}</p>
                  <p className="label text-forest">{member.role}</p>
                  <p className="text-slate">{member.bio}</p>
                </li>
              ))}
            </ul>
          ) : (
            <DraftNote>Ajouter les membres que le cabinet souhaite présenter (photo, nom, fonction, courte présentation).</DraftNote>
          )}
        </div>
      </section>

      {/* Moyens et équipements */}
      <section className="grid-paper border-y border-line py-20 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="grid content-start gap-6 lg:col-span-4">
            <SectionHeading
              eyebrow="Moyens"
              title="Le matériel de nos missions"
              text="Chaque mission demande l’instrument adapté à la surface, au relief et à la précision recherchée."
            />
            <div data-reveal="">
              <Photo image={getImage("equipment")} sizes="(min-width: 1024px) 28vw, 100vw" className="aspect-[4/3]" />
            </div>
            <p className="text-slate" data-reveal="">
              {about.equipment.software}
            </p>
            {about.equipment.draft && <DraftNote>Ne garder que le matériel réellement utilisé par le cabinet.</DraftNote>}
          </div>
          <dl className="grid gap-px self-start border border-line bg-line sm:grid-cols-2 lg:col-span-8">
            {about.equipment.items.map((item) => (
              <div key={item.name} className="grid content-start gap-4 bg-paper p-6 md:p-8" data-reveal="">
                <Photo image={getImage(item.image)} sizes="(min-width: 1024px) 26vw, (min-width: 640px) 45vw, 90vw" className="aspect-[4/3] bg-white" />
                <dt className="text-h3">{item.name}</dt>
                <dd className="text-slate">{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Qualifications : uniquement après vérification */}
      {about.credentials.length > 0 ? (
        <section className="py-20 md:py-24">
          <div className="shell grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading eyebrow="Références" title="Qualifications et références" />
            </div>
            <dl className="grid gap-6 lg:col-span-8">
              {about.credentials.map((credential) => (
                <div key={credential.label} className="grid gap-1 border-t border-line pt-5" data-reveal="">
                  <dt className="font-semibold">{credential.label}</dt>
                  <dd className="text-slate">{credential.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      ) : (
        <div className="shell py-8">
          <DraftNote>
            Section « Qualifications et références » masquée : elle apparaîtra dès que les agréments et inscriptions
            professionnelles vérifiés seront ajoutés dans src/content/about.ts.
          </DraftNote>
        </div>
      )}

      <CtaBand
        eyebrow="Échanger"
        title="Parlons de votre projet de terrain."
        text="Décrivez votre situation : nous vous répondons et vous indiquons la suite."
      >
        <ButtonLink href={whatsappUrl(generalMessage)} icon="whatsapp" size="lg">
          Échanger avec notre équipe
        </ButtonLink>
        <ButtonLink href="/contact" variant="outline-light" size="lg">
          Nous contacter
        </ButtonLink>
      </CtaBand>

      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
    </>
  );
}
