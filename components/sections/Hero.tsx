"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotion) return;

    // Lazy-load GSAP only after hydration — keeps it out of the critical JS path
    Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]).then(([{ default: gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        // Animate as single elements — no character-split, no forced reflow
        const tl = gsap.timeline({ delay: 0.2 });

        tl.from(badgeRef.current, {
          scale: 0.7,
          opacity: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        })
          .from(
            titleRef.current,
            {
              opacity: 0,
              y: 20,
              duration: 0.6,
              ease: "power3.out",
            },
            "-=0.1"
          )
          .from(
            subtitleRef.current,
            {
              opacity: 0,
              y: 15,
              duration: 0.5,
            },
            "-=0.3"
          )
          .from(
            ctaRef.current,
            {
              opacity: 0,
              y: 10,
              duration: 0.4,
            },
            "-=0.2"
          )
          .from(
            arrowRef.current,
            {
              opacity: 0,
              duration: 0.4,
            },
            "-=0.1"
          );

        // Parallax scroll effect
        gsap.to(imageRef.current, {
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
          y: "30%",
        });
      }, heroRef);

      return () => ctx.revert();
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className={styles.hero}
      aria-label="Welcome to Golden Years of Wisdom"
    >
      {/* Background Image with Parallax */}
      <div ref={imageRef} className={styles.bgImage}>
        <Image
          src="/images/hero-home.png"
          alt="Happy seniors enjoying their time together"
          fill
          priority
          // Responsive sizes — browser picks the right AVIF/WebP variant per viewport
          sizes="(max-width: 640px) 640px, (max-width: 1080px) 1080px, 1920px"
          quality={75}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        <div ref={badgeRef} className={styles.logoBadge} aria-hidden="true">
          <span className={styles.badgeInner}>GYW</span>
        </div>

        <h1 ref={titleRef} className={styles.title}>
          Golden Years of Wisdom
        </h1>

        <p ref={subtitleRef} className={styles.subtitle}>
          Senior Citizen Care Home
        </p>

        <div ref={ctaRef} className={styles.ctaGroup}>
          <a href="#philosophy" className={styles.btnBrown}>
            Learn More
          </a>
          <Link href="/contact" className={styles.btnOutline}>
            Schedule a Visit
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div ref={arrowRef} className={styles.scrollArrow} aria-hidden="true">
        <ChevronDown size={32} color="white" />
      </div>
    </section>
  );
}
