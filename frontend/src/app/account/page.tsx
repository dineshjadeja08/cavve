"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Package, User, MapPin, Heart, LogOut, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState("orders");

  const orders = [
    { id: "CV-92831", date: "MAY 12, 2024", total: "₹2,999", status: "PROCESSING" },
    { id: "CV-81722", date: "APR 28, 2024", total: "₹5,998", status: "DELIVERED" },
  ];

  const tabs = [
    { id: "orders", label: "ORDERS", icon: Package },
    { id: "profile", label: "PROFILE", icon: User },
    { id: "addresses", label: "ADDRESSES", icon: MapPin },
    { id: "wishlist", label: "WISHLIST", icon: Heart },
  ];

  return (
    <div className="bg-background min-h-screen pt-24 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
          <div>
            <p className="text-[10px] tracking-[0.5em] uppercase mb-4 opacity-50">Welcome Back</p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">VIKNESH B.</h1>
          </div>
          <button className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity">
            <LogOut size={14} /> SIGN OUT
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-20">
          {/* Navigation */}
          <aside className="w-full lg:w-64">
            <div className="flex flex-col border-t border-border/10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center justify-between py-6 border-b border-border/10 group transition-all",
                    activeTab === tab.id ? "opacity-100" : "opacity-30 hover:opacity-60"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <tab.icon size={16} strokeWidth={1.5} />
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase">{tab.label}</span>
                  </div>
                  <ChevronRight size={14} className={cn("transition-transform duration-300", activeTab === tab.id ? "rotate-90" : "")} />
                </button>
              ))}
            </div>
          </aside>

          {/* Content */}
          <main className="flex-grow">
            {activeTab === "orders" && (
              <div className="space-y-12">
                <h2 className="text-xl font-bold tracking-widest uppercase mb-12">Order History</h2>
                {orders.length > 0 ? (
                  <div className="border-t border-border/10">
                    {orders.map((order) => (
                      <div key={order.id} className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-b border-border/10 items-center">
                        <div>
                          <p className="text-[8px] tracking-[0.2em] opacity-40 mb-2">ORDER NUMBER</p>
                          <p className="text-[10px] font-bold tracking-widest">{order.id}</p>
                        </div>
                        <div>
                          <p className="text-[8px] tracking-[0.2em] opacity-40 mb-2">DATE</p>
                          <p className="text-[10px] font-bold tracking-widest">{order.date}</p>
                        </div>
                        <div>
                          <p className="text-[8px] tracking-[0.2em] opacity-40 mb-2">STATUS</p>
                          <span className="text-[9px] font-bold tracking-widest bg-secondary/10 px-3 py-1 rounded-full">{order.status}</span>
                        </div>
                        <div className="text-right">
                          <p className="text-[8px] tracking-[0.2em] opacity-40 mb-2">TOTAL</p>
                          <p className="text-[10px] font-bold tracking-widest">{order.total}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-20 text-center bg-secondary/5">
                    <p className="text-[10px] tracking-widest opacity-40 uppercase">No orders found.</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === "profile" && (
              <div className="max-w-2xl">
                <h2 className="text-xl font-bold tracking-widest uppercase mb-12">Profile Details</h2>
                <div className="space-y-10">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div>
                        <label className="text-[8px] tracking-[0.3em] opacity-40 uppercase mb-4 block">First Name</label>
                        <p className="text-xs tracking-widest font-bold pb-4 border-b border-border/10">VIKNESH</p>
                      </div>
                      <div>
                        <label className="text-[8px] tracking-[0.3em] opacity-40 uppercase mb-4 block">Last Name</label>
                        <p className="text-xs tracking-widest font-bold pb-4 border-b border-border/10">B.</p>
                      </div>
                   </div>
                   <div>
                      <label className="text-[8px] tracking-[0.3em] opacity-40 uppercase mb-4 block">Email Address</label>
                      <p className="text-xs tracking-widest font-bold pb-4 border-b border-border/10">VIKNESH@EXAMPLE.COM</p>
                   </div>
                   <button className="text-[10px] font-bold tracking-[0.2em] border-b border-primary/20 pb-2 hover:border-primary transition-all uppercase">
                      Edit Profile
                   </button>
                </div>
              </div>
            )}

            {activeTab === "addresses" && (
              <div className="space-y-12">
                 <div className="flex justify-between items-center mb-12">
                   <h2 className="text-xl font-bold tracking-widest uppercase">Saved Addresses</h2>
                   <button className="text-[10px] font-bold tracking-[0.2em] border border-primary px-8 py-3 hover:bg-primary hover:text-white transition-all uppercase">
                      Add New Address
                   </button>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 border border-border/10 bg-secondary/5 relative">
                       <span className="absolute top-4 right-4 text-[8px] tracking-[0.2em] font-bold opacity-30">DEFAULT</span>
                       <h3 className="text-[10px] font-bold tracking-widest mb-6 uppercase">Primary Residence</h3>
                       <p className="text-[10px] tracking-widest opacity-60 leading-relaxed mb-8 uppercase">
                         123 CONCRETE STREET <br />
                         MINIMALIST DISTRICT <br />
                         BRUTALIST CITY, 10023 <br />
                         INDIA
                       </p>
                       <div className="flex gap-6">
                         <button className="text-[9px] font-bold tracking-widest opacity-40 hover:opacity-100 transition-opacity uppercase">Edit</button>
                         <button className="text-[9px] font-bold tracking-widest opacity-40 hover:opacity-100 transition-opacity uppercase">Remove</button>
                       </div>
                    </div>
                 </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
