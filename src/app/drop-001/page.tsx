"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { ArrowRight, Bell } from "lucide-react";

const TARGET_DATE = new Date("2026-06-01T00:00:00");

function useCountdown(target: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
        secs: Math.floor((diff / 1000) % 60),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [target]);

  return timeLeft;
}

const dropProducts = [
  {
    id: "1",
    name: "Heavyweight Boxy Tee",
    price: "₹3,499",
    category: "Essentials",
    image: "/images/collection1.png",
    hoverImage: "/images/collection1_hover.png",
    colors: ["#D8CBB8", "#0D0D0D", "#F5F5F2"],
    isNew: true,
  },
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
  },
];

export default function DropPage() {
  const countdown = useCountdown(TARGET_DATE);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <main className="min-h-screen bg-[#0D0D0D] overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/collection_banner.png"
            alt="Drop 001"
            fill
            priority
            className="object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/60 via-transparent to-[#0D0D0D]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-[10px] uppercase tracking-[0.6em] text-[#D8CBB8] mb-8 font-medium"
          >
            Exclusive Release
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white mb-4 font-[family-name:var(--font-montserrat)]"
          >
            Drop 001
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-xl md:text-3xl font-light tracking-widest text-white/40 uppercase mb-16"
          >
            The Everyday Uniform
          </motion.p>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex justify-center gap-4 md:gap-10 mb-16"
          >
            {[
              { label: "Days", value: countdown.days },
              { label: "Hours", value: countdown.hours },
              { label: "Mins", value: countdown.mins },
              { label: "Secs", value: countdown.secs },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <motion.span
                  key={value}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-5xl md:text-7xl font-black text-white font-[family-name:var(--font-montserrat)] tabular-nums"
                >
                  {String(value).padStart(2, "0")}
                </motion.span>
                <span className="text-[9px] uppercase tracking-[0.4em] text-white/30">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Email Signup */}
          {!subscribed ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Get early access..."
                className="flex-1 bg-white/5 border border-white/20 py-4 px-6 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors"
                required
              />
              <button
                type="submit"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#D8CBB8] text-[#0D0D0D] text-[10px] uppercase tracking-[0.3em] font-black hover:bg-white transition-colors whitespace-nowrap"
              >
                <Bell size={14} strokeWidth={2} />
                Notify Me
              </button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <p className="text-[#D8CBB8] text-sm uppercase tracking-[0.3em] font-bold mb-2">
                You&apos;re in.
              </p>
              <p className="text-white/40 text-sm font-light">
                We&apos;ll notify you the moment Drop 001 goes live.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Collection Preview */}
      <section className="py-28 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-14">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#7A7A6D] mb-4 font-medium">
              Preview
            </p>
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter uppercase text-white font-[family-name:var(--font-montserrat)]">
              The Pieces
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">
            {dropProducts.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="relative"
              >
                {/* Limited tag */}
                <div className="absolute top-3 left-3 z-10 bg-[#D8CBB8] text-[#0D0D0D] text-[8px] uppercase tracking-[0.2em] px-2 py-1 font-black">
                  Limited
                </div>
                <ProductCard product={p} />
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/collections"
              className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-white/60 hover:text-white border-b border-white/20 pb-1 hover:border-white transition-all"
            >
              View All Pieces
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-32 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#7A7A6D] mb-6 font-medium">
              The Manifesto
            </p>
            <h2 className="text-5xl font-light tracking-tighter uppercase text-white leading-[0.95] mb-8 font-[family-name:var(--font-montserrat)]">
              The Everyday<br />
              <span className="font-black text-[#D8CBB8]">Uniform</span>
            </h2>
            <p className="text-base text-white/40 font-light leading-relaxed max-w-lg">
              Drop 001 is not about fashion. It&apos;s about removing friction from your
              morning routine so you can focus on what matters. Each piece has been
              refined obsessively to be the last version of itself you&apos;ll ever need.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "240", unit: "GSM", label: "Premium Cotton Weight" },
              { num: "4", unit: "Months", label: "Development Time Per Piece" },
              { num: "100%", unit: "Organic", label: "Sustainably Sourced" },
              { num: "001", unit: "Drop", label: "Limited First Release" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-white/10 p-8 hover:border-white/20 transition-colors"
              >
                <p className="text-3xl font-black text-white font-[family-name:var(--font-montserrat)]">
                  {stat.num}
                  <span className="text-[#D8CBB8] text-lg ml-1">{stat.unit}</span>
                </p>
                <p className="text-[9px] uppercase tracking-widest text-white/30 mt-2 leading-relaxed">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
