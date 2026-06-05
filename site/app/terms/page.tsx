import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of service",
  description: `Terms of service for ${siteConfig.name}.`,
  openGraph: {
    title: `Terms of service | ${siteConfig.brand}`,
    url: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Terms of service</h1>
      <p className="mt-6 text-sm leading-relaxed text-slate-600">
        This is a <strong className="text-slate-900">placeholder</strong> page. Replace with your
        master services agreement, SaaS terms, limitation of liability, governing law (e.g. Tamil
        Nadu / India), and support SLAs as appropriate.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">
        {siteConfig.legalName} — {siteConfig.addressLines[1]}, {siteConfig.addressLines[2]}.{" "}
        <a href={`mailto:${siteConfig.salesEmail}`} className="text-teal-700 hover:underline">
          {siteConfig.salesEmail}
        </a>
      </p>
      <p className="mt-4 text-sm text-slate-500">Last updated: {new Date().toLocaleDateString("en-IN")}</p>
    </div>
  );
}
