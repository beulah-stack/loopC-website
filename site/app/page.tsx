import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, Stagger, StaggerItem } from "@/components/fade-in";
import { HomeHero } from "@/components/home-hero";
import { InteractiveTiltCard } from "@/components/interactive-tilt-card";
import { PartnerColorGrid } from "@/components/partner-grid";
import { ScrollRevealWords } from "@/components/scroll-reveal-text";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { siteConfig } from "@/lib/site-config";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = {
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} — ERP software we build & sell`,
    description: siteConfig.description,
    url: "/",
  },
};

const pillars = [
  {
    title: "ERP you purchase—not shelf-ware",
    body: "We build the core ERP ourselves and sell it with clear scope: finance, inventory, procurement, and the workflows you actually run. You know what you are buying before you sign.",
  },
  {
    title: "CRM & dashboards as add-ons",
    body: "Sell smarter with CRM and executive dashboards that plug into the same product data—sold as extensions to your LoopC ERP footprint.",
  },
  {
    title: "Implementation that respects your rollout",
    body: "Buying software is only half the story. We deliver go-live, training, and integrations so your teams adopt the ERP you purchased—not fight it.",
  },
];

export default function HomePage() {
  return (
    <div>
      <HomeHero />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          <ScrollRevealWords
            text={`Why teams choose ${siteConfig.brand}`}
            staggerMs={40}
          />
        </h2>
        <FadeIn>
          <p className="mt-4 max-w-2xl text-slate-600">
            You are not renting someone else’s roadmap forever—you buy LoopC ERP, extend it when
            you need CRM and reporting, and work with us to go live on your terms.
          </p>
        </FadeIn>
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-3">
          {pillars.map((p) => (
            <StaggerItem key={p.title}>
              <InteractiveTiltCard className="h-full">
                <div className="glass-panel group relative h-full overflow-hidden rounded-2xl border border-teal-100/60 bg-gradient-to-br from-white to-teal-50/30 p-7 shadow-md transition duration-500 ease-out hover:border-teal-200/80 hover:shadow-2xl">
                  <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-teal-400/30 to-cyan-400/20 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/50 to-transparent opacity-0 transition group-hover:opacity-100" />
                  <span className="inline-block h-1.5 w-12 rounded-full bg-gradient-to-r from-teal-500 via-cyan-400 to-violet-400" />
                  <h3 className="font-display mt-5 text-lg font-bold text-slate-900">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.body}</p>
                </div>
              </InteractiveTiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="relative overflow-hidden border-y border-slate-800/50 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(45,212,191,0.15),transparent)]" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-teal-600/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-400">Testimonials</p>
          </FadeIn>
          <h2 className="font-display mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <ScrollRevealWords
              text="Trusted by operators who ship—not slide decks"
              staggerMs={32}
            />
          </h2>
          <FadeIn>
            <p className="mt-4 max-w-2xl text-sm text-slate-400">
              Replace with verified client names when contracts allow. Photos stay in full colour.
            </p>
          </FadeIn>
          <div className="mt-12">
            <TestimonialSlider items={testimonials} />
          </div>
          <FadeIn className="mt-12 text-center">
            <Link
              href="/case-studies"
              className="inline-flex rounded-full border border-teal-500/40 bg-teal-500/10 px-5 py-2.5 text-sm font-semibold text-teal-200 transition hover:border-teal-400 hover:bg-teal-500/20"
            >
              View case studies →
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-gradient-to-b from-teal-50/40 via-white to-violet-50/30 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <FadeIn>
            <h2 className="text-2xl font-bold text-slate-900">Who we build with</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Full-colour moments from delivery, workshops, and operations—move the pointer for a
              light spotlight on each tile.
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
                Ready to buy ERP that fits your budget?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-teal-100/95">
                Tell us users, entities, and must-have modules—we will share product scope, pricing,
                and a realistic go-live plan for the ERP we sell.
              </p>
              <Link
                href="/contact"
                className="interactive-shine mt-9 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-bold text-slate-900 shadow-xl transition hover:bg-teal-50"
              >
                Talk to sales
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
