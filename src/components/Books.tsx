"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import StarRating from "./StarRating";
import { currentlyReading, recentlyRead, type CurrentBook } from "@/data/books";

function BookSpine({ book }: { book: CurrentBook }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden flex flex-col justify-between shrink-0"
      style={{
        background: book.color,
        borderRadius: "4px 8px 8px 4px",
        padding: "1.5rem 1.2rem",
        minWidth: 180,
        maxWidth: 200,
        height: 260,
        transform: hovered
          ? "translateY(-10px) rotate(-1deg)"
          : "translateY(0) rotate(0deg)",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        boxShadow: hovered
          ? "8px 12px 30px rgba(0,0,0,0.4), inset -2px 0 8px rgba(255,255,255,0.05)"
          : "4px 6px 15px rgba(0,0,0,0.3), inset -2px 0 8px rgba(255,255,255,0.03)",
      }}
    >
      {/* Spine edge highlight */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px]"
        style={{ background: "rgba(255,255,255,0.1)" }}
      />

      <div>
        <div
          className="font-display font-bold text-[0.88rem] mb-2"
          style={{
            color: "rgba(255,255,255,0.9)",
            lineHeight: 1.35,
          }}
        >
          {book.title}
        </div>
        <div
          className="text-[0.72rem] italic"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          {book.author}
        </div>
      </div>

      <div>
        <div
          className="text-[0.6rem] uppercase mb-1.5"
          style={{
            letterSpacing: "0.12em",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          Progress
        </div>
        <div
          className="w-full h-[3px] rounded-sm overflow-hidden"
          style={{ background: "rgba(255,255,255,0.08)" }}
        >
          <div
            className="h-full rounded-sm transition-[width] duration-1000 ease-out"
            style={{
              width: `${book.progress}%`,
              background: "var(--accent)",
            }}
          />
        </div>
        <div
          className="text-[0.62rem] mt-1 text-right"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          {book.progress}%
        </div>
      </div>
    </div>
  );
}

export default function Books() {
  return (
    <section
      id="books"
      style={{
        padding: "7rem clamp(1.5rem, 5vw, 4rem)",
        background: "var(--dark)",
        color: "var(--dark-text)",
      }}
    >
      <FadeIn>
        <h2
          className="font-display font-bold mb-3"
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            letterSpacing: "-0.025em",
          }}
        >
          Book <span style={{ color: "var(--accent)" }}>Shelf</span>
        </h2>
        <p
          className="text-[0.95rem] max-w-[500px] mb-12"
          style={{ color: "var(--muted-dark)", lineHeight: 1.7 }}
        >
          What I&apos;m reading and what&apos;s shaped my thinking. Mostly at
          the intersection of data, systems, and design.
        </p>
      </FadeIn>

      {/* Currently Reading */}
      <FadeIn>
        <div
          className="text-[0.65rem] uppercase font-medium mb-6"
          style={{
            letterSpacing: "0.18em",
            color: "var(--muted-dark)",
          }}
        >
          Currently Reading
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className="flex gap-5 mb-16 overflow-x-auto pb-4">
          {currentlyReading.map((book) => (
            <BookSpine key={book.title} book={book} />
          ))}
        </div>
      </FadeIn>

      {/* Recently Read */}
      <FadeIn delay={0.15}>
        <div
          className="text-[0.65rem] uppercase font-medium mb-5"
          style={{
            letterSpacing: "0.18em",
            color: "var(--muted-dark)",
          }}
        >
          Recently Read
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        {recentlyRead.map((book, i) => (
          <FadeIn key={book.title} delay={i * 0.05}>
            <div className="book-row flex justify-between items-center py-5 px-2">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h4
                    className="book-title-text font-display font-semibold text-[0.95rem]"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {book.title}
                  </h4>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className="text-[0.78rem] italic"
                    style={{ color: "var(--muted-dark)" }}
                  >
                    {book.author}
                  </span>
                  <div className="flex gap-1.5">
                    {book.tags.map((t) => (
                      <span
                        key={t}
                        className="tag-dark"
                        style={{
                          fontSize: "0.58rem",
                          padding: "0.15rem 0.5rem",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <StarRating rating={book.rating} />
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
