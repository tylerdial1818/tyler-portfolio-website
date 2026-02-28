"use client";

import Image from "next/image";
import Reveal from "./FadeIn";
import { skills } from "@/data/skills";

export default function About() {
  const px = "clamp(2rem, 7vw, 7rem)";

  return (
    <section id="about" style={{ padding: `8rem ${px} 8rem`, borderTop: "1px solid var(--rule)" }}>
      <Reveal>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
          style={{ marginBottom: "3.5rem" }}
        >
          {/* Left: Portrait image */}
          <div
            className="overflow-hidden hidden md:block"
            style={{
              borderRadius: 12,
              aspectRatio: "2/3",
              maxWidth: "400px",
              width: "100%",
            }}
          >
            <Image
              src="/images/DSC08355-portrait.jpg"
              alt="Tyler Dial"
              width={800}
              height={1200}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Heading + bio */}
          <div className="flex flex-col justify-center">
            <div className="uppercase" style={{ fontSize: "0.62rem", letterSpacing: "0.2em", color: "var(--accent)", marginBottom: "1.5rem" }}>About</div>
            <h2 className="font-display font-[800]" style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: "2.5rem" }}>
              About<br /><span style={{ color: "var(--accent)" }}>Me</span>
            </h2>
            <p className="font-light" style={{ fontSize: "1.15rem", lineHeight: 1.9, color: "var(--muted)" }}>
              I&apos;m a data scientist and software engineer who believes the best analytical tools are the ones people actually want to use. I combine rigorous statistical thinking with production-grade engineering to build applications that turn complex data into clear, actionable insight.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="uppercase" style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "var(--accent)", marginBottom: "1.2rem" }}>Toolkit</div>
      </Reveal>

      {skills.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.04}>
          <div className="skill-row grid items-baseline" style={{ borderTop: "1px solid var(--rule)", padding: "1rem 0.8rem", gridTemplateColumns: "200px 1fr" }}>
            <span className="font-display font-semibold text-[0.85rem]" style={{ letterSpacing: "-0.01em" }}>{s.label}</span>
            <span className="text-[0.92rem] font-light" style={{ color: "var(--muted)" }}>{s.value}</span>
          </div>
        </Reveal>
      ))}
      <div className="h-px" style={{ background: "var(--rule)" }} />
    </section>
  );
}
