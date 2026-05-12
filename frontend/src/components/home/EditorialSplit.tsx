import React from "react";
import Link from "next/link";
import Image from "next/image";

const EditorialSplit = () => {
  return (
    <section className="bg-[#0D0D0D] text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side: Immersive Image */}
        <div className="relative h-[80vh] lg:h-screen overflow-hidden group">
          <Image 
            src="https://images.unsplash.com/photo-1550993014-998846be068f?q=80&w=1974&auto=format&fit=crop" 
            alt="Editorial 01" 
            fill 
            className="object-cover grayscale transition-transform duration-[3s] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-1000" />
          <div className="absolute bottom-12 left-12 z-10">
            <p className="text-[10px] tracking-[0.5em] mb-4 opacity-50">01 / CONCEPT</p>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-8">Quiet <br /> Confidence</h3>
            <Link 
              href="/collections" 
              className="inline-block border border-white/20 px-10 py-4 text-[10px] tracking-[0.3em] font-bold uppercase hover:bg-white hover:text-black transition-all duration-500"
            >
              DISCOVER
            </Link>
          </div>
        </div>

        {/* Right Side: Immersive Image */}
        <div className="relative h-[80vh] lg:h-screen overflow-hidden group border-l border-white/5">
          <Image 
            src="https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1974&auto=format&fit=crop" 
            alt="Editorial 02" 
            fill 
            className="object-cover grayscale transition-transform duration-[3s] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-1000" />
          <div className="absolute bottom-12 left-12 z-10">
            <p className="text-[10px] tracking-[0.5em] mb-4 opacity-50">02 / TEXTURE</p>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-8">The <br /> Heavyweight</h3>
            <Link 
              href="/collections" 
              className="inline-block border border-white/20 px-10 py-4 text-[10px] tracking-[0.3em] font-bold uppercase hover:bg-white hover:text-black transition-all duration-500"
            >
              EXPLORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialSplit;
