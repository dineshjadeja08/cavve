import React from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-[#F5F5F2] min-h-screen text-[#0D0D0D]">
      <AdminSidebar />
      <main className="flex-grow">
        {/* Top Header - Global for Admin */}
        <header className="h-24 bg-white border-b border-border/5 px-12 flex items-center justify-between sticky top-0 z-40">
           <div className="flex flex-col">
              <span className="text-[10px] tracking-[0.5em] font-bold opacity-30 uppercase">Operational Status</span>
              <div className="flex items-center gap-2 mt-1">
                 <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                 <span className="text-[10px] font-bold tracking-widest uppercase">System Online</span>
              </div>
           </div>

           <div className="flex items-center gap-8">
              <div className="flex flex-col items-end">
                 <span className="text-[10px] font-black tracking-widest uppercase">Viknesh B</span>
                 <span className="text-[8px] tracking-[0.2em] opacity-30 uppercase font-bold">Supreme Admin</span>
              </div>
              <div className="w-10 h-10 bg-[#0D0D0D] text-white flex items-center justify-center text-[10px] font-bold">VB</div>
           </div>
        </header>

        <div className="p-12">
          {children}
        </div>
      </main>
    </div>
  );
}
