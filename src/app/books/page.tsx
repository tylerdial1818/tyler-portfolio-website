"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  books2026,
  books2025,
  books2024,
  books2023,
  books2022,
  books2021,
  type Book,
} from "@/data/books-complete";

const reading = [
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    pct: 72,
  },
  {
    title: "Building Applications with AI Agents",
    author: "Michael Albada",
    pct: 45,
  },
  {
    title: "Context Engineering for Observability",
    author: "David Beale",
    pct: 20,
  },
];

const yearTabs = ["2026", "2025", "2024", "2023", "2022", "2021"] as const;
type YearTab = (typeof yearTabs)[number];

const booksByYear: Record<YearTab, Book[]> = {
  "2026": books2026,
  "2025": books2025,
  "2024": books2024,
  "2023": books2023,
  "2022": books2022,
  "2021": books2021,
};

function ReadingCard({ book }: { book: (typeof reading)[number] }) {
  return (
    <article className="bookcard">
      <div className="bookcard__cover">
        <span>{book.title}</span>
        <small>{book.author}</small>
      </div>
      <h3 className="bookcard__title">{book.title}</h3>
      <div className="bookcard__author">{book.author}</div>
      <div className="bookcard__meta">
        <span className="prog">
          <i style={{ width: `${book.pct}%` }} />
        </span>
        {book.pct}%
      </div>
    </article>
  );
}

function ReadCard({ book }: { book: Book }) {
  return (
    <article className="bookcard">
      <div
        className={`bookcard__cover${book.coverUrl ? " bookcard__cover--image" : ""}`}
        style={
          book.coverUrl
            ? { backgroundImage: `url(${book.coverUrl})` }
            : undefined
        }
      >
        {!book.coverUrl && (
          <>
            <span>{book.title}</span>
            <small>{book.author}</small>
          </>
        )}
      </div>
      <h3 className="bookcard__title">{book.title}</h3>
      <div className="bookcard__author">{book.author}</div>
      <div className="bookcard__meta">
        {book.rating !== null ? `${book.rating.toFixed(1)} ★` : "Read"}
        {book.incomplete && <span className="bookcard__flag">Incomplete</span>}
        {book.rereading && <span className="bookcard__flag">Reread</span>}
      </div>
    </article>
  );
}

