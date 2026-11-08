import { Link } from "@tanstack/react-router";
import { formatDate, type Post } from "@/data/blog";

export function BlogCard({ post }: { post: Post }) {
  return (
    <Link to="/blog/$slug" params={{ slug: post.slug }} className="group block overflow-hidden rounded-2xl border bg-card transition hover:shadow-card">
      <div className="aspect-[16/10] overflow-hidden bg-muted">
        <img src={post.image} onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/images/image-pending.svg"; }} alt={post.imageAlt} loading="lazy" decoding="async" referrerPolicy="no-referrer" width={1280} height={896} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="space-y-2 p-5">
        <p className="eyebrow">{post.category}</p>
        <h3 className="text-xl leading-snug group-hover:text-primary">{post.title}</h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
        <p className="text-xs text-muted-foreground">{formatDate(post.date)} · {post.readMins} min read</p>
      </div>
    </Link>
  );
}
