import React, { useState, useEffect } from 'react';
import { Sun, Moon, ShoppingCart } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

export function Header() {
  const [isDark, setIsDark] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    // Check initial state
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-background/90 backdrop-blur-sm border-b-2 border-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#" className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">Turn The Page</a>
          <nav className="hidden md:flex gap-6 font-sans font-semibold">
            <a href="#browse" className="hover:text-accent transition-colors">Browse</a>
            <a href="#mystery" className="hover:text-accent transition-colors">Mystery Pick</a>
            <a href="#policies" className="hover:text-accent transition-colors">Policies</a>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleDarkMode}
            className="p-2 border-2 border-transparent hover:border-foreground brutal-border shadow-none hover:shadow-[2px_2px_0_hsl(var(--foreground))] transition-all"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 border-2 border-transparent hover:border-foreground brutal-border shadow-none hover:shadow-[2px_2px_0_hsl(var(--foreground))] transition-all"
            aria-label="Open cart"
          >
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-foreground">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
