"use client";

import Link from "next/link";
import { useCallback } from "react";
import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/fade-in";

export function DownloadBrochureClient() {
  const triggerBrochure = useCallback(() => {
    window.open("/brochure", "_blank", "noopener,noreferrer");
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 hero-mesh opacity-50" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
              Product brochure
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900">
              Download the LoopC ERP brochure
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              Overview of modules, industries, and implementation approach for trading businesses
              in India—then book a demo when you are ready.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-slate-600">
              <li className="flex gap-2">
                <span className="text-teal-600" aria-hidden>
                  ✓
                </span>
                Inventory, purchase, sales, accounting &amp; reports
              </li>
              <li className="flex gap-2">
                <span className="text-teal-600" aria-hidden>
                  ✓
                </span>
                Built for wholesale, distribution &amp; import-export
              </li>
              <li className="flex gap-2">
                <span className="text-teal-600" aria-hidden>
                  ✓
                </span>
                GST-ready workflows for Indian trading companies
              </li>
            </ul>
            <p className="mt-8 text-sm text-slate-500">
              Next step after reading:{" "}
              <Link href="/free-demo" className="font-semibold text-teal-700 hover:underline">
                book a free demo
              </Link>
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="glass-panel rounded-3xl p-6 sm:p-8">
              <ContactForm intent="brochure" onBrochureSuccess={triggerBrochure} />
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
