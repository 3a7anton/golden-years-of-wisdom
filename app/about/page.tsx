import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Vision from "@/components/sections/Vision";
import Timeline from "@/components/sections/Timeline";
import ChallengeApproach from "@/components/sections/ChallengeApproach";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about our vision for dignified senior living and the journey ahead toward completing our boutique care home in Dhaka.",
  openGraph: {
    title: "About Us – Golden Years of Wisdom",
    description:
      "Learn about our vision for dignified senior living and the journey ahead.",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" variant="teal" />
      <Vision />
      <Timeline />
      <ChallengeApproach />
    </>
  );
}
