"use client";

import { useEffect, useRef } from "react";

export default function ScrollLogo() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;

    const update = () => {
      const vh = window.innerHeight;
      const vw = window.innerWidth;
      const scrollY = window.scrollY;

      // Animation completes over 60% of viewport height
      const threshold = vh * 0.6;
      const raw = Math.min(Math.max(scrollY / threshold, 0), 1);

      // Ease in-out cubic for smooth animation
      const t =
        raw < 0.5
          ? 4 * raw * raw * raw
          : 1 - Math.pow(-2 * raw + 2, 3) / 2;

      // Font size: responsive hero size → nav size
      const heroSize = Math.min(Math.max(vw * 0.1, 56), 128); // px
      const navSize = 16.8; // ~1.05rem
      const fontSize = heroSize + (navSize - heroSize) * t;

      // Write font-size first, then read width for centering calc
      el.style.fontSize = `${fontSize}px`;
      const elWidth = el.offsetWidth;

      // Vertical: visually centered → nav top position
      const heroTop = (vh - fontSize) * 0.42;
      const navTop = 20.8; // ~1.3rem
      el.style.top = `${heroTop + (navTop - heroTop) * t}px`;

      // Horizontal: centered → left-aligned with page padding
      const leftPadding = Math.min(Math.max(vw * 0.07, 32), 112);
      const centerX = (vw - elWidth) / 2;
      el.style.left = `${centerX + (leftPadding - centerX) * t}px`;

      // Letter spacing eases from hero to nav
      el.style.letterSpacing = `${-0.05 + 0.03 * t}em`;

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    const onResize = () => requestAnimationFrame(update);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="font-display font-bold"
      style={{
        position: "fixed",
        zIndex: 101,
        lineHeight: 0.95,
        color: "var(--ink)",
        willChange: "font-size, top, left",
        pointerEvents: "none",
        whiteSpace: "nowrap",
      }}
    >
      Tyler Dial<span style={{ color: "var(--accent)" }}>.</span>
    </div>
  );
}
