import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/fade-in";
import { JsonLd } from "@/components/json-ld";
import { blogPosts, getAllBlogSlugs, getBlogPost } from "@/lib/blog-posts";
import { getAbsoluteUrl, openGraphTitle } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article not found" };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} | ${openGraphTitle}`,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.updatedAt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    dateModified: post.updatedAt,
    datePublished: post.updatedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.legalName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: getAbsoluteUrl("/"),
    },
    mainEntityOfPage: getAbsoluteUrl(`/blog/${post.slug}`),
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <JsonLd data={articleSchema} />

      <FadeIn>
        <Link href="/blog" className="text-sm font-semibold text-teal-700 hover:text-teal-800">
          ← All articles
        </Link>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
          {post.readMinutes} min read · {post.updatedAt}
        </p>
        <h1 className="font-display mt-4 text-4xl font-bold tracking-tight text-slate-900">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-slate-600">{post.description}</p>
      </FadeIn>

      <div className="mt-10 space-y-10">
        {post.sections.map((section) => (
          <FadeIn key={section.heading}>
            <h2 className="text-xl font-bold text-slate-900">{section.heading}</h2>
            <div className="mt-4 space-y-4 text-slate-600 leading-relaxed">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-14 rounded-2xl border border-teal-100 bg-teal-50/50 p-6 text-center">
        <p className="font-semibold text-slate-900">See LoopC ERP on your trading workflows</p>
        <Link
          href="/free-demo"
          className="mt-4 inline-flex rounded-full bg-gradient-to-r from-teal-600 to-teal-500 px-6 py-3 text-sm font-semibold text-white"
        >
          Book a free demo
        </Link>
      </FadeIn>
    </article>
  );
}
