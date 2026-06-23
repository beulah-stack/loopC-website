export type FeatureCategory = {
  slug: string;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
};

export const featuresPageCopy = {
  eyebrow: "Features",
  title: "Powerful ERP Features for Modern Trading Businesses",
  subtitle:
    "Manage finances, inventory, customers, suppliers, procurement, and operations from a single intelligent platform designed for growing enterprises.",
} as const;

export const features: FeatureCategory[] = [
  {
    slug: "financial-management",
    title: "Financial Management",
    description: "Manage your business finances with complete visibility and control.",
    features: [
      "Accounts Management",
      "Ledger Tracking",
      "Voucher Management",
      "Transaction Recording",
      "Account Summary",
      "Financial Reports",
    ],
    benefits: [
      "Track receivables and payables",
      "Improve cash flow visibility",
      "Maintain accurate financial records",
    ],
  },
  {
    slug: "multi-currency-management",
    title: "Multi-Currency Management",
    description: "Handle international business transactions with confidence.",
    features: [
      "Currency Master",
      "Exchange Rate Management",
      "Automatic Currency Conversion",
      "Exchange Gain/Loss Tracking",
    ],
    benefits: [
      "Support global trading operations",
      "Eliminate manual currency calculations",
      "Accurate financial reporting",
    ],
  },
  {
    slug: "inventory-warehouse-management",
    title: "Inventory & Warehouse Management",
    description: "Monitor stock levels and inventory movements in real time.",
    features: [
      "Inventory Tracking",
      "Stock Monitoring",
      "Vendor Integration",
      "Purchase Management",
    ],
    benefits: [
      "Reduce stock shortages",
      "Prevent inventory losses",
      "Optimize warehouse operations",
    ],
  },
  {
    slug: "customer-management-profitability",
    title: "Customer Management & Profitability",
    description: "Build stronger customer relationships while maximizing profits.",
    features: [
      "Customer Database",
      "Customer Margin Analysis",
      "Customer Transaction History",
    ],
    benefits: [
      "Identify high-value customers",
      "Improve customer retention",
      "Increase profitability",
    ],
  },
  {
    slug: "supplier-procurement-management",
    title: "Supplier & Procurement Management",
    description: "Streamline purchasing and vendor relationships.",
    features: [
      "Vendor Management",
      "Supplier Margin Analysis",
      "Procurement Plus",
      "Purchase Tracking",
    ],
    benefits: [
      "Optimize procurement costs",
      "Compare supplier performance",
      "Improve supplier relationships",
    ],
  },
  {
    slug: "sales-operations-management",
    title: "Sales & Operations Management",
    description: "Drive growth with real-time sales and operational insights.",
    features: [
      "Sales Management",
      "Operations Monitoring",
      "Business Dashboard",
      "Performance Tracking",
    ],
    benefits: [
      "Monitor sales performance",
      "Improve operational efficiency",
      "Make data-driven decisions",
    ],
  },
  {
    slug: "human-resources-compliance",
    title: "Human Resources & Compliance",
    description: "Manage employees and ensure regulatory compliance.",
    features: ["HR Management", "Training Management", "Compliance Tracking"],
    benefits: [
      "Centralized employee records",
      "Simplified compliance processes",
      "Better workforce management",
    ],
  },
  {
    slug: "analytics-reporting",
    title: "Analytics & Reporting",
    description: "Transform business data into actionable insights.",
    features: [
      "Real-Time Dashboard",
      "Business Reports",
      "Profitability Analysis",
      "Financial Analytics",
    ],
    benefits: [
      "Faster decision making",
      "Better business visibility",
      "Improved strategic planning",
    ],
  },
];
