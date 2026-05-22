"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Terminal, Send, Image as ImageIcon } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function CreatePostPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "editorial_posts"), {
        title,
        content,
        imageUrl: imageUrl || null,
        createdAt: Date.now(),
      });
      setTitle("");
      setContent("");
      setImageUrl("");
      setIsOpen(false);
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create post. Check console.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-8 z-[100] bg-accent text-black p-4 rounded-full shadow-[0_0_20px_rgba(204,255,0,0.5)] hover:scale-110 transition-transform"
        title="CREATE_NEW_LOG"
      >
        <Plus className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="w-full max-w-2xl bg-black border border-accent/30 shadow-2xl overflow-hidden relative"
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-accent/20 bg-accent/5">
                <div className="flex items-center gap-2 text-accent">
                  <Terminal size={14} />
                  <span className="text-[10px] font-mono tracking-widest">SYS.ADMIN // CREATE_LOG</span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-500 hover:text-accent transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 md:p-8 flex flex-col gap-6">
                
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-mono text-accent tracking-widest">LOG_TITLE</label>
                  <input 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-transparent border-b border-white/20 px-0 py-2 font-mono text-xl text-white focus:outline-none focus:border-accent transition-colors placeholder:text-neutral-700"
                    placeholder="Enter designation..."
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-mono text-accent tracking-widest flex items-center gap-2">
                    <ImageIcon size={12} /> IMAGE_URL (OPTIONAL)
                  </label>
                  <input 
                    type="url"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="bg-transparent border-b border-white/20 px-0 py-2 font-mono text-sm text-neutral-300 focus:outline-none focus:border-accent transition-colors placeholder:text-neutral-700"
                    placeholder="https://..."
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-mono text-accent tracking-widest">LOG_CONTENT</label>
                  <textarea 
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="bg-white/5 border border-white/10 p-4 font-mono text-sm text-neutral-300 h-48 focus:outline-none focus:border-accent resize-none transition-colors placeholder:text-neutral-700"
                    placeholder="Enter telemetric data..."
                    required
                  />
                </div>

                <div className="flex justify-end pt-4 border-t border-white/10">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 bg-accent text-black px-6 py-3 text-xs font-mono font-bold tracking-widest hover:bg-white transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? "TRANSMITTING..." : "PUBLISH_LOG"}
                    {!isSubmitting && <Send size={14} />}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
