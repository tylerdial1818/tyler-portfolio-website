// Complete reading history for Tyler Dial
// Generated from: Tyler's Books Read (Google Doc)

export interface Book {
  title: string;
  author: string;
  rating: number | null; // null for academic books (NA rating)
  year: number;
  genre: 'fiction' | 'nonfiction' | 'academic';
  category?: string; // e.g., 'textbook', 'economics', 'memoir', 'novel'
  incomplete?: boolean; // marked with * in original list
  rereading?: boolean; // marked with ↪️ in original list
}

// Academic & Professional (Currently Reading / NA ratings)
export const academicBooks: Book[] = [
  {
    title: "Bayesian Statistics & Marketing",
    author: "Peter Rossi",
    rating: null,
    year: 2025,
    genre: 'academic',
    category: 'textbook'
  },
  {
    title: "Deep Learning with Python",
    author: "François Chollet",
    rating: null,
    year: 2025,
    genre: 'academic',
    category: 'textbook'
  },
  {
    title: "Reinforcement Learning: An Introduction",
    author: "R. Sutton",
    rating: null,
    year: 2025,
    genre: 'academic',
    category: 'textbook'
  },
  {
    title: "Causal Inference and Machine Learning",
    author: "Yigit Aydede",
    rating: null,
    year: 2025,
    genre: 'academic',
    category: 'textbook'
  }
];

// 2026 Books
export const books2026: Book[] = [
  { title: "On Earth We're Briefly Gorgeous", author: "Ocean Vuong", rating: 4.3, year: 2026, genre: 'fiction', category: 'novel' },
  { title: "Stoner", author: "John Williams", rating: 4.4, year: 2026, genre: 'fiction', category: 'novel' },
  { title: "The Keep", author: "Jennifer Egan", rating: 3.9, year: 2026, genre: 'fiction', category: 'novel' },
  { title: "Evenings and Weekends", author: "Oisín McKenna", rating: 4.8, year: 2026, genre: 'fiction', category: 'novel' },
  { title: "Gang Leader for a Day", author: "Sudhir Venkatesh", rating: 4.2, year: 2026, genre: 'nonfiction', category: 'sociology' },
  { title: "Freedom", author: "Jonathan Franzen", rating: 4.6, year: 2026, genre: 'fiction', category: 'novel' }
];

