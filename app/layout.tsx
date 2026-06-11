import type { Metadata } from "next";
import {
  Playfair_Display,
  Lora,
  Inter,
  Hind_Siliguri,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// next/font/google — preloads fonts and injects them as CSS variables.
// font-display:swap is applied automatically; no render-blocking network request.
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-bengali",
  display: "swap",
});

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
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${lora.variable} ${inter.variable} ${hindSiliguri.variable}`}
    >
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
