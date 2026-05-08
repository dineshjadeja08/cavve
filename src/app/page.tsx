"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { ArrowRight, ArrowUpRight, Star, Zap, Shield, Truck } from "lucide-react";

const featuredProducts = [
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
    originalPrice: "₹11,999",
    category: "Sets",
    image: "/images/lookbook.png",
    colors: ["#0D0D0D", "#F5F5F2"],
    isBestseller: true,
  },
];

const brandValues = [
  "DISCIPLINE",
  "AMBITION",
  "SIMPLICITY",
  "CONFIDENCE",
  "MODERNITY",
  "DISCIPLINE",
  "AMBITION",
  "SIMPLICITY",
  "CONFIDENCE",
  "MODERNITY",
];

const testimonials = [
  {
    name: "Arjun R.",
    handle: "@arjun.creates",
    text: "CAVVE changed how I think about getting dressed. The quality is unmatched and the fit is perfect for my lifestyle.",
    rating: 5,
    role: "Founder & Creator",
  },
  {
    name: "Dev S.",
    handle: "@devbuilds",
    text: "The heavyweight tee is my uniform now. Wore it to a product launch and got more compliments than I expected from a 'simple' tee.",
    rating: 5,
    role: "Software Engineer",
  },
  {
    name: "Karan M.",
    handle: "@karanlifts",
    text: "Finally a brand that gets it — minimal, premium, no logo screaming for attention. This is quiet confidence.",
    rating: 5,
    role: "Fitness Coach",
  },
];

const features = [
  {
    icon: <Zap size={20} strokeWidth={1.5} />,
    title: "240 GSM Premium Cotton",
    desc: "Heavyweight fabric that holds its shape and gets better with wear.",
  },
  {
    icon: <Shield size={20} strokeWidth={1.5} />,
    title: "Ethical Production",
    desc: "Crafted in small batches with fair-trade certified facilities.",
  },
  {
    icon: <Truck size={20} strokeWidth={1.5} />,
    title: "Express Delivery",
    desc: "Free shipping across India. Delivered in 2–4 business days.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="w-8 h-[1px] bg-muted-foreground/40" />
      <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-medium">
        {children}
      </p>
    </div>
  );
}

