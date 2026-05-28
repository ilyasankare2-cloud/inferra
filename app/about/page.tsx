import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — practical guides on deploying machine learning.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <article className="prose">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <h1>About {site.name}</h1>
      <p>
        {site.name} is a publication about the unglamorous, high-leverage part of
        machine learning: getting models out of notebooks and into the real
        world.
      </p>
      <p>
        Most ML writing stops at training accuracy. We pick up where that leaves
        off — exporting models, running fast inference, deploying to the edge and
        to production, and keeping the whole thing maintainable. Every guide is
        written for engineers and ships with real, tested code.
      </p>
      <h2>What you'll find here</h2>
      <ul>
        <li>Model portability and the ONNX ecosystem</li>
        <li>On-device and edge inference</li>
        <li>Production ML workflows and MLOps</li>
        <li>Practical automation for ML teams</li>
      </ul>
      <p>
        Have a topic you want covered? Reach out — this publication is shaped by
        what readers are actually trying to ship.
      </p>
    </article>
  );
}
