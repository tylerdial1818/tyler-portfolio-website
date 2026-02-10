// Complete reading history for Tyler Dial
// Source: https://docs.google.com/document/d/1BE3JkBWdeirIxOEwv7fTeFcfIZ7mJk7vGK7Ktb8fLsI

export interface Book {
  title: string;
  author: string;
  rating: number | null;
  year: number;
  genre: 'fiction' | 'nonfiction' | 'academic';
  category?: string;
  incomplete?: boolean;
  rereading?: boolean;
}

// Academic & Professional (Currently Reading)
export const academicBooks: Book[] = [
  { title: "Bayesian Statistics & Marketing", author: "Peter Rossi", rating: null, year: 2025, genre: 'academic', category: 'textbook' },
  { title: "Deep Learning with Python", author: "François Chollet", rating: null, year: 2025, genre: 'academic', category: 'textbook' },
  { title: "Reinforcement Learning: An Introduction", author: "R. Sutton", rating: null, year: 2025, genre: 'academic', category: 'textbook' },
  { title: "Causal Inference and Machine Learning", author: "Yigit Aydede", rating: null, year: 2025, genre: 'academic', category: 'textbook' }
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

// 2025 Books (UPDATED RATINGS)
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
  { title: "Nexus", author: "Yuval Noah Harari", rating: 4.8, year: 2025, genre: 'nonfiction', category: 'history' },
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
  { title: "The Candy House", author: "Jennifer Egan", rating: 4.5, year: 2025, genre: 'fiction', category: 'novel' },
  { title: "Slouching Towards Bethlehem", author: "Joan Didion", rating: 3.7, year: 2025, genre: 'nonfiction', category: 'essay', incomplete: true },
  { title: "Parable of the Sower", author: "Octavia Butler", rating: 4.5, year: 2025, genre: 'fiction', category: 'science-fiction' },
  { title: "The Bell Jar", author: "Sylvia Plath", rating: 2.1, year: 2025, genre: 'fiction', category: 'classic', incomplete: true },
  { title: "American Prometheus", author: "Kai Bird & Martin Sherwin", rating: 4.7, year: 2025, genre: 'nonfiction', category: 'biography' },
  { title: "Hamlet", author: "William Shakespeare", rating: 4.6, year: 2025, genre: 'fiction', category: 'classic' }
];

