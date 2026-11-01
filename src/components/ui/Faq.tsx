import { Plus } from "lucide-react";
import type { FaqItem } from "@/content/services";

/** Questions fréquentes : accordéon natif, une réponse ouverte à la fois. */
export function Faq({ items, group }: { items: FaqItem[]; group: string }) {
  return (
    <div className="border-t border-line">
      {items.map((item) => (
        <details key={item.question} name={group} className="group border-b border-line" data-reveal="">
          <summary className="flex items-start justify-between gap-6 py-5 text-[1.08rem] font-semibold leading-snug tracking-[-0.01em] hover:text-forest-soft">
            <span>{item.question}</span>
            <Plus
              aria-hidden="true"
              strokeWidth={1.75}
              className="mt-0.5 size-5 shrink-0 text-forest transition-transform duration-300 ease-survey group-open:rotate-45"
            />
          </summary>
          <p className="prose-gb pb-6 pr-10 text-slate">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
