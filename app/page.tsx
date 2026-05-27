import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { site } from "@/lib/site";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      <h1>{site.name}</h1>
      <p className="muted">{site.description}</p>

      {posts.length === 0 ? (
        <p className="muted">No posts yet. Add an .mdx file to content/blog/.</p>
      ) : (
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.slug}>
              <h2>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p>{post.description}</p>
              <p className="post-meta">{formatDate(post.date)}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