// 2024 Books (UPDATED: King: A Life is now 5.0, 21 Lessons is now 4.5)
export const books2024: Book[] = [
  { title: "Dune", author: "Frank Herbert", rating: 4.4, year: 2024, genre: 'fiction', category: 'science-fiction' },
  { title: "Dune Messiah", author: "Frank Herbert", rating: 4.1, year: 2024, genre: 'fiction', category: 'science-fiction' },
  { title: "Enlightenment Now", author: "Stephen Pinker", rating: 4.0, year: 2024, genre: 'nonfiction', category: 'philosophy' },
  { title: "The Cat's Cradle", author: "Kurt Vonnegut", rating: 3.0, year: 2024, genre: 'fiction', category: 'novel', incomplete: true },
  { title: "Emotional", author: "Leonard Mlodinow", rating: 3.4, year: 2024, genre: 'nonfiction', category: 'psychology' },
  { title: "Between the World and Me", author: "Ta-Nehisi Coates", rating: 4.7, year: 2024, genre: 'nonfiction', category: 'essay' },
  { title: "What Happened to You?", author: "Bruce Perry & Oprah Winfrey", rating: 4.3, year: 2024, genre: 'nonfiction', category: 'psychology' },
  { title: "Waking Up", author: "Sam Harris", rating: 4.0, year: 2024, genre: 'nonfiction', category: 'philosophy' },
  { title: "Know My Name", author: "Chanel Miller", rating: 4.7, year: 2024, genre: 'nonfiction', category: 'memoir' },
  { title: "Pride and Prejudice", author: "Jane Austen", rating: 2.8, year: 2024, genre: 'fiction', category: 'classic', incomplete: true },
  { title: "Animal Farm", author: "George Orwell", rating: 4.2, year: 2024, genre: 'fiction', category: 'classic' },
  { title: "The Charisma Myth", author: "Olivia Cabane", rating: 4.0, year: 2024, genre: 'nonfiction', category: 'business' },
  { title: "The Righteous Mind", author: "Jonathan Haidt", rating: 4.7, year: 2024, genre: 'nonfiction', category: 'psychology' },
  { title: "King: A Life", author: "Jonathan Eig", rating: 5.0, year: 2024, genre: 'nonfiction', category: 'biography' },
  { title: "Material World", author: "Ed Conway", rating: 4.1, year: 2024, genre: 'nonfiction', category: 'economics', incomplete: true },
  { title: "Ages of American Capitalism", author: "Jonathan Levy", rating: 4.5, year: 2024, genre: 'nonfiction', category: 'history' },
  { title: "Of Mice and Men", author: "John Steinbeck", rating: 3.1, year: 2024, genre: 'fiction', category: 'classic' },
  { title: "Malcolm X: By Any Means Necessary", author: "Walter Dean Myers", rating: 3.6, year: 2024, genre: 'nonfiction', category: 'biography' },
  { title: "Lord of the Flies", author: "William Golding", rating: 3.9, year: 2024, genre: 'fiction', category: 'classic' },
  { title: "The Anthropocene Reviewed", author: "John Green", rating: 4.6, year: 2024, genre: 'nonfiction', category: 'essay' },
  { title: "The Sociological Imagination", author: "C. Wright Mills", rating: 3.8, year: 2024, genre: 'nonfiction', category: 'sociology' },
  { title: "All About Love", author: "Bell Hooks", rating: 4.2, year: 2024, genre: 'nonfiction', category: 'philosophy' },
  { title: "Quit", author: "Annie Duke", rating: 3.9, year: 2024, genre: 'nonfiction', category: 'business' },
  { title: "Winners Take All", author: "Anand Giridharadas", rating: 3.5, year: 2024, genre: 'nonfiction', category: 'politics' },
  { title: "Teaching To Transgress", author: "Bell Hooks", rating: 4.1, year: 2024, genre: 'nonfiction', category: 'education' },
  { title: "The Outsiders", author: "S.E. Hinton", rating: 3.9, year: 2024, genre: 'fiction', category: 'classic' },
  { title: "Homage to Catalonia", author: "George Orwell", rating: 4.6, year: 2024, genre: 'nonfiction', category: 'history' },
  { title: "Digital Minimalism", author: "Cal Newport", rating: 4.2, year: 2024, genre: 'nonfiction', category: 'productivity' },
  { title: "So Good They Can't Ignore You", author: "Cal Newport", rating: 4.5, year: 2024, genre: 'nonfiction', category: 'career' },
  { title: "Manufacturing Consent", author: "Noam Chomsky", rating: 4.6, year: 2024, genre: 'nonfiction', category: 'politics' },
  { title: "Trick Mirror", author: "Jia Tolentino", rating: 4.7, year: 2024, genre: 'nonfiction', category: 'essay' },
  { title: "The Coddling of the American Mind", author: "Jonathan Haidt & Greg Lukianoff", rating: 4.5, year: 2024, genre: 'nonfiction', category: 'psychology' },
  { title: "Aristotle's Way", author: "Edith Hall", rating: 3.2, year: 2024, genre: 'nonfiction', category: 'philosophy', incomplete: true },
  { title: "A Fever In The Heartland", author: "Timothy Egan", rating: 4.3, year: 2024, genre: 'nonfiction', category: 'history' },
  { title: "Determined", author: "Robert Sapolsky", rating: 4.7, year: 2024, genre: 'nonfiction', category: 'science' },
  { title: "Turtles All the Way Down", author: "John Green", rating: 3.2, year: 2024, genre: 'fiction', category: 'novel' },
  { title: "Normal People", author: "Sally Rooney", rating: 4.0, year: 2024, genre: 'fiction', category: 'novel' },
  { title: "American Kingpin", author: "Nick Bilton", rating: 4.2, year: 2024, genre: 'nonfiction', category: 'journalism' },
  { title: "The Dawn of Everything", author: "David Graeber & David Wengrow", rating: 4.5, year: 2024, genre: 'nonfiction', category: 'history', incomplete: true },
  { title: "The Sun Also Rises", author: "Ernest Hemingway", rating: 2.6, year: 2024, genre: 'fiction', category: 'classic' },
  { title: "Looking For Alaska", author: "John Green", rating: 3.9, year: 2024, genre: 'fiction', category: 'novel' },
  { title: "Just Mercy", author: "Bryan Stevenson", rating: 4.0, year: 2024, genre: 'nonfiction', category: 'memoir', incomplete: true },
  { title: "The Tyranny of Merit", author: "Michael J Sandel", rating: 3.7, year: 2024, genre: 'nonfiction', category: 'philosophy' },
  { title: "Deep Work", author: "Cal Newport", rating: 3.9, year: 2024, genre: 'nonfiction', category: 'productivity' },
  { title: "How to Change Your Mind", author: "Michael Pollan", rating: 4.3, year: 2024, genre: 'nonfiction', category: 'psychology', rereading: true },
  { title: "Metamorphosis", author: "Franz Kafka", rating: 4.5, year: 2024, genre: 'fiction', category: 'classic' },
  { title: "Remember", author: "Lisa Genova", rating: 4.1, year: 2024, genre: 'nonfiction', category: 'science' },
  { title: "The Immortality Key", author: "Brian C. Muraresku", rating: 4.4, year: 2024, genre: 'nonfiction', category: 'history', incomplete: true },
  { title: "Four Thousand Weeks", author: "Oliver Burkeman", rating: 4.8, year: 2024, genre: 'nonfiction', category: 'philosophy', rereading: true },
  { title: "Drive", author: "Daniel Pink", rating: 3.6, year: 2024, genre: 'nonfiction', category: 'business' },
  { title: "The Book of Forgiving", author: "Desmond Tutu", rating: 4.2, year: 2024, genre: 'nonfiction', category: 'spirituality' },
  { title: "The Stranger", author: "Albert Camus", rating: 3.7, year: 2024, genre: 'fiction', category: 'classic' },
  { title: "Team of Rivals", author: "Doris Kearns Goodwin", rating: 4.5, year: 2024, genre: 'nonfiction', category: 'biography' },
  { title: "Freakonomics", author: "Steven Levitt", rating: 3.8, year: 2024, genre: 'nonfiction', category: 'economics' },
  { title: "The Hundred Years' War on Palestine", author: "Rashid I Khalidi", rating: 4.4, year: 2024, genre: 'nonfiction', category: 'history' },
  { title: "The Twilight of Democracy", author: "Anne Applebaum", rating: 4.3, year: 2024, genre: 'nonfiction', category: 'politics' },
  { title: "Fear is Just a Word", author: "Azam Ahmed", rating: 4.5, year: 2024, genre: 'nonfiction', category: 'journalism' },
  { title: "Career & Family", author: "Claudia Goldin", rating: 3.7, year: 2024, genre: 'nonfiction', category: 'economics', incomplete: true },
  { title: "Fooled by Randomness", author: "Nassim Nicholas Taleb", rating: 4.6, year: 2024, genre: 'nonfiction', category: 'philosophy' },
  { title: "Think Like a Freak", author: "Steven Levitt", rating: 3.0, year: 2024, genre: 'nonfiction', category: 'economics', incomplete: true },
  { title: "The Kite Runner", author: "Khaled Hosseini", rating: 4.7, year: 2024, genre: 'fiction', category: 'novel' },
  { title: "Caste", author: "Isabel Wilkerson", rating: 4.5, year: 2024, genre: 'nonfiction', category: 'sociology' },
  { title: "Liliana's Invincible Summer", author: "Cristina Rivera Garza", rating: 4.2, year: 2024, genre: 'nonfiction', category: 'memoir', incomplete: true },
  { title: "The Expectation Effect", author: "David Robson", rating: 3.4, year: 2024, genre: 'nonfiction', category: 'psychology', incomplete: true },
  { title: "Leaving the Saints", author: "Martha Beck", rating: 3.8, year: 2024, genre: 'nonfiction', category: 'memoir' },
  { title: "On the Edge", author: "Nate Silver", rating: 4.2, year: 2024, genre: 'nonfiction', category: 'probability', incomplete: true },
  { title: "Promised Land", author: "Barack Obama", rating: 4.5, year: 2024, genre: 'nonfiction', category: 'memoir' },
  { title: "Inferential Statistics as Descriptive Statistics", author: "Valentin Amrhein", rating: 3.7, year: 2024, genre: 'academic', category: 'paper' },
  { title: "The Storm Before the Storm", author: "Mike Duncan", rating: 4.0, year: 2024, genre: 'nonfiction', category: 'history', incomplete: true },
  { title: "21 Lessons for the 21st Century", author: "Yuval Noah Harari", rating: 4.5, year: 2024, genre: 'nonfiction', category: 'philosophy' },
  { title: "For Small Creatures Such as We", author: "Sasha Sagan", rating: 4.4, year: 2024, genre: 'nonfiction', category: 'philosophy' },
  { title: "Everyone Who Was Gone is Here", author: "Jonathan Blitzer", rating: 4.7, year: 2024, genre: 'nonfiction', category: 'journalism' },
  { title: "Media Control", author: "Noam Chomsky", rating: 3.8, year: 2024, genre: 'nonfiction', category: 'politics' },
  { title: "The Myth of Sisyphus", author: "Albert Camus", rating: 4.1, year: 2024, genre: 'nonfiction', category: 'philosophy' },
  { title: "Divergent Mind", author: "Jenara Nerenberg", rating: 3.5, year: 2024, genre: 'nonfiction', category: 'psychology' },
  { title: "Effortless", author: "Greg McKeown", rating: 3.4, year: 2024, genre: 'nonfiction', category: 'productivity' },
  { title: "The Power of Experiments", author: "Michael Luca", rating: 3.4, year: 2024, genre: 'nonfiction', category: 'business' },
  { title: "When to Rob a Bank", author: "Steven Levitt", rating: 3.2, year: 2024, genre: 'nonfiction', category: 'economics' },
  { title: "Competing on Analytics", author: "Thomas Davenport", rating: 4.0, year: 2024, genre: 'nonfiction', category: 'business' },
  { title: "Making Sense of the Alt Right", author: "George Hawley", rating: 4.1, year: 2024, genre: 'nonfiction', category: 'politics' },
  { title: "The Devil in the White City", author: "Erik Larson", rating: 4.3, year: 2024, genre: 'nonfiction', category: 'history' },
  { title: "We've got you covered", author: "Liran Einav & Amy Finkelstein", rating: 4.5, year: 2024, genre: 'nonfiction', category: 'economics' },
  { title: "The Color of Law", author: "Richard Rothstein", rating: 3.8, year: 2024, genre: 'nonfiction', category: 'history', incomplete: true },
  { title: "Sickening", author: "John Abramson", rating: 4.7, year: 2024, genre: 'nonfiction', category: 'medicine' },
  { title: "How to Do Nothing", author: "Jenny Odell", rating: 3.9, year: 2024, genre: 'nonfiction', category: 'culture' },
  { title: "Demon Copperhead", author: "Barbara Kingsolver", rating: 4.8, year: 2024, genre: 'fiction', category: 'novel' },
  { title: "Navigating the world of ADHD", author: "Gregory W. Mattingly", rating: 3.9, year: 2024, genre: 'nonfiction', category: 'psychology' },
  { title: "Someone Who Will Love You in All Your Damaged Glory", author: "Raphael Bob-Waksberg", rating: 4.6, year: 2024, genre: 'fiction', category: 'short-stories' },
  { title: "Primary Greatness", author: "Stephen Covey", rating: 3.6, year: 2024, genre: 'nonfiction', category: 'business', incomplete: true },
  { title: "Dopesick", author: "Beth Macy", rating: 4.2, year: 2024, genre: 'nonfiction', category: 'journalism' },
  { title: "The Bluest Eye", author: "Toni Morrison", rating: 4.6, year: 2024, genre: 'fiction', category: 'novel' },
  { title: "King Lear", author: "William Shakespeare", rating: 4.4, year: 2024, genre: 'fiction', category: 'classic' },
  { title: "Essentialism", author: "Greg McKeown", rating: 3.9, year: 2024, genre: 'nonfiction', category: 'productivity' },
  { title: "Meditations for Mortals", author: "Oliver Burkeman", rating: 4.3, year: 2024, genre: 'nonfiction', category: 'philosophy' },
  { title: "We Should All Be Feminists", author: "Chimamanda Ngozi Adichie", rating: 4.4, year: 2024, genre: 'nonfiction', category: 'essay' },
  { title: "The Mathematics of Love", author: "Hannah Fry", rating: 4.2, year: 2024, genre: 'nonfiction', category: 'mathematics' },
  { title: "The State of Affairs", author: "Esther Perel", rating: 4.7, year: 2024, genre: 'nonfiction', category: 'psychology' },
  { title: "The Art of War", author: "Sun Tzu", rating: 4.0, year: 2024, genre: 'nonfiction', category: 'philosophy', rereading: true },
  { title: "An Introduction to the Philosophy of History", author: "G.W.F. Hegel", rating: 2.4, year: 2024, genre: 'nonfiction', category: 'philosophy', incomplete: true },
  { title: "This is How You Lose the Time War", author: "Max Gladstone & Amal El-Mohtar", rating: 4.0, year: 2024, genre: 'fiction', category: 'science-fiction' }
];

