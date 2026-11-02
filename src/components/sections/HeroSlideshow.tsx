"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/cn";
import type { ResolvedImage } from "@/lib/images";

export type HeroSlide = { image: ResolvedImage; caption: string };

const INTERVAL = 5500;

function subscribeReducedMotion(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

/**
 * Diaporama de la bannière d'accueil : fondu enchaîné avec un léger zoom.
 * Défilement automatique, en pause au survol, au focus clavier ou si l'onglet est masqué.
 * Sans défilement automatique si le visiteur a demandé à réduire les animations.
 */
export function HeroSlideshow({ slides, sizes }: { slides: HeroSlide[]; sizes: string }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (paused || reducedMotion || slides.length < 2) return;
    timer.current = window.setTimeout(() => setIndex((value) => (value + 1) % slides.length), INTERVAL);
    return () => window.clearTimeout(timer.current);
  }, [index, paused, reducedMotion, slides.length]);

  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const current = slides[index];

  return (
    <div
      className="grid gap-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        data-intro="image"
        className="corner-marks text-teal"
        role="region"
        aria-roledescription="carrousel"
        aria-label="Photos du cabinet"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-navy-soft lg:aspect-[11/10]">
          <div className="absolute -inset-y-[8%] inset-x-0" data-parallax="">
            {slides.map((slide, i) =>
              slide.image.src ? (
                <div
                  key={slide.image.key}
                  aria-hidden={i !== index}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-[1200ms] ease-out motion-reduce:transition-none",
                    i === index ? "opacity-100" : "opacity-0",
                  )}
                >
                  <Image
                    src={slide.image.src}
                    alt={slide.image.alt}
                    fill
                    sizes={sizes}
                    preload={i === 0}
                    loading={i === 0 ? undefined : "eager"}
                    className={cn("object-cover", i === index && !reducedMotion && "animate-[gb-kenburns_7s_ease-out_forwards]")}
                    style={slide.image.position ? { objectPosition: slide.image.position } : undefined}
                  />
                </div>
              ) : null,
            )}
          </div>
        </div>
      </div>

      <div data-intro="fade" className="flex items-start justify-between gap-4">
        <p className="label flex min-h-[2.6em] items-start gap-3 text-mist/80" aria-live="polite">
          <span aria-hidden="true" className="mt-[0.6em] h-px w-8 shrink-0 bg-teal" />
          <span>{current.caption}</span>
        </p>
        {slides.length > 1 && (
          <div className="flex shrink-0 items-center gap-1.5 pt-0.5">
            {slides.map((slide, i) => (
              <button
                key={slide.image.key}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Photo ${i + 1} sur ${slides.length}`}
                aria-current={i === index}
                className="group flex h-6 items-center"
              >
                <span
                  className={cn(
                    "block h-[3px] transition-all duration-300",
                    i === index ? "w-7 bg-teal" : "w-3.5 bg-mist/40 group-hover:bg-mist/70",
                  )}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
