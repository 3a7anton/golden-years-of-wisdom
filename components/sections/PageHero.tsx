import styles from "./PageHero.module.css";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  variant?: "teal" | "contact";
}

export default function PageHero({ title, subtitle, variant = "teal" }: PageHeroProps) {
  return (
    <section
      className={`${styles.hero} ${variant === "contact" ? styles.contactHero : styles.aboutHero}`}
      aria-label={`${title} page hero`}
    >
      <div className={`container ${styles.content}`}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </section>
  );
}
