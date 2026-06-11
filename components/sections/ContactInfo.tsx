"use client";

import { MapPin, Building2, Phone, Mail } from "lucide-react";
import styles from "./ContactInfo.module.css";

export default function ContactInfo() {
  return (
    <section className={`section-pad section-cream ${styles.section}`} aria-label="Contact information and map">
      <div className="container">
        <div className={styles.grid}>
          {/* Contact Card */}
          <div className={styles.card}>
            <h2 className={styles.heading}>Get in Touch</h2>

            <div className={styles.row}>
              <span className={styles.iconCircle}>
                <MapPin size={20} color="var(--color-teal)" />
              </span>
              <div>
                <p className={styles.label}>Project Location</p>
                <p className={styles.value}>Vakurta (between Basila &amp; Amin Bazar), Savar, Dhaka</p>
              </div>
            </div>

            <div className={styles.row}>
              <span className={styles.iconCircle}>
                <Building2 size={20} color="var(--color-teal)" />
              </span>
              <div>
                <p className={styles.label}>Head Office</p>
                <p className={styles.value}>41/1, Shantinagar (Khadem Tower), Dhaka-1217</p>
              </div>
            </div>

            <div className={styles.row}>
              <span className={styles.iconCircle}>
                <Phone size={20} color="var(--color-teal)" />
              </span>
              <div>
                <p className={styles.label}>Phone</p>
                <a href="tel:+8801911596109" className={styles.link}>+880 1911 596 109</a>
                <br />
                <a href="tel:+8801726208154" className={styles.link}>+880 1726 208 154</a>
              </div>
            </div>

            <div className={styles.row}>
              <span className={styles.iconCircle}>
                <Mail size={20} color="var(--color-teal)" />
              </span>
              <div>
                <p className={styles.label}>Email</p>
                <a href="mailto:spectrumeducareltd@gmail.com" className={styles.link}>
                  spectrumeducareltd@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className={styles.mapWrap}>
            <iframe
              title="Vakurta, Savar location map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=90.2336%2C23.8213%2C90.2736%2C23.8613&layer=mapnik&marker=23.8413%2C90.2536"
              className={styles.map}
              loading="lazy"
              aria-label="Map showing Vakurta, Savar, Dhaka"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
