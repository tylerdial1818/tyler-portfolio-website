"use client";

import Link from "next/link";
import Reveal from "./FadeIn";
import { blogPosts } from "@/data/blog";

export default function Blog() {
  const px = "clamp(2rem, 7vw, 7rem)";

  return (
    <section id="blog" style={{ padding: `10rem ${px}` }}>
      <Reveal>
        <div className="uppercase" style={{ fontSize: "0.62rem", letterSpacing: "0.2em", color: "var(--accent)", marginBottom: "1.5rem" }}>Writing</div>
        <h2 className="font-display font-[800]" style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: "5rem" }}>Recent Writing</h2>
      </Reveal>

      {blogPosts.map((post, i) => (
        <Reveal key={post.title} delay={i * 0.06}>
          <Link href={`/blog/${post.slug}`}>
            <div className="blog-item" style={{ borderTop: "1px solid var(--rule)", padding: "2.5rem 0" }}>
              <div className="flex items-center gap-4 mb-2.5">
                <span className="font-body text-[0.68rem]" style={{ color: "var(--accent)" }}>[0{i + 1}]</span>
                <span style={{ fontSize: "0.6rem", letterSpacing: "0.08em", padding: "0.22rem 0.6rem", border: "1px solid var(--rule)", borderRadius: 100, color: "var(--accent)" }}>{post.tag}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <h3 className="bl-title font-display font-semibold" style={{ fontSize: "clamp(1.15rem, 2.2vw, 1.6rem)", letterSpacing: "-0.02em" }}>{post.title}</h3>
                  <span className="bl-arrow text-lg shrink-0" style={{ color: "var(--accent)" }}>&#8599;</span>
                </div>
                <span className="text-[0.76rem] shrink-0 ml-8" style={{ color: "var(--accent)" }}>{post.date}</span>
              </div>
            </div>
          </Link>
        </Reveal>
      ))}
      <div className="h-px" style={{ background: "var(--rule)" }} />
    </section>
  );
}
