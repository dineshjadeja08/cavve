"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Heart, Share2, Plus, Minus, ChevronRight, Ruler, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/store/useCart";

const ProductDetailClient = ({ product }: { product: any }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const addItem = useCart((state) => state.addItem);

  const images = product.images || [product.image];
  const sizes = product.sizes || ["S", "M", "L", "XL", "XXL"];

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    addItem({
      id: product.id || "temp",
      name: product.name,
      price: Number(product.price),
      image: images[0],
      quantity,
      size: selectedSize,
      variantId: product.variants?.find((v: any) => v.size === selectedSize)?.id || "temp-v"
    });
  };

  return (
    <div className="bg-background min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left: Image Gallery - Redesigned Editorial Layout */}
        <div className="flex flex-col-reverse md:flex-row gap-8 w-full lg:w-[65%]">
          {/* Vertical Thumbnails */}
          <div className="flex md:flex-col gap-4 w-full md:w-24 shrink-0 overflow-x-auto md:overflow-y-auto no-scrollbar">
            {images.map((img: string, idx: number) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={cn(
                  "relative aspect-[3/4] w-24 md:w-full border transition-all duration-700 overflow-hidden",
                  activeImage === idx ? "border-primary" : "border-transparent opacity-40 grayscale hover:opacity-100 hover:grayscale-0"
                )}
              >
                <Image src={img} alt={`view-${idx}`} fill className="object-cover" />
              </button>
            ))}
          </div>
          
          {/* Huge Main Image */}
          <div className="relative aspect-[3/4] w-full bg-secondary/5 overflow-hidden group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImage}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full"
              >
                <Image src={images[activeImage]} alt={product.name} fill className="object-cover" priority />
              </motion.div>
            </AnimatePresence>
            <div className="matte-overlay z-10" />
            
            {/* Wishlist Button - Floating */}
            <button className="absolute top-8 right-8 z-20 p-4 bg-white/80 backdrop-blur-md rounded-full text-black hover:bg-black hover:text-white transition-all duration-500 shadow-sm">
              <Heart size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Right: Sticky Purchase Info - Redesigned Luxury Info */}
        <div className="w-full lg:w-[35%] flex flex-col sticky top-40 h-fit">
          <div className="mb-12">
            <div className="flex justify-between items-baseline mb-6">
               <p className="text-[10px] tracking-[0.6em] uppercase opacity-30">Drop 001 / Edition</p>
               <span className="text-[8px] tracking-[0.2em] font-bold opacity-30 uppercase">IN STOCK</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-8 leading-[0.85]">{product.name}</h1>
            <p className="text-2xl font-bold tracking-tight mb-12">₹{Number(product.price).toLocaleString()}</p>
            
            <div className="w-12 h-[1px] bg-primary/20 mb-12" />
            
            <p className="text-[11px] tracking-widest leading-relaxed opacity-60 mb-12 uppercase">
              {product.description || "THE FOUNDATION OF DISCIPLINE. A HEAVYWEIGHT 240 GSM SINGLE JERSEY COTTON T-SHIRT WITH A STRUCTURED DRAPE, DROPPED SHOULDERS, AND A MATTE FINISH."}
            </p>
          </div>

          {/* Color Selection */}
          <div className="mb-12">
             <h3 className="text-[10px] font-bold tracking-[0.3em] mb-6 uppercase opacity-40">SELECT COLOR</h3>
             <div className="flex gap-4">
                <button className="w-8 h-8 rounded-full bg-black border-2 border-primary" />
                <button className="w-8 h-8 rounded-full bg-[#D8CBB8] border border-border/20" />
                <button className="w-8 h-8 rounded-full bg-white border border-border/20" />
             </div>
          </div>

          {/* Size Selector - Redesigned */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">SELECT SIZE</h3>
              <button className="flex items-center gap-2 text-[9px] font-bold tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity uppercase">
                <Ruler size={14} /> SIZE GUIDE
              </button>
            </div>
            <div className="grid grid-cols-5 gap-3">
              {sizes.map((size: string) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={cn(
                    "h-14 border text-[10px] font-bold tracking-[0.2em] transition-all duration-500 uppercase",
                    selectedSize === size ? "bg-primary text-primary-foreground border-primary" : "border-border/10 hover:border-primary/50"
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Bag - Redesigned */}
          <div className="flex flex-col gap-6 mb-16">
            <div className="flex items-center border border-border/10 h-16">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-16 h-full flex items-center justify-center hover:bg-secondary/10 transition-colors"
              >
                <Minus size={14} />
              </button>
              <div className="flex-grow text-center text-xs font-bold tracking-[0.3em]">{quantity}</div>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-16 h-full flex items-center justify-center hover:bg-secondary/10 transition-colors"
              >
                <Plus size={14} />
              </button>
            </div>
            <button 
              onClick={handleAddToCart}
              className="group relative h-20 bg-primary text-primary-foreground text-[11px] font-bold tracking-[0.4em] uppercase hover:bg-accent transition-all duration-700 overflow-hidden shadow-2xl"
            >
              <span className="relative z-10 flex items-center justify-center gap-4">
                ADD TO BAG <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
              </span>
            </button>
          </div>

          {/* Detailed Info - Accordions */}
          <div className="border-t border-border/10">
            {["DETAILS & CARE", "FIT GUIDE", "SHIPPING & RETURNS"].map((title) => (
              <details key={title} className="group border-b border-border/10">
                <summary className="flex justify-between items-center py-6 cursor-pointer list-none">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-60">{title}</span>
                  <div className="relative w-3 h-3">
                    <div className="absolute top-1.5 left-0 w-3 h-[1px] bg-primary" />
                    <div className="absolute top-0 left-1.5 w-[1px] h-3 bg-primary group-open:scale-y-0 transition-transform duration-500" />
                  </div>
                </summary>
                <div className="pb-8">
                  <p className="text-[10px] tracking-widest opacity-40 leading-relaxed uppercase">
                    ENGINEERED FOR THE DISCIPLINED MIND. 240 GSM HEAVYWEIGHT COTTON. OVERSIZED FIT. DROPPED SHOULDERS. PRE-SHRUNK. MADE FOR PERMANENCE.
                  </p>
                </div>
              </details>
            ))}
          </div>

          {/* Social Proof / Sharing */}
          <div className="mt-12 flex justify-between items-center border-t border-border/5 pt-8">
             <button className="flex items-center gap-3 text-[9px] tracking-[0.2em] font-bold opacity-30 hover:opacity-100 transition-all uppercase">
                <Share2 size={14} /> SHARE ARTICLE
             </button>
             <button className="text-[9px] tracking-[0.2em] font-bold opacity-30 hover:opacity-100 transition-all uppercase underline underline-offset-4">
                NEED ASSISTANCE?
             </button>
          </div>
        </div>
      </div>

      {/* Recommended Section Placeholder */}
      <section className="mt-40 border-t border-border/5 pt-24">
         <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-16 text-center">Complete <br /> The Uniform</h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Placeholder for similar products */}
         </div>
      </section>
    </div>
  );
};

export default ProductDetailClient;
