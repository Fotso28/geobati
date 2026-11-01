import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { WhatsAppIcon } from "./icons";

type Variant = "primary" | "dark" | "outline" | "outline-light" | "quiet";

const variants: Record<Variant, string> = {
  primary: "bg-ochre text-ochre-ink hover:bg-ochre-deep",
  dark: "bg-forest text-white hover:bg-forest-soft",
  outline: "border border-ink/80 text-ink hover:bg-ink hover:text-paper",
  "outline-light": "border border-mist/60 text-white hover:border-white hover:bg-white/8",
  quiet: "text-ink underline decoration-line-strong underline-offset-[6px] hover:decoration-ochre-deep px-0! h-auto!",
};

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  /** Icône finale : flèche, WhatsApp ou rien. */
  icon?: "arrow" | "whatsapp" | "none";
  className?: string;
  size?: "md" | "lg";
};

export function ButtonLink({ href, children, variant = "primary", icon = "arrow", className, size = "md" }: ButtonLinkProps) {
  const external = /^https?:\/\//.test(href);
  const classes = cn(
    "group inline-flex items-center justify-center gap-2.5 rounded-xs font-semibold tracking-[-0.005em] transition-colors duration-200",
    size === "lg" ? "h-14 px-6 text-[1.02rem]" : "h-12 px-5 text-[0.96rem]",
    variants[variant],
    className,
  );
  const content = (
    <>
      {icon === "whatsapp" && <WhatsAppIcon className="size-[1.15em] shrink-0" />}
      <span>{children}</span>
      {icon === "arrow" && (
        <ArrowRight
          aria-hidden="true"
          strokeWidth={2}
          className="size-[1.05em] shrink-0 transition-transform duration-300 ease-survey group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (/^(tel|mailto):/.test(href)) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
        <span className="sr-only"> (ouvre WhatsApp dans un nouvel onglet)</span>
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
