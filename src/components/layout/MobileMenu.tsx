"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { BookOpen, ChevronRight, Home, Images, Info, Layers, Menu, Phone, X, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import { ServiceIcon, WhatsAppIcon } from "@/components/ui/icons";
import type { ServiceIcon as ServiceIconName } from "@/content/services";
import { Logo } from "./Logo";
import { isActive } from "./NavLinks";

type NavItem = { href: string; label: string };
type ServiceLink = { slug: string; shortName: string; icon: ServiceIconName };

const navIcons: Record<string, LucideIcon> = {
  "/": Home,
  "/services": Layers,
  "/realisations": Images,
  "/a-propos": Info,
  "/conseils": BookOpen,
  "/contact": Phone,
};

const subscribeNoop = () => () => {};

/**
 * Menu latéral mobile, façon application : panneau qui glisse depuis la droite.
 * Il est rendu à la racine du document (portail) pour ne dépendre d'aucun conteneur.
 */
export function MobileMenu({
  items,
  services,
  whatsappHref,
  phone,
}: {
  items: readonly NavItem[];
  services: ServiceLink[];
  whatsappHref: string;
  /** Numéro d'appel du cabinet. */
  phone?: { href: string; display: string };
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [lastPath, setLastPath] = useState(pathname);
  const panelId = useId();
  const titleId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [drag, setDrag] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  // Le portail n'existe que côté navigateur.
  const mounted = useSyncExternalStore(subscribeNoop, () => true, () => false);

  // Referme le menu après une navigation.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  const close = useCallback(() => {
    setOpen(false);
    setDrag(0);
  }, []);

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    closeRef.current?.focus({ preventScroll: true });

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }
      // Garde le focus clavier dans le panneau.
      if (event.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    const button = buttonRef.current;
    return () => {
      root.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      button?.focus({ preventScroll: true });
    };
  }, [open, close]);

  // Glisser le doigt vers la droite pour fermer.
  const onTouchStart = (event: React.TouchEvent) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };
  const onTouchMove = (event: React.TouchEvent) => {
    if (!touchStart.current) return;
    const touch = event.touches[0];
    const dx = touch.clientX - touchStart.current.x;
    const dy = Math.abs(touch.clientY - touchStart.current.y);
    if (dx > 0 && dx > dy) setDrag(dx);
  };
  const onTouchEnd = () => {
    if (drag > 90) close();
    else setDrag(0);
    touchStart.current = null;
  };

  const drawer = (
    <div className="lg:hidden" aria-hidden={!open} inert={!open}>
      {/* Fond assombri */}
      <div
        onClick={close}
        className={cn(
          "fixed inset-0 z-50 bg-navy-deep/55 backdrop-blur-[2px] transition-opacity duration-300 motion-reduce:transition-none",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      {/* Panneau latéral */}
      <div
        id={panelId}
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={drag ? { transform: `translateX(${drag}px)`, transition: "none" } : undefined}
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-[22rem] flex-col bg-white shadow-[-24px_0_60px_-20px_rgb(2_42_64/0.45)] transition-transform duration-300 ease-survey motion-reduce:transition-none",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <h2 id={titleId} className="sr-only">
          Menu
        </h2>

        {/* En-tête du panneau */}
        <div className="flex h-[4.5rem] shrink-0 items-center justify-between border-b border-line pr-[max(0.75rem,env(safe-area-inset-right,0px))] pl-5 pt-[env(safe-area-inset-top,0px)]">
          <Logo className="h-11" />
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            className="inline-flex size-11 items-center justify-center text-navy hover:bg-paper-2"
          >
            <X aria-hidden="true" className="size-6" />
            <span className="sr-only">Fermer le menu</span>
          </button>
        </div>

        {/* Liens */}
        <nav aria-label="Navigation mobile" className="flex-1 overflow-y-auto overscroll-contain px-3 py-4">
          <ul className="grid gap-1">
            {items.map((item) => {
              const active = isActive(pathname, item.href);
              const Icon = navIcons[item.href] ?? ChevronRight;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={close}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative flex h-13 items-center gap-4 px-3 text-[1.08rem] font-semibold transition-colors",
                      active ? "bg-tint text-navy" : "text-ink hover:bg-paper",
                    )}
                  >
                    {active && <span aria-hidden="true" className="absolute inset-y-2 left-0 w-[3px] bg-teal" />}
                    <Icon aria-hidden="true" strokeWidth={1.75} className={cn("size-5 shrink-0", active ? "text-teal-deep" : "text-slate")} />
                    <span className="flex-1">{item.label}</span>
                    <ChevronRight aria-hidden="true" className="size-4 text-line-strong" />
                  </Link>
                </li>
              );
            })}
          </ul>

          <p className="label mt-6 mb-2 px-3 text-slate">Nos prestations</p>
          <ul className="grid grid-cols-2 gap-2 px-1">
            {services.map((service) => {
              const href = `/services/${service.slug}`;
              const active = pathname === href;
              return (
                <li key={service.slug}>
                  <Link
                    href={href}
                    onClick={close}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex h-full items-center gap-2.5 border px-3 py-3 text-[0.92rem] font-medium leading-tight transition-colors",
                      active ? "border-teal bg-tint text-navy" : "border-line text-ink hover:border-navy",
                    )}
                  >
                    <ServiceIcon name={service.icon} className="size-[1.1rem] shrink-0 text-teal-deep" />
                    {service.shortName}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Actions */}
        <div className="grid shrink-0 gap-2.5 border-t border-line bg-paper px-4 pt-4 pb-[max(1rem,env(safe-area-inset-bottom,0px))]">
          <Link
            href="/demande-de-devis"
            onClick={close}
            className="flex h-13 items-center justify-center rounded-xs bg-teal font-semibold text-teal-ink"
          >
            Demander un devis
          </Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-13 items-center justify-center gap-2.5 rounded-xs bg-whatsapp font-semibold text-white"
          >
            <WhatsAppIcon className="size-5" />
            Écrire sur WhatsApp
          </a>
          {phone && (
            <a
              href={`tel:${phone.href}`}
              className="flex h-11 items-center justify-center gap-2 text-[0.95rem] font-semibold text-navy"
            >
              <Phone aria-hidden="true" className="size-4" />
              Appeler le {phone.display}
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
        className="inline-flex h-11 items-center gap-2 rounded-xs border border-line px-3 text-navy hover:border-navy"
      >
        <Menu aria-hidden="true" className="size-5" />
        <span className="text-[0.9rem] font-semibold">Menu</span>
      </button>
      {mounted && createPortal(drawer, document.body)}
    </div>
  );
}
