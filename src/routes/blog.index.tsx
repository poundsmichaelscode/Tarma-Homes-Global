import { createFileRoute, Link } from "@tanstack/react-router";
import { BLOG_CATEGORIES, posts } from "@/data/blog";
import { BlogCard } from "@/components/site/BlogCard";
import { PageHero } from "@/components/site/PageHero";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  validateSearch: (s: Record<string, unknown>): { category?: string } => ({ category: typeof s.category === "string" ? s.category : undefined }),
  head: () => seo("Blog — Real Estate Insights & Buying Guides", "Real estate insights, buying guides, investment, market trends, architecture and company updates from TAMAR HOMES.", "/blog"),
  component: BlogPage,
});

function BlogPage() {
  const { category } = Route.useSearch();
  const list = category ? posts.filter((p) => p.category === category) : posts;
  const pill = "rounded-full border px-4 py-2 text-sm font-medium transition";
  return (
    <>
      <PageHero eyebrow="Blog" title="Insights on buying, investing and building" />
      <div className="container-site py-12">
        <div className="mb-8 flex flex-wrap gap-2">
          <Link to="/blog" search={{}} className={`${pill} ${!category ? "border-primary bg-primary text-primary-foreground" : "bg-surface hover:border-primary"}`}>All</Link>
          {BLOG_CATEGORIES.map((c) => (
            <Link key={c} to="/blog" search={{ category: c }} className={`${pill} ${category === c ? "border-primary bg-primary text-primary-foreground" : "bg-surface hover:border-primary"}`}>{c}</Link>
          ))}
        </div>
        {list.length ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{list.map((p) => <BlogCard key={p.slug} post={p} />)}</div>
        ) : (
          <p className="rounded-2xl border border-dashed p-12 text-center text-muted-foreground">No articles in this category yet.</p>
        )}
      </div>
    </>
  );
}
