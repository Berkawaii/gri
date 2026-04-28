"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/framer-variants";
import { MOCK_PRODUCTS } from "@/lib/mock";
import GlitchCard from "@/components/vault/GlitchCard";
import { Terminal } from "lucide-react";

export default function GlitchView() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative pb-40">
      {/* Matrix / Scanline Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
         <div className="absolute inset-0 animate-pulse bg-cyan-500/5 mix-blend-overlay" />
      </div>

      <header className="relative z-10 border-b border-cyan-500/30 px-6 md:px-12 py-6 flex justify-between items-center bg-black/80 backdrop-blur-md">
         <div className="flex items-center gap-4">
            <div className="p-2 border border-cyan-500/50">
               <Terminal size={18} className="text-cyan-400" />
            </div>
            <h1 className="text-2xl font-mono font-bold tracking-tighter uppercase italic group">
               GRI<span className="animate-pulse">_</span>CMD
            </h1>
         </div>
         <div className="hidden md:flex gap-8 text-[10px] font-mono text-cyan-400/60 uppercase tracking-widest">
            <span>NETWORK: SECURE</span>
            <span>DATA_STREAM: ENCRYPTED</span>
            <span>Uptime: 04:22:18</span>
         </div>
      </header>

      <main className="relative z-10 px-6 md:px-12 py-20">
         {/* Glitchy Hero */}
         <section className="mb-40">
            <motion.div 
               variants={staggerContainer}
               initial="initial"
               animate="animate"
               className="max-w-4xl"
            >
               <motion.div variants={fadeInUp} className="inline-block px-3 py-1 bg-cyan-500 text-black text-[10px] font-mono font-bold mb-8 uppercase">
                  System_Notice: Archive_Accessed
               </motion.div>
               <motion.h2 
                 variants={fadeInUp}
                 className="text-6xl md:text-9xl font-mono font-bold tracking-tighter uppercase mb-8 leading-none"
               >
                 DECRYPT<br />THE_CULTURE
               </motion.h2>
               <motion.div variants={fadeInUp} className="h-1 w-full bg-cyan-500/20 mb-8 relative">
                  <div className="absolute inset-y-0 left-0 w-1/4 bg-cyan-500 animate-loading-bar" />
               </motion.div>
               <motion.p variants={fadeInUp} className="text-sm font-mono text-cyan-400 max-w-2xl leading-relaxed">
                  // EXECUTING SCAN... FOUND 08 MATCHES IN UNDERGROUND_DATA_VAULT. 
                  // ALL ARCHIVES DECRYPTED FOR CURRENT USER_ID. 
                  // PROCEED WITH CAUTION.
               </motion.p>
            </motion.div>
         </section>

         {/* Grid Spread */}
         <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
         >
            {MOCK_PRODUCTS.map((product) => (
              <GlitchCard key={product.id} product={product} />
            ))}
         </motion.div>
      </main>

      {/* Floating Glitch Footer */}
      <footer className="relative z-10 px-6 md:px-12 py-20 border-t border-cyan-500/30 flex flex-col md:flex-row justify-between items-center gap-12 text-[10px] font-mono text-cyan-400/40 uppercase tracking-widest">
         <div className="flex gap-12">
            <a href="#" className="hover:text-cyan-400 transition-colors">Instagram.sys</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Discord.node</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Security.log</a>
         </div>
         <div className="text-right">
            <span>© GRI_CMD_ARCHIVE // 2026</span><br />
            <span className="text-[8px] animate-pulse">Connection_Status: Weak</span>
         </div>
      </footer>
    </div>
  );
}
