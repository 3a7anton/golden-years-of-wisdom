"use client";

import { useRef } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useFadeUpOnScroll } from "@/lib/useScrollAnimation";
import styles from "./StudioFeatures.module.css";

const features = [
  "Generous 600 sq ft floor plan",
  "Spacious, light-filled sleeping area",
  "Dedicated dining alcove",
  "Elder-friendly, accessible bathroom",
  "Private balcony with scenic views",
  "Fully equipped kitchenette",
  "Premium slip-resistant flooring throughout",
];

export default function StudioFeatures() {
  const sectionRef = useRef<HTMLElement>(null);
  useFadeUpOnScroll(sectionRef as React.RefObject<HTMLElement>, { stagger: 0.1 });

  return (
    <section ref={sectionRef} className={`section-pad section-cream ${styles.section}`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Text side */}
          <div className={styles.textBlock} data-animate>
            <p className={styles.eyebrow}>REFINED LIVING</p>
            <h2 className={styles.heading}>Refined Living Spaces</h2>
            <p className={styles.lead}>
              Each studio apartment is designed to strike the perfect balance between accessibility
              and aesthetic elegance — a home that adapts to you, not the other way around.
            </p>
            <ul className={styles.checklist}>
              {features.map((feature) => (
                <li key={feature} className={styles.checkItem} data-animate>
                  <CheckCircle2 size={20} color="var(--color-teal)" strokeWidth={2} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Photo side */}
          <div className={styles.imageWrap} data-animate>
            <Image
              src="/images/apartment-interior.png"
              alt="Bright studio apartment interior with warm natural light and dining area"
              width={560}
              height={480}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
