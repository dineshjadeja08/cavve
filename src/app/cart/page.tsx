"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Minus, Plus, Trash2, ArrowLeft, Tag, Truck } from "lucide-react";

const initialCartItems = [
  {
    id: "1",
    name: "Heavyweight Boxy Tee",
    price: 3499,
    size: "L",
    color: "Sand Beige",
    image: "/images/collection1.png",
    quantity: 1,
  },
  {
    id: "2",
    name: "Relaxed Canvas Trouser",
    price: 5999,
    size: "32",
    color: "Charcoal",
    image: "/images/product_trouser.png",
    quantity: 1,
  },
];

const recommendedProducts = [
  {
    id: "3",
    name: "Structured Overshirt",
    price: "₹7,499",
    category: "Outerwear",
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
    isBestseller: true,
  },
  {
    id: "8",
    name: "Slim Performance Tee",
    price: "₹2,999",
    category: "T-Shirts",
    image: "/images/collection_banner.png",
    colors: ["#0D0D0D", "#F5F5F2"],
  },
];

export default function CartPage() {
  const [items, setItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState(false);

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = promoApplied ? Math.round(subtotal * 0.1) : 0;
  const shipping = subtotal >= 1499 ? 0 : 149;
  const total = subtotal - discount + shipping;

  const handlePromo = () => {
    if (promoCode.toUpperCase() === "CAVVE10") {
      setPromoApplied(true);
      setPromoError(false);
    } else {
      setPromoError(true);
      setPromoApplied(false);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-[calc(var(--announcement-h)+80px)] pb-32 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <Link
              href="/collections"
              className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={12} strokeWidth={1.5} />
              Continue Shopping
            </Link>
          </div>

          <h1 className="text-5xl md:text-7xl font-light tracking-tighter uppercase mb-16 font-[family-name:var(--font-montserrat)]">
            Your<br />
            <span className="font-black">Cart ({items.length})</span>
          </h1>

          {items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-32"
            >
              <p className="text-2xl font-light tracking-tight uppercase mb-4">
                Your cart is empty
              </p>
              <p className="text-muted-foreground font-light mb-10">
                Add pieces you love to get started.
              </p>
              <Link
                href="/collections"
                className="inline-flex items-center gap-2 px-10 py-4 bg-foreground text-background text-[10px] uppercase tracking-[0.3em] font-bold hover:opacity-90 transition-opacity"
              >
                Shop Collection
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">
              {/* Cart Items */}
              <div className="lg:col-span-7">
                {/* Free Shipping Banner */}
                {shipping === 0 ? (
                  <div className="flex items-center gap-3 bg-green-50 border border-green-200 px-5 py-4 mb-8">
                    <Truck size={14} strokeWidth={1.5} className="text-green-600" />
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-green-700">
                      You qualify for free shipping!
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 bg-[#F5F5F2] border border-border/50 px-5 py-4 mb-8">
                    <Truck size={14} strokeWidth={1.5} className="text-muted-foreground" />
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
                      Add ₹{(1499 - subtotal).toLocaleString("en-IN")} more for free shipping
                    </p>
                  </div>
                )}

                <div className="flex flex-col gap-0">
                  <AnimatePresence mode="popLayout">
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="flex gap-6 py-8 border-b border-border/50"
                      >
                        <Link
                          href={`/product/${item.id}`}
                          className="relative w-28 md:w-36 shrink-0 aspect-[3/4] bg-[#F0EDE8] overflow-hidden group"
                        >
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                            sizes="144px"
                          />
                        </Link>

                        <div className="flex-1 flex flex-col justify-between">
                          <div className="flex justify-between items-start gap-4">
                            <div className="flex flex-col gap-1">
                              <h3 className="text-base font-bold uppercase tracking-tight">
                                {item.name}
                              </h3>
                              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                                {item.color} — Size {item.size}
                              </p>
                            </div>
                            <p className="text-base font-semibold whitespace-nowrap">
                              ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                            </p>
                          </div>

                          <div className="flex justify-between items-center mt-4">
                            <div className="flex items-center border border-border">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="p-3 hover:bg-muted/20 transition-colors"
                                aria-label="Decrease"
                              >
                                <Minus size={12} strokeWidth={1.5} />
                              </button>
                              <span className="w-10 text-center text-sm font-bold">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="p-3 hover:bg-muted/20 transition-colors"
                                aria-label="Increase"
                              >
                                <Plus size={12} strokeWidth={1.5} />
                              </button>
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-muted-foreground hover:text-foreground transition-colors p-1"
                              aria-label="Remove item"
                            >
                              <Trash2 size={16} strokeWidth={1.5} />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-5 lg:sticky lg:top-[calc(var(--announcement-h)+80px)] self-start">
                <div className="bg-[#F5F5F2] p-8 flex flex-col gap-6">
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-black">
                    Order Summary
                  </h4>

                  {/* Promo Code */}
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Tag size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" strokeWidth={1.5} />
                        <input
                          type="text"
                          value={promoCode}
                          onChange={(e) => {
                            setPromoCode(e.target.value);
                            setPromoError(false);
                          }}
                          placeholder="Promo code"
                          className="w-full bg-white border border-border py-3 pl-10 pr-4 text-xs focus:outline-none focus:border-foreground transition-colors"
                        />
                      </div>
                      <button
                        onClick={handlePromo}
                        className="px-5 bg-foreground text-background text-[9px] uppercase tracking-[0.2em] font-bold hover:opacity-90 transition-opacity whitespace-nowrap"
                      >
                        Apply
                      </button>
                    </div>
                    {promoApplied && (
                      <p className="text-[9px] uppercase tracking-widest text-green-600 font-bold">
                        ✓ CAVVE10 applied — 10% off
                      </p>
                    )}
                    {promoError && (
                      <p className="text-[9px] uppercase tracking-widest text-red-500">
                        Invalid promo code. Try CAVVE10
                      </p>
                    )}
                  </div>

                  <div className="h-[1px] bg-border/50" />

                  {/* Pricing Breakdown */}
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground font-light">Subtotal</span>
                      <span>₹{subtotal.toLocaleString("en-IN")}</span>
                    </div>
                    {promoApplied && (
                      <div className="flex justify-between text-sm text-green-600">
                        <span>Discount (CAVVE10)</span>
                        <span>−₹{discount.toLocaleString("en-IN")}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground font-light">Shipping</span>
                      <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
                    </div>
                  </div>

                  <div className="h-[1px] bg-border/50" />

                  <div className="flex justify-between items-center">
                    <span className="text-base uppercase tracking-tight font-light">Total</span>
                    <span className="text-2xl font-black">₹{total.toLocaleString("en-IN")}</span>
                  </div>

                  <Link
                    href="/checkout"
                    className="w-full py-5 bg-[#0D0D0D] text-[#F5F5F2] text-[10px] uppercase tracking-[0.3em] font-bold text-center hover:bg-[#2C2C2C] transition-colors block"
                  >
                    Secure Checkout
                  </Link>

                  <div className="flex flex-col gap-3">
                    <p className="text-[9px] text-muted-foreground uppercase tracking-widest text-center">
                      Accepted Payments
                    </p>
                    <div className="flex justify-center gap-4">
                      {["UPI", "Visa", "Mastercard", "Rupay", "COD"].map((p) => (
                        <span key={p} className="text-[8px] uppercase tracking-widest text-muted-foreground font-bold border border-border/50 px-2 py-1">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* You Might Also Like */}
          <section className="mt-32 pt-16 border-t border-border/50">
            <div className="mb-12">
              <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-3 font-medium">
                Recommended
              </p>
              <h2 className="text-3xl font-light tracking-tighter uppercase font-[family-name:var(--font-montserrat)]">
                Complete Your<span className="font-black"> Look</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
              {recommendedProducts.map((p, i) => (
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
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
