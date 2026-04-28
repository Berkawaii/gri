"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { name: "ARCHIVE", href: "/" },
  { name: "EDITORIAL", href: "/editorial" },
  { name: "DROPS", href: "/drops" },
  { name: "SEARCH", href: "/search" },
];

export default function SmartHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
          className="fixed top-0 left-0 w-full z-50 border-b border-neutral/50 backdrop-blur-md bg-black/50 overflow-hidden"
        >
          <div className="max-w-[1800px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group relative">
              <span className="text-xl font-extrabold tracking-tighter leading-none block">
                GRI<br />SYSTEM
              </span>
              <span className="absolute -top-1 -right-4 text-[10px] font-mono text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                [ UFA-v0.1 ]
              </span>
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-8 md:gap-12">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative group text-sm font-medium tracking-widest overflow-hidden py-1"
                >
                  <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                    {link.name}
                  </span>
                  <span className="absolute top-0 left-0 block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-accent">
                    {link.name}
                  </span>
                  {/* Underline effect */}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Terminal Status (Desktop Only) */}
            <div className="hidden md:flex items-center gap-4 text-[10px] font-mono text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span>SYSTEM: ACTIVE</span>
              </div>
              <div className="w-[1px] h-3 bg-neutral" />
              <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} GMT+3</span>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
