export interface Skill {
  label: string;
  value: string;
}

export const skills: Skill[] = [
  { label: "Languages", value: "Python \u00b7 SQL \u00b7 JavaScript \u00b7 R" },
  { label: "ML / DS", value: "scikit-learn \u00b7 PyTorch \u00b7 XGBoost" },
  { label: "Data Engineering", value: "Pandas \u00b7 DuckDB \u00b7 Spark \u00b7 dbt" },
  { label: "Infrastructure", value: "Docker \u00b7 AWS \u00b7 FastAPI \u00b7 Airflow" },
  { label: "Frontend", value: "React \u00b7 Next.js \u00b7 D3 \u00b7 Plotly" },
];

export const marqueeItems = [
  "Data Science",
  "Machine Learning",
  "Software Engineering",
  "Visualization",
  "Statistical Modeling",
  "Full-Stack Development",
];
