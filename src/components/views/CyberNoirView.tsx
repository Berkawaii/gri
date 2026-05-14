"use client";

import { useState, useEffect } from "react";
import SmartHeader from "@/components/shared/SmartHeader";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/framer-variants";
import CyberNoirCard, { DatabaseProduct } from "@/components/vault/CyberNoirCard";
import CyberNoirModal from "@/components/vault/CyberNoirModal";
import database from "../../../database.json";

export default function CyberNoirView() {
  const [filter, setFilter] = useState("ALL_ITEMS");
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<DatabaseProduct | null>(null);
  const products: DatabaseProduct[] = database.products;

  // Derive unique categories from products
  const categories = ["ALL_ITEMS", ...Array.from(new Set(products.map(p => p.category.toUpperCase())))];

  const filteredProducts = products.filter((p) => 
    filter === "ALL_ITEMS" || p.category.toUpperCase() === filter
  );

  // Sync sticky bar with SmartHeader scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="bg-background selection:bg-accent selection:text-black min-h-screen relative">
      {/* Global Cyber Noir Effects */}
      <div className="scanlines" />

      <SmartHeader />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 border-b border-accent/20">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-[1800px] mx-auto relative z-10"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
            <div className="max-w-4xl relative">
              <motion.p 
                variants={fadeInUp}
                className="text-accent font-mono text-xs tracking-[0.2em] mb-6 animate-pulse border border-accent/30 inline-block px-3 py-1 bg-black/50"
              >
                [ SYS.STATUS: ONLINE // DATABASE_CONNECTED ]
              </motion.p>
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl md:text-8xl lg:text-[10rem] font-serif leading-[0.85] tracking-tighter uppercase text-white glitch-text"
                data-text="Gri Archive"
              >
                Gri<br />Archive
              </motion.h1>
            </div>
            <motion.div 
              variants={fadeInUp}
              className="max-w-sm border-l-2 border-accent/50 pl-6 py-2 bg-black/20 backdrop-blur-sm"
            >
              <p className="text-sm text-neutral-400 font-mono leading-relaxed">
                A hyper-curated digital vault. Accessing raw product telemetry, inventory feeds, and technical specifications.
              </p>
              <div className="mt-4 md:mt-6 flex flex-wrap gap-4 text-[10px] font-mono text-accent/60">
                <span>EST. 2026 // v0.1</span>
                <span>[ HASH: 0x82FA ]</span>
                <span className="text-white/40">ITEMS: {products.length}</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Background Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ccff0005_1px,transparent_1px),linear-gradient(to_bottom,#ccff0005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute top-0 right-[20%] w-[1px] h-full bg-accent/20 pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-[40%] h-[1px] bg-accent/20 pointer-events-none" />
      </section>

      {/* Filters */}
      <section className={`sticky z-40 bg-black/80 backdrop-blur-md border-b border-accent/20 px-6 md:px-12 h-16 flex items-center justify-between overflow-x-auto no-scrollbar transition-all duration-300 ${isHeaderVisible ? "top-20" : "top-0"}`}>
        <div className="flex gap-8 text-[11px] font-mono tracking-widest text-neutral-500 whitespace-nowrap">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`transition-colors ${
                filter === cat 
                  ? "text-accent border-b-2 border-accent" 
                  : "hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <main className="px-6 md:px-12 py-12 relative z-10">
        <div className="max-w-[1800px] mx-auto">
          <motion.div 
            key={filter}
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredProducts.map((product, index) => (
              <CyberNoirCard 
                key={product.url} 
                product={product} 
                index={index}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </motion.div>
        </div>
      </main>

      {/* Fullscreen Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <CyberNoirModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
