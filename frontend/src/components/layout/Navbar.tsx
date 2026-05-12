"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Search, User, Menu, X, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftLinks = [
    { name: "SHOP", href: "/collections" },
    { name: "COLLECTIONS", href: "/collections" },
    { name: "LOOKBOOK", href: "/lookbook" },
  ];

  const rightLinks = [
    { name: "ABOUT", href: "/about" },
    { name: "JOURNAL", href: "/journal" },
  ];

  // Logic to determine if navbar should be dark or light based on page/scroll
  const isDarkBg = pathname === "/" && !isScrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-700 px-6 md:px-12 py-8 flex justify-between items-center",
        isScrolled ? "bg-background/90 backdrop-blur-xl py-6 border-b border-border/5" : "bg-transparent",
        isDarkBg ? "text-white" : "text-foreground"
      )}
    >
      {/* Left Navigation */}
      <nav className="hidden lg:flex items-center space-x-10">
        {leftLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="luxury-link"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Brand Logo - Centered */}
      <Link href="/" className="absolute left-1/2 -translate-x-1/2 group">
        <motion.h1 
          initial={{ letterSpacing: "0.3em" }}
          whileHover={{ letterSpacing: "0.5em" }}
          className="text-2xl md:text-3xl font-black tracking-[0.3em] transition-all duration-500 uppercase"
        >
          CAVVE
        </motion.h1>
      </Link>

      {/* Right Navigation & Icons */}
      <div className="flex items-center">
        <nav className="hidden lg:flex items-center space-x-10 mr-10">
          {rightLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="luxury-link"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-6 md:space-x-8">
          <button className="hover:opacity-40 transition-opacity">
            <Search size={18} strokeWidth={1.2} />
          </button>
          <Link href="/account" className="hidden md:block hover:opacity-40 transition-opacity">
            <User size={18} strokeWidth={1.2} />
          </Link>
          <Link href="/wishlist" className="hidden md:block hover:opacity-40 transition-opacity">
            <Heart size={18} strokeWidth={1.2} />
          </Link>
          <Link href="/cart" className="relative group">
            <ShoppingBag size={18} strokeWidth={1.2} />
            <span className={cn(
              "absolute -top-1.5 -right-1.5 text-[7px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold transition-colors",
              isDarkBg ? "bg-white text-black" : "bg-black text-white"
            )}>
              0
            </span>
          </Link>
          <button 
            className="lg:hidden hover:opacity-40 transition-opacity"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={20} strokeWidth={1.2} />
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background z-[100] flex flex-col p-8 md:p-12"
          >
            <div className="flex justify-between items-center mb-24">
              <h1 className="text-2xl font-black tracking-[0.3em] uppercase">CAVVE</h1>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                <X size={28} strokeWidth={1} />
              </button>
            </div>
            
            <nav className="flex flex-col space-y-8">
              {[...leftLinks, ...rightLinks, { name: "ACCOUNT", href: "/account" }, { name: "WISHLIST", href: "/wishlist" }].map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-4xl md:text-6xl font-black tracking-tighter uppercase hover:opacity-40 transition-opacity"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto flex justify-between items-end">
              <p className="text-[10px] tracking-[0.5em] font-bold uppercase opacity-30">WEAR DISCIPLINE</p>
              <div className="flex space-x-6">
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-40">INSTAGRAM</span>
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-40">TWITTER</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
