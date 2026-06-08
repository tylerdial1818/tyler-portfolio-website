export interface Project {
  title: string;
  tags: string[];
  desc: string;
  gradient: string;
  image?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    title: "Labor Pulse",
    tags: ["Labor Economics", "Policy Analytics", "Research Tool"],
    desc: "Public US labor market monitor for labor economists, journalists, and policy analysts tracking labor signals for research and briefings.",
    gradient: "linear-gradient(135deg, #101010 0%, #1f3bff 48%, #050816 100%)",
    link: "https://labor-pulse.vercel.app/",
  },
  {
    title: "ML Illustrated",
    tags: ["Full-Stack", "ML Engineering", "AI Architectures"],
    desc: "Interactive tool for building intuition about how ML models work under the hood.",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    image: "/images/project-ml-illustrated-live.png",
    link: "https://ml-illustrated-app.vercel.app/",
  },
  {
    title: "Retain",
    tags: ["AI Agents", "Multi-Agent", "ML Engineering"],
    desc: "Lifecycle management app demo with a full ML pipeline and multi-agent workflows.",
    gradient: "linear-gradient(135deg, #0d1117 0%, #161b22 50%, #1c2333 100%)",
    image: "/images/project-retain-live.png",
    link: "https://retain-demo.vercel.app/",
  },
  {
    title: "Housing Pulse",
    tags: ["GIS", "Data Science", "Geospatial"],
    desc: "GIS tool for visualizing housing affordability across the United States.",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1e293b 100%)",
    image: "/images/project-housing-pulse-live.png",
    link: "https://us-affordability-web-app.vercel.app/",
  },
  {
    title: "Social Impact Chatbot",
    tags: ["RAG", "LLMs", "AI Engineering"],
    desc: "RAG chatbot for social-impact practitioners, structured around Theory of Change research to guide project planning.",
    gradient: "linear-gradient(135deg, #0c1821 0%, #1b2838 50%, #0f2027 100%)",
    image: "/images/project-social-impact-live.png",
    link: "https://social-impact-chatbot.vercel.app/",
  },
];
