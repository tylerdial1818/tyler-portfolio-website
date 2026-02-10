"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ScrollPortrait() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;

    const update = () => {
      const vh = window.innerHeight;
      const vw = window.innerWidth;
      const scrollY = window.scrollY;

      // Hide on mobile
      if (vw < 768) {
        el.style.display = "none";
        ticking = false;
        return;
      }

      // Easing helper
      const ease = (r: number) =>
        r < 0.5 ? 4 * r * r * r : 1 - Math.pow(-2 * r + 2, 3) / 2;

      // --- Phase thresholds ---
      const growEnd = vh * 0.6; // matches logo shrink
      const settleEnd = vh; // portrait reaches content position

      // --- Phase progress ---
      const growRaw = Math.min(Math.max(scrollY / growEnd, 0), 1);
      const tGrow = ease(growRaw);

      const settleRaw = Math.min(
        Math.max((scrollY - growEnd) / (settleEnd - growEnd), 0),
        1
      );
      const tSettle = ease(settleRaw);

      // --- Size: small circle → full size ---
      const startSize = 48;
      const endW = 390;
      const endH = 546;
      const width = startSize + (endW - startSize) * tGrow;
      const height = startSize + (endH - startSize) * tGrow;

      // --- Right position: align with content grid edge ---
      const leftPadding = Math.min(Math.max(vw * 0.07, 32), 112);
      const sectionInnerW = vw - 2 * leftPadding;
      const contentW = Math.min(sectionInnerW, 1600);
      const rightFromViewport =
        leftPadding + (sectionInnerW - contentW) / 2;

      // --- Vertical position: three phases ---
      const rem = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );
      const startTop = 20; // near nav
      const centeredTop = (vh - endH) / 2; // centered in viewport
      const contentTop = 6 * rem; // hero-content section padding-top

      let top: number;
      if (scrollY <= growEnd) {
        // Phase 1 — grow: corner → centered
        top = startTop + (centeredTop - startTop) * tGrow;
      } else if (scrollY <= settleEnd) {
        // Phase 2 — settle: centered → content-aligned
        top = centeredTop + (contentTop - centeredTop) * tSettle;
      } else {
        // Phase 3 — stay fixed at content position
        top = contentTop;
      }

      // --- Border radius: circle → rounded rect ---
      const borderRadius = 24 * (1 - tGrow) + 12 * tGrow;

      // --- Opacity: fade-in at start, fade-out as hero content scrolls past ---
      const fadeIn = Math.min(growRaw * 5, 1);
      const hideStart = settleEnd + 200;
      const hideEnd = settleEnd + 500;
      const hideProgress = Math.min(
        Math.max((scrollY - hideStart) / (hideEnd - hideStart), 0),
        1
      );
      const opacity = fadeIn * (1 - hideProgress);

      // Lower z-index after animation so page sections scroll over it
      el.style.zIndex = scrollY > settleEnd ? "10" : "99";
      el.style.display = opacity <= 0 ? "none" : "block";

      el.style.width = `${width}px`;
      el.style.height = `${height}px`;
      el.style.top = `${top}px`;
      el.style.right = `${rightFromViewport}px`;
      el.style.borderRadius = `${borderRadius}px`;
      el.style.opacity = String(Math.max(opacity, 0));

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
      style={{
        position: "fixed",
        zIndex: 99,
        overflow: "hidden",
        willChange: "width, height, top, opacity",
      }}
    >
      <Image
        src="/images/portrait.jpg"
        alt="Tyler Dial"
        width={700}
        height={960}
        className="w-full h-full object-cover"
        priority
      />
    </div>
  );
}
