"use client";

import FadeIn from "./FadeIn";
import { bentoItems } from "@/data/skills";

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "7rem clamp(1.5rem, 5vw, 4rem)",
        background: "var(--light)",
        color: "var(--light-text)",
      }}
    >
      <FadeIn>
        <h2
          className="font-display font-bold mb-6"
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            letterSpacing: "-0.025em",
          }}
        >
          About <span style={{ color: "var(--accent)" }}>Me</span>
        </h2>
        <p
          className="text-[1.02rem] max-w-[620px] mb-12"
          style={{
            lineHeight: 1.8,
            color: "var(--muted-light)",
          }}
        >
          I&apos;m a data scientist and software engineer who believes the best
          analytical tools are the ones people actually want to use. I combine
          rigorous statistical thinking with production-grade engineering to build
          applications that turn complex data into clear, actionable insight.
        </p>
      </FadeIn>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {bentoItems.map((item, i) => (
          <FadeIn
            key={item.label}
            delay={i * 0.06}
            className={item.span === 2 ? "col-span-2" : "col-span-1"}
          >
            <div
              className="bento-cell h-full"
              style={{
                background: item.highlight
                  ? "var(--accent-dim)"
                  : "var(--light-card)",
                borderRadius: 12,
                padding: "1.5rem",
                border: `1px solid ${
                  item.highlight
                    ? "var(--accent-border)"
                    : "rgba(0,0,0,0.05)"
                }`,
              }}
            >
              <div
                className="text-[0.62rem] uppercase font-semibold mb-2.5"
                style={{
                  letterSpacing: "0.14em",
                  color: item.highlight
                    ? "var(--accent)"
                    : "var(--muted-light)",
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontSize: item.highlight ? "1rem" : "0.88rem",
                  color: item.highlight
                    ? "var(--light-text)"
                    : "var(--muted-light)",
                  lineHeight: 1.6,
                  fontWeight: item.highlight ? 400 : 300,
                }}
              >
                {item.value}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
