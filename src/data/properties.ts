// Neutral placeholder until approved company photography is imported from Google Drive.
import { IMAGE_PENDING as approvedImagePending } from "@/lib/assets";
const hero = approvedImagePending;
const duplex = approvedImagePending;
const interior = approvedImagePending;
const apartment = approvedImagePending;


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
    slug: "5-bedroom-detached-house-lekki-phase-1",
    title: "5-Bedroom Detached House with BQ",
    type: "Detached House", status: "For Sale", price: 450_000_000,
    city: "Lagos", area: "Lekki Phase 1", bedrooms: 5, bathrooms: 6, size: "650 sqm", parking: 4, featured: true,
    images: [hero, interior, duplex],
    summary: "Contemporary family home with a landscaped garden, cinema room and a one-room boys' quarters.",
    description: [
      "A contemporary five-bedroom detached residence on a quiet, gated street. The ground floor opens into a double-volume living room with full-height glazing that frames the landscaped front garden.",
      "All bedrooms are en-suite. The master suite includes a walk-in wardrobe and private balcony. A one-room boys' quarters sits separately at the rear.",
    ],
    amenities: ["Fitted kitchen", "Cinema room", "Boys' quarters", "Swimming pool", "24/7 security", "Inverter backup", "Treated water", "CCTV"],
    documents: ["Governor's Consent", "Approved building plan", "Survey plan"],
  },
  {
    slug: "4-bedroom-terrace-duplex-guzape-abuja",
    title: "4-Bedroom Terrace Duplex",
    type: "Terrace", status: "For Sale", price: 280_000_000,
    city: "Abuja", area: "Guzape", bedrooms: 4, bathrooms: 5, size: "380 sqm", parking: 2, featured: true,
    images: [duplex, interior, apartment],
    summary: "Modern terrace duplex in a serviced estate with hillside views.",
    description: [
      "A well-finished four-bedroom terrace duplex in a serviced estate in Guzape, close to the Asokoro and Maitama districts.",
      "The home features a spacious lounge, family room upstairs, and a private terrace overlooking the hills.",
    ],
    amenities: ["Estate security", "Paved roads", "Street lighting", "Fitted kitchen", "Rooftop terrace", "Central sewage"],
    documents: ["Certificate of Occupancy (C of O)", "Deed of Assignment"],
  },
  {
    slug: "3-bedroom-luxury-apartment-ikoyi",
    title: "3-Bedroom Luxury Apartment",
    type: "Apartment", status: "For Sale", price: 350_000_000,
    city: "Lagos", area: "Ikoyi", bedrooms: 3, bathrooms: 4, size: "240 sqm", parking: 2, featured: true,
    images: [interior, apartment, hero],
    summary: "High-floor apartment with lagoon views, gym and pool.",
    description: [
      "A high-floor three-bedroom apartment with panoramic lagoon views and floor-to-ceiling windows.",
      "Residents share a gym, swimming pool and landscaped deck. Each apartment has dedicated parking and a guest toilet.",
    ],
    amenities: ["Lagoon view", "Gym", "Swimming pool", "Elevator", "Central backup power", "Concierge"],
    documents: ["Governor's Consent", "Deed of Sub-Lease"],
  },
  {
    slug: "3-bedroom-apartment-oniru-victoria-island",
    title: "3-Bedroom Serviced Apartment",
    type: "Apartment", status: "Off-Plan", price: 185_000_000,
    city: "Lagos", area: "Oniru, Victoria Island", bedrooms: 3, bathrooms: 3, size: "180 sqm", parking: 1, featured: true,
    images: [apartment, interior, duplex],
    summary: "Off-plan apartment in a boutique block with flexible payment plan.",
    description: [
      "A boutique residential block of apartments in Oniru. Buyers may spread payments across the construction period, subject to the developer's terms.",
      "Each unit includes a balcony, fitted kitchen and storage room.",
    ],
    amenities: ["Payment plan", "Balcony", "Elevator", "Gated entrance", "Backup power"],
    documents: ["Approved building plan", "Contract of Sale (on purchase)"],
  },
  {
    slug: "4-bedroom-semi-detached-gwarinpa-abuja",
    title: "4-Bedroom Semi-Detached Duplex",
    type: "Semi-Detached", status: "For Sale", price: 160_000_000,
    city: "Abuja", area: "Gwarinpa", bedrooms: 4, bathrooms: 5, size: "320 sqm", parking: 3, featured: false,
    images: [duplex, hero, interior],
    summary: "Spacious semi-detached home on a tarred street with a private compound.",
    description: [
      "A semi-detached duplex in an established residential district, suited to growing families.",
      "Generous compound space with parking for three cars.",
    ],
    amenities: ["Private compound", "Fitted kitchen", "Boys' quarters", "Borehole"],
    documents: ["Certificate of Occupancy (C of O)"],
  },
  {
    slug: "4-bedroom-terrace-ajah-lagos",
    title: "4-Bedroom Terrace with Payment Plan",
    type: "Terrace", status: "Off-Plan", price: 95_000_000,
    city: "Lagos", area: "Ajah", bedrooms: 4, bathrooms: 4, size: "260 sqm", parking: 2, featured: false,
    images: [duplex, apartment, interior],
    summary: "Off-plan terrace in a gated estate along the Lekki-Epe corridor.",
    description: [
      "Off-plan terrace homes within a gated estate along the Lekki-Epe Expressway corridor.",
      "Instalment options are available subject to the developer's agreement.",
    ],
    amenities: ["Gated estate", "Payment plan", "Children's play area", "Paved roads"],
    documents: ["Excision", "Survey plan"],
  },
  {
    slug: "600sqm-residential-land-ibeju-lekki",
    title: "600 sqm Residential Plot",
    type: "Land", status: "For Sale", price: 25_000_000,
    city: "Lagos", area: "Ibeju-Lekki", bedrooms: 0, bathrooms: 0, size: "600 sqm", parking: 0, featured: false,
    images: [hero, duplex],
    summary: "Dry, buildable plot in a developing residential scheme.",
    description: [
      "A dry 600 sqm residential plot within a planned scheme in Ibeju-Lekki.",
      "Suitable for owner-occupier building or long-term holding. Buyers should conduct independent searches before payment.",
    ],
    amenities: ["Dry land", "Accessible road", "Perimeter fencing"],
    documents: ["Gazette", "Survey plan", "Deed of Assignment (on purchase)"],
  },
  {
    slug: "5-bedroom-detached-old-gra-port-harcourt",
    title: "5-Bedroom Detached Mansion",
    type: "Detached House", status: "For Sale", price: 220_000_000,
    city: "Port Harcourt", area: "Old GRA", bedrooms: 5, bathrooms: 6, size: "800 sqm", parking: 5, featured: false,
    images: [hero, interior, apartment],
    summary: "Large detached home on a generous plot in a quiet residential area.",
    description: [
      "A large five-bedroom detached house on a generous plot in Old GRA, Port Harcourt.",
      "Features a large living area, separate dining room and a two-room boys' quarters.",
    ],
    amenities: ["Large compound", "Boys' quarters", "Generator house", "Borehole", "Security post"],
    documents: ["Certificate of Occupancy (C of O)"],
  },
  {
    slug: "commercial-office-building-victoria-island",
    title: "Commercial Office Building",
    type: "Commercial", status: "For Sale", price: 1_200_000_000,
    city: "Lagos", area: "Victoria Island", bedrooms: 0, bathrooms: 8, size: "1,400 sqm", parking: 12, featured: false,
    images: [apartment, interior],
    summary: "Multi-floor office building on a commercial street.",
    description: [
      "A multi-floor office building with open-plan floor plates suitable for corporate headquarters.",
      "Includes a lift, dedicated parking and backup power infrastructure.",
    ],
    amenities: ["Elevator", "Open-plan floors", "Backup power", "Parking", "Reception lobby"],
    documents: ["Governor's Consent", "Approved building plan"],
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
