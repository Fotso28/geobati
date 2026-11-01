"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { RealisationCard, type RealisationCardData } from "./RealisationCard";

type Category = { key: string; label: string };

/** Grille des réalisations avec filtres par type de mission. */
export function RealisationsExplorer({
  items,
  categories,
}: {
  items: (RealisationCardData & { category: string })[];
  categories: Category[];
}) {
  const [active, setActive] = useState<string>("tous");
  const visible = active === "tous" ? items : items.filter((item) => item.category === active);
  const filters = [{ key: "tous", label: "Toutes" }, ...categories.filter((c) => items.some((item) => item.category === c.key))];

  return (
    <div className="grid gap-10">
      <div role="group" aria-label="Filtrer par type de mission" className="flex flex-wrap gap-2">
        {filters.map((filter) => {
          const count = filter.key === "tous" ? items.length : items.filter((item) => item.category === filter.key).length;
          const selected = active === filter.key;
          return (
            <button
              key={filter.key}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(filter.key)}
              className={cn(
                "inline-flex h-10 items-center gap-2 border px-4 text-[0.92rem] font-medium transition-colors",
                selected ? "border-forest bg-forest text-white" : "border-line-strong bg-white/60 hover:border-forest",
              )}
            >
              {filter.label}
              <span className={cn("font-mono text-[0.72rem]", selected ? "text-mist" : "text-slate")}>{count}</span>
            </button>
          );
        })}
      </div>
      <p className="sr-only" aria-live="polite">
        {visible.length} réalisation{visible.length > 1 ? "s" : ""} affichée{visible.length > 1 ? "s" : ""}
      </p>
      <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => (
          <li key={item.slug}>
            <RealisationCard item={item} headingLevel="h2" />
          </li>
        ))}
      </ul>
    </div>
  );
}
