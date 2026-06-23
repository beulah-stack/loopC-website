export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  updatedAt: string;
  readMinutes: number;
  sections: { heading: string; paragraphs: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "trading-erp-software",
    title: "ERP Software for Trading Businesses",
    description:
      "Why wholesale, distribution, and commodity trading teams need one ERP for inventory, finance, and operations.",
    updatedAt: "2026-06-01",
    readMinutes: 6,
    sections: [
      {
        heading: "Trading operations need connected data",
        paragraphs: [
          "Trading businesses move fast—purchase orders, warehouse transfers, sales invoices, and collections happen in parallel. Spreadsheets and disconnected tools create stock mismatches, delayed billing, and weak margin visibility.",
          "LoopC ERP connects inventory, accounts, procurement, and customer data in one dashboard customized to your workflows.",
        ],
      },
      {
        heading: "What to look for in trading ERP",
        paragraphs: [
          "Multi-warehouse inventory, vendor and customer margin analysis, GST-ready accounting, and multi-currency support are essential for import-export and commodity traders.",
          "Choose software you can configure to your approval flows and reports—not a rigid template that forces process changes.",
        ],
      },
    ],
  },
  {
    slug: "reduce-inventory-losses",
    title: "How to Reduce Inventory Losses",
    description:
      "Practical controls trading companies use to cut shrinkage, dead stock, and reconciliation gaps.",
    updatedAt: "2026-06-05",
    readMinutes: 5,
    sections: [
      {
        heading: "Track every stock movement",
        paragraphs: [
          "Losses often start with goods received but not recorded, transfers without documentation, or dispatch before invoice matching.",
          "Real-time inventory tracking with GRN matching and warehouse-wise balances surfaces gaps before month-end.",
        ],
      },
      {
        heading: "Ageing and reorder discipline",
        paragraphs: [
          "Slow-moving and obsolete stock ties up working capital. Ageing reports and reorder alerts help buyers act before write-offs grow.",
          "Pair stock data with sales velocity by SKU to prioritize liquidation and purchasing decisions.",
        ],
      },
    ],
  },
  {
    slug: "multi-currency-commodity-trading-erp",
    title: "Multi-Currency ERP for Commodity Trading",
    description:
      "Manage exchange rates, conversions, and gain/loss tracking for international commodity trades.",
    updatedAt: "2026-06-08",
    readMinutes: 5,
    sections: [
      {
        heading: "Currency risk in commodity trades",
        paragraphs: [
          "Commodity traders buy and sell across borders—USD, AED, and local currency invoices are common. Manual conversion in spreadsheets invites reporting errors.",
          "A currency master with dated exchange rates and automatic conversion on transactions keeps books consistent.",
        ],
      },
      {
        heading: "Exchange gain and loss visibility",
        paragraphs: [
          "ERP should post exchange differences clearly and roll them into financial reports your CFO trusts.",
          "LoopC supports multi-currency operations alongside inventory and procurement in one platform.",
        ],
      },
    ],
  },
  {
    slug: "customer-margin-analysis",
    title: "Customer Margin Analysis Explained",
    description:
      "How trading businesses identify profitable customers and fix leaking accounts.",
    updatedAt: "2026-06-12",
    readMinutes: 4,
    sections: [
      {
        heading: "Revenue is not profit",
        paragraphs: [
          "High-volume customers can destroy margin when discounts, credit days, and freight subsidies are ignored.",
          "Customer-wise margin analysis ties sales, returns, and cost of goods to each account.",
        ],
      },
      {
        heading: "Actions from margin insights",
        paragraphs: [
          "Use margin reports to adjust pricing tiers, credit limits, and sales focus. Protect top accounts and renegotiate low-margin relationships.",
          "Transaction history in ERP makes these reviews factual—not opinion debates in monthly meetings.",
        ],
      },
    ],
  },
  {
    slug: "procurement-management-best-practices",
    title: "Procurement Management Best Practices",
    description:
      "PO controls, vendor performance, and purchase tracking for trading and manufacturing teams.",
    updatedAt: "2026-06-15",
    readMinutes: 5,
    sections: [
      {
        heading: "Standardize purchase to pay",
        paragraphs: [
          "From requisition to PO, GRN, and vendor payment—each step should leave an audit trail. Approvals by value and category prevent maverick buying.",
          "Vendor price history helps buyers negotiate and spot cost drift early.",
        ],
      },
      {
        heading: "Supplier scorecards",
        paragraphs: [
          "Compare lead time, quality issues, and landed cost by supplier. Procurement Plus workflows in ERP support structured buying for growing teams.",
          "Strong procurement discipline directly improves gross margin and cash flow.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
