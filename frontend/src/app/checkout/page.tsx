"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Lock, CreditCard, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const CheckoutPage = () => {
  const [step, setStep] = useState(1); // 1: Info, 2: Shipping, 3: Payment

  return (
    <div className="bg-[#F5F5F2] min-h-screen pt-12 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header / Breadcrumbs - Centered & Minimal */}
        <div className="flex flex-col items-center mb-24">
          <Link href="/" className="mb-16">
            <h1 className="text-3xl font-black tracking-[0.5em] uppercase">CAVVE</h1>
          </Link>
          
          <div className="flex items-center gap-6 text-[9px] font-bold tracking-[0.3em] uppercase">
            <Link href="/cart" className="opacity-30 hover:opacity-100 transition-opacity">01 BAG</Link>
            <div className="w-8 h-[1px] bg-border/20" />
            <span className={cn("transition-opacity", step >= 1 ? "opacity-100" : "opacity-30")}>02 INFORMATION</span>
            <div className="w-8 h-[1px] bg-border/20" />
            <span className={cn("transition-opacity", step >= 2 ? "opacity-100" : "opacity-30")}>03 SHIPPING</span>
            <div className="w-8 h-[1px] bg-border/20" />
            <span className={cn("transition-opacity", step >= 3 ? "opacity-100" : "opacity-30")}>04 PAYMENT</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-20">
          {/* Form Side - Clean White Canvas */}
          <div className="flex-grow">
            <div className="bg-white p-10 md:p-16 border border-border/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)]">
              {step === 1 && (
                <div className="space-y-16">
                  <div>
                    <div className="flex justify-between items-end mb-10">
                      <h2 className="text-[11px] font-bold tracking-[0.4em] uppercase">Contact Information</h2>
                      <p className="text-[9px] tracking-[0.2em] font-bold opacity-30 uppercase">ALREADY HAVE AN ACCOUNT? <Link href="/account/login" className="underline underline-offset-4 text-black opacity-100">LOGIN</Link></p>
                    </div>
                    <input 
                      type="email" 
                      placeholder="EMAIL ADDRESS" 
                      className="w-full border-b border-border/10 py-5 text-[10px] tracking-[0.3em] font-bold outline-none focus:border-primary transition-colors bg-transparent placeholder:opacity-20"
                    />
                  </div>

                  <div>
                    <h2 className="text-[11px] font-bold tracking-[0.4em] uppercase mb-12">Shipping Address</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
                      <input type="text" placeholder="FIRST NAME" className="border-b border-border/10 py-5 text-[10px] tracking-[0.3em] font-bold outline-none focus:border-primary transition-colors bg-transparent placeholder:opacity-20" />
                      <input type="text" placeholder="LAST NAME" className="border-b border-border/10 py-5 text-[10px] tracking-[0.3em] font-bold outline-none focus:border-primary transition-colors bg-transparent placeholder:opacity-20" />
                      <input type="text" placeholder="ADDRESS LINE 1" className="md:col-span-2 border-b border-border/10 py-5 text-[10px] tracking-[0.3em] font-bold outline-none focus:border-primary transition-colors bg-transparent placeholder:opacity-20" />
                      <input type="text" placeholder="APARTMENT, SUITE, ETC. (OPTIONAL)" className="md:col-span-2 border-b border-border/10 py-5 text-[10px] tracking-[0.3em] font-bold outline-none focus:border-primary transition-colors bg-transparent placeholder:opacity-20" />
                      <input type="text" placeholder="CITY" className="border-b border-border/10 py-5 text-[10px] tracking-[0.3em] font-bold outline-none focus:border-primary transition-colors bg-transparent placeholder:opacity-20" />
                      <input type="text" placeholder="POSTAL CODE" className="border-b border-border/10 py-5 text-[10px] tracking-[0.3em] font-bold outline-none focus:border-primary transition-colors bg-transparent placeholder:opacity-20" />
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-12">
                    <Link href="/cart" className="flex items-center gap-3 text-[9px] font-bold tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity uppercase">
                      <ChevronLeft size={14} /> RETURN TO BAG
                    </Link>
                    <button 
                      onClick={() => setStep(2)}
                      className="bg-primary text-primary-foreground px-16 py-6 text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-accent transition-all duration-700 shadow-xl"
                    >
                      CONTINUE TO SHIPPING
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-16">
                   <div>
                    <h2 className="text-[11px] font-bold tracking-[0.4em] uppercase mb-12">Shipping Method</h2>
                    <div className="border border-border/10 overflow-hidden">
                       <div className="flex justify-between items-center p-8 bg-secondary/5">
                          <div className="flex items-center gap-6">
                             <div className="w-5 h-5 rounded-full border-4 border-primary" />
                             <div className="flex flex-col gap-1">
                                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Standard Shipping</span>
                                <span className="text-[9px] tracking-[0.2em] opacity-30 uppercase">3-5 BUSINESS DAYS</span>
                             </div>
                          </div>
                          <span className="text-[10px] font-bold tracking-[0.2em]">FREE</span>
                       </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-12">
                    <button 
                      onClick={() => setStep(1)}
                      className="flex items-center gap-3 text-[9px] font-bold tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity uppercase">
                      <ChevronLeft size={14} /> BACK TO INFORMATION
                    </button>
                    <button 
                      onClick={() => setStep(3)}
                      className="bg-primary text-primary-foreground px-16 py-6 text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-accent transition-all duration-700 shadow-xl"
                    >
                      CONTINUE TO PAYMENT
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-16">
                   <div>
                    <h2 className="text-[11px] font-bold tracking-[0.4em] uppercase mb-8">Secure Payment</h2>
                    <p className="text-[9px] tracking-[0.2em] opacity-30 mb-12 uppercase">ALL TRANSACTIONS ARE SECURE AND ENCRYPTED.</p>
                    
                    <div className="border border-border/10 mb-12">
                       <div className="flex justify-between items-center p-8 bg-secondary/5 border-b border-border/10">
                          <div className="flex items-center gap-6">
                             <div className="w-5 h-5 rounded-full border-4 border-primary" />
                             <span className="text-[10px] font-bold tracking-[0.3em] uppercase">RAZORPAY (UPI, CARD, WALLET)</span>
                          </div>
                          <div className="flex gap-3 grayscale opacity-30">
                             <CreditCard size={20} strokeWidth={1} />
                          </div>
                       </div>
                       <div className="p-16 text-center bg-background/30 flex flex-col items-center">
                          <Lock size={32} strokeWidth={1} className="mb-8 opacity-10" />
                          <p className="text-[10px] tracking-[0.3em] opacity-50 leading-relaxed uppercase max-w-md">
                            AFTER CLICKING "COMPLETE ORDER", YOU WILL BE REDIRECTED TO RAZORPAY TO COMPLETE YOUR PURCHASE SECURELY.
                          </p>
                       </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-12">
                    <button 
                      onClick={() => setStep(2)}
                      className="flex items-center gap-3 text-[9px] font-bold tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity uppercase">
                      <ChevronLeft size={14} /> BACK TO SHIPPING
                    </button>
                    <button className="bg-primary text-primary-foreground px-16 py-6 text-[11px] font-bold tracking-[0.5em] uppercase hover:bg-accent transition-all duration-700 shadow-2xl">
                      COMPLETE ORDER
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Trust Badges */}
            <div className="mt-12 flex justify-center gap-12 opacity-20 grayscale">
               <div className="flex items-center gap-2 text-[8px] font-bold tracking-[0.3em] uppercase">
                  <ShieldCheck size={14} /> SECURE SSL ENCRYPTION
               </div>
               <div className="flex items-center gap-2 text-[8px] font-bold tracking-[0.3em] uppercase">
                  <ShieldCheck size={14} /> GUARANTEED QUALITY
               </div>
            </div>
          </div>

          {/* Sidebar Summary - Monochrome & Immersive */}
          <div className="w-full lg:w-[450px]">
             <div className="sticky top-12 space-y-12">
                <h2 className="text-[11px] font-bold tracking-[0.4em] uppercase mb-10">Order Summary</h2>
                
                <div className="space-y-8 max-h-[40vh] overflow-y-auto no-scrollbar pr-4">
                   {/* Item Preview - Redesigned */}
                   <div className="flex gap-8 items-center group">
                      <div className="relative w-24 h-32 bg-white border border-border/5 shrink-0 overflow-hidden">
                        <Image src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1974&auto=format&fit=crop" alt="item" fill className="object-cover grayscale group-hover:scale-110 transition-transform duration-700" />
                        <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-white text-[9px] rounded-full flex items-center justify-center font-bold">1</span>
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-2">Jet Black Oversized Tee</h4>
                        <p className="text-[9px] tracking-[0.2em] opacity-30 uppercase">Size: L / Color: Black</p>
                      </div>
                      <span className="text-[10px] font-bold tracking-[0.1em]">₹2,999</span>
                   </div>
                </div>

                <div className="w-full h-[1px] bg-border/5" />

                <div className="flex gap-6">
                  <input type="text" placeholder="PROMO CODE" className="flex-grow border-b border-border/10 py-4 text-[10px] tracking-[0.3em] font-bold outline-none bg-transparent placeholder:opacity-20" />
                  <button className="text-[10px] font-bold tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity uppercase">APPLY</button>
                </div>

                <div className="space-y-5 pt-4">
                   <div className="flex justify-between text-[10px] font-bold tracking-[0.3em] opacity-40 uppercase">
                      <span>SUBTOTAL</span>
                      <span>₹2,999</span>
                   </div>
                   <div className="flex justify-between text-[10px] font-bold tracking-[0.3em] opacity-40 uppercase">
                      <span>SHIPPING</span>
                      <span className="text-black opacity-100">FREE</span>
                   </div>
                   <div className="flex justify-between text-[10px] font-bold tracking-[0.3em] opacity-40 uppercase">
                      <span>TAXES (GST)</span>
                      <span>₹540</span>
                   </div>
                </div>

                <div className="pt-10 border-t border-border/10">
                   <div className="flex justify-between items-baseline">
                      <span className="text-[11px] font-bold tracking-[0.5em] uppercase">TOTAL</span>
                      <div className="flex flex-col items-end">
                         <div className="flex items-baseline gap-3">
                            <span className="text-[10px] opacity-30 font-bold">INR</span>
                            <span className="text-4xl font-black tracking-tighter">₹3,539</span>
                         </div>
                         <p className="text-[8px] tracking-[0.2em] opacity-20 mt-2 uppercase">INCLUDING ₹540 IN TAXES</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