// 2023, 2022, 2021 (keeping these the same)
export const books2023: Book[] = [
  { title: "Frankenstein", author: "Mary Shelley", rating: 4.7, year: 2023, genre: 'fiction', category: 'classic' },
  { title: "Power, People, and Profits", author: "Joseph Stiglitz", rating: 4.2, year: 2023, genre: 'nonfiction', category: 'economics' },
  { title: "Homo Deus", author: "Yuval Noah Harari", rating: 4.6, year: 2023, genre: 'nonfiction', category: 'history' },
  { title: "Alexander the Great", author: "Philip Freeman", rating: 4.4, year: 2023, genre: 'nonfiction', category: 'biography' },
  { title: "Examined Lives", author: "James Miller", rating: 3.4, year: 2023, genre: 'nonfiction', category: 'philosophy' },
  { title: "Four Thousand Weeks", author: "Oliver Burkeman", rating: 4.8, year: 2023, genre: 'nonfiction', category: 'philosophy' },
  { title: "Finding Me", author: "Viola Davis", rating: 4.8, year: 2023, genre: 'nonfiction', category: 'memoir' },
  { title: "Cultish", author: "Amanda Montell", rating: 4.8, year: 2023, genre: 'nonfiction', category: 'culture' },
  { title: "The Will to Change", author: "Bell Hooks", rating: 5.0, year: 2023, genre: 'nonfiction', category: 'sociology' },
  { title: "Untamed", author: "Glennon Doyle", rating: 4.7, year: 2023, genre: 'nonfiction', category: 'memoir' },
  { title: "Sapiens", author: "Yuval Noah Harari", rating: 4.5, year: 2023, genre: 'nonfiction', category: 'history' },
  { title: "Blood Meridian", author: "Cormac McCarthy", rating: 3.6, year: 2023, genre: 'fiction', category: 'novel' },
  { title: "Debt", author: "David Graeber", rating: 4.1, year: 2023, genre: 'nonfiction', category: 'economics' },
  { title: "The Antidote", author: "Oliver Burkeman", rating: 4.6, year: 2023, genre: 'nonfiction', category: 'philosophy' },
  { title: "Building a Second Brain", author: "Tiago Forte", rating: 3.7, year: 2023, genre: 'nonfiction', category: 'productivity' },
  { title: "The Road", author: "Cormac McCarthy", rating: 4.2, year: 2023, genre: 'fiction', category: 'novel' },
  { title: "Behind the Beautiful Forevers", author: "Katherine Boo", rating: 4.7, year: 2023, genre: 'nonfiction', category: 'journalism' },
  { title: "The Shock Doctrine", author: "Naomi Klein", rating: 4.3, year: 2023, genre: 'nonfiction', category: 'politics' },
  { title: "Siddhartha", author: "Hermann Hesse", rating: 3.8, year: 2023, genre: 'fiction', category: 'classic' },
  { title: "Women and Power", author: "Mary Beard", rating: 3.9, year: 2023, genre: 'nonfiction', category: 'history' },
  { title: "The Golden Compass", author: "Philip Pullman", rating: 4.2, year: 2023, genre: 'fiction', category: 'fantasy' },
  { title: "Originals", author: "Adam Grant", rating: 4.2, year: 2023, genre: 'nonfiction', category: 'business' },
  { title: "The Subtle Knife", author: "Philip Pullman", rating: 4.4, year: 2023, genre: 'fiction', category: 'fantasy' },
  { title: "The Amber Spyglass", author: "Philip Pullman", rating: 4.0, year: 2023, genre: 'fiction', category: 'fantasy' }
];

