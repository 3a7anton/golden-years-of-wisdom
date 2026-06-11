"use client";

import { useRef } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { useSlideInOnScroll, useFadeUpOnScroll } from "@/lib/useScrollAnimation";
import styles from "./Vision.module.css";

export default function Vision() {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useSlideInOnScroll(imageRef as React.RefObject<HTMLElement>, "left");
  useSlideInOnScroll(textRef as React.RefObject<HTMLElement>, "right");

  return (
    <section className={`section-pad ${styles.section}`} aria-label="Our vision">
      <div className="container">
        <div className={styles.grid}>
          {/* Image */}
          <div ref={imageRef} className={styles.imageWrap}>
            <Image
              src="/images/seniors-smiling.png"
              alt="Two elderly men smiling together outdoors in a garden"
              width={560}
              height={420}
              className={styles.image}
            />
          </div>

          {/* Text */}
          <div ref={textRef} className={styles.textBlock}>
            <p className={styles.eyebrow}>OUR VISION</p>
            <h2 className={styles.heading}>Our Vision for Dignified Living</h2>
            <p className={styles.para}>
              At Golden Years of Wisdom, we believe that the later chapters of life should be
              defined by comfort, community, and respect. Our project envisions a sanctuary where
              seniors can thrive in an environment tailored to their physical and emotional
              well-being.
            </p>
            <p className={styles.para}>
              Moving away from clinical isolation, we are building a boutique hospitality
              experience. It&apos;s a place that feels like a well-appointed, sun-drenched
              residence, fostering genuine connections and offering a peaceful retreat wrapped in
              warmth and empathetic care.
            </p>
            <div className={styles.badge}>
              <CheckCircle size={20} color="var(--color-teal)" />
              <span>Dignity First</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
