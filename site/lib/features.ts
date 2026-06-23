export type Feature = {
  slug: string;
  title: string;
  summary: string;
  bullets: string[];
};

export const features: Feature[] = [
  {
    slug: "erp-dashboard",
    title: "Multilingual ERP Dashboard",
    summary:
      "One dashboard for inventory, sales, purchases, and accounts—with language support for global trading teams.",
    bullets: [
      "English, Arabic (SA), Uzbek, and Russian interfaces",
      "Role-based dashboards for owners, operations, and finance",
      "Switch language without losing your data or settings",
    ],
  },
  {
    slug: "inventory-management",
    title: "Inventory Management",
    summary: "Real-time stock across warehouses, batches, and locations—built for trading velocity.",
    bullets: [
      "Multi-warehouse and bin-level tracking",
      "Reorder levels, ageing, and slow-moving alerts",
      "Barcode-ready goods inward and outward",
    ],
  },
  {
    slug: "purchase-management",
    title: "Purchase Management",
    summary: "Control procurement from PO to GRN with vendor-wise pricing history.",
    bullets: [
      "Purchase orders, approvals, and GRN matching",
      "Vendor price lists and landed cost tracking",
      "Purchase returns and debit notes",
    ],
  },
  {
    slug: "sales-management",
    title: "Sales Management",
    summary: "Quote-to-cash for wholesale and distribution teams on one screen.",
    bullets: [
      "Sales orders, dispatch, and invoicing",
      "Credit limits and outstanding tracking",
      "Sales returns and credit notes",
    ],
  },
  {
    slug: "customer-management",
    title: "Customer Management",
    summary: "Know every buyer’s history, terms, and open balances before you quote.",
    bullets: [
      "Customer master with territories and segments",
      "Payment terms, credit days, and follow-ups",
      "Order history and repeat-purchase insights",
    ],
  },
  {
    slug: "accounting",
    title: "Accounting",
    summary: "GST-ready books tied to every stock and sales movement—no double entry.",
    bullets: [
      "Ledgers, journals, and bank reconciliation",
      "GST invoicing and return-ready reports",
      "P&L, balance sheet, and cash flow views",
    ],
  },
  {
    slug: "reports-analytics",
    title: "Reports & Analytics",
    summary: "Dashboards that answer what moved, what stalled, and where margin leaks.",
    bullets: [
      "Inventory valuation and movement reports",
      "Sales, purchase, and profitability by SKU",
      "Executive summaries for owners and CFOs",
    ],
  },
];
