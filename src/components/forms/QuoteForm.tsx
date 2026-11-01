"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Copy } from "lucide-react";
import { cn } from "@/lib/cn";
import { buildQuoteMessage, whatsappUrl } from "@/lib/whatsapp";
import { site, showDraftNotes } from "@/content/site";
import { ServiceIcon, WhatsAppIcon } from "@/components/ui/icons";
import type { ServiceIcon as ServiceIconName } from "@/content/services";

export type QuoteOption = { slug: string; name: string; icon?: ServiceIconName; hint?: string };

type QuoteFormProps = {
  options: QuoteOption[];
  initialService?: string;
  /** Titre d'une réalisation, quand le visiteur arrive depuis « J'ai un projet similaire ». */
  reference?: string;
};

const STEP_TITLES = ["Quel est votre besoin ?", "Où se trouve votre projet ?", "Comment vous appeler ?"];

export function QuoteForm({ options, initialService, reference }: QuoteFormProps) {
  const uid = useId();
  const validInitial = options.some((option) => option.slug === initialService) ? initialService! : "";
  const [step, setStep] = useState(0);
  const [service, setService] = useState(validInitial);
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [description, setDescription] = useState(reference ? `Projet similaire à « ${reference} ».` : "");
  const [name, setName] = useState("");
  const [extra, setExtra] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const heading = headingRef.current;
    if (!heading) return;
    heading.focus({ preventScroll: true });
    if (heading.getBoundingClientRect().top < 80) {
      heading.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [step]);

  const selected = options.find((option) => option.slug === service);
  const message = buildQuoteMessage({
    name: name || "…",
    need: selected?.slug === "a-definir" ? "Je ne sais pas encore, à définir ensemble" : (selected?.name ?? "…"),
    city: city || "…",
    district,
    description,
    extra,
  });
  const waHref = whatsappUrl(message);

  const fieldId = (key: string) => `${uid}-${key}`;

  function next(event: React.FormEvent) {
    event.preventDefault();
    if (step === 0 && !service) return setError("Choisissez le besoin qui se rapproche le plus de votre situation.");
    if (step === 1 && !city.trim()) return setError("Indiquez la ville ou la localité du terrain.");
    setError(null);
    setStep((value) => Math.min(value + 1, 2));
  }

  function back() {
    setError(null);
    setStep((value) => Math.max(value - 1, 0));
  }

  function onOpenWhatsApp(event: React.MouseEvent<HTMLAnchorElement>) {
    if (!name.trim()) {
      event.preventDefault();
      setError("Indiquez votre nom ou votre prénom pour que le cabinet sache à qui répondre.");
      document.getElementById(fieldId("name"))?.focus();
    }
  }

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <form onSubmit={next} noValidate className="grid gap-8 border border-line bg-white p-6 md:p-9" aria-labelledby={fieldId("title")}>
      {/* Progression */}
      <div className="grid gap-3">
        <p className="label flex justify-between text-slate">
          <span>
            Étape {step + 1} sur 3
          </span>
          <span className="hidden sm:inline">Environ 1 minute</span>
        </p>
        <ol className="grid grid-cols-3 gap-1.5" aria-hidden="true">
          {STEP_TITLES.map((title, index) => (
            <li key={title} className={cn("h-1 transition-colors duration-300", index <= step ? "bg-ochre" : "bg-line")} />
          ))}
        </ol>
      </div>

      <h2
        id={fieldId("title")}
        ref={headingRef}
        tabIndex={-1}
        className="text-[clamp(1.55rem,1.3rem+1vw,2.1rem)] leading-tight outline-none"
      >
        {STEP_TITLES[step]}
      </h2>

      {step === 0 && (
        <fieldset className="grid gap-2.5">
          <legend className="sr-only">{STEP_TITLES[0]}</legend>
          {options.map((option) => {
            const checked = service === option.slug;
            return (
              <label
                key={option.slug}
                className={cn(
                  "flex cursor-pointer items-center gap-4 border px-4 py-3.5 transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ochre-deep",
                  checked ? "border-forest bg-forest text-white" : "border-line-strong hover:border-forest",
                )}
              >
                <input
                  type="radio"
                  name={fieldId("service")}
                  value={option.slug}
                  checked={checked}
                  onChange={() => {
                    setService(option.slug);
                    setError(null);
                  }}
                  className="sr-only"
                />
                <span
                  aria-hidden="true"
                  className={cn(
                    "flex size-9 shrink-0 items-center justify-center border",
                    checked ? "border-forest-line bg-forest-soft text-ochre" : "border-line text-forest",
                  )}
                >
                  {option.icon ? <ServiceIcon name={option.icon} className="size-[1.15rem]" /> : <span className="font-mono text-sm">?</span>}
                </span>
                <span className="grid">
                  <span className="font-semibold">{option.name}</span>
                  {option.hint && <span className={cn("text-[0.88rem]", checked ? "text-mist" : "text-slate")}>{option.hint}</span>}
                </span>
                <Check aria-hidden="true" className={cn("ml-auto size-5 shrink-0 text-ochre", !checked && "invisible")} />
              </label>
            );
          })}
        </fieldset>
      )}

      {step === 1 && (
        <div className="grid gap-5">
          <Field id={fieldId("city")} label="Ville ou localité" required>
            <input
              id={fieldId("city")}
              value={city}
              onChange={(event) => setCity(event.target.value)}
              autoComplete="address-level2"
              placeholder="Ex. Douala, Yaoundé, Kribi…"
              aria-invalid={Boolean(error) && !city.trim()}
              className={inputClass}
            />
          </Field>
          <Field id={fieldId("district")} label="Quartier ou indication complémentaire">
            <input
              id={fieldId("district")}
              value={district}
              onChange={(event) => setDistrict(event.target.value)}
              placeholder="Ex. Bonabéri, près du carrefour…"
              className={inputClass}
            />
          </Field>
          <Field id={fieldId("description")} label="Décrivez votre situation">
            <textarea
              id={fieldId("description")}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              rows={4}
              placeholder="Ex. Je souhaite connaître les limites de mon terrain avant de construire."
              className={cn(inputClass, "h-auto py-3 leading-relaxed")}
            />
          </Field>
        </div>
      )}

      {step === 2 && (
        <div className="grid gap-7">
          <div className="grid gap-5">
            <Field id={fieldId("name")} label="Nom ou prénom" required>
              <input
                id={fieldId("name")}
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                  if (event.target.value.trim()) setError(null);
                }}
                autoComplete="name"
                aria-invalid={Boolean(error) && !name.trim()}
                className={inputClass}
              />
            </Field>
            <Field id={fieldId("extra")} label="Informations complémentaires">
              <input
                id={fieldId("extra")}
                value={extra}
                onChange={(event) => setExtra(event.target.value)}
                placeholder="Ex. disponible le matin, délai souhaité…"
                className={inputClass}
              />
            </Field>
          </div>

          <div className="grid gap-3">
            <p className="label text-slate">Aperçu du message</p>
            <MessagePreview text={message} />
          </div>
        </div>
      )}

      {error && (
        <p role="alert" className="-mt-2 border-l-2 border-ochre-deep pl-3 text-[0.95rem] text-ink">
          {error}
        </p>
      )}

      {/* Actions */}
      <div className="flex flex-col-reverse gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        {step > 0 ? (
          <button type="button" onClick={back} className="inline-flex h-12 items-center gap-2 font-semibold text-slate hover:text-ink">
            <ArrowLeft aria-hidden="true" className="size-4" />
            Retour
          </button>
        ) : (
          <span />
        )}

        {step < 2 ? (
          <button
            type="submit"
            className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-xs bg-forest px-6 font-semibold text-white transition-colors hover:bg-forest-soft"
          >
            Continuer
            <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
          </button>
        ) : (
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={copyMessage}
              className="inline-flex h-12 items-center justify-center gap-2 font-semibold text-slate hover:text-ink"
            >
              {copied ? <Check aria-hidden="true" className="size-4 text-forest" /> : <Copy aria-hidden="true" className="size-4" />}
              {copied ? "Message copié" : "Copier le message"}
            </button>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onOpenWhatsApp}
              className="inline-flex h-14 items-center justify-center gap-2.5 rounded-xs bg-ochre px-6 font-semibold text-ochre-ink transition-colors hover:bg-ochre-deep"
            >
              <WhatsAppIcon className="size-5" />
              Ouvrir WhatsApp avec ce message
            </a>
          </div>
        )}
      </div>

      {step === 2 && (
        <p className="-mt-4 text-[0.9rem] text-slate">
          WhatsApp s’ouvre avec votre message prêt. Relisez-le, puis appuyez sur Envoyer : rien n’est transmis sans votre
          action.
        </p>
      )}

      {showDraftNotes && !site.whatsappNumber && (
        <p className="border border-dashed border-ochre-deep bg-ochre/10 px-3 py-2 font-mono text-[0.72rem] text-ochre-ink">
          <strong>À configurer · </strong>numéro WhatsApp absent (NEXT_PUBLIC_WHATSAPP_NUMBER). Sans lui, WhatsApp demande au
          visiteur de choisir un contact.
        </p>
      )}
    </form>
  );
}

const inputClass =
  "h-12 w-full rounded-xs border border-line-strong bg-paper px-4 text-[1rem] text-ink placeholder:text-slate/60 transition-colors focus:border-forest focus:bg-white focus:outline-none aria-[invalid=true]:border-ochre-deep";

function Field({ id, label, required, children }: { id: string; label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="flex items-baseline justify-between gap-3 text-[0.95rem] font-semibold">
        {label}
        <span className="label text-[0.62rem] font-normal text-slate">{required ? "Obligatoire" : "Facultatif"}</span>
      </label>
      {children}
    </div>
  );
}

/** Rend le message comme dans WhatsApp : les *libellés* en gras. */
function MessagePreview({ text }: { text: string }) {
  return (
    <div className="relative border-l-2 border-whatsapp bg-[#eef3ee] px-5 py-4 text-[0.97rem] leading-relaxed">
      {text.split("\n").map((line, index) => {
        if (!line) return <br key={index} />;
        const match = line.match(/^\*(.+?)\*\s?(.*)$/);
        return (
          <p key={index}>
            {match ? (
              <>
                <strong className="font-semibold">{match[1]}</strong> {match[2]}
              </>
            ) : (
              line
            )}
          </p>
        );
      })}
    </div>
  );
}
