"use client";

const experience = [
  "Franklin Covey",
  "Hewlett Packard - HP Tech Ventures",
  "National Bureau of Economic Research",
  "Zions Bank",
  "Ampleo",
  "Socio",
];

const skills = [
  "Data Science",
  "Causal ML",
  "Deep Learning",
  "Natural Language Processing",
  "MLOps",
  "AI Engineering",
  "Decision Analytics",
  "Optimization Systems",
  "AI Agent Systems",
  "Context Engineering",
  "RAG Engineering",
];

function Row({
  items,
  reverse = false,
  skill = false,
}: {
  items: string[];
  reverse?: boolean;
  skill?: boolean;
}) {
  const renderGroup = (hidden = false) => (
    <div className="marquee__group" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <span className={`marquee__item${skill ? " marquee__item--skill" : ""}`} key={item}>
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <div className={`marquee__row${reverse ? " rev" : ""}`}>
      {renderGroup()}
      {renderGroup(true)}
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="marquee" aria-label="Experience and skills">
      <Row items={experience} />
      <Row items={skills} reverse skill />
    </section>
  );
}
