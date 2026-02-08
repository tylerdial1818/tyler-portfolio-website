"use client";

import Reveal from "./FadeIn";
import { projects } from "@/data/projects";

export default function Projects() {
  const px = "clamp(2rem, 7vw, 7rem)";

  return (
    <section id="projects" style={{ padding: `8rem ${px}` }}>
      <Reveal>
        <div className="flex justify-between items-end mb-16">
          <div>
            <div
              className="uppercase mb-5"
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.2em",
                color: "var(--accent)",
              }}
            >
              Selected Work
            </div>
            <h2
              className="font-display font-[800]"
              style={{
                fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              Projects
            </h2>
          </div>
          <span
            className="text-[0.72rem]"
            style={{ letterSpacing: "0.1em", color: "var(--accent)" }}
          >
            {projects.length} Projects
          </span>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <div className="proj-card">
              {/* Image area */}
              <div
                className="w-full relative overflow-hidden mb-6"
                style={{
                  aspectRatio: "16/10",
                  borderRadius: 8,
                  background: p.gradient,
                }}
              >
                <div className="proj-img w-full h-full flex items-center justify-center">
                  <div className="w-[65%]" style={{ opacity: 0.12 }}>
                    <div className="mb-3" style={{ height: 8, background: "#fff", borderRadius: 4, width: "40%" }} />
                    <div className="mb-2" style={{ height: 5, background: "#fff", borderRadius: 3, width: "80%" }} />
                    <div className="mb-2" style={{ height: 5, background: "#fff", borderRadius: 3, width: "65%" }} />
                    <div style={{ height: 5, background: "#fff", borderRadius: 3, width: "50%" }} />
                    <div className="flex gap-2 mt-5">
                      <div style={{ height: 24, width: 24, background: "#fff", borderRadius: 4 }} />
                      <div style={{ height: 24, width: 24, background: "#fff", borderRadius: 4 }} />
                      <div style={{ height: 24, width: 24, background: "#fff", borderRadius: 4 }} />
                    </div>
                  </div>
                </div>
                <div
                  className="absolute bottom-4 right-4"
                  style={{
                    background: "rgba(0,0,0,0.5)",
                    backdropFilter: "blur(10px)",
                    padding: "0.5rem 0.8rem",
                    borderRadius: 6,
                  }}
                >
                  <div className="font-display font-bold text-white leading-none" style={{ fontSize: "1.1rem" }}>{p.metric}</div>
                  <div className="uppercase mt-0.5" style={{ fontSize: "0.5rem", letterSpacing: "0.08em", color: "rgba(255,255,255,0.5)" }}>{p.metricLabel}</div>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <span className="font-body text-[0.68rem] mt-1" style={{ color: "var(--accent)" }}>[0{i + 1}]</span>
                <h3 className="font-display font-[800] text-[1.35rem]" style={{ letterSpacing: "-0.02em", lineHeight: 1.2 }}>{p.title}</h3>
              </div>
              <p className="text-[0.85rem] mb-4 pl-8" style={{ color: "var(--muted)", lineHeight: 1.6 }}>{p.desc}</p>
              <div className="flex gap-1.5 pl-8">
                {p.tags.map((t) => (
                  <span key={t} style={{ fontSize: "0.6rem", letterSpacing: "0.06em", padding: "0.25rem 0.6rem", border: "1px solid var(--rule)", borderRadius: 100, color: "var(--accent)" }}>{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
