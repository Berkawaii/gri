"use client";

import { useTheme } from "@/lib/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { LayoutGrid, SwatchBook, Terminal, X } from "lucide-react";

const THEMES = [
  { id: "cyber-noir", name: "CYBER_NOIR", color: "#CCFF00" },
  { id: "raw-editorial", name: "RAW_EDITORIAL", color: "#FF0001" },
  { id: "brutalist", name: "BRUTALIST", color: "#000000" },
  { id: "glitch", name: "GLITCH_CMD", color: "#00f3ff" },
  { id: "ethereal", name: "ETHEREAL_VOID", color: "#c084fc" },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="mb-4 p-2 bg-black/80 backdrop-blur-xl border border-white/10 flex flex-col gap-1 w-48 shadow-2xl"
          >
            <div className="px-3 py-2 border-b border-white/5 mb-1 flex items-center justify-between">
              <span className="text-[10px] font-mono text-white/40 tracking-[0.2em]">DESIGN_LAB</span>
              <Terminal size={10} className="text-white/40" />
            </div>
            {THEMES.map((t) => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id as any)}
                className={`flex items-center justify-between px-3 py-2 text-[11px] font-mono tracking-widest transition-all ${
                  theme === t.id 
                    ? "bg-white text-black" 
                    : "text-white/60 hover:bg-white/5"
                }`}
              >
                <span>{t.name}</span>
                <div 
                  className="w-1.5 h-1.5 rounded-full" 
                  style={{ backgroundColor: t.color }} 
                />
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 border ${
          isOpen ? "bg-white text-black border-white" : "bg-black text-white border-white/20"
        }`}
      >
        {isOpen ? <X size={20} /> : <SwatchBook size={20} />}
      </button>
    </div>
  );
}
