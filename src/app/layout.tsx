import type { Metadata, Viewport } from "next";
import { Barlow, Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTAs from "@/components/FloatingCTAs";
import {
  JsonLd,
  organizationSchema,
  personSchema,
  websiteSchema,
} from "@/components/JsonLd";
import { SITE, KEYWORDS } from "@/lib/site";
import "./globals.css";

const barlow = Barlow({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0606",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.shortDescription,
  applicationName: SITE.name,
  keywords: [...KEYWORDS],
  authors: [{ name: "Sheeraz Hasan", url: SITE.url }],
  creator: "Sheeraz Hasan",
  publisher: SITE.name,
  category: "Marketing & PR",
  classification: "Business",
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.shortDescription,
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — ${SITE.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sheerazhasan",
    creator: "@sheerazhasan",
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.shortDescription,
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/images/logo.png" }, { url: "/favicon.ico" }],
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${inter.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#0A0606] text-[#F5F0E8] overflow-x-hidden">
        <JsonLd data={[organizationSchema(), personSchema(), websiteSchema()]} />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTAs />
      </body>
    </html>
  );
}
