import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { CITIES, filterProperties, properties, PROPERTY_TYPES, type PropertyFilters } from "@/data/properties";
import { PropertyCard } from "@/components/site/PropertyCard";
import { PageHero } from "@/components/site/PageHero";
import { fieldClass } from "@/components/site/SearchBar";
import { seo } from "@/lib/seo";

type Search = PropertyFilters & { sort?: "price-asc" | "price-desc" };
const num = (v: unknown) => (v === undefined || v === "" || isNaN(Number(v)) ? undefined : Number(v));
const str = (v: unknown) => (typeof v === "string" && v ? v : undefined);

export const Route = createFileRoute("/properties/")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    q: str(s.q), type: str(s.type), city: str(s.city),
    minPrice: num(s.minPrice), maxPrice: num(s.maxPrice), beds: num(s.beds),
    sort: s.sort === "price-asc" || s.sort === "price-desc" ? s.sort : undefined,
  }),
  head: () => seo("Properties for Sale", "Search and filter houses, apartments, land and commercial properties for sale in Lagos, Abuja and Port Harcourt.", "/properties"),
  component: PropertiesPage,
});

const PRICE_STEPS = [25_000_000, 50_000_000, 100_000_000, 200_000_000, 500_000_000, 1_000_000_000];
const short = (n: number) => (n >= 1e9 ? `₦${n / 1e9}bn` : `₦${n / 1e6}m`);

function PropertiesPage() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/properties/" });
  const set = (patch: Partial<Search>) => navigate({ search: (prev) => ({ ...prev, ...patch }), replace: true });
  let results = filterProperties(properties, search);
  if (search.sort === "price-asc") results = [...results].sort((a, b) => a.price - b.price);
  if (search.sort === "price-desc") results = [...results].sort((a, b) => b.price - a.price);

  return (
    <>
      <PageHero eyebrow="Properties" title="Properties for sale" />
      <div className="container-site py-12">
        <div className="grid gap-3 rounded-2xl border bg-surface p-4 md:grid-cols-3 lg:grid-cols-7">
          <input aria-label="Search" className={`${fieldClass} lg:col-span-2`} placeholder="Search area or title" value={search.q ?? ""} onChange={(e) => set({ q: e.target.value || undefined })} />
          <select aria-label="Type" className={fieldClass} value={search.type ?? ""} onChange={(e) => set({ type: e.target.value || undefined })}>
            <option value="">All types</option>{PROPERTY_TYPES.map((t) => <option key={t}>{t}</option>)}
          </select>
          <select aria-label="City" className={fieldClass} value={search.city ?? ""} onChange={(e) => set({ city: e.target.value || undefined })}>
            <option value="">All cities</option>{CITIES.map((c) => <option key={c}>{c}</option>)}
          </select>
          <select aria-label="Max price" className={fieldClass} value={search.maxPrice ?? ""} onChange={(e) => set({ maxPrice: num(e.target.value) })}>
            <option value="">Any price</option>{PRICE_STEPS.map((p) => <option key={p} value={p}>Up to {short(p)}</option>)}
          </select>
          <select aria-label="Bedrooms" className={fieldClass} value={search.beds ?? ""} onChange={(e) => set({ beds: num(e.target.value) })}>
            <option value="">Any beds</option>{[1, 2, 3, 4, 5].map((b) => <option key={b} value={b}>{b}+ beds</option>)}
          </select>
          <select aria-label="Sort" className={fieldClass} value={search.sort ?? ""} onChange={(e) => set({ sort: (e.target.value || undefined) as Search["sort"] })}>
            <option value="">Sort: Recommended</option><option value="price-asc">Price: Low to high</option><option value="price-desc">Price: High to low</option>
          </select>
        </div>
        <div className="my-6 flex items-center justify-between text-sm text-muted-foreground">
          <p>{results.length} propert{results.length === 1 ? "y" : "ies"} found</p>
          <Link to="/properties" search={{}} className="font-semibold text-primary">Clear filters</Link>
        </div>
        {results.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{results.map((p) => <PropertyCard key={p.slug} p={p} />)}</div>
        ) : (
          <div className="rounded-2xl border border-dashed p-12 text-center text-muted-foreground">No properties match these filters. Try widening your search.</div>
        )}
      </div>
    </>
  );
}
