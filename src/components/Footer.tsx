"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZoneName: "short",
        })
      );
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer
      className="flex justify-between items-center text-[0.72rem]"
      style={{
        padding: "3rem clamp(2rem, 7vw, 7rem)",
        color: "var(--accent)",
        background: "var(--white)",
        borderTop: "1px solid var(--rule)",
      }}
    >
      <span className="font-display font-medium">
        &copy; {new Date().getFullYear()} &middot; Tyler
      </span>
      <span>{time}</span>
    </footer>
  );
}
