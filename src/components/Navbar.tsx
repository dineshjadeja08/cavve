"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, Menu, X, User, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import SearchModal from "./SearchModal";

const navLinks = [
  { name: "Collections", href: "/collections" },
  { name: "Lookbook", href: "/lookbook" },
  { name: "Journal", href: "/journal" },
  { name: "About", href: "/about" },
  { name: "Drop 001", href: "/drop-001", highlight: true },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartCount] = useState(2);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-[var(--announcement-h)] left-0 w-full z-50 transition-all duration-700 ease-in-out px-6 md:px-12",
          isScrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border/40 py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          {/* Left: Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[10px] uppercase tracking-[0.25em] transition-colors relative group",
                  isScrolled
                    ? "text-foreground hover:text-muted-foreground"
                    : "text-white/80 hover:text-white"
                )}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current group-hover:w-full transition-all duration-500" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "lg:hidden transition-colors",
              isScrolled ? "text-foreground" : "text-white"
            )}
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>

          {/* Center: Logo */}
          <Link
            href="/"
            className={cn(
              "absolute left-1/2 -translate-x-1/2 font-bold tracking-[0.35em] uppercase transition-all duration-700",
              isScrolled
                ? "text-xl text-foreground"
                : "text-2xl text-white",
              "font-[family-name:var(--font-montserrat)]"
            )}
          >
            CAVVE
          </Link>

          {/* Right: Links + Icons */}
          <div className="flex items-center gap-8">
            {/* Right nav links desktop */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.slice(3).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-[10px] uppercase tracking-[0.25em] transition-colors relative group",
                    link.highlight
                      ? isScrolled
                        ? "text-foreground font-bold"
                        : "text-[#D8CBB8] font-bold"
                      : isScrolled
                      ? "text-foreground hover:text-muted-foreground"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  {link.name}
                  {!link.highlight && (
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current group-hover:w-full transition-all duration-500" />
                  )}
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-5">
              <button
                className={cn(
                  "hidden sm:block transition-colors",
                  isScrolled ? "text-foreground hover:text-muted-foreground" : "text-white/80 hover:text-white"
                )}
                aria-label="Search"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search size={18} strokeWidth={1.5} />
              </button>
              <Link
                href="/account"
                className={cn(
                  "hidden sm:block transition-colors",
                  isScrolled ? "text-foreground hover:text-muted-foreground" : "text-white/80 hover:text-white"
                )}
                aria-label="Account"
              >
                <User size={18} strokeWidth={1.5} />
              </Link>
              <Link
                href="/wishlist"
                className={cn(
                  "hidden sm:block transition-colors",
                  isScrolled ? "text-foreground hover:text-muted-foreground" : "text-white/80 hover:text-white"
                )}
                aria-label="Wishlist"
              >
                <Heart size={18} strokeWidth={1.5} />
              </Link>
              <Link
                href="/cart"
                className={cn(
                  "relative transition-colors",
                  isScrolled ? "text-foreground hover:text-muted-foreground" : "text-white/80 hover:text-white"
                )}
                aria-label={`Cart (${cartCount} items)`}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[8px] w-[18px] h-[18px] flex items-center justify-center font-bold rounded-full"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#0D0D0D] z-[90] flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-6 border-b border-white/5">
              <span className="text-xl font-bold tracking-[0.3em] uppercase text-white font-[family-name:var(--font-montserrat)]">
                CAVVE
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
                className="text-white/60 hover:text-white transition-colors"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex-1 flex flex-col justify-center px-8 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.1 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "text-5xl font-light tracking-tighter uppercase py-3 block transition-colors",
                      link.highlight ? "text-[#D8CBB8]" : "text-white/80 hover:text-white"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Footer Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="px-8 py-8 border-t border-white/5 flex flex-wrap gap-8"
            >
              <Link
                href="/account"
                onClick={() => setIsMenuOpen(false)}
                className="text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors"
              >
                Account
              </Link>
              <Link
                href="/wishlist"
                onClick={() => setIsMenuOpen(false)}
                className="text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors"
              >
                Wishlist
              </Link>
              <Link
                href="/cart"
                onClick={() => setIsMenuOpen(false)}
                className="text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors"
              >
                Cart ({cartCount})
              </Link>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSearchOpen(true);
                }}
                className="text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors"
              >
                Search
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