export const books2022: Book[] = [
  { title: "I'm Glad My Mom Died", author: "Jennette McCurdy", rating: null, year: 2022, genre: 'nonfiction', category: 'memoir' },
  { title: "The Price of Inequality", author: "Joseph Stiglitz", rating: null, year: 2022, genre: 'nonfiction', category: 'economics' },
  { title: "Economics: A User's Guide", author: "Ha-Joon Chang", rating: null, year: 2022, genre: 'nonfiction', category: 'economics' },
  { title: "Everybody Lies", author: "Seth Stephens-Davidowitz", rating: null, year: 2022, genre: 'nonfiction', category: 'data-science' },
  { title: "Ultralearning", author: "Scott Young", rating: null, year: 2022, genre: 'nonfiction', category: 'productivity' },
  { title: "Range", author: "David Epstein", rating: null, year: 2022, genre: 'nonfiction', category: 'psychology' },
  { title: "Solve for Happy", author: "Mo Gawdat", rating: null, year: 2022, genre: 'nonfiction', category: 'self-help' },
  { title: "Invisible Women", author: "Caroline Criado Perez", rating: null, year: 2022, genre: 'nonfiction', category: 'sociology' },
  { title: "World History for Dummies", author: "Peter Haugen", rating: null, year: 2022, genre: 'nonfiction', category: 'history' },
  { title: "Misbehaving", author: "Richard Thaler", rating: null, year: 2022, genre: 'nonfiction', category: 'economics' },
  { title: "Nudge", author: "Richard Thaler & Cass Sunstein", rating: null, year: 2022, genre: 'nonfiction', category: 'economics' },
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", rating: null, year: 2022, genre: 'nonfiction', category: 'psychology' },
  { title: "The 4-Hour Work Week", author: "Tim Ferriss", rating: null, year: 2022, genre: 'nonfiction', category: 'business' },
  { title: "The Wim Hof Method", author: "Wim Hof", rating: null, year: 2022, genre: 'nonfiction', category: 'health' },
  { title: "Darkness at Noon", author: "Arthur Koestler", rating: null, year: 2022, genre: 'fiction', category: 'classic' }
];

