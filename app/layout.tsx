import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Golden Years of Wisdom – Senior Citizen Care Home, Dhaka",
    template: "%s – Golden Years of Wisdom",
  },
  description:
    "A boutique senior care community offering dignified living, 24/7 care, and spiritual peace in Vakurta, Savar, Dhaka.",
  openGraph: {
    siteName: "Golden Years of Wisdom",
    type: "website",
    locale: "en_BD",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
