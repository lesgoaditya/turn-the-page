import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { useCart } from "@/lib/cart-context";
import { Plus, Minus, X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CartDrawer() {
  const { cart, cartTotal, updateQuantity, removeFromCart, isCartOpen, setIsCartOpen } = useCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-md bg-background border-l-2 border-foreground brutal-border overflow-y-auto">
        <SheetHeader className="text-left mb-8">
          <SheetTitle className="font-serif text-3xl font-bold tracking-tight">Your Shelf</SheetTitle>
          <SheetDescription className="font-sans text-muted-foreground">
            Review your finds before checkout.
          </SheetDescription>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 text-muted-foreground">
            <BookOpen size={48} className="opacity-20" />
            <p className="font-sans text-lg">Your shelf is empty</p>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="flex flex-col gap-6">
              {cart.map((item) => (
                <div key={item.book.id} className="flex gap-4 items-start border-b border-border pb-6">
                  <div 
                    className="w-16 h-24 shrink-0 brutal-border shadow-none"
                    style={{ background: `linear-gradient(135deg, ${item.book.coverColor1}, ${item.book.coverColor2})` }}
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif font-bold text-lg leading-tight truncate">
                      {item.book.isMystery ? "Mystery Pick" : item.book.title}
                    </h4>
                    {!item.book.isMystery && (
                      <p className="font-sans text-sm text-muted-foreground truncate">{item.book.author}</p>
                    )}
                    <p className="font-sans font-bold text-accent mt-1">${item.book.price.toFixed(2)}</p>
                    
                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center border border-foreground brutal-border shadow-none h-8">
                        <button 
                          onClick={() => updateQuantity(item.book.id, item.quantity - 1)}
                          className="px-2 h-full hover:bg-muted active:bg-foreground active:text-background transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center font-sans text-sm font-semibold">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.book.id, item.quantity + 1)}
                          className="px-2 h-full hover:bg-muted active:bg-foreground active:text-background transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.book.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors ml-auto p-2"
                        title="Remove"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t-2 border-foreground pt-6 space-y-6">
              <div className="flex justify-between items-center font-serif text-2xl font-bold">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <Button className="w-full h-14 font-sans text-lg brutal-border font-bold bg-accent text-accent-foreground hover:bg-foreground hover:text-background hover:translate-y-[-2px] hover:shadow-[4px_6px_0_hsl(var(--foreground))] transition-all active:translate-y-[2px] active:shadow-none">
                Checkout
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
