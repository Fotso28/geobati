"use client";

import { useId, useState } from "react";
import { whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/icons";

/** Formulaire court : prépare un message WhatsApp, sans rien enregistrer. */
export function ContactForm({ subjects }: { subjects: string[] }) {
  const uid = useId();
  const [name, setName] = useState("");
  const [subject, setSubject] = useState(subjects[0] ?? "");
  const [text, setText] = useState("");
  const [error, setError] = useState<string | null>(null);

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!name.trim() || !text.trim()) {
      setError("Indiquez votre nom et votre message.");
      return;
    }
    setError(null);
    const message = [
      "Bonjour, je vous contacte depuis votre site.",
      "",
      `*Nom :* ${name.trim()}`,
      `*Sujet :* ${subject}`,
      `*Message :* ${text.trim()}`,
    ].join("\n");
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  const input =
    "h-12 w-full rounded-xs border border-line-strong bg-paper px-4 text-[1rem] focus:border-forest focus:bg-white focus:outline-none";

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 border border-line bg-white p-6 md:p-8">
      <div className="grid gap-2">
        <label htmlFor={`${uid}-name`} className="text-[0.95rem] font-semibold">
          Nom ou prénom
        </label>
        <input id={`${uid}-name`} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" className={input} />
      </div>
      <div className="grid gap-2">
        <label htmlFor={`${uid}-subject`} className="text-[0.95rem] font-semibold">
          Sujet
        </label>
        <select id={`${uid}-subject`} value={subject} onChange={(e) => setSubject(e.target.value)} className={input}>
          {subjects.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
      <div className="grid gap-2">
        <label htmlFor={`${uid}-message`} className="text-[0.95rem] font-semibold">
          Message
        </label>
        <textarea
          id={`${uid}-message`}
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          placeholder="Votre question, la localité du terrain…"
          className={`${input} h-auto py-3 leading-relaxed`}
        />
      </div>
      {error && (
        <p role="alert" className="border-l-2 border-ochre-deep pl-3 text-[0.95rem]">
          {error}
        </p>
      )}
      <button
        type="submit"
        className="inline-flex h-14 items-center justify-center gap-2.5 rounded-xs bg-ochre px-6 font-semibold text-ochre-ink transition-colors hover:bg-ochre-deep"
      >
        <WhatsAppIcon className="size-5" />
        Envoyer via WhatsApp
      </button>
      <p className="text-[0.88rem] text-slate">Le message s’ouvre dans WhatsApp : vous le relisez avant de l’envoyer.</p>
    </form>
  );
}
