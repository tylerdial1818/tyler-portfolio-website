"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Projects", target: "projects" },
  { label: "About Me", target: "about" },
  { label: "Writing", target: "blog" },
  { label: "Books", target: "books" },
  { label: "Connect", target: "connect" },
];

export default function Navigation() {
  const [navReady, setNavReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      const vh = window.innerHeight;
      const threshold = vh * 0.6;
      const progress = window.scrollY / threshold;
      setNavReady(progress > 0.85);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center transition-all duration-500"
        style={{
          padding: "1.3rem clamp(2rem, 7vw, 7rem)",
          background: navReady ? "rgba(255,255,255,0.9)" : "transparent",
          backdropFilter: navReady ? "blur(24px)" : "none",
          WebkitBackdropFilter: navReady ? "blur(24px)" : "none",
          borderBottom: navReady
            ? "1px solid var(--rule)"
            : "1px solid transparent",
        }}
      >
        {/* Logo placeholder - invisible, ScrollLogo renders it */}
        <div
          className="font-display font-bold text-[1.05rem]"
          style={{ letterSpacing: "-0.02em", opacity: 0 }}
        >
          Tyler Dial<span>.</span>
        </div>

        <div
          className="hidden md:flex gap-9 text-[0.78rem] font-normal transition-opacity duration-500"
          style={{ color: "var(--accent)", opacity: navReady ? 1 : 0 }}
        >
          {NAV_LINKS.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.target)}
              className="nav-a bg-transparent border-none"
              style={{ color: "inherit", font: "inherit", cursor: "pointer" }}
            >
              {l.label}
            </button>
          ))}
          <button
            className="nav-a bg-transparent border-none"
            style={{ color: "var(--ink)", cursor: "pointer", font: "inherit", fontWeight: 500 }}
          >
            Resume
          </button>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 bg-transparent border-none p-1 transition-opacity duration-500"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ opacity: navReady ? 1 : 0, pointerEvents: navReady ? "auto" : "none" }}
        >
          <span
            className="block w-5 h-[1.5px] transition-all duration-300"
            style={{
              background: "var(--ink)",
              transform: menuOpen ? "rotate(45deg) translate(3px, 3px)" : "none",
            }}
          />
          <span
            className="block w-5 h-[1.5px] transition-all duration-300"
            style={{ background: "var(--ink)", opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-5 h-[1.5px] transition-all duration-300"
            style={{
              background: "var(--ink)",
              transform: menuOpen ? "rotate(-45deg) translate(3px, -3px)" : "none",
            }}
          />
        </button>
      </nav>

      <div
        className={`mobile-nav ${menuOpen ? "open" : ""} fixed inset-0 z-[99] flex flex-col items-center justify-center gap-8 md:hidden`}
        style={{ background: "var(--white)", color: "var(--ink)" }}
      >
        {NAV_LINKS.map((l) => (
          <button
            key={l.label}
            onClick={() => scrollTo(l.target)}
            className="font-display text-2xl font-bold bg-transparent border-none"
            style={{ color: "var(--ink)" }}
          >
            {l.label}
          </button>
        ))}
        <button
          className="font-display text-2xl font-medium bg-transparent border-none"
          style={{ color: "var(--ink)" }}
        >
          Resume
        </button>
      </div>
    </>
  );
}
