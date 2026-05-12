"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  BarChart3, 
  Users, 
  Settings, 
  LogOut, 
  ExternalLink 
} from "lucide-react";
import { cn } from "@/lib/utils";

const AdminSidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "OVERVIEW", icon: LayoutDashboard, href: "/admin" },
    { name: "PRODUCTS", icon: Package, href: "/admin/products" },
    { name: "ORDERS", icon: ShoppingCart, href: "/admin/orders" },
    { name: "ANALYTICS", icon: BarChart3, href: "/admin/analytics" },
    { name: "CUSTOMERS", icon: Users, href: "/admin/customers" },
  ];

  return (
    <aside className="w-64 h-screen bg-[#0D0D0D] text-white flex flex-col border-r border-white/5 sticky top-0">
      <div className="p-8 border-b border-white/5">
        <Link href="/" className="flex flex-col">
          <span className="text-xl font-black tracking-[0.3em] uppercase">CAVVE</span>
          <span className="text-[8px] tracking-[0.5em] opacity-30 mt-2 font-bold uppercase">ADMIN PANEL</span>
        </Link>
      </div>

      <nav className="flex-grow py-12 px-6 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-6 py-4 text-[10px] font-bold tracking-[0.2em] transition-all duration-300 group",
                isActive 
                  ? "bg-white text-black" 
                  : "text-white/40 hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon size={16} strokeWidth={isActive ? 2 : 1.5} />
              {item.name}
              {isActive && (
                <div className="ml-auto w-1 h-1 bg-black rounded-full" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-8 border-t border-white/5 space-y-4">
        <Link 
          href="/" 
          target="_blank"
          className="flex items-center gap-4 px-6 py-4 text-[9px] font-bold tracking-[0.2em] text-white/30 hover:text-white transition-all uppercase"
        >
          <ExternalLink size={14} /> VIEW STORE
        </Link>
        <button className="w-full flex items-center gap-4 px-6 py-4 text-[9px] font-bold tracking-[0.2em] text-red-500/50 hover:text-red-500 transition-all uppercase">
          <LogOut size={14} /> SIGN OUT
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
