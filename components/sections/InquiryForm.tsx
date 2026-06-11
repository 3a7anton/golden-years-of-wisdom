"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Loader2, CheckCircle } from "lucide-react";
import styles from "./InquiryForm.module.css";

type FormData = {
  fullName: string;
  phone: string;
  email: string;
  message: string;
};

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    // P0: Simulate submission (replace with real service in P1)
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSubmitted(true);
    console.log("Form data:", data);
  };

  if (submitted) {
    return (
      <section className={`section-pad section-cream-warm ${styles.section}`}>
        <div className={styles.successWrap}>
          <CheckCircle size={56} color="var(--color-teal)" />
          <h2 className={styles.successTitle}>Thank you!</h2>
          <p className={styles.successText}>We&apos;ll be in touch shortly.</p>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`section-pad section-cream-warm ${styles.section}`}
      aria-label="Send an inquiry"
    >
      <div className="container">
        <div className={styles.formCard}>
          <h2 className={styles.heading}>Send an Inquiry</h2>
          <p className={styles.subtext}>
            We&apos;d love to hear from you. Please fill out the form below.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} noValidate className={styles.form}>
            {/* Full Name */}
            <div className={styles.field}>
              <label htmlFor="fullName" className={styles.label}>
                Full Name <span className={styles.required}>*</span>
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Your full name"
                aria-required="true"
                aria-invalid={!!errors.fullName}
                className={`${styles.input} ${errors.fullName ? styles.inputError : ""}`}
                {...register("fullName", { required: "Full name is required" })}
              />
              {errors.fullName && (
                <p role="alert" className={styles.errorMsg}>{errors.fullName.message}</p>
              )}
            </div>

            {/* Phone */}
            <div className={styles.field}>
              <label htmlFor="phone" className={styles.label}>
                Phone Number <span className={styles.required}>*</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+880 ..."
                aria-required="true"
                aria-invalid={!!errors.phone}
                className={`${styles.input} ${errors.phone ? styles.inputError : ""}`}
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && (
                <p role="alert" className={styles.errorMsg}>{errors.phone.message}</p>
              )}
            </div>

            {/* Email */}
            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                className={styles.input}
                {...register("email", {
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p role="alert" className={styles.errorMsg}>{errors.email.message}</p>
              )}
            </div>

            {/* Message */}
            <div className={styles.field}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell us about your interest or ask a question..."
                className={styles.textarea}
                {...register("message")}
              />
            </div>

            {/* Submit */}
            <div className={styles.submitRow}>
              <button
                type="submit"
                disabled={loading}
                className={styles.submitBtn}
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className={styles.spinner} />
                    <span>Sending...</span>
                  </>
                ) : (
                  "Submit Inquiry"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
