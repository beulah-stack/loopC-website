import type { Metadata } from "next";
import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/fade-in";
import { PageBanner } from "@/components/page-banner";
import { industries } from "@/lib/industries";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "LoopC ERP for wholesale businesses, distributors, import-export companies, and retail chains in India.",
  keywords: ["wholesale business ERP", "distributor ERP software", "ERP for trading business"],
  openGraph: {
    title: `Industries | ${siteConfig.brand}`,
    url: "/industries",
  },
};

export default function IndustriesPage() {
  return (
    <div>
      <PageBanner
        banner="industries"
        eyebrow="Industries"
        title="ERP shaped for how traders actually work"
        description="Wholesale, distribution, import-export, and retail chains—same product core, configured to your operating model."
        priority
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <Stagger className="grid gap-8 lg:grid-cols-2">
          {industries.map((ind) => (
            <StaggerItem key={ind.slug}>
              <article
                id={ind.slug}
                className="glass-panel h-full rounded-2xl border border-slate-200/80 p-8"
              >
                <h2 className="text-2xl font-bold text-slate-900">{ind.title}</h2>
                <p className="mt-3 text-slate-600">{ind.summary}</p>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Common pain
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-600">
                      {ind.challenges.map((c) => (
                        <li key={c}>· {c}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
                      With LoopC ERP
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-600">
                      {ind.outcomes.map((o) => (
                        <li key={o} className="flex gap-2">
                          <span className="text-teal-600" aria-hidden>
                            ✓
                          </span>
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link
                  href="/free-consultation"
                  className="mt-6 inline-flex text-sm font-semibold text-teal-700 hover:text-teal-800"
                >
                  Free consultation for {ind.title.toLowerCase()} →
                </Link>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </div>
  );
}
