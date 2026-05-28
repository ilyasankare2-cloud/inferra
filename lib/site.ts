export const site = {
  name: "Inferra",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://inferra.dev",
  title: "Inferra — Practical guides to deploying machine learning",
  tagline: "Ship ML to production, the edge, and everywhere in between.",
  description:
    "Inferra publishes in-depth, tested guides on deploying machine learning models: ONNX, edge inference, MLOps, and production workflows for engineers.",
  author: "Inferra",
  twitter: "@inferradev",
  navLinks: [
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
  ],
} as const;
