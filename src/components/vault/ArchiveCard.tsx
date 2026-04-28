"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Product } from "@/lib/mock";
import { fadeInUp } from "@/lib/framer-variants";
import { useTheme } from "@/lib/ThemeContext";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ArchiveCardProps {
  product: Product;
  className?: string;
}

export default function ArchiveCard({ product, className }: ArchiveCardProps) {
  const { theme } = useTheme();

  // RAW EDITORIAL LAYOUT
  if (theme === "raw-editorial") {
    return (
      <motion.div
        variants={fadeInUp}
        className={cn(
          "group relative overflow-visible flex flex-col gap-4",
          className
        )}
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-neutral-200">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          
          {/* Sticker Style Discount */}
          <div className="absolute -top-2 -right-2 bg-accent text-white font-mono text-[10px] font-bold px-4 py-2 rotate-12 shadow-lg border border-white/20">
            {product.discount} OFF
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-[10px] font-bold tracking-tighter text-neutral-400">
            {product.brand}
          </p>
          <h3 className="text-xl font-serif italic lowercase leading-none">
            {product.name}
          </h3>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm font-bold">{product.price}</span>
            <span className="text-[10px] font-bold underline underline-offset-4 cursor-pointer hover:text-accent transition-colors">
              VIEW_ARCHIVE
            </span>
          </div>
        </div>
      </motion.div>
    );
  }

  // CYBER NOIR LAYOUT (DEFAULT)
  return (
    <motion.div
      variants={fadeInUp}
      className={cn(
        "group relative border-[var(--card-border)] bg-surface overflow-hidden aspect-[4/5] flex flex-col",
        className
      )}
    >
      {/* Header Info (Technical) */}
      <div className="absolute top-0 left-0 w-full p-4 z-10 flex justify-between items-start pointer-events-none">
        <div className="bg-black/80 backdrop-blur-sm border border-neutral/50 px-2 py-1">
          <p className="text-[10px] font-mono leading-none tracking-tighter">
            ID: {product.id}
          </p>
        </div>
        <div className={cn(
          "px-2 py-1 text-[10px] font-mono font-bold border",
          product.status === "In Stock" 
            ? "bg-accent text-black border-accent" 
            : "bg-black text-white/50 border-neutral line-through"
        )}>
          {product.status.toUpperCase()}
        </div>
      </div>

      {/* Image Container */}
      <div className="relative flex-grow overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
      </div>

      {/* Bottom Info */}
      <div className="p-4 border-t border-neutral/30 relative bg-surface">
        <div className="flex justify-between items-end gap-4">
          <div className="flex-grow">
            <p className="text-[10px] font-mono text-accent mb-1 uppercase tracking-widest">
              {product.brand}
            </p>
            <h3 className="text-sm font-serif leading-tight line-clamp-1 uppercase tracking-tight">
              {product.name}
            </h3>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-mono line-through text-neutral-500 leading-none mb-1">
              {product.originalPrice}
            </p>
            <p className="text-lg font-mono font-bold leading-none text-white whitespace-nowrap">
              {product.price}
            </p>
          </div>
        </div>

        {/* Discount Badge */}
        <div className="absolute -top-6 right-4 bg-accent text-black font-mono text-xs font-bold px-3 py-1 scale-0 group-hover:scale-100 origin-bottom transition-transform duration-300">
          [ {product.discount} ]
        </div>
      </div>

      {/* Interactive Border (Cyber Effect) */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
}
