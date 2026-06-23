import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "ERP Product Brochure",
  description: `LoopC ERP brochure for trading businesses — ${siteConfig.name}.`,
};

export default function BrochurePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 font-sans text-slate-800 sm:px-6 sm:py-16 print:py-8">
      <header className="border-b border-slate-200 pb-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
          {siteConfig.legalName}
        </p>
        <h1 className="mt-2 text-3xl font-extrabold text-slate-900">
          ERP Software for Trading Businesses
        </h1>
        <p className="mt-3 text-lg text-slate-600">{siteConfig.erpSalesLine}</p>
      </header>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-slate-900">Core modules</h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-slate-700">
          <li>
            ERP dashboard — English, Arabic (SA), Uzbek, and Russian language support
          </li>
          <li>Inventory management — multi-warehouse, ageing, transfers</li>
          <li>Purchase management — PO, GRN, vendor pricing</li>
          <li>Sales management — orders, dispatch, invoicing, collections</li>
          <li>Customer management — credit, territories, history</li>
          <li>Accounting — GST invoicing, ledgers, financial reports</li>
          <li>Reports &amp; analytics — margin, movement, executive dashboards</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-slate-900">Industries</h2>
        <p className="mt-3 text-slate-700">
          Wholesale businesses · Distributors · Import export companies · Retail chains
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-slate-900">Plans</h2>
        <p className="mt-3 text-slate-700">
          Starter · Business · Enterprise — customized to your requirements with low, scoped pricing
          after discovery call and demo.
        </p>
      </section>

      <section className="mt-10 rounded-xl border border-teal-200 bg-teal-50/50 p-6">
        <h2 className="text-lg font-bold text-slate-900">Next steps</h2>
        <p className="mt-2 text-sm text-slate-600">
          Book a free demo or business process audit. Chennai HQ · Remote demos across India.
        </p>
        <p className="mt-4 text-sm">
          <span className="font-semibold">Sales:</span>{" "}
          <a href={`mailto:${siteConfig.salesEmail}`} className="text-teal-700">
            {siteConfig.salesEmail}
          </a>
          {" · "}
          <span className="font-semibold">Phone:</span> {siteConfig.phoneDisplay}
        </p>
      </section>

      <p className="mt-10 text-center text-sm text-slate-500 print:hidden">
        <Link href="/free-demo" className="font-semibold text-teal-700 hover:underline">
          Book a free demo →
        </Link>
      </p>
    </div>
  );
}
