import type { Metadata } from "next";
import { DownloadBrochureClient } from "./download-brochure-client";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Download brochure",
  description: `Download the LoopC ERP product brochure for trading businesses — ${siteConfig.name}.`,
  openGraph: {
    title: `Download brochure | ${siteConfig.brand}`,
    url: "/download-brochure",
  },
};

export default function DownloadBrochurePage() {
  return <DownloadBrochureClient />;
}
