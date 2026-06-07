import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/mdx";

export const metadata = {
  title: "Blog - Tyler Dial",
  description: "Thoughts on data science, engineering, and building tools.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div style={{ background: "var(--bg)", color: "var(--fg)", minHeight: "100vh" }}>
      <Navigation />

      <main>
        <header className="page-hero wrap">
          <span className="eyebrow">Writing</span>
          <h1 className="display blog-display">Blog</h1>
          <p className="lead">
            Notes on data science, AI engineering, visualization, and the messy
            path from analysis to useful software.
          </p>
        </header>

        <section className="section wrap blog-list-section">
          {posts.length === 0 && <p className="lead">No posts yet. Check back soon.</p>}

          <div className="blog-list">
            {posts.map((post, index) => (
              <Link className="writerow" href={`/blog/${post.slug}`} key={post.slug}>
                <span className="writerow__n">[{String(index + 1).padStart(2, "0")}]</span>
                <span className="tag">{post.tag}</span>
                <span className="writerow__title">{post.title}</span>
                <time className="writerow__date">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </time>
                <span className="writerow__arrow">-&gt;</span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .page-hero {
          padding-top: clamp(140px, 22vh, 250px);
          padding-bottom: clamp(36px, 7vh, 84px);
        }

        .blog-display {
          font-size: clamp(64px, 16vw, 260px);
          margin-top: 0.1em;
        }

        .page-hero .lead {
          margin-top: clamp(22px, 3.5vh, 40px);
          max-width: 40ch;
        }

        .blog-list-section {
          padding-top: clamp(36px, 6vh, 72px);
        }

        .blog-list {
          border-top: 1px solid var(--line);
        }

        .writerow {
          align-items: center;
          border-bottom: 1px solid var(--line);
          display: grid;
          gap: clamp(14px, 2vw, 30px);
          grid-template-columns: 72px auto minmax(0, 1fr) auto auto;
          padding: clamp(22px, 3vw, 42px) 0;
        }

        .writerow__n,
        .writerow__date,
        .writerow__arrow {
          color: var(--muted);
          font-family: var(--mono);
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .writerow__title {
          font-size: clamp(24px, 3.2vw, 56px);
          font-weight: 500;
          letter-spacing: 0;
          line-height: 1;
          transition: color 0.3s;
        }

        .writerow__arrow {
          color: var(--accent);
          font-size: clamp(18px, 2vw, 28px);
          transition: transform 0.35s var(--reveal-ease);
        }

        .writerow:hover .writerow__title {
          color: var(--accent);
        }

        .writerow:hover .writerow__arrow {
          transform: translate(5px, -5px);
        }

        @media (max-width: 760px) {
          .writerow {
            align-items: start;
            grid-template-columns: 1fr auto;
          }

          .writerow__n,
          .writerow__date {
            grid-column: span 1;
          }

          .writerow .tag,
          .writerow__title {
            grid-column: 1 / -1;
          }
        }
      `}</style>
    </div>
  );
}
