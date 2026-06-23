import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";
import { getAbsoluteUrl, sitemapPaths } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = sitemapPaths.map((path) => ({
    url: getAbsoluteUrl(path),
    lastModified,
    changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "/" ? 1 : path === "/features" || path === "/pricing" ? 0.9 : 0.7,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: getAbsoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
