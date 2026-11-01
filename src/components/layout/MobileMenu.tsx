"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { WhatsAppIcon } from "@/components/ui/icons";
import { isActive } from "./NavLinks";

type NavItem = { href: string; label: string };

export function MobileMenu({ items, whatsappHref }: { items: readonly NavItem[]; whatsappHref: string }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [lastPath, setLastPath] = useState(pathname);

  // Referme le menu après une navigation.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-11 items-center justify-center text-white"
      >
        {open ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
        <span className="sr-only">{open ? "Fermer le menu" : "Ouvrir le menu"}</span>
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="fixed inset-x-0 top-[4.25rem] bottom-0 z-40 overflow-y-auto bg-forest-deep"
      >
        <nav aria-label="Navigation mobile" className="shell flex min-h-full flex-col gap-8 py-8">
          <ul className="border-t border-forest-line">
            {items.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href} className="border-b border-forest-line">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between py-4 text-[1.6rem] font-[620] tracking-[-0.02em] [font-stretch:88%]",
                      active ? "text-ochre" : "text-white",
                    )}
                  >
                    {item.label}
                    <ArrowRight aria-hidden="true" className="size-5 text-mist" />
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-auto grid gap-3 pb-[env(safe-area-inset-bottom,0px)]">
            <Link
              href="/demande-de-devis"
              className="flex h-14 items-center justify-center gap-2 rounded-xs bg-ochre font-semibold text-ochre-ink"
            >
              Demander un devis
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center justify-center gap-2.5 rounded-xs border border-mist/50 font-semibold text-white"
            >
              <WhatsAppIcon className="size-5" />
              Écrire sur WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
