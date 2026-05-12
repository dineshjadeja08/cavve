import React from "react";
import { Plus, Search, MoreHorizontal, Edit, Trash2 } from "lucide-react";
import { getProducts } from "@/app/actions/product";
import Image from "next/image";

const AdminProducts = async () => {
  const products = await getProducts();

  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-12">
        <div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">Inventory <br /> Management</h1>
          <p className="text-[10px] tracking-[0.4em] opacity-40 font-bold uppercase">{products.length} ARTICLES IN DATABASE</p>
        </div>
        
        <button className="bg-primary text-primary-foreground px-10 py-5 text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-accent transition-all duration-500 shadow-xl flex items-center gap-4">
          <Plus size={16} /> ADD NEW PRODUCT
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row gap-6 items-center bg-white border border-border/5 p-8">
         <div className="relative flex-grow w-full">
            <Search size={16} className="absolute left-6 top-1/2 -translate-y-1/2 opacity-20" />
            <input 
              type="text" 
              placeholder="SEARCH PRODUCTS BY NAME, SKU, OR CATEGORY..." 
              className="w-full bg-transparent border-none pl-16 py-4 text-[10px] font-bold tracking-[0.2em] outline-none placeholder:opacity-20 uppercase"
            />
         </div>
         <div className="flex gap-4 w-full md:w-auto">
            <select className="bg-transparent border border-border/10 px-8 py-4 text-[10px] font-bold tracking-[0.2em] uppercase outline-none">
               <option>ALL COLLECTIONS</option>
               <option>DROP 001</option>
               <option>ESSENTIALS</option>
            </select>
            <select className="bg-transparent border border-border/10 px-8 py-4 text-[10px] font-bold tracking-[0.2em] uppercase outline-none">
               <option>IN STOCK</option>
               <option>OUT OF STOCK</option>
            </select>
         </div>
      </div>

      {/* Product Table */}
      <div className="bg-white border border-border/5 overflow-hidden">
         <table className="w-full border-collapse">
            <thead>
               <tr className="bg-secondary/5 border-b border-border/5 text-left">
                  <th className="px-10 py-8 text-[10px] font-black tracking-[0.4em] uppercase">Article</th>
                  <th className="px-10 py-8 text-[10px] font-black tracking-[0.4em] uppercase">SKU</th>
                  <th className="px-10 py-8 text-[10px] font-black tracking-[0.4em] uppercase">Price</th>
                  <th className="px-10 py-8 text-[10px] font-black tracking-[0.4em] uppercase">Stock</th>
                  <th className="px-10 py-8 text-[10px] font-black tracking-[0.4em] uppercase">Status</th>
                  <th className="px-10 py-8 text-[10px] font-black tracking-[0.4em] uppercase text-right">Actions</th>
               </tr>
            </thead>
            <tbody>
               {products.length > 0 ? products.map((product) => (
                  <tr key={product.id} className="border-b border-border/5 hover:bg-secondary/5 transition-all group">
                     <td className="px-10 py-8">
                        <div className="flex items-center gap-6">
                           <div className="relative w-16 h-20 bg-secondary/10 overflow-hidden border border-border/5">
                              <Image 
                                src={product.images?.[0] || ""} 
                                alt={product.name} 
                                fill 
                                className="object-cover grayscale group-hover:scale-110 transition-transform duration-700" 
                              />
                           </div>
                           <div className="flex flex-col gap-1">
                              <span className="text-[10px] font-bold tracking-widest uppercase">{product.name}</span>
                              <span className="text-[8px] tracking-widest opacity-30 uppercase font-bold">{product.slug}</span>
                           </div>
                        </div>
                     </td>
                     <td className="px-10 py-8 text-[10px] font-bold tracking-widest opacity-40 uppercase">CVV-ED1-001</td>
                     <td className="px-10 py-8 text-[10px] font-bold tracking-widest uppercase">₹{Number(product.price).toLocaleString()}</td>
                     <td className="px-10 py-8 text-[10px] font-bold tracking-widest uppercase">124 Units</td>
                     <td className="px-10 py-8">
                        <span className="text-[8px] font-black tracking-widest px-3 py-1 bg-green-50 text-green-700 border border-green-100 uppercase">Active</span>
                     </td>
                     <td className="px-10 py-8">
                        <div className="flex justify-end gap-6 opacity-0 group-hover:opacity-100 transition-opacity">
                           <button className="text-black/40 hover:text-black transition-colors"><Edit size={16} /></button>
                           <button className="text-red-500/40 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                           <button className="text-black/40 hover:text-black transition-colors"><MoreHorizontal size={16} /></button>
                        </div>
                     </td>
                  </tr>
               )) : (
                  <tr>
                     <td colSpan={6} className="px-10 py-32 text-center">
                        <p className="text-[10px] font-bold tracking-[0.5em] opacity-30 uppercase">NO PRODUCTS FOUND IN DATABASE</p>
                        <p className="text-[8px] tracking-[0.2em] opacity-20 mt-4 uppercase">SYNC YOUR DATABASE OR ADD NEW ARTICLES ABOVE</p>
                     </td>
                  </tr>
               )}
            </tbody>
         </table>
      </div>
    </div>
  );
};

export default AdminProducts;
