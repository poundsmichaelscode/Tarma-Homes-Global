import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Bath, BedDouble, Car, Check, FileText, MapPin, MessageCircle, Ruler, Tag } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { getProperty, relatedProperties } from "@/data/properties";
import { PropertyCard } from "@/components/site/PropertyCard";
import { fieldClass } from "@/components/site/SearchBar";
import { formatNaira, SITE, whatsappLink } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/properties/$slug")({
  loader: ({ params }) => {
    const property = getProperty(params.slug);
    if (!property) throw notFound();
    return { property };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Property not found | TAMAR HOMES" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.property;
    const base = seo(`${p.title} in ${p.area}, ${p.city} — ${formatNaira(p.price)}`, `${p.summary} ${p.bedrooms ? `${p.bedrooms} bedrooms, ` : ""}${p.size}. For sale in ${p.area}, ${p.city}.`, `/properties/${params.slug}`, "product");
    return {
      ...base,
      scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "RealEstateListing", name: p.title, description: p.summary, offers: { "@type": "Offer", price: p.price, priceCurrency: "NGN" } }) }],
    };
  },
  notFoundComponent: () => (
    <div className="container-site py-24 text-center"><h1 className="text-4xl">Property not found</h1><Link to="/properties" className="mt-4 inline-block font-semibold text-primary">Browse all properties</Link></div>
  ),
  component: PropertyPage,
});

