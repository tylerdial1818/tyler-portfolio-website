"use client";

import Link from "next/link";
import Reveal from "./FadeIn";
import { blogPosts } from "@/data/blog";

export default function Blog() {
  return (
    <section className="section" id="writing">
      <div className="wrap">
        <Reveal>
          <div className="eyebrow">Writing</div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="h2 h2--compact" style={{ marginTop: "0.3em" }}>
            Recent writing
          </h2>
        </Reveal>

        <div style={{ marginTop: "clamp(36px, 5vh, 64px)" }}>
          {blogPosts.map((post, index) => {
            const row = (
              <>
                <span className="writerow__n">[{String(index + 1).padStart(2, "0")}]</span>
                <span className="writerow__t">{post.title}</span>
                <span className="writerow__kind">{post.tag}</span>
                <span className="writerow__date">{post.date} ↗</span>
              </>
            );

            return (
              <Reveal delay={0.06 + index * 0.07} key={post.title}>
                {post.href ? (
                  <a
                    className="writerow"
                    href={post.href}
                    rel="noopener noreferrer"
                    target={post.href.startsWith("http") ? "_blank" : undefined}
                  >
                    {row}
                  </a>
                ) : (
                  <Link className="writerow" href={`/blog/${post.slug}`}>
                    {row}
                  </Link>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
