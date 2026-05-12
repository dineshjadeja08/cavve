import React from "react";
import { Shield, Truck, RefreshCw, Zap } from "lucide-react";

const IconStrip = () => {
  const items = [
    { icon: Zap, label: "PREMIUM CRAFT" },
    { icon: Shield, label: "SECURE CHECKOUT" },
    { icon: Truck, label: "GLOBAL EXPRESS" },
    { icon: RefreshCw, label: "EASY RETURNS" },
  ];

  return (
    <div className="bg-background border-b border-border/5 py-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-wrap justify-between items-center gap-12">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 group">
            <div className="p-3 bg-secondary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
              <item.icon size={16} strokeWidth={1.5} />
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-40 group-hover:opacity-100 transition-opacity duration-500">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconStrip;
