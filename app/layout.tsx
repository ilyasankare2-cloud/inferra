import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import { AdSenseLoader } from "@/components/AdSense";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";
import "highlight.js/styles/github-dark.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.title,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  description: site.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={organizationLd} />
        <header className="site-header">
          <div className="inner">
            <Link href="/" className="brand">
              {site.name}
            </Link>
            <nav className="site-nav" aria-label="Main">
              {site.navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <Footer />
        <Analytics />
        <AdSenseLoader />
      </body>
    </html>
  );
}
