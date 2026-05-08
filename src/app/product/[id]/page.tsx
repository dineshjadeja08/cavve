"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import {
  ChevronRight,
  Heart,
  Minus,
  Plus,
  Share2,
  Star,
  ChevronDown,
  Truck,
  RotateCcw,
  Shield,
} from "lucide-react";

const product = {
  name: "Heavyweight Boxy Tee",
  price: "₹3,499",
  description:
    "Our signature heavyweight t-shirt, crafted from 240 GSM premium organic cotton. Featuring a dropped shoulder and a wide, boxy silhouette — the definitive modern essential.",
  fabric: "100% Organic Cotton, 240 GSM",
  fit: "Oversized, Boxy",
  colors: [
    { name: "Sand Beige", hex: "#D8CBB8", image: "/images/collection1.png" },
    { name: "Deep Black", hex: "#0D0D0D", image: "/images/hero.png" },
    { name: "Soft White", hex: "#F5F5F2", image: "/images/lifestyle1.png" },
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  images: [
    "/images/collection1.png",
    "/images/collection1_hover.png",
    "/images/hero.png",
    "/images/lifestyle1.png",
  ],
  reviews: [
    {
      name: "Arjun R.",
      rating: 5,
      text: "The quality is exceptional. Heavyweight and structured, holds its shape perfectly.",
      size: "L",
      fit: "True to size",
    },
    {
      name: "Dev S.",
      rating: 5,
      text: "My new go-to. The beige colorway is clean and versatile. Already ordered another.",
      size: "M",
      fit: "Sized up",
    },
  ],
};

const relatedProducts = [
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
    category: "Sets",
    image: "/images/lookbook.png",
    colors: ["#0D0D0D"],
  },
  {
    id: "8",
    name: "Slim Performance Tee",
    price: "₹2,999",
    category: "T-Shirts",
    image: "/images/collection_banner.png",
    colors: ["#0D0D0D", "#F5F5F2"],
    isBestseller: true,
  },
];

function AccordionItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/50">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left group"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">
          {title}
        </span>
        <ChevronDown
          size={14}
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""} text-muted-foreground`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-sm text-muted-foreground font-light leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ProductDetailPage() {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [sizeError, setSizeError] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true);
      setTimeout(() => setSizeError(false), 2000);
      return;
    }
    // TODO: Add to cart logic
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-[calc(var(--announcement-h)+80px)]">
        <section className="px-6 md:px-12 mb-24">
          <div className="max-w-screen-2xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-12">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <ChevronRight size={10} />
              <Link href="/collections" className="hover:text-foreground transition-colors">
                Collections
              </Link>
              <ChevronRight size={10} />
              <span>Essentials</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-20">
              {/* Product Gallery */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-12 gap-3">
                  {/* Thumbnails */}
                  <div className="col-span-2 flex flex-col gap-3">
                    {product.images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImage(i)}
                        className={`relative aspect-[3/4] bg-[#F0EDE8] overflow-hidden border-2 transition-all ${
                          activeImage === i
                            ? "border-foreground"
                            : "border-transparent hover:border-muted"
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`View ${i + 1}`}
                          fill
                          className="object-cover"
                          sizes="10vw"
                        />
                      </button>
                    ))}
                  </div>

                  {/* Main Image */}
                  <div className="col-span-10 relative aspect-[3/4] bg-[#F0EDE8] overflow-hidden group">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={product.images[activeImage]}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-[1.02] transition-transform duration-[1200ms]"
                          sizes="55vw"
                          priority
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Share + Wishlist overlay */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => setIsWishlisted(!isWishlisted)}
                        className="p-3 bg-white/90 backdrop-blur-sm hover:bg-white transition-colors"
                        aria-label="Wishlist"
                      >
                        <Heart
                          size={16}
                          strokeWidth={1.5}
                          className={isWishlisted ? "fill-black" : ""}
                        />
                      </button>
                      <button
                        className="p-3 bg-white/90 backdrop-blur-sm hover:bg-white transition-colors"
                        aria-label="Share"
                      >
                        <Share2 size={16} strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="lg:col-span-5 lg:sticky lg:top-[calc(var(--announcement-h)+80px)] self-start flex flex-col gap-8">
                {/* Name & Price */}
                <div className="flex flex-col gap-3">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Essentials
                  </p>
                  <h1 className="text-3xl font-light tracking-tighter uppercase font-[family-name:var(--font-montserrat)]">
                    {product.name}
                  </h1>
                  <div className="flex items-center gap-4">
                    <p className="text-2xl font-semibold tracking-tight">
                      {product.price}
                    </p>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={11} fill="#0D0D0D" className="text-[#0D0D0D]" />
                      ))}
                      <span className="text-[9px] uppercase tracking-widest ml-2 text-muted-foreground">
                        (48)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="h-[1px] bg-border/50" />

                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {product.description}
                </p>

                {/* Model Info */}
                <div className="bg-[#F5F5F2] border border-border/50 p-5">
                  <p className="text-[9px] uppercase tracking-[0.3em] font-bold mb-2">
                    Model Reference
                  </p>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    Model is 6&apos;1&quot; / 185cm — wearing size Large for a relaxed
                    fit. Size down for a trimmer silhouette.
                  </p>
                </div>

                {/* Color Selection */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] uppercase tracking-[0.25em] font-bold">
                      Color:
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      {product.colors[selectedColor].name}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    {product.colors.map((color, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedColor(i)}
                        className={`relative w-10 h-10 rounded-full border-2 transition-all ${
                          selectedColor === i
                            ? "border-foreground scale-110"
                            : "border-transparent hover:border-muted-foreground/40"
                        }`}
                        aria-label={color.name}
                      >
                        <div
                          className="w-full h-full rounded-full border border-black/10"
                          style={{ backgroundColor: color.hex }}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Selection */}
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] uppercase tracking-[0.25em] font-bold">
                        Size:
                      </span>
                      <span
                        className={`text-[10px] uppercase tracking-[0.25em] ${
                          sizeError ? "text-red-500" : "text-muted-foreground"
                        }`}
                      >
                        {selectedSize || (sizeError ? "Select a size" : "Select")}
                      </span>
                    </div>
                    <button className="text-[9px] uppercase tracking-widest text-muted-foreground underline underline-offset-4 decoration-muted-foreground/40 hover:text-foreground transition-colors">
                      Size Guide
                    </button>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => {
                          setSelectedSize(size);
                          setSizeError(false);
                        }}
                        className={`py-4 border text-[10px] font-bold tracking-widest uppercase transition-all ${
                          selectedSize === size
                            ? "bg-foreground text-background border-foreground"
                            : sizeError
                            ? "border-red-300 hover:border-red-500"
                            : "border-border hover:border-foreground"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity + Add to Cart */}
                <div className="flex gap-3">
                  <div className="flex items-center border border-border">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-4 hover:bg-muted/20 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} strokeWidth={1.5} />
                    </button>
                    <span className="w-12 text-center text-sm font-bold">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-4 hover:bg-muted/20 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} strokeWidth={1.5} />
                    </button>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddToCart}
                    className="flex-1 py-4 bg-[#0D0D0D] text-[#F5F5F2] text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#2C2C2C] transition-colors"
                  >
                    Add to Cart
                  </motion.button>
                </div>

                {/* Shipping Badges */}
                <div className="grid grid-cols-3 gap-4 py-5 border-y border-border/50">
                  {[
                    { Icon: Truck, label: "Free Shipping\n₹1,499+" },
                    { Icon: RotateCcw, label: "Easy Returns\n7 Days" },
                    { Icon: Shield, label: "Secure\nPayments" },
                  ].map(({ Icon, label }, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 text-center">
                      <Icon size={16} strokeWidth={1.5} className="text-muted-foreground" />
                      <p className="text-[9px] uppercase tracking-widest text-muted-foreground leading-tight whitespace-pre-line">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Accordions */}
                <div>
                  <AccordionItem title="Fabric & Composition">
                    Crafted from 240 GSM premium organic cotton. The fabric undergoes a
                    unique silicone wash for a soft, structured feel that maintains its
                    form through repeated wear. OEKO-TEX certified.
                  </AccordionItem>
                  <AccordionItem title="Fit & Sizing">
                    This tee features a boxy, oversized fit with dropped shoulders. We
                    recommend your standard size for a true oversized look, or size down
                    for a more fitted silhouette.
                  </AccordionItem>
                  <AccordionItem title="Sourcing & Craftsmanship">
                    Produced ethically in small batches. We partner with
                    fair-trade certified facilities that prioritize sustainable
                    practices and fair labor conditions.
                  </AccordionItem>
                  <AccordionItem title="Care Instructions">
                    Machine wash cold on gentle cycle. Tumble dry low. Do not bleach. Iron
                    on low heat if needed. The garment will soften beautifully with each
                    wash.
                  </AccordionItem>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 px-6 md:px-12 bg-[#F5F5F2]/60 border-y border-border/30">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-3 font-medium">
                  Community Reviews
                </p>
                <h2 className="text-4xl font-light tracking-tighter uppercase font-[family-name:var(--font-montserrat)]">
                  What They Say
                </h2>
              </div>
              <div className="flex items-center gap-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={14} fill="#0D0D0D" className="text-[#0D0D0D]" />
                ))}
                <span className="text-sm font-semibold">4.9</span>
                <span className="text-muted-foreground text-sm font-light">(48 reviews)</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {product.reviews.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-background border border-border/50"
                >
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} size={12} fill="#0D0D0D" className="text-[#0D0D0D]" />
                    ))}
                  </div>
                  <p className="text-base font-light text-foreground leading-relaxed mb-6 italic">
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <div className="flex justify-between items-center pt-5 border-t border-border/30">
                    <p className="text-sm font-bold">{r.name}</p>
                    <div className="flex gap-4 text-[9px] uppercase tracking-widest text-muted-foreground">
                      <span>Size {r.size}</span>
                      <span>{r.fit}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-28 px-6 md:px-12 bg-background">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-14">
              <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4 font-medium">
                Complete the Look
              </p>
              <h2 className="text-4xl font-light tracking-tighter uppercase font-[family-name:var(--font-montserrat)]">
                Style With
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">
              {relatedProducts.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <ProductCard product={p} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
