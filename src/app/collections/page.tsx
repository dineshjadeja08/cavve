"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Filter, SlidersHorizontal, X, ChevronDown } from "lucide-react";

const products = [
  {
    id: "1",
    name: "Heavyweight Boxy Tee",
    price: "₹3,499",
    category: "T-Shirts",
    image: "/images/collection1.png",
    hoverImage: "/images/collection1_hover.png",
    colors: ["#D8CBB8", "#0D0D0D", "#F5F5F2"],
    isNew: true,
  },
  {
    id: "2",
    name: "Relaxed Canvas Trouser",
    price: "₹5,999",
    category: "Pants",
    image: "/images/product_trouser.png",
    colors: ["#2C2C2C", "#7A7A6D", "#D8CBB8"],
    isBestseller: true,
  },
  {
    id: "3",
    name: "Structured Overshirt",
    price: "₹7,499",
    category: "Shirts",
    image: "/images/product_overshirt.png",
    colors: ["#7A7A6D", "#0D0D0D"],
    isNew: true,
  },
  {
    id: "4",
    name: "Essential Co-ord Set",
    price: "₹9,999",
    originalPrice: "₹11,999",
    category: "Sets",
    image: "/images/lookbook.png",
    colors: ["#0D0D0D", "#F5F5F2"],
    isBestseller: true,
  },
  {
    id: "5",
    name: "Minimal Canvas Belt",
    price: "₹1,499",
    category: "Accessories",
    image: "/images/lifestyle1.png",
    colors: ["#0D0D0D", "#D8CBB8"],
  },
  {
    id: "6",
    name: "Daily Uniform Shorts",
    price: "₹3,999",
    category: "Pants",
    image: "/images/collection1.png",
    colors: ["#D8CBB8", "#2C2C2C", "#0D0D0D"],
  },
  {
    id: "7",
    name: "Modern Minimal Knit",
    price: "₹8,499",
    category: "Knitwear",
    image: "/images/hero.png",
    colors: ["#F5F5F2", "#2C2C2C"],
    isNew: true,
  },
  {
    id: "8",
    name: "Slim Performance Tee",
    price: "₹2,999",
    category: "T-Shirts",
    image: "/images/collection_banner.png",
    colors: ["#0D0D0D", "#F5F5F2", "#7A7A6D"],
    isBestseller: true,
  },
];

const categories = ["All", "T-Shirts", "Pants", "Shirts", "Knitwear", "Sets", "Accessories"];

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
];

export default function CollectionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const filteredProducts = products.filter(
    (p) => selectedCategory === "All" || p.category === selectedCategory
  );

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Collection Header */}
      <section className="pt-[calc(var(--announcement-h)+80px)] pb-12 px-6 md:px-12 bg-background">
        <div className="max-w-screen-2xl mx-auto">
          <div className="border-b border-border/50 pb-12">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4 font-medium"
            >
              Collection 01 — The Everyday Uniform
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-8xl font-light tracking-tighter uppercase mb-10 font-[family-name:var(--font-montserrat)]"
            >
              All Pieces
            </motion.h1>

            {/* Category Tabs + Sort */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex flex-wrap gap-0">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-[10px] uppercase tracking-[0.25em] transition-all mr-8 pb-2 border-b-2 ${
                      selectedCategory === cat
                        ? "border-foreground font-bold text-foreground"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-4 shrink-0">
                {/* Sort Dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none text-[10px] uppercase tracking-[0.2em] pr-8 py-2 bg-transparent border-b border-border focus:outline-none focus:border-foreground transition-colors cursor-pointer"
                  >
                    {sortOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={10} className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                <button
                  onClick={() => setIsFilterOpen(true)}
                  className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold border border-foreground px-5 py-2.5 hover:bg-foreground hover:text-background transition-all"
                >
                  <SlidersHorizontal size={13} strokeWidth={1.5} />
                  Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <div className="px-6 md:px-12 py-6 bg-background">
        <div className="max-w-screen-2xl mx-auto">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            {filteredProducts.length} pieces
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <section className="px-6 md:px-12 pb-32 bg-background">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Filter Drawer */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[70]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-background z-[80] p-10 overflow-y-auto flex flex-col gap-10"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg uppercase tracking-[0.2em] font-bold">
                  Filters
                </h3>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="hover:opacity-60 transition-opacity"
                >
                  <X size={22} strokeWidth={1.5} />
                </button>
              </div>

              {/* Size Filter */}
              <div className="flex flex-col gap-5">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground">
                  Size
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`py-3 border text-xs font-bold tracking-widest uppercase transition-all ${
                        selectedSizes.includes(size)
                          ? "bg-foreground text-background border-foreground"
                          : "border-border hover:border-foreground"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div className="flex flex-col gap-5">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground">
                  Color
                </h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    { hex: "#0D0D0D", name: "Black" },
                    { hex: "#F5F5F2", name: "White" },
                    { hex: "#2C2C2C", name: "Charcoal" },
                    { hex: "#D8CBB8", name: "Beige" },
                    { hex: "#7A7A6D", name: "Olive" },
                  ].map(({ hex, name }) => (
                    <button
                      key={hex}
                      onClick={() =>
                        setSelectedColors((prev) =>
                          prev.includes(hex)
                            ? prev.filter((c) => c !== hex)
                            : [...prev, hex]
                        )
                      }
                      className={`group relative w-10 h-10 rounded-full border-2 transition-all ${
                        selectedColors.includes(hex)
                          ? "border-foreground scale-110"
                          : "border-transparent hover:border-muted-foreground"
                      }`}
                      title={name}
                    >
                      <div
                        className="w-full h-full rounded-full border border-black/10"
                        style={{ backgroundColor: hex }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="flex flex-col gap-5">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground">
                  Price Range
                </h4>
                <input type="range" min={0} max={15000} className="w-full accent-black" />
                <div className="flex justify-between text-xs font-medium">
                  <span>₹0</span>
                  <span>₹15,000+</span>
                </div>
              </div>

              {/* Availability */}
              <div className="flex flex-col gap-4">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground">
                  Availability
                </h4>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="accent-black w-4 h-4" />
                  <span className="text-sm font-light group-hover:text-muted-foreground transition-colors">
                    In Stock Only
                  </span>
                </label>
              </div>

              {/* Actions */}
              <div className="mt-auto flex gap-3 pt-8 border-t border-border/50">
                <button
                  onClick={() => {
                    setSelectedSizes([]);
                    setSelectedColors([]);
                  }}
                  className="flex-1 py-4 border border-border text-[10px] uppercase tracking-[0.2em] font-bold hover:border-foreground transition-colors"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="flex-1 py-4 bg-foreground text-background text-[10px] uppercase tracking-[0.2em] font-bold hover:opacity-90 transition-opacity"
                >
                  Apply
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
