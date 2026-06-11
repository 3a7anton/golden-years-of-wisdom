"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation() {
  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  return { prefersReducedMotion, gsap, ScrollTrigger };
}

/**
 * Fade-up reveal on scroll enter
 */
export function useFadeUpOnScroll(
  ref: React.RefObject<HTMLElement | null>,
  options?: { delay?: number; stagger?: number; duration?: number }
) {
  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const elements = ref.current.querySelectorAll("[data-animate]");
    const targets = elements.length > 0 ? elements : [ref.current];

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: options?.duration ?? 0.7,
        stagger: options?.stagger ?? 0.15,
        delay: options?.delay ?? 0,
        ease: "power2.out",
      });
    }, ref);

    return () => ctx.revert();
  }, [ref, options?.delay, options?.stagger, options?.duration]);
}

/**
 * Slide in from side on scroll
 */
export function useSlideInOnScroll(
  ref: React.RefObject<HTMLElement | null>,
  direction: "left" | "right" = "left"
) {
  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const x = direction === "left" ? -60 : 60;

    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
        x,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    }, ref);

    return () => ctx.revert();
  }, [ref, direction]);
}
