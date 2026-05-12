import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 opacity-40">
           <div className="w-full h-full bg-[#1a1a1a] flex items-center justify-center">
              <span className="text-white/5 text-[15vw] font-black select-none">PHILOSOPHY</span>
           </div>
        </div>
        <div className="relative z-10 text-center px-6">
          <p className="text-[10px] tracking-[0.5em] uppercase mb-6 opacity-60 text-white">Our Story</p>
          <h1 className="text-white text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">Built for <br /> Permanence</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-32 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="space-y-24">
          <div className="space-y-8">
            <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">The Origin</h2>
            <p className="text-xl md:text-3xl tracking-tight leading-snug">
              CAVVE WAS FOUNDED IN 2024 WITH A SINGLE MISSION: TO CREATE THE UNIFORM FOR THE DISCIPLINED MIND. IN A WORLD OF FAST FASHION AND NOISE, WE CHOOSE SILENCE, STRUCTURE, AND QUALITY.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
               <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase">The Discipline</h3>
               <p className="text-[11px] tracking-widest leading-relaxed opacity-60 uppercase">
                 WE BELIEVE THAT HOW YOU DRESS IS A REFLECTION OF YOUR INTERNAL STANDARDS. CAVVE IS NOT JUST CLOTHING; IT IS A VISUAL COMMITMENT TO AMBITION AND SELF-CONTROL.
               </p>
            </div>
            <div className="space-y-6">
               <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase">The Craft</h3>
               <p className="text-[11px] tracking-widest leading-relaxed opacity-60 uppercase">
                 OUR GARMENTS ARE ENGINEERED FROM THE HIGHEST GRADE HEAVYWEIGHT COTTON. EVERY STITCH IS CALCULATED. EVERY DROP SHOULDER IS MEASURED. NO COMPROMISE.
               </p>
            </div>
          </div>

          <div className="py-24 border-y border-border/5">
             <div className="flex flex-col items-center text-center">
                <p className="text-[10px] tracking-[0.5em] uppercase mb-12 opacity-40">The Founder's Vision</p>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-12">"WEAR YOUR DISCIPLINE <br /> UNTIL IT BECOMES <br /> WHO YOU ARE."</h2>
                <div className="w-12 h-[1px] bg-primary opacity-20" />
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
