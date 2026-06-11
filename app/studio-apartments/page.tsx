import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import StudioFeatures from "@/components/sections/StudioFeatures";
import Amenities from "@/components/sections/Amenities";
import Eligibility from "@/components/sections/Eligibility";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Studio Apartments",
  description:
    "Explore our 600 sq ft senior studio apartments featuring modern design, safety systems, and full-care amenities.",
  openGraph: {
    title: "Studio Apartments – Golden Years of Wisdom",
    description:
      "Explore our 600 sq ft senior studio apartments featuring modern design, safety systems, and full-care amenities.",
  },
};

export default function StudioApartmentsPage() {
  return (
    <>
      {/* Full-width image hero */}
      <section className={styles.imageHero} aria-label="Studio apartments">
        <Image
          src="/images/apartment-interior.png"
          alt="Bright studio apartment interior with warm natural light"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className={styles.overlay} />
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>Studio Apartments</h1>
          <p className={styles.heroSubtitle}>
            Thoughtfully designed living spaces offering independence, dignity, and comfort in a
            boutique hospitality setting.
          </p>
        </div>
      </section>

      <StudioFeatures />
      <Amenities />
      <Eligibility />
    </>
  );
}
