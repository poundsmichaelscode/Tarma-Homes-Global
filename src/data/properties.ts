// Neutral placeholder until approved company photography is imported from Google Drive.
import { IMAGE_PENDING as approvedImagePending } from "@/lib/assets";

export type PropertyType = "Detached House" | "Semi-Detached" | "Terrace" | "Apartment" | "Land" | "Commercial";

export interface Property {
  slug: string;
  title: string;
  type: PropertyType;
  status: "For Sale" | "Off-Plan";
  price: number;
  city: "Lagos" | "Abuja" | "Port Harcourt";
  area: string;
  bedrooms: number;
  bathrooms: number;
  size: string;
  parking: number;
  featured: boolean;
  images: string[];
  summary: string;
  description: string[];
  amenities: string[];
  documents: string[];
}

export const PROPERTY_TYPES: PropertyType[] = ["Detached House", "Semi-Detached", "Terrace", "Apartment", "Land", "Commercial"];
export const CITIES = ["Lagos", "Abuja", "Port Harcourt"] as const;

export const properties: Property[] = [
  {
    slug: "3-bedroom-serviced-apartment-ikate",
    title: "3-Bedroom Serviced Apartment with Elevator & Pool",
    type: "Apartment",
    status: "For Sale",
    price: 250_000_000,
    city: "Lagos",
    area: "Ikate, Lekki",
    bedrooms: 3,
    bathrooms: 0, // Not supplied; do not display a guessed bathroom count.
    size: "On request",
    parking: 0, // Not supplied.
    featured: true,
    images: [
      "/images/approved/ikate-serviced-apartment/exterior.webp",
      "/images/approved/ikate-serviced-apartment/gallery-02.webp",
      "/images/approved/ikate-serviced-apartment/gallery-03.webp",
      "/images/approved/ikate-serviced-apartment/gallery-04.webp",
      "/images/approved/ikate-serviced-apartment/gallery-05.webp",
      "/images/approved/ikate-serviced-apartment/gallery-06.webp",
      "/images/approved/ikate-serviced-apartment/gallery-07.webp",
      "/images/approved/ikate-serviced-apartment/gallery-08.webp",
      "/images/approved/ikate-serviced-apartment/gallery-09.webp",
      "/images/approved/ikate-serviced-apartment/gallery-10.webp",
      "/images/approved/ikate-serviced-apartment/gallery-11.webp",
      "/images/approved/ikate-serviced-apartment/gallery-12.webp",
    ], // User-supplied property photographs; copy files into public/images/approved/ikate-serviced-apartment.
    summary: "Three-bedroom serviced apartment in Ikate, Lekki, offered at ₦250 million, with an elevator and swimming pool.",
    description: [
      "A three-bedroom serviced apartment in Ikate, Lekki, Lagos, priced at ₦250 million.",
      "The property features elevator access and a swimming pool. Contact Tamar Homes for inspection arrangements and additional verified specifications.",
    ],
    amenities: ["Elevator", "Swimming pool"],
    documents: [], // Title documentation requires confirmation.
  },
];

export interface PropertyFilters {
  q?: string;
  type?: string;
  city?: string;
  minPrice?: number;
  maxPrice?: number;
  beds?: number;
}

export function filterProperties(list: Property[], f: PropertyFilters): Property[] {
  const q = f.q?.trim().toLowerCase();
  return list.filter((p) => {
    if (q && !`${p.title} ${p.area} ${p.city} ${p.type}`.toLowerCase().includes(q)) return false;
    if (f.type && p.type !== f.type) return false;
    if (f.city && p.city !== f.city) return false;
    if (f.minPrice != null && p.price < f.minPrice) return false;
    if (f.maxPrice != null && p.price > f.maxPrice) return false;
    if (f.beds != null && p.bedrooms < f.beds) return false;
    return true;
  });
}

export const getProperty = (slug: string) => properties.find((p) => p.slug === slug);

export function relatedProperties(p: Property, n = 3): Property[] {
  return properties
    .filter((x) => x.slug !== p.slug)
    .sort((a, b) => Number(b.city === p.city || b.type === p.type) - Number(a.city === p.city || a.type === p.type))
    .slice(0, n);
}
