"use client";

import Reveal from "./FadeIn";
import { currentlyReading, recentlyRead } from "@/data/books";

export default function Books() {
  return (
    <section className="section" id="books">
      <div className="wrap">
        <Reveal>
          <div className="eyebrow">Reading</div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="h2 h2--compact" style={{ marginTop: "0.3em" }}>
            Book shelf
          </h2>
        </Reveal>

        <div className="books__grid" style={{ marginTop: "clamp(36px, 5vh, 64px)" }}>
          <div>
            <Reveal delay={0.1}>
              <div
                className="eyebrow eyebrow--plain"
                style={{ display: "block", marginBottom: 8 }}
              >
                Currently reading
              </div>
            </Reveal>

            {currentlyReading.map((book, index) => (
              <Reveal delay={0.12 + index * 0.05} key={book.title}>
                <div className="bookrow">
                  <div>
                    <div className="bookrow__t">{book.title}</div>
                    <div className="bookrow__a">{book.author}</div>
                  </div>
                  <div
                    className="bookrow__meta"
                    style={{ alignItems: "center", display: "flex", gap: 10 }}
                  >
                    <span className="prog">
                      <i style={{ width: `${book.progress}%` }} />
                    </span>
                    {book.progress}%
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div>
            <Reveal delay={0.1}>
              <div
                className="eyebrow eyebrow--plain"
                style={{ display: "block", marginBottom: 8 }}
              >
                Recently read
              </div>
            </Reveal>

            {recentlyRead.map((book, index) => (
              <Reveal delay={0.12 + index * 0.04} key={book.title}>
                <div className="bookrow">
                  <div>
                    <div className="bookrow__t">{book.title}</div>
                    <div className="bookrow__a">{book.author}</div>
                  </div>
                  <div className="bookrow__meta">{book.rating.toFixed(1)} ★</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
