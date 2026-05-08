"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Clock } from "lucide-react";

const articles = [
  {
    id: "1",
    title: "The Art of the Capsule Wardrobe",
    excerpt:
      "Why owning less actually means getting dressed better. The case for a minimal, intentional wardrobe built around quality essentials.",
    category: "Style",
    readTime: "6 min",
    date: "May 2026",
    image: "/images/lifestyle1.png",
    featured: true,
  },
  {
    id: "2",
    title: "Morning Routines of High Performers",
    excerpt:
      "The habits that separate the disciplined from the distracted. A deep look into the morning rituals that prime for peak performance.",
    category: "Productivity",
    readTime: "8 min",
    date: "Apr 2026",
    image: "/images/hero.png",
  },
  {
    id: "3",
    title: "Fragrance for Men Who Know",
    excerpt:
      "The unspoken language of scent. A guide to building your signature fragrance wardrobe without overthinking it.",
    category: "Grooming",
    readTime: "5 min",
    date: "Apr 2026",
    image: "/images/collection_banner.png",
  },
  {
    id: "4",
    title: "Building Your Brand as a Creator",
    excerpt:
      "How to position yourself authentically in a world of noise. The quiet-confidence approach to personal branding.",
    category: "Entrepreneurship",
    readTime: "10 min",
    date: "Mar 2026",
    image: "/images/collection1.png",
  },
  {
    id: "5",
    title: "The Modern Gym Wardrobe",
    excerpt:
      "What to wear when performance meets aesthetics. A minimal guide to gym-to-street dressing.",
    category: "Style",
    readTime: "4 min",
    date: "Mar 2026",
    image: "/images/product_overshirt.png",
  },
];

const categories = ["All", "Style", "Productivity", "Grooming", "Entrepreneurship", "Mindset"];

export default function JournalPage() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-[calc(var(--announcement-h)+100px)] pb-20 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto border-b border-border/50 pb-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4 font-medium"
          >
            The CAVVE Journal
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl font-light tracking-tighter uppercase font-[family-name:var(--font-montserrat)]"
          >
            Stories for<br />
            <span className="font-black">The Ambitious</span>
          </motion.h1>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-8 pt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors pb-1 border-b border-transparent hover:border-foreground"
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Article */}
      <section className="px-6 md:px-12 mb-20">
        <div className="max-w-screen-2xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border/50 hover:border-foreground/20 transition-colors"
          >
            <div className="relative aspect-[4/3] lg:aspect-auto bg-[#F0EDE8] overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-[1200ms]"
                sizes="50vw"
              />
            </div>
            <div className="flex flex-col justify-between p-10 md:p-14">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-[#D8CBB8] bg-[#0D0D0D] px-3 py-1.5">
                    {featured.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Clock size={12} strokeWidth={1.5} />
                    <span className="text-[9px] uppercase tracking-widest">{featured.readTime} read</span>
                  </div>
                </div>
                <h2 className="text-3xl md:text-5xl font-light tracking-tighter uppercase leading-[0.95] mb-6 font-[family-name:var(--font-montserrat)] group-hover:opacity-70 transition-opacity">
                  {featured.title}
                </h2>
                <p className="text-base text-muted-foreground font-light leading-relaxed mb-10">
                  {featured.excerpt}
                </p>
              </div>
              <Link
                href={`/journal/${featured.id}`}
                className="group/btn inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold border-b border-border pb-1 hover:border-foreground transition-colors self-start"
              >
                Read Article
                <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Article Grid */}
      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rest.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.8 }}
              className="group flex flex-col gap-4"
            >
              <Link href={`/journal/${article.id}`} className="block overflow-hidden relative aspect-[4/3] bg-[#F0EDE8]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-[1.05] transition-transform duration-[1200ms]"
                  sizes="25vw"
                />
              </Link>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-muted-foreground bg-muted/30 px-2 py-1">
                    {article.category}
                  </span>
                  <span className="text-[8px] uppercase tracking-widest text-muted-foreground">
                    {article.readTime}
                  </span>
                </div>
                <Link href={`/journal/${article.id}`}>
                  <h3 className="text-lg font-light tracking-tight uppercase leading-[1.1] group-hover:opacity-60 transition-opacity font-[family-name:var(--font-montserrat)]">
                    {article.title}
                  </h3>
                </Link>
                <p className="text-xs text-muted-foreground font-light leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
