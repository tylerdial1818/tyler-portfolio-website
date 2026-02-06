"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TypedText from "./TypedText";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center"
      style={{
        padding: "0 clamp(1.5rem, 5vw, 4rem)",
        background: "var(--dark)",
        color: "var(--dark-text)",
      }}
    >
      {/* Background orb */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: "12%",
          right: "6%",
          width: 550,
          height: 550,
          background:
            "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
          filter: "blur(80px)",
          transform: `translateY(${scrollY * 0.08}px)`,
        }}
      />

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full max-w-[1300px] mx-auto py-32 lg:py-0">
        {/* Text left */}
        <motion.div
          className="lg:w-[58%]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <div
            className="mb-8 font-normal"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--muted-dark)",
            }}
          >
            <TypedText
              texts={[
                "Data Scientist and AI Product Engineer",
                "Building production-grade ML tools",
                "Turning complexity into clarity",
              ]}
            />
          </div>

          <h1
            className="font-display font-[800]"
            style={{
              fontSize: "clamp(2.6rem, 7vw, 5.8rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
            }}
          >
            Building tools
            <br />
            <span style={{ color: "var(--accent)" }}>that make</span> data
            <br />
            <span style={{ color: "var(--accent)" }}>actionable</span>
          </h1>

          <div
            className="my-10 max-w-[260px] h-[2px]"
            style={{
              background:
                "linear-gradient(90deg, var(--accent), transparent)",
            }}
          />

          <p
            className="max-w-[490px]"
            style={{
              fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
              lineHeight: 1.75,
              color: "var(--muted-dark)",
            }}
          >
            I design and build data science applications with production-grade
            engineering. I'm passionate about the intersection of rigorous analysis
            and elegant software, and I'm interested in seeing AI used for the good
            of humanity.
          </p>
        </motion.div>

        {/* Portrait right */}
        <motion.div
          className="lg:w-[42%] flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          style={{ transform: `translateY(${scrollY * -0.04}px)` }}
        >
          <div
            className="relative rounded-xl overflow-hidden"
            style={{
              width: "clamp(280px, 100%, 480px)",
              aspectRatio: "3/4",
              border: "1px solid var(--accent-border)",
              boxShadow:
                "0 0 60px var(--accent-glow), 0 25px 50px rgba(0,0,0,0.4)",
            }}
          >
            <Image
              src="/images/portrait.jpg"
              alt="Tyler Dial"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 80vw, 40vw"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-25"
      >
        <span
          className="text-[0.6rem] uppercase"
          style={{ letterSpacing: "0.2em" }}
        >
          Scroll
        </span>
        <div
          className="w-px h-9"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.35), transparent)",
          }}
        />
      </div>
    </section>
  );
}