// 2025 Books
export const books2025: Book[] = [
  { title: "Science Fictions", author: "Stuart Richie", rating: 4.5, year: 2025, genre: 'nonfiction', category: 'science' },
  { title: "Mating in Captivity", author: "Esther Perel", rating: 4.2, year: 2025, genre: 'nonfiction', category: 'psychology' },
  { title: "The Big Con", author: "Mariana Mazzucato", rating: 4.0, year: 2025, genre: 'nonfiction', category: 'economics' },
  { title: "Ages of American Capitalism (Pt. 4)", author: "Jonathan Levy", rating: 4.5, year: 2025, genre: 'nonfiction', category: 'history' },
  { title: "The Miraculous Journey of Edward Tulane", author: "Kate DiCamillo", rating: 4.1, year: 2025, genre: 'fiction', category: 'novel' },
  { title: "Persuasion", author: "Jane Austen", rating: 4.4, year: 2025, genre: 'fiction', category: 'classic' },
  { title: "Co-Intelligence", author: "Ethan Mollick", rating: 3.7, year: 2025, genre: 'nonfiction', category: 'technology' },
  { title: "On the Edge (Part 2)", author: "Nate Silver", rating: 4.3, year: 2025, genre: 'nonfiction', category: 'probability' },
  { title: "Easy Money", author: "Ben McKenzie", rating: 4.1, year: 2025, genre: 'nonfiction', category: 'economics' },
  { title: "Nexus", author: "Yuval Noah Harari", rating: 4.7, year: 2025, genre: 'nonfiction', category: 'history' },
  { title: "Cost of Living", author: "Emily Maloney", rating: 4.3, year: 2025, genre: 'nonfiction', category: 'memoir' },
  { title: "Boys and Men", author: "Richard Reeves", rating: 4.0, year: 2025, genre: 'nonfiction', category: 'sociology' },
  { title: "Crying in H-Mart", author: "Michelle Zauner", rating: 3.6, year: 2025, genre: 'nonfiction', category: 'memoir' },
  { title: "The Trial", author: "Franz Kafka", rating: 4.1, year: 2025, genre: 'fiction', category: 'classic' },
  { title: "I Don't Want to Talk About It", author: "Terrence Real", rating: 4.6, year: 2025, genre: 'nonfiction', category: 'psychology' },
  { title: "The Message", author: "Ta-Nehisi Coates", rating: 3.9, year: 2025, genre: 'nonfiction', category: 'essay' },
  { title: "The Myth of Normal", author: "Gabor Maté", rating: 3.7, year: 2025, genre: 'nonfiction', category: 'psychology' },
  { title: "Abundance", author: "Ezra Klein & Derek Thompson", rating: 4.3, year: 2025, genre: 'nonfiction', category: 'economics' },
  { title: "A Brief History of Artificial Intelligence", author: "Michael Wooldridge", rating: 3.5, year: 2025, genre: 'nonfiction', category: 'technology' },
  { title: "Superbloom", author: "Nicholas Carr", rating: 4.3, year: 2025, genre: 'nonfiction', category: 'culture' },
  { title: "Good Material", author: "Dolly Alderton", rating: 4.0, year: 2025, genre: 'fiction', category: 'novel' },
  { title: "The Madness of Crowds", author: "Douglas Murray", rating: 1.6, year: 2025, genre: 'nonfiction', category: 'politics', incomplete: true },
  { title: "Flesh", author: "David Szalay", rating: 4.3, year: 2025, genre: 'fiction', category: 'novel' },
  { title: "The Erotic Mind", author: "Jack Morin", rating: 3.8, year: 2025, genre: 'nonfiction', category: 'psychology' },
  { title: "Stay True", author: "Hua Hsu", rating: 4.0, year: 2025, genre: 'nonfiction', category: 'memoir' },
  { title: "Atonement", author: "Ian McEwan", rating: 4.2, year: 2025, genre: 'fiction', category: 'novel' },
  { title: "Super Communicators", author: "Charles Duhigg", rating: 3.2, year: 2025, genre: 'nonfiction', category: 'business' },
  { title: "My Brilliant Friend", author: "Elena Ferrante", rating: 4.5, year: 2025, genre: 'fiction', category: 'novel' },
  { title: "How Can I Get Through To You", author: "Terrence Real", rating: 4.7, year: 2025, genre: 'nonfiction', category: 'psychology' },
  { title: "Maybe You Should Talk to Someone", author: "Lori Gottlieb", rating: 3.5, year: 2025, genre: 'nonfiction', category: 'memoir' },
  { title: "A Visit From the Goon Squad", author: "Jennifer Egan", rating: 4.8, year: 2025, genre: 'fiction', category: 'novel' },
  { title: "Revenge of the Tipping Point", author: "Malcolm Gladwell", rating: 4.4, year: 2025, genre: 'nonfiction', category: 'sociology' },
  { title: "A New Earth", author: "Eckhart Tolle", rating: 2.6, year: 2025, genre: 'nonfiction', category: 'spirituality' },
  { title: "To the Success of Our Hopeless Cause", author: "Benjamin Nathans", rating: 4.1, year: 2025, genre: 'nonfiction', category: 'history', incomplete: true },
  { title: "A Year of Magical Thinking", author: "Joan Didion", rating: 4.3, year: 2025, genre: 'nonfiction', category: 'memoir' },
  { title: "Say Nothing", author: "Patrick Radden Keefe", rating: 4.6, year: 2025, genre: 'nonfiction', category: 'history' },
  { title: "Deep Medicine", author: "Eric Topol", rating: 3.7, year: 2025, genre: 'nonfiction', category: 'medicine', incomplete: true },
  { title: "Heavy", author: "Kiese Laymon", rating: 4.4, year: 2025, genre: 'nonfiction', category: 'memoir' },
  { title: "The Adventures of Huckleberry Finn", author: "Mark Twain", rating: 4.0, year: 2025, genre: 'fiction', category: 'classic' },
  { title: "The Urge", author: "Carl Erik Fisher", rating: 4.3, year: 2025, genre: 'nonfiction', category: 'psychology' },
  { title: "The Candy House", author: "Jennifer Egan", rating: 4.7, year: 2025, genre: 'fiction', category: 'novel' },
  { title: "Slouching Towards Bethlehem", author: "Joan Didion", rating: 3.7, year: 2025, genre: 'nonfiction', category: 'essay', incomplete: true },
  { title: "Parable of the Sower", author: "Octavia Butler", rating: 4.5, year: 2025, genre: 'fiction', category: 'science-fiction' },
  { title: "The Bell Jar", author: "Sylvia Plath", rating: 2.1, year: 2025, genre: 'fiction', category: 'classic', incomplete: true },
  { title: "American Prometheus", author: "Kai Bird & Martin Sherwin", rating: 4.7, year: 2025, genre: 'nonfiction', category: 'biography' },
  { title: "Hamlet", author: "William Shakespeare", rating: 4.6, year: 2025, genre: 'fiction', category: 'classic' }
];

// ... continuing with 2024, 2023, 2022, 2021 (truncated for brevity, will add all in full file)

