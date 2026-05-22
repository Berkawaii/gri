"use client";

import { useState, useEffect } from "react";
import SmoothScroll from "@/components/shared/SmoothScroll";
import SmartHeader from "@/components/shared/SmartHeader";
import AuthButton from "@/components/shared/AuthButton";
import EditorialFeedPost, { EditorialPost } from "@/components/views/EditorialFeedPost";
import CreatePostPanel from "@/components/admin/CreatePostPanel";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/lib/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/framer-variants";

export default function EditorialPage() {
  const { isAdmin } = useAuth();
  const [posts, setPosts] = useState<EditorialPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, "editorial_posts"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData: EditorialPost[] = [];
      snapshot.forEach((doc) => {
        postsData.push({ id: doc.id, ...doc.data() } as EditorialPost);
      });
      setPosts(postsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="bg-background selection:bg-accent selection:text-black min-h-screen relative">
      <div className="scanlines" />
      <SmartHeader />
      <AuthButton />
      {isAdmin && <CreatePostPanel />}

      {/* Hero Section */}
      <section className="relative pt-40 pb-12 px-6 md:px-12 border-b border-accent/20">
        <div className="max-w-[1800px] mx-auto relative z-10 flex flex-col items-start">
          <p className="text-accent font-mono text-xs tracking-[0.2em] mb-4 border border-accent/30 inline-block px-3 py-1 bg-black/50">
            [ SYS.DIR: /EDITORIAL/FEED ]
          </p>
          <h1 className="text-5xl md:text-8xl font-serif leading-[0.85] tracking-tighter uppercase text-white glitch-text" data-text="Curated Logs">
            Curated<br />Logs
          </h1>
        </div>
        {/* Background Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ccff0005_1px,transparent_1px),linear-gradient(to_bottom,#ccff0005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      </section>

      {/* Feed Section */}
      <main className="px-6 md:px-12 py-12 relative z-10 min-h-screen">
        <div className="max-w-[1000px] mx-auto pl-0 md:pl-12">
          {loading ? (
            <div className="flex flex-col gap-4 text-accent font-mono text-sm animate-pulse">
              <p>{"INITIALIZING_CONNECTION..."}</p>
              <p>{"FETCHING_TELEMETRY_LOGS..."}</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-neutral-500 font-mono text-sm tracking-widest border border-white/10 p-8 text-center bg-black/50">
              [ NO_LOGS_FOUND_IN_DATABASE ]
            </div>
          ) : (
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="flex flex-col gap-8"
            >
              {posts.map((post) => (
                <EditorialFeedPost key={post.id} post={post} />
              ))}
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}
