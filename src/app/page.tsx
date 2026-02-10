"use client";

import Navigation from "@/components/Navigation";
import ScrollLogo from "@/components/ScrollLogo";
import ScrollPortrait from "@/components/ScrollPortrait";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import About from "@/components/About";
import BooksEnhanced from "@/components/BooksEnhanced";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { marqueeItems } from "@/data/skills";

export default function Home() {
  return (
    <div className="font-body font-light overflow-x-hidden" style={{ background: "var(--white)", color: "var(--ink)" }}>
      <ScrollLogo />
      <ScrollPortrait />
      <Navigation />
      <Hero />
      <div style={{ position: "relative", zIndex: 20 }}>
        <Marquee items={marqueeItems} />
        <Projects />
        <About />
        <BooksEnhanced />
        <Blog />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
