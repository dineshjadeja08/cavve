"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState<string | null>(null);
  
  const router = useRouter();
  const supabase = createClient();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        router.push("/account");
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: `${firstName} ${lastName}`,
            },
          },
        });
        if (error) throw error;
        alert("Verification email sent! Please check your inbox.");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background min-h-[90vh] flex items-center justify-center py-20 px-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.5em] uppercase mb-4 opacity-50">Member Portal</p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6">
            {isLogin ? "Welcome Back" : "Join the Cave"}
          </h1>
          <p className="text-[10px] tracking-widest opacity-60 leading-relaxed uppercase">
            {isLogin ? "Manage your orders and preferences." : "Create an account for early access and faster checkout."}
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 p-4 mb-8 text-[10px] font-bold tracking-widest text-red-500 uppercase">
            {error}
          </div>
        )}

        <form className="space-y-8" onSubmit={handleAuth}>
          {!isLogin && (
            <div className="space-y-8">
              <input 
                type="text" 
                placeholder="FIRST NAME" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required={!isLogin}
                className="w-full border-b border-border/10 py-4 text-xs tracking-widest outline-none focus:border-primary transition-colors bg-transparent"
              />
              <input 
                type="text" 
                placeholder="LAST NAME" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required={!isLogin}
                className="w-full border-b border-border/10 py-4 text-xs tracking-widest outline-none focus:border-primary transition-colors bg-transparent"
              />
            </div>
          )}
          <input 
            type="email" 
            placeholder="EMAIL ADDRESS" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border-b border-border/10 py-4 text-xs tracking-widest outline-none focus:border-primary transition-colors bg-transparent"
          />
          <input 
            type="password" 
            placeholder="PASSWORD" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border-b border-border/10 py-4 text-xs tracking-widest outline-none focus:border-primary transition-colors bg-transparent"
          />

          {isLogin && (
            <div className="text-right">
              <button type="button" className="text-[9px] font-bold tracking-widest opacity-40 hover:opacity-100 transition-opacity uppercase">
                Forgot Password?
              </button>
            </div>
          )}

          <button 
            disabled={loading}
            className="w-full bg-primary text-primary-foreground h-16 flex items-center justify-center gap-4 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-accent transition-all duration-500 shadow-xl mt-12 disabled:opacity-50"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : (
              <>{isLogin ? "SIGN IN" : "CREATE ACCOUNT"} <ArrowRight size={14} /></>
            )}
          </button>
        </form>

        <div className="mt-12 text-center border-t border-border/10 pt-12">
          <p className="text-[10px] tracking-widest opacity-60 mb-4 uppercase">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </p>
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-[10px] font-bold tracking-[0.2em] uppercase border-b border-primary/20 pb-2 hover:border-primary transition-all"
          >
            {isLogin ? "REGISTER NOW" : "LOGIN INSTEAD"}
          </button>
        </div>

        {/* Social Login */}
        <div className="mt-12">
           <div className="relative flex items-center justify-center mb-8">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border/5"></div></div>
              <span className="relative bg-background px-4 text-[8px] tracking-[0.3em] opacity-30 uppercase">OR CONTINUE WITH</span>
           </div>
           <button 
             onClick={() => supabase.auth.signInWithOAuth({ provider: 'google' })}
             className="w-full border border-border/10 h-14 flex items-center justify-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-secondary/5 transition-all"
           >
             <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/></svg>
             GOOGLE
           </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