function PropertyPage() {
  const { property: p } = Route.useLoaderData();
  const [active, setActive] = useState(0);
  const [form, setForm] = useState({ name: "", phone: "", date: "", time: "10:00" });
  const enquiry = `Hello Tamar Homes Global, I'm interested in "${p.title}" in ${p.area}, ${p.city} (${formatNaira(p.price)}).`;
  const specs = [
    { i: Tag, l: "Type", v: p.type },
    ...(p.size !== "On request" ? [{ i: Ruler, l: "Size", v: p.size }] : []),
    ...(p.bedrooms ? [{ i: BedDouble, l: "Bedrooms", v: String(p.bedrooms) }] : []),
    ...(p.bathrooms ? [{ i: Bath, l: "Bathrooms", v: String(p.bathrooms) }] : []),
    ...(p.parking ? [{ i: Car, l: "Parking", v: `${p.parking} cars` }] : []),
  ];

  return (
    <div className="container-site py-10">
      <nav className="mb-6 text-sm text-muted-foreground"><Link to="/properties" className="hover:text-primary">Properties</Link> / {p.city} / <span className="text-foreground">{p.title}</span></nav>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,3fr)_minmax(0,1fr)]">
        <div className="relative overflow-hidden rounded-2xl bg-muted">
          <img
            src={p.images[active]}
            alt={`${p.title}, photograph ${active + 1} of ${p.images.length}`}
            onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = "/images/image-pending.svg"; }}
            width={1280}
            height={960}
            className="aspect-[4/3] w-full object-contain bg-muted lg:aspect-[16/10]"
          />
          <div className="absolute bottom-4 right-4 rounded-full bg-black/75 px-3 py-1.5 text-xs font-semibold text-white">
            {active + 1} / {p.images.length}
          </div>
        </div>
        <div className="grid max-h-[360px] grid-cols-3 gap-3 overflow-y-auto sm:grid-cols-4 lg:max-h-[640px] lg:grid-cols-2" aria-label="Property photo gallery">
          {p.images.map((img, i) => (
            <button key={img} type="button" onClick={() => setActive(i)}
              aria-label={`View property photo ${i + 1}`}
              aria-pressed={i === active}
              className={`overflow-hidden rounded-xl border-2 transition hover:opacity-90 ${i === active ? "border-primary" : "border-transparent"}`}>
              <img src={img} alt="" loading="lazy"
                onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = "/images/image-pending.svg"; }}
                className="aspect-[4/3] h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-10">
          <div>
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${p.status === "Off-Plan" ? "bg-leaf text-leaf-foreground" : "bg-primary text-primary-foreground"}`}>{p.status}</span>
            <h1 className="mt-4 text-4xl text-primary-deep md:text-5xl">{p.title}</h1>
            <p className="mt-2 flex items-center gap-1 text-muted-foreground"><MapPin className="h-4 w-4 text-leaf-deep" />{p.area}, {p.city}</p>
            <p className="mt-4 text-3xl font-bold text-primary">{formatNaira(p.price)}</p>
          </div>

          <section>
            <h2 className="mb-4 text-2xl">Specifications</h2>
            <dl className="grid grid-cols-2 gap-4 md:grid-cols-5">
              {specs.map(({ i: I, l, v }) => (
                <div key={l} className="rounded-xl border bg-card p-4"><I className="mb-2 h-5 w-5 text-primary" /><dt className="text-xs text-muted-foreground">{l}</dt><dd className="font-semibold">{v}</dd></div>
              ))}
            </dl>
          </section>

          <section>
            <h2 className="mb-3 text-2xl">Description</h2>
            {p.description.map((d, i) => <p key={i} className="mb-3 leading-relaxed text-muted-foreground">{d}</p>)}
          </section>

          <section>
            <h2 className="mb-4 text-2xl">Amenities</h2>
            <ul className="grid gap-3 sm:grid-cols-2">{p.amenities.map((a) => <li key={a} className="flex items-center gap-2"><Check className="h-4 w-4 text-leaf-deep" />{a}</li>)}</ul>
          </section>

          {p.documents.length > 0 && <section>
            <h2 className="mb-4 text-2xl">Documentation</h2>
            <ul className="space-y-2">{p.documents.map((d) => <li key={d} className="flex items-center gap-2"><FileText className="h-4 w-4 text-primary" />{d}</li>)}</ul>
            <p className="mt-4 rounded-xl bg-accent p-4 text-sm text-accent-foreground">Documents listed are as stated by the seller. Please verify all title documents with your own lawyer before making any payment.</p>
          </section>}

          <section>
            <h2 className="mb-4 text-2xl">Location</h2>
            <iframe title={`Map of ${p.area}`} loading="lazy" className="h-72 w-full rounded-2xl border" src={`https://maps.google.com/maps?q=${encodeURIComponent(`${p.area}, ${p.city}, Nigeria`)}&z=13&output=embed`} />
            <p className="mt-2 text-xs text-muted-foreground">Map shows the general area. Exact address is shared on inspection.</p>
          </section>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <a href={whatsappLink(enquiry)} target="_blank" rel="noreferrer" className="flex w-full items-center justify-center gap-2 rounded-full bg-leaf py-4 font-semibold text-leaf-foreground hover:bg-leaf-deep">
            <MessageCircle className="h-5 w-5" /> Enquire on WhatsApp
          </a>
          <form
            className="space-y-3 rounded-2xl border bg-card p-6"
            onSubmit={(e) => {
              e.preventDefault();
              window.open(whatsappLink(`${enquiry}\n\nI'd like to schedule an inspection.\nName: ${form.name}\nPhone: ${form.phone}\nPreferred date: ${form.date} at ${form.time}`), "_blank");
              toast.success("Opening WhatsApp to send your inspection request.");
            }}
          >
            <h2 className="text-2xl">Schedule an Inspection</h2>
            <p className="text-sm text-muted-foreground">Prefer email? <a className="font-semibold text-primary underline underline-offset-2" href={`mailto:${SITE.email}?subject=${encodeURIComponent(`Property enquiry: ${p.title}`)}`}>{SITE.email}</a></p>
            <input required aria-label="Full name" placeholder="Full name" className={fieldClass} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input required aria-label="Phone number" type="tel" placeholder="Phone number" className={fieldClass} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            <div className="grid grid-cols-2 gap-3">
              <input required aria-label="Preferred date" type="date" min={new Date().toISOString().slice(0, 10)} className={fieldClass} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
              <input required aria-label="Preferred time" type="time" className={fieldClass} value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} />
            </div>
            <button className="h-12 w-full rounded-xl bg-primary font-semibold text-primary-foreground hover:bg-primary-deep">Request inspection</button>
          </form>
        </aside>
      </div>

      <section className="mt-20">
        <h2 className="mb-6 text-3xl text-primary-deep">Related properties</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{relatedProperties(p).map((r) => <PropertyCard key={r.slug} p={r} />)}</div>
      </section>
    </div>
  );
}
