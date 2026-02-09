"use client";

import Reveal from "./FadeIn";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function Projects() {
  const px = "clamp(2rem, 7vw, 7rem)";

  return (
    <section 
      id="projects" 
      style={{ 
        padding: `12rem ${px} 10rem`,
        background: "var(--bg-light)",
      }}
    >
      {/* Section Header */}
      <div className="max-w-[1600px] mx-auto" style={{ marginBottom: "6rem" }}>
        <Reveal>
          <div style={{ marginBottom: "2.5rem" }}>
            <div
              className="uppercase"
              style={{ marginBottom: "1.5rem",
                fontSize: "0.7rem",
                letterSpacing: "0.25em",
                color: "var(--accent)",
                fontWeight: 500,
              }}
            >
              Selected Work
            </div>
            <h2
              className="font-display font-[900]"
              style={{
                fontSize: "clamp(3rem, 6vw, 6rem)",
                letterSpacing: "-0.05em",
                lineHeight: 0.95,
              }}
            >
              Projects that
              <br />
              drive results
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: 1.8,
              color: "var(--muted)",
              maxWidth: "640px",
              marginTop: "1.5rem",
            }}
          >
            From AI prototypes to production-grade applications, each project 
            showcases the intersection of rigorous data science and elegant 
            engineering.
          </p>
        </Reveal>
      </div>

      {/* Projects Grid */}
      <div 
        className="max-w-[1600px] mx-auto grid gap-16"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
        }}
      >
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.15}>
            <article className="portfolio-item group">
              {/* Image Container */}
              <div
                className="w-full relative overflow-hidden"
                style={{
                  aspectRatio: "4/3",
                  borderRadius: 12,
                  background: p.gradient,
                  marginBottom: "1.5rem",
                }}
              >
                <div className="w-full h-full">
                  <Image
                    src="/images/portrait.jpg"
                    alt={p.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                    style={{ opacity: 0.1 }}
                  />
                </div>
                
                {/* Overlay badge */}
                <div
                  className="absolute top-6 left-6"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    backdropFilter: "blur(10px)",
                    padding: "0.5rem 1rem",
                    borderRadius: 6,
                  }}
                >
                  <div 
                    className="font-semibold" 
                    style={{ 
                      fontSize: "0.7rem", 
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--ink)",
                    }}
                  >
                    2025
                  </div>
                </div>

                {/* Metric badge */}
                {p.metric && (
                  <div
                    className="absolute bottom-6 right-6"
                    style={{
                      background: "rgba(0,0,0,0.75)",
                      backdropFilter: "blur(10px)",
                      padding: "0.75rem 1.25rem",
                      borderRadius: 8,
                    }}
                  >
                    <div className="font-display font-bold text-white leading-none" style={{ fontSize: "1.5rem" }}>
                      {p.metric}
                    </div>
                    <div className="uppercase mt-1" style={{ fontSize: "0.6rem", letterSpacing: "0.12em", color: "rgba(255,255,255,0.6)" }}>
                      {p.metricLabel}
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div>
                <h3 
                  className="font-display font-[900] group-hover:text-accent transition-colors"
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.1,
                    marginBottom: "1rem",
                  }}
                >
                  {p.title}
                </h3>
                
                <p
                  style={{
                    fontSize: "1rem",
                    color: "var(--muted)",
                    lineHeight: 1.8,
                    marginBottom: "1.5rem",
                  }}
                >
                  {p.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span 
                      key={t} 
                      style={{ 
                        fontSize: "0.7rem", 
                        letterSpacing: "0.08em", 
                        padding: "0.4rem 0.9rem", 
                        border: "1px solid var(--rule)", 
                        borderRadius: 6, 
                        color: "var(--accent)",
                        fontWeight: 500,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
