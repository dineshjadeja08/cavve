"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRef } from "react";

const lookbookImages = [
  {
    src: "/images/collection_banner.png",
    aspect: "aspect-[16/9]",
    span: "col-span-12",
    title: "Chapter One",
    subtitle: "Built for Ambition",
  },
  {
    src: "/images/lifestyle1.png",
    aspect: "aspect-[3/4]",
    span: "col-span-5",
    title: "The Uniform",
  },
  {
    src: "/images/hero.png",
    aspect: "aspect-[3/4]",
    span: "col-span-7",
    title: "The Builder",
  },
  {
    src: "/images/collection1.png",
    aspect: "aspect-[4/3]",
    span: "col-span-7",
    title: "The Essential",
  },
  {
    src: "/images/product_overshirt.png",
    aspect: "aspect-[4/5]",
    span: "col-span-5",
    title: "The Layer",
  },
  {
    src: "/images/lookbook.png",
    aspect: "aspect-[21/9]",
    span: "col-span-12",
    title: "The Collective",
    subtitle: "Wear Discipline",
  },
];

export default function LookbookPage() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const headerY = useTransform(scrollYProgress, [0, 0.3], ["0%", "-30%"]);

  return (
    <main className="min-h-screen bg-[#0D0D0D] overflow-hidden" ref={containerRef}>
      <Navbar />

      {/* Cinematic Header */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/lookbook.png"
            alt="CAVVE Lookbook"
            fill
            priority
            className="object-cover opacity-50 grayscale"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/40 to-transparent" />
        </div>

        <motion.div
          style={{ y: headerY }}
          className="relative z-10 px-8 md:px-16 pb-20 w-full max-w-screen-2xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-[10px] uppercase tracking-[0.6em] text-[#D8CBB8] mb-6 font-medium"
          >
            SS 2026 — Chapter 001
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl sm:text-[12rem] font-black tracking-tighter uppercase leading-[0.85] text-white font-[family-name:var(--font-montserrat)]"
          >
            Look<br />
            <span className="italic font-light text-[#D8CBB8]">Book</span>
          </motion.h1>
        </motion.div>
      </section>

      {/* Editorial Gallery */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-12 gap-4">
          {lookbookImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`relative ${img.span} ${img.aspect} group overflow-hidden`}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700" />

              {/* Caption on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <div className="bg-black/60 backdrop-blur-sm p-4">
                  <p className="text-[9px] uppercase tracking-[0.4em] text-[#D8CBB8] mb-1">
                    {img.subtitle || "Drop 001"}
                  </p>
                  <p className="text-lg font-light tracking-tight uppercase text-white font-[family-name:var(--font-montserrat)]">
                    {img.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Manifesto Quote */}
      <section className="py-40 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-light tracking-tighter text-white leading-[0.95] font-[family-name:var(--font-montserrat)] italic"
          >
            &ldquo;Fashion is temporary.<br />
            <span className="font-black not-italic">Character is permanent.</span>&rdquo;
          </motion.blockquote>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-[10px] uppercase tracking-[0.5em] text-[#7A7A6D] font-medium"
          >
            — CAVVE
          </motion.p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
