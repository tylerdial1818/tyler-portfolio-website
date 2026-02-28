"use client";

import { useState, useEffect } from "react";
import TypedText from "./TypedText";
import Reveal from "./FadeIn";

function RotatingText({ lines }: { lines: string[] }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % lines.length);
        setVisible(true);
      }, 600);
    }, 7000);
    return () => clearInterval(interval);
  }, [lines.length]);

  return (
    <div style={{ maxWidth: "640px" }}>
      <p
        style={{
          fontSize: "1.2rem",
          lineHeight: 1.8,
          color: "var(--muted)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(8px)",
        }}
      >
        {lines[index]}
      </p>
    </div>
  );
}

export default function Hero() {
  const px = "clamp(2rem, 7vw, 7rem)";

  return (
    <>
      {/* Logo Landing — full viewport spacer for scroll-shrink animation */}
      <section
        id="hero"
        className="relative min-h-screen"
      >
        {/* Scroll Indicator */}
        <div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-fade-in delay-600"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            opacity: 0.4,
          }}
        >
          <div
            style={{
              width: "1px",
              height: "60px",
              background: "var(--ink)",
              animation: "scrollPulse 2s ease-in-out infinite",
            }}
          />
          <span style={{
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}>
            Scroll
          </span>
        </div>
      </section>

      {/* Hero Content */}
      <section
        style={{
          padding: `6rem ${px} 4rem`,
        }}
      >
        <div
          className="max-w-[1600px] mx-auto w-full grid items-start"
          style={{
            gridTemplateColumns: "1fr 390px",
            gap: "3rem",
          }}
        >
          {/* Left: All text content */}
          <div>
            {/* Tagline */}
            <Reveal>
              <div
                className="font-normal"
                style={{
                  fontSize: "1.5rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "2.5rem",
                }}
              >
                <TypedText texts={["AGENTIC AI ENGINEER", "DATA SCIENCE + ML ENGINEERING", "MULTI-AGENT WORKFLOWS & RAG ENGINEERING"]} />
              </div>
            </Reveal>

            {/* Large Hero Text */}
            <Reveal delay={0.1}>
              <h1
                className="font-display font-[900]"
                style={{
                  fontSize: "clamp(3rem, 6vw, 5.5rem)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.05em",
                  marginBottom: "3.5rem",
                }}
              >
                AI for Humanity
              </h1>
            </Reveal>

            {/* Description — rotating */}
            <Reveal delay={0.2}>
              <RotatingText
                lines={[
                  "Deep technical expertise in data science and agentic AI engineering. I build AI sysetms that solve real-world problems with real ROI.",
                  "Social impact data scientist working with nonprofit and humanitarian organizations to make the world safer, healthier, and more equitable.",
                ]}
              />
            </Reveal>
          </div>

          {/* Right: Spacer for fixed ScrollPortrait */}
          <div className="hidden md:block" style={{ height: "546px" }} />
        </div>
      </section>
    </>
  );
}
