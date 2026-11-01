import Link from "next/link";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

/** Logotype provisoire : borne vue de dessus + nom du cabinet. */
export function Logo({ className, tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  return (
    <Link href="/" className={cn("group inline-flex items-center gap-2.5", className)} aria-label={`${site.name}, retour à l’accueil`}>
      <svg viewBox="0 0 28 28" aria-hidden="true" className="size-7 shrink-0">
        <rect x="2" y="2" width="24" height="24" fill="none" stroke="var(--color-ochre)" strokeWidth="2.2" />
        <path d="M14 7v14M7 14h14" stroke={tone === "light" ? "var(--color-white)" : "var(--color-forest)"} strokeWidth="1.4" />
        <rect x="11.5" y="11.5" width="5" height="5" fill="var(--color-ochre)" />
      </svg>
      <span
        className={cn(
          "text-[1.32rem] leading-none font-[680] tracking-[-0.03em] [font-stretch:82%]",
          tone === "light" ? "text-white" : "text-ink",
        )}
      >
        Geo<span className="text-ochre">Bati</span>
      </span>
    </Link>
  );
}
