/** Six offerings — ERP product sale + related services. Slugs used in /services/[slug] and footer. */

export type ServiceItem = {
  slug: string;
  title: string;
  short: string;
  /** Extra copy on detail page when selling / positioning matters */
  productPitch?: string;
};

export const services: ServiceItem[] = [
  {
    slug: "erp-solutions",
    title: "ERP product",
    short:
      "Our flagship ERP application—finance, inventory, procurement, and core operations in one product we build and sell.",
    productPitch:
      "This is the software we engineer ourselves: you purchase LoopC ERP (perpetual or subscription—your commercial model goes here), and we configure it to your chart of accounts, entities, and workflows. You are buying a product backed by implementation, not a blank consulting statement of work.",
  },
  {
    slug: "crm-dashboards",
    title: "CRM & sales dashboards",
    short:
      "Add-on modules we sell alongside ERP—pipelines, activities, SLAs, and leadership views for revenue and service teams.",
  },
  {
    slug: "business-intelligence",
    title: "Business intelligence",
    short:
      "Reporting and KPI packs sold as part of ERP or as extensions—role-based dashboards without spreadsheet chaos.",
  },
  {
    slug: "cloud-implementation",
    title: "Go-live & cloud",
    short:
      "Services to deploy the ERP you bought: phased go-live, hosting options, cutover, and auditable environments.",
  },
  {
    slug: "integration-migration",
    title: "Integration & migration",
    short:
      "Data migration and API work so the ERP you purchased connects to banks, e-invoice, payroll, and legacy systems.",
  },
  {
    slug: "training-support",
    title: "Training & support",
    short:
      "Training, documentation, and AMS-style support for customers who run our ERP day to day.",
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug);
}
