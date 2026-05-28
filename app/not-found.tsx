import Link from "next/link";

export default function NotFound() {
  return (
    <section className="notfound">
      <p className="notfound-code">404</p>
      <h1>Page not found</h1>
      <p className="muted">
        That page doesn&apos;t exist or may have moved. Let&apos;s get you back on track.
      </p>
      <div className="hero-cta">
        <Link href="/" className="btn btn-primary">
          Go home
        </Link>
        <Link href="/blog" className="btn btn-ghost">
          Browse guides
        </Link>
      </div>
    </section>
  );
}
