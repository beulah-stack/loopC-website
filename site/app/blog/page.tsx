import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { PageBanner } from "@/components/page-banner";
import { blogPosts } from "@/lib/blog-posts";
import { openGraphDescription, openGraphTitle, seoKeywords } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "ERP Insights & Guides",
  description:
    "Articles on trading ERP, inventory control, multi-currency operations, customer margins, and procurement.",
  keywords: [...seoKeywords, "ERP blog", "trading business tips"],
  openGraph: {
    title: `${openGraphTitle} — Insights`,
    description: openGraphDescription,
    url: "/blog",
  },
};

export default function BlogPage() {
  return (
    <div>
      <PageBanner
        banner="features"
        eyebrow="Blog"
        title="ERP insights for trading teams"
        description="Guides on inventory, finance, procurement, and operations—written for wholesale, distribution, and commodity businesses."
        priority
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="space-y-8">
          {blogPosts.map((post, i) => (
            <FadeIn key={post.slug} delay={0.05 * i}>
              <article className="glass-panel rounded-2xl border border-teal-100/70 p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
                  {post.readMinutes} min read · {post.updatedAt}
                </p>
                <h2 className="font-display mt-3 text-2xl font-bold text-slate-900">
                  <Link href={`/blog/${post.slug}`} className="hover:text-teal-800">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-slate-600">{post.description}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex text-sm font-semibold text-teal-700 hover:text-teal-800"
                >
                  Read article →
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 text-center">
          <p className="text-sm text-slate-600">
            Ready to see LoopC ERP on your workflows?
          </p>
          <Link
            href="/free-demo"
            className="mt-3 inline-flex rounded-full bg-gradient-to-r from-teal-600 to-teal-500 px-6 py-3 text-sm font-semibold text-white"
          >
            Book a free demo
          </Link>
          <p className="mt-4 text-xs text-slate-500">{siteConfig.name}</p>
        </FadeIn>
      </section>
    </div>
  );
}
