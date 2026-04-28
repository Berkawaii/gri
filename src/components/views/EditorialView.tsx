"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/framer-variants";
import { MOCK_PRODUCTS } from "@/lib/mock";
import EditorialCard from "@/components/vault/EditorialCard";
import VerticalNav from "@/components/shared/VerticalNav";

export default function EditorialView() {
  return (
    <div className="min-h-screen bg-background selection:bg-accent selection:text-black md:pl-32 pb-40 transition-colors duration-500">
      <VerticalNav />
      
      {/* High-End Hero */}
      <section className="relative px-6 py-24 md:py-40 flex flex-col items-start border-b border-black/5">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="relative z-10 w-full"
        >
          <div className="max-w-7xl">
            <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-12">
               <div className="w-2 h-2 rounded-full bg-accent" />
               <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-black/40">
                 System_Curation / Spring_2026
               </span>
            </motion.div>
            <motion.h1 
              variants={fadeInUp}
              className="text-[12vw] font-serif italic leading-[0.75] mb-20 tracking-tighter"
            >
              The Raw<br /><span className="text-accent underline underline-offset-[2vw]">Gri</span>
            </motion.h1>
            
            <div className="flex flex-col md:flex-row gap-20 md:items-end w-full">
              <motion.div variants={fadeInUp} className="max-w-xl">
                <p className="text-2xl md:text-3xl font-medium leading-[1.1] tracking-tight">
                  A study in minimalist archetypes. Combining the warmth of analog 35mm film with modern street-tech silhouettes.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex-grow flex justify-end">
                 <div className="text-[10px] font-bold tracking-widest uppercase border border-black/10 px-8 py-4 hover:bg-black hover:text-white transition-all cursor-pointer">
                    Manifesto_Archive [ 01/24 ]
                 </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Main Grid Spread */}
      <main className="px-6 md:px-20 py-20">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-40 lg:gap-x-24"
        >
          {MOCK_PRODUCTS.map((product, index) => (
            <EditorialCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>

        {/* Artistic Interstitial */}
        <section className="my-60 relative w-full aspect-[21/9] overflow-hidden bg-black flex items-center justify-center">
            <h2 className="text-[10vw] font-serif italic text-white/10 uppercase tracking-tighter animate-pulse">
               VOID_CULTURE
            </h2>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50" />
        </section>

        {/* Secondary Info Grid or More Products could go here */}
      </main>

      {/* Minimal Footer Spread */}
      <footer className="px-6 md:px-20 py-20 border-t border-black/5 flex flex-col md:flex-row justify-between items-start gap-20">
        <div className="max-w-xs text-[11px] font-bold tracking-widest leading-loose">
          VOID_ARCHIVE IS A DIGITAL CURATION PROJECT. NO ITEMS ARE FOR SALE THROUGH THIS INTERFACE. ALL COPYRIGHTS TO RESPECTIVE BRANDS.
        </div>
        <div className="flex gap-12 font-serif italic text-xl">
           <a href="#" className="hover:text-accent transition-all">Instagram</a>
           <a href="#" className="hover:text-accent transition-all">Discord</a>
           <a href="#" className="hover:text-accent transition-all">Archive_01</a>
        </div>
      </footer>
    </div>
  );
}
