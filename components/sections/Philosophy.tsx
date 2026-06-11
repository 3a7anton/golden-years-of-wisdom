"use client";

import { useRef } from "react";
import { Shield, Users, Leaf, Building2 } from "lucide-react";
import { useFadeUpOnScroll } from "@/lib/useScrollAnimation";
import styles from "./Philosophy.module.css";

const features = [
  {
    icon: Shield,
    title: "Safety & Care",
    description:
      "Round-the-clock professional medical support and discrete wellness monitoring, ensuring peace of mind without compromising personal independence.",
    tags: ["24/7 Nursing", "Emergency Call"],
  },
  {
    icon: Users,
    title: "Community Living",
    description:
      "Engaging social calendars, shared dining experiences, and curated group activities designed to foster meaningful connections and lifelong friendships.",
    tags: ["Social Events", "Fine Dining"],
  },
  {
    icon: Leaf,
    title: "Spiritual Peace",
    description:
      "Tranquil meditation spaces, beautiful gardens, and holistic wellness programs that nurture the mind, body, and spirit in a serene environment.",
    tags: ["Meditation", "Therapy Gardens"],
  },
  {
    icon: Building2,
    title: "Modern Apartments",
    description:
      "Spacious, sun-drenched private residences featuring ergonomic design, premium finishes, and accessibility features that feel like a luxury home.",
    tags: ["Accessible Design", "Housekeeping"],
  },
];

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  useFadeUpOnScroll(sectionRef as React.RefObject<HTMLElement>, { stagger: 0.15 });

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className={`${styles.section} section-cream section-pad`}
    >
      <div className="container">
        <div className={styles.header} data-animate>
          <p className={styles.eyebrow}>OUR PHILOSOPHY</p>
          <h2 className={styles.heading}>A Boutique Approach to Care</h2>
          <p className={styles.subtitle}>
            We believe in dignity, warmth, and maintaining a high quality of life through tailored
            services and a supportive community.
          </p>
        </div>

        <div className={`grid-2 ${styles.grid}`}>
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className={styles.card} data-animate>
                <div className={styles.iconCircle}>
                  <Icon size={24} color="var(--color-teal)" />
                </div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDesc}>{feature.description}</p>
                <div className={styles.tags}>
                  {feature.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
