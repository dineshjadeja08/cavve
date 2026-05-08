"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, AtSign, MessageCircle, Play } from "lucide-react";
import { motion } from "framer-motion";

const shopLinks = [
  { name: "New Arrivals", href: "/collections?filter=new" },
  { name: "Essentials", href: "/collections?category=essentials" },
  { name: "Pants & Trousers", href: "/collections?category=pants" },
  { name: "Shirts & Overshirts", href: "/collections?category=shirts" },
  { name: "Co-ord Sets", href: "/collections?category=sets" },
  { name: "Drop 001", href: "/drop-001" },
];

const helpLinks = [
  { name: "Shipping & Returns", href: "/shipping" },
  { name: "Size Guide", href: "/size-guide" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact Us", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com", Icon: AtSign },
  { name: "Twitter", href: "https://twitter.com", Icon: MessageCircle },
  { name: "YouTube", href: "https://youtube.com", Icon: Play },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-[#F5F5F2]">
      {/* Top CTA Banner */}
      <div className="border-b border-white/5 px-6 md:px-12 py-10">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#7A7A6D] mb-3">
              New Drop Available
            </p>
            <h3 className="text-3xl md:text-5xl font-light tracking-tighter uppercase font-[family-name:var(--font-montserrat)]">
              Drop 001 —{" "}
              <span className="font-black text-[#D8CBB8]">Now Live</span>
            </h3>
          </div>
          <Link
            href="/drop-001"
            className="group flex items-center gap-3 px-10 py-4 border border-white/20 hover:border-white transition-all text-[10px] uppercase tracking-[0.3em] font-bold whitespace-nowrap shrink-0"
          >
            Shop the Drop
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="px-6 md:px-12 pt-20 pb-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            {/* Brand Column */}
            <div className="flex flex-col gap-8 lg:col-span-1">
              <div className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-4xl font-black tracking-[0.3em] uppercase font-[family-name:var(--font-montserrat)]"
                >
                  CAVVE
                </Link>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#D8CBB8] font-medium">
                  Wear Discipline
                </p>
              </div>
              <p className="text-sm text-white/40 leading-relaxed font-light max-w-xs">
                Built for ambition. Designed for the modern man. We create
                essentials for a life of discipline and confidence.
              </p>
              <div className="flex gap-5">
                {socialLinks.map(({ name, href, Icon }) => (
                  <Link
                    key={name}
                    href={href}
                    className="group text-white/30 hover:text-white transition-colors"
                    aria-label={name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={16} strokeWidth={1.5} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Shop Links */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[10px] uppercase tracking-[0.35em] font-bold text-[#D8CBB8]">
                Shop
              </h4>
              <ul className="flex flex-col gap-3">
                {shopLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group text-sm text-white/40 hover:text-white transition-colors flex items-center gap-2"
                    >
                      {link.name}
                      <ArrowUpRight
                        size={10}
                        className="opacity-0 group-hover:opacity-60 -translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Links */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[10px] uppercase tracking-[0.35em] font-bold text-[#D8CBB8]">
                Help
              </h4>
              <ul className="flex flex-col gap-3">
                {helpLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[10px] uppercase tracking-[0.35em] font-bold text-[#D8CBB8]">
                Stay Updated
              </h4>
              <p className="text-sm text-white/40 font-light leading-relaxed">
                Join the CAVVE community for early access to drops and exclusive
                content.
              </p>
              <div className="relative mt-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-white/20 focus:border-white/60 py-3 pr-12 text-sm transition-colors outline-none placeholder:text-white/20 text-white"
                />
                <button
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:text-[#D8CBB8] transition-colors text-white/40"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={16} strokeWidth={1.5} />
                </button>
              </div>
              <p className="text-[9px] uppercase tracking-widest text-white/20">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
            <p className="text-[9px] uppercase tracking-widest text-white/20">
              © 2026 CAVVE — All rights reserved. Built with discipline.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-[9px] uppercase tracking-widest text-white/20">
                Accepted Payments
              </span>
              {["UPI", "Visa", "MC", "Rupay"].map((p) => (
                <span key={p} className="text-[9px] uppercase tracking-widest text-white/30 font-bold">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
