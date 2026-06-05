import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { LiveMarketPulse } from "@/components/live-market-pulse";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights from LoopC Business Strategies plus live market pulse: gold (USD proxy), sentiment index, and FX reference for planning.",
  openGraph: {
    title: `Blog | ${siteConfig.brand}`,
    description: "Articles and live market pulse for operators and marketers.",
    url: "/blog",
  },
};

const posts = [
  {
    title: "Why ERP projects stall (and how to de-risk yours)",
    excerpt:
      "Scope creep, missing executive sponsor, and “big bang” go-lives. A short playbook for mid-market teams who need momentum.",
    date: "Coming soon",
    tag: "ERP",
  },
  {
    title: "Designing CRM dashboards people actually open",
    excerpt:
      "Start from decisions, not charts. We share a simple framework for landing pages per role.",
    date: "Coming soon",
    tag: "CRM",
  },
  {
    title: "Fair pricing without hiding the tradeoffs",
    excerpt:
      "What we cut first, what we never compromise on, and how we keep delivery predictable.",
    date: "Coming soon",
    tag: "Strategy",
  },
];

export default function BlogPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-slate-200/80">
        <div className="pointer-events-none absolute inset-0 hero-mesh" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">Blog</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Ideas + live market pulse
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-slate-600">
              Editorials from {siteConfig.brand} on ERP and CRM delivery—plus a live strip for
              gold (USD), global risk sentiment, and a USD/EUR reference to support planning and
              marketing conversations.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-18">
        <FadeIn>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Live pulse</h2>
              <p className="mt-1 max-w-2xl text-sm text-slate-600">
                Data is fetched from public endpoints and refreshed automatically. Gold uses a
                PAXG-based proxy (not official LBMA); sentiment uses the popular Fear &amp; Greed
                index as a macro mood signal.
              </p>
            </div>
            <Link
              href="/contact"
              className="text-sm font-semibold text-teal-700 hover:text-teal-800"
            >
              Want this inside your CRM? Talk to us →
            </Link>
          </div>
        </FadeIn>
        <div className="mt-10">
          <LiveMarketPulse />
        </div>
      </section>

      <section className="border-t border-slate-200/80 bg-white/50 py-14 backdrop-blur-sm sm:py-18">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold text-slate-900">From the team</h2>
            <p className="mt-2 text-sm text-slate-600">
              Replace these cards with real posts (MDX, CMS, or static)—structure is ready.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {posts.map((post, i) => (
              <FadeIn key={post.title} delay={0.07 * i}>
                <article className="glass-panel flex h-full flex-col rounded-2xl p-6 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                  <span className="text-[0.7rem] font-bold uppercase tracking-wider text-teal-700">
                    {post.tag}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-slate-900">{post.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
                  <p className="mt-5 text-xs font-semibold text-slate-400">{post.date}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
