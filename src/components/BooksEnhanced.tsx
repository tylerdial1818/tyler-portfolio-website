"use client";

import { useState } from "react";
import Reveal from "./FadeIn";
import { 
  hallOfFameFiction, 
  hallOfFameNonfiction, 
  academicBooks,
  books2026,
  books2025,
  books2024,
  type Book
} from "@/data/books-complete";

type TabView = 'hall-of-fame' | 'academic' | '2026' | '2025' | '2024' | '2023' | '2022' | '2021';

export default function BooksEnhanced() {
  const px = "clamp(2rem, 7vw, 7rem)";
  const [activeTab, setActiveTab] = useState<TabView>('hall-of-fame');

  const tabs = [
    { id: 'hall-of-fame' as const, label: 'Hall of Fame' },
    { id: 'academic' as const, label: 'Academic' },
    { id: '2026' as const, label: '2026' },
    { id: '2025' as const, label: '2025' },
    { id: '2024' as const, label: '2024' },
    { id: '2023' as const, label: '2023' },
    { id: '2022' as const, label: '2022' },
    { id: '2021' as const, label: '2021' },
  ];

  const getActiveContent = () => {
    switch (activeTab) {
      case 'hall-of-fame':
        return <HallOfFame />;
      case 'academic':
        return <AcademicReading />;
      case '2026':
        return <YearView books={books2026} year={2026} />;
      case '2025':
        return <YearView books={books2025} year={2025} />;
      case '2024':
        return <YearView books={books2024} year={2024} />;
      default:
        return <YearView books={[]} year={parseInt(activeTab)} />;
    }
  };

  return (
    <section
      id="books"
      style={{
        padding: `10rem ${px} 8rem`,
        background: "var(--bg-light)",
      }}
    >
      {/* Header */}
      <div className="max-w-[1600px] mx-auto mb-20">
        <Reveal>
          <div className="mb-8">
            <div
              className="uppercase mb-5"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.25em",
                color: "var(--accent)",
                fontWeight: 500,
              }}
            >
              Reading
            </div>
            <h2
              className="font-display font-[900]"
              style={{
                fontSize: "clamp(3rem, 6vw, 6rem)",
                letterSpacing: "-0.05em",
                lineHeight: 0.95,
              }}
            >
              Books that
              <br />
              shaped my thinking
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: 1.7,
              color: "var(--muted)",
              maxWidth: "640px",
            }}
          >
            A collection of books I've read since 2021, spanning fiction,
            nonfiction, and academic work at the intersection of data, systems,
            and human behavior.
          </p>
        </Reveal>
      </div>

      {/* Tabs */}
      <div className="max-w-[1600px] mx-auto mb-12">
        <Reveal delay={0.3}>
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              borderBottom: "1px solid var(--rule)",
              paddingBottom: "16px",
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: "10px 20px",
                  borderRadius: "8px",
                  border:
                    activeTab === tab.id
                      ? "1px solid var(--accent)"
                      : "1px solid var(--rule)",
                  background:
                    activeTab === tab.id ? "#3b82f620" : "transparent",
                  color: activeTab === tab.id ? "var(--accent)" : "var(--ink)",
                  fontSize: "0.875rem",
                  fontWeight: activeTab === tab.id ? 600 : 500,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  fontFamily: "'PP Neue Montreal', sans-serif",
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== tab.id) {
                    e.currentTarget.style.background = "#f1f5f9";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab.id) {
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Content */}
      <div className="max-w-[1600px] mx-auto">{getActiveContent()}</div>
    </section>
  );
}

