import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/custom-cursor";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getSiteUrl, siteConfig } from "@/lib/site-config";
import {
  defaultSiteDescription,
  defaultSiteTitle,
  getOrganizationSchema,
  openGraphDescription,
  openGraphTitle,
  seoKeywords,
} from "@/lib/seo";

/** Corporate luxury: editorial headings + neutral body (Google Fonts, self-hosted by Next). */
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultSiteTitle,
    template: `%s | ${siteConfig.brand}`,
  },
  description: defaultSiteDescription,
  keywords: [...seoKeywords],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: openGraphTitle,
    description: openGraphDescription,
    url: siteUrl,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: openGraphTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: openGraphTitle,
    description: openGraphDescription,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${playfair.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <JsonLd data={getOrganizationSchema()} />
        <CustomCursor />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-900 focus:shadow-lg"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
