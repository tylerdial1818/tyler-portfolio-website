"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import Reveal from "./FadeIn";

const headlineLines = ["Data Science", "+ AI / ML", "Engineering"];

export default function Hero() {
  return (
    <>
      <section id="top" className="relative min-h-screen">
        <div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          style={{
            opacity: 0.45,
          }}
        >
          <span className="scrollcue">
            <i aria-hidden="true" />
            Scroll
          </span>
        </div>
      </section>

      <section
        id="hero"
        className="section"
        style={{
          paddingTop: "clamp(70px, 10vh, 130px)",
        }}
      >
        <div className="wrap">
          <div className="hero-grid grid items-center" style={{ gap: "clamp(24px, 4vw, 60px)" }}>
            <div>
              <Reveal>
                <div className="eyebrow">Data Scientist &amp; AI / ML Engineer</div>
              </Reveal>

              <h1 className="display hero-display" style={{ marginTop: "clamp(20px, 4vh, 44px)" }}>
                {headlineLines.map((line, index) => (
                  <span className="line" key={line}>
                    <span style={{ "--d": `${index * 90}ms` } as CSSProperties}>
                      {line}
                    </span>
                  </span>
                ))}
              </h1>
            </div>

            <div
              className="hidden md:block hero-portrait"
              style={{
                height: 546,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src="/images/DSC08355-portrait.jpg"
                alt="Tyler Dial"
                fill
                priority
                sizes="390px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div
            className="flex flex-wrap items-end justify-between"
            style={{
              gap: 28,
              marginTop: "clamp(28px, 5vh, 64px)",
            }}
          >
            <Reveal delay={0.16}>
              <p className="lead" style={{ margin: 0 }}>
                Background in data science and agentic AI engineering. I build systems
                that solve specific problems, with results you can measure.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <a className="scrollcue" href="#projects">
                <i aria-hidden="true" />
                Selected work
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
