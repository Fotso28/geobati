import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { showDraftNotes } from "@/content/site";
import { BorneMark } from "./icons";

/** Annotation courte au-dessus d'un titre, avec repère de borne. */
export function Eyebrow({ children, tone = "dark", className }: { children: React.ReactNode; tone?: "dark" | "light"; className?: string }) {
  return (
    <p className={cn("label flex items-center gap-2.5", tone === "dark" ? "text-slate" : "text-mist", className)}>
      <BorneMark className="size-2.5 shrink-0 text-ochre" />
      <span>{children}</span>
    </p>
  );
}

/** Liste à puces « borne ». */
export function MarkerList({ items, className, tone = "dark" }: { items: string[]; className?: string; tone?: "dark" | "light" }) {
  return (
    <ul className={cn("grid gap-3", className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-3.5">
          <BorneMark className={cn("mt-[0.5em] size-2.5 shrink-0", tone === "dark" ? "text-forest" : "text-ochre")} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; href: string }[] }) {
  return (
    <nav aria-label="Fil d’Ariane" className="label text-[0.66rem] text-slate">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className="text-ink">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.href} className="hover:text-ink">
                    {item.name}
                  </Link>
                  <ChevronRight aria-hidden="true" className="size-3" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

/** Note interne « à valider », visible seulement en développement ou en préversion. */
export function DraftNote({ children, className }: { children: React.ReactNode; className?: string }) {
  if (!showDraftNotes) return null;
  return (
    <p
      className={cn(
        "border border-dashed border-ochre-deep bg-ochre/10 px-3 py-2 font-mono text-[0.72rem] leading-snug text-ochre-ink",
        className,
      )}
    >
      <strong className="font-semibold">À valider · </strong>
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  tone = "dark",
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  tone?: "dark" | "light";
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("grid gap-4", className)} data-reveal="">
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <Tag className={cn("text-h2", tone === "light" && "text-white")}>{title}</Tag>
      {text && <p className={cn("max-w-[56ch] text-lead", tone === "dark" ? "text-slate" : "text-mist")}>{text}</p>}
    </div>
  );
}
