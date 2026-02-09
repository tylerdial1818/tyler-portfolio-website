"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import TypedText from "./TypedText";

function RotatingText({ lines }: { lines: string[] }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % lines.length);
        setVisible(true);
      }, 600);
    }, 7000);
    return () => clearInterval(interval);
  }, [lines.length]);

  return (
    <div className="animate-fade-in delay-300" style={{ maxWidth: "640px" }}>
      <p
        style={{
          fontSize: "1.2rem",
          lineHeight: 1.8,
          color: "var(--muted)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(8px)",
        }}
      >
        {lines[index]}
      </p>
    </div>
  );
}

export default function Hero() {
  const px = "clamp(2rem, 7vw, 7rem)";

  return (
    <>
      {/* Main Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center"
        style={{
          padding: `12rem ${px} 8rem`,
        }}
      >
        <div
          className="max-w-[1600px] mx-auto w-full grid items-center"
          style={{
            gridTemplateColumns: "1fr 300px",
            gap: "3rem",
          }}
        >
          {/* Left: All text content */}
          <div>
            {/* Tagline */}
            <div
              className="font-normal animate-fade-in"
              style={{
                fontSize: "1.5rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "2.5rem",
              }}
            >
              <TypedText texts={["AI ENGINEER & PRODUCT DEVELOPER", "SOCIAL IMPACT DATA SCIENTIST", "I BUILD AI FOR HUMANS"]} />
            </div>

            {/* Large Hero Text */}
            <h1
              className="font-display font-[900] animate-fade-in-up delay-100"
              style={{
                fontSize: "clamp(3.5rem, 8vw, 7rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.05em",
                marginBottom: "3.5rem",
              }}
            >
              AI for Humanity
            </h1>

            {/* Description — rotating */}
            <RotatingText
              lines={[
                "Deep technical expertise in data science and production-grade software engineering — building AI-powered products that solve real-world problems.",
                "Social impact data scientist working with nonprofit and humanitarian organizations to make the world safer, healthier, and more equitable.",
              ]}
            />
          </div>

          {/* Right: Portrait */}
          <div
            className="hidden md:block overflow-hidden animate-fade-in delay-200"
            style={{
              width: "100%",
              height: "420px",
              borderRadius: 12,
            }}
          >
            <Image
              src="/images/portrait.jpg"
              alt="Tyler Dial"
              width={700}
              height={960}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-fade-in delay-600"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            opacity: 0.4,
          }}
        >
          <div 
            style={{
              width: "1px",
              height: "60px",
              background: "var(--ink)",
              animation: "scrollPulse 2s ease-in-out infinite",
            }}
          />
          <span style={{ 
            fontSize: "0.65rem", 
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}>
            Scroll
          </span>
        </div>
      </section>

    </>
  );
}

// Add scroll pulse animation to CSS if not exists
