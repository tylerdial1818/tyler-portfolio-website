import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export const metadata = {
  title: "Blog — Tyler Dial",
  description: "Thoughts on data science, engineering, and building tools.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--light)", color: "var(--light-text)" }}
    >
      <div
        className="max-w-3xl mx-auto pt-32 pb-20"
        style={{ padding: "8rem clamp(1.5rem, 5vw, 4rem) 5rem" }}
      >
        <h1
          className="font-display font-bold mb-12"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            letterSpacing: "-0.025em",
          }}
        >
          Blog
        </h1>

        {posts.length === 0 && (
          <p style={{ color: "var(--muted-light)" }}>
            No posts yet. Check back soon.
          </p>
        )}

        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div
              className="blog-row flex justify-between items-center"
              style={{ padding: "1.6rem 0.5rem" }}
            >
              <div className="flex items-center gap-5">
                <span className="tag-light">{post.tag}</span>
                <h3
                  className="blog-title font-display font-semibold"
                  style={{
                    fontSize: "clamp(1rem, 1.6vw, 1.25rem)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {post.title}
                </h3>
              </div>
              <span
                className="text-[0.78rem] whitespace-nowrap ml-6"
                style={{ color: "var(--muted-light)" }}
              >
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
