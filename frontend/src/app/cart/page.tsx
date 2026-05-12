"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";

const CartPage = () => {
  const cartItems = [
    {
      id: "1",
      name: "Jet Black Oversized Tee",
      size: "L",
      price: 2999,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1974&auto=format&fit=crop",
    }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6">
        <ShoppingBag size={48} className="mb-8 opacity-20" />
        <h1 className="text-3xl font-black tracking-tighter uppercase mb-6">Your Bag is Empty</h1>
        <p className="text-[10px] tracking-[0.3em] opacity-50 mb-12 uppercase">Fill it with discipline.</p>
        <Link 
          href="/collections"
          className="bg-primary text-primary-foreground px-12 py-5 text-[10px] font-bold tracking-[0.3em] hover:bg-accent transition-all"
        >
          START SHOPPING
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pt-24 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-16">Your Bag</h1>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Cart Items */}
          <div className="flex-grow">
            <div className="border-t border-border/10">
              {cartItems.map((item) => (
                <div key={item.id} className="flex flex-col md:flex-row gap-8 py-10 border-b border-border/10">
                  {/* Image */}
                  <div className="relative aspect-[3/4] w-full md:w-40 bg-secondary/5 shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>

                  {/* Details */}
                  <div className="flex-grow flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xs md:text-sm font-bold tracking-widest uppercase mb-2">{item.name}</h3>
                        <p className="text-[10px] tracking-widest opacity-40 uppercase">Size: {item.size}</p>
                      </div>
                      <button className="text-border hover:text-primary transition-colors">
                        <X size={18} />
                      </button>
                    </div>

                    <div className="flex justify-between items-end mt-8 md:mt-0">
                      <div className="flex items-center border border-border/10 h-10 w-32">
                        <button className="w-10 h-full flex items-center justify-center hover:bg-secondary/10 transition-colors">
                          <Minus size={12} />
                        </button>
                        <div className="flex-grow text-center text-[10px] font-bold">{item.quantity}</div>
                        <button className="w-10 h-full flex items-center justify-center hover:bg-secondary/10 transition-colors">
                          <Plus size={12} />
                        </button>
                      </div>
                      <p className="text-sm font-bold tracking-tight">₹{item.price.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="w-full lg:w-96">
            <div className="bg-secondary/5 p-10 border border-border/5">
              <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-10">ORDER SUMMARY</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex justify-between text-[10px] tracking-[0.2em] opacity-60">
                  <span>SUBTOTAL</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[10px] tracking-[0.2em] opacity-60">
                  <span>SHIPPING</span>
                  <span className="text-green-600">FREE</span>
                </div>
                <div className="flex justify-between text-[10px] tracking-[0.2em] opacity-60">
                  <span>TAXES</span>
                  <span>CALCULATED AT CHECKOUT</span>
                </div>
              </div>

              <div className="border-t border-border/10 pt-8 mb-12">
                <div className="flex justify-between text-xl font-bold tracking-tighter">
                  <span>TOTAL</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
              </div>

              <Link 
                href="/checkout"
                className="w-full bg-primary text-primary-foreground h-16 flex items-center justify-center gap-4 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-accent transition-all duration-500 shadow-xl"
              >
                CHECKOUT NOW <ArrowRight size={14} />
              </Link>

              <div className="mt-8 flex justify-center gap-4 opacity-20">
                {/* Payment Icons Placeholder */}
                <div className="w-8 h-5 bg-primary/20 rounded-sm" />
                <div className="w-8 h-5 bg-primary/20 rounded-sm" />
                <div className="w-8 h-5 bg-primary/20 rounded-sm" />
                <div className="w-8 h-5 bg-primary/20 rounded-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
