export interface Project {
  title: string;
  tags: string[];
  desc: string;
  metric: string;
  metricLabel: string;
  year: string;
}

export const projects: Project[] = [
  {
    title: "Predictive Churn Model",
    tags: ["Python", "XGBoost", "Streamlit"],
    desc: "End-to-end ML pipeline predicting customer churn with 94% accuracy. Streamlit dashboard for stakeholder exploration.",
    metric: "94%",
    metricLabel: "accuracy",
    year: "2025",
  },
  {
    title: "Real-Time Sentiment Engine",
    tags: ["NLP", "FastAPI", "Redis"],
    desc: "Streaming sentiment analysis API processing 10k tweets/min with sub-200ms latency. AWS auto-scaling.",
    metric: "10k/m",
    metricLabel: "throughput",
    year: "2024",
  },
  {
    title: "Portfolio Optimization Suite",
    tags: ["Scipy", "Plotly", "React"],
    desc: "Interactive mean-variance optimizer with Monte Carlo simulation and efficient frontier visualization.",
    metric: "50k+",
    metricLabel: "simulations",
    year: "2024",
  },
  {
    title: "Geospatial Analytics Platform",
    tags: ["GeoPandas", "DuckDB", "Mapbox"],
    desc: "City-scale mobility analysis processing 50M+ GPS pings with H3 hexagonal spatial indexing.",
    metric: "50M+",
    metricLabel: "data points",
    year: "2023",
  },
];
