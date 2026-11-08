import { Link } from "@tanstack/react-router";
import { Bath, BedDouble, MapPin, Ruler } from "lucide-react";
import type { Property } from "@/data/properties";
import { formatNaira } from "@/lib/site";

export function PropertyCard({ p }: { p: Property }) {
  return (
    <Link to="/properties/$slug" params={{ slug: p.slug }}
      className="group block overflow-hidden rounded-2xl border bg-card transition hover:-translate-y-1 hover:shadow-card">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={p.images[0]} alt={p.title} loading="lazy" width={1280} height={896} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${p.status === "Off-Plan" ? "bg-leaf text-leaf-foreground" : "bg-primary text-primary-foreground"}`}>{p.status}</span>
        <span className="absolute right-3 top-3 rounded-full bg-surface/90 px-3 py-1 text-xs font-medium">{p.type}</span>
      </div>
      <div className="space-y-3 p-5">
        <p className="text-xl font-bold text-primary">{formatNaira(p.price)}</p>
        <h3 className="text-xl leading-snug">{p.title}</h3>
        <p className="flex items-center gap-1 text-sm text-muted-foreground"><MapPin className="h-4 w-4 text-leaf-deep" />{p.area}, {p.city}</p>
        <div className="flex gap-4 border-t pt-3 text-sm text-muted-foreground">
          {p.bedrooms > 0 && <span className="flex items-center gap-1"><BedDouble className="h-4 w-4" />{p.bedrooms} Beds</span>}
          {p.bathrooms > 0 && <span className="flex items-center gap-1"><Bath className="h-4 w-4" />{p.bathrooms} Baths</span>}
          <span className="flex items-center gap-1"><Ruler className="h-4 w-4" />{p.size}</span>
        </div>
      </div>
    </Link>
  );
}