export const books2021: Book[] = [
  { title: "The Happiness Advantage", author: "Shawn Achor", rating: null, year: 2021, genre: 'nonfiction', category: 'psychology' },
  { title: "Extreme Ownership", author: "Jocko Willink & Leif Babin", rating: null, year: 2021, genre: 'nonfiction', category: 'leadership' },
  { title: "As a Man Thinketh", author: "James Allen", rating: null, year: 2021, genre: 'nonfiction', category: 'philosophy', rereading: true },
  { title: "Sell or Be Sold", author: "Grant Cardone", rating: null, year: 2021, genre: 'nonfiction', category: 'business', rereading: true },
  { title: "Way of the Wolf", author: "Jordan Belfort", rating: null, year: 2021, genre: 'nonfiction', category: 'business' },
  { title: "Mastering Fear", author: "Brandon Webb", rating: null, year: 2021, genre: 'nonfiction', category: 'self-help' },
  { title: "7 Habits of Highly Effective People", author: "Stephen Covey", rating: null, year: 2021, genre: 'nonfiction', category: 'productivity', rereading: true },
  { title: "Grit", author: "Angela Duckworth", rating: null, year: 2021, genre: 'nonfiction', category: 'psychology' },
  { title: "Guns, Germs, and Steel", author: "Jared Diamond", rating: null, year: 2021, genre: 'nonfiction', category: 'history' },
  { title: "The Rise of Theodore Roosevelt", author: "Edmund Morris", rating: null, year: 2021, genre: 'nonfiction', category: 'biography' },
  { title: "Leadership and Self-Deception", author: "The Arbinger Institute", rating: null, year: 2021, genre: 'nonfiction', category: 'leadership' },
  { title: "To America", author: "Stephen Ambrose", rating: null, year: 2021, genre: 'nonfiction', category: 'history' },
  { title: "American Sniper", author: "Chris Kyle", rating: null, year: 2021, genre: 'nonfiction', category: 'memoir' },
  { title: "Educated", author: "Tara Westover", rating: null, year: 2021, genre: 'nonfiction', category: 'memoir' },
  { title: "The 10X Rule", author: "Grant Cardone", rating: null, year: 2021, genre: 'nonfiction', category: 'business' },
  { title: "The Armchair Economist", author: "Steven Landsburg", rating: null, year: 2021, genre: 'nonfiction', category: 'economics' },
  { title: "We Should All Be Feminists", author: "Chimamanda Ngozi Adichie", rating: null, year: 2021, genre: 'nonfiction', category: 'essay' },
  { title: "Give People Money", author: "Annie Lowrey", rating: null, year: 2021, genre: 'nonfiction', category: 'economics' },
  { title: "Naked Economics", author: "Charles Wheelan", rating: null, year: 2021, genre: 'nonfiction', category: 'economics' },
  { title: "The Molecule of More", author: "Daniel Z. Lieberman", rating: null, year: 2021, genre: 'nonfiction', category: 'psychology' },
  { title: "Influence: The Psychology of Persuasion", author: "Robert Cialdini", rating: null, year: 2021, genre: 'nonfiction', category: 'psychology' }
];

