"use client";

import Reveal from "./FadeIn";
import { skills } from "@/data/skills";

export default function About() {
  const px = "clamp(2rem, 7vw, 7rem)";

  return (
    <section id="about" style={{ padding: `6rem ${px} 8rem`, borderTop: "1px solid var(--rule)" }}>
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-24">
          <div>
            <div className="uppercase mb-5" style={{ fontSize: "0.62rem", letterSpacing: "0.2em", color: "var(--accent)" }}>About</div>
            <h2 className="font-display font-[800]" style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)", letterSpacing: "-0.04em", lineHeight: 1 }}>
              About<br /><span style={{ color: "var(--accent)" }}>Me</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="font-light" style={{ fontSize: "1.15rem", lineHeight: 1.9, color: "var(--muted)" }}>
              I&apos;m a data scientist and software engineer who believes the best analytical tools are the ones people actually want to use. I combine rigorous statistical thinking with production-grade engineering to build applications that turn complex data into clear, actionable insight.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="uppercase mb-6" style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "var(--accent)" }}>Toolkit</div>
      </Reveal>

      {skills.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.04}>
          <div className="skill-row grid items-baseline" style={{ borderTop: "1px solid var(--rule)", padding: "1.5rem 0.8rem", gridTemplateColumns: "200px 1fr" }}>
            <span className="font-display font-semibold text-[0.85rem]" style={{ letterSpacing: "-0.01em" }}>{s.label}</span>
            <span className="text-[0.92rem] font-light" style={{ color: "var(--muted)" }}>{s.value}</span>
          </div>
        </Reveal>
      ))}
      <div className="h-px" style={{ background: "var(--rule)" }} />

      <Reveal delay={0.2}>
        <div className="mt-10 inline-flex items-center gap-5" style={{ padding: "1.1rem 1.5rem", background: "var(--accent-soft)", borderRadius: 4, borderLeft: "3px solid var(--accent)" }}>
          <span className="uppercase font-semibold" style={{ fontSize: "0.6rem", letterSpacing: "0.15em", color: "var(--accent)" }}>Currently</span>
          <span className="text-[0.92rem]">ML systems design &amp; interactive visualization</span>
        </div>
      </Reveal>
    </section>
  );
}
