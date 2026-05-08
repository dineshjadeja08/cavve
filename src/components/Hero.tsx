"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Parallax Background Image */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 z-0 scale-110"
      >
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="/images/hero.png"
            alt="CAVVE — Wear Discipline"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-[1]" style={{
        background: "linear-gradient(to bottom, rgba(13,13,13,0.25) 0%, rgba(13,13,13,0.05) 40%, rgba(13,13,13,0.7) 100%)"
      }} />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 w-full max-w-screen-2xl mx-auto px-8 md:px-16"
      >
        {/* Pre-headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-8 h-[1px] bg-[#D8CBB8]" />
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#D8CBB8] font-medium">
            Drop 001 — The Everyday Uniform
          </p>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] font-black text-white tracking-tighter uppercase leading-[0.85] mb-12 font-[family-name:var(--font-montserrat)]"
        >
          Wear<br />
          <span className="italic font-light text-[#D8CBB8]">Discipline</span>
        </motion.h1>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <Link
            href="/collections"
            className="group relative overflow-hidden px-10 py-4 bg-white text-black text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 hover:bg-[#D8CBB8]"
          >
            Shop Collection
          </Link>
          <Link
            href="/lookbook"
            className="group px-10 py-4 border border-white/40 text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:border-white transition-all duration-500 hover:bg-white/5"
          >
            View Lookbook
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom Info Row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 z-10 px-8 md:px-16 pb-10 flex justify-between items-end"
      >
        <div className="hidden md:flex flex-col gap-1">
          <p className="text-[9px] uppercase tracking-[0.4em] text-white/30">Season</p>
          <p className="text-xs text-white/60 font-light">SS 2026</p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-10 flex flex-col items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        >
          <span className="text-[9px] uppercase tracking-[0.4em] text-white/40 group-hover:text-white/70 transition-colors">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={18} className="text-white/40 group-hover:text-white/70 transition-colors" strokeWidth={1} />
          </motion.div>
        </div>

        <div className="hidden md:flex flex-col gap-1 text-right">
          <p className="text-[9px] uppercase tracking-[0.4em] text-white/30">Collection</p>
          <p className="text-xs text-white/60 font-light">The Foundation</p>
        </div>
      </motion.div>
    </section>
  );
}
