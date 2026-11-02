"use client";

import { usePathname } from "next/navigation";
import { WhatsAppIcon } from "@/components/ui/icons";

/** Bouton WhatsApp toujours accessible, sauf sur la page du formulaire qui mène déjà à WhatsApp. */
export function WhatsAppFloat({ href }: { href: string }) {
  const pathname = usePathname();
  if (pathname === "/demande-de-devis") return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed right-[max(1rem,env(safe-area-inset-right,0px))] bottom-[max(1rem,env(safe-area-inset-bottom,0px))] z-30 inline-flex h-14 items-center gap-3 rounded-xs bg-whatsapp pr-4 pl-4 text-white shadow-[0_10px_30px_-10px_rgb(2_42_64/0.5)] transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#189749] sm:pr-5"
    >
      <WhatsAppIcon className="size-6 shrink-0" />
      <span className="sr-only sm:not-sr-only sm:text-[0.95rem] sm:font-semibold">Écrire sur WhatsApp</span>
    </a>
  );
}
