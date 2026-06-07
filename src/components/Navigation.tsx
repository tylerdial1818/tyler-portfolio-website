"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Writing", href: "/blog" },
  { label: "Books", href: "/books" },
  { label: "Connect", href: "/connect" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = pathname === "/";

  return (
    <>
      <nav
        aria-label="Primary navigation"
        style={{
          alignItems: "center",
          color: "#fff",
          display: "flex",
          inset: "0 0 auto 0",
          justifyContent: isHome ? "flex-end" : "space-between",
          mixBlendMode: menuOpen ? "normal" : "difference",
          padding: "clamp(16px, 2.2vw, 26px) var(--pad)",
          pointerEvents: "none",
          position: "fixed",
          zIndex: 100,
        }}
      >
        {!isHome && (
          <Link
            href="/"
            className="nav-a"
            style={{
              color: "#fff",
              fontSize: "clamp(15px, 1.2vw, 19px)",
              fontWeight: 500,
              lineHeight: 1,
              pointerEvents: "auto",
              whiteSpace: "nowrap",
            }}
          >
            Tyler Dial.
          </Link>
        )}

        <div
          className="hidden md:flex"
          style={{
            color: "#fff",
            fontFamily: "var(--mono)",
            fontSize: 12,
            gap: "clamp(14px, 2vw, 30px)",
            letterSpacing: "0.08em",
            pointerEvents: "auto",
            textTransform: "uppercase",
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link className="nav-a" href={link.href} key={link.label}>
              {link.label}
            </Link>
          ))}
        </div>

        <button
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          className="flex md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          style={{
            alignItems: "center",
            background: "transparent",
            border: 0,
            color: menuOpen ? "var(--fg)" : "#fff",
            cursor: "pointer",
            flexDirection: "column",
            gap: 5,
            height: 34,
            justifyContent: "center",
            marginLeft: "auto",
            pointerEvents: "auto",
            width: 34,
          }}
        >
          <span
            style={{
              background: "currentColor",
              height: 1,
              transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
              transition: "transform 0.25s",
              width: 22,
            }}
          />
          <span
            style={{
              background: "currentColor",
              height: 1,
              opacity: menuOpen ? 0 : 1,
              transition: "opacity 0.25s",
              width: 22,
            }}
          />
          <span
            style={{
              background: "currentColor",
              height: 1,
              transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
              transition: "transform 0.25s",
              width: 22,
            }}
          />
        </button>
      </nav>

      <div
        className={`${menuOpen ? "flex" : "hidden"} md:hidden`}
        style={{
          background: "var(--bg)",
          color: "var(--fg)",
          flexDirection: "column",
          gap: 26,
          inset: 0,
          justifyContent: "center",
          padding: "var(--pad)",
          position: "fixed",
          zIndex: 99,
        }}
      >
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.label}
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: "clamp(34px, 12vw, 64px)",
              fontWeight: 500,
              lineHeight: 0.95,
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
