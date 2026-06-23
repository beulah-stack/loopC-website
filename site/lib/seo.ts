import { getSiteUrl, siteConfig } from "@/lib/site-config";

export const seoKeywords = [
  "ERP Software",
  "Trading ERP",
  "Inventory Management",
  "Commodity Trading ERP",
  "Business Management Software",
  "ERP India",
  "Multi-Currency ERP",
  "Procurement Management",
  "Customer Margin Analysis",
] as const;

export const defaultSiteTitle = "LoopC ERP | ERP for Trading & Commodity Businesses";

export const defaultSiteDescription =
  "Manage inventory, accounts, procurement, customer margins, and multi-currency trading with LoopC ERP.";

export const homePageTitle = "LoopC ERP - ERP Software for Trading Businesses";

export const homePageDescription =
  "Complete ERP platform for inventory, finance, procurement, customer profitability and operations.";

export const openGraphTitle = "LoopC ERP";

export const openGraphDescription =
  "ERP Software for Trading and Commodity Businesses";

/** Public routes included in sitemap.xml */
export const sitemapPaths = [
  "/",
  "/features",
  "/industries",
  "/pricing",
  "/contact",
  "/about",
  "/free-demo",
  "/free-audit",
  "/free-consultation",
  "/download-brochure",
  "/blog",
] as const;

export function getAbsoluteUrl(path: string): string {
  const base = getSiteUrl().replace(/\/$/, "");
  return path === "/" ? base : `${base}${path}`;
}

export function getSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "LoopC ERP",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      description: "Scoped pricing after discovery call",
    },
    description: openGraphDescription,
    url: getSiteUrl(),
    provider: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: getSiteUrl(),
    },
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    url: getSiteUrl(),
    email: siteConfig.contactEmail,
    telephone: siteConfig.phoneTel,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
  };
}