export default function BooksPage() {
  const [activeYear, setActiveYear] = useState<YearTab>("2026");
  const selectedBooks = booksByYear[activeYear];
  const marqueeTitles = [...books2026, ...books2026].map((book) => book.title);

  return (
    <div style={{ background: "var(--bg)", color: "var(--fg)", minHeight: "100vh" }}>
      <Navigation />

      <main>
        <header className="page-hero wrap">
          <span className="eyebrow">Reading</span>
          <h1 className="display books-display">Book shelf</h1>
          <p className="lead">
            What I am reading and what has shaped my thinking. Mostly data and
            systems, with a lot of detours.
          </p>
        </header>

        <div className="single-marquee" aria-hidden>
          <div className="single-marquee__track">
            {marqueeTitles.map((title, index) => (
              <span key={`${title}-${index}`}>{title}</span>
            ))}
          </div>
        </div>

        <section className="section wrap">
          <span className="subhead">Currently reading</span>
          <div className="bookgrid bookgrid--reading">
            {reading.map((book) => (
              <ReadingCard book={book} key={book.title} />
            ))}
          </div>
        </section>

        <section className="section wrap books-read-section">
          <div className="books-archive-head">
            <div>
              <span className="subhead">Reading archive</span>
              <h2>{activeYear} reads</h2>
            </div>
            <span className="books-count">{selectedBooks.length} books</span>
          </div>
          <div className="year-tabs" role="tablist" aria-label="Reading years">
            {yearTabs.map((year) => (
              <button
                aria-selected={activeYear === year}
                className="year-tab"
                key={year}
                onClick={() => setActiveYear(year)}
                role="tab"
                type="button"
              >
                {year}
              </button>
            ))}
          </div>
          <div className="bookgrid bookgrid--read">
            {selectedBooks.map((book, index) => (
              <ReadCard book={book} key={`${book.title}-${index}`} />
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

        .books-display {
          font-size: clamp(56px, 13vw, 210px);
          margin-top: 0.1em;
        }

        .page-hero .lead {
          margin-top: clamp(22px, 3.5vh, 40px);
          max-width: 40ch;
        }

        .single-marquee {
          border-bottom: 1px solid var(--line);
          border-top: 1px solid var(--line);
          overflow: hidden;
          padding: clamp(18px, 2.6vw, 34px) 0;
        }

        .single-marquee__track {
          animation: bookMarquee var(--marquee-dur) linear infinite;
          display: flex;
          gap: clamp(26px, 4vw, 70px);
          width: max-content;
        }

        .single-marquee__track span {
          color: var(--fg);
          flex: 0 0 auto;
          font-size: clamp(28px, 5vw, 80px);
          font-weight: 500;
          letter-spacing: 0;
          line-height: 1;
          white-space: nowrap;
        }

        .single-marquee__track span::after {
          color: var(--accent);
          content: "/";
          margin-left: clamp(26px, 4vw, 70px);
        }

        .subhead {
          color: var(--muted);
          display: block;
          font-family: var(--mono);
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .bookgrid {
          display: grid;
          gap: clamp(22px, 3vw, 44px);
          margin-top: clamp(30px, 4.5vh, 56px);
        }

        .bookgrid--reading,
        .bookgrid--read {
          grid-template-columns: repeat(3, 1fr);
        }

        .books-read-section {
          padding-top: 0;
        }

        .books-archive-head {
          align-items: end;
          display: flex;
          gap: 24px;
          justify-content: space-between;
        }

        .books-archive-head h2 {
          font-size: clamp(32px, 5vw, 84px);
          font-weight: 500;
          letter-spacing: 0;
          line-height: 0.95;
          margin: 0.18em 0 0;
        }

        .books-count {
          color: var(--muted);
          font-family: var(--mono);
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .year-tabs {
          border-bottom: 1px solid var(--line);
          border-top: 1px solid var(--line);
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: clamp(26px, 4vw, 48px);
          padding: 14px 0;
        }

        .year-tab {
          background: transparent;
          border: 1px solid var(--line);
          border-radius: 999px;
          color: var(--fg);
          cursor: pointer;
          font-family: var(--mono);
          font-size: 12px;
          letter-spacing: 0.08em;
          line-height: 1;
          padding: 10px 14px;
          text-transform: uppercase;
          transition: background 0.25s, border-color 0.25s, color 0.25s;
        }

        .year-tab:hover,
        .year-tab[aria-selected="true"] {
          background: var(--accent);
          border-color: var(--accent);
          color: var(--accent-ink);
        }

        .bookcard {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .bookcard__cover {
          aspect-ratio: 2 / 3;
          align-items: flex-start;
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.16), transparent 18%),
            #efefef;
          border: 1px solid var(--line);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          padding: clamp(18px, 2.4vw, 30px);
        }

        .bookcard__cover--image {
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          padding: 0;
        }

        .bookcard__cover span {
          font-size: clamp(20px, 2.2vw, 34px);
          font-weight: 500;
          letter-spacing: 0;
          line-height: 0.96;
          max-width: 10ch;
        }

        .bookcard__cover small {
          color: var(--muted);
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          line-height: 1.3;
          text-transform: uppercase;
        }

        .bookcard__title {
          font-size: clamp(16px, 1.35vw, 21px);
          font-weight: 500;
          letter-spacing: 0;
          line-height: 1.15;
          margin: 16px 0 0;
        }

        .bookcard__author {
          color: var(--muted);
          font-size: 14px;
          margin-top: 3px;
        }

        .bookcard__meta {
          align-items: center;
          color: var(--accent);
          display: flex;
          font-family: var(--mono);
          font-size: 13px;
          gap: 10px;
          margin-top: 12px;
        }

        .bookcard__flag {
          border: 1px solid var(--line);
          border-radius: 999px;
          color: var(--muted);
          font-size: 10px;
          letter-spacing: 0.06em;
          padding: 4px 7px;
          text-transform: uppercase;
        }

        .prog {
          background: var(--line);
          display: inline-block;
          flex: 1;
          height: 2px;
          min-width: 60px;
        }

        .prog i {
          background: var(--accent);
          display: block;
          height: 100%;
        }

        @keyframes bookMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .single-marquee__track {
            animation: none;
          }
        }

        @media (max-width: 860px) {
          .bookgrid--reading,
          .bookgrid--read {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 520px) {
          .bookgrid--reading,
          .bookgrid--read {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 620px) {
          .books-archive-head {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
