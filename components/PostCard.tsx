import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { formatDate } from "@/lib/format";
import { tagSlug } from "@/lib/posts";

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="post-card">
      <h3 className="post-card-title">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p className="post-card-desc">{post.description}</p>
      <div className="post-meta">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden>·</span>
        <span>{post.readingMinutes} min read</span>
      </div>
      {post.tags.length > 0 && (
        <div className="tag-row">
          {post.tags.map((tag) => (
            <Link key={tag} href={`/tags/${tagSlug(tag)}`} className="tag tag-link">
              {tag}
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}
