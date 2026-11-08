import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="bg-brand-gradient text-primary-foreground">
      <div className="container-site py-16 md:py-20">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-leaf">{eyebrow}</p>
        <h1 className="max-w-3xl text-4xl md:text-5xl">{title}</h1>
        {children && <div className="mt-4 max-w-2xl text-primary-foreground/80">{children}</div>}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="eyebrow mb-2">{eyebrow}</p>
      <h2 className="text-3xl text-primary-deep md:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-muted-foreground">{sub}</p>}
    </div>
  );
}
