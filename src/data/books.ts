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
    title: "The Art of Statistics",
    author: "David Spiegelhalter",
    color: "#3b2d50",
    progress: 45,
  },
  {
    title: "Thinking in Systems",
    author: "Donella Meadows",
    color: "#1e3d3f",
    progress: 20,
  },
];

export const recentlyRead: ReadBook[] = [
  {
    title: "Designing Machine Learning Systems",
    author: "Chip Huyen",
    rating: 5,
  },
  {
    title: "The Visual Display of Quantitative Information",
    author: "Edward Tufte",
    rating: 5,
  },
  {
    title: "An Elegant Puzzle",
    author: "Will Larson",
    rating: 4,
  },
  {
    title: "Naked Statistics",
    author: "Charles Wheelan",
    rating: 4,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Hunt & Thomas",
    rating: 5,
  },
  {
    title: "Build",
    author: "Tony Fadell",
    rating: 4,
  },
];
