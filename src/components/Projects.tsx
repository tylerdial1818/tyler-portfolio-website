"use client";

import FadeIn from "./FadeIn";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "7rem clamp(1.5rem, 5vw, 4rem)",
        background: "var(--dark)",
        color: "var(--dark-text)",
      }}
    >
      <FadeIn>
        <div className="flex justify-between items-baseline mb-14">
          <h2
            className="font-display font-bold"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              letterSpacing: "-0.025em",
            }}
          >
            Selected <span style={{ color: "var(--accent)" }}>Work</span>
          </h2>
          <span
            className="text-[0.7rem] uppercase"
            style={{
              letterSpacing: "0.14em",
              color: "var(--muted-dark)",
            }}
          >
            {projects.length} Projects
          </span>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.1}>
            <div
              className="project-card relative overflow-hidden min-h-[260px] flex flex-col justify-between"
              style={{
                background: "var(--dark-card)",
                borderRadius: 12,
                padding: "2rem",
                border: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              {/* Accent line on hover */}
              <div
                className="card-accent-line absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background:
                    "linear-gradient(90deg, var(--accent), transparent)",
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition:
                    "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />

              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3
                    className="font-display font-bold text-[1.3rem] max-w-[70%]"
                    style={{
                      letterSpacing: "-0.01em",
                      lineHeight: 1.3,
                    }}
                  >
                    {p.title}
                  </h3>
                  <div className="text-right">
                    <div
                      className="font-display font-[800] text-[1.6rem] leading-none"
                      style={{ color: "var(--accent)" }}
                    >
                      {p.metric}
                    </div>
                    <div
                      className="text-[0.6rem] uppercase mt-0.5"
                      style={{
                        color: "var(--muted-dark)",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {p.metricLabel}
                    </div>
                  </div>
                </div>
                <p
                  className="text-[0.85rem] mb-5"
                  style={{
                    color: "var(--muted-dark)",
                    lineHeight: 1.65,
                  }}
                >
                  {p.desc}
                </p>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex gap-1.5 flex-wrap">
                  {p.tags.map((t) => (
                    <span key={t} className="tag-dark">
                      {t}
                    </span>
                  ))}
                </div>
                <span
                  className="text-[0.72rem]"
                  style={{ color: "rgba(255,255,255,0.15)" }}
                >
                  {p.year}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
