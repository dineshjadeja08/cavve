"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Grid3x3, Heart, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "/", Icon: Home },
  { name: "Search", href: "/search", Icon: Search },
  { name: "Shop", href: "/collections", Icon: Grid3x3 },
  { name: "Wishlist", href: "/wishlist", Icon: Heart },
  { name: "Cart", href: "/cart", Icon: ShoppingBag, badge: 2 },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0D0D0D]/95 backdrop-blur-xl border-t border-white/5">
      <div className="flex items-center justify-around px-2 py-3 pb-safe">
        {navItems.map(({ name, href, Icon, badge }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={name}
              href={href}
              className="relative flex flex-col items-center gap-1 py-1 px-3"
              aria-label={name}
            >
              <div className="relative">
                <Icon
                  size={22}
                  strokeWidth={isActive ? 2 : 1.5}
                  className={cn(
                    "transition-colors",
                    isActive ? "text-white" : "text-white/40"
                  )}
                />
                {badge && badge > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#D8CBB8] text-[#0D0D0D] text-[7px] w-4 h-4 flex items-center justify-center font-black rounded-full">
                    {badge}
                  </span>
                )}
              </div>
              <span
                className={cn(
                  "text-[8px] uppercase tracking-widest transition-colors",
                  isActive ? "text-white" : "text-white/30"
                )}
              >
                {name}
              </span>
              {isActive && (
                <motion.div
                  layoutId="mobile-nav-indicator"
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-[#D8CBB8]"
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
