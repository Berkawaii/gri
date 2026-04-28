"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Product } from "@/lib/mock";
import { fadeInUp } from "@/lib/framer-variants";

export default function BrutalistCard({ product }: { product: Product }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
    >
      <div className="relative aspect-square border-4 border-black mb-6 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute top-0 left-0 bg-black text-white px-4 py-2 font-mono text-xs font-bold">
           {product.id}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <span className="text-xs font-black uppercase tracking-tighter bg-black text-white self-start px-2 mb-2">
            {product.brand}
          </span>
          <h3 className="text-2xl font-black uppercase leading-none tracking-tighter">
            {product.name}
          </h3>
        </div>
        
        <div className="flex justify-between items-end border-t-4 border-black pt-4">
          <div className="flex flex-col text-xs font-black uppercase tracking-tighter">
             <span className="line-through text-neutral-400">{product.originalPrice}</span>
             <span className="text-2xl">{product.price}</span>
          </div>
          <button className="bg-black text-white px-6 py-2 font-black uppercase text-xs hover:bg-white hover:text-black transition-colors border-2 border-black">
             ACQUIRE
          </button>
        </div>
      </div>
    </motion.div>
  );
}
