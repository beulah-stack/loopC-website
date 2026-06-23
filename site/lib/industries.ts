export type Industry = {
  slug: string;
  title: string;
  summary: string;
  challenges: string[];
  outcomes: string[];
};

export const industries: Industry[] = [
  {
    slug: "wholesale-businesses",
    title: "Wholesale Businesses",
    summary: "High SKU counts, thin margins, and fast turns—one ERP for stock, sales, and accounts.",
    challenges: [
      "Stock spread across godowns with no single truth",
      "Margin eroded by manual pricing and discounts",
      "Month-end closes delayed by spreadsheet reconciliation",
    ],
    outcomes: [
      "Live stock and ageing across locations",
      "Customer-wise pricing and credit control",
      "GST books aligned to every dispatch",
    ],
  },
  {
    slug: "distributors",
    title: "Distributors",
    summary: "Route sales, secondary billing, and scheme tracking for multi-brand distribution.",
    challenges: [
      "Scheme claims and rate differences hard to audit",
      "Field sales disconnected from warehouse dispatch",
      "Outstanding and collection visibility per route",
    ],
    outcomes: [
      "Order-to-dispatch with approval trails",
      "Outstanding dashboards by customer and route",
      "Purchase and sales margin in one report",
    ],
  },
  {
    slug: "import-export-companies",
    title: "Import Export Companies",
    summary: "Land costs, forex exposure, and shipment-linked inventory in one workflow.",
    challenges: [
      "Landed cost spread across shipments and SKUs",
      "Import documentation disconnected from stock",
      "FX and payment timing affecting true margin",
    ],
    outcomes: [
      "Shipment-wise costing and stock allocation",
      "Vendor and buyer ledgers with multi-currency notes",
      "Clear margin per consignment and SKU",
    ],
  },
  {
    slug: "retail-chains",
    title: "Retail Chains",
    summary: "Central purchasing with store-level sales and replenishment for growing chains.",
    challenges: [
      "Replenishment based on guesswork, not movement data",
      "Promotions and returns skewing store P&L",
      "HQ lacks same-day visibility into store stock",
    ],
    outcomes: [
      "Store-wise sales and stock snapshots",
      "Transfer and replenishment workflows",
      "Chain-wide reports without manual consolidation",
    ],
  },
];
