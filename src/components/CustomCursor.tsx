"use client";

import { useState, useEffect } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [scale, setScale] = useState(1);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop
    if (window.matchMedia("(max-width: 1023px)").matches) return;

    document.body.classList.add("custom-cursor");

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, .nav-link, .project-card, .cta-btn, .blog-row") ||
        target.tagName === "A" ||
        target.tagName === "BUTTON"
      ) {
        setScale(2.5);
      }
    };

    const handleOut = () => setScale(1);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      document.body.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Outer ring */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          left: pos.x,
          top: pos.y,
          width: 14,
          height: 14,
          marginLeft: -7,
          marginTop: -7,
          border: "1.5px solid var(--accent)",
          transform: `scale(${scale})`,
          transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          mixBlendMode: "difference",
        }}
      />
      {/* Inner dot */}
      <div
        className="fixed pointer-events-none z-[9998] rounded-full"
        style={{
          left: pos.x,
          top: pos.y,
          width: 4,
          height: 4,
          marginLeft: -2,
          marginTop: -2,
          background: "var(--accent)",
        }}
      />
    </>
  );
}
