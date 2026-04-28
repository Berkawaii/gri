"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/framer-variants";
import { MOCK_PRODUCTS } from "@/lib/mock";
import ArchiveCard from "./ArchiveCard";
import { useTheme } from "@/lib/ThemeContext";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function GridSystem() {
  const { theme } = useTheme();

  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-[var(--neutral)]/20 border border-[var(--card-border)]",
        theme === "raw-editorial" && "gap-12 md:gap-20 bg-transparent border-none overflow-visible"
      )}
    >
      {MOCK_PRODUCTS.map((product, index) => {
        let cardClass = "";
        
        if (theme === "raw-editorial") {
          // Swiss style: some cards are shifted or different sizes
          if (index % 3 === 0) cardClass = "md:mt-20";
          if (index % 4 === 1) cardClass = "lg:translate-y-12";
        } else {
          if (index % 5 === 0) cardClass = "md:col-span-2 aspect-[2/1] lg:aspect-[16/9]";
        }

        return (
          <ArchiveCard 
            key={product.id} 
            product={product} 
            className={cardClass}
          />
        );
      })}
    </motion.section>
  );
}
