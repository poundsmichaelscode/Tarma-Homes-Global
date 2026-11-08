import { createFileRoute, Link } from "@tanstack/react-router";
import { FileSearch, Home, KeyRound, LineChart } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { seo } from "@/lib/seo";

export const SERVICES = [
  { icon: Home, title: "Property Sales", text: "Curated houses, apartments, land and commercial buildings for sale across Nigeria." },
  { icon: KeyRound, title: "Seller Listings", text: "We present your property to qualified buyers with professional listing pages." },
  { icon: FileSearch, title: "Documentation Guidance", text: "We help you understand the title documents attached to a property, alongside your lawyer." },
  { icon: LineChart, title: "Investment Advisory", text: "Discuss options for off-plan, land banking and income-generating property." },
];

export const Route = createFileRoute("/services")({
  head: () => seo("Our Services", "Property sales, seller listings, documentation guidance and investment advisory from TARMAR HOMES.", "/services"),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Support at every step of a property sale">
        <p>Whether you are buying your first home or selling a portfolio asset, we keep the process clear.</p>
      </PageHero>
      <div className="container-site grid gap-6 py-16 md:grid-cols-2">
        {SERVICES.map(({ icon: I, title, text }) => (
          <div key={title} className="rounded-2xl border bg-card p-8">
            <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-secondary"><I className="h-6 w-6 text-primary" /></span>
            <h2 className="mb-2 text-2xl text-primary-deep">{title}</h2>
            <p className="text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
      <div className="container-site pb-20">
        <div className="flex flex-col items-start justify-between gap-4 rounded-3xl bg-brand-gradient p-10 text-primary-foreground md:flex-row md:items-center">
          <h2 className="text-3xl">Ready to talk?</h2>
          <div className="flex gap-3">
            <Link to="/contact" className="rounded-full bg-leaf px-6 py-3 font-semibold text-leaf-foreground hover:bg-leaf-deep">Contact us</Link>
            <Link to="/list-your-property" className="rounded-full border border-primary-foreground/40 px-6 py-3 font-semibold">List a property</Link>
          </div>
        </div>
      </div>
    </>
  );
}
