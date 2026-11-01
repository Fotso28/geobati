"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText, DrawSVGPlugin);

/**
 * Animations de page (GSAP), pilotées par des attributs data-* posés dans le HTML :
 *  - data-intro="headline|fade|image" : séquence d'ouverture de la bannière ;
 *  - data-reveal : apparition douce à l'entrée dans l'écran ;
 *  - data-draw : tracé des courbes de niveau ;
 *  - data-traverse : ligne de cheminement qui se trace au défilement ;
 *  - data-parallax : léger décalage de profondeur sur les photos.
 * Rien ne s'anime si le visiteur a demandé à réduire les animations.
 */
export function PageMotion({ children }: { children: React.ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;
      const q = gsap.utils.selector(root);
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 1. Séquence d'ouverture
        const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

        q<HTMLElement>("[data-intro='image']").forEach((frame) => {
          const media = frame.querySelector("img, [role='img']");
          intro.fromTo(
            frame,
            { autoAlpha: 1, clipPath: "inset(0% 0% 100% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1.25, ease: "power4.inOut", clearProps: "clipPath" },
            0,
          );
          if (media) intro.fromTo(media, { scale: 1.12 }, { scale: 1, duration: 1.6, ease: "power3.out" }, 0);
        });

        q<HTMLElement>("[data-intro='headline']").forEach((headline) => {
          gsap.set(headline, { autoAlpha: 1 });
          SplitText.create(headline, {
            type: "lines",
            mask: "lines",
            autoSplit: true,
            onSplit: (self) =>
              gsap.from(self.lines, { yPercent: 110, duration: 1.05, stagger: 0.09, ease: "power4.out", delay: 0.1 }),
          });
        });

        const fades = q<HTMLElement>("[data-intro='fade']");
        if (fades.length) {
          intro.fromTo(fades, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.08 }, 0.35);
        }

        // 2. Apparitions au défilement
        const reveals = q<HTMLElement>("[data-reveal]");
        if (reveals.length) {
          gsap.set(reveals, { autoAlpha: 0, y: 26 });
          ScrollTrigger.batch(reveals, {
            start: "top 90%",
            once: true,
            onEnter: (batch) =>
              gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.07, ease: "power3.out", overwrite: true }),
          });
        }

        // 3. Courbes de niveau qui se tracent
        q<SVGSVGElement>("[data-draw]").forEach((svg) => {
          gsap.from(svg.querySelectorAll("path"), {
            drawSVG: "0%",
            duration: 2.4,
            stagger: { each: 0.05, from: "end" },
            ease: "power2.inOut",
            scrollTrigger: { trigger: svg, start: "top 85%", once: true },
          });
        });

        // 4. Cheminement : la ligne suit le défilement
        q<HTMLElement>("[data-traverse]").forEach((list) => {
          const line = list.querySelector("[data-traverse-progress]");
          if (!line) return;
          gsap.fromTo(
            line,
            { scaleX: () => (window.innerWidth >= 768 ? 0 : 1), scaleY: () => (window.innerWidth >= 768 ? 1 : 0) },
            {
              scaleX: 1,
              scaleY: 1,
              ease: "none",
              scrollTrigger: { trigger: list, start: "top 78%", end: "bottom 55%", scrub: 0.6, invalidateOnRefresh: true },
            },
          );
        });

        // 5. Profondeur des photos
        q<HTMLElement>("[data-parallax]").forEach((layer) => {
          gsap.fromTo(
            layer,
            { yPercent: -5 },
            {
              yPercent: 5,
              ease: "none",
              scrollTrigger: { trigger: layer.parentElement, start: "top bottom", end: "bottom top", scrub: true },
            },
          );
        });

        // Recalcule les positions une fois les images et polices chargées.
        const refresh = () => ScrollTrigger.refresh();
        window.addEventListener("load", refresh, { once: true });
        document.fonts?.ready.then(refresh).catch(() => {});
        return () => window.removeEventListener("load", refresh);
      });

      return () => mm.revert();
    },
    { scope },
  );

  return <div ref={scope}>{children}</div>;
}
