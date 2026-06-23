import type { Metadata } from "next";
import { LeadOfferLayout } from "@/components/lead-offer-layout";
import { getLeadOffer } from "@/lib/lead-offers";
import { siteConfig } from "@/lib/site-config";

const offer = getLeadOffer("free-consultation")!;

export const metadata: Metadata = {
  title: offer.headline,
  description: offer.description,
  openGraph: { title: `${offer.title} | ${siteConfig.brand}`, url: "/free-consultation" },
};

export default function FreeConsultationPage() {
  return <LeadOfferLayout offer={offer} />;
}
