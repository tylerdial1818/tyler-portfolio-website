"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StarRating from "@/components/StarRating";
import {
  hallOfFameFiction,
  hallOfFameNonfiction,
  academicBooks,
  books2026,
  books2025,
  books2024,
  books2023,
  books2022,
  books2021,
  type Book,
} from "@/data/books-complete";

// Book cover component with fallback
function BookCover({ book }: { book: Book }) {
  const [imageError, setImageError] = useState(false);
  
  const getCoverUrl = () => {
    const titleQuery = encodeURIComponent(book.title.toLowerCase());
    return `https://covers.openlibrary.org/b/title/${titleQuery}-L.jpg`;
  };

  return (
    <div className="book-cover-wrapper" style={{ position: "relative", paddingBottom: "150%", background: "var(--accent-soft)", borderRadius: "4px", overflow: "hidden" }}>
      {!imageError ? (
        <img
          src={getCoverUrl()}
          alt={`${book.title} cover`}
          onError={() => setImageError(true)}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      ) : (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
            textAlign: "center",
            background: "var(--accent-soft)",
          }}
        >
          <div style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--ink)", marginBottom: "0.5rem" }}>
            {book.title}
          </div>
          <div style={{ fontSize: "0.75rem", color: "var(--muted)" }}>
            {book.author}
          </div>
        </div>
      )}
    </div>
  );
}

// Individual book card
function BookCard({ book }: { book: Book }) {
  return (
    <div
      className="book-card"
      style={{
        opacity: 0,
        animation: "fadeInUp 0.6s ease-out forwards",
      }}
    >
      <BookCover book={book} />
      <div style={{ marginTop: "0.75rem" }}>
        <h3
          style={{
            fontSize: "0.95rem",
            fontWeight: 500,
            color: "var(--ink)",
            marginBottom: "0.25rem",
            lineHeight: 1.3,
          }}
        >
          {book.title}
        </h3>
        <p style={{ fontSize: "0.8rem", color: "var(--muted)", marginBottom: "0.5rem" }}>
          {book.author}
        </p>
        {book.rating !== null && (
          <StarRating rating={book.rating} />
        )}
        {book.rating === null && (
          <span style={{ fontSize: "0.75rem", color: "var(--muted)", fontStyle: "italic" }}>
            Currently Reading
          </span>
        )}
      </div>
    </div>
  );
}

// Books grid
function BooksGrid({ books, columns = 5 }: { books: Book[]; columns?: number }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, minmax(${columns === 5 ? "160px" : "180px"}, 1fr))`,
        gap: "2rem 1.5rem",
        marginTop: "3rem",
      }}
      className="books-grid"
    >
      {books.map((book, idx) => (
        <div key={`${book.title}-${idx}`} style={{ animationDelay: `${idx * 0.05}s` }}>
          <BookCard book={book} />
        </div>
      ))}
    </div>
  );
}

export default function BooksPage() {
  const [activeTab, setActiveTab] = useState("hall-of-fame");

  const tabs = [
    { id: "hall-of-fame", label: "Hall of Fame" },
    { id: "academic", label: "Academic & Professional" },
    { id: "2026", label: "2026" },
    { id: "2025", label: "2025" },
    { id: "2024", label: "2024" },
    { id: "2023", label: "2023" },
    { id: "2022", label: "2022" },
    { id: "2021", label: "2021" },
  ];

  const getTabContent = () => {
    switch (activeTab) {
      case "hall-of-fame":
        return (
          <>
            <div style={{ marginBottom: "4rem" }}>
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 700,
                  color: "var(--ink)",
                  marginBottom: "1rem",
                  letterSpacing: "-0.02em",
                }}
              >
                Top Fiction
              </h2>
              <BooksGrid books={hallOfFameFiction} />
            </div>
            <div>
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 700,
                  color: "var(--ink)",
                  marginBottom: "1rem",
                  letterSpacing: "-0.02em",
                }}
              >
                Top Nonfiction
              </h2>
              <BooksGrid books={hallOfFameNonfiction} />
            </div>
          </>
        );
      case "academic":
        return (
          <>
            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--muted)",
                marginBottom: "2rem",
                maxWidth: "600px",
              }}
            >
              Textbooks and research papers I'm currently reading as part of my Northwestern MSDS coursework and consulting work.
            </p>
            <BooksGrid books={academicBooks} columns={4} />
          </>
        );
      case "2026":
        return <BooksGrid books={books2026} />;
      case "2025":
        return <BooksGrid books={books2025} />;
      case "2024":
        return <BooksGrid books={books2024} />;
      case "2023":
        return <BooksGrid books={books2023} />;
      case "2022":
        return <BooksGrid books={books2022} />;
      case "2021":
        return <BooksGrid books={books2021} />;
      default:
        return null;
    }
  };

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
          Books
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
            color: "var(--muted)",
            maxWidth: "600px",
            lineHeight: 1.6,
          }}
        >
          My reading history since 2021. Fiction, nonfiction, philosophy, economics, sociology — anything that helps me understand the world and build better things.
        </p>
      </section>

      {/* Tab Navigation */}
      <section
        style={{
          padding: "0 clamp(2rem, 7vw, 7rem)",
          marginBottom: "3rem",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            borderBottom: "1px solid var(--rule)",
            paddingBottom: "1rem",
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "0.6rem 1.2rem",
                fontSize: "0.9rem",
                fontWeight: activeTab === tab.id ? 500 : 400,
                color: activeTab === tab.id ? "var(--white)" : "var(--ink)",
                background: activeTab === tab.id ? "var(--accent)" : "transparent",
                border: "1px solid",
                borderColor: activeTab === tab.id ? "var(--accent)" : "var(--rule)",
                borderRadius: "100px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--accent)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.borderColor = "var(--rule)";
                  e.currentTarget.style.color = "var(--ink)";
                }
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Books Content */}
      <section
        style={{
          padding: "0 clamp(2rem, 7vw, 7rem) 6rem",
          minHeight: "50vh",
        }}
      >
        <div key={activeTab}>{getTabContent()}</div>
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

        .book-card {
          transition: transform 0.3s ease;
        }

        .book-card:hover {
          transform: translateY(-4px);
        }

        @media (max-width: 768px) {
          .books-grid {
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)) !important;
            gap: 1.5rem 1rem !important;
          }
        }

        @media (max-width: 480px) {
          .books-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem 1rem !important;
          }
        }
      `}</style>
    </div>
  );
}
