"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  hoverImage: string;
  slug: string;
  isNew?: boolean;
}

const ProductCard = ({ id, name, price, image, hoverImage, slug, isNew }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative flex flex-col bg-background"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-secondary/5">
        <Link href={`/product/${slug}`} className="block h-full">
          <Image
            src={image}
            alt={name}
            fill
            className={cn(
              "object-cover transition-all duration-[1.5s] ease-in-out group-hover:scale-105",
              isHovered ? "opacity-0" : "opacity-100"
            )}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Image
            src={hoverImage}
            alt={`${name} hover`}
            fill
            className={cn(
              "object-cover transition-all duration-[1.5s] ease-in-out group-hover:scale-100",
              isHovered ? "opacity-100 scale-105" : "opacity-0 scale-110"
            )}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>

        {/* Badges */}
        {isNew && (
          <div className="absolute top-6 left-6 z-10">
            <span className="text-[8px] tracking-[0.3em] font-bold bg-primary text-primary-foreground px-4 py-2 uppercase">
              NEW DROP
            </span>
          </div>
        )}

        {/* Action Overlay */}
        <div className="absolute top-6 right-6 z-10">
           <button className="p-3 bg-white/80 backdrop-blur-sm rounded-full text-black hover:bg-black hover:text-white transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-[-10px] group-hover:translate-y-0">
             <Heart size={16} strokeWidth={1.5} />
           </button>
        </div>

        {/* Quick Add Button */}
        <div className="absolute inset-x-0 bottom-0 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
          <button className="w-full bg-primary text-primary-foreground py-5 text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-accent flex items-center justify-center gap-3">
             <Plus size={14} /> QUICK ADD
          </button>
        </div>

        {/* Matte Overlay Effect */}
        <div className="matte-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      {/* Product Info */}
      <div className="py-8 flex flex-col items-center text-center">
        <div className="flex gap-2 mb-4">
           {/* Color Swatches */}
           <div className="w-2.5 h-2.5 rounded-full bg-black border border-border/10" />
           <div className="w-2.5 h-2.5 rounded-full bg-[#D8CBB8] border border-border/10" />
           <div className="w-2.5 h-2.5 rounded-full bg-white border border-border/10" />
        </div>
        
        <Link href={`/product/${slug}`} className="group/link">
          <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-3 transition-opacity group-hover/link:opacity-50">
            {name}
          </h3>
        </Link>
        <p className="text-[11px] tracking-[0.1em] font-medium opacity-40">
          ₹{price.toLocaleString()}
        </p>
      </div>

      {/* Aesthetic Divider Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-primary/20 group-hover:w-[80%] transition-all duration-1000 ease-in-out" />
    </div>
  );
};

export default ProductCard;
