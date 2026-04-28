"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/framer-variants";
import { MOCK_PRODUCTS } from "@/lib/mock";
import EtherealCard from "@/components/vault/EtherealCard";
import { Sparkles } from "lucide-react";

export default function EtherealView() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white overflow-hidden relative pb-40">
      {/* Moving Ambient Background */}
      <div className="fixed inset-0 z-0">
         <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[120px] rounded-full animate-float-slow" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full animate-float-slow delay-1000" />
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
      </div>

      <header className="relative z-10 px-6 md:px-12 py-12 flex justify-between items-center">
         <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           className="flex items-center gap-3"
         >
            <Sparkles size={20} className="text-purple-300" />
            <h1 className="text-3xl font-serif italic tracking-tighter lowercase">
               Gri.
            </h1>
         </motion.div>
         <nav className="flex gap-12 text-[10px] font-medium tracking-[0.4em] uppercase text-white/50">
            <a href="#" className="hover:text-white transition-colors">Archive</a>
            <a href="#" className="hover:text-white transition-colors">Manifesto</a>
         </nav>
      </header>

      <main className="relative z-10 px-6 md:px-12 py-20">
         {/* Minimal Ethereal Hero */}
         <section className="mb-60 flex flex-col items-center text-center">
            <motion.div 
               variants={staggerContainer}
               initial="initial"
               animate="animate"
               className="max-w-4xl"
            >
               <motion.h2 
                 variants={fadeInUp}
                 className="text-6xl md:text-[10vw] font-serif italic leading-[0.9] tracking-tighter mb-12"
               >
                 A Digital<br />Consciousness
               </motion.h2>
               <motion.div variants={fadeInUp} className="w-1 h-20 bg-gradient-to-b from-purple-500/50 to-transparent mx-auto mb-12" />
               <motion.p variants={fadeInUp} className="text-xl md:text-2xl font-light text-white/60 max-w-2xl mx-auto leading-relaxed">
                 Beyond the technical, beyond the physical. 
                 The archive as a living, breathing spirit of design.
               </motion.p>
            </motion.div>
         </section>

         {/* Soft Grid Spread */}
         <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12"
         >
            {MOCK_PRODUCTS.map((product) => (
              <EtherealCard key={product.id} product={product} />
            ))}
         </motion.div>
      </main>

      <footer className="relative z-10 px-6 md:px-12 py-20 mt-40 border-t border-white/5 text-center">
         <p className="text-[10px] font-medium tracking-[0.6em] uppercase text-white/30">
            Gri. Experimental Archive // Essence of 2026
         </p>
      </footer>
    </div>
  );
}
