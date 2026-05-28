"use client";

import { useState } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setStatus("error");
      return;
    }
    // No backend yet — this just confirms the UX. Wire to an email service later.
    setStatus("ok");
    setEmail("");
  }

  return (
    <section className="newsletter">
      <h2 className="newsletter-title">Get new guides in your inbox</h2>
      <p className="newsletter-sub">
        Practical, tested ML deployment guides. No spam, unsubscribe anytime.
      </p>
      {status === "ok" ? (
        <p className="newsletter-ok">Thanks for signing up! Check your inbox soon.</p>
      ) : (
        <form className="newsletter-form" onSubmit={onSubmit} noValidate>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            aria-label="Email address"
            aria-invalid={status === "error"}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      )}
      {status === "error" && (
        <p className="newsletter-err">Please enter a valid email address.</p>
      )}
    </section>
  );
}
