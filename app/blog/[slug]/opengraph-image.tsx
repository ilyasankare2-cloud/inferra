import { ImageResponse } from "next/og";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { site } from "@/lib/site";

export const alt = "Inferra article";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  const title = post?.title ?? site.name;
  const tags = post?.tags?.slice(0, 3) ?? [];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#0b0c0f",
          color: "#e7e9ee",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 11,
              background: "#6ea8fe",
              display: "flex",
            }}
          />
          <span style={{ fontSize: 34, fontWeight: 700 }}>{site.name}</span>
        </div>

        <div
          style={{
            fontSize: title.length > 55 ? 56 : 66,
            fontWeight: 800,
            lineHeight: 1.12,
            maxWidth: 1050,
            display: "flex",
          }}
        >
          {title}
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: 26,
                color: "#6ea8fe",
                border: "1px solid rgba(110,168,254,0.4)",
                borderRadius: 999,
                padding: "6px 22px",
                display: "flex",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
