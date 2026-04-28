"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Product } from "@/lib/mock";
import { fadeInUp } from "@/lib/framer-variants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface EditorialCardProps {
  product: Product;
  index: number;
}

export default function EditorialCard({ product, index }: EditorialCardProps) {
  // Balanced layout but still asymmetric
  const isAlt = index % 2 === 1;

  return (
    <motion.div
      variants={fadeInUp}
      className={cn(
        "group relative flex flex-col gap-6",
        isAlt && "md:translate-y-24"
      )}
    >
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-neutral-200">
        {/* Primary Image */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          priority={index < 2}
        />
        
        {/* Secondary Image (Hover Reveal) */}
        <motion.div 
          className="absolute inset-0 z-10"
          initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
          whileHover={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <Image
            src={product.hoverImage}
            alt={`${product.name} alternate`}
            fill
            className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
          />
        </motion.div>
        
        {/* Red Status Dot */}
        <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
           <div className="w-1.5 h-1.5 rounded-full bg-accent" />
           <span className="text-[10px] font-bold tracking-widest text-black/50 uppercase">
             {product.category}
           </span>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-sm font-bold tracking-tight uppercase max-w-[70%]">
            {product.brand} {product.name}
          </h3>
          <span className="text-sm font-bold">{product.price}</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-[10px] font-bold text-accent uppercase tracking-widest">
            {product.discount}
          </span>
          <span className="text-[10px] font-bold border-b border-black cursor-pointer hover:text-accent hover:border-accent transition-all uppercase tracking-widest">
            Discovery
          </span>
        </div>
      </div>
    </motion.div>
  );
}
