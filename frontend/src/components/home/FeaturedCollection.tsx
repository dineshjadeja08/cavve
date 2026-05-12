import React from "react";
import ProductCard from "../product/ProductCard";
import Link from "next/link";
import { getProducts } from "@/app/actions/product";

const FeaturedCollection = async () => {
  const products = await getProducts();
  
  // Use first 3 products for the featured section
  const displayProducts = products.length > 0 ? products.slice(0, 3) : [
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

  return (
    <section className="py-40 bg-background overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <p className="text-[10px] tracking-[0.5em] uppercase mb-6 opacity-30">Selection 001 / Edition</p>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
              The Core <br /> <span className="text-secondary">Essentials</span>
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-6">
            <p className="text-xs tracking-widest opacity-40 max-w-xs lg:text-right uppercase leading-relaxed">
              BUILT FOR PERMANENCE. ENGINEERED FROM 240 GSM HEAVYWEIGHT COTTON FOR THE ULTIMATE STRUCTURED DRAPE.
            </p>
            <Link 
              href="/collections" 
              className="text-[10px] tracking-[0.3em] font-bold border-b border-primary/20 pb-2 hover:border-primary transition-all duration-300 uppercase"
            >
              SHOP ALL PIECES
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-1">
          {displayProducts.map((product: any) => (
            <div key={product.id} className="reveal-active">
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
      </div>
    </section>
  );
};

export default FeaturedCollection;
