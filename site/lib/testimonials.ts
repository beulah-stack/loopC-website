/** Placeholder testimonials — replace copy and images with real clients when available. */

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  /** Unsplash or local public path */
  imageSrc: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "LoopC cut our rollout risk in half. ERP scope stayed honest, dashboards matched how our Chennai HQ and branches actually work.",
    name: "Ananya Krishnan",
    role: "Head of Operations",
    company: "Regional distribution",
    imageSrc:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=88",
  },
  {
    id: "2",
    quote:
      "Finally a team that did not sell us shelf-ware. CRM views are tied to our pipeline stages—not a generic SaaS template.",
    name: "Rahul Venkat",
    role: "Commercial Director",
    company: "B2B services",
    imageSrc:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=88",
  },
  {
    id: "3",
    quote:
      "Pricing was transparent and the weekly demos kept leadership aligned. We went live on one entity first, then scaled.",
    name: "Meera Subramanian",
    role: "CFO",
    company: "Manufacturing group",
    imageSrc:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=88",
  },
  {
    id: "4",
    quote:
      "Our executives use the executive cockpit every Monday. Same numbers as finance—no more arguing about which spreadsheet is “truth.”",
    name: "David Thomas",
    role: "CEO",
    company: "Multi-site retail",
    imageSrc:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=88",
  },
];
