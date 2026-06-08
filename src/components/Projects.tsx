"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Reveal from "./FadeIn";
import { projects, type Project } from "@/data/projects";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <a
      className="pcard"
      href={project.link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="pcard__media" style={{ background: project.gradient }}>
        {project.image && (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 880px) 100vw, 46vw"
            style={{ objectFit: "cover" }}
          />
        )}
      </div>

      <div className="pcard__row">
        <div className="pcard__titlewrap">
          <span className="pcard__n">{number}</span>
          <span className="pcard__title">{project.title}</span>
        </div>
        <span className="pcard__arrow" aria-hidden="true">
          ↗
        </span>
      </div>

      <p className="pcard__desc">{project.desc}</p>
      <div className="pcard__tags">
        {project.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLElement>(null);
  const hashSettledRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let extra = 0;
    let ticking = false;

    const measure = () => {
      if (window.innerWidth < 880 || reduceMotion.matches) {
        section.style.height = "";
        extra = 0;
        return;
      }

      extra = Math.max(0, track.scrollWidth - window.innerWidth);
      section.style.height = `${window.innerHeight + extra}px`;

      if (!hashSettledRef.current && window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target instanceof HTMLElement && target !== section.closest("section")) {
          hashSettledRef.current = true;
          requestAnimationFrame(() => target.scrollIntoView());
        }
      }
    };

    const update = () => {
      ticking = false;
      if (extra <= 0) {
        track.style.transform = "";
        if (progressRef.current) progressRef.current.style.width = "0";
        return;
      }

      const total = section.offsetHeight - window.innerHeight;
      const rect = section.getBoundingClientRect();
      const passed = Math.min(Math.max(-rect.top, 0), total);
      const progress = total > 0 ? passed / total : 0;

      track.style.transform = `translate3d(${(-extra * progress).toFixed(1)}px, 0, 0)`;
      if (progressRef.current) {
        progressRef.current.style.width = `${(progress * 100).toFixed(1)}%`;
      }
    };

    const requestUpdate = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    measure();
    update();

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", measure);
    window.addEventListener("resize", requestUpdate);

    const settleTimer = window.setTimeout(() => {
      measure();
      update();
    }, 400);

    return () => {
      window.clearTimeout(settleTimer);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", measure);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <section className="section" id="projects" style={{ paddingBottom: 0 }}>
      <div className="wrap" style={{ marginBottom: "clamp(40px, 6vh, 80px)" }}>
        <Reveal>
          <div className="eyebrow">Selected work</div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="h2" style={{ marginTop: "0.3em" }}>
            Projects that drive results
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="lead" style={{ marginTop: "clamp(20px, 3vh, 34px)" }}>
            From prototype to deployed product. Each one starts with a real
            problem and ends with a system that runs.
          </p>
        </Reveal>
      </div>

      <div className="hscroll" ref={sectionRef}>
        <div className="hscroll__sticky">
          <div className="hscroll__head">
            <span className="eyebrow eyebrow--plain">({projects.length}) projects</span>
            <span className="eyebrow eyebrow--plain">scroll →</span>
          </div>
          <div className="hscroll__track" ref={trackRef}>
            {projects.map((project, index) => (
              <ProjectCard index={index} key={project.title} project={project} />
            ))}
            <div
              className="pcard"
              style={{
                alignItems: "center",
                justifyContent: "center",
                minWidth: "min(360px, 70vw)",
                width: "30vw",
              }}
            >
              <a className="btn btn--accent" href="/projects">
                All projects ↗
              </a>
            </div>
          </div>
          <div className="hprogress">
            <i ref={progressRef} />
          </div>
        </div>
      </div>

      <div className="wrap vwork">
        {projects.map((project, index) => (
          <ProjectCard index={index} key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