// Hall of Fame (UPDATED with new ratings)
export const hallOfFameFiction: Book[] = [
  { title: "Evenings and Weekends", author: "Oisín McKenna", rating: 4.8, year: 2026, genre: 'fiction', category: 'novel' },
  { title: "A Visit From the Goon Squad", author: "Jennifer Egan", rating: 4.8, year: 2025, genre: 'fiction', category: 'novel' },
  { title: "Demon Copperhead", author: "Barbara Kingsolver", rating: 4.8, year: 2024, genre: 'fiction', category: 'novel' },
  { title: "The Kite Runner", author: "Khaled Hosseini", rating: 4.7, year: 2024, genre: 'fiction', category: 'novel' },
  { title: "Frankenstein", author: "Mary Shelley", rating: 4.7, year: 2023, genre: 'fiction', category: 'classic' },
  { title: "Freedom", author: "Jonathan Franzen", rating: 4.6, year: 2026, genre: 'fiction', category: 'novel' },
  { title: "Hamlet", author: "William Shakespeare", rating: 4.6, year: 2025, genre: 'fiction', category: 'classic' },
  { title: "The Bluest Eye", author: "Toni Morrison", rating: 4.6, year: 2024, genre: 'fiction', category: 'novel' },
  { title: "Someone Who Will Love You in All Your Damaged Glory", author: "Raphael Bob-Waksberg", rating: 4.6, year: 2024, genre: 'fiction', category: 'short-stories' },
  { title: "My Brilliant Friend", author: "Elena Ferrante", rating: 4.5, year: 2025, genre: 'fiction', category: 'novel' }
];

