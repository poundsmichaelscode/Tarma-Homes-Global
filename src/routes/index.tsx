// Neutral placeholder until approved company photography is imported from Google Drive.
import { IMAGE_PENDING as approvedImagePending } from "@/lib/assets";
const hero = approvedImagePending;

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, FileCheck2, Handshake, Home, Landmark, MapPinned, MessageSquareQuote, Trees } from "lucide-react";
import { properties, PROPERTY_TYPES } from "@/data/properties";
import { posts } from "@/data/blog";
import { PropertyCard } from "@/components/site/PropertyCard";
import { BlogCard } from "@/components/site/BlogCard";
import { SearchBar } from "@/components/site/SearchBar";
import { SectionHeading } from "@/components/site/PageHero";
import { Newsletter } from "@/components/site/Newsletter";
import { SERVICES } from "./services";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => seo("Premium Homes & Land for Sale in Nigeria", "Discover premium houses, apartments, land and commercial properties for sale in Lagos, Abuja and Port Harcourt with TAMAR HOMES.", "/"),
  component: Index,
});

const typeIcons = { "Detached House": Home, "Semi-Detached": Home, Terrace: Building2, Apartment: Building2, Land: Trees, Commercial: Landmark } as const;

function Index() {
  const featured = properties.filter((p) => p.featured);
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img src={hero} alt="Modern luxury home at sunset" width={1920} height={1088} className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="container-site py-24 md:py-36">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-leaf">Property sales across Nigeria</p>
          <h1 className="max-w-2xl text-5xl leading-[1.05] text-primary-foreground md:text-7xl">Find a home worth owning.</h1>
          <p className="mt-5 max-w-lg text-lg text-primary-foreground/85">Houses, apartments, land and commercial properties for sale — with clear documentation and guided inspections.</p>
          <div className="mt-10 max-w-4xl"><SearchBar /></div>
        </div>
      </section>

      <section className="container-site py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Featured listings" title="Hand-picked properties" />
          <Link to="/properties" className="mb-10 inline-flex items-center gap-2 font-semibold text-primary">View all <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => <PropertyCard key={p.slug} p={p} />)}
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-site">
          <SectionHeading eyebrow="Categories" title="Browse by property type" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {PROPERTY_TYPES.map((t) => {
              const Icon = typeIcons[t];
              const count = properties.filter((p) => p.type === t).length;
              return (
                <Link key={t} to="/properties" search={{ type: t }} className="rounded-2xl border bg-background p-5 text-center transition hover:border-primary hover:shadow-card">
                  <Icon className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <p className="font-semibold">{t}</p>
                  <p className="text-xs text-muted-foreground">{count} listing{count === 1 ? "" : "s"}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-site grid items-center gap-12 py-20 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="About TAMAR HOMES" title="A property sales company built on clarity" sub="We help buyers find, inspect and purchase property with confidence — and help owners present their properties to serious buyers." />
          <ul className="space-y-4">
            {[
              { i: FileCheck2, t: "Documentation shown upfront", d: "Every listing states the title documents the seller has provided." },
              { i: MapPinned, t: "Guided inspections", d: "Schedule a viewing directly from any property page." },
              { i: Handshake, t: "Direct communication", d: "Speak to our team on WhatsApp, phone or email." },
            ].map(({ i: I, t, d }) => (
              <li key={t} className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent"><I className="h-5 w-5 text-leaf-deep" /></span><div><p className="font-semibold">{t}</p><p className="text-sm text-muted-foreground">{d}</p></div></li>
            ))}
          </ul>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary-deep">Learn about us <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <img src={properties[1].images[0]} alt="Modern terrace duplex" loading="lazy" width={1280} height={896} className="rounded-3xl shadow-card" />
      </section>

      <section className="bg-brand-gradient py-20 text-primary-foreground">
        <div className="container-site">
          <p className="eyebrow mb-2 !text-leaf">Services</p>
          <h2 className="mb-10 text-3xl md:text-4xl">How we can help</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map(({ icon: I, title, text }) => (
              <div key={title} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6">
                <I className="mb-4 h-8 w-8 text-leaf" />
                <h3 className="mb-2 text-xl">{title}</h3>
                <p className="text-sm text-primary-foreground/75">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-20">
        <SectionHeading eyebrow="Testimonials" title="Client stories" />
        <div className="rounded-3xl border border-dashed bg-surface p-10 text-center">
          <MessageSquareQuote className="mx-auto mb-4 h-10 w-10 text-primary" />
          <p className="mx-auto max-w-xl text-muted-foreground">Verified reviews from our clients will be published here. We only share feedback from real, completed transactions.</p>
          <Link to="/contact" className="mt-6 inline-flex font-semibold text-primary">Worked with us? Share your experience →</Link>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="From the blog" title="Insights for buyers & investors" />
            <Link to="/blog" className="mb-10 inline-flex items-center gap-2 font-semibold text-primary">All articles <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((p) => <BlogCard key={p.slug} post={p} />)}
          </div>
        </div>
      </section>

      <section className="container-site py-20">
        <div className="grid items-center gap-8 rounded-3xl bg-accent p-10 md:grid-cols-2 md:p-14">
          <div>
            <h2 className="text-3xl text-primary-deep">Get new listings first</h2>
            <p className="mt-2 text-accent-foreground">Join our newsletter for new properties and practical buying guides.</p>
          </div>
          <Newsletter />
        </div>
      </section>
    </>
  );
}
