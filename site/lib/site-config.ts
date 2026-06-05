/** Site-wide copy and URLs. Swap placeholders when you have final details. */

export const siteConfig = {
  /** Short brand for UI where space is tight */
  brand: "LoopC",
  /** Legal / full company name */
  name: "LoopC Business Strategies",
  legalName: "LoopC Business Strategies",
  tagline:
    "We build ERP applications—and sell them at a fair price. Optional CRM dashboards and services to get you live with confidence.",
  description:
    "LoopC Business Strategies develops its own ERP software and sells it to companies that need finance, inventory, and operations on one platform—without enterprise-only pricing. Add CRM dashboards, implementation, and support when you need them.",
  /** One line for hero / CTAs */
  erpSalesLine:
    "Own the ERP we build: clear licensing, transparent pricing, and delivery shaped to your business.",
  /** Used for metadataBase and Open Graph when NEXT_PUBLIC_SITE_URL is unset */
  productionUrl: "https://www.loopc.com",
  contactEmail: "hello@loopc.com",
  salesEmail: "sales@loopc.com",
  /** E.164 without + for wa.me links */
  whatsappE164: "919876543210",
  phoneDisplay: "+91 44 4000 0000",
  phoneTel: "+914440000000",
  /** Replace with your GSTIN when registered */
  gstNumber: "GSTIN: 33AAAAA0000A1Z5 (placeholder — update in site-config)",
  addressLines: [
    "LoopC Business Strategies",
    "Anna Salai, Nungambakkam",
    "Chennai — 600034",
    "Tamil Nadu, India",
  ] as const,
  businessHours: "Mon–Fri: 9:30 AM – 6:30 PM IST · Sat: By appointment · Sun: Closed",
  /** Update these URLs to your real profiles */
  social: {
    linkedIn: "https://www.linkedin.com/company/loopc-business-strategies",
    x: "https://x.com/loopc",
    youTube: "https://www.youtube.com/@LoopCBusinessStrategies",
  },
};

export function getWhatsAppUrl(): string {
  return `https://wa.me/${siteConfig.whatsappE164}`;
}

export function getSiteUrl(): string {
  if (typeof process !== "undefined" && process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  return siteConfig.productionUrl;
}
