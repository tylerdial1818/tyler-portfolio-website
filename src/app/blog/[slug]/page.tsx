import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import Link from "next/link";

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
    title: `${post.frontmatter.title} — Tyler Dial`,
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
    <div
      className="min-h-screen"
      style={{ background: "var(--light)", color: "var(--light-text)" }}
    >
      <article
        className="max-w-3xl mx-auto pt-32 pb-20"
        style={{ padding: "8rem clamp(1.5rem, 5vw, 4rem) 5rem" }}
      >
        <Link
          href="/blog"
          className="text-[0.78rem] uppercase mb-8 inline-block"
          style={{
            letterSpacing: "0.12em",
            color: "var(--muted-light)",
          }}
        >
          &larr; Back to Blog
        </Link>

        <div className="mb-4">
          <span className="tag-light">{post.frontmatter.tag}</span>
        </div>

        <h1
          className="font-display font-bold mb-4"
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            letterSpacing: "-0.025em",
            lineHeight: 1.15,
          }}
        >
          {post.frontmatter.title}
        </h1>

        <time
          className="text-[0.85rem] mb-12 block"
          style={{ color: "var(--muted-light)" }}
        >
          {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </time>

        <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-[var(--accent)] prose-code:text-[0.9em]">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </div>
  );
}
