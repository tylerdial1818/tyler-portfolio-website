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
    title: "ML Illustrated",
    tags: ["Full-Stack Engineering", "ML Engineering", "AI Architectures"],
    desc: "Educational tool and passion project aimed at teaching the visual intuition behind ML and AI models.",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    image: "/images/MLIllustratedSS.png",
    link: "https://ml-illustrated-app.vercel.app/",
  },
  {
    title: "Retain App with Multi-Agent Workflows",
    tags: ["AI Agents", "Multi Agent Workflows", "ML Engineering"],
    desc: "Lifecycle management app demo with full ML pipeline and multi-agent workflows.",
    gradient: "linear-gradient(135deg, #0d1117 0%, #161b22 50%, #1c2333 100%)",
    image: "/images/retain_logo.png",
  },
  {
    title: "Housing Pulse",
    tags: ["GIS", "Data Science", "Geospatial"],
    desc: "GIS-powered tool aimed at helping people visualize affordability in the United States (renting vs. home ownership).",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1e293b 100%)",
    image: "/images/HousingPulseSS1.png",
    link: "https://us-affordability-web-app.vercel.app/",
  },
  {
    title: "Social Impact Chatbot",
    tags: ["RAG", "LLMs", "AI Engineering"],
    desc: "RAG-engineered chatbot to help social impact practitioners plan rigorous projects according to Theory of Change (ToC) research.",
    gradient: "linear-gradient(135deg, #0c1821 0%, #1b2838 50%, #0f2027 100%)",
    image: "/images/SICSS.png",
  },
];
