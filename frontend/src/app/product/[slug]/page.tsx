import React from "react";
import { getProductBySlug } from "@/app/actions/product";
import ProductDetailClient from "./ProductDetailClient";
import { notFound } from "next/navigation";

const ProductDetailPage = async ({ params }: { params: { slug: string } }) => {
  const product = await getProductBySlug(params.slug);

  // If no product in DB, use placeholder for now to avoid 404 while setting up
  const displayProduct = product || {
    name: "Jet Black Oversized Tee",
    price: 2999,
    description: "THE FOUNDATION OF DISCIPLINE. A HEAVYWEIGHT 240 GSM SINGLE JERSEY COTTON T-SHIRT WITH A STRUCTURED DRAPE, DROPPED SHOULDERS, AND A MATTE FINISH. BUILT FOR PERMANENCE.",
    features: [
      "240 GSM HEAVYWEIGHT COTTON",
      "OVERSIZED FIT",
      "DROPPED SHOULDERS",
      "PREMIUM RIBBED COLLAR",
      "MINIMAL EMBROIDERED LOGO AT NAPE"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=1974&auto=format&fit=crop",
    ]
  };

  return <ProductDetailClient product={displayProduct} />;
};

export default ProductDetailPage;
