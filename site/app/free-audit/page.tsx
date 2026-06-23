import type { Metadata } from "next";
import { LeadOfferLayout } from "@/components/lead-offer-layout";
import { getLeadOffer } from "@/lib/lead-offers";
import { siteConfig } from "@/lib/site-config";

const offer = getLeadOffer("free-audit")!;

export const metadata: Metadata = {
  title: offer.headline,
  description: offer.description,
  openGraph: { title: `${offer.title} | ${siteConfig.brand}`, url: "/free-audit" },
};

export default function FreeAuditPage() {
  return <LeadOfferLayout offer={offer} />;
}
