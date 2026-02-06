export interface BentoItem {
  label: string;
  value: string;
  span: number;
  highlight?: boolean;
}

export const bentoItems: BentoItem[] = [
  { label: "Languages", value: "Python \u00b7 SQL \u00b7 JS \u00b7 R", span: 1 },
  { label: "ML / DS", value: "scikit-learn \u00b7 PyTorch \u00b7 XGBoost", span: 1 },
  { label: "Data", value: "Pandas \u00b7 DuckDB \u00b7 Spark \u00b7 dbt", span: 1 },
  { label: "Infra", value: "Docker \u00b7 AWS \u00b7 FastAPI \u00b7 Airflow", span: 1 },
  { label: "Frontend", value: "React \u00b7 Next.js \u00b7 D3 \u00b7 Plotly", span: 1 },
  {
    label: "Currently",
    value: "ML systems design & interactive visualization",
    span: 2,
    highlight: true,
  },
];

export const skillsMarquee = [
  "Data Science",
  "Machine Learning",
  "Software Engineering",
  "Visualization",
  "Statistical Modeling",
  "Full-Stack Development",
];

export const blogMarquee = [
  "Thoughts",
  "Experiments",
  "Tutorials",
  "Deep Dives",
  "Notes",
  "Reflections",
];
