"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingBag, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  category: string;
  image: string;
  hoverImage?: string;
  colors: string[];
  isNew?: boolean;
  isBestseller?: boolean;
}

export default function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div
      className="group relative flex flex-col gap-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <Link
        href={`/product/${product.id}`}
        className="block overflow-hidden relative aspect-[3/4] bg-[#F0EDE8]"
      >
        {/* Main Image */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={cn(
            "object-cover transition-all duration-[1400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
            "group-hover:scale-[1.04]",
            product.hoverImage && isHovered ? "opacity-0" : "opacity-100"
          )}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Hover Image */}
        {product.hoverImage && (
          <Image
            src={product.hoverImage}
            alt={`${product.name} alternate`}
            fill
            className={cn(
              "object-cover transition-all duration-[1400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] scale-[1.04]",
              isHovered ? "opacity-100 scale-100" : "opacity-0"
            )}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
          {product.isNew && (
            <span className="bg-[#0D0D0D] text-[#F5F5F2] text-[8px] uppercase tracking-[0.2em] px-2 py-1 font-bold">
              New
            </span>
          )}
          {product.isBestseller && (
            <span className="bg-[#D8CBB8] text-[#0D0D0D] text-[8px] uppercase tracking-[0.2em] px-2 py-1 font-bold">
              Bestseller
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsWishlisted(!isWishlisted);
          }}
          className="absolute top-3 right-3 z-10 p-2 bg-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white"
          aria-label="Toggle wishlist"
        >
          <Heart
            size={16}
            strokeWidth={1.5}
            className={cn(
              "transition-colors",
              isWishlisted ? "fill-[#0D0D0D] text-[#0D0D0D]" : "text-[#0D0D0D]"
            )}
          />
        </button>

        {/* Hover Actions */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 8, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-0 left-0 right-0 z-10 flex gap-2 p-3"
            >
              <button className="flex-1 py-3 bg-[#0D0D0D] text-[#F5F5F2] text-[9px] uppercase tracking-[0.2em] font-bold hover:bg-[#2C2C2C] transition-colors flex items-center justify-center gap-2">
                <ShoppingBag size={12} strokeWidth={1.5} />
                Quick Add
              </button>
              <Link
                href={`/product/${product.id}`}
                className="py-3 px-4 bg-white text-[#0D0D0D] hover:bg-[#F5F5F2] transition-colors flex items-center justify-center"
              >
                <Eye size={14} strokeWidth={1.5} />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </Link>

      {/* Product Info */}
      <div className="flex flex-col gap-2 px-1">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground mb-1">
              {product.category}
            </p>
            <h3 className="text-sm font-medium tracking-tight leading-snug group-hover:opacity-60 transition-opacity truncate">
              {product.name}
            </h3>
          </div>
          <div className="flex flex-col items-end gap-0.5">
            <p className="text-sm font-semibold tracking-tight whitespace-nowrap">
              {product.price}
            </p>
            {product.originalPrice && (
              <p className="text-[10px] line-through text-muted-foreground">
                {product.originalPrice}
              </p>
            )}
          </div>
        </div>

        {/* Color Swatches */}
        <div className="flex items-center gap-2 mt-1">
          {product.colors.map((color, i) => (
            <button
              key={i}
              className="w-[10px] h-[10px] rounded-full border border-black/10 hover:scale-125 transition-transform"
              style={{ backgroundColor: color }}
              aria-label={`Color ${i + 1}`}
            />
          ))}
          {product.colors.length > 3 && (
            <span className="text-[9px] text-muted-foreground">
              +{product.colors.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
