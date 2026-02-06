"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Books from "@/components/Books";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { skillsMarquee, blogMarquee } from "@/data/skills";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen
            key="loading"
            onComplete={handleLoadingComplete}
          />
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Film grain overlay */}
          <div className="grain" />

          {/* Custom cursor (desktop only) */}
          <CustomCursor />

          {/* Navigation */}
          <Navigation />

          {/* Hero */}
          <Hero />

          {/* Skills Marquee */}
          <div style={{ background: "var(--dark)" }}>
            <Marquee items={skillsMarquee} dark />
          </div>

          {/* Projects */}
          <Projects />

          {/* About / Bento Grid */}
          <About />

          {/* Books */}
          <Books />

          {/* Blog Marquee */}
          <div style={{ background: "var(--light)" }}>
            <Marquee items={blogMarquee} dark={false} />
          </div>

          {/* Blog */}
          <Blog />

          {/* CTA */}
          <CTA />

          {/* Footer */}
          <Footer />
        </motion.div>
      )}
    </>
  );
}
