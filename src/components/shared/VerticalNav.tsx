"use client";

import { useTheme } from "@/lib/ThemeContext";
import { motion } from "framer-motion";
import Link from "next/link";

const NAV_LINKS = [
  { id: "01", name: "COLLECTIONS", href: "/" },
  { id: "02", name: "ARCHIVE_FEED", href: "/archive" },
  { id: "03", name: "EDITORIAL", href: "/editorial" },
  { id: "04", name: "MANIFESTO", href: "/about" },
];

export default function VerticalNav() {
  const { theme } = useTheme();

  if (theme !== "raw-editorial") return null;

  return (
    <motion.nav 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed left-0 top-0 h-screen w-20 md:w-32 border-r border-neutral/10 bg-background z-50 flex flex-col items-center py-12 justify-between"
    >
      <div className="rotate-90 origin-center whitespace-nowrap">
        <Link href="/" className="text-xl font-serif tracking-tighter uppercase">
          Gri System
        </Link>
      </div>

      <div className="flex flex-col gap-12">
        {NAV_LINKS.map((link) => (
          <Link 
            key={link.id} 
            href={link.href}
            className="group flex flex-col items-center gap-2"
          >
            <span className="text-[10px] font-mono text-neutral-400 group-hover:text-accent transition-colors">
              {link.id}
            </span>
            <div className="h-20 w-[1px] bg-neutral/20 group-hover:bg-accent transition-colors relative">
               <span className="absolute bottom-0 left-1/2 -translate-x-1/2 rotate-90 origin-bottom-left text-[10px] font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                 {link.name}
               </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-[10px] font-mono text-neutral-400 rotate-90 origin-center mb-8 whitespace-nowrap">
        ©2026_UFA
      </div>
    </motion.nav>
  );
}
