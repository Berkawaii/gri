"use client";

import { useAuth } from "@/context/AuthContext";
import { LogIn, LogOut, ShieldAlert } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AuthButton() {
  const { user, loading, isAdmin, signIn, signOut } = useAuth();

  if (loading) {
    return (
      <div className="fixed bottom-8 right-8 z-[100]">
        <div className="w-14 h-14 rounded-full bg-neutral-800 animate-pulse border border-white/20 shadow-2xl" />
      </div>
    );
  }

  if (user) {
    return (
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-center gap-4 group">
        <div className="relative w-14 h-14 rounded-full overflow-hidden border border-white/20 hover:border-accent transition-colors shadow-2xl cursor-pointer">
          <Image 
            src={user.photoURL || "/default-avatar.png"} 
            alt={user.displayName || "User"} 
            fill 
            className="object-cover"
          />
          {isAdmin && (
            <div className="absolute -bottom-1 -right-1 bg-accent rounded-full p-1 border border-black">
              <ShieldAlert className="w-3 h-3 text-black" />
            </div>
          )}
        </div>
        
        {/* Hover Menu */}
        <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all flex flex-col gap-2 bg-black/90 p-4 border border-white/10 backdrop-blur-xl whitespace-nowrap shadow-2xl">
          <p className="text-xs font-mono text-accent">ID: {user.displayName}</p>
          <p className="text-[10px] font-mono text-neutral-400 mb-2">ROLE: {isAdmin ? "ADMIN_EDITOR" : "STANDARD_USER"}</p>
          <button 
            onClick={signOut}
            className="flex items-center gap-2 text-xs font-mono uppercase hover:text-red-500 transition-colors"
          >
            <LogOut className="w-3 h-3" />
            DISCONNECT
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={signIn}
        className="flex flex-col items-center justify-center w-14 h-14 rounded-full border border-white/20 hover:border-accent hover:text-accent transition-colors bg-black/80 backdrop-blur-xl shadow-2xl text-white"
        title="SYSTEM_LOGIN"
      >
        <LogIn className="w-5 h-5" />
      </motion.button>
    </div>
  );
}
