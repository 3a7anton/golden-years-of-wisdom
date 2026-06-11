import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ContactInfo from "@/components/sections/ContactInfo";
import InquiryForm from "@/components/sections/InquiryForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Golden Years of Wisdom. Ask about residency, studio apartments, and investment opportunities.",
  openGraph: {
    title: "Contact Us – Golden Years of Wisdom",
    description:
      "Get in touch with Golden Years of Wisdom. Ask about residency, studio apartments, and investment opportunities.",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We're here to answer any questions you have about our care, facilities, and community."
        variant="contact"
      />
      <ContactInfo />
      <InquiryForm />

      {/* JSON-LD LocalBusiness structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Golden Years of Wisdom",
            description:
              "A boutique senior citizen care home offering dignified living in Vakurta, Savar, Dhaka.",
            url: "https://goldenyearsofwisdom.com",
            telephone: "+8801911596109",
            email: "spectrumeducareltd@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Vakurta, between Basila & Amin Bazar",
              addressLocality: "Savar",
              addressRegion: "Dhaka",
              addressCountry: "BD",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 23.8413,
              longitude: 90.2536,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              opens: "08:00",
              closes: "20:00",
            },
          }),
        }}
      />
    </>
  );
}
