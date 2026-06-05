import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "ERP products & services",
  description:
    "Buy LoopC ERP—the application we build and sell—plus CRM dashboards, BI, implementation, integration, and support.",
  openGraph: {
    title: `ERP & products | ${siteConfig.brand}`,
    description: "ERP software for sale and related services from LoopC Business Strategies.",
    url: "/services",
  },
};

const offerings = [
  {
    title: "What we sell first: LoopC ERP",
    points: [
      "A product we develop ourselves—finance, inventory, procurement, and core operations in one stack",
      "Commercial models you can publish: perpetual license, annual subscription, or hybrid (define yours in sales)",
      "Configuration and templates so buyers see working screens before they commit",
    ],
  },
  {
    title: "CRM & dashboards (sold with ERP)",
    points: [
      "Revenue and service views that read the same master data as your sold ERP product",
      "Optional packs for sales, customer success, and leadership KPIs",
      "Clear packaging so customers know what is included in the purchase",
    ],
  },
  {
    title: "Services that close the sale",
    points: [
      "Discovery workshops that turn requirements into a written product + services quote",
      "Demos of the actual build you will run—not generic slides",
      "Training and go-live services priced separately or bundled—your call",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 hero-mesh opacity-70" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">ERP & products</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            We build ERP—and we sell it
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
            {siteConfig.name} is an ERP product company: our team engineers LoopC ERP, packages it
            for sale, and helps customers in Chennai and across India buy, deploy, and run it.
            CRM dashboards, reporting, integrations, and support are offered so the sale turns into
            lasting value—not a one-off invoice.
          </p>
        </FadeIn>

        <FadeIn className="mt-14" delay={0.05}>
          <h2 className="text-xl font-bold text-slate-900">Catalogue</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Start with the ERP product, then add modules and services. Each card links to a short
            page you can extend with datasheets or pricing PDFs.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="glass-panel block h-full rounded-2xl border border-teal-100/50 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-lg"
                >
                  <span className="text-sm font-bold text-teal-700">{s.title}</span>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.short}</p>
                  <span className="mt-3 inline-block text-xs font-semibold text-slate-900">
                    Details & sales →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </FadeIn>

        <div className="mt-16 space-y-12">
          {offerings.map((block, i) => (
            <FadeIn key={block.title} delay={0.06 * i}>
              <article className="glass-panel rounded-3xl p-8 sm:p-10">
                <h2 className="text-2xl font-bold text-slate-900">{block.title}</h2>
                <ul className="mt-6 space-y-4">
                  {block.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-slate-600">
                      <span
                        className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-teal-500 to-cyan-400"
                        aria-hidden
                      />
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-16">
          <div className="flex flex-col items-start gap-4 rounded-3xl border border-teal-200/80 bg-gradient-to-br from-teal-50 to-white p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Request pricing for the ERP we sell</h2>
              <p className="mt-2 max-w-xl text-sm text-slate-600">
                Share entities, users, and modules—we will respond with a product + services quote
                you can compare honestly against other vendors.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 rounded-full bg-gradient-to-r from-teal-600 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-600/25 transition hover:brightness-105"
            >
              Contact sales
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
