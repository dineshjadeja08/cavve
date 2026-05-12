import React from "react";
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  ShoppingCart, 
  DollarSign, 
  Package, 
  TrendingUp 
} from "lucide-react";

const AdminOverview = () => {
  const stats = [
    { name: "Total Revenue", value: "₹4,28,450", trend: "+12.5%", isUp: true, icon: DollarSign },
    { name: "Orders", value: "128", trend: "+8.2%", isUp: true, icon: ShoppingCart },
    { name: "Avg. Order Value", value: "₹3,347", trend: "-2.1%", isUp: false, icon: TrendingUp },
    { name: "Inventory", value: "842 Units", trend: "Steady", isUp: true, icon: Package },
  ];

  return (
    <div className="space-y-16">
      {/* Title Section */}
      <div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">Command <br /> Center</h1>
        <p className="text-[10px] tracking-[0.4em] opacity-40 font-bold uppercase">Business performance Overview / Drop 001</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-10 border border-border/5 shadow-sm group hover:shadow-xl transition-all duration-700">
            <div className="flex justify-between items-start mb-8">
              <div className="p-3 bg-secondary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                <stat.icon size={18} strokeWidth={1.5} />
              </div>
              <div className={cn(
                "flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase",
                stat.isUp ? "text-green-600" : "text-red-500"
              )}>
                {stat.trend} {stat.isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
              </div>
            </div>
            <p className="text-[10px] font-bold tracking-[0.3em] opacity-30 uppercase mb-2">{stat.name}</p>
            <h3 className="text-3xl font-black tracking-tight">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Recent Orders & activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Recent Orders List */}
        <div className="lg:col-span-2 bg-white border border-border/5 p-12">
           <div className="flex justify-between items-end mb-12">
              <h2 className="text-[12px] font-bold tracking-[0.5em] uppercase">Incoming Orders</h2>
              <button className="text-[9px] font-bold tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity uppercase underline underline-offset-4">View All</button>
           </div>

           <div className="space-y-0 border-t border-border/5">
              {[
                { id: "#CV-9284", customer: "Aravind R.", amount: "₹2,999", status: "PROCESSING" },
                { id: "#CV-9283", customer: "Sanjay M.", amount: "₹5,499", status: "PENDING" },
                { id: "#CV-9282", customer: "Rahul K.", amount: "₹2,999", status: "SHIPPED" },
                { id: "#CV-9281", customer: "Arjun S.", amount: "₹8,999", status: "DELIVERED" },
              ].map((order, idx) => (
                <div key={idx} className="grid grid-cols-4 py-8 border-b border-border/5 items-center hover:bg-secondary/5 px-4 transition-all group">
                   <span className="text-[10px] font-bold tracking-widest">{order.id}</span>
                   <span className="text-[10px] font-bold tracking-widest opacity-40">{order.customer}</span>
                   <span className="text-[10px] font-bold tracking-widest">{order.amount}</span>
                   <div className="flex justify-end">
                      <span className={cn(
                        "text-[8px] font-black tracking-widest px-4 py-2 border uppercase",
                        order.status === "DELIVERED" ? "bg-green-50 text-green-700 border-green-100" :
                        order.status === "PROCESSING" ? "bg-blue-50 text-blue-700 border-blue-100" :
                        "bg-orange-50 text-orange-700 border-orange-100"
                      )}>
                        {order.status}
                      </span>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-white border border-border/5 p-12">
           <h2 className="text-[12px] font-bold tracking-[0.5em] uppercase mb-12">Live Activity</h2>
           <div className="space-y-12">
              {[
                { time: "2 MIN AGO", event: "New order placed by Sanjay M." },
                { time: "15 MIN AGO", event: "Stock alert: Jet Black Tee (L)" },
                { time: "1 HR AGO", order: "Shipping label printed: #CV-9282" },
                { time: "3 HR AGO", event: "New customer registered: Karan P." },
              ].map((item, idx) => (
                <div key={idx} className="relative pl-8 border-l border-border/10">
                   <div className="absolute top-0 -left-[4.5px] w-2 h-2 bg-primary rounded-full" />
                   <p className="text-[8px] font-bold tracking-widest opacity-30 mb-2 uppercase">{item.time}</p>
                   <p className="text-[10px] font-bold tracking-widest leading-relaxed uppercase">{item.event || item.order}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

// Helper for dynamic classes
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default AdminOverview;
