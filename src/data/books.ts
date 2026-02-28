export interface CurrentBook {
  title: string;
  author: string;
  color: string;
  progress: number;
}

export interface ReadBook {
  title: string;
  author: string;
  rating: number;
}

export const currentlyReading: CurrentBook[] = [
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    color: "#2a3444",
    progress: 72,
  },
  {
    title: "Building Applications with AI Agents",
    author: "Michael Albada",
    color: "#3b2d50",
    progress: 45,
  },
  {
    title: "Context Engineering for Observability",
    author: "David Beale",
    color: "#1e3d3f",
    progress: 20,
  },
];

export const recentlyRead: ReadBook[] = [
  {
    title: "Freedom",
    author: "Jonathan Franzen",
    rating: 4.6,
  },
  {
    title: "Gang Leader for a Day",
    author: "Sudhir Venkatesh",
    rating: 4.2,
  },
  {
    title: "Evenings and Weekends",
    author: "Oisín McKenna",
    rating: 4.8,
  },
  {
    title: "The Keep",
    author: "Jennifer Egan",
    rating: 3.9,
  },
  {
    title: "Stoner",
    author: "John Williams",
    rating: 4.4,
  },
  {
    title: "On Earth We're Briefly Gorgeous",
    author: "Ocean Vuong",
    rating: 4.3,
  },
];
