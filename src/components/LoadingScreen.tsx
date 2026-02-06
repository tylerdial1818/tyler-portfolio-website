"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let current = 0;
    const id = setInterval(() => {
      current += Math.random() * 18 + 4;
      if (current >= 100) {
        current = 100;
        clearInterval(id);
        setTimeout(onComplete, 400);
      }
      setPct(Math.min(Math.round(current), 100));
    }, 120);
    return () => clearInterval(id);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[9999] flex flex-col justify-end p-16 overflow-hidden"
        style={{ background: "var(--dark)", color: "var(--dark-text)" }}
      >
        {/* Background watermark */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-display font-[800] opacity-[0.05]"
          style={{
            fontSize: "clamp(4rem, 12vw, 10rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
          }}
        >
          PORTFOLIO
        </div>

        {/* Bottom content */}
        <div className="flex justify-between items-end">
          <div>
            <div
              className="text-[0.7rem] uppercase mb-3"
              style={{
                letterSpacing: "0.2em",
                color: "var(--muted-dark)",
              }}
            >
              Loading experience
            </div>
            <div
              className="font-display font-[800]"
              style={{
                fontSize: "clamp(3rem, 8vw, 6rem)",
                letterSpacing: "-0.03em",
                color: "var(--accent)",
              }}
            >
              {pct}%
            </div>
          </div>

          <div
            className="w-[200px] h-[2px] rounded-sm overflow-hidden"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            <div
              className="h-full rounded-sm transition-[width] duration-150 ease-linear"
              style={{
                width: `${pct}%`,
                background: "var(--accent)",
              }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
