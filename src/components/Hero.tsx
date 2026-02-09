"use client";

import Image from "next/image";
import TypedText from "./TypedText";

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
        <div className="max-w-[1600px] mx-auto w-full">
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
              fontSize: "clamp(3.5rem, 10vw, 9rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.05em",
              maxWidth: "1400px",
              marginBottom: "3.5rem",
            }}
          >
            AI for Humanity
          </h1>

          {/* Description Grid */}
          <div 
            className="grid gap-16 animate-fade-in delay-300"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              maxWidth: "1200px",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "1.25rem",
                  lineHeight: 1.7,
                  color: "var(--muted)",
                }}
              >
                I combine deep technical expertise in data science with 
                production-grade software engineering to build AI-powered 
                products that solve real-world problems.
              </p>
            </div>
            
            <div>
              <p
                style={{
                  fontSize: "1.25rem",
                  lineHeight: 1.7,
                  color: "var(--muted)",
                }}
              >
                I also work as a social impact data scientist working with
                nonprofit and humanitarian organizations to make the world
                safer, healthier, and more equitable.
              </p>
            </div>
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

      {/* Featured Image Section */}
      <section
        style={{
          padding: `4rem ${px} 8rem`,
          background: "var(--white)",
        }}
      >
        <div className="max-w-[1600px] mx-auto">
          <div
            className="w-full overflow-hidden animate-scale-in delay-400"
            style={{
              aspectRatio: "16/9",
              borderRadius: 12,
              boxShadow: "0 30px 80px rgba(0,0,0,0.12)",
            }}
          >
            <Image
              src="/images/portrait.jpg"
              alt="Tyler Dial"
              width={1600}
              height={900}
              className="w-full h-full object-cover block"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}

// Add scroll pulse animation to CSS if not exists
