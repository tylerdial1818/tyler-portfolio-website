"use client";

import { useState, useEffect } from "react";

const SOCIAL_LINKS = [
  { name: "GitHub", url: "https://github.com/tylerdial1818" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/tyler-dial18/" },
  { name: "Instagram", url: "https://www.instagram.com/tyler_dial97/" },
];

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
      className="grid grid-cols-1 md:grid-cols-3 items-center text-[0.72rem]"
      style={{
        padding: "2.5rem clamp(1.5rem, 5vw, 4rem)",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        color: "rgba(255,255,255,0.2)",
        letterSpacing: "0.05em",
        background: "var(--dark)",
      }}
    >
      <span className="text-center md:text-left">
        &copy; {new Date().getFullYear()} &middot; Tyler Dial
      </span>
      <span className="text-center hidden md:block">{time}</span>
      <div className="flex gap-8 justify-center md:justify-end mt-4 md:mt-0">
        {SOCIAL_LINKS.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            {s.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
