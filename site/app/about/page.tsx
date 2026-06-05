import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "LoopC Business Strategies builds and sells ERP software—fair pricing, clear product scope, and delivery shaped to Indian businesses.",
  openGraph: {
    title: `About | ${siteConfig.brand}`,
    description: "Who we are: an ERP product company based in Chennai.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 hero-mesh opacity-60" />
      <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">About</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900">
            {siteConfig.name}
          </h1>
        </FadeIn>
        <FadeIn delay={0.08} className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">
          <p>
            We are an <strong className="text-slate-900">ERP product company</strong>. Our team
            designs and builds LoopC ERP in-house, then sells it to organisations that need one
            dependable system for finance, inventory, procurement, and operations—priced so
            mid-market teams in India can actually afford to own it.
          </p>
          <p>
            Selling software we build means we stand behind the roadmap: buyers get honest
            answers on what is in the product today, what is on the near-term backlog, and what
            still belongs in a services estimate (integrations, cutover, training).
          </p>
          <p>
            Replace this paragraph with your founding story, industries you focus on, and any
            certifications or partnerships. Keep it short—this page supports the purchase decision.
          </p>
          <p>
            <strong className="text-slate-900">How we sell & deliver:</strong> product demos
            on the real build, written quotes that separate licence/subscription from services,
            phased go-live, and training on the ERP the customer bought.
          </p>
        </FadeIn>
        <FadeIn delay={0.16} className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/services"
            className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50"
          >
            View ERP & products
          </Link>
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-gradient-to-r from-teal-600 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-600/25 transition hover:brightness-105"
          >
            Talk to sales
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}
