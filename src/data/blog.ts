export interface BlogPost {
  title: string;
  tag: string;
  date: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Why I Stopped Using Notebooks for Production ML",
    tag: "Engineering",
    date: "Jan 2025",
    slug: "notebooks-production-ml",
  },
  {
    title: "A Visual Guide to Bayesian Optimization",
    tag: "Tutorial",
    date: "Dec 2024",
    slug: "bayesian-optimization-visual-guide",
  },
  {
    title: "Building Real-Time Dashboards with DuckDB + WASM",
    tag: "Deep Dive",
    date: "Nov 2024",
    slug: "duckdb-wasm-dashboards",
  },
];
