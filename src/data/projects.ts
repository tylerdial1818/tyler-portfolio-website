export interface Project {
  title: string;
  tags: string[];
  desc: string;
  metric: string;
  metricLabel: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    title: "Predictive Churn Model",
    tags: ["Python", "XGBoost", "Streamlit"],
    desc: "End-to-end ML pipeline predicting customer churn with 94% accuracy. Streamlit dashboard for stakeholder exploration.",
    metric: "94%",
    metricLabel: "accuracy",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  },
  {
    title: "Real-Time Sentiment Engine",
    tags: ["NLP", "FastAPI", "Redis"],
    desc: "Streaming sentiment analysis API processing 10k tweets/min with sub-200ms latency. AWS auto-scaling.",
    metric: "10k/m",
    metricLabel: "throughput",
    gradient: "linear-gradient(135deg, #0d1117 0%, #161b22 50%, #1c2333 100%)",
  },
  {
    title: "Portfolio Optimization Suite",
    tags: ["Scipy", "Plotly", "React"],
    desc: "Interactive mean-variance optimizer with Monte Carlo simulation and efficient frontier visualization.",
    metric: "50k+",
    metricLabel: "simulations",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1e293b 100%)",
  },
  {
    title: "Geospatial Analytics Platform",
    tags: ["GeoPandas", "DuckDB", "Mapbox"],
    desc: "City-scale mobility analysis processing 50M+ GPS pings with H3 hexagonal spatial indexing.",
    metric: "50M+",
    metricLabel: "data points",
    gradient: "linear-gradient(135deg, #0c1821 0%, #1b2838 50%, #0f2027 100%)",
  },
];
