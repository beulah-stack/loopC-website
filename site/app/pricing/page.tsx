import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { PageBanner } from "@/components/page-banner";
import { pricingTiers } from "@/lib/pricing";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Customized LoopC ERP at low pricing—Starter, Business, and Enterprise tiers for trading businesses. Book a demo for a scoped quote.",
  openGraph: {
    title: `Pricing | ${siteConfig.brand}`,
    description: "Customized ERP with low, scoped pricing—quote after discovery call.",
    url: "/pricing",
  },
};

export default function PricingPage() {
  return (
    <div>
      <PageBanner
        banner="pricing"
        eyebrow="Pricing"
        title="Customized ERP at low pricing"
        description={`${siteConfig.customizationLine} ${siteConfig.pricingLine} Review tiers below, then book a demo for a scoped proposal.`}
        priority
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <FadeIn key={tier.id} delay={0.08 * i}>
              <article
                className={`glass-panel flex h-full flex-col rounded-2xl p-8 ${
                  tier.id === "business"
                    ? "border-2 border-teal-400/60 shadow-xl shadow-teal-600/10"
                    : "border border-slate-200/80"
                }`}
              >
                {tier.id === "business" ? (
                  <span className="mb-4 inline-flex w-fit rounded-full bg-teal-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal-800">
                    Most popular
                  </span>
                ) : null}
                <h2 className="text-2xl font-bold text-slate-900">{tier.name}</h2>
                <p className="mt-2 text-sm font-medium text-teal-700">{tier.tagline}</p>
                <p className="mt-4 text-sm text-slate-600">Ideal for: {tier.idealFor}</p>
                <ul className="mt-6 flex-1 space-y-2 text-sm text-slate-600">
                  {tier.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="text-teal-600" aria-hidden>
                        ✓
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm font-semibold text-slate-500">{tier.priceNote}</p>
                <Link
                  href="/free-demo"
                  className="interactive-shine mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-600 to-teal-500 px-5 py-3 text-sm font-semibold text-white shadow-md"
                >
                  Book demo for quote
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-16 rounded-2xl border border-amber-200/80 bg-amber-50/80 p-6 text-center sm:p-8">
          <h2 className="text-lg font-bold text-slate-900">Recommended path</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600">
            Visitor → read website →{" "}
            <Link href="/download-brochure" className="font-semibold text-teal-700 hover:underline">
              download brochure
            </Link>{" "}
            →{" "}
            <Link href="/free-demo" className="font-semibold text-teal-700 hover:underline">
              book demo
            </Link>{" "}
            → discovery call → proposal. We customize the ERP to your requirements and share low,
            scoped pricing after we understand your operation—not before.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/free-audit"
              className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Free audit
            </Link>
            <Link
              href="/free-consultation"
              className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Free consultation
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