// Hall of Fame Component
function HallOfFame() {
  return (
    <div>
      <Reveal>
        <h3
          className="font-display font-[800] mb-6"
          style={{
            fontSize: "1.75rem",
            color: "var(--accent)",
            letterSpacing: "-0.02em",
          }}
        >
          Top 10 Fiction
        </h3>
      </Reveal>
      <div
        className="grid gap-6 mb-16"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
        }}
      >
        {hallOfFameFiction.map((book, i) => (
          <Reveal key={book.title} delay={i * 0.05}>
            <BookCard book={book} />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <h3
          className="font-display font-[800] mb-6"
          style={{
            fontSize: "1.75rem",
            color: "var(--accent)",
            letterSpacing: "-0.02em",
          }}
        >
          Top 10 Nonfiction
        </h3>
      </Reveal>
      <div
        className="grid gap-6"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
        }}
      >
        {hallOfFameNonfiction.map((book, i) => (
          <Reveal key={book.title} delay={i * 0.05}>
            <BookCard book={book} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

// Academic Reading Component
function AcademicReading() {
  return (
    <div>
      <Reveal>
        <p
          style={{
            fontSize: "1rem",
            color: "var(--muted)",
            marginBottom: "2rem",
          }}
        >
          Current textbooks and papers supporting coursework and professional development
        </p>
      </Reveal>
      <div className="space-y-4">
        {academicBooks.map((book, i) => (
          <Reveal key={book.title} delay={i * 0.1}>
            <div
              style={{
                padding: "20px",
                borderRadius: "12px",
                border: "1px solid var(--rule)",
                background: "var(--white)",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                className="font-display font-[700]"
                style={{ fontSize: "1.1rem", marginBottom: "4px" }}
              >
                {book.title}
              </div>
              <div style={{ fontSize: "0.9rem", color: "var(--muted)" }}>
                {book.author}
              </div>
              {book.category && (
                <div
                  style={{
                    marginTop: "8px",
                    display: "inline-block",
                    padding: "4px 12px",
                    borderRadius: "6px",
                    background: "var(--accent-soft)",
                    color: "var(--accent)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                  }}
                >
                  {book.category}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

// Year View Component
function YearView({ books, year }: { books: Book[]; year: number }) {
  const completed = books.filter((b) => !b.incomplete);
  const avgRating =
    completed.reduce((sum, b) => sum + (b.rating || 0), 0) / completed.length;

  return (
    <div>
      <Reveal>
        <div
          style={{
            display: "flex",
            gap: "40px",
            marginBottom: "3rem",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              className="font-display font-[800]"
              style={{ fontSize: "3rem", color: "var(--accent)" }}
            >
              {books.length}
            </div>
            <div style={{ fontSize: "0.875rem", color: "var(--muted)" }}>
              Books Read
            </div>
          </div>
          <div>
            <div
              className="font-display font-[800]"
              style={{ fontSize: "3rem", color: "var(--accent)" }}
            >
              {avgRating.toFixed(1)}
            </div>
            <div style={{ fontSize: "0.875rem", color: "var(--muted)" }}>
              Avg Rating
            </div>
          </div>
        </div>
      </Reveal>

      <div
        className="grid gap-6"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
        }}
      >
        {books.map((book, i) => (
          <Reveal key={`${book.title}-${i}`} delay={i * 0.02}>
            <BookCard book={book} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

// Book Card Component
function BookCard({ book }: { book: Book }) {
  return (
    <div
      className="portfolio-item"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      {/* Book Cover Placeholder */}
      <div
        style={{
          width: "100%",
          aspectRatio: "2/3",
          borderRadius: "8px",
          background: `linear-gradient(135deg, ${
            book.genre === "fiction"
              ? "#3b82f6"
              : book.genre === "nonfiction"
              ? "#10b981"
              : "#f59e0b"
          }, ${
            book.genre === "fiction"
              ? "#1e40af"
              : book.genre === "nonfiction"
              ? "#059669"
              : "#d97706"
          })`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "0.75rem",
          fontWeight: 600,
          textAlign: "center",
          padding: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          overflow: "hidden",
        }}
      >
        <div style={{ lineHeight: 1.3 }}>{book.title}</div>
      </div>

      {/* Book Info */}
      <div>
        <div
          className="font-display font-[700]"
          style={{
            fontSize: "0.875rem",
            lineHeight: 1.3,
            marginBottom: "4px",
          }}
        >
          {book.title}
        </div>
        <div
          style={{
            fontSize: "0.75rem",
            color: "var(--muted)",
            marginBottom: "8px",
          }}
        >
          {book.author}
        </div>
        {book.rating !== null && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span
              className="font-display font-[700]"
              style={{ fontSize: "1rem", color: "var(--accent)" }}
            >
              {book.rating.toFixed(1)}
            </span>
            <span style={{ fontSize: "0.7rem", color: "var(--muted)" }}>
              / 5.0
            </span>
          </div>
        )}
        {book.incomplete && (
          <div
            style={{
              marginTop: "6px",
              fontSize: "0.65rem",
              color: "#f97316",
              fontWeight: 600,
            }}
          >
            Did not finish
          </div>
        )}
      </div>
    </div>
  );
}
