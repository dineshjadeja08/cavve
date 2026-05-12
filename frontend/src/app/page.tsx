import Hero from "@/components/home/Hero";
import FeaturedCollection from "@/components/home/FeaturedCollection";
import IconStrip from "@/components/home/IconStrip";
import EditorialSplit from "@/components/home/EditorialSplit";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col bg-background">
      <Hero />
      
      <IconStrip />

      <FeaturedCollection />

      <EditorialSplit />

      {/* Philosophy Section - Immersive */}
      <section className="py-60 bg-white text-black px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] grain-texture" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p className="text-[10px] tracking-[0.5em] uppercase mb-16 opacity-30">Our Creed</p>
          <h2 className="text-5xl md:text-[8vw] font-black tracking-tighter uppercase mb-16 leading-[0.85]">
            Discipline <br /> is the ultimate <br /> <span className="text-secondary">Distinction.</span>
          </h2>
          <div className="w-24 h-[1px] bg-black/20 mx-auto mb-16" />
          <p className="text-sm md:text-xl tracking-widest leading-relaxed opacity-60 max-w-2xl mx-auto mb-20 uppercase">
            CAVVE WAS BORN FROM THE BELIEF THAT TRUE LUXURY IS NOT LOUD. IT IS THE SILENT CONFIDENCE OF A MAN WHO CONTROLS HIS WORLD.
          </p>
          <Link 
            href="/about"
            className="group inline-flex items-center gap-6 text-[10px] tracking-[0.4em] font-bold border border-black/10 px-16 py-6 hover:bg-black hover:text-white transition-all duration-700 uppercase"
          >
            THE BRAND STORY <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
          </Link>
        </div>
      </section>

      {/* Editorial Grid / Instagram Preview */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-1 bg-border/5">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="relative aspect-square overflow-hidden group">
            <div className="absolute inset-0 bg-black/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <img 
              src={`https://images.unsplash.com/photo-${i === 1 ? '1552374196-1ab2a1c593e8' : i === 2 ? '1488161628813-244a3dc07d51' : i === 3 ? '1539106609214-0d5569e8020a' : '1503342217505-b0a15ec3261c'}?q=80&w=1974&auto=format&fit=crop`}
              alt="Social Preview"
              className="w-full h-full object-cover grayscale transition-transform duration-[2s] group-hover:scale-110"
            />
          </div>
        ))}
      </section>

      {/* Newsletter - Minimalist */}
      <section className="py-40 bg-background border-t border-border/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-8">Access the Inner Circle</h2>
          <p className="text-[10px] tracking-[0.4em] opacity-40 mb-16 uppercase">EXCLUSIVE ACCESS TO UPCOMING DROPS AND EDITORIALS.</p>
          <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS" 
              className="flex-grow bg-transparent border-b border-border/20 px-4 py-5 text-[10px] tracking-[0.3em] font-bold outline-none focus:border-primary transition-colors"
            />
            <button className="bg-primary text-primary-foreground px-12 py-5 text-[10px] tracking-[0.4em] font-bold hover:bg-accent transition-all duration-500 uppercase">
              JOIN NOW
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
