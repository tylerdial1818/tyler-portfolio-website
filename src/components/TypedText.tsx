"use client";

import { useState, useEffect } from "react";

export default function TypedText({ texts }: { texts: string[] }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    const timer = setTimeout(
      () => {
        if (!deleting) {
          setDisplayed(current.slice(0, displayed.length + 1));
          if (displayed.length + 1 === current.length)
            setTimeout(() => setDeleting(true), 2000);
        } else {
          setDisplayed(current.slice(0, displayed.length - 1));
          if (displayed.length - 1 === 0) {
            setDeleting(false);
            setIdx((idx + 1) % texts.length);
          }
        }
      },
      deleting ? 40 : 80
    );
    return () => clearTimeout(timer);
  }, [displayed, deleting, idx, texts]);

  return (
    <span>
      {displayed}
      <span
        className="ml-0.5"
        style={{
          borderRight: "2px solid var(--accent)",
          animation: "blink 1s step-end infinite",
        }}
      >
        &nbsp;
      </span>
    </span>
  );
}
