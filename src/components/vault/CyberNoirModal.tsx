"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { DatabaseProduct } from "@/components/vault/CyberNoirCard";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CyberNoirModalProps {
  product: DatabaseProduct;
  onClose: () => void;
}

const glitchVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)", clipPath: "inset(50% 50% 50% 50%)" },
  animate: {
    opacity: [0, 1, 0, 1, 0.5, 1],
    scale: [0.95, 1.05, 0.98, 1.02, 1, 1],
    filter: ["blur(10px)", "blur(0px)", "blur(5px)", "blur(0px)", "blur(2px)", "blur(0px)"],
    clipPath: [
      "inset(50% 50% 50% 50%)",
      "inset(10% 0 80% 0)",
      "inset(80% 0 5% 0)",
      "inset(0% 0 0% 0)",
      "inset(40% 0 40% 0)",
      "inset(0% 0 0% 0)"
    ],
    transition: { duration: 0.5, ease: "easeInOut" }
  },
  exit: {
    opacity: [1, 0, 1, 0],
    scale: [1, 1.05, 0.9, 0.9],
    filter: ["blur(0px)", "blur(5px)", "blur(10px)", "blur(20px)"],
    clipPath: [
      "inset(0% 0 0% 0)",
      "inset(20% 0 60% 0)",
      "inset(60% 0 20% 0)",
      "inset(50% 50% 50% 50%)"
    ],
    transition: { duration: 0.3 }
  }
};

const textContainer = {
  hidden: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.01, delayChildren: 0.4 }
  }
};

const textChar = {
  hidden: { opacity: 0 },
  animate: { opacity: 1 }
};

export default function CyberNoirModal({ product, onClose }: CyberNoirModalProps) {
  const [activeImage, setActiveImage] = useState(0);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.overscrollBehavior = "none";
    document.documentElement.style.overscrollBehavior = "none";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.overscrollBehavior = "";
      document.documentElement.style.overscrollBehavior = "";
    };
  }, []);

  const formattedPrice = product.prices[0]
    ? `${product.prices[0].integer} ${product.prices[0].currency}`
    : "DATA_UNAVAILABLE";

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl"
      onWheel={(e) => e.stopPropagation()}
    >
      {/* Main Modal Container */}
      <motion.div
        variants={glitchVariants}
        initial="hidden"
        animate="animate"
        exit="exit"
        className="relative w-full max-w-7xl h-[90vh] bg-black border border-accent/40 shadow-[0_0_50px_rgba(204,255,0,0.1)] flex flex-col overflow-hidden"
      >
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ccff0005_1px,transparent_1px),linear-gradient(to_bottom,#ccff0005_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

        {/* Header */}
        <div className="flex-shrink-0 flex justify-between items-center p-4 md:p-6 border-b border-accent/30 bg-black/80 relative z-20">
          <div className="flex items-center gap-4">
            <span className="w-3 h-3 bg-accent animate-pulse" />
            <h2 className="font-mono text-accent text-sm md:text-base tracking-widest uppercase">
              SYS.ARCHIVE // ITEM_DETAILS
            </h2>
          </div>
          <button
            onClick={onClose}
            className="font-mono text-accent text-xs md:text-sm tracking-widest border border-accent/50 px-4 py-2 hover:bg-accent hover:text-black transition-colors cursor-pointer"
          >
            [X] DISCONNECT
          </button>
        </div>

        {/* Content Layout */}
        <div className="flex-grow min-h-0 flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden relative z-20">
          
          {/* Left: Image Gallery */}
          <div className="w-full lg:w-3/5 lg:h-full border-b lg:border-b-0 lg:border-r border-accent/30 flex flex-col p-4 md:p-8 gap-4 min-h-0 lg:overflow-y-auto overscroll-contain">
            {/* Main Image */}
            <div className="relative w-full h-[300px] lg:h-full lg:min-h-[400px] bg-neutral-900/50 border border-accent/20 flex-shrink-0 group overflow-hidden">
              <Image
                src={product.images[activeImage]}
                alt={product.name}
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 font-mono text-accent text-xs px-2 py-1 bg-black/80 border border-accent/30 pointer-events-none">
                IMG_{activeImage.toString().padStart(2, "0")}
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent -translate-y-full animate-[scan_3s_ease-in-out_infinite] pointer-events-none mix-blend-overlay opacity-50" />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 flex-shrink-0">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={cn(
                    "relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 border bg-neutral-900/50 transition-all duration-300 overflow-hidden cursor-pointer",
                    activeImage === idx ? "border-accent scale-105" : "border-neutral-800 opacity-50 hover:opacity-100 hover:border-accent/50"
                  )}
                >
                  <Image src={img} alt={`Thumb ${idx}`} fill className="object-contain grayscale hover:grayscale-0 transition-all duration-300 pointer-events-none" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Details & Telemetry */}
          <div className="w-full lg:w-2/5 lg:h-full p-4 md:p-8 bg-black/95 min-h-0 lg:overflow-y-auto flex flex-col gap-8 overscroll-contain">
            
            {/* Title & Brand */}
            <div>
              <p className="text-xs font-mono text-accent/80 tracking-[0.2em] mb-2 uppercase">
                // {product.brand}
              </p>
              <h1 className="text-3xl md:text-5xl font-sans font-bold uppercase tracking-tight text-white mb-4 glitch-text" data-text={product.name}>
                {product.name}
              </h1>
              <p className="text-2xl md:text-3xl font-mono text-accent">
                {formattedPrice}
              </p>
            </div>

            {/* Sizes Matrix */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-accent" />
                <h3 className="font-mono text-accent text-xs md:text-sm tracking-widest uppercase">Inventory Matrix</h3>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <div
                    key={size.size}
                    className={cn(
                      "font-mono text-[9px] md:text-[10px] py-2 text-center border transition-colors",
                      size.inStock 
                        ? "border-accent text-accent bg-accent/10 hover:bg-accent hover:text-black cursor-pointer shadow-[0_0_10px_rgba(204,255,0,0.1)]" 
                        : "border-neutral-800 text-neutral-600 bg-neutral-900/50 cursor-not-allowed line-through"
                    )}
                  >
                    {size.size.replace("EU ", "")}
                  </div>
                ))}
              </div>
            </div>

            {/* Typewriter Description */}
            <div className="border border-accent/20 p-4 bg-accent/5">
              <p className="text-[10px] font-mono text-accent/60 mb-2">[ DATA_STREAM_INCOMING ]</p>
              <motion.p
                variants={textContainer}
                initial="hidden"
                animate="animate"
                className="font-mono text-xs md:text-sm leading-relaxed text-neutral-300"
              >
                {product.description.split("").map((char, index) => (
                  <motion.span key={index} variants={textChar}>
                    {char}
                  </motion.span>
                ))}
              </motion.p>
            </div>

          </div>
        </div>

        {/* Decorative Corners */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent pointer-events-none z-30" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent pointer-events-none z-30" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent pointer-events-none z-30" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent pointer-events-none z-30" />
      </motion.div>
    </div>
  );
}
