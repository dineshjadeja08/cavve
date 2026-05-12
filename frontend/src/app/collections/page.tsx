import React from "react";
import ProductCard from "@/components/product/ProductCard";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { getProducts } from "@/app/actions/product";
import Image from "next/image";

const CollectionsPage = async () => {
  const products = await getProducts();

  const displayProducts = products.length > 0 ? products : [
    {
      id: "1",
      name: "Jet Black Oversized Tee",
      price: 2999,
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1974&auto=format&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2070&auto=format&fit=crop",
      slug: "jet-black-oversized-tee",
      isNew: true
    },
    {
      id: "2",
      name: "Stone Beige Oversized Tee",
      price: 2999,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2030&auto=format&fit=crop",
      slug: "stone-beige-oversized-tee",
      isNew: true
    },
    {
      id: "3",
      name: "Soft White Oversized Tee",
      price: 2999,
      image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=1974&auto=format&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=2127&auto=format&fit=crop",
      slug: "soft-white-oversized-tee",
      isNew: true
    }
  ];

  const filterOptions = [
    { name: "SIZE", options: ["S", "M", "L", "XL", "XXL"] },
    { name: "COLOR", options: ["BLACK", "BEIGE", "WHITE", "GREY"] },
    { name: "FIT", options: ["OVERSIZED", "RELAXED", "REGULAR"] },
    { name: "PRICE", options: ["UNDER ₹2000", "₹2000 - ₹4000", "OVER ₹4000"] },
  ];

  return (
    <div className="bg-background min-h-screen pt-20">
      {/* Cinematic Top Banner */}
      <section className="relative h-[40vh] md:h-[60vh] w-full flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1974&auto=format&fit=crop" 
            alt="Collection Banner" 
            fill 
            className="object-cover grayscale opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
        </div>
        <div className="relative z-20 px-6 md:px-20 max-w-7xl">
          <p className="text-[10px] tracking-[0.6em] uppercase mb-6 text-white/50">Shop / Drop 001</p>
          <h1 className="text-5xl md:text-[8vw] font-black tracking-tighter uppercase text-white leading-[0.8]">
            Essential <br /> <span className="text-white/20">Drop</span>
          </h1>
        </div>
      </section>

      {/* Sticky Toolbar */}
      <div className="sticky top-20 z-40 bg-background/90 backdrop-blur-xl border-b border-border/5 px-6 md:px-12 py-6">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          <button className="flex items-center gap-4 text-[10px] font-bold tracking-[0.3em] uppercase group">
            <SlidersHorizontal size={14} className="group-hover:rotate-180 transition-transform duration-700" />
            SHOW FILTERS
          </button>
          
          <div className="flex items-center gap-8">
            <span className="text-[10px] tracking-[0.2em] font-bold opacity-30 hidden md:block uppercase">{displayProducts.length} ARTICLES FOUND</span>
            <button className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase hover:opacity-50 transition-opacity">
              SORT BY <ChevronDown size={14} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row">
        {/* Sidebar Filters - Redesigned */}
        <aside className="w-full md:w-80 py-16 px-6 md:px-12 border-r border-border/5 hidden md:block h-fit sticky top-40">
          {filterOptions.map((filter) => (
            <div key={filter.name} className="mb-16">
              <h3 className="text-[10px] font-bold tracking-[0.4em] mb-8 opacity-40 uppercase">{filter.name}</h3>
              <div className="flex flex-col space-y-4">
                {filter.options.map((option) => (
                  <label key={option} className="flex items-center gap-4 cursor-pointer group">
                    <div className="w-4 h-4 border border-border/30 rounded-none flex items-center justify-center transition-all group-hover:border-primary">
                       <div className="w-1.5 h-1.5 bg-primary scale-0 group-hover:scale-100 transition-transform duration-300" />
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-40 group-hover:opacity-100 transition-opacity">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </aside>

        {/* Product Grid - Redesigned */}
        <main className="flex-grow p-1 md:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-8 md:gap-y-16">
            {displayProducts.map((product: any) => (
              <div key={product.id}>
                <ProductCard 
                  id={product.id}
                  name={product.name}
                  price={Number(product.price)}
                  image={product.image || product.images?.[0]}
                  hoverImage={product.hoverImage || product.images?.[1] || product.image}
                  slug={product.slug}
                  isNew={product.isNew}
                />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CollectionsPage;
