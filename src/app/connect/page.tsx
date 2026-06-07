"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const channels = [
  {
    label: "LinkedIn",
    handle: "in/tyler-dial18",
    url: "https://www.linkedin.com/in/tyler-dial18/",
  },
  {
    label: "GitHub",
    handle: "tylerdial1818",
    url: "https://github.com/tylerdial1818",
  },
  {
    label: "Substack",
    handle: "@tylerdial1818",
    url: "https://tylerdial1818.substack.com/",
  },
  {
    label: "Instagram",
    handle: "@tyler_dial97",
    url: "https://www.instagram.com/tyler_dial97/",
  },
];

const services = [
  {
    n: "01",
    title: "AI Prototype Sprints",
    desc: "2-4 week engagements to validate feasibility and ROI before full builds.",
  },
  {
    n: "02",
    title: "Decision Analytics & Modeling",
    desc: "Statistical and optimization models for recurring, high-stakes decisions.",
  },
  {
    n: "03",
    title: "AI Workflow Automation",
    desc: "Custom pipelines and agents for repetitive knowledge work.",
  },
];

export default function ConnectPage() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--fg)", minHeight: "100vh" }}>
      <Navigation />

      <main>
        <header className="page-hero wrap">
          <span className="eyebrow">Connect</span>
          <h1 className="display connect-display">
            Let&apos;s build
            <br />
            something
            <br />
            useful.
          </h1>
          <p className="lead">
            Open to collaborations, interesting problems, and good conversation:
            a project for Dialed Intelligence, a research idea, or just a good
            thread to pull on.
          </p>
          <span className="connect-loc">
            Based in Salt Lake City - working with teams everywhere.
          </span>
        </header>

        <section className="section wrap channels-section">
          <span className="eyebrow">Find me</span>
          <div className="channels">
            {channels.map((channel, index) => (
              <a
                className="channel"
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                key={channel.label}
              >
                <span className="channel__n">{String(index + 1).padStart(2, "0")}</span>
                <span className="channel__label">{channel.label}</span>
                <span className="channel__handle">{channel.handle}</span>
                <span className="channel__arrow">-&gt;</span>
              </a>
            ))}
          </div>
        </section>

        <section className="section wrap">
          <span className="eyebrow">How I can help</span>
          <div className="service-list">
            {services.map((service) => (
              <div className="srow" key={service.n}>
                <span className="srow__n">{service.n}</span>
                <span className="srow__title">{service.title}</span>
                <span className="srow__desc">{service.desc}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        .page-hero {
          padding-top: clamp(140px, 22vh, 250px);
          padding-bottom: clamp(36px, 7vh, 84px);
        }

        .connect-display {
          font-size: clamp(52px, 12vw, 200px);
          margin-top: 0.1em;
        }

        .page-hero .lead {
          margin-top: clamp(22px, 3.5vh, 40px);
          max-width: 40ch;
        }

        .connect-loc {
          align-items: center;
          color: var(--fg);
          display: inline-flex;
          font-family: var(--mono);
          font-size: clamp(12px, 1vw, 14px);
          gap: 10px;
          letter-spacing: 0.08em;
          margin-top: clamp(24px, 4vh, 44px);
          text-transform: uppercase;
        }

        .connect-loc::before {
          background: var(--accent);
          border-radius: 50%;
          content: "";
          height: 8px;
          width: 8px;
        }

        .channels-section {
          padding-bottom: 0;
        }

        .channels,
        .service-list {
          margin-top: clamp(28px, 4vh, 52px);
        }

        .channel {
          align-items: baseline;
          border-top: 1px solid var(--line);
          display: grid;
          gap: clamp(14px, 2.5vw, 40px);
          grid-template-columns: auto 1fr auto auto;
          padding-block: clamp(22px, 3vw, 42px);
        }

        .channel:last-child {
          border-bottom: 1px solid var(--line);
        }

        .channel__n {
          color: var(--muted);
          font-family: var(--mono);
          font-size: 13px;
        }

        .channel__label {
          font-size: clamp(26px, 3.2vw, 56px);
          font-weight: 500;
          letter-spacing: 0;
          line-height: 1;
          transition: color 0.3s;
        }

        .channel__handle {
          color: var(--muted);
          font-family: var(--mono);
          font-size: 13px;
          white-space: nowrap;
        }

        .channel__arrow {
          font-size: clamp(20px, 2vw, 30px);
          transition: transform 0.4s var(--reveal-ease);
        }

        .channel:hover .channel__label {
          color: var(--accent);
        }

        .channel:hover .channel__arrow {
          transform: translate(6px, -6px);
        }

        .srow {
          align-items: baseline;
          border-top: 1px solid var(--line);
          display: grid;
          gap: clamp(16px, 3vw, 48px);
          grid-template-columns: auto 0.85fr 1.15fr;
          padding-block: clamp(24px, 3.4vw, 46px);
        }

        .srow:last-child {
          border-bottom: 1px solid var(--line);
        }

        .srow__n {
          color: var(--accent);
          font-family: var(--mono);
          font-size: 13px;
        }

        .srow__title {
          font-size: clamp(22px, 2.7vw, 44px);
          font-weight: 500;
          letter-spacing: 0;
          line-height: 1;
        }

        .srow__desc {
          color: var(--muted);
          font-size: clamp(15px, 1.15vw, 19px);
          line-height: 1.42;
        }

        @media (max-width: 760px) {
          .srow {
            grid-template-columns: auto 1fr;
          }

          .srow__desc {
            grid-column: 2;
          }
        }

        @media (max-width: 640px) {
          .channel {
            grid-template-columns: 1fr auto;
          }

          .channel__n,
          .channel__handle {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
