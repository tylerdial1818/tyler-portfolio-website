"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Books from "@/components/Books";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { marqueeItems } from "@/data/skills";

export default function Home() {
  return (
    <div className="font-body font-light overflow-x-hidden" style={{ background: "var(--white)", color: "var(--ink)" }}>
      <Navigation />
      <Hero />
      <Marquee items={marqueeItems} />
      <Projects />
      <About />
      <Books />
      <Blog />
      <CTA />
      <Footer />
    </div>
  );
}
