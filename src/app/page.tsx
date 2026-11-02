import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/content/services";
import { commitments, homeFaq, processSteps } from "@/content/home";
import { about } from "@/content/about";
import { getImage } from "@/lib/images";
import { faqJsonLd } from "@/lib/jsonld";
import { whatsappUrl, generalMessage } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { TopoLines } from "@/components/ui/TopoLines";
import { Traverse } from "@/components/ui/Traverse";
import { Faq } from "@/components/ui/Faq";
import { ServiceIcon } from "@/components/ui/icons";
import { DraftNote, Eyebrow, JsonLd, SectionHeading } from "@/components/ui/primitives";
import { CtaBand } from "@/components/sections/CtaBand";

export default function HomePage() {
  const hero = getImage("hero");
  const team = getImage("team");
  const interventions = [
    { image: getImage("intervention1"), caption: "Relevé topographique" },
    { image: getImage("intervention2"), caption: "Intervention sur une parcelle" },
    { image: getImage("intervention3"), caption: "Implantation sur chantier" },
  ];

  return (
    <>
      {/* 1. Bannière */}
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <TopoLines preset="hero" className="-z-10 text-navy-line/80" />
        <div className="shell grid gap-12 pt-12 pb-14 md:pt-16 lg:grid-cols-12 lg:gap-10 lg:pt-20 lg:pb-20">
          <div className="grid content-center gap-7 lg:col-span-6">
            <div data-intro="fade">
              <Eyebrow tone="light">Cabinet de géomètre · Cameroun</Eyebrow>
            </div>
            <h1 data-intro="headline" className="text-display max-w-[13ch]">
              Vos projets méritent de partir sur des bases solides.
            </h1>
            <p data-intro="fade" className="max-w-[46ch] text-lead text-mist">
              Bornage, topographie, lotissement et accompagnement foncier : notre cabinet vous aide à mieux comprendre et
              préparer vos projets de terrain au Cameroun.
            </p>
            <div data-intro="fade" className="flex flex-wrap gap-3 pt-1">
              <ButtonLink href="/demande-de-devis" size="lg">
                Parler de mon projet
              </ButtonLink>
              <ButtonLink href="#besoins" variant="outline-light" size="lg" icon="none">
                Découvrir nos services
              </ButtonLink>
            </div>
          </div>
          <figure className="grid gap-4 lg:col-span-6 lg:pl-4">
            <div data-intro="image" className="corner-marks text-teal">
              <Photo
                image={hero}
                preload
                parallax
                badge
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="aspect-[4/3] lg:aspect-[11/10]"
              />
            </div>
            <figcaption data-intro="fade" className="label flex items-center gap-3 text-mist/80">
              <span aria-hidden="true" className="h-px w-8 bg-teal" />
              Mesurer, implanter, contrôler : chaque mission commence sur le terrain
            </figcaption>
          </figure>
        </div>

        {/* Règle graduée : accès direct aux prestations */}
        <nav aria-label="Nos prestations" className="relative border-t border-navy-line/70">
          <div aria-hidden="true" className="ruler-ticks absolute inset-x-0 top-0 h-3 text-navy-line" />
          <ul className="shell grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex items-center gap-2.5 py-5 pt-7 text-[0.95rem] font-medium text-mist transition-colors hover:text-white"
                >
                  <ServiceIcon name={service.icon} className="size-[1.15rem] shrink-0 text-teal" />
                  {service.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {/* 2. Les besoins des visiteurs */}
      <section id="besoins" className="py-20 md:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="grid content-start gap-6 lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
            <SectionHeading
              eyebrow="Vos besoins"
              title="Comment pouvons-nous vous accompagner ?"
              text="Pas besoin de connaître le nom technique de la prestation. Partez de votre situation."
            />
            <div data-reveal="">
              <ButtonLink href="/services" variant="quiet" icon="arrow">
                Voir toutes les prestations
              </ButtonLink>
            </div>
          </div>
          <ul className="border-t border-line lg:col-span-8">
            {services.map((service) => (
              <li key={service.slug} className="border-b border-line" data-reveal="">
                <Link
                  href={`/services/${service.slug}`}
                  className="group grid gap-3 py-6 md:grid-cols-[1fr_auto] md:items-center md:gap-8 md:py-7"
                >
                  <span className="text-[clamp(1.3rem,1.05rem+1vw,1.85rem)] leading-tight font-[600] tracking-[-0.02em] [font-stretch:90%] transition-colors group-hover:text-teal-deep">
                    «&nbsp;{service.need}&nbsp;»
                  </span>
                  <span className="flex items-center gap-3 text-navy">
                    <ServiceIcon name={service.icon} className="size-5 shrink-0" />
                    <span className="label">{service.name}</span>
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 shrink-0 text-teal-deep transition-transform duration-300 ease-survey group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Pourquoi faire appel au cabinet */}
      <section className="border-y border-line bg-white py-20 md:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="grid content-start gap-6 lg:col-span-4">
            <SectionHeading
              eyebrow="Notre démarche"
              title="Pourquoi faire appel au cabinet ?"
              text="Quatre engagements qui guident chaque mission, du premier message à la remise des résultats."
            />
            <DraftNote>
              Engagements à valider avec le cabinet. Qualifications, agréments et années d’expérience ne seront affichés
              qu’après vérification.
            </DraftNote>
          </div>
          <dl className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:col-span-8">
            {commitments.map((item) => (
              <div key={item.title} className="grid content-start gap-4" data-reveal="">
                <div aria-hidden="true" className="cote w-full text-line-strong" />
                <dt className="text-[1.6rem] leading-none font-[640] tracking-[-0.02em] [font-stretch:88%]">{item.title}</dt>
                <dd className="max-w-[38ch] text-slate">{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 4. L'équipe */}
      <section className="py-20 md:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-6" data-reveal="">
            <div className="corner-marks text-navy">
              <Photo image={team} parallax sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[5/4]" />
            </div>
          </div>
          <div className="grid content-center gap-6 lg:col-span-6">
            <SectionHeading eyebrow="Le cabinet" title="Derrière chaque terrain, il y a un projet." />
            <p className="max-w-[52ch] text-lead text-slate" data-reveal="">
              {about.teamText.text}
            </p>
            <div data-reveal="">
              <ButtonLink href="/a-propos" variant="dark">
                Découvrir le cabinet
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Aperçu des interventions */}
      <section className="bg-tint py-20 md:py-28">
        <div className="shell grid gap-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Sur le terrain"
              title="Aperçu de nos interventions"
              text="Relevés, délimitations, implantations : quelques situations que nous accompagnons."
            />
            <div data-reveal="">
              <ButtonLink href="/realisations" variant="outline">
                Voir nos réalisations
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-12">
            {interventions.map((item, index) => (
              <figure
                key={item.caption}
                className={index === 0 ? "grid gap-3 md:col-span-7 md:row-span-2 md:grid-rows-[1fr_auto]" : "grid gap-3 md:col-span-5"}
                data-reveal=""
              >
                <Photo
                  image={item.image}
                  badge
                  sizes={index === 0 ? "(min-width: 768px) 56vw, 100vw" : "(min-width: 768px) 40vw, 100vw"}
                  className={index === 0 ? "aspect-[4/3] md:aspect-auto md:h-full md:min-h-[26rem]" : "aspect-[16/10]"}
                />
                <figcaption className="label text-slate">{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Comment ça marche */}
      <section className="grid-paper border-b border-line py-20 md:py-28">
        <div className="shell grid gap-14">
          <SectionHeading
            eyebrow="Comment ça marche"
            title="De votre question à votre projet"
            text="Trois temps, et vous savez exactement quelle intervention convient à votre terrain."
          />
          <Traverse steps={processSteps} />
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4" data-reveal="">
            <ButtonLink href={whatsappUrl(generalMessage)} icon="whatsapp" size="lg">
              Commencer sur WhatsApp
            </ButtonLink>
            <ButtonLink href="/demande-de-devis" variant="quiet">
              ou préparer ma demande en trois étapes
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* 7. Questions fréquentes */}
      <section className="bg-white py-20 md:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Questions fréquentes" title="Avant de nous écrire" />
          </div>
          <div className="lg:col-span-8">
            <Faq items={homeFaq} group="faq-accueil" />
          </div>
        </div>
        <JsonLd data={faqJsonLd(homeFaq)} />
      </section>

      <CtaBand
        eyebrow="Premier échange"
        title="Expliquez-nous votre besoin, avec vos mots."
        text="Une localité et quelques lignes suffisent pour commencer. Nous vous répondons sur WhatsApp."
      >
        <ButtonLink href="/demande-de-devis" size="lg">
          Parler de mon projet
        </ButtonLink>
        <ButtonLink href={whatsappUrl(generalMessage)} variant="outline-light" icon="whatsapp" size="lg">
          Écrire sur WhatsApp
        </ButtonLink>
      </CtaBand>
    </>
  );
}
