"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X } from "lucide-react";

const messages = [
  "Free Express Shipping on orders above ₹1,499 — Shop Now",
  "Drop 001 Now Live — The Everyday Uniform",
  "Limited Stock — Heavyweight Boxy Tee in Sand Beige",
];

export default function AnnouncementBar() {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="relative w-full bg-[#0D0D0D] text-[#F5F5F2] announcement-bar flex items-center justify-center overflow-hidden"
      style={{ height: "var(--announcement-h)" }}
    >
      <AnimatePresence mode="wait">
        <motion.p
          key={current}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-[10px] uppercase tracking-[0.35em] font-medium flex items-center gap-2 px-10"
        >
          {messages[current]}
          <ChevronRight size={10} className="opacity-60" />
        </motion.p>
      </AnimatePresence>

      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-40 hover:opacity-100 transition-opacity"
        aria-label="Close announcement"
      >
        <X size={12} />
      </button>
    </div>
  );
}
