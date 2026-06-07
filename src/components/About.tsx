"use client";

import Reveal from "./FadeIn";
import { skills } from "@/data/skills";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <Reveal>
          <div className="eyebrow">About</div>
        </Reveal>

        <div className="about__grid" style={{ marginTop: "clamp(28px, 4vh, 52px)" }}>
          <Reveal delay={0.06}>
            <p className="statement">
              I work across the full stack, from model to product. I build tools
              that take messy data and surface the decisions hidden inside it.
            </p>
          </Reveal>

          <div>
            <Reveal delay={0.12}>
              <div
                className="eyebrow eyebrow--plain"
                style={{ display: "block", marginBottom: 10 }}
              >
                Toolkit
              </div>
            </Reveal>

            <div>
              {skills.map((skill, index) => (
                <Reveal delay={0.14 + index * 0.05} key={skill.label}>
                  <div className="toolkit__row">
                    <span className="toolkit__label">{skill.label}</span>
                    <span className="toolkit__items">{skill.value}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
