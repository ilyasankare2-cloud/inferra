import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { site } from "@/lib/site";
import { PostCard } from "@/components/PostCard";
import { Newsletter } from "@/components/Newsletter";

const valueProps = [
  {
    title: "Framework-agnostic",
    body: "Train in PyTorch or TensorFlow, deploy anywhere with ONNX and portable runtimes.",
  },
  {
    title: "Edge to production",
    body: "From on-device inference to scaled serving APIs — the full deployment surface.",
  },
  {
    title: "Real, tested code",
    body: "Every guide ships runnable examples. No pseudo-code, no filler.",
  },
  {
    title: "For engineers",
    body: "Written for developers shipping ML, not researchers writing papers.",
  },
];

export default function HomePage() {
  const posts = getAllPosts();
  const recent = posts.slice(0, 6);

  return (
    <>
      <section className="hero">
        <h1 className="hero-title">{site.tagline}</h1>
        <p className="hero-sub">{site.description}</p>
        <div className="hero-cta">
          <Link href="/blog" className="btn btn-primary">
            Read the guides
          </Link>
          <Link href="/about" className="btn btn-ghost">
            About Inferra
          </Link>
        </div>
      </section>

      <section className="value-grid">
        {valueProps.map((v) => (
          <div key={v.title} className="value-card">
            <h3>{v.title}</h3>
            <p className="muted">{v.body}</p>
          </div>
        ))}
      </section>

      <section className="recent">
        <div className="section-head">
          <h2>Latest guides</h2>
          <Link href="/blog" className="see-all">
            View all →
          </Link>
        </div>
        {recent.length === 0 ? (
          <p className="muted">No posts yet. Add an .mdx file to content/blog/.</p>
        ) : (
          <div className="card-grid">
            {recent.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>

      <Newsletter />
    </>
  );
}
