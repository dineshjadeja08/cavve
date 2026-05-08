"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, X, TrendingUp, Clock, ArrowRight } from "lucide-react";

const trendingSearches = [
  "Heavyweight Tee",
  "Relaxed Trousers",
  "Co-ord Set",
  "Drop 001",
  "Overshirt",
  "Capsule Wardrobe",
];

const allProducts = [
  {
    id: "1",
    name: "Heavyweight Boxy Tee",
    price: "₹3,499",
    category: "Essentials",
    image: "/images/collection1.png",
  },
  {
    id: "2",
    name: "Relaxed Canvas Trouser",
    price: "₹5,999",
    category: "Pants",
    image: "/images/product_trouser.png",
  },
  {
    id: "3",
    name: "Structured Overshirt",
    price: "₹7,499",
    category: "Outerwear",
    image: "/images/product_overshirt.png",
  },
  {
    id: "4",
    name: "Essential Co-ord Set",
    price: "₹9,999",
    category: "Sets",
    image: "/images/lookbook.png",
  },
  {
    id: "8",
    name: "Slim Performance Tee",
    price: "₹2,999",
    category: "T-Shirts",
    image: "/images/collection_banner.png",
  },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results = query.length > 1
    ? allProducts.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-[calc(var(--announcement-h)+80px)] pb-32 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          {/* Search Input */}
          <div className="flex items-center gap-4 border-b-2 border-foreground pb-6 mb-16">
            <Search size={24} strokeWidth={1.5} className="text-muted-foreground shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search pieces, collections..."
              autoFocus
              className="flex-1 bg-transparent text-3xl md:text-5xl font-light tracking-tight outline-none placeholder:text-muted-foreground/40 text-foreground"
            />
            {query && (
              <button onClick={() => setQuery("")} className="shrink-0 text-muted-foreground hover:text-foreground transition-colors">
                <X size={22} strokeWidth={1.5} />
              </button>
            )}
          </div>

          {query.length > 1 ? (
            /* Results */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-8 font-medium">
                {results.length} results for &quot;{query}&quot;
              </p>
              {results.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">
                  {results.map((product, i) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <Link href={`/product/${product.id}`} className="group flex flex-col gap-3">
                        <div className="relative aspect-[3/4] bg-[#F0EDE8] overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-[1.05] transition-transform duration-[1200ms]"
                            sizes="25vw"
                          />
                        </div>
                        <div>
                          <p className="text-[9px] uppercase tracking-widest text-muted-foreground mb-1">{product.category}</p>
                          <p className="text-sm font-medium tracking-tight group-hover:opacity-60 transition-opacity">{product.name}</p>
                          <p className="text-sm font-semibold mt-1">{product.price}</p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="py-24 text-center">
                  <p className="text-2xl font-light tracking-tight uppercase mb-4">No results found</p>
                  <p className="text-muted-foreground font-light mb-8">
                    Try searching for something else or browse our collections.
                  </p>
                  <Link
                    href="/collections"
                    className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold border-b border-border pb-1 hover:border-foreground transition-colors"
                  >
                    Browse All <ArrowRight size={12} />
                  </Link>
                </div>
              )}
            </motion.div>
          ) : (
            /* Default State */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <TrendingUp size={16} strokeWidth={1.5} className="text-muted-foreground" />
                  <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-medium">Trending</p>
                </div>
                <div className="flex flex-col gap-4">
                  {trendingSearches.map((term, i) => (
                    <motion.button
                      key={term}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      onClick={() => setQuery(term)}
                      className="text-left text-3xl font-light tracking-tight hover:opacity-50 transition-opacity"
                    >
                      {term}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-8">
                  <Clock size={16} strokeWidth={1.5} className="text-muted-foreground" />
                  <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-medium">Featured</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {allProducts.slice(0, 3).map((product, i) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.08 }}
                    >
                      <Link href={`/product/${product.id}`} className="group flex flex-col gap-2">
                        <div className="relative aspect-[3/4] bg-[#F0EDE8] overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-[1.05] transition-transform duration-700"
                            sizes="15vw"
                          />
                        </div>
                        <p className="text-xs font-medium tracking-tight leading-tight group-hover:opacity-60 transition-opacity">
                          {product.name}
                        </p>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
