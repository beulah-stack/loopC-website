import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Case studies",
  description: `Customer stories and outcomes from ${siteConfig.name} ERP and CRM engagements.`,
  openGraph: {
    title: `Case studies | ${siteConfig.brand}`,
    description: "Selected client outcomes—replace with your real case studies.",
    url: "/case-studies",
  },
};

const placeholders = [
  { title: "Manufacturing — inventory & MRP visibility", sector: "Manufacturing", status: "Draft" },
  { title: "Distribution — multi-branch ERP rollout", sector: "Distribution", status: "Draft" },
  { title: "Services — CRM pipeline & executive dashboards", sector: "Services", status: "Draft" },
];

export default function CaseStudiesPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 hero-mesh opacity-60" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">Case studies</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900">
            Outcomes we are proud to share
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-600">
            Replace these cards with anonymised or public stories: problem, approach, metrics, and
            quote from your client. This page is structured for long-form case study links later.
          </p>
        </FadeIn>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {placeholders.map((c, i) => (
            <FadeIn key={c.title} delay={0.06 * i}>
              <article className="glass-panel flex h-full flex-col rounded-2xl p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700">{c.sector}</span>
                <h2 className="mt-3 text-lg font-bold text-slate-900">{c.title}</h2>
                <p className="mt-3 flex-1 text-sm text-slate-600">
                  Add 2–3 sentences on challenge and result. Attach PDF or link to full story when
                  ready.
                </p>
                <p className="mt-4 text-xs font-semibold text-slate-400">{c.status}</p>
              </article>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-14 text-center">
          <Link
            href="/request-demo"
            className="inline-flex rounded-full bg-gradient-to-r from-teal-600 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-600/25 hover:brightness-105"
          >
            Request a demo
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}
