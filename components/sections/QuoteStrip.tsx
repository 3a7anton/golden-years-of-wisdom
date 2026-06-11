import styles from "./QuoteStrip.module.css";

export default function QuoteStrip() {
  return (
    <section className={`${styles.section} section-cream-warm`} aria-label="Company quote">
      <div className={`container ${styles.inner}`}>
        <span className={styles.quoteMarkLeft} aria-hidden="true">&ldquo;</span>
        <blockquote className={styles.quote}>
          <p className={styles.quoteText}>
            We don&apos;t just add years to life, we add life to years.
            Every detail is designed with dignity and joy in mind.
          </p>
          <footer className={styles.attribution}>
            <cite>— Spectrum EduCare Limited</cite>
          </footer>
        </blockquote>
        <span className={styles.quoteMarkRight} aria-hidden="true">&rdquo;</span>
      </div>
    </section>
  );
}
