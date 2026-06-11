import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import styles from "../privacy/page.module.css";

export const metadata: Metadata = {
  title: "Careers",
  description: "Career opportunities at Golden Years of Wisdom.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero title="Careers" variant="teal" />
      <section className={`section-pad section-cream ${styles.section}`}>
        <div className={`container ${styles.content}`}>
          <h2>Join Our Team</h2>
          <p>
            Golden Years of Wisdom is currently in the pre-construction phase. As we grow toward
            our 2031 opening, we will be posting career opportunities for compassionate,
            dedicated professionals who share our vision for dignified senior care.
          </p>
          <p>
            To express your interest in future opportunities, please send your CV to{" "}
            <a href="mailto:spectrumeducareltd@gmail.com">spectrumeducareltd@gmail.com</a>.
          </p>
        </div>
      </section>
    </>
  );
}
