"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Product } from "@/lib/mock";
import { fadeInUp } from "@/lib/framer-variants";

export default function GlitchCard({ product }: { product: Product }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative bg-[#050505] border border-white/10 overflow-hidden"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110 opacity-70 group-hover:opacity-100"
        />
        
        {/* Glitch Overlay (Revealed on Hover) */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
           <div className="absolute inset-0 bg-cyan-500/10 mix-blend-screen animate-pulse" />
           <div className="absolute inset-x-0 top-1/4 h-[1px] bg-white/20 animate-scanline" />
           <div className="absolute inset-x-0 bottom-1/3 h-[2px] bg-red-500/20 animate-scanline delay-75" />
        </div>

        {/* Binary Overlay */}
        <div className="absolute bottom-2 left-2 z-20 text-[6px] font-mono text-cyan-400 opacity-30">
           {Array(20).fill(0).map(() => Math.round(Math.random())).join('')}<br />
           {Array(20).fill(0).map(() => Math.round(Math.random())).join('')}
        </div>
      </div>

      <div className="p-4 bg-black relative z-10">
        <div className="flex justify-between items-start mb-2 group-hover:skew-x-3 transition-transform">
          <span className="text-[10px] font-mono text-cyan-500 tracking-widest uppercase">
            {product.brand}
          </span>
          <span className="text-[10px] font-mono text-white/40">
            {product.id}
          </span>
        </div>
        <h3 className="text-sm font-mono font-bold leading-tight uppercase mb-4 text-white group-hover:translate-x-1 transition-transform">
          {product.name}
        </h3>
        <div className="flex justify-between items-end">
          <span className="text-lg font-mono text-white tracking-tighter">
            {product.price}
          </span>
          <div className="flex flex-col items-end">
             <span className="text-[8px] font-mono text-red-500 leading-none">ERROR_DETECTED</span>
             <span className="text-[10px] font-mono text-cyan-400 group-hover:underline cursor-pointer">
                ACCESS_DATA_01
             </span>
          </div>
        </div>
      </div>

      {/* Side Glitch Bar */}
      <div className="absolute inset-y-0 right-0 w-[2px] bg-cyan-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />
    </motion.div>
  );
}
