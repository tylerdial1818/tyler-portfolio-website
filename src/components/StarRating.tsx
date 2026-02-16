export default function StarRating({
  rating,
  max = 5,
}: {
  rating: number;
  max?: number;
}) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  return (
    <div className="inline-flex items-center gap-1.5">
      <span className="inline-flex gap-0.5">
        {Array.from({ length: max }, (_, i) => {
          if (i < fullStars) {
            // Full star
            return (
              <span
                key={i}
                className="text-[0.85rem]"
                style={{ color: "var(--accent)" }}
              >
                ★
              </span>
            );
          } else if (i === fullStars && hasHalfStar) {
            // Half star
            return (
              <span
                key={i}
                className="text-[0.85rem]"
                style={{ color: "var(--accent)", position: "relative" }}
              >
                <span style={{ position: "absolute", overflow: "hidden", width: "50%" }}>★</span>
                <span style={{ color: "var(--rule)" }}>★</span>
              </span>
            );
          } else {
            // Empty star
            return (
              <span
                key={i}
                className="text-[0.85rem]"
                style={{ color: "var(--rule)" }}
              >
                ★
              </span>
            );
          }
        })}
      </span>
      <span className="text-[0.75rem] font-medium" style={{ color: "var(--muted)" }}>
        {rating.toFixed(1)}
      </span>
    </div>
  );
}
