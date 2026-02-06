"use client";

interface MarqueeProps {
  items: string[];
  dark?: boolean;
  speed?: number;
}

export default function Marquee({
  items,
  dark = true,
  speed = 28,
}: MarqueeProps) {
  const color = dark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)";
  const border = dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";

  const repeated = Array(3).fill(items).flat();

  return (
    <div
      className="overflow-hidden whitespace-nowrap py-4"
      style={{
        borderTop: `1px solid ${border}`,
        borderBottom: `1px solid ${border}`,
      }}
    >
      <div
        className="inline-block font-body text-[0.82rem] font-normal uppercase"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          letterSpacing: "0.06em",
          color,
        }}
      >
        {repeated.map((t, i) => (
          <span key={i}>
            {t}
            <span
              className="mx-8 text-[0.6rem]"
              style={{ color: "var(--accent)", opacity: 0.4 }}
            >
              &#9670;
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
