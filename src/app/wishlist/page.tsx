"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Heart, ShoppingBag, Trash2, Share2, Bell, ArrowRight } from "lucide-react";

const wishlistItems = [
  {
    id: "1",
    name: "Heavyweight Boxy Tee",
    price: "₹3,499",
    category: "Essentials",
    image: "/images/collection1.png",
    color: "Sand Beige",
    inStock: true,
  },
  {
    id: "3",
    name: "Structured Overshirt",
    price: "₹7,499",
    category: "Outerwear",
    image: "/images/product_overshirt.png",
    color: "Olive Gray",
    inStock: true,
  },
  {
    id: "4",
    name: "Essential Co-ord Set",
    price: "₹9,999",
    category: "Sets",
    image: "/images/lookbook.png",
    color: "Deep Black",
    inStock: false,
  },
];

export default function WishlistPage() {
  const [items, setItems] = useState(wishlistItems);

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-[calc(var(--announcement-h)+80px)] pb-32 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          {/* Header */}
          <div className="border-b border-border/50 pb-10 mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4 font-medium"
            >
              Saved Pieces
            </motion.p>
            <div className="flex items-end justify-between">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-light tracking-tighter uppercase font-[family-name:var(--font-montserrat)]"
              >
                Your<br />
                <span className="font-black">Wishlist</span>
              </motion.h1>
              <p className="text-muted-foreground font-light text-sm">
                {items.length} {items.length === 1 ? "item" : "items"}
              </p>
            </div>
          </div>

          {items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-40"
            >
              <Heart size={48} strokeWidth={1} className="mx-auto mb-6 text-muted-foreground/30" />
              <p className="text-2xl font-light tracking-tight uppercase mb-4">
                Nothing saved yet
              </p>
              <p className="text-muted-foreground font-light mb-10">
                Save pieces you love to come back to later.
              </p>
              <Link
                href="/collections"
                className="inline-flex items-center gap-2 px-10 py-4 bg-foreground text-background text-[10px] uppercase tracking-[0.3em] font-bold hover:opacity-90 transition-opacity"
              >
                Shop Collection
                <ArrowRight size={12} />
              </Link>
            </motion.div>
          ) : (
            <>
              {/* Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12 mb-20">
                <AnimatePresence mode="popLayout">
                  {items.map((item, i) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                      transition={{ delay: i * 0.06 }}
                      className="group flex flex-col gap-4"
                    >
                      <Link
                        href={`/product/${item.id}`}
                        className="relative aspect-[3/4] bg-[#F0EDE8] overflow-hidden block"
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-[1.04] transition-transform duration-[1200ms]"
                          sizes="25vw"
                        />
                        {!item.inStock && (
                          <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                            <span className="text-[9px] uppercase tracking-[0.3em] font-bold border border-foreground px-4 py-2">
                              Out of Stock
                            </span>
                          </div>
                        )}
                      </Link>

                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-[9px] uppercase tracking-widest text-muted-foreground mb-0.5">
                              {item.category}
                            </p>
                            <h3 className="text-sm font-medium tracking-tight">{item.name}</h3>
                            <p className="text-[10px] text-muted-foreground mt-0.5">{item.color}</p>
                          </div>
                          <p className="text-sm font-semibold">{item.price}</p>
                        </div>

                        <div className="flex gap-2 mt-2">
                          {item.inStock ? (
                            <button className="flex-1 py-3 bg-foreground text-background text-[9px] uppercase tracking-[0.2em] font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                              <ShoppingBag size={12} strokeWidth={1.5} />
                              Add to Cart
                            </button>
                          ) : (
                            <button className="flex-1 py-3 border border-border text-[9px] uppercase tracking-[0.2em] font-bold hover:border-foreground transition-colors flex items-center justify-center gap-2 text-muted-foreground">
                              <Bell size={12} strokeWidth={1.5} />
                              Notify Me
                            </button>
                          )}
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-3 border border-border hover:border-foreground transition-colors text-muted-foreground hover:text-foreground"
                            aria-label="Remove from wishlist"
                          >
                            <Trash2 size={14} strokeWidth={1.5} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Share CTA */}
              <div className="border-t border-border/50 pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <p className="text-sm font-bold tracking-tight mb-1">
                    Share your wishlist
                  </p>
                  <p className="text-sm text-muted-foreground font-light">
                    Let friends know what you&apos;ve got your eye on.
                  </p>
                </div>
                <button className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold border border-border px-8 py-4 hover:border-foreground transition-colors">
                  <Share2 size={14} strokeWidth={1.5} />
                  Copy Link
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
