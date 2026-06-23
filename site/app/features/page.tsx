import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { FeaturesHorizontalScroll } from "@/components/features-horizontal-scroll";
import { PageBanner } from "@/components/page-banner";
import { features, featuresPageCopy } from "@/lib/features";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Powerful ERP features for modern trading businesses—financial management, multi-currency, inventory, customers, suppliers, sales, HR, and analytics.",
  keywords: [
    "ERP financial management",
    "multi-currency ERP",
    "inventory management software",
    "ERP for trading business",
    "trading company management software",
  ],
  openGraph: {
    title: `Features | ${siteConfig.brand}`,
    description: featuresPageCopy.subtitle,
    url: "/features",
  },
};

export default function FeaturesPage() {
  return (
    <div>
      <PageBanner
        banner="features"
        eyebrow={featuresPageCopy.eyebrow}
        title={featuresPageCopy.title}
        description={`${featuresPageCopy.subtitle} ${siteConfig.dashboardLanguageLine}`}
        priority
      >
        <Link
          href="/free-demo"
          className="interactive-shine inline-flex rounded-full bg-gradient-to-r from-teal-500 to-teal-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-900/30 transition hover:brightness-105"
        >
          Book a free demo
        </Link>
      </PageBanner>

      <FeaturesHorizontalScroll categories={features} />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <FadeIn className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-900 via-slate-900 to-teal-900 px-6 py-12 text-center sm:px-10">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            See business value—not just menus
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-teal-100/95 sm:text-base">
            {siteConfig.customizationLine} Book a demo to walk through these modules on your
            trading workflows.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/free-demo"
              className="interactive-shine inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-teal-50"
            >
              Schedule a 30-minute demo
            </Link>
            <Link
              href="/pricing"
              className="inline-flex rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View pricing tiers
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
