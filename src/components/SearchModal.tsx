"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, ArrowRight, Clock, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const trendingSearches = [
  "Heavyweight Tee",
  "Relaxed Trousers",
  "Co-ord Set",
  "Drop 001",
  "Overshirt",
];

const quickResults = [
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
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 200);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const filtered = query.length > 1
    ? quickResults.filter((r) =>
        r.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100]"
            onClick={onClose}
          />

          {/* Search Panel */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-[110] bg-[#F5F5F2] px-6 md:px-12 pt-8 pb-10 max-h-[85vh] overflow-y-auto"
          >
            {/* Search Input */}
            <div className="flex items-center gap-4 border-b-2 border-[#0D0D0D] pb-5 mb-8">
              <Search size={22} strokeWidth={1.5} className="text-[#7A7A6D] shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for pieces, collections..."
                className="flex-1 bg-transparent text-xl md:text-3xl font-light tracking-tight outline-none placeholder:text-[#D8CBB8] text-[#0D0D0D]"
              />
              <button
                onClick={onClose}
                className="shrink-0 text-[#7A7A6D] hover:text-[#0D0D0D] transition-colors"
                aria-label="Close search"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>

            {/* Content */}
            {query.length > 1 ? (
              /* Search Results */
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-[#7A7A6D] mb-6 font-medium">
                  Results for &quot;{query}&quot;
                </p>
                {filtered.length > 0 ? (
                  <div className="flex flex-col divide-y divide-border/50">
                    {filtered.map((result) => (
                      <Link
                        key={result.id}
                        href={`/product/${result.id}`}
                        onClick={onClose}
                        className="group flex items-center gap-5 py-5 hover:opacity-70 transition-opacity"
                      >
                        <div className="relative w-16 h-20 bg-[#F0EDE8] shrink-0 overflow-hidden">
                          <Image
                            src={result.image}
                            alt={result.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-[9px] uppercase tracking-widest text-[#7A7A6D] mb-1">
                            {result.category}
                          </p>
                          <p className="text-sm font-medium tracking-tight">
                            {result.name}
                          </p>
                          <p className="text-sm font-semibold mt-1">
                            {result.price}
                          </p>
                        </div>
                        <ArrowRight size={16} className="text-[#7A7A6D] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground font-light">
                    No results found for &quot;{query}&quot;
                  </p>
                )}
              </div>
            ) : (
              /* Default State */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Trending */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <TrendingUp size={14} className="text-[#7A7A6D]" strokeWidth={1.5} />
                    <p className="text-[10px] uppercase tracking-[0.4em] text-[#7A7A6D] font-medium">
                      Trending
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    {trendingSearches.map((term, i) => (
                      <motion.button
                        key={term}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        onClick={() => setQuery(term)}
                        className="text-left text-xl md:text-2xl font-light tracking-tight hover:text-[#7A7A6D] transition-colors"
                      >
                        {term}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Quick Picks */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Clock size={14} className="text-[#7A7A6D]" strokeWidth={1.5} />
                    <p className="text-[10px] uppercase tracking-[0.4em] text-[#7A7A6D] font-medium">
                      Featured
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {quickResults.map((result, i) => (
                      <motion.div
                        key={result.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + i * 0.08 }}
                      >
                        <Link
                          href={`/product/${result.id}`}
                          onClick={onClose}
                          className="group flex flex-col gap-2"
                        >
                          <div className="relative aspect-[3/4] bg-[#F0EDE8] overflow-hidden">
                            <Image
                              src={result.image}
                              alt={result.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                          </div>
                          <p className="text-xs font-medium tracking-tight leading-tight group-hover:opacity-60 transition-opacity">
                            {result.name}
                          </p>
                          <p className="text-xs font-semibold">{result.price}</p>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
