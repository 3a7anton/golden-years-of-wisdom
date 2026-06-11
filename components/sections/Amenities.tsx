"use client";

import { useRef } from "react";
import { HeartPulse, Armchair, Utensils } from "lucide-react";
import { useFadeUpOnScroll } from "@/lib/useScrollAnimation";
import styles from "./Amenities.module.css";

const amenities = [
  {
    icon: HeartPulse,
    title: "Safety & Emergency",
    text: "24/7 on-call staff, emergency response systems in every room, and daily wellness checks to ensure peace of mind for residents and their families.",
  },
  {
    icon: Armchair,
    title: "Daily Living",
    text: "Weekly housekeeping, flat linen laundry service, and property maintenance so residents can focus on enjoying their time and activities.",
  },
  {
    icon: Utensils,
    title: "Health & Dining",
    text: "Access to the main dining room for chef-prepared meals, customised nutrition plans, and a vibrant calendar of fitness and social events.",
  },
];

export default function Amenities() {
  const sectionRef = useRef<HTMLElement>(null);
  useFadeUpOnScroll(sectionRef as React.RefObject<HTMLElement>, { stagger: 0.15 });

  return (
    <section
      ref={sectionRef}
      className={`section-pad ${styles.section}`}
      aria-label="Included amenities and care"
    >
      <div className="container">
        <div className={styles.header} data-animate>
          <h2 className={styles.heading}>Included Amenities &amp; Care</h2>
          <p className={styles.subtext}>
            Everything you need to live well — included in your residence.
          </p>
        </div>
        <div className={`grid-3 ${styles.grid}`}>
          {amenities.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className={styles.card} data-animate>
                <div className={styles.iconWrap}>
                  <Icon size={24} color="var(--color-brown)" />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
