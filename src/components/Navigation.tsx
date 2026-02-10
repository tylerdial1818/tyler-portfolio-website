"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Projects", target: "projects", isRoute: false },
  { label: "About Me", target: "about", isRoute: false },
  { label: "Writing", target: "blog", isRoute: false },
  { label: "Books", target: "/books", isRoute: true },
  { label: "Connect", target: "connect", isRoute: false },
];

export default function Navigation() {
  const [navReady, setNavReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // On non-homepage pages, show nav immediately
    if (pathname !== "/") {
      setNavReady(true);
      return;
    }
    
    // On homepage, show nav based on scroll position
    const handler = () => {
      const vh = window.innerHeight;
      const threshold = vh * 0.6;
      const progress = window.scrollY / threshold;
      setNavReady(progress > 0.85);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [pathname]);

  const handleNavClick = (link: typeof NAV_LINKS[0]) => {
    setMenuOpen(false);
    if (link.isRoute) {
      // Let Next.js Link handle routing
      return;
    }
    // Scroll to section on homepage
    if (pathname === "/") {
      const el = document.getElementById(link.target);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to homepage with hash
      window.location.href = `/#${link.target}`;
    }
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
        {/* Logo - visible on non-homepage, or when scrolled on homepage */}
        <Link
          href="/"
          className="font-display font-bold text-[1.05rem]"
          style={{ 
            letterSpacing: "-0.02em", 
            opacity: pathname !== "/" ? 1 : 0,
            textDecoration: "none",
            color: "var(--ink)"
          }}
        >
          Tyler Dial<span style={{ color: "var(--accent)" }}>.</span>
        </Link>

        <div
          className="hidden md:flex gap-9 text-[0.78rem] font-normal transition-opacity duration-500"
          style={{ color: "var(--accent)", opacity: navReady ? 1 : 0 }}
        >
          {NAV_LINKS.map((l) =>
            l.isRoute ? (
              <Link
                key={l.label}
                href={l.target}
                className="nav-a"
                style={{ color: "inherit", font: "inherit", cursor: "pointer", textDecoration: "none" }}
              >
                {l.label}
              </Link>
            ) : (
              <button
                key={l.label}
                onClick={() => handleNavClick(l)}
                className="nav-a bg-transparent border-none"
                style={{ color: "inherit", font: "inherit", cursor: "pointer" }}
              >
                {l.label}
              </button>
            )
          )}
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
        {NAV_LINKS.map((l) =>
          l.isRoute ? (
            <Link
              key={l.label}
              href={l.target}
              className="font-display text-2xl font-bold"
              style={{ color: "var(--ink)", textDecoration: "none" }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ) : (
            <button
              key={l.label}
              onClick={() => handleNavClick(l)}
              className="font-display text-2xl font-bold bg-transparent border-none"
              style={{ color: "var(--ink)" }}
            >
              {l.label}
            </button>
          )
        )}
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
