"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp } from "@/lib/framer-variants";
import { Maximize2, X } from "lucide-react";

export interface EditorialPost {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  createdAt: number;
}

interface EditorialFeedPostProps {
  post: EditorialPost;
}

export default function EditorialFeedPost({ post }: EditorialFeedPostProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const dateStr = new Date(post.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <motion.article 
      variants={fadeInUp}
      className="relative flex flex-col md:flex-row gap-8 py-12 border-b border-accent/20 group"
    >
      {/* Decorative Index / Status */}
      <div className="absolute top-12 -left-8 md:-left-12 hidden md:flex flex-col items-center gap-2">
         <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
         <div className="w-[1px] h-24 bg-gradient-to-b from-accent/50 to-transparent" />
      </div>

      {post.imageUrl && (
        <div 
          onClick={() => setIsExpanded(true)}
          className="w-full md:w-1/3 aspect-video md:aspect-[4/5] relative border border-white/10 overflow-hidden bg-neutral-900 group-hover:border-accent/50 transition-colors cursor-pointer"
        >
          <motion.img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            animate={{ objectPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          
          {/* Expand Icon */}
          <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm border border-accent/20 p-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
            <Maximize2 size={16} />
          </div>
        </div>
      )}
      
      <div className={`flex flex-col flex-1 ${!post.imageUrl ? 'md:pl-12' : ''}`}>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[10px] font-mono text-accent/60 tracking-widest uppercase">
            [ LOG: {dateStr} ]
          </span>
          <span className="text-[10px] font-mono text-neutral-500 tracking-widest">
            {post.id.slice(0, 8)}
          </span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-mono uppercase tracking-tighter text-white mb-6 group-hover:text-accent transition-colors duration-500">
          {post.title}
        </h2>
        
        <div className="text-sm md:text-base font-mono text-neutral-400 leading-relaxed max-w-3xl whitespace-pre-wrap">
          {post.content}
        </div>
        
        <div className="mt-8 flex items-center gap-2">
           <div className="w-4 h-[1px] bg-accent" />
           <span className="text-[10px] font-mono text-accent tracking-widest uppercase">
             END_OF_RECORD
           </span>
        </div>
      </div>

      {/* Fullscreen Glitch Modal */}
      <AnimatePresence>
        {isExpanded && post.imageUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-4 md:p-12 cursor-pointer"
          >
            {/* Background effects */}
            <div className="absolute inset-0 scanlines pointer-events-none opacity-50" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ccff0005_1px,transparent_1px),linear-gradient(to_bottom,#ccff0005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

            <button 
              className="absolute top-8 right-8 text-neutral-500 hover:text-accent transition-colors z-50 bg-black/50 p-2 border border-white/10"
              onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }}
            >
              <X size={24} />
            </button>

            <motion.div 
              initial={{ scale: 0.95, filter: "brightness(2) contrast(1.5) hue-rotate(90deg)" }}
              animate={{ scale: 1, filter: "brightness(1) contrast(1) hue-rotate(0deg)" }}
              exit={{ scale: 0.95, filter: "brightness(2) contrast(1.5) hue-rotate(-90deg)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full h-full max-w-6xl max-h-[80vh]"
            >
              {/* Glitch duplicate layers for aesthetic */}
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="absolute inset-0 w-full h-full object-contain opacity-50 mix-blend-screen translate-x-1"
                style={{ filter: "hue-rotate(90deg)" }}
              />
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="absolute inset-0 w-full h-full object-contain opacity-50 mix-blend-screen -translate-x-1"
                style={{ filter: "hue-rotate(-90deg)" }}
              />
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="relative z-10 w-full h-full object-contain"
              />
              
              <div className="absolute -bottom-8 left-0 right-0 flex justify-between items-center text-[10px] font-mono text-accent tracking-widest uppercase">
                <span>[ FILE: {post.title.substring(0, 20)}... ]</span>
                <span className="animate-pulse">SYSTEM_VIEWER_ACTIVE</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
