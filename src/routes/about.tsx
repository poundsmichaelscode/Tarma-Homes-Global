// Illustrative architecture photograph; not a Tamar Homes listing.
const aboutImage = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85";

import { createFileRoute, Link } from "@tanstack/react-router";
import { Eye, ShieldCheck, Target } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { seo } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => seo("About Us", "Learn about TAMAR HOMES, a premium real estate sales company helping buyers and sellers across Nigeria.", "/about"),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About us" title="Helping people own property with confidence" />
      <section className="container-site grid items-center gap-12 py-16 lg:grid-cols-2">
        <div className="space-y-4 text-muted-foreground">
          <p className="text-lg text-foreground">TAMAR HOMES is a real estate company focused on the sale of premium residential, land and commercial properties in Nigeria.</p>
          <p>We believe buying property should be transparent. That's why our listings show pricing in Naira, the documentation provided by sellers, and a straightforward way to book an inspection.</p>
          <p>For property owners, we provide a professional platform to present their properties to serious buyers.</p>
          <div className="flex flex-wrap items-center gap-4"><Link to="/contact" className="inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary-deep">Speak with our team</Link><a className="text-sm font-semibold text-primary underline underline-offset-4" href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
        </div>
        <figure><img src={aboutImage} alt="Contemporary premium home with expansive glass windows and welcoming architectural design, illustrating Tamar Homes’ vision" loading="lazy" decoding="async" width={1280} height={896} className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card" /><figcaption className="mt-2 text-xs text-muted-foreground">Illustrative architecture photography; not a Tamar Homes property listing. <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer" className="underline">Unsplash License</a>.</figcaption></figure>
      </section>
      <section className="bg-surface py-16">
        <div className="container-site grid gap-6 md:grid-cols-3">
          {[
            { i: Target, t: "Our mission", d: "To make buying and selling property in Nigeria clearer, simpler and better informed." },
            { i: Eye, t: "Our vision", d: "To be a trusted name for premium property sales." },
            { i: ShieldCheck, t: "Our values", d: "Transparency, professionalism and respect for every client's decision." },
          ].map(({ i: I, t, d }) => (
            <div key={t} className="rounded-2xl border bg-background p-8"><I className="mb-4 h-8 w-8 text-leaf-deep" /><h2 className="mb-2 text-2xl text-primary-deep">{t}</h2><p className="text-muted-foreground">{d}</p></div>
          ))}
        </div>
      </section>
    </>
  );
}
