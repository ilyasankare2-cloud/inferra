import type { Metadata } from "next";
import Link from "next/link";
import { getAllTags } from "@/lib/posts";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Topics",
  description: "Browse all Inferra guides by topic — ONNX, inference, MLOps, deployment, and more.",
  alternates: { canonical: "/tags" },
};

export default function TagsIndex() {
  const tags = getAllTags();

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Topics" }]} />
      <h1>Topics</h1>
      <p className="muted">Browse guides by topic.</p>

      <div className="tag-cloud">
        {tags.map((t) => (
          <Link key={t.slug} href={`/tags/${t.slug}`} className="tag tag-link">
            {t.tag} <span className="tag-count">{t.count}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
