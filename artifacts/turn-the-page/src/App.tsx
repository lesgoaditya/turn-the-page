import React from 'react';
import { Header } from '@/components/Header';
import { CartDrawer } from '@/components/CartDrawer';
import { BookCard } from '@/components/BookCard';
import { MysteryCard } from '@/components/MysteryCard';
import { books, mysteryBooks } from '@/lib/data';
import { CartProvider } from '@/lib/cart-context';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf } from 'lucide-react';

const QUOTES = [
  { text: "A reader lives a thousand lives before he dies. The man who never reads lives only one.", author: "George R.R. Martin" },
  { text: "Not all those who wander are lost.", author: "J.R.R. Tolkien" },
  { text: "It is a truth universally acknowledged that a reader in possession of a good book must be in want of another.", author: "Jane Austen (adapted)" },
  { text: "One must always be careful of books, and what is inside them, for words have the power to change us.", author: "Cassandra Clare" },
  { text: "There is no friend as loyal as a book.", author: "Ernest Hemingway" },
  { text: "The books that the world calls immoral are books that show the world its own shame.", author: "Oscar Wilde" },
  { text: "A book is a dream that you hold in your hands.", author: "Neil Gaiman" },
  { text: "We read to know we are not alone.", author: "C.S. Lewis" },
  { text: "I am not afraid of storms, for I am learning how to sail my ship.", author: "Louisa May Alcott" },
  { text: "Until I feared I would lose it, I never loved to read. One does not love breathing.", author: "Harper Lee" },
];

function getQuoteDuration(text: string): number {
  // 50ms per character + 2s base buffer, clamped between 4s and 13s
  return Math.max(4000, Math.min(13000, text.length * 50 + 2000));
}

