import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/fade-in";
import { getServiceBySlug, services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) return { title: "Product" };
  return {
    title: svc.title,
    description: svc.short,
    openGraph: {
      title: `${svc.title} | ${siteConfig.brand}`,
      description: svc.short,
      url: `/services/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) notFound();

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 hero-mesh opacity-60" />
      <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">ERP & products</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900">{svc.title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">{svc.short}</p>
        </FadeIn>
        {svc.productPitch ? (
          <FadeIn className="mt-8 rounded-2xl border border-teal-100 bg-teal-50/50 p-6 text-slate-700" delay={0.06}>
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-800">Selling LoopC</p>
            <p className="mt-3 leading-relaxed">{svc.productPitch}</p>
          </FadeIn>
        ) : null}
        <FadeIn className="mt-10 space-y-4 text-slate-600" delay={0.08}>
          <p>
            Use this page for datasheets, module lists, or pricing tiers. When you are ready, add
            downloadable PDFs or a &ldquo;Buy now&rdquo; flow—structure is in place for buyers who
            already understand ERP.
          </p>
          <p>
            For a commercial quote on <strong className="text-slate-900">{svc.title}</strong>,
            contact sales—we work with teams across India from our Chennai base.
          </p>
        </FadeIn>
        <FadeIn className="mt-12 flex flex-wrap gap-4" delay={0.12}>
          <Link
            href="/services"
            className="text-sm font-semibold text-teal-700 hover:text-teal-800"
          >
            ← All ERP & products
          </Link>
          <Link
            href="/request-demo"
            className="inline-flex rounded-full bg-gradient-to-r from-teal-600 to-teal-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:brightness-105"
          >
            Request demo
          </Link>
          <Link
            href="/contact"
            className="inline-flex rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Get pricing
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}
