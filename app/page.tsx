import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

// Below-the-fold sections are dynamically imported to keep the
// initial JS bundle lean. They are SSR'd (ssr: true) so they still
// appear in the HTML for SEO, but their JS is split into separate chunks
// that load after the hero is interactive.
const Philosophy = dynamic(() => import("@/components/sections/Philosophy"));
const QuoteStrip = dynamic(() => import("@/components/sections/QuoteStrip"));

export const metadata: Metadata = {
  title: "Golden Years of Wisdom – Senior Citizen Care Home, Dhaka",
  description:
    "A boutique senior care community offering dignified living, 24/7 care, and spiritual peace in Vakurta, Savar, Dhaka.",
  openGraph: {
    title: "Golden Years of Wisdom – Senior Citizen Care Home, Dhaka",
    description:
      "A boutique senior care community offering dignified living, 24/7 care, and spiritual peace in Vakurta, Savar, Dhaka.",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <QuoteStrip />
    </>
  );
}
