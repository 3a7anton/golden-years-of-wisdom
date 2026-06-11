import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import styles from "../privacy/page.module.css";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Golden Years of Wisdom.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Service" variant="teal" />
      <section className={`section-pad section-cream ${styles.section}`}>
        <div className={`container ${styles.content}`}>
          <p className={styles.updated}>Last updated: June 2024</p>
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing our website, you agree to be bound by these Terms of Service and our Privacy Policy.</p>
          <h2>2. Use of Website</h2>
          <p>This website is provided for informational purposes about Golden Years of Wisdom. You may not use the website for any unlawful purpose.</p>
          <h2>3. Intellectual Property</h2>
          <p>All content on this website, including text, images, and logos, is the property of Spectrum EduCare Limited and is protected by copyright law.</p>
          <h2>4. Disclaimer</h2>
          <p>The information on this website is provided in good faith. We make no warranties about the completeness, reliability, or accuracy of the information.</p>
          <h2>5. Contact</h2>
          <p>For questions about these terms, contact us at <a href="mailto:spectrumeducareltd@gmail.com">spectrumeducareltd@gmail.com</a>.</p>
        </div>
      </section>
    </>
  );
}
