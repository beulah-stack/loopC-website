import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/fade-in";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Request demo",
  description: `Book a demo of the LoopC ERP product we sell—plus CRM add-ons. Chennai & remote.`,
  openGraph: {
    title: `Request demo | ${siteConfig.brand}`,
    description: "Schedule a walkthrough of LoopC solutions.",
    url: "/request-demo",
  },
};

export default function RequestDemoPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 hero-mesh opacity-50" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">Request demo</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900">
              See the ERP we build—before you buy
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              Remote or in person around <strong className="font-semibold text-slate-800">Chennai</strong>—we
              walk you through the LoopC ERP screens, packaging, and pricing so you know exactly
              what you are purchasing.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-slate-600">
              <li className="flex gap-2">
                <span className="text-teal-600" aria-hidden>
                  ✓
                </span>
                Product demo on the build we sell—not a generic slide deck
              </li>
              <li className="flex gap-2">
                <span className="text-teal-600" aria-hidden>
                  ✓
                </span>
                Rough phasing and integration notes for your stack
              </li>
              <li className="flex gap-2">
                <span className="text-teal-600" aria-hidden>
                  ✓
                </span>
                Clear next steps—whether we are the right fit or not
              </li>
            </ul>
            <p className="mt-8 text-sm text-slate-500">
              Prefer email?{" "}
              <a href={`mailto:${siteConfig.salesEmail}`} className="font-semibold text-teal-700 hover:underline">
                {siteConfig.salesEmail}
              </a>
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="glass-panel rounded-3xl p-6 sm:p-8">
              <ContactForm intent="demo" />
            </div>
          </FadeIn>
        </div>
        <p className="mt-12 text-center text-sm text-slate-500">
          <Link href="/case-studies" className="font-semibold text-teal-700 hover:underline">
            Read case studies
          </Link>
          {" · "}
          <Link href="/contact" className="font-semibold text-teal-700 hover:underline">
            General contact
          </Link>
        </p>
      </div>
    </div>
  );
}
