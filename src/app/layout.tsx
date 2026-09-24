import type { Metadata, Viewport } from "next";
import { Inter, Fragment_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { faqs, site } from "@/content/site";
import { asset } from "@/lib/basePath";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const mono = Fragment_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono-face",
  display: "swap",
});

const title = "Detector Dogs Australia – National Canine Detection Specialists";
// Their own lines (about-us, home).
const description =
  "Australia’s longest-serving Canine Detection Service. Rapid-Response Detection Teams Nationwide. Immediate Service Australia Wide 1300 360 171.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s | Detector Dogs Australia" },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: site.name,
    url: site.url,
    title,
    description,
    images: [{ url: asset("/img/og.jpg"), width: 1200, height: 630 }],
  },
  icons: {
    icon: [{ url: asset("/img/icon-32.png"), sizes: "32x32" }, { url: asset("/img/icon-192.png"), sizes: "192x192" }],
    apple: asset("/img/icon-180.png"),
  },
};

export const viewport: Viewport = { themeColor: "#f6f6f3" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  telephone: "+611300360171",
  email: site.email,
  foundingDate: "2000",
  areaServed: "AU",
  image: `${site.url}/img/og.jpg`,
  address: {
    "@type": "PostalAddress",
    postOfficeBoxNumber: "372",
    addressLocality: "Whittlesea",
    addressRegion: "VIC",
    postalCode: "3757",
    addressCountry: "AU",
  },
  sameAs: [site.facebook, site.linkedin, site.youtube],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a.map((line) => line.replace(/^(## |- )/, "")).join(" ") },
  })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
