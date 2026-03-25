"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AboutPage() {
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
          About Me
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
            color: "var(--muted)",
            maxWidth: "600px",
            lineHeight: 1.6,
          }}
        >
          Data and AI tools for organizations doing hard work.
        </p>
      </section>

      {/* Content Section */}
      <section
        style={{
          padding: "0 clamp(2rem, 7vw, 7rem) 6rem",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.8,
            color: "var(--ink)",
          }}
        >
          <p style={{ marginBottom: "1.5rem" }}>
            I&apos;m Tyler Dial, founder of <strong>Dialed Intelligence</strong>: an AI consulting and product development practice focused on nonprofits, civic orgs, and small to mid-market businesses.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            I build decision tools and data products that help organizations make better choices. My background spans econometrics and software engineering. I build systems that are technically sound and actually usable.
          </p>

          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: 600,
              marginTop: "3rem",
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Background
          </h2>

          <p style={{ marginBottom: "1.5rem" }}>
            Before starting Dialed Intelligence, I worked as an Investment Banking Analyst in municipal finance, led data analytics at HP Tech Ventures, and contributed to convolutional neural network research at the National Bureau of Economic Research (NBER).
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            I&apos;m currently completing my Master&apos;s in Data Science at Northwestern University (graduating June 2026), with coursework in deep learning, natural language processing, and AI agents.
          </p>

          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: 600,
              marginTop: "3rem",
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            What I Do
          </h2>

          <p style={{ marginBottom: "1.5rem" }}>
            At Dialed Intelligence, I offer three core services:
          </p>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              marginBottom: "1.5rem",
            }}
          >
            <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  color: "var(--accent)",
                  fontWeight: 600,
                }}
              >
                •
              </span>
              <strong>AI Prototype Sprints:</strong> 2-4 week engagements to validate feasibility and ROI before full builds
            </li>
            <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  color: "var(--accent)",
                  fontWeight: 600,
                }}
              >
                •
              </span>
              <strong>Decision Analytics & Modeling:</strong> Statistical and optimization models for recurring, high-stakes decisions
            </li>
            <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  color: "var(--accent)",
                  fontWeight: 600,
                }}
              >
                •
              </span>
              <strong>AI Workflow Automation:</strong> Custom pipelines and agents for repetitive knowledge work
            </li>
          </ul>

          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: 600,
              marginTop: "3rem",
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            How I Work
          </h2>

          <p style={{ marginBottom: "1.5rem" }}>
            I prefer boring, reliable technology. I optimize for learning and ROI first. I ship small and validate early. I think AI works best when it helps people make better decisions, not when it makes decisions for them.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            My technical stack centers on Python, with expertise in spatial analysis (GeoPandas, PostGIS), machine learning (TensorFlow, scikit-learn), and AI agent frameworks (LangChain, LangGraph). I&apos;m comfortable with both statistical modeling and modern deep learning approaches.
          </p>

          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: 600,
              marginTop: "3rem",
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Beyond Work
          </h2>

          <p style={{ marginBottom: "1.5rem" }}>
            I live in Salt Lake City. I read widely — fiction, nonfiction, philosophy, economics, sociology. I&apos;m interested in how systems shape outcomes and how data can reveal patterns that help reduce suffering.
          </p>

          <p style={{ marginBottom: "1.5rem" }}>
            I believe relationships and community matter more than anything else. I&apos;m building a business not just to earn a living, but to gain the resources and influence to make a difference on the social issues I care about.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
