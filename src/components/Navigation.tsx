"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = ["Projects", "About", "Books", "Blog", "Resume"];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
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
          padding: "1.4rem clamp(1.5rem, 5vw, 4rem)",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          background: scrolled ? "rgba(6,6,8,0.88)" : "transparent",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.04)"
            : "1px solid transparent",
          color: "var(--dark-text)",
        }}
      >
        {/* Logo */}
        <div
          className="font-display font-[800] text-[1.15rem]"
          style={{ letterSpacing: "-0.02em" }}
        >
          <span style={{ color: "var(--accent)" }}>T</span>yler Dial
        </div>

        {/* Desktop links */}
        <div
          className="hidden md:flex gap-9 text-[0.73rem] uppercase font-normal"
          style={{ letterSpacing: "0.12em" }}
        >
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="nav-link bg-transparent border-none"
              style={{ color: "inherit", font: "inherit" }}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 bg-transparent border-none p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-[1.5px] transition-all duration-300"
            style={{
              background: "var(--dark-text)",
              transform: menuOpen
                ? "rotate(45deg) translate(3px, 3px)"
                : "none",
            }}
          />
          <span
            className="block w-5 h-[1.5px] transition-all duration-300"
            style={{
              background: "var(--dark-text)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-[1.5px] transition-all duration-300"
            style={{
              background: "var(--dark-text)",
              transform: menuOpen
                ? "rotate(-45deg) translate(3px, -3px)"
                : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`mobile-nav ${menuOpen ? "open" : ""} fixed inset-0 z-[99] flex flex-col items-center justify-center gap-8 md:hidden`}
        style={{
          background: "var(--dark)",
          color: "var(--dark-text)",
        }}
      >
        {NAV_LINKS.map((l) => (
          <button
            key={l}
            onClick={() => scrollTo(l)}
            className="font-display text-2xl font-bold bg-transparent border-none"
            style={{ color: "var(--dark-text)" }}
          >
            {l}
          </button>
        ))}
      </div>
    </>
  );
}
