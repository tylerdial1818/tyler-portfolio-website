"use client";

interface MarqueeProps {
  items: string[];
  speed?: number;
}

export default function Marquee({ items, speed = 35 }: MarqueeProps) {
  const repeated = Array(4).fill(items).flat();

  return (
    <div
      className="overflow-hidden"
      style={{
        background: "var(--accent)",
        padding: "1.4rem 0",
      }}
    >
      <div
        className="inline-block whitespace-nowrap font-display font-medium uppercase"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          fontSize: "0.68rem",
          letterSpacing: "0.12em",
          color: "rgba(255,255,255,0.85)",
        }}
      >
        {repeated.map((t, i) => (
          <span key={i} className="mr-14">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
