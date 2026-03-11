export interface BlogPost {
  title: string;
  tag: string;
  date: string;
  slug: string;
  href?: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Reducing Churn with ML & AI in a CI/CD Application",
    tag: "MSDS Report",
    date: "March 2026",
    slug: "Reducing-Churn-with-ML-and-AI",
    href: "/writing/Reducing-Churn-with-ML-and-AI.pdf",
  },
  {
    title: "The AI Transition Has Started",
    tag: "Personal Substack",
    date: "February 2026",
    slug: "the-ai-transition-has-started",
    href: "https://tylerdial1818.substack.com/p/the-ai-transition-has-started",
  },
  {
    title: "Predicting Economic Volatility With Deep Learning Methods",
    tag: "MSDS Report",
    date: "December 2025",
    slug: "Predicting-Economic-Volatility",
    href: "/writing/Predicting-Economic-Volatility.pdf",
  },
];
