import React, { useState } from "react";
import { motion } from "framer-motion";
import { Book, conditionColors } from "@/lib/data";
import { useCart } from "@/lib/cart-context";

function BookCover({ book }: { book: Book }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  const hasRealCover = book.isbn && !imgFailed;

  return (
    <div className="w-full aspect-[2/3] overflow-hidden relative border-b-2 border-foreground">
      {/* Gradient / original style — always underneath, revealed on hover */}
      <div
        className="absolute inset-0 flex items-center justify-center p-6 transition-opacity duration-400 z-10"
        style={{
          background: `linear-gradient(135deg, ${book.coverColor1}, ${book.coverColor2})`,
          opacity: hasRealCover && imgLoaded ? 0 : 1,
        }}
      >
        <h3 className="font-serif text-3xl font-bold text-white text-center drop-shadow-md break-words">
          {book.title}
        </h3>
      </div>

      {/* Real cover photo — sits on top, fades out on hover via group-hover */}
      {hasRealCover && (
        <img
          src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`}
          alt={`${book.title} cover`}
          className="absolute inset-0 w-full h-full object-cover z-20 transition-opacity duration-400 group-hover:opacity-0"
          style={{ opacity: imgLoaded ? 1 : 0 }}
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgFailed(true)}
        />
      )}
    </div>
  );
}

export function BookCard({ book }: { book: Book }) {
  const { addToCart } = useCart();

  return (
    <motion.div
      className="group relative flex flex-col h-full bg-card brutal-border transition-all duration-300 hover:z-10"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <BookCover book={book} />

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2 gap-2">
          <h4 className="font-serif text-2xl font-bold leading-tight">{book.title}</h4>
          <span className="font-sans font-bold text-accent text-lg whitespace-nowrap">${book.price.toFixed(2)}</span>
        </div>

        <p className="font-sans text-muted-foreground text-sm mb-4">{book.author}</p>

        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className={`text-xs font-bold px-2 py-1 uppercase tracking-wider border border-foreground ${conditionColors[book.condition] || "bg-secondary text-secondary-foreground"}`}>
            {book.condition}
          </span>
          <button
            onClick={() => addToCart(book)}
            className="font-sans text-sm font-bold border-2 border-foreground px-3 py-1.5 hover:bg-foreground hover:text-background transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}
