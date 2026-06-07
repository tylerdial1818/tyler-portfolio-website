import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.frontmatter.title} - Tyler Dial`,
    description: post.frontmatter.description,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div style={{ background: "var(--bg)", color: "var(--fg)", minHeight: "100vh" }}>
      <Navigation />

      <main>
        <article className="post wrap">
          <Link href="/blog" className="backlink">
            &lt;- Back to Blog
          </Link>

          <div className="post-meta">
            <span className="tag">{post.frontmatter.tag}</span>
            <time>
              {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>

          <h1 className="h2 post-title">{post.frontmatter.title}</h1>

          <div className="post-body">
            <MDXRemote source={post.content} />
          </div>
        </article>
      </main>

      <Footer />

      <style>{`
        .post {
          padding-top: clamp(140px, 22vh, 220px);
          padding-bottom: clamp(90px, 13vh, 180px);
        }

        .backlink {
          color: var(--muted);
          display: inline-block;
          font-family: var(--mono);
          font-size: 12px;
          letter-spacing: 0.12em;
          margin-bottom: clamp(34px, 5vh, 64px);
          text-transform: uppercase;
        }

        .backlink:hover {
          color: var(--accent);
        }

        .post-meta {
          align-items: center;
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: clamp(20px, 3vh, 36px);
        }

        .post-meta time {
          color: var(--muted);
          font-family: var(--mono);
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .post-title {
          max-width: 12ch;
        }

        .post-body {
          border-top: 1px solid var(--line);
          margin-top: clamp(42px, 7vh, 90px);
          max-width: 760px;
          padding-top: clamp(34px, 5vh, 60px);
        }

        .post-body p,
        .post-body li {
          color: var(--fg);
          font-size: clamp(18px, 1.45vw, 22px);
          line-height: 1.58;
        }

        .post-body p {
          margin: 0 0 1.35em;
        }

        .post-body h2,
        .post-body h3 {
          font-weight: 500;
          letter-spacing: 0;
          line-height: 1;
          margin: 2.2em 0 0.75em;
        }

        .post-body h2 {
          font-size: clamp(30px, 4vw, 58px);
        }

        .post-body h3 {
          font-size: clamp(24px, 3vw, 40px);
        }

        .post-body a {
          color: var(--accent);
        }

        .post-body ul,
        .post-body ol {
          margin: 0 0 1.35em;
          padding-left: 1.2em;
        }

        .post-body pre {
          background: var(--fg);
          color: var(--bg);
          font-size: 14px;
          line-height: 1.6;
          margin: 2rem 0;
          overflow-x: auto;
          padding: 1.25rem;
        }

        .post-body code {
          font-family: var(--mono);
        }
      `}</style>
    </div>
  );
}
