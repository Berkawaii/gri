"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/framer-variants";
import { MOCK_PRODUCTS } from "@/lib/mock";
import BrutalistCard from "@/components/vault/BrutalistCard";
import Link from "next/link";

export default function BrutalistView() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-black selection:text-white pb-40">
      {/* Heavy Header */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b-8 border-black h-24 flex items-center px-6 md:px-12 justify-between">
         <Link href="/" className="text-4xl font-black tracking-tighter uppercase">
            GRI_SYSTEM
         </Link>
         <div className="flex gap-8 text-sm font-black uppercase tracking-tighter">
            <a href="#" className="hover:underline underline-offset-4 pointer-events-auto">Archive</a>
            <a href="#" className="hover:underline underline-offset-4 pointer-events-auto">Index</a>
            <a href="#" className="hover:underline underline-offset-4 pointer-events-auto">Drops</a>
         </div>
      </nav>

      {/* Brutalist Hero */}
      <section className="pt-40 px-6 md:px-12 mb-40">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-12 gap-0"
        >
          <div className="md:col-span-8 border-8 border-black p-12 bg-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            <motion.h1 
              variants={fadeInUp}
              className="text-8xl md:text-[14vw] font-black leading-[0.8] tracking-tighter uppercase mb-12"
            >
              GRI<br />ARCHIVE
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-2xl md:text-4xl font-bold uppercase tracking-tighter max-w-4xl">
              RAW CURATION OF UNDERGROUND APPAREL. NO BULLSHIT. NO POLISH. JUST THE ARCHIVE.
            </motion.p>
          </div>
          <div className="md:col-span-4 border-8 border-black border-l-0 p-12 flex flex-col justify-between items-start bg-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
             <div className="w-full">
                <div className="flex justify-between items-center mb-12">
                   <span className="font-black uppercase text-xl">UFA_NODE_01</span>
                   <span className="font-black uppercase text-xl">v0.1</span>
                </div>
                <div className="h-4 w-full bg-black mb-8" />
             </div>
             <p className="text-lg font-bold uppercase tracking-tighter bg-black text-white p-4">
                AUTHENTICATION: GRANTED<br />
                ENCRYPTION: HARDENED
             </p>
          </div>
        </motion.div>
      </section>

      {/* Heavy Grid */}
      <main className="px-6 md:px-12">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12"
        >
          {MOCK_PRODUCTS.map((product) => (
            <BrutalistCard key={product.id} product={product} />
          ))}
        </motion.div>
      </main>

      {/* Industrial Footer */}
      <footer className="mt-60 px-6 md:px-12">
         <div className="border-t-8 border-black pt-20 grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="text-6xl md:text-9xl font-black uppercase tracking-tighter">
               GRI.<br />2026
            </div>
            <div className="flex flex-col justify-end gap-12">
               <div className="grid grid-cols-2 gap-8 text-xl font-black uppercase tracking-tighter">
                  <a href="#" className="border-b-4 border-black hover:bg-black hover:text-white p-2">Instagram</a>
                  <a href="#" className="border-b-4 border-black hover:bg-black hover:text-white p-2">Discord</a>
                  <a href="#" className="border-b-4 border-black hover:bg-black hover:text-white p-2">Twitter</a>
                  <a href="#" className="border-b-4 border-black hover:bg-black hover:text-white p-2">Email</a>
               </div>
               <p className="text-sm font-black uppercase tracking-widest bg-black text-white p-4">
                  © GRI SYSTEM ALL RIGHTS RESERVED. RAW UNDERGROUND ARCHIVE.
               </p>
            </div>
         </div>
      </footer>
    </div>
  );
}
