// Escape characters that could break out of the <script> context.
// JSON-LD here is first-party data, but escaping "<" is the OWASP-recommended
// hardening for any JSON embedded in a script tag.
function safeJsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(data) }}
    />
  );
}
