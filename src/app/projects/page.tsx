"use client";

import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import { projects, type Project } from "@/data/projects";

function ProjectBlock({ project, index }: { project: Project; index: number }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="pblock">
      <div className="pblock__head">
        <span className="pblock__n">{number}</span>
        <h2 className="pblock__title">{project.title}</h2>
        <div className="pblock__tags">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <a
        className="pblock__media"
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.title}`}
        style={{ background: project.gradient }}
      >
        {project.image && (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="100vw"
            className="pblock__image"
            priority={index === 0}
          />
        )}
        <span className="pblock__view">View Project -&gt;</span>
      </a>

      <div className="pblock__foot">
        <p className="pblock__desc">{project.desc}</p>
        <a className="pblock__link" href={project.link} target="_blank" rel="noopener noreferrer">
          View Project -&gt;
        </a>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--fg)", minHeight: "100vh" }}>
      <Navigation />

      <main>
        <header className="page-hero wrap">
          <span className="eyebrow">Selected work</span>
          <h1 className="display projects-display">Projects</h1>
          <p className="lead">
            Data science and engineering work. ML pipelines, spatial analytics,
            optimization models. Built to ship.
          </p>
          <div className="page-hero__meta">
            <span>
              <b>{projects.length}</b> selected
            </span>
            <span>Data · ML · GIS · AI Agents</span>
            <span>Live demos -&gt;</span>
          </div>
        </header>

        <Marquee />

        <section className="section wrap project-blocks">
          {projects.map((project, index) => (
            <ProjectBlock key={project.title} project={project} index={index} />
          ))}
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        .page-hero {
          padding-top: clamp(140px, 22vh, 250px);
          padding-bottom: clamp(36px, 7vh, 84px);
        }

        .projects-display {
          font-size: clamp(64px, 16vw, 260px);
          margin-top: 0.1em;
        }

        .page-hero .lead {
          margin-top: clamp(22px, 3.5vh, 40px);
          max-width: 40ch;
        }

        .page-hero__meta {
          color: var(--muted);
          display: flex;
          flex-wrap: wrap;
          font-family: var(--mono);
          font-size: 12px;
          gap: clamp(20px, 4vw, 56px);
          letter-spacing: 0.08em;
          margin-top: clamp(30px, 5vh, 60px);
          text-transform: uppercase;
        }

        .page-hero__meta b {
          color: var(--fg);
          font-weight: 500;
        }

        .project-blocks {
          padding-top: clamp(36px, 6vh, 72px);
          padding-bottom: 0;
        }

        .pblock {
          border-top: 1px solid var(--line);
          padding-block: clamp(52px, 8vh, 116px);
        }

        .pblock__head {
          align-items: baseline;
          display: grid;
          gap: clamp(16px, 3vw, 44px);
          grid-template-columns: auto 1fr auto;
        }

        .pblock__n {
          color: var(--accent);
          font-family: var(--mono);
          font-size: clamp(13px, 1vw, 15px);
        }

        .pblock__title {
          font-size: clamp(34px, 6.2vw, 104px);
          font-weight: 500;
          letter-spacing: 0;
          line-height: 0.92;
          margin: 0;
        }

        .pblock__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: flex-end;
          max-width: 42vw;
        }

        .pblock__media {
          aspect-ratio: 16 / 9;
          border: 1px solid var(--line);
          display: block;
          margin-top: clamp(28px, 4vh, 56px);
          overflow: hidden;
          position: relative;
        }

        .pblock__image {
          object-fit: cover;
          object-position: center top;
          transition: transform 0.7s var(--reveal-ease);
        }

        .pblock__media:hover .pblock__image {
          transform: scale(1.035);
        }

        .pblock__view {
          background: var(--accent);
          border-radius: 100px;
          bottom: clamp(16px, 2vw, 28px);
          color: var(--accent-ink);
          font-family: var(--mono);
          font-size: 13px;
          letter-spacing: 0.06em;
          opacity: 0;
          padding: 11px 18px;
          position: absolute;
          right: clamp(16px, 2vw, 28px);
          text-transform: uppercase;
          transform: translateY(10px);
          transition: transform 0.45s var(--reveal-ease), opacity 0.45s var(--reveal-ease);
          z-index: 3;
        }

        .pblock__media:hover .pblock__view {
          opacity: 1;
          transform: none;
        }

        .pblock__foot {
          align-items: end;
          display: grid;
          gap: 20px;
          grid-template-columns: 1fr auto;
          margin-top: clamp(22px, 3vh, 34px);
        }

        .pblock__desc {
          color: var(--muted);
          font-size: clamp(16px, 1.3vw, 21px);
          line-height: 1.42;
          margin: 0;
          max-width: 54ch;
        }

        .pblock__link {
          display: inline-flex;
          font-family: var(--mono);
          font-size: 13px;
          gap: 8px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .pblock__link:hover {
          color: var(--accent);
        }

        @media (max-width: 760px) {
          .pblock__head,
          .pblock__foot {
            grid-template-columns: 1fr;
          }

          .pblock__tags {
            justify-content: flex-start;
            max-width: none;
          }
        }
      `}</style>
    </div>
  );
}
