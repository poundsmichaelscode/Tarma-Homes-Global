import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { formatDate, getPost, posts } from "@/data/blog";
import { BlogCard } from "@/components/site/BlogCard";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Article not found | TAMAR HOMES" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.post;
    return {
      ...seo(p.title, p.excerpt, `/blog/${params.slug}`, "article"),
      scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: p.title, datePublished: p.date, publisher: { "@type": "Organization", name: "TAMAR HOMES" } }) }],
    };
  },
  notFoundComponent: () => <div className="container-site py-24 text-center"><h1 className="text-4xl">Article not found</h1><Link to="/blog" className="mt-4 inline-block font-semibold text-primary">Back to blog</Link></div>,
  component: ArticlePage,
});

function ArticlePage() {
  const { post } = Route.useLoaderData();
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  return (
    <>
      <article className="container-site max-w-3xl py-14">
        <Link to="/blog" search={{ category: post.category }} className="eyebrow">{post.category}</Link>
        <h1 className="mt-3 text-4xl text-primary-deep md:text-5xl">{post.title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">{formatDate(post.date)} · {post.readMins} min read · TAMAR HOMES</p>
        <figure className="my-8">
          <img src={post.image} onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/images/image-pending.svg"; }}
            alt={post.imageAlt} width={1280} height={896}
            className="aspect-[16/9] w-full rounded-2xl bg-muted object-cover" />
          <figcaption className="mt-2 text-xs text-muted-foreground">
            Editorial illustration — not a Tamar Homes property listing. Photo by{" "}
            <a href={post.imageSource} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-primary">
              {post.imageCredit}
            </a>.
          </figcaption>
        </figure>
        <div className="prose-article">
          {post.body.map((b, i) => "h" in b ? <h2 key={i}>{b.h}</h2> : "p" in b ? <p key={i}>{b.p}</p> : <ul key={i}>{b.ul.map((li) => <li key={li}>{li}</li>)}</ul>)}
        </div>
      </article>
      <section className="bg-surface py-16">
        <div className="container-site">
          <h2 className="mb-6 text-3xl text-primary-deep">More articles</h2>
          <div className="grid gap-6 md:grid-cols-3">{more.map((p) => <BlogCard key={p.slug} post={p} />)}</div>
        </div>
      </section>
    </>
  );
}
