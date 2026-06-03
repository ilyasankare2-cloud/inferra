import type { MetadataRoute } from "next";
import { getAllPosts, getAllTags } from "@/lib/posts";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const posts = getAllPosts().map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const tags = getAllTags().map((t) => ({
    url: `${site.url}/tags/${t.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.4,
  }));

  const staticPages = [
    { url: site.url, priority: 1, changeFrequency: "weekly" as const },
    { url: `${site.url}/blog`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${site.url}/tags`, priority: 0.5, changeFrequency: "weekly" as const },
    { url: `${site.url}/about`, priority: 0.3, changeFrequency: "monthly" as const },
  ].map((p) => ({ ...p, lastModified: now }));

  return [...staticPages, ...posts, ...tags];
}
