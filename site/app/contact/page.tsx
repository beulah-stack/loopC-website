import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/fade-in";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Buy LoopC ERP or ask for pricing—contact ${siteConfig.name} sales in Chennai.`,
  openGraph: {
    title: `Contact | ${siteConfig.brand}`,
    description: `Reach ${siteConfig.name} by form or email.`,
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 hero-mesh opacity-50" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Contact</h1>
            <p className="mt-4 text-lg text-slate-600">
              ERP product quotes, add-on modules, or implementation—send a note and sales will
              respond with next steps.
            </p>
            <div className="mt-8 rounded-2xl border border-slate-200/90 bg-white/80 p-6 shadow-sm backdrop-blur">
              <p className="text-sm font-medium text-slate-500">Visit</p>
              <address className="mt-1 not-italic text-sm leading-relaxed text-slate-700">
                {siteConfig.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <p className="mt-5 text-sm font-medium text-slate-500">Email</p>
              <p className="mt-1">
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-base font-semibold text-teal-700 hover:underline"
                >
                  {siteConfig.contactEmail}
                </a>
                <span className="mx-2 text-slate-300">·</span>
                <a
                  href={`mailto:${siteConfig.salesEmail}`}
                  className="text-base font-semibold text-teal-700 hover:underline"
                >
                  {siteConfig.salesEmail}
                </a>
              </p>
              <p className="mt-5 text-sm font-medium text-slate-500">Phone</p>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="mt-1 inline-block text-base font-semibold text-slate-900 hover:text-teal-700"
              >
                {siteConfig.phoneDisplay}
              </a>
              <p className="mt-5 text-xs leading-relaxed text-slate-500">{siteConfig.businessHours}</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="glass-panel rounded-3xl p-6 sm:p-8">
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
