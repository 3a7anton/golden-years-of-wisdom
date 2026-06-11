"use client";

import { useRef } from "react";
import { Search, Handshake } from "lucide-react";
import { useSlideInOnScroll } from "@/lib/useScrollAnimation";
import styles from "./ChallengeApproach.module.css";

export default function ChallengeApproach() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useSlideInOnScroll(leftRef as React.RefObject<HTMLElement>, "left");
  useSlideInOnScroll(rightRef as React.RefObject<HTMLElement>, "right");

  return (
    <section className={`section-pad ${styles.section}`} aria-label="Challenge and approach">
      <div className="container">
        <div className={styles.grid}>
          <div ref={leftRef} className={`${styles.card} ${styles.cardNeutral}`}>
            <div className={styles.iconWrap}>
              <Search size={24} color="var(--color-teal)" />
            </div>
            <h3 className={styles.cardTitle}>The Challenge</h3>
            <p className={styles.cardText}>
              Many seniors face profound isolation and loneliness in traditional care settings or
              when aging alone at home. The lack of tailored engagement and sterile environments
              often diminish their quality of life.
            </p>
          </div>

          <div ref={rightRef} className={`${styles.card} ${styles.cardTeal}`}>
            <div className={styles.iconWrap}>
              <Handshake size={24} color="var(--color-teal)" />
            </div>
            <h3 className={styles.cardTitle}>Our Approach</h3>
            <p className={styles.cardText}>
              We cultivate vibrant community living through purposely designed spaces that encourage
              interaction, shared activities, and mutual support — replacing isolation with a warm,
              empathetic neighbourhood feel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