export default function Home() {
  const philosophyRef = useRef<HTMLElement>(null);
  const { scrollYProgress: philScrollY } = useScroll({
    target: philosophyRef,
    offset: ["start end", "end start"],
  });
  const philImgY = useTransform(philScrollY, [0, 1], ["-10%", "10%"]);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />

      {/* ── SECTION: Featured Collection ── */}
      <section className="py-28 px-6 md:px-12 bg-background">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <SectionLabel>Featured Collection</SectionLabel>
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-6xl font-light tracking-tighter uppercase leading-[0.95] font-[family-name:var(--font-montserrat)]"
              >
                Drop 001 —<br />
                <span className="font-black">The Foundation</span>
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/collections"
                className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold border-b border-border pb-1 hover:border-foreground transition-colors"
              >
                View All
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION: Brand Marquee ── */}
      <section className="py-10 border-y border-border/50 overflow-hidden bg-background">
        <div className="flex whitespace-nowrap gap-16">
          <motion.div
            animate={{ x: "-50%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 items-center"
          >
            {brandValues.concat(brandValues).map((val, i) => (
              <span
                key={i}
                className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground/50 font-medium shrink-0"
              >
                {val}
                <span className="ml-16 text-muted-foreground/20">✦</span>
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION: Editorial Split — Philosophy ── */}
      <section
        ref={philosophyRef}
        className="w-full bg-[#0D0D0D] text-white overflow-hidden"
      >
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
          {/* Image side */}
          <div className="relative overflow-hidden min-h-[60vw] lg:min-h-0">
            <motion.div style={{ y: philImgY }} className="absolute inset-0 scale-110">
              <Image
                src="/images/lifestyle1.png"
                alt="CAVVE Philosophy"
                fill
                className="object-cover grayscale contrast-110"
                sizes="50vw"
              />
            </motion.div>
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0D0D0D]/30 lg:to-[#0D0D0D]/80" />
          </div>

          {/* Text side */}
          <div className="flex flex-col justify-center px-10 md:px-20 py-24 lg:py-0">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.5em] text-[#D8CBB8] mb-8 block font-semibold"
            >
              Our Philosophy
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl font-light tracking-tighter uppercase mb-8 leading-[0.9] font-[family-name:var(--font-montserrat)]"
            >
              Confidence<br />
              Through{" "}
              <span className="font-black italic text-[#D8CBB8]">Simplicity</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-base text-white/50 leading-relaxed mb-12 font-light max-w-md"
            >
              True confidence is quiet. It doesn&apos;t scream for attention. Our pieces
              are designed for men who understand that discipline in their wardrobe
              reflects discipline in their life.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-6"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 px-10 py-4 border border-white/20 hover:border-white transition-all text-[10px] uppercase tracking-[0.3em] font-bold"
              >
                Read Our Story
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION: Large Brand Values Marquee ── */}
      <section className="py-28 bg-[#F5F5F2] overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-6 mb-16">
          <SectionLabel>The CAVVE Standard</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light tracking-tighter uppercase font-[family-name:var(--font-montserrat)]"
          >
            Built Different
          </motion.h2>
        </div>
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div
            animate={{ x: [0, "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex shrink-0"
          >
            {["DISCIPLINE", "AMBITION", "SIMPLICITY", "CONFIDENCE", "MODERNITY"].concat(
              ["DISCIPLINE", "AMBITION", "SIMPLICITY", "CONFIDENCE", "MODERNITY"]
            ).map((val, i) => (
              <span
                key={i}
                className="text-[10vw] font-black tracking-tighter outline-text-dark px-8 font-[family-name:var(--font-montserrat)] opacity-10"
              >
                {val}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION: Bestseller Grid ── */}
      <section className="py-28 px-6 md:px-12 bg-background">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <SectionLabel>Curated Picks</SectionLabel>
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-6xl font-light tracking-tighter uppercase font-[family-name:var(--font-montserrat)]"
              >
                Best<span className="font-black">sellers</span>
              </motion.h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 relative aspect-[4/3] md:aspect-auto md:h-[80vh] bg-[#F0EDE8] group cursor-pointer overflow-hidden"
            >
              <Image
                src="/images/collection_banner.png"
                alt="The Uniform"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[1400ms] ease-out"
                sizes="70vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-700" />
              <div className="absolute bottom-0 left-0 p-10">
                <p className="text-[10px] uppercase tracking-[0.4em] text-white/60 mb-2">
                  The Signature
                </p>
                <h3 className="text-4xl font-bold tracking-tighter uppercase text-white mb-4">
                  Shop Essentials
                </h3>
                <Link
                  href="/collections"
                  className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white font-bold border-b border-white/40 pb-1 hover:border-white transition-colors"
                >
                  Explore
                  <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>

            {/* Right Cards */}
            <div className="md:col-span-5 grid grid-rows-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative aspect-[4/3] bg-[#F0EDE8] group cursor-pointer overflow-hidden"
              >
                <Image
                  src="/images/lifestyle1.png"
                  alt="The Minimalist"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[1400ms] ease-out"
                  sizes="30vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-700" />
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="text-[9px] uppercase tracking-[0.4em] text-white/60 mb-1">
                    The Minimalist
                  </p>
                  <h3 className="text-2xl font-bold tracking-tighter uppercase text-white">
                    Shop Shirts
                  </h3>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative aspect-[4/3] bg-[#2C2C2C] group cursor-pointer overflow-hidden"
              >
                <Image
                  src="/images/hero.png"
                  alt="The Builder"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[1400ms] ease-out grayscale"
                  sizes="30vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-colors duration-700" />
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="text-[9px] uppercase tracking-[0.4em] text-white/60 mb-1">
                    The Builder
                  </p>
                  <h3 className="text-2xl font-bold tracking-tighter uppercase text-white">
                    Shop Outerwear
                  </h3>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: Brand Features ── */}
      <section className="py-20 border-y border-border/50 bg-background px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 md:divide-x divide-border/50">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col gap-4 md:px-16 first:pl-0 last:pr-0"
            >
              <div className="text-muted-foreground">{feat.icon}</div>
              <h4 className="text-sm font-bold uppercase tracking-[0.15em]">
                {feat.title}
              </h4>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SECTION: Testimonials ── */}
      <section className="py-28 px-6 md:px-12 bg-[#0D0D0D]">
        <div className="max-w-screen-2xl mx-auto">
          <SectionLabel>Community</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-light tracking-tighter uppercase text-white mb-20 font-[family-name:var(--font-montserrat)]"
          >
            Worn by the<br />
            <span className="font-black text-[#D8CBB8]">Ambitious</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-white/10 p-8 hover:border-white/20 transition-colors"
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={12} fill="#D8CBB8" className="text-[#D8CBB8]" />
                  ))}
                </div>
                <p className="text-base text-white/70 font-light leading-relaxed mb-8 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex flex-col gap-1 pt-6 border-t border-white/10">
                  <p className="text-sm font-bold text-white tracking-tight">
                    {t.name}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-[#7A7A6D]">
                    {t.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION: Newsletter ── */}
      <section className="py-32 px-6 md:px-12 bg-[#D8CBB8]">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Early Access</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-light tracking-tighter uppercase leading-[0.9] text-[#0D0D0D] font-[family-name:var(--font-montserrat)]"
            >
              Join the<br />
              <span className="font-black">Community</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <p className="text-base text-[#0D0D0D]/60 font-light leading-relaxed max-w-md">
              Get early access to drops, exclusive content and member-only discounts.
              No noise. Just the essential updates.
            </p>
            <div className="relative flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-transparent border-b-2 border-[#0D0D0D]/30 py-4 pr-16 text-sm focus:border-[#0D0D0D] transition-colors outline-none placeholder:text-[#0D0D0D]/40 text-[#0D0D0D]"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 p-3 hover:scale-110 transition-transform text-[#0D0D0D]">
                <ArrowRight size={20} strokeWidth={1.5} />
              </button>
            </div>
            <p className="text-[9px] uppercase tracking-widest text-[#0D0D0D]/40">
              No spam. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
