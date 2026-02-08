"use client";

import Reveal from "./FadeIn";
import { currentlyReading, recentlyRead } from "@/data/books";

export default function Books() {
  const px = "clamp(2rem, 7vw, 7rem)";

  return (
    <section id="books" style={{ padding: `8rem ${px}`, background: "var(--ink)", color: "#fff" }}>
      <Reveal>
        <div className="uppercase mb-5" style={{ fontSize: "0.62rem", letterSpacing: "0.2em", color: "var(--muted-dark)" }}>Reading</div>
        <h2 className="font-display font-[800] mb-4" style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)", letterSpacing: "-0.04em", lineHeight: 1 }}>Book Shelf</h2>
        <p className="text-[0.95rem] max-w-[450px] mb-20" style={{ color: "var(--muted-dark)", lineHeight: 1.7 }}>
          What I&apos;m reading and what&apos;s shaped my thinking. Mostly at the intersection of data, systems, and design.
        </p>
      </Reveal>

      <Reveal>
        <div className="uppercase mb-6" style={{ fontSize: "0.56rem", letterSpacing: "0.2em", color: "var(--muted-dark)" }}>Currently Reading</div>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="flex gap-5 mb-20 overflow-x-auto">
          {currentlyReading.map((book) => (
            <div key={book.title} className="book-spine relative flex flex-col justify-between shrink-0" style={{ background: book.color, borderRadius: "3px 7px 7px 3px", padding: "1.4rem 1.1rem", width: 185, height: 255, boxShadow: "4px 8px 24px rgba(0,0,0,0.3)" }}>
              <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: "rgba(255,255,255,0.07)", borderRadius: "3px 0 0 3px" }} />
              <div>
                <div className="font-display font-semibold text-[0.8rem] mb-2" style={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.3 }}>{book.title}</div>
                <div className="text-[0.68rem] italic" style={{ color: "rgba(255,255,255,0.3)" }}>{book.author}</div>
              </div>
              <div>
                <div className="w-full h-[2px] rounded-sm" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <div className="h-full rounded-sm" style={{ width: `${book.progress}%`, background: "var(--accent)" }} />
                </div>
                <div className="text-[0.52rem] mt-1 text-right" style={{ color: "rgba(255,255,255,0.22)" }}>{book.progress}%</div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="uppercase mb-6" style={{ fontSize: "0.56rem", letterSpacing: "0.2em", color: "var(--muted-dark)" }}>Recently Read</div>
      </Reveal>
      {recentlyRead.map((book, i) => (
        <Reveal key={book.title} delay={i * 0.04}>
          <div className="bk-row flex justify-between items-center py-5" style={{ borderTop: "1px solid var(--rule-dark)" }}>
            <div className="flex items-baseline gap-4">
              <span className="bk-title font-display font-medium text-[0.92rem]">{book.title}</span>
              <span className="text-[0.76rem] italic" style={{ color: "var(--muted-dark)" }}>{book.author}</span>
            </div>
            <span className="inline-flex gap-0.5">
              {Array.from({ length: 5 }, (_, j) => (
                <span key={j} className="text-[0.6rem]" style={{ color: j < book.rating ? "var(--accent)" : "rgba(255,255,255,0.08)" }}>&#9733;</span>
              ))}
            </span>
          </div>
        </Reveal>
      ))}
      <div className="h-px" style={{ background: "var(--rule-dark)" }} />
    </section>
  );
}
