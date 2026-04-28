"use client";

import SmoothScroll from "@/components/shared/SmoothScroll";
import SmartHeader from "@/components/shared/SmartHeader";
import GridSystem from "@/components/vault/GridSystem";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/framer-variants";

export default function CyberNoirView() {
  return (
    <div className="bg-background selection:bg-accent selection:text-black">
      <SmartHeader />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 border-b border-neutral/30">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-[1800px] mx-auto"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-4xl">
              <motion.p 
                variants={fadeInUp}
                className="text-accent font-mono text-xs tracking-[0.2em] mb-6 animate-pulse"
              >
                [ COLLECTION_STATUS: LIVE ]
              </motion.p>
              <motion.h1 
                variants={fadeInUp}
                className="text-6xl md:text-8xl lg:text-[10rem] font-serif leading-[0.85] tracking-tighter uppercase"
              >
                Gri<br />Archive
              </motion.h1>
            </div>
            <motion.div 
              variants={fadeInUp}
              className="max-w-sm border-l border-neutral/50 pl-6 py-2"
            >
              <p className="text-sm text-neutral-400 font-medium leading-relaxed">
                A hyper-curated digital vault for underground streetwear releases, experimental technical wear, and archival couture.
              </p>
              <div className="mt-6 flex gap-4 text-[10px] font-mono text-white/40">
                <span>EST. 2026 // v0.1</span>
                <span>[ HASH: 0x82FA ]</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <div className="absolute top-0 right-[20%] w-[1px] h-full bg-neutral/10 pointer-events-none" />
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-40 bg-background/80 backdrop-blur-sm border-b border-neutral/30 px-6 md:px-12 h-16 flex items-center justify-between overflow-hidden">
        <div className="flex gap-8 text-[11px] font-mono tracking-widest text-neutral-500">
          <button className="text-accent border-b border-accent">ALL_ITEMS</button>
          <button className="hover:text-white transition-colors">OUTERWEAR</button>
          <button className="hover:text-white transition-colors">FOOTWEAR</button>
        </div>
      </section>

      <main className="px-6 md:px-12 py-12">
        <div className="max-w-[1800px] mx-auto">
          <GridSystem />
        </div>
      </main>
    </div>
  );
}
