import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllTags, getPostsByTag } from "@/lib/posts";
import { PostCard } from "@/components/PostCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export function generateStaticParams() {
  return getAllTags().map((t) => ({ tag: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const { tag: tagParam } = await params;
  const { tag, posts } = getPostsByTag(tagParam);
  if (posts.length === 0) return {};
  return {
    title: `${tag} guides`,
    description: `All Inferra guides tagged "${tag}".`,
    alternates: { canonical: `/tags/${tagParam}` },
  };
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag: tagParam } = await params;
  const { tag, posts } = getPostsByTag(tagParam);
  if (posts.length === 0) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Topics", href: "/tags" },
          { label: tag },
        ]}
      />
      <h1>{tag}</h1>
      <p className="muted">
        {posts.length} {posts.length === 1 ? "guide" : "guides"} tagged &ldquo;{tag}&rdquo;.
      </p>

      <div className="card-grid">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}
