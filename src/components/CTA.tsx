"use client";

import FadeIn from "./FadeIn";

export default function CTA() {
  return (
    <section
      className="relative text-center"
      style={{
        padding: "8rem clamp(1.5rem, 5vw, 4rem) 6rem",
        background: "var(--dark)",
        color: "var(--dark-text)",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <FadeIn>
        <h2
          className="font-display font-bold mb-5"
          style={{
            fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
            letterSpacing: "-0.025em",
          }}
        >
          Let&apos;s <span style={{ color: "var(--accent)" }}>connect</span>
        </h2>
        <p
          className="text-base mb-10"
          style={{ color: "var(--muted-dark)", lineHeight: 1.7 }}
        >
          Open to collaborations, interesting problems, and good conversation.
        </p>
        <a
          href="https://www.linkedin.com/in/tyler-dial18/"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn inline-block uppercase"
          style={{
            padding: "1rem 3rem",
            border: "1px solid var(--accent-border)",
            fontSize: "0.72rem",
            letterSpacing: "0.18em",
            color: "var(--accent)",
          }}
        >
          Connect on LinkedIn
        </a>
      </FadeIn>
    </section>
  );
}
