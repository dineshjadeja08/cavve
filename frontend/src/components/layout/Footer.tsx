import React from "react";
import Link from "next/link";
import { Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/10 pt-20 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-black tracking-[0.3em] mb-6">CAVVE</h2>
          <p className="text-[10px] tracking-widest leading-relaxed opacity-60 max-w-xs">
            WEAR DISCIPLINE. BUILT FOR THE AMBITIOUS, THE CREATIVE, AND THE DISCIPLINED. PREMIUM MINIMALISM FOR THE MODERN MAN.
          </p>
          <div className="flex space-x-4 mt-8">
            <Instagram size={18} className="hover:opacity-50 cursor-pointer transition-opacity" />
            <Twitter size={18} className="hover:opacity-50 cursor-pointer transition-opacity" />
            <Facebook size={18} className="hover:opacity-50 cursor-pointer transition-opacity" />
          </div>
        </div>

        {/* Links Sections */}
        <div>
          <h3 className="text-[10px] font-bold tracking-[0.2em] mb-6">SHOP</h3>
          <ul className="space-y-4">
            <li><Link href="/collections" className="text-[10px] tracking-widest opacity-60 hover:opacity-100 transition-opacity">ALL PRODUCTS</Link></li>
            <li><Link href="/collections/new-arrivals" className="text-[10px] tracking-widest opacity-60 hover:opacity-100 transition-opacity">NEW ARRIVALS</Link></li>
            <li><Link href="/collections/featured" className="text-[10px] tracking-widest opacity-60 hover:opacity-100 transition-opacity">FEATURED</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[10px] font-bold tracking-[0.2em] mb-6">SUPPORT</h3>
          <ul className="space-y-4">
            <li><Link href="/shipping" className="text-[10px] tracking-widest opacity-60 hover:opacity-100 transition-opacity">SHIPPING & RETURNS</Link></li>
            <li><Link href="/contact" className="text-[10px] tracking-widest opacity-60 hover:opacity-100 transition-opacity">CONTACT US</Link></li>
            <li><Link href="/faq" className="text-[10px] tracking-widest opacity-60 hover:opacity-100 transition-opacity">FAQ</Link></li>
            <li><Link href="/size-guide" className="text-[10px] tracking-widest opacity-60 hover:opacity-100 transition-opacity">SIZE GUIDE</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-[10px] font-bold tracking-[0.2em] mb-6">NEWSLETTER</h3>
          <p className="text-[10px] tracking-widest opacity-60 mb-6 leading-relaxed">
            JOIN THE INNER CIRCLE. GET EARLY ACCESS TO DROPS.
          </p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="EMAIL ADDRESS" 
              className="w-full bg-transparent border-b border-border/20 py-2 text-[10px] tracking-widest outline-none focus:border-primary transition-colors"
            />
            <button className="absolute right-0 bottom-2 text-[10px] font-bold tracking-[0.2em] hover:opacity-50 transition-opacity">
              JOIN
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-border/5 flex flex-col md:flex-row justify-between items-center text-[8px] tracking-[0.3em] opacity-40">
        <p>© 2024 CAVVE. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/privacy">PRIVACY POLICY</Link>
          <Link href="/terms">TERMS OF SERVICE</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
