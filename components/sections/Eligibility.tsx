"use client";

import { useRef } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { useFadeUpOnScroll } from "@/lib/useScrollAnimation";
import styles from "./Eligibility.module.css";

const criteria = [
  "Age 55+ minimum requirement",
  "Clear background check",
  "Commitment to a respectful community",
];

export default function Eligibility() {
  const sectionRef = useRef<HTMLElement>(null);
  useFadeUpOnScroll(sectionRef as React.RefObject<HTMLElement>, { stagger: 0.12 });

  return (
    <section
      ref={sectionRef}
      className={`section-pad section-cream ${styles.section}`}
      aria-label="Resident eligibility"
    >
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.heading} data-animate>
          Resident Eligibility
        </h2>
        <p className={styles.subtext} data-animate>
          To maintain our serene and supportive community atmosphere, we ask that prospective
          residents meet the following criteria.
        </p>

        <div className={styles.criteriaList}>
          {criteria.map((item) => (
            <div key={item} className={styles.criteriaItem} data-animate>
              <span className={styles.checkCircle}>
                <CheckCircle2 size={22} color="var(--color-forest)" />
              </span>
              <span className={styles.criteriaText}>{item}</span>
            </div>
          ))}
        </div>

        <Link href="/contact" className={styles.ctaBtn} data-animate>
          Inquire About Availability
        </Link>
      </div>
    </section>
  );
}
