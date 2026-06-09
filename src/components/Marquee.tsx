"use client";

const experience = [
  "Franklin Covey",
  "Hewlett Packard - HP Tech Ventures",
  "National Bureau of Economic Research",
  "Zions Bank",
  "Ampleo",
  "Socio",
  "Messina Group Consulting",
];

const skills = [
  "AI Engineering",
  "LLM Applications",
  "AI Agent Systems",
  "RAG Engineering",
  "Vector Databases",
  "Model Evaluation",
  "MLOps",
  "Data Science",
  "Causal ML",
  "Deep Learning",
  "Natural Language Processing",
  "Python",
  "JavaScript / CSS",
  "Go",
  "Java",
  "Docker",
  "Kubernetes",
  "Cloud Infrastructure",
  "Context Engineering",
  "Decision Analytics",
  "Optimization Systems",
  "Custom Data Systems",
  "Dynamic Pricing Models",
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