export const hallOfFameNonfiction: Book[] = [
  { title: "The Will to Change", author: "Bell Hooks", rating: 5.0, year: 2023, genre: 'nonfiction', category: 'sociology' },
  { title: "King: A Life", author: "Jonathan Eig", rating: 5.0, year: 2024, genre: 'nonfiction', category: 'biography' },
  { title: "Four Thousand Weeks", author: "Oliver Burkeman", rating: 4.8, year: 2023, genre: 'nonfiction', category: 'philosophy' },
  { title: "Finding Me", author: "Viola Davis", rating: 4.8, year: 2023, genre: 'nonfiction', category: 'memoir' },
  { title: "Cultish", author: "Amanda Montell", rating: 4.8, year: 2023, genre: 'nonfiction', category: 'culture' },
  { title: "Nexus", author: "Yuval Noah Harari", rating: 4.8, year: 2025, genre: 'nonfiction', category: 'history' },
  { title: "The Righteous Mind", author: "Jonathan Haidt", rating: 4.7, year: 2024, genre: 'nonfiction', category: 'psychology' },
  { title: "Between the World and Me", author: "Ta-Nehisi Coates", rating: 4.7, year: 2024, genre: 'nonfiction', category: 'essay' },
  { title: "Trick Mirror", author: "Jia Tolentino", rating: 4.7, year: 2024, genre: 'nonfiction', category: 'essay' },
  { title: "Determined", author: "Robert Sapolsky", rating: 4.7, year: 2024, genre: 'nonfiction', category: 'science' }
];

export const allBooks: Book[] = [
  ...books2026,
  ...books2025,
  ...books2024,
  ...books2023,
  ...books2022,
  ...books2021
];
