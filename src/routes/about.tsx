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
      <section aria-labelledby="meet-our-ceo" className="border-t border-border bg-background py-16">
        <div className="container-site grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <figure className="mx-auto w-full max-w-md lg:mx-0">
            <img
              src="/images/team/olajumoke-esther-rhema.webp"
              alt="Olajumoke Esther Rhema, CEO of Tamar Homes"
              loading="lazy"
              decoding="async"
              width={960}
              height={1280}
              className="aspect-[3/4] w-full rounded-3xl object-cover object-top shadow-card"
            />
          </figure>
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-leaf-deep">Leadership</p>
            <h2 id="meet-our-ceo" className="text-3xl font-semibold text-primary-deep sm:text-4xl">Meet our CEO</h2>
            <div>
              <h3 className="text-2xl font-semibold text-foreground">Olajumoke Esther Rhema</h3>
              <p className="mt-1 text-base font-semibold text-primary">Chief Executive Officer, TAMAR HOMES</p>
            </div>
            <p className="max-w-xl leading-relaxed text-muted-foreground">
              Meet the leader behind TAMAR HOMES. Our commitment to transparency,
              professionalism and confident property decisions guides the experience
              we aim to provide for buyers, sellers and property owners.
            </p>
            <Link to="/contact" className="inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary-deep">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
      <section aria-labelledby="meet-our-sales-manager" className="border-t border-border bg-surface/40 py-16">
        <div className="container-site grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <div className="order-2 space-y-5 lg:order-1">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-leaf-deep">Our team</p>
            <h2 id="meet-our-sales-manager" className="text-3xl font-semibold text-primary-deep sm:text-4xl">Meet our Administrative &amp; Sales Manager</h2>
            <div>
              <h3 className="text-2xl font-semibold text-foreground">Jovial Nneoma Okpo</h3>
              <p className="mt-1 text-base font-semibold text-primary">Administrative / Sales Manager, TAMAR HOMES</p>
            </div>
            <p className="max-w-xl leading-relaxed text-muted-foreground">
              Meet a member of the TAMAR HOMES team supporting our administrative
              and sales operations as we help clients navigate property enquiries
              and their next steps.
            </p>
            <Link to="/contact" className="inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary-deep">
              Contact our team
            </Link>
          </div>
          <figure className="order-1 mx-auto w-full max-w-md lg:order-2 lg:mx-0">
            <img
              src="/images/team/jovial-nneoma-okpo.webp"
              alt="Jovial Nneoma Okpo, Administrative and Sales Manager at Tamar Homes"
              loading="lazy"
              decoding="async"
              width={960}
              height={1200}
              className="aspect-[4/5] w-full rounded-3xl object-cover object-top shadow-card"
            />
          </figure>
        </div>
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
