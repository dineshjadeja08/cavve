"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  User,
  ShoppingBag,
  Heart,
  MapPin,
  Bell,
  Settings,
  LogOut,
  ChevronRight,
  Package,
  RotateCcw,
  Star,
} from "lucide-react";

const tabs = [
  { id: "orders", label: "Orders", Icon: ShoppingBag },
  { id: "wishlist", label: "Wishlist", Icon: Heart },
  { id: "addresses", label: "Addresses", Icon: MapPin },
  { id: "notifications", label: "Notifications", Icon: Bell },
  { id: "settings", label: "Settings", Icon: Settings },
];

const orders = [
  {
    id: "ORD-001",
    date: "May 5, 2026",
    status: "Delivered",
    total: "₹9,498",
    items: [
      { name: "Heavyweight Boxy Tee", size: "L", image: "/images/collection1.png" },
      { name: "Relaxed Canvas Trouser", size: "32", image: "/images/product_trouser.png" },
    ],
  },
  {
    id: "ORD-002",
    date: "May 1, 2026",
    status: "Shipped",
    total: "₹7,499",
    items: [
      { name: "Structured Overshirt", size: "M", image: "/images/product_overshirt.png" },
    ],
  },
];

const statusColors: Record<string, string> = {
  Delivered: "text-green-600 bg-green-50",
  Shipped: "text-blue-600 bg-blue-50",
  Processing: "text-amber-600 bg-amber-50",
};

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-[calc(var(--announcement-h)+80px)] pb-32 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          {/* Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-border/50 mb-12"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-[#0D0D0D] flex items-center justify-center text-[#F5F5F2] text-xl font-bold font-[family-name:var(--font-montserrat)]">
                A
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight uppercase font-[family-name:var(--font-montserrat)]">
                  Arjun R.
                </h1>
                <p className="text-sm text-muted-foreground">arjun@example.com</p>
              </div>
            </div>
            <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
              <LogOut size={14} strokeWidth={1.5} />
              Sign Out
            </button>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Sidebar Nav */}
            <div className="lg:col-span-1">
              <nav className="flex flex-col gap-1">
                {tabs.map(({ id, label, Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`flex items-center gap-3 px-4 py-3.5 text-[10px] uppercase tracking-[0.25em] font-bold transition-all text-left ${
                      activeTab === id
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
                    }`}
                  >
                    <Icon size={14} strokeWidth={1.5} />
                    {label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              {activeTab === "orders" && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="text-2xl font-light tracking-tighter uppercase mb-8 font-[family-name:var(--font-montserrat)]">
                    Order History
                  </h2>

                  <div className="flex flex-col gap-6">
                    {orders.map((order) => (
                      <div
                        key={order.id}
                        className="border border-border/50 hover:border-foreground/20 transition-colors p-6"
                      >
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-3">
                              <p className="text-sm font-bold uppercase tracking-wider">{order.id}</p>
                              <span className={`text-[8px] uppercase tracking-[0.3em] font-bold px-2 py-1 ${statusColors[order.status]}`}>
                                {order.status}
                              </span>
                            </div>
                            <p className="text-[10px] text-muted-foreground tracking-widest uppercase">{order.date}</p>
                          </div>
                          <p className="text-lg font-semibold">{order.total}</p>
                        </div>

                        <div className="flex gap-4 mb-6">
                          {order.items.map((item, i) => (
                            <div key={i} className="relative w-16 h-20 bg-[#F0EDE8] overflow-hidden shrink-0">
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                          {order.items.length > 2 && (
                            <div className="w-16 h-20 bg-muted/20 flex items-center justify-center">
                              <span className="text-xs font-bold">+{order.items.length - 2}</span>
                            </div>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-3">
                          <button className="flex items-center gap-2 text-[9px] uppercase tracking-[0.25em] font-bold border border-border px-5 py-3 hover:border-foreground transition-colors">
                            <Package size={12} strokeWidth={1.5} />
                            Track Order
                          </button>
                          <button className="flex items-center gap-2 text-[9px] uppercase tracking-[0.25em] font-bold border border-border px-5 py-3 hover:border-foreground transition-colors">
                            <RotateCcw size={12} strokeWidth={1.5} />
                            Return
                          </button>
                          <button className="flex items-center gap-2 text-[9px] uppercase tracking-[0.25em] font-bold border border-border px-5 py-3 hover:border-foreground transition-colors">
                            <Star size={12} strokeWidth={1.5} />
                            Review
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "addresses" && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="text-2xl font-light tracking-tighter uppercase mb-8 font-[family-name:var(--font-montserrat)]">
                    Saved Addresses
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        label: "Home",
                        address: "42 Marine Drive, Flat 7B\nMumbai, Maharashtra 400001\nIndia",
                        default: true,
                      },
                      {
                        label: "Office",
                        address: "WeWork, 91Springboard\nBangalore, Karnataka 560001\nIndia",
                        default: false,
                      },
                    ].map((addr, i) => (
                      <div key={i} className="border border-border/50 p-6 flex flex-col gap-4">
                        <div className="flex justify-between items-start">
                          <p className="text-[10px] uppercase tracking-[0.3em] font-bold">{addr.label}</p>
                          {addr.default && (
                            <span className="text-[8px] uppercase tracking-widest font-bold bg-foreground text-background px-2 py-1">
                              Default
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed whitespace-pre-line">
                          {addr.address}
                        </p>
                        <button className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground hover:text-foreground transition-colors self-start">
                          Edit
                        </button>
                      </div>
                    ))}
                    <button className="border border-dashed border-border/50 p-6 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:border-foreground hover:text-foreground transition-colors">
                      + Add Address
                    </button>
                  </div>
                </motion.div>
              )}

              {activeTab === "settings" && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="text-2xl font-light tracking-tighter uppercase mb-8 font-[family-name:var(--font-montserrat)]">
                    Account Settings
                  </h2>
                  <div className="flex flex-col gap-6 max-w-lg">
                    {[
                      { label: "Full Name", value: "Arjun R." },
                      { label: "Email", value: "arjun@example.com" },
                      { label: "Phone", value: "+91 98765 43210" },
                    ].map((field) => (
                      <div key={field.label} className="flex flex-col gap-2">
                        <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-muted-foreground">
                          {field.label}
                        </label>
                        <input
                          defaultValue={field.value}
                          className="border-b border-border py-3 bg-transparent text-sm focus:outline-none focus:border-foreground transition-colors"
                        />
                      </div>
                    ))}
                    <button className="mt-4 py-4 bg-foreground text-background text-[10px] uppercase tracking-[0.3em] font-bold hover:opacity-90 transition-opacity self-start px-12">
                      Save Changes
                    </button>
                  </div>
                </motion.div>
              )}

              {(activeTab === "wishlist" || activeTab === "notifications") && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-32 text-center"
                >
                  <p className="text-2xl font-light tracking-tight uppercase mb-4 capitalize">
                    {activeTab}
                  </p>
                  <p className="text-muted-foreground font-light mb-8">
                    {activeTab === "wishlist"
                      ? "Your saved pieces will appear here."
                      : "You have no new notifications."}
                  </p>
                  {activeTab === "wishlist" && (
                    <Link
                      href="/wishlist"
                      className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold border-b border-border pb-1 hover:border-foreground transition-colors"
                    >
                      View Wishlist <ChevronRight size={12} />
                    </Link>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
