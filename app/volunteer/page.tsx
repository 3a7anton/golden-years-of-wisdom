import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import styles from "../privacy/page.module.css";

export const metadata: Metadata = {
  title: "Volunteer",
  description: "Volunteer opportunities at Golden Years of Wisdom.",
};

export default function VolunteerPage() {
  return (
    <>
      <PageHero title="Volunteer" variant="teal" />
      <section className={`section-pad section-cream ${styles.section}`}>
        <div className={`container ${styles.content}`}>
          <h2>Make a Difference</h2>
          <p>
            Volunteering at Golden Years of Wisdom is a meaningful way to give back to our
            community&apos;s elders. As we approach our opening in 2031, we will be establishing
            a formal volunteer programme.
          </p>
          <p>
            If you are interested in volunteering once our facility opens, please register your
            interest by emailing us at{" "}
            <a href="mailto:spectrumeducareltd@gmail.com">spectrumeducareltd@gmail.com</a>.
          </p>
        </div>
      </section>
    </>
  );
}
