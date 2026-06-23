export type LeadOffer = {
  slug: string;
  title: string;
  headline: string;
  description: string;
  cta: string;
  intent: "audit" | "demo" | "consultation" | "brochure";
  bullets: string[];
};

export const leadOffers: LeadOffer[] = [
  {
    slug: "free-audit",
    title: "Free Audit",
    headline: "Get a Free Business Process Audit",
    description:
      "We review how you manage inventory, purchases, sales, and accounts today—and map gaps where ERP can recover margin.",
    cta: "Request free audit",
    intent: "audit",
    bullets: [
      "30-minute structured review with our consultant",
      "Process map: order → stock → invoice → books",
      "Written summary of top 3 improvement areas",
    ],
  },
  {
    slug: "free-demo",
    title: "Free Demo",
    headline: "Schedule a 30-Minute ERP Demo",
    description:
      "See LoopC ERP live: inventory, trading workflows, GST invoicing, and reports—customized to your client requirements at low pricing.",
    cta: "Book free demo",
    intent: "demo",
    bullets: [
      "Live ERP dashboard walkthrough—not slides",
      "Language options: English, SA, UZ, and RU",
      "Customization scope and low, scoped pricing after the demo",
    ],
  },
  {
    slug: "free-consultation",
    title: "Free Consultation",
    headline: "Find Inventory Leakage and Profit Loss Areas",
    description:
      "A focused session on where trading businesses lose money: dead stock, credit leakage, pricing drift, and delayed collections.",
    cta: "Book free consultation",
    intent: "consultation",
    bullets: [
      "Leakage checklist for wholesale & distribution",
      "Benchmarks from similar trading businesses",
      "Actionable recommendations—no obligation",
    ],
  },
];

export function getLeadOffer(slug: string): LeadOffer | undefined {
  return leadOffers.find((o) => o.slug === slug);
}