function RotatingQuote() {
  const [index, setIndex] = React.useState(() => Math.floor(Math.random() * QUOTES.length));

  React.useEffect(() => {
    const duration = getQuoteDuration(QUOTES[index].text);
    const id = setTimeout(() => {
      setIndex(i => (i + 1) % QUOTES.length);
    }, duration);
    return () => clearTimeout(id);
  }, [index]);

  const quote = QUOTES[index];

  return (
    <div className="w-full max-w-2xl mx-auto mb-10 min-h-[96px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
          className="brutal-border bg-background/70 backdrop-blur-sm px-6 py-5 text-center"
        >
          <p className="font-serif text-lg md:text-xl italic text-foreground leading-relaxed">
            &ldquo;{quote.text}&rdquo;
          </p>
          <p className="font-sans text-sm font-bold uppercase tracking-widest text-accent mt-3">
            — {quote.author}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function AppContent() {
  const [selectedGenre, setSelectedGenre] = React.useState<string>("All");
  const [selectedCondition, setSelectedCondition] = React.useState<string>("All");
  const [selectedPrice, setSelectedPrice] = React.useState<string>("All");

  const genres = ["All", "Fiction", "Sci-Fi", "Classic", "Mystery", "Non-Fiction"];
  const conditions = ["All", "Rare Find", "Like New", "Good", "Fair", "Well-Loved", "Collector's"];
  const prices = ["All", "Under $10", "$10–$20", "Over $20"];

  const filteredBooks = books.filter((book) => {
    if (selectedGenre !== "All" && book.genre !== selectedGenre) return false;
    if (selectedCondition !== "All" && book.condition !== selectedCondition) return false;
    if (selectedPrice === "Under $10" && book.price >= 10) return false;
    if (selectedPrice === "$10–$20" && (book.price < 10 || book.price > 20)) return false;
    if (selectedPrice === "Over $20" && book.price <= 20) return false;
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col w-full relative">
      <Header />
      <CartDrawer />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b-2 border-foreground py-20 md:py-32">
          <div className="absolute inset-0 z-0 bg-primary/10">
            <div className="w-full h-full animate-hero-bg opacity-30" 
                 style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
            >
              Stories with a History
            </motion.h1>
            <RotatingQuote />
            <motion.a 
              href="#browse"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-sans text-xl font-bold px-8 py-4 bg-accent text-accent-foreground brutal-border hover:translate-y-[-4px] hover:shadow-[6px_8px_0_hsl(var(--foreground))] transition-all active:translate-y-[2px] active:shadow-none"
            >
              Start Browsing
            </motion.a>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-sans text-lg md:text-xl max-w-2xl text-muted-foreground mt-8"
            >
              The smell of old paper, the thrill of a dog-eared find. 
              Welcome to a bookstore for readers who love the hunt.
            </motion.p>
          </div>
        </section>

        {/* Browse Section */}
        <section id="browse" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-8">
            <div className="flex flex-col gap-4">
              <h2 className="font-sans text-sm font-bold uppercase tracking-widest text-muted-foreground">Filter by</h2>
              
              <div className="flex flex-col gap-6">
                {/* Genre Filter */}
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                  <span className="font-sans font-semibold py-2 shrink-0 w-24">Genre:</span>
                  <div className="flex gap-2">
                    {genres.map(g => (
                      <button
                        key={g}
                        onClick={() => setSelectedGenre(g)}
                        className={`shrink-0 px-4 py-2 font-sans font-bold text-sm brutal-border shadow-none transition-colors ${
                          selectedGenre === g ? 'bg-foreground text-background' : 'bg-background hover:bg-muted'
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Condition Filter */}
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                  <span className="font-sans font-semibold py-2 shrink-0 w-24">Condition:</span>
                  <div className="flex gap-2">
                    {conditions.map(c => (
                      <button
                        key={c}
                        onClick={() => setSelectedCondition(c)}
                        className={`shrink-0 px-4 py-2 font-sans font-bold text-sm brutal-border shadow-none transition-colors ${
                          selectedCondition === c ? 'bg-foreground text-background' : 'bg-background hover:bg-muted'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                  <span className="font-sans font-semibold py-2 shrink-0 w-24">Price:</span>
                  <div className="flex gap-2">
                    {prices.map(p => (
                      <button
                        key={p}
                        onClick={() => setSelectedPrice(p)}
                        className={`shrink-0 px-4 py-2 font-sans font-bold text-sm brutal-border shadow-none transition-colors ${
                          selectedPrice === p ? 'bg-foreground text-background' : 'bg-background hover:bg-muted'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-12 items-start"
          >
            <AnimatePresence>
              {filteredBooks.map((book) => (
                <motion.div
                  key={book.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <BookCard book={book} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredBooks.length === 0 && (
            <div className="text-center py-20">
              <h3 className="font-serif text-3xl font-bold mb-4">No books found</h3>
              <p className="font-sans text-muted-foreground">Try adjusting your filters to find something else to read.</p>
              <button 
                onClick={() => { setSelectedGenre("All"); setSelectedCondition("All"); setSelectedPrice("All"); }}
                className="mt-6 font-sans font-bold text-accent underline underline-offset-4"
              >
                Clear all filters
              </button>
            </div>
          )}
        </section>

        {/* Mystery Pick Section */}
        <section id="mystery" className="bg-primary text-primary-foreground py-24 border-y-2 border-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-[#FAEDCD]">Pick a Mystery</h2>
              <p className="font-sans text-lg max-w-2xl mx-auto opacity-80">
                Wrapped in brown paper with only a hint of what lies inside. 
                Take a chance on a story chosen just for you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mysteryBooks.map(book => (
                <MysteryCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        </section>

        {/* Policies Section */}
        <section id="policies" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-card p-8 md:p-12 brutal-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent text-accent-foreground rounded-full border-2 border-foreground">
                  <Leaf size={32} />
                </div>
                <h3 className="font-serif text-3xl font-bold">Carbon Neutral</h3>
              </div>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                Every book shipped is packaged in 100% recycled materials. We offset all carbon emissions from our shipping operations because stories should last forever, but their environmental impact shouldn't.
              </p>
            </div>
            
            <div className="bg-card p-8 md:p-12 brutal-border bg-secondary">
              <h3 className="font-serif text-3xl font-bold mb-6">Buyback Program</h3>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-6">
                Your old books deserve new eyes. Bring in or ship us your well-loved books for store credit. We evaluate based on condition, rarity, and current stock needs.
              </p>
              <button className="font-sans font-bold border-b-2 border-foreground hover:text-accent hover:border-accent transition-colors pb-1">
                Read how it works &rarr;
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background py-12 border-t-2 border-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <h2 className="font-serif text-3xl font-bold mb-2">Turn The Page</h2>
            <p className="font-sans text-sm opacity-80">A neighborhood institution since 1994.</p>
          </div>
          <div className="flex gap-6 font-sans text-sm font-bold">
            <a href="#" className="hover:text-accent transition-colors">Instagram</a>
            <a href="#" className="hover:text-accent transition-colors">Twitter</a>
            <a href="#" className="hover:text-accent transition-colors">Contact</a>
          </div>
          <div className="font-sans text-sm opacity-60">
            &copy; {new Date().getFullYear()} Turn The Page.
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
