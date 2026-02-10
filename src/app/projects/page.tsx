"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects, type Project } from "@/data/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="project-card"
      style={{
        padding: "2rem",
        borderRadius: "12px",
        border: "1px solid var(--rule)",
        background: "var(--white)",
        transition: "all 0.3s ease",
        opacity: 0,
        animation: "fadeInUp 0.6s ease-out forwards",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "1rem",
        }}
      >
        <div>
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "var(--ink)",
              marginBottom: "0.75rem",
              letterSpacing: "-0.02em",
            }}
          >
            {project.title}
          </h3>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "0.25rem 0.75rem",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  color: "var(--accent)",
                  background: "var(--accent-soft)",
                  borderRadius: "100px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div style={{ textAlign: "right", minWidth: "80px" }}>
          <div
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              color: "var(--accent)",
              lineHeight: 1,
            }}
          >
            {project.metric}
          </div>
          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--muted)",
              marginTop: "0.25rem",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            {project.metricLabel}
          </div>
        </div>
      </div>
      <p
        style={{
          fontSize: "1rem",
          color: "var(--muted)",
          lineHeight: 1.6,
          marginTop: "1rem",
        }}
      >
        {project.desc}
      </p>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div
      className="font-body font-light"
      style={{ background: "var(--bg-light)", color: "var(--ink)", minHeight: "100vh" }}
    >
      <Navigation />

      {/* Hero Section */}
      <section
        style={{
          minHeight: "50vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "clamp(8rem, 15vh, 12rem) clamp(2rem, 7vw, 7rem) 4rem",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "1.5rem",
          }}
        >
          Projects
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
            color: "var(--muted)",
            maxWidth: "600px",
            lineHeight: 1.6,
          }}
        >
          Data science and engineering projects that solve real problems. Machine learning pipelines, spatial analytics, optimization models — built for scale and impact.
        </p>
      </section>

      {/* Projects Grid */}
      <section
        style={{
          padding: "0 clamp(2rem, 7vw, 7rem) 6rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 500px), 1fr))",
            gap: "2rem",
          }}
        >
          {projects.map((project, idx) => (
            <div key={project.title} style={{ animationDelay: `${idx * 0.1}s` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .project-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
          border-color: var(--accent);
        }

        @media (max-width: 768px) {
          .project-card {
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}
