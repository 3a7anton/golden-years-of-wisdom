import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Golden Years of Wisdom.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" variant="teal" />
      <section className={`section-pad section-cream ${styles.section}`}>
        <div className={`container ${styles.content}`}>
          <p className={styles.updated}>Last updated: June 2024</p>
          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you fill out an inquiry form, call us, or email us.</p>
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to respond to your inquiries, provide information about our services, and improve our website.</p>
          <h2>3. Information Sharing</h2>
          <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law.</p>
          <h2>4. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.</p>
          <h2>5. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:spectrumeducareltd@gmail.com">spectrumeducareltd@gmail.com</a>.</p>
        </div>
      </section>
    </>
  );
}
