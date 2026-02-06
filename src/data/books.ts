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
  tags: string[];
}

export const currentlyReading: CurrentBook[] = [
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    color: "#2d3748",
    progress: 72,
  },
  {
    title: "The Art of Statistics",
    author: "David Spiegelhalter",
    color: "#1a365d",
    progress: 45,
  },
  {
    title: "Thinking in Systems",
    author: "Donella Meadows",
    color: "#234e52",
    progress: 20,
  },
];

export const recentlyRead: ReadBook[] = [
  {
    title: "Designing Machine Learning Systems",
    author: "Chip Huyen",
    rating: 5,
    tags: ["ML", "Systems"],
  },
  {
    title: "The Visual Display of Quantitative Information",
    author: "Edward Tufte",
    rating: 5,
    tags: ["Design", "Data Viz"],
  },
  {
    title: "An Elegant Puzzle",
    author: "Will Larson",
    rating: 4,
    tags: ["Engineering", "Leadership"],
  },
  {
    title: "Naked Statistics",
    author: "Charles Wheelan",
    rating: 4,
    tags: ["Statistics"],
  },
  {
    title: "Build",
    author: "Tony Fadell",
    rating: 4,
    tags: ["Product", "Design"],
  },
  {
    title: "The Pragmatic Programmer",
    author: "Hunt & Thomas",
    rating: 5,
    tags: ["Engineering"],
  },
];
