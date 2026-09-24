import type { Metadata, Viewport } from "next";
import { Inter, Fragment_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
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

const title = "Detector Dogs Australia | Explosive & Narcotic Detection Dogs";
const description =
  "Australia’s longest-serving canine detection service, est. 2000. Explosive and narcotic detection teams for government, industry and major events, trained to U.S. standards as a minimum. Nationwide. 1300 360 171.";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
