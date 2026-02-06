"use client";

import Link from "next/link";
import FadeIn from "./FadeIn";
import { blogPosts } from "@/data/blog";

export default function Blog() {
  return (
    <section
      id="blog"
      style={{
        padding: "5rem clamp(1.5rem, 5vw, 4rem) 7rem",
        background: "var(--light)",
        color: "var(--light-text)",
      }}
    >
      <FadeIn>
        <h2
          className="font-display font-bold mb-12"
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            letterSpacing: "-0.025em",
          }}
        >
          Recent <span style={{ color: "var(--accent)" }}>Writing</span>
        </h2>
      </FadeIn>

      {blogPosts.map((post, i) => (
        <FadeIn key={post.title} delay={i * 0.08}>
          <Link href={`/blog/${post.slug}`}>
            <div
              className="blog-row flex justify-between items-center"
              style={{ padding: "1.6rem 0.5rem" }}
            >
              <div className="flex items-center gap-5 min-w-0">
                <span className="tag-light shrink-0">{post.tag}</span>
                <h3
                  className="blog-title font-display font-semibold truncate"
                  style={{
                    fontSize: "clamp(1rem, 1.6vw, 1.25rem)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {post.title}
                </h3>
                <span className="blog-arrow text-lg shrink-0">&#8599;</span>
              </div>
              <span
                className="text-[0.78rem] whitespace-nowrap ml-6 shrink-0"
                style={{ color: "var(--muted-light)" }}
              >
                {post.date}
              </span>
            </div>
          </Link>
        </FadeIn>
      ))}
    </section>
  );
}
