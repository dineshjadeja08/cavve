"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(
      headlineRef.current,
      { y: 150, opacity: 0, skewY: 10 },
      { y: 0, opacity: 1, skewY: 0, duration: 1.8, delay: 0.5 }
    )
    .fromTo(
      sublineRef.current,
      { opacity: 0, letterSpacing: "1.5em" },
      { opacity: 0.5, letterSpacing: "0.5em", duration: 2 },
      "-=1.2"
    );
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0D0D0D]"
    >
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-60 scale-110 motion-safe:animate-[parallax_20s_infinite_linear]" />
        <div className="grain-texture z-20" />
        <div className="matte-overlay z-20" />
      </div>

      <div className="relative z-30 text-center px-6 max-w-7xl mx-auto">
        <p 
          ref={sublineRef}
          className="text-white text-[10px] md:text-xs font-bold mb-8 tracking-[0.5em] uppercase opacity-0"
        >
          BUILT FOR THE AMBITIOUS
        </p>
        
        <h1 
          ref={headlineRef}
          className="text-white text-6xl md:text-[10vw] font-black tracking-[-0.07em] mb-16 uppercase leading-[0.8] opacity-0"
        >
          Wear <br /> <span className="text-outline text-transparent opacity-20">Discipline</span>
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
          <Link 
            href="/collections"
            className="group relative px-16 py-6 bg-white text-black text-[10px] tracking-[0.3em] font-bold uppercase transition-all duration-500 hover:bg-transparent hover:text-white border border-white overflow-hidden"
          >
            <span className="relative z-10">SHOP DROP 001</span>
            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
          </Link>
          <Link 
            href="/lookbook"
            className="text-white text-[10px] tracking-[0.3em] font-bold border-b border-white/20 pb-2 hover:border-white transition-all duration-300 uppercase"
          >
            EXPLORE LOOKBOOK
          </Link>
        </div>
      </div>

      {/* Side Brand Tag */}
      <div className="absolute left-12 bottom-12 hidden lg:block z-30">
        <p className="text-white/20 text-[8px] tracking-[1em] font-bold uppercase vertical-text">
          EST. 2024 / EDITION 001
        </p>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 3, duration: 1.5 }}
        className="absolute bottom-12 right-12 flex flex-col items-center gap-6 z-30"
      >
        <span className="text-white text-[8px] tracking-[0.5em] uppercase rotate-90 origin-right">SCROLL</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
      </motion.div>

      <style jsx>{`
        .text-outline {
          -webkit-text-stroke: 1px white;
        }
        .vertical-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
        @keyframes parallax {
          0% { transform: scale(1.1) translateY(0); }
          50% { transform: scale(1.15) translateY(-2%); }
          100% { transform: scale(1.1) translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
