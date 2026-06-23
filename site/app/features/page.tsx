import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, Stagger, StaggerItem } from "@/components/fade-in";
import { PageBanner } from "@/components/page-banner";
import { features } from "@/lib/features";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Features",
  description:
    "LoopC ERP features for trading businesses: multilingual ERP dashboard (EN, SA, UZ, RU), inventory, purchase, sales, accounting, and reports.",
  keywords: [
    "inventory management software",
    "ERP for trading business",
    "trading company management software",
  ],
  openGraph: {
    title: `Features | ${siteConfig.brand}`,
    url: "/features",
  },
};

export default function FeaturesPage() {
  return (
    <div>
      <PageBanner
        banner="features"
        eyebrow="Features"
        title="Everything a trading business runs on—one ERP"
        description={`${siteConfig.dashboardLanguageLine} Plus inventory, purchases, sales, customers, accounting, and analytics—${siteConfig.customizationLine.toLowerCase()}`}
        priority
      >
        <Link
          href="/free-demo"
          className="interactive-shine inline-flex rounded-full bg-gradient-to-r from-teal-500 to-teal-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-900/30 transition hover:brightness-105"
        >
          Book a free demo
        </Link>
      </PageBanner>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <Stagger className="grid gap-8 md:grid-cols-2">
          {features.map((f) => (
            <StaggerItem key={f.slug}>
              <article
                id={f.slug}
                className="glass-panel h-full rounded-2xl border border-teal-100/60 p-8"
              >
                <span className="inline-block h-1 w-10 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400" />
                <h2 className="mt-4 text-2xl font-bold text-slate-900">{f.title}</h2>
                <p className="mt-3 text-slate-600">{f.summary}</p>
                <ul className="mt-5 space-y-2 text-sm text-slate-600">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-teal-600" aria-hidden>
                        ✓
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeIn className="mt-16 text-center">
          <p className="text-slate-600">See it on your workflows—not a generic tour.</p>
          <Link
            href="/free-demo"
            className="mt-4 inline-flex rounded-full border-2 border-teal-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:border-teal-400"
          >
            Schedule a 30-minute demo
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
