import Link from "next/link";
import { Trees, Mail, Phone, MapPin } from "lucide-react";
import styles from "./Footer.module.css";

const footerLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/careers", label: "Careers" },
  { href: "/volunteer", label: "Volunteer" },
];

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <div className={styles.logoRow}>
            <span className={styles.logoIcon}>
              <Trees size={32} color="var(--color-gold)" />
            </span>
            <span className={styles.brandName}>Golden Years of Wisdom</span>
          </div>
          <p className={styles.tagline}>
            Dignity, warmth, and care for those who built our world.
          </p>
        </div>

        <div className={styles.contactCol}>
          <p className={styles.contactHeading}>Get in Touch</p>
          <div className={styles.contactRow}>
            <MapPin size={16} color="var(--color-gold)" />
            <span>Vakurta, Savar, Dhaka</span>
          </div>
          <div className={styles.contactRow}>
            <Phone size={16} color="var(--color-gold)" />
            <a href="tel:+8801911596109">01911 596 109</a>
          </div>
          <div className={styles.contactRow}>
            <Mail size={16} color="var(--color-gold)" />
            <a href="mailto:spectrumeducareltd@gmail.com">spectrumeducareltd@gmail.com</a>
          </div>
        </div>

        <div className={styles.linksCol}>
          <p className={styles.contactHeading}>Quick Links</p>
          <nav className={styles.linksNav} aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.footerLink}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p className={styles.copyright}>
            © 2026 Golden Years of Wisdom · Spectrum EduCare Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
