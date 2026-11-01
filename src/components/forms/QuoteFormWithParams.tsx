"use client";

import { useSearchParams } from "next/navigation";
import { QuoteForm, type QuoteOption } from "./QuoteForm";

/** Lit ?service= et ?ref= dans l'adresse pour préremplir le formulaire. */
export function QuoteFormWithParams({ options, references }: { options: QuoteOption[]; references: Record<string, string> }) {
  const params = useSearchParams();
  const service = params.get("service") ?? undefined;
  const ref = params.get("ref");
  const reference = ref ? references[ref] : undefined;
  return <QuoteForm key={`${service}-${ref}`} options={options} initialService={service} reference={reference} />;
}
