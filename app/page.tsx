import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import QuoteStrip from "@/components/sections/QuoteStrip";

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
