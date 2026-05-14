"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp } from "@/lib/framer-variants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface DatabaseProduct {
  url: string;
  brand: string;
  name: string;
  category: string;
  prices: { integer: number; decimal: number; currency: string }[];
  images: string[];
  sizes: { size: string; inStock: boolean }[];
  colors: { url: string; image: string }[];
  description: string;
}

interface CyberNoirCardProps {
  product: DatabaseProduct;
  index: number;
  className?: string;
  onClick?: () => void;
}

export default function CyberNoirCard({ product, index, className, onClick }: CyberNoirCardProps) {
  // Determine if any size is in stock
  const inStock = product.sizes.some((size) => size.inStock);
  const status = inStock ? "ONLINE" : "OFFLINE";
  const hasDiscount = product.prices.length > 1;
  const currentPrice = product.prices[0];
  const oldPrice = hasDiscount ? product.prices[1] : null;

  const formattedPrice = currentPrice
    ? `${currentPrice.integer} ${currentPrice.currency}`
    : "DATA_UNAVAILABLE";
  
  const formattedOldPrice = oldPrice
    ? `${oldPrice.integer} ${oldPrice.currency}`
    : null;

  const mainImage = product.images[0] || "";
  const hexId = `0x${(index * 9999).toString(16).toUpperCase().padStart(4, "0")}`;

  return (
    <motion.div
      variants={fadeInUp}
      onClick={onClick}
      className={cn(
        "group relative border border-[var(--card-border)] bg-surface overflow-hidden aspect-square md:aspect-[3/4] flex flex-col cursor-pointer",
        className
      )}
    >
      {/* Header Info (Technical) */}
      <div className="absolute top-0 left-0 w-full p-4 z-10 flex justify-between items-start pointer-events-none">
        <div className="bg-black/90 backdrop-blur-md border border-accent/20 px-3 py-1 shadow-[0_0_10px_rgba(204,255,0,0.1)]">
          <p className="text-[10px] font-mono leading-none tracking-widest text-accent">
            ID: {hexId}
          </p>
        </div>
        <div
          className={cn(
            "px-3 py-1 text-[10px] font-mono font-bold tracking-widest uppercase shadow-[0_0_10px_rgba(0,0,0,0.5)]",
            inStock
              ? "bg-accent text-black border border-accent"
              : "bg-black/90 text-white/50 border border-neutral/50 line-through"
          )}
        >
          {status}
        </div>
      </div>

      {/* Image Container */}
      <div className="relative flex-grow overflow-hidden bg-[#F5F5F5]">
        {mainImage && (
          <Image
            src={mainImage}
            alt={product.name}
            fill
            className="object-contain mix-blend-multiply grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}

        {/* Vignette Shadow to blend edges into the dark theme */}
        <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.3)] pointer-events-none z-10" />

        {/* Overlay scanning effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/10 to-transparent -translate-y-full group-hover:animate-[scan_2s_ease-in-out_infinite] opacity-0 group-hover:opacity-100 pointer-events-none mix-blend-overlay z-10" />

        {/* Hover Technical Stats overlay */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end items-start p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="font-mono text-accent text-[9px] tracking-widest text-left space-y-1.5 bg-black/70 backdrop-blur-md border border-accent/40 p-3 shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            <p>COLORS_FOUND: {product.colors.length || 1}</p>
            <p>SIZE_DATA: {product.sizes.length} ENTRIES</p>
            <p>CAT: {product.category.toUpperCase()}</p>
            <div className="h-px w-full bg-accent/40 my-1.5" />
            <p className="animate-pulse opacity-80">AUTHORIZING_ACCESS...</p>
          </div>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="p-5 border-t border-neutral/50 relative bg-black/95 z-30 transition-transform duration-300">
        <div className="flex justify-between items-end gap-4">
          <div className="flex-grow overflow-hidden">
            <p className="text-[10px] font-mono text-accent/80 mb-2 uppercase tracking-[0.2em]">
              // {product.brand}
            </p>
            <h3
              className="text-base font-sans font-bold leading-tight uppercase tracking-tight text-white truncate glitch-text"
              data-text={product.name}
            >
              {product.name}
            </h3>
          </div>
          <div className="text-right flex-shrink-0">
            <p className={cn("text-[10px] font-mono mb-1", hasDiscount ? "text-red-500 animate-pulse" : "text-neutral-500")}>
              {hasDiscount ? "PRICE_DROP" : "SYS_VAL"}
            </p>
            <div className="flex flex-col items-end leading-none">
              {hasDiscount && (
                <span className="text-[10px] font-mono text-neutral-500 line-through mb-1">
                  {formattedOldPrice}
                </span>
              )}
              <p 
                className={cn("text-lg font-mono font-bold text-accent", hasDiscount && "glitch-text")}
                data-text={formattedPrice}
              >
                {formattedPrice}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Border & Corner Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30" />
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center z-30" />
    </motion.div>
  );
}
