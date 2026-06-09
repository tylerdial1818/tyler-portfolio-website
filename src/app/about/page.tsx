"use client";

import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";

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

const principles = [
  "I prefer boring, reliable technology.",
  "I optimize for learning and ROI first.",
  "I ship small and validate early.",
  "AI works best when it helps people make better decisions, not when it makes decisions for them.",
];

const stack = [
  ["Languages", "Python · SQL · JavaScript / CSS · TypeScript · Go · Java"],
  ["AI / ML", "PyTorch · TensorFlow · scikit-learn · XGBoost"],
  ["LLM Systems", "LangChain · LangGraph · OpenAI API · RAG · evaluation"],
  ["Data", "Postgres · DuckDB · Spark · dbt · Airflow · vector databases"],
  ["Infra", "Docker · Kubernetes · AWS · Azure · GCP · CI/CD"],
  ["Product", "React · Next.js · FastAPI · Tailwind CSS · D3 · Plotly"],
];

function Prose({ children }: { children: React.ReactNode }) {
  return <div className="prose-block">{children}</div>;
}

export default function AboutPage() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--fg)", minHeight: "100vh" }}>
      <Navigation />

      <main>
        <header className="page-hero wrap">
          <span className="eyebrow">About - Dialed Intelligence</span>
          <div className="about-hero__grid">
            <h1 className="h2 about-headline">
              Tools for
              <br />
              organizations
              <br />
              doing hard work.
            </h1>
            <div className="about-hero__portrait">
              <Image
                src="/images/DSC08355-portrait.jpg"
                alt="Tyler Dial portrait"
                fill
                sizes="(max-width: 880px) 100vw, 38vw"
                className="about-portrait-image"
                priority
              />
            </div>
          </div>
          <Prose>
            <p>
              I am Tyler Dial, founder of Dialed Intelligence, an AI consulting
              and product development practice focused on nonprofits, civic
              organizations, and small to mid-market businesses.
            </p>
            <p>
              I build decision tools and data products that help organizations
              make better choices. My background spans econometrics and software
              engineering, and I build systems that are technically sound and
              actually usable.
            </p>
          </Prose>
        </header>

        <Marquee />

        <section className="section wrap">
          <span className="eyebrow">What I do</span>
          <h2 className="h2 h2--compact about-section-title">Three core services</h2>
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

        <section className="section wrap">
          <div className="about__grid">
            <span className="eyebrow">Background</span>
            <Prose>
              <p>
                Before starting Dialed Intelligence, I worked as an Investment
                Banking Analyst in municipal finance, led data analytics at HP
                Tech Ventures, and contributed to convolutional neural network
                research at the National Bureau of Economic Research.
              </p>
              <p>
                I completed my Master&apos;s in Data Science at Northwestern
                University, with coursework in deep learning, natural language
                processing, and AI agents.
              </p>
            </Prose>
          </div>
        </section>

        <section className="section wrap">
          <span className="eyebrow">How I work</span>
          <div className="about__grid about-work-grid">
            <div className="principle-list">
              {principles.map((principle) => (
                <div className="principle" key={principle}>
                  <span className="principle__n">-</span>
                  <span>{principle}</span>
                </div>
              ))}
            </div>

            <div>
              <span className="sectlabel">Technical stack</span>
              <div className="toolkit">
                {stack.map(([label, items]) => (
                  <div className="toolkit__row" key={label}>
                    <span className="toolkit__label">{label}</span>
                    <span className="toolkit__items">{items}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section wrap">
          <div className="about__grid">
            <span className="eyebrow">Beyond work</span>
            <Prose>
              <p>
                I live in Chicago, and I read widely across fiction,
                nonfiction, philosophy, economics, and sociology. I am
                interested in how systems shape outcomes, and how data can
                reveal patterns that help reduce suffering.
              </p>
            </Prose>
          </div>
        </section>

        <section className="belief wrap">
          <span className="belief__mark">What it is for</span>
          <p className="statement">
            I believe relationships and community matter more than anything
            else. I am building a business not just to earn a living, but to
            gain the resources and influence to make a difference on the issues
            I care about.
          </p>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        .page-hero {
          padding-top: clamp(140px, 22vh, 250px);
          padding-bottom: clamp(36px, 7vh, 84px);
        }

        .about-hero__grid {
          align-items: end;
          display: grid;
          gap: clamp(24px, 4vw, 64px);
          grid-template-columns: 1.32fr 0.68fr;
          margin-top: clamp(18px, 3vh, 36px);
        }

        .about-headline {
          font-size: clamp(40px, 8vw, 124px);
        }

        .about-hero__portrait {
          align-self: stretch;
          aspect-ratio: 3 / 4;
          background: #efefef;
          border: 1px solid var(--line);
          overflow: hidden;
          position: relative;
        }

        .about-portrait-image {
          object-fit: cover;
          object-position: center top;
        }

        .prose-block {
          display: flex;
          flex-direction: column;
          gap: 1em;
          margin-top: clamp(36px, 6vh, 72px);
          max-width: 62ch;
        }

        .prose-block p {
          font-size: clamp(18px, 1.45vw, 23px);
          letter-spacing: 0;
          line-height: 1.46;
          margin: 0;
        }

        .about-section-title {
          margin-top: 0.3em;
        }

        .service-list {
          margin-top: clamp(34px, 5vh, 60px);
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

        .about__grid {
          display: grid;
          gap: clamp(28px, 5vw, 84px);
          grid-template-columns: minmax(180px, 0.45fr) minmax(0, 1fr);
        }

        .about__grid .prose-block {
          margin-top: 0;
          max-width: 58ch;
        }

        .about-work-grid {
          margin-top: clamp(28px, 4vh, 52px);
        }

        .principle {
          align-items: baseline;
          border-top: 1px solid var(--line);
          display: grid;
          font-size: clamp(19px, 1.9vw, 30px);
          gap: 18px;
          grid-template-columns: auto 1fr;
          letter-spacing: 0;
          line-height: 1.18;
          padding-block: clamp(16px, 1.8vw, 24px);
        }

        .principle:last-child {
          border-bottom: 1px solid var(--line);
        }

        .principle__n {
          align-self: center;
          color: var(--accent);
          font-family: var(--mono);
          font-size: 13px;
        }

        .sectlabel {
          color: var(--muted);
          display: block;
          font-family: var(--mono);
          font-size: 12px;
          letter-spacing: 0.12em;
          margin-bottom: 10px;
          text-transform: uppercase;
        }

        .toolkit {
          border-top: 1px solid var(--line);
        }

        .toolkit__row {
          border-bottom: 1px solid var(--line);
          display: grid;
          gap: 18px;
          grid-template-columns: minmax(120px, 0.38fr) minmax(0, 1fr);
          padding: 18px 0;
        }

        .toolkit__label {
          color: var(--muted);
          font-family: var(--mono);
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .toolkit__items {
          font-size: clamp(16px, 1.4vw, 22px);
          line-height: 1.25;
        }

        .belief {
          padding-block: clamp(80px, 14vh, 200px);
        }

        .belief .statement {
          max-width: 22ch;
        }

        .belief__mark {
          color: var(--accent);
          display: block;
          font-family: var(--mono);
          font-size: 12px;
          letter-spacing: 0.12em;
          margin-bottom: clamp(24px, 4vh, 48px);
          text-transform: uppercase;
        }

        @media (max-width: 880px) {
          .about-hero__grid,
          .about__grid {
            grid-template-columns: 1fr;
          }

          .about-hero__portrait {
            aspect-ratio: 16 / 10;
          }
        }

        @media (max-width: 760px) {
          .srow {
            grid-template-columns: auto 1fr;
          }

          .srow__desc {
            grid-column: 2;
          }
        }
      `}</style>
    </div>
  );
}
