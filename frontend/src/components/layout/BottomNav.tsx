"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, ShoppingBag, Heart, LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";

const BottomNav = () => {
  const pathname = usePathname();

  const navItems = [
    { icon: Home, label: "HOME", href: "/" },
    { icon: LayoutGrid, label: "SHOP", href: "/collections" },
    { icon: Search, label: "SEARCH", href: "/search" },
    { icon: Heart, label: "WISHLIST", href: "/wishlist" },
    { icon: ShoppingBag, label: "BAG", href: "/cart" },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-background/80 backdrop-blur-xl border-t border-border/5 px-6 py-4 z-50">
      <div className="flex justify-between items-center">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.label}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1.5 transition-all duration-300",
                isActive ? "text-primary scale-110" : "text-muted-foreground opacity-40"
              )}
            >
              <item.icon size={20} strokeWidth={isActive ? 2 : 1.5} />
              <span className="text-[8px] font-bold tracking-[0.2em] uppercase">{item.label}</span>
              {isActive && (
                 <div className="w-1 h-1 bg-primary rounded-full mt-1" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