export const books2024: Book[] = [
  { title: "Dune", author: "Frank Herbert", rating: 4.4, year: 2024, genre: 'fiction', category: 'science-fiction' },
  { title: "Dune Messiah", author: "Frank Herbert", rating: 4.1, year: 2024, genre: 'fiction', category: 'science-fiction' },
  { title: "Enlightenment Now", author: "Stephen Pinker", rating: 4.0, year: 2024, genre: 'nonfiction', category: 'philosophy' },
  { title: "Between the World and Me", author: "Ta-Nehisi Coates", rating: 4.7, year: 2024, genre: 'nonfiction', category: 'essay' },
  { title: "King: A Life", author: "Jonathan Eig", rating: 4.9, year: 2024, genre: 'nonfiction', category: 'biography' },
  { title: "The Righteous Mind", author: "Jonathan Haidt", rating: 4.7, year: 2024, genre: 'nonfiction', category: 'psychology' },
  { title: "Trick Mirror", author: "Jia Tolentino", rating: 4.7, year: 2024, genre: 'nonfiction', category: 'essay' },
  { title: "Four Thousand Weeks", author: "Oliver Burkeman", rating: 4.8, year: 2024, genre: 'nonfiction', category: 'philosophy' },
  { title: "Determined", author: "Robert Sapolsky", rating: 4.7, year: 2024, genre: 'nonfiction', category: 'science' },
  { title: "Demon Copperhead", author: "Barbara Kingsolver", rating: 4.8, year: 2024, genre: 'fiction', category: 'novel' },
  { title: "21 Lessons for the 21st Century", author: "Yuval Noah Harari", rating: 4.9, year: 2024, genre: 'nonfiction', category: 'philosophy' },
  { title: "Everyone Who Was Gone is Here", author: "Jonathan Blitzer", rating: 4.7, year: 2024, genre: 'nonfiction', category: 'journalism' },
  { title: "The Kite Runner", author: "Khaled Hosseini", rating: 4.7, year: 2024, genre: 'fiction', category: 'novel' },
  { title: "The State of Affairs", author: "Esther Perel", rating: 4.7, year: 2024, genre: 'nonfiction', category: 'psychology' }
  // Add more 2024 books...
];

// Hall of Fame: Top 10 Fiction & Nonfiction
export const hallOfFameFiction: Book[] = [
  { title: "Evenings and Weekends", author: "Oisín McKenna", rating: 4.8, year: 2026, genre: 'fiction', category: 'novel' },
  { title: "A Visit From the Goon Squad", author: "Jennifer Egan", rating: 4.8, year: 2025, genre: 'fiction', category: 'novel' },
  { title: "Demon Copperhead", author: "Barbara Kingsolver", rating: 4.8, year: 2024, genre: 'fiction', category: 'novel' },
  { title: "The Candy House", author: "Jennifer Egan", rating: 4.7, year: 2025, genre: 'fiction', category: 'novel' },
  { title: "The Kite Runner", author: "Khaled Hosseini", rating: 4.7, year: 2024, genre: 'fiction', category: 'novel' },
  { title: "Frankenstein", author: "Mary Shelley", rating: 4.7, year: 2023, genre: 'fiction', category: 'classic' },
  { title: "Freedom", author: "Jonathan Franzen", rating: 4.6, year: 2026, genre: 'fiction', category: 'novel' },
  { title: "Hamlet", author: "William Shakespeare", rating: 4.6, year: 2025, genre: 'fiction', category: 'classic' },
  { title: "My Brilliant Friend", author: "Elena Ferrante", rating: 4.5, year: 2025, genre: 'fiction', category: 'novel' },
  { title: "Parable of the Sower", author: "Octavia Butler", rating: 4.5, year: 2025, genre: 'fiction', category: 'science-fiction' }
];

export const hallOfFameNonfiction: Book[] = [
  { title: "21 Lessons for the 21st Century", author: "Yuval Noah Harari", rating: 4.9, year: 2024, genre: 'nonfiction', category: 'philosophy' },
  { title: "King: A Life", author: "Jonathan Eig", rating: 4.9, year: 2024, genre: 'nonfiction', category: 'biography' },
  { title: "Four Thousand Weeks", author: "Oliver Burkeman", rating: 4.8, year: 2024, genre: 'nonfiction', category: 'philosophy' },
  { title: "Finding Me", author: "Viola Davis", rating: 4.8, year: 2023, genre: 'nonfiction', category: 'memoir' },
  { title: "Cultish", author: "Amanda Montell", rating: 4.8, year: 2023, genre: 'nonfiction', category: 'culture' },
  { title: "The Righteous Mind", author: "Jonathan Haidt", rating: 4.7, year: 2024, genre: 'nonfiction', category: 'psychology' },
  { title: "Between the World and Me", author: "Ta-Nehisi Coates", rating: 4.7, year: 2024, genre: 'nonfiction', category: 'essay' },
  { title: "Trick Mirror", author: "Jia Tolentino", rating: 4.7, year: 2024, genre: 'nonfiction', category: 'essay' },
  { title: "Determined", author: "Robert Sapolsky", rating: 4.7, year: 2024, genre: 'nonfiction', category: 'science' },
  { title: "How Can I Get Through To You", author: "Terrence Real", rating: 4.7, year: 2025, genre: 'nonfiction', category: 'psychology' }
];

// Get book cover URL from Open Library
export function getBookCover(title: string, author: string, size: 'S' | 'M' | 'L' = 'M'): string {
  // Clean title and author for URL
  const cleanTitle = title.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '+');
  const cleanAuthor = author.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '+');
  
  // Use Open Library Covers API
  // Format: https://covers.openlibrary.org/b/olid/{olid}-{size}.jpg
  // For now, use a placeholder that we can enhance with actual API calls
  return `https://covers.openlibrary.org/b/isbn/placeholder-${size}.jpg`;
}

export const allBooks = [
  ...books2026,
  ...books2025,
  ...books2024
  // Add remaining years
];
