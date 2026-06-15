export type Book = {
  id: string;
  title: string;
  author: string;
  price: number;
  condition: "Rare Find" | "Like New" | "Good" | "Fair" | "Well-Loved" | "Collector's";
  genre: "Fiction" | "Sci-Fi" | "Classic" | "Mystery" | "Non-Fiction" | "Literary Fiction";
  isMystery?: boolean;
  description?: string;
  coverColor1: string;
  coverColor2: string;
  isbn?: string;
};

export const books: Book[] = [
  { id: "1",  title: "Dune",                    author: "Frank Herbert",       price: 12.00, condition: "Good",         genre: "Sci-Fi",      coverColor1: "#D4A373", coverColor2: "#FAEDCD", isbn: "9780441013593" },
  { id: "2",  title: "1984",                    author: "George Orwell",       price: 8.50,  condition: "Fair",         genre: "Fiction",     coverColor1: "#6B705C", coverColor2: "#A5A58D", isbn: "9780451524935" },
  { id: "3",  title: "The Great Gatsby",        author: "F. Scott Fitzgerald", price: 18.00, condition: "Collector's",  genre: "Classic",     coverColor1: "#264653", coverColor2: "#2A9D8F", isbn: "9780743273565" },
  { id: "4",  title: "Beloved",                 author: "Toni Morrison",       price: 11.00, condition: "Like New",     genre: "Fiction",     coverColor1: "#E76F51", coverColor2: "#F4A261", isbn: "9781400033416" },
  { id: "5",  title: "Slaughterhouse-Five",     author: "Kurt Vonnegut",       price: 9.00,  condition: "Well-Loved",   genre: "Fiction",     coverColor1: "#E9C46A", coverColor2: "#F4A261", isbn: "9780440180296" },
  { id: "6",  title: "The Name of the Rose",    author: "Umberto Eco",         price: 22.00, condition: "Rare Find",    genre: "Mystery",     coverColor1: "#8ECAE6", coverColor2: "#219EBC", isbn: "9780544176560" },
  { id: "7",  title: "A Brief History of Time", author: "Stephen Hawking",     price: 7.50,  condition: "Good",         genre: "Non-Fiction", coverColor1: "#1D3557", coverColor2: "#457B9D", isbn: "9780553380163" },
  { id: "8",  title: "Invisible Man",           author: "Ralph Ellison",       price: 13.00, condition: "Like New",     genre: "Fiction",     coverColor1: "#000000", coverColor2: "#4A4E69", isbn: "9780679732648" },
  { id: "9",  title: "Blood Meridian",          author: "Cormac McCarthy",     price: 15.00, condition: "Good",         genre: "Fiction",     coverColor1: "#9A031E", coverColor2: "#5F0F40", isbn: "9780679728757" },
  { id: "10", title: "Solaris",                 author: "Stanislaw Lem",       price: 16.00, condition: "Rare Find",    genre: "Sci-Fi",      coverColor1: "#003049", coverColor2: "#D62828", isbn: "9780156027601" },
];

export const mysteryBooks: Book[] = [
  { id: "m1", title: "Mystery Sci-Fi",      author: "Unknown", price: 10.00, condition: "Well-Loved",  genre: "Sci-Fi",          isMystery: true, description: "A universe lived in by its author. Spine faded, pages perfect.", coverColor1: "#A68A64", coverColor2: "#936639" },
  { id: "m2", title: "Mystery Literary",    author: "Unknown", price: 8.00,  condition: "Well-Loved",  genre: "Literary Fiction", isMystery: true, description: "Love letter to a disappearing city. Written in margins by a previous owner.", coverColor1: "#A68A64", coverColor2: "#936639" },
  { id: "m3", title: "Mystery Mystery",     author: "Unknown", price: 12.00, condition: "Good",         genre: "Mystery",          isMystery: true, description: "The kind of book you finish and immediately want to tell someone about.", coverColor1: "#A68A64", coverColor2: "#936639" },
  { id: "m4", title: "Mystery Classic",     author: "Unknown", price: 25.00, condition: "Collector's",  genre: "Classic",          isMystery: true, description: "Collector's find, pristine. Almost certainly important.", coverColor1: "#A68A64", coverColor2: "#936639" },
];

export const conditionColors: Record<string, string> = {
  "Rare Find":    "bg-yellow-500 text-yellow-950",
  "Like New":     "bg-green-500 text-green-950",
  "Good":         "bg-teal-500 text-teal-950",
  "Fair":         "bg-stone-400 text-stone-900",
  "Well-Loved":   "bg-rose-400 text-rose-950",
  "Collector's":  "bg-purple-600 text-purple-100",
};
