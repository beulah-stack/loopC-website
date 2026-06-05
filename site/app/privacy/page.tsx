import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `Privacy policy for ${siteConfig.name}.`,
  openGraph: {
    title: `Privacy policy | ${siteConfig.brand}`,
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Privacy policy</h1>
      <p className="mt-6 text-sm leading-relaxed text-slate-600">
        This is a <strong className="text-slate-900">placeholder</strong> page. Replace this content
        with a policy drafted or reviewed by qualified counsel for India (including applicable IT
        Act considerations, cookies, analytics, contact forms, and marketing).
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">
        Controller: {siteConfig.legalName}, {siteConfig.addressLines.join(", ")}. Contact:{" "}
        <a href={`mailto:${siteConfig.contactEmail}`} className="text-teal-700 hover:underline">
          {siteConfig.contactEmail}
        </a>
        .
      </p>
      <p className="mt-4 text-sm text-slate-500">Last updated: {new Date().toLocaleDateString("en-IN")}</p>
    </div>
  );
}
