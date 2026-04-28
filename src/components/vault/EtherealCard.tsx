"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Product } from "@/lib/mock";
import { fadeInUp } from "@/lib/framer-variants";

export default function EtherealCard({ product }: { product: Product }) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -10 }}
      className="group relative bg-white/5 backdrop-blur-3xl border border-white/10 p-4 shadow-[0_20px_50px_rgba(192,132,252,0.1)] hover:shadow-[0_40px_80px_rgba(192,132,252,0.2)] transition-all duration-700"
    >
      <div className="relative aspect-[3/4] overflow-hidden mb-6">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover scale-110 blur-[2px] opacity-60 group-hover:blur-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent opacity-60" />
        
        {/* Floating Aura */}
        <div className="absolute -inset-10 bg-purple-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      </div>

      <div className="relative z-10 flex flex-col gap-2">
        <span className="text-[10px] font-medium tracking-[0.4em] text-purple-300 uppercase">
          {product.brand}
        </span>
        <h3 className="text-xl font-serif italic text-white/90 leading-tight">
          {product.name}
        </h3>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-light tracking-tighter text-white/80">
            {product.price}
          </span>
          <div className="w-8 h-[1px] bg-white/20 group-hover:w-16 transition-all duration-500" />
        </div>
      </div>

      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden">
         <div className="absolute top-[-50%] right-[-50%] w-full h-full bg-white/5 rotate-45" />
      </div>
    </motion.div>
  );
}
