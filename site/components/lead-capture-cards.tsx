import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { leadOffers } from "@/lib/lead-offers";

export function LeadCaptureCards() {
  return (
    <section className="border-y border-slate-200/80 bg-gradient-to-b from-teal-50/50 via-white to-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">Get started</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Convert faster than a generic contact form
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600">
            Visitor → read → download brochure → book demo → discovery call → proposal. We customize
            the ERP to your requirements and share low pricing after we understand your scope.
          </p>
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {leadOffers.map((offer, i) => (
            <FadeIn key={offer.slug} delay={0.06 * i}>
              <article className="glass-panel flex h-full flex-col rounded-2xl border border-teal-100/60 p-7">
                <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  {offer.title}
                </p>
                <h3 className="mt-3 text-lg font-bold text-slate-900">{offer.headline}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {offer.description}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-slate-600">
                  {offer.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-teal-600" aria-hidden>
                        ✓
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${offer.slug}`}
                  className="interactive-shine mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-600 to-teal-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-teal-600/20 transition hover:brightness-105"
                >
                  {offer.cta}
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-10 text-center">
          <Link
            href="/download-brochure"
            className="text-sm font-semibold text-teal-700 hover:text-teal-800"
          >
            Download product brochure →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
