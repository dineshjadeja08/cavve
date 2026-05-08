"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const timelineItems = [
  {
    year: "2024",
    title: "The Idea",
    desc: "Born out of frustration with loud, logo-heavy fashion. CAVVE was conceived as an antidote — quiet, premium, intentional.",
  },
  {
    year: "2025",
    title: "First Fabric",
    desc: "Sourced our first 240 GSM cotton. Spent months perfecting the weight, texture, and silhouette before a single piece was produced.",
  },
  {
    year: "2026",
    title: "Drop 001",
    desc: "The Everyday Uniform launches. A collection of essentials designed to be worn every single day with confidence.",
  },
];

const philosophyPoints = [
  {
    title: "Discipline",
    desc: "Every stitch is intentional. We design each piece with the same discipline we want our customer to wear it with.",
  },
  {
    title: "Simplicity",
    desc: "Removing the noise allows the true character to shine. Simplicity is a choice, not a limitation.",
  },
  {
    title: "Confidence",
    desc: "True confidence is quiet. Our pieces are for men who let their actions speak louder than their wardrobe.",
  },
  {
    title: "Ambition",
    desc: "We build for those who are building something. Founders, creators, athletes, professionals.",
  },
];

function SectionLabel({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className={`w-8 h-[1px] ${dark ? "bg-white/20" : "bg-muted-foreground/40"}`} />
      <p className={`text-[10px] uppercase tracking-[0.4em] font-medium ${dark ? "text-[#7A7A6D]" : "text-muted-foreground"}`}>
        {children}
      </p>
    </div>
  );
}

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />

      {/* ── Hero ── */}
      <div
        ref={heroRef}
        className="relative h-[85vh] overflow-hidden"
      >
        <motion.div style={{ y: imgY }} className="absolute inset-0 scale-110">
          <motion.div
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1.05, opacity: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src="/images/about_hero.png"
              alt="CAVVE — Built for the Ambitious"
              fill
              priority
              className="object-cover grayscale"
              sizes="100vw"
            />
          </motion.div>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70" />

        <div className="absolute inset-0 flex flex-col justify-end px-8 md:px-16 pb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-[10px] uppercase tracking-[0.5em] text-[#D8CBB8] mb-5 font-medium"
          >
            Our Philosophy
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-8xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.85] text-white font-[family-name:var(--font-montserrat)]"
          >
            Built for<br />
            <span className="italic font-light">The Ambitious</span>
          </motion.h1>
        </div>
      </div>

      {/* ── Mission ── */}
      <section className="py-28 px-6 md:px-12 bg-background">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>The Mission</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-light tracking-tighter uppercase leading-[0.95] mb-8 font-[family-name:var(--font-montserrat)]"
            >
              A New Standard<br />
              <span className="font-black">Of Quiet Luxury</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground leading-relaxed font-light max-w-lg"
            >
              CAVVE was founded on the principle that modern men deserve clothing that
              reflects their internal drive. We don&apos;t create trends; we create
              uniforms for those who are building the future.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square bg-[#F0EDE8] overflow-hidden"
          >
            <Image
              src="/images/lifestyle1.png"
              alt="CAVVE brand story"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Philosophy Grid ── */}
      <section className="py-28 px-6 md:px-12 bg-[#0D0D0D]">
        <div className="max-w-screen-2xl mx-auto">
          <SectionLabel dark>The CAVVE Code</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-light tracking-tighter uppercase text-white mb-20 font-[family-name:var(--font-montserrat)]"
          >
            Our Core<br />
            <span className="font-black text-[#D8CBB8]">Principles</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
            {philosophyPoints.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 border-b md:border-b-0 border-r border-white/10 last:border-r-0 hover:bg-white/5 transition-colors"
              >
                <p className="text-[10px] uppercase tracking-[0.4em] text-[#D8CBB8] mb-5 font-medium">
                  0{i + 1}
                </p>
                <h3 className="text-2xl font-light tracking-tight uppercase text-white mb-4 font-[family-name:var(--font-montserrat)]">
                  {p.title}
                </h3>
                <p className="text-sm text-white/40 font-light leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Editorial Image Grid ── */}
      <section className="py-28 px-6 md:px-12 bg-background">
        <div className="max-w-screen-2xl mx-auto">
          <SectionLabel>Editorial</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light tracking-tighter uppercase mb-16 font-[family-name:var(--font-montserrat)]"
          >
            The Visual<br />
            <span className="font-black">Identity</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
            {[
              { src: "/images/collection1.png", offset: "md:mt-0" },
              { src: "/images/hero.png", offset: "md:mt-16" },
              { src: "/images/lifestyle1.png", offset: "md:mt-32" },
            ].map(({ src, offset }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative aspect-[3/4] grayscale hover:grayscale-0 transition-all duration-1000 ${offset}`}
              >
                <Image
                  src={src}
                  alt="Editorial"
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-28 px-6 md:px-12 bg-[#F5F5F2]">
        <div className="max-w-screen-2xl mx-auto">
          <SectionLabel>The Journey</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-light tracking-tighter uppercase mb-20 font-[family-name:var(--font-montserrat)]"
          >
            How We<br />
            <span className="font-black">Got Here</span>
          </motion.h2>

          <div className="flex flex-col gap-0">
            {timelineItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid grid-cols-12 gap-6 border-b border-border/50 py-10"
              >
                <div className="col-span-2 md:col-span-1">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-medium pt-1">
                    {item.year}
                  </p>
                </div>
                <div className="col-span-10 md:col-span-11 flex flex-col gap-2">
                  <h3 className="text-2xl font-light tracking-tight uppercase font-[family-name:var(--font-montserrat)]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-2xl">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Large CTA ── */}
      <section className="py-40 px-6 md:px-12 bg-[#D8CBB8] overflow-hidden">
        <div className="max-w-screen-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-[15vw] font-black tracking-tighter uppercase leading-[0.8] text-[#0D0D0D] mb-12 font-[family-name:var(--font-montserrat)]"
          >
            Self<br />Improvement
          </motion.h2>
          <p className="text-sm uppercase tracking-[0.5em] text-[#0D0D0D]/60 font-medium mb-10 max-w-xl mx-auto leading-relaxed">
            CAVVE is more than a brand. It is a community of men dedicated to the
            pursuit of excellence in all aspects of life.
          </p>
          <Link
            href="/collections"
            className="inline-flex items-center gap-3 px-12 py-5 bg-[#0D0D0D] text-[#F5F5F2] text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#2C2C2C] transition-colors"
          >
            Shop the Collection
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
