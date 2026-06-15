import React from "react";
import { motion } from "framer-motion";
import { Book, conditionColors } from "@/lib/data";
import { useCart } from "@/lib/cart-context";

export function MysteryCard({ book }: { book: Book }) {
  const { addToCart } = useCart();
  
  return (
    <motion.div 
      className="group relative flex flex-col h-full bg-[#D4A373] text-[#4A3728] border-2 border-[#5C4033] shadow-[6px_6px_0_#5C4033] p-6 transition-all duration-300"
      whileHover={{ y: -4, rotate: Math.random() * 2 - 1 }}
      style={{ 
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E\")"
      }}
    >
      <div className="flex-grow flex flex-col items-center justify-center text-center space-y-6">
        <span className="font-sans font-bold tracking-widest text-sm uppercase border-b-2 border-[#5C4033] pb-1">
          {book.genre}
        </span>
        
        <p className="font-serif text-xl italic leading-relaxed">
          "{book.description}"
        </p>
        
        <div className="flex flex-col items-center gap-2">
          <span className="font-sans font-black text-2xl">${book.price.toFixed(2)}</span>
          <span className={`text-xs font-bold px-2 py-1 uppercase tracking-wider border border-[#5C4033] ${conditionColors[book.condition] || "bg-transparent text-inherit"}`}>
            {book.condition}
          </span>
        </div>
      </div>
      
      <button 
        onClick={() => addToCart(book)}
        className="mt-6 w-full font-sans text-lg font-bold border-2 border-[#5C4033] bg-[#FAEDCD] text-[#5C4033] py-3 hover:bg-[#5C4033] hover:text-[#FAEDCD] transition-colors"
      >
        Surprise Me
      </button>
    </motion.div>
  );
}
