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
      const root = document.documentElement;

      // Hide when the hero switches to a one-column layout.
      if (vw < 880) {
        el.style.display = "none";
        root.dataset.portraitHandoff = "true";
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

      // Size changes from small circle to full size.
      const startSize = 48;
      const endW = 390;
      const endH = 546;
      const width = startSize + (endW - startSize) * tGrow;
      const height = startSize + (endH - startSize) * tGrow;

      // Right position aligns with the content grid edge.
      const leftPadding = Math.min(Math.max(vw * 0.05, 20), 80);
      const sectionInnerW = vw - 2 * leftPadding;
      const contentW = Math.min(sectionInnerW, 1600);
      const rightFromViewport =
        leftPadding + (sectionInnerW - contentW) / 2;

      // Vertical position moves through three phases.
      const startTop = 20; // near nav
      const centeredTop = (vh - endH) / 2; // centered in viewport
      const heroPortrait = document.querySelector<HTMLElement>(".hero-portrait");
      const measuredContentTop = heroPortrait
        ? heroPortrait.getBoundingClientRect().top + scrollY - settleEnd
        : Math.min(Math.max(vh * 0.16, 120), 190);
      const contentTop = Math.min(Math.max(measuredContentTop, 120), 220);

      let top: number;
      if (scrollY <= growEnd) {
        // Phase 1 grows from the corner to center.
        top = startTop + (centeredTop - startTop) * tGrow;
      } else if (scrollY <= settleEnd) {
        // Phase 2 settles from center to content alignment.
        top = centeredTop + (contentTop - centeredTop) * tSettle;
      } else {
        // Phase 3 stays fixed at the content position.
        top = contentTop;
      }

      // Border radius changes from circle to rounded rectangle.
      const borderRadius = 24 * (1 - tGrow) + 12 * tGrow;

      // Opacity fades in at start, then hands off to the in-flow hero portrait.
      const fadeIn = Math.min(growRaw * 5, 1);
      const opacity = scrollY >= settleEnd ? 0 : fadeIn;

      root.dataset.portraitHandoff = scrollY >= settleEnd ? "true" : "false";
      el.style.zIndex = "99";
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
        src="/images/DSC08355-portrait.jpg"
        alt="Tyler Dial"
        width={800}
        height={1200}
        className="w-full h-full object-cover"
        priority
      />
    </div>
  );
}
