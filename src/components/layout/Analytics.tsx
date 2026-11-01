"use client";

import { useEffect } from "react";

type TrackingWindow = Window & {
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
  dataLayer?: unknown[];
};

/**
 * Mesure des ouvertures de WhatsApp, sans charger de script tiers.
 * Si Google Analytics (gtag), Meta Pixel (fbq) ou Google Tag Manager (dataLayer)
 * sont ajoutés plus tard, l'événement leur est transmis automatiquement.
 */
export function Analytics() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a[href*='wa.me']");
      if (!link) return;
      const w = window as TrackingWindow;
      const detail = { page: window.location.pathname };
      w.gtag?.("event", "whatsapp_click", detail);
      w.fbq?.("track", "Contact", detail);
      w.dataLayer?.push({ event: "whatsapp_click", ...detail });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
