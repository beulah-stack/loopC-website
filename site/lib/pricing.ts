export type PricingTier = {
  id: string;
  name: string;
  tagline: string;
  idealFor: string;
  highlights: string[];
  /** Shown on page; detailed quote only after demo */
  priceNote: string;
};

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Single location, core trading workflows",
    idealFor: "Small wholesale teams getting off spreadsheets",
    highlights: [
      "Inventory, sales & purchase",
      "Customized to your workflows",
      "Basic accounting & GST invoicing",
      "Standard reports",
      "Email support",
    ],
    priceNote: "Low pricing—scoped after discovery call",
  },
  {
    id: "business",
    name: "Business",
    tagline: "Multi-location trading with controls",
    idealFor: "Growing distributors and importers",
    highlights: [
      "Everything in Starter",
      "Multilingual ERP dashboard (EN, SA, UZ, RU)",
      "Multi-warehouse & approvals",
      "Client-specific reports & dashboards",
      "Implementation & training",
      "Priority support",
    ],
    priceNote: "Low pricing—scoped after discovery call",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "Complex operations, integrations, governance",
    idealFor: "Retail chains and large trading groups",
    highlights: [
      "Everything in Business",
      "Deep customization & integrations",
      "Dedicated success manager",
      "SLA-backed support",
      "Phased rollout planning",
    ],
    priceNote: "Custom proposal—low, scoped pricing after audit & demo",
  },
];
