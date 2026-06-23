import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, Stagger, StaggerItem } from "@/components/fade-in";
import { HomeHero } from "@/components/home-hero";
import { InteractiveTiltCard } from "@/components/interactive-tilt-card";
import { LeadCaptureCards } from "@/components/lead-capture-cards";
import { PartnerColorGrid } from "@/components/partner-grid";
import { ScrollRevealWords } from "@/components/scroll-reveal-text";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { features } from "@/lib/features";
import { siteConfig } from "@/lib/site-config";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "ERP Software for Trading Businesses",
  description: siteConfig.description,
  keywords: [
    "ERP for trading business",
    "inventory management software",
    "wholesale business ERP",
    "distributor ERP software",
    "ERP dashboard multilingual",
    "ERP software English Arabic Uzbek Russian",
  ],
  openGraph: {
    title: `ERP for Trading Businesses | ${siteConfig.brand}`,
    description: siteConfig.description,
    url: "/",
  },
};

const homeFeatures = features.slice(0, 3);

export default function HomePage() {
  return (
    <div>
      <HomeHero />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          <ScrollRevealWords text="Run trading operations from one system" staggerMs={40} />
        </h2>
        <FadeIn>
          <p className="mt-4 max-w-2xl text-slate-600">
            Stop reconciling spreadsheets with Tally every month. LoopC ERP connects stock
            movements to sales, purchases, and GST books—on a dashboard in English, SA, UZ, or RU,
            customized to your requirements at low pricing.
          </p>
        </FadeIn>
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-3">
          {homeFeatures.map((f) => (
            <StaggerItem key={f.slug}>
              <InteractiveTiltCard className="h-full">
                <div className="glass-panel group relative h-full overflow-hidden rounded-2xl border border-teal-100/60 bg-gradient-to-br from-white to-teal-50/30 p-7 shadow-md transition duration-500 ease-out hover:border-teal-200/80 hover:shadow-2xl">
                  <span className="inline-block h-1.5 w-12 rounded-full bg-gradient-to-r from-teal-500 via-cyan-400 to-violet-400" />
                  <h3 className="font-display mt-5 text-lg font-bold text-slate-900">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.summary}</p>
                </div>
              </InteractiveTiltCard>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeIn className="mt-10">
          <Link href="/features" className="text-sm font-semibold text-teal-700 hover:text-teal-800">
            View all features →
          </Link>
        </FadeIn>
      </section>

      <LeadCaptureCards />

      <section className="relative overflow-hidden border-y border-slate-800/50 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(45,212,191,0.15),transparent)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-400">Testimonials</p>
          </FadeIn>
          <h2 className="font-display mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <ScrollRevealWords text="Trusted by trading operators across India" staggerMs={32} />
          </h2>
          <div className="mt-12">
            <TestimonialSlider items={testimonials} />
          </div>
          <FadeIn className="mt-12 text-center">
            <Link
              href="/industries"
              className="inline-flex rounded-full border border-teal-500/40 bg-teal-500/10 px-5 py-2.5 text-sm font-semibold text-teal-200 transition hover:border-teal-400 hover:bg-teal-500/20"
            >
              See industries we serve →
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-gradient-to-b from-teal-50/40 via-white to-violet-50/30 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <FadeIn>
            <h2 className="text-2xl font-bold text-slate-900">Who we work with</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Wholesale, distribution, import-export, and retail trading teams.
            </p>
          </FadeIn>
          <PartnerColorGrid />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-teal-900 px-6 py-14 text-center shadow-2xl sm:px-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(45,212,191,0.2),transparent_55%)]" />
            <div className="relative">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Ready for a 30-minute ERP demo?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-teal-100/95">
                See inventory, sales, purchases, and accounts on your workflows—customized to your
                requirements, then a discovery call and low-pricing proposal.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Link
                  href="/free-demo"
                  className="interactive-shine inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-bold text-slate-900 shadow-xl transition hover:bg-teal-50"
                >
                  Book a free demo
                </Link>
                <Link
                  href="/download-brochure"
                  className="inline-flex rounded-full border border-white/30 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Download brochure
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
