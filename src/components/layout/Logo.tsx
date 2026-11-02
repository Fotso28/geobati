import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import logoCouleur from "../../../public/brand/logo-couleur.png";
import logoClair from "../../../public/brand/logo-clair.png";

/**
 * Logo du cabinet. `color` pour les fonds clairs, `light` (marine passé en blanc)
 * pour les fonds bleu marine.
 */
export function Logo({
  className,
  variant = "color",
  priority = false,
}: {
  className?: string;
  variant?: "color" | "light";
  priority?: boolean;
}) {
  return (
    <Link href="/" className={cn("inline-flex shrink-0 items-center", className)} aria-label={`${site.name}, retour à l’accueil`}>
      <Image
        src={variant === "color" ? logoCouleur : logoClair}
        alt={`${site.name} · ${site.tagline}`}
        sizes="180px"
        preload={priority}
        className="h-full w-auto"
      />
    </Link>
  );
}
