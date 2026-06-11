"use client";

import { useEffect, useRef } from "react";
import { Mountain, Users, PersonStanding, KeyRound } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Timeline.module.css";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    year: "2026",
    title: "Land Acquisition",
    description: "Securing the perfect serene location in Vakurta, Savar.",
    icon: Mountain,
    accent: "teal",
  },
  {
    year: "2027",
    title: "Land Filling",
    description: "Preparing the foundation for our vision.",
    icon: Users,
    accent: "gold",
  },
  {
    year: "2028",
    title: "Construction Begins",
    description: "Building the boutique residences and community spaces.",
    icon: PersonStanding,
    accent: "teal",
  },
  {
    year: "2031",
    title: "Project Completion",
    description: "Opening doors to our community with dignity and warmth.",
    icon: KeyRound,
    accent: "gold",
  },
];

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // Draw line
      gsap.from(lineRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.2,
        ease: "power2.inOut",
      });

      // Cards stagger
      const cards = cardsRef.current?.querySelectorAll("[data-timeline-card]");
      if (cards) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
          y: 40,
          opacity: 0,
          stagger: 0.2,
          duration: 0.7,
          delay: 0.4,
          ease: "power2.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`section-pad section-cream-warm ${styles.section}`}
      aria-label="Project timeline"
    >
      <div className="container">
        <h2 className={styles.heading} data-animate>
          The Journey Ahead
        </h2>

        <div className={styles.timelineWrap}>
          {/* Connecting line */}
          <div className={styles.lineTrack}>
            <div ref={lineRef} className={styles.line} />
          </div>

          {/* Cards */}
          <div ref={cardsRef} className={styles.cardsRow}>
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.year}
                  className={styles.card}
                  data-timeline-card
                >
                  <div
                    className={`${styles.iconCircle} ${
                      step.accent === "gold" ? styles.iconGold : styles.iconTeal
                    }`}
                  >
                    <Icon size={22} color="white" />
                  </div>
                  <p className={styles.year}>{step.year}</p>
                  <h3 className={styles.cardTitle}>{step.title}</h3>
                  <p className={styles.cardDesc}>{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
