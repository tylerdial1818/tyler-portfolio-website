"use client";

import Image from "next/image";

export default function Hero() {
  const px = "clamp(2rem, 7vw, 7rem)";

  return (
    <section
      id="hero"
      className="min-h-screen grid items-end"
      style={{
        gridTemplateColumns: "1fr 380px",
        gap: "4rem",
        padding: `10rem ${px} 5rem`,
      }}
    >
      {/* Left — text */}
      <div style={{ animation: "heroIn 1.2s cubic-bezier(0.16,1,0.3,1) 0.15s both" }}>
        <div
          className="font-normal mb-10"
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--accent)",
          }}
        >
          Data Scientist and AI Product Engineer
        </div>

        <h1
          className="font-display font-[800] mb-12"
          style={{
            fontSize: "clamp(3rem, 7.5vw, 6.5rem)",
            lineHeight: 0.96,
            letterSpacing: "-0.04em",
          }}
        >
          Building tools
          <br />
          that make data
          <br />
          <span style={{ color: "var(--accent)" }}>actionable</span>
        </h1>

        <p
          className="max-w-[440px]"
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.85,
            color: "var(--muted)",
            animation: "heroIn 1.2s cubic-bezier(0.16,1,0.3,1) 0.5s both",
          }}
        >
          I design and build data science applications with production-grade
          engineering. Passionate about the intersection of rigorous analysis
          and elegant software.
        </p>
      </div>

      {/* Right — portrait */}
      <div style={{ animation: "heroIn 1.2s cubic-bezier(0.16,1,0.3,1) 0.4s both" }}>
        <div
          className="w-full overflow-hidden"
          style={{
            aspectRatio: "3/4",
            borderRadius: 6,
            boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
          }}
        >
          <Image
            src="/images/portrait.jpg"
            alt="Tyler Dial"
            width={380}
            height={507}
            className="w-full h-full object-cover object-[center_top] block"
            priority
          />
        </div>
      </div>
    </section>
  );
}
