// Neutral placeholder until approved company photography is imported from Google Drive.
import { IMAGE_PENDING as approvedImagePending } from "@/lib/assets";

export type PropertyType = "Detached House" | "Semi-Detached" | "Terrace" | "Apartment" | "Maisonette" | "Land" | "Commercial";

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

export const PROPERTY_TYPES: PropertyType[] = ["Detached House", "Semi-Detached", "Terrace", "Apartment", "Maisonette", "Land", "Commercial"];
export const CITIES = ["Lagos", "Abuja", "Port Harcourt"] as const;

const IKATE_DEVELOPMENT_IMAGES = [
  "/images/approved/ikate-serviced-apartment-development/exterior.webp",
  "/images/approved/ikate-serviced-apartment-development/gallery-02.webp",
  "/images/approved/ikate-serviced-apartment-development/gallery-03.webp",
  "/images/approved/ikate-serviced-apartment-development/gallery-04.webp",
  "/images/approved/ikate-serviced-apartment-development/gallery-05.webp",
  "/images/approved/ikate-serviced-apartment-development/gallery-06.webp",
  "/images/approved/ikate-serviced-apartment-development/gallery-07.webp",
  "/images/approved/ikate-serviced-apartment-development/gallery-08.webp",
  "/images/approved/ikate-serviced-apartment-development/gallery-09.webp",
  "/images/approved/ikate-serviced-apartment-development/gallery-10.webp",
  "/images/approved/ikate-serviced-apartment-development/gallery-11.webp",
  "/images/approved/ikate-serviced-apartment-development/gallery-12.webp",
];

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
  {
    slug: "3-bedroom-maisonette-with-bq-orchid-lekki",
    title: "3-Bedroom Maisonette with BQ",
    type: "Maisonette",
    status: "For Sale",
    price: 160_000_000,
    city: "Lagos",
    area: "Orchid, Lekki",
    bedrooms: 3,
    bathrooms: 0, // Bathroom count has not been confirmed.
    size: "On request",
    parking: 0, // Parking allocation has not been confirmed.
    featured: true,
    images: [
      "/images/approved/orchid-lekki-maisonette/exterior.webp",
      "/images/approved/orchid-lekki-maisonette/gallery-02.webp",
      "/images/approved/orchid-lekki-maisonette/gallery-03.webp",
      "/images/approved/orchid-lekki-maisonette/gallery-04.webp",
      "/images/approved/orchid-lekki-maisonette/gallery-05.webp",
      "/images/approved/orchid-lekki-maisonette/gallery-06.webp",
      "/images/approved/orchid-lekki-maisonette/gallery-07.webp",
      "/images/approved/orchid-lekki-maisonette/gallery-08.webp",
      "/images/approved/orchid-lekki-maisonette/gallery-09.webp",
      "/images/approved/orchid-lekki-maisonette/gallery-10.webp",
      "/images/approved/orchid-lekki-maisonette/gallery-11.webp",
      "/images/approved/orchid-lekki-maisonette/gallery-12.webp",
      "/images/approved/orchid-lekki-maisonette/gallery-13.webp",
    ],
    summary: "Three-bedroom maisonette with a boys' quarters (BQ) in Orchid, Lekki, Lagos, offered at ₦160 million.",
    description: [
      "A three-bedroom maisonette with a boys' quarters in the Orchid area of Lekki, Lagos.",
      "The supplied photographs show a contemporary multi-level residence, living areas, fitted kitchen, bedrooms and bathrooms. Additional specifications and title documents are available on enquiry, subject to confirmation.",
    ],
    amenities: ["Boys' quarters (BQ)"],
    documents: [],
  },
  {
    slug: "5-bedroom-detached-duplex-bq-cinema-rooftop-lekki-phase-1",
    title: "5-Bedroom Detached Duplex with BQ, Cinema & Rooftop",
    type: "Detached House",
    status: "For Sale",
    price: 1_200_000_000,
    city: "Lagos",
    area: "Lekki Phase 1",
    bedrooms: 5,
    bathrooms: 0, // Unconfirmed; do not advertise a guessed count.
    size: "On request",
    parking: 0, // Unconfirmed.
    featured: true,
    images: [
      "/images/approved/lekki-phase-1-detached-duplex/exterior.webp",
      "/images/approved/lekki-phase-1-detached-duplex/gallery-02.webp",
      "/images/approved/lekki-phase-1-detached-duplex/gallery-03.webp",
      "/images/approved/lekki-phase-1-detached-duplex/gallery-04.webp",
      "/images/approved/lekki-phase-1-detached-duplex/gallery-05.webp",
      "/images/approved/lekki-phase-1-detached-duplex/gallery-06.webp",
      "/images/approved/lekki-phase-1-detached-duplex/gallery-07.webp",
      "/images/approved/lekki-phase-1-detached-duplex/gallery-08.webp",
      "/images/approved/lekki-phase-1-detached-duplex/gallery-09.webp",
      "/images/approved/lekki-phase-1-detached-duplex/gallery-10.webp",
      "/images/approved/lekki-phase-1-detached-duplex/gallery-11.webp",
      "/images/approved/lekki-phase-1-detached-duplex/gallery-12.webp",
      "/images/approved/lekki-phase-1-detached-duplex/gallery-13.webp",
      "/images/approved/lekki-phase-1-detached-duplex/gallery-14.webp",
    ],
    summary: "Five-bedroom detached duplex with boys' quarters, a cinema and a rooftop in Lekki Phase 1, Lagos, offered at ₦1.2 billion.",
    description: [
      "A five-bedroom detached duplex in Lekki Phase 1, Lagos, offered at ₦1.2 billion.",
      "The property is advertised with a boys' quarters (BQ), private cinema and rooftop area. The uploaded photographs show contemporary interiors and exterior spaces. Contact Tamar Homes for inspection details, title documentation and additional specifications.",
    ],
    amenities: ["Boys' quarters (BQ)", "Cinema", "Rooftop"],
    documents: [], // Title documentation not supplied.
  },
  {
    slug: "2-bedroom-serviced-apartment-with-elevator-lekki-phase-1",
    title: "2-Bedroom Serviced Apartment with Elevator",
    type: "Apartment",
    status: "For Sale",
    price: 300_000_000,
    city: "Lagos",
    area: "Lekki Phase 1",
    bedrooms: 2,
    bathrooms: 0, // Not verified; do not advertise a bathroom count.
    size: "On request",
    parking: 0, // Parking allocation not confirmed.
    featured: true,
    images: [
      "/images/approved/lekki-phase-1-two-bedroom-serviced-apartment/exterior.webp",
      "/images/approved/lekki-phase-1-two-bedroom-serviced-apartment/gallery-02.webp",
      "/images/approved/lekki-phase-1-two-bedroom-serviced-apartment/gallery-03.webp",
      "/images/approved/lekki-phase-1-two-bedroom-serviced-apartment/gallery-04.webp",
      "/images/approved/lekki-phase-1-two-bedroom-serviced-apartment/gallery-05.webp",
      "/images/approved/lekki-phase-1-two-bedroom-serviced-apartment/gallery-06.webp",
      "/images/approved/lekki-phase-1-two-bedroom-serviced-apartment/gallery-07.webp",
      "/images/approved/lekki-phase-1-two-bedroom-serviced-apartment/gallery-08.webp",
      "/images/approved/lekki-phase-1-two-bedroom-serviced-apartment/gallery-09.webp",
      "/images/approved/lekki-phase-1-two-bedroom-serviced-apartment/gallery-10.webp",
      "/images/approved/lekki-phase-1-two-bedroom-serviced-apartment/gallery-11.webp",
      "/images/approved/lekki-phase-1-two-bedroom-serviced-apartment/gallery-12.webp",
    ],
    summary: "Two-bedroom serviced apartment with elevator in Lekki Phase 1, Lagos, offered for ₦300 million.",
    description: [
      "This two-bedroom serviced apartment in Lekki Phase 1, Lagos, is offered for ₦300 million.",
      "The property is advertised with elevator access. The supplied photographs show the apartment building, interior living spaces, kitchen and bathrooms. Contact Tamar Homes to arrange an inspection and request confirmed specifications and title documents.",
    ],
    amenities: ["Elevator"],
    documents: [], // Title documentation not provided.
  },
  {
    slug: "1-bedroom-serviced-apartment-ikate-development",
    title: "1-Bedroom Serviced Apartment — Ikate Development",
    type: "Apartment",
    status: "For Sale",
    price: 180_000_000,
    city: "Lagos",
    area: "Ikate, Lekki",
    bedrooms: 1,
    bathrooms: 0, // Not provided.
    size: "On request",
    parking: 0, // Not provided.
    featured: true,
    images: [...IKATE_DEVELOPMENT_IMAGES], // Shared development photographs; individual unit photos not yet identified.
    summary: "1-bedroom serviced apartment option at the Ikate, Lekki development, offered at ₦180 million.",
    description: [
      "This is the 1-bedroom option within a serviced apartment development in Ikate, Lekki, Lagos, advertised at ₦180 million.",
      "Photos show the overall development and representative spaces; they have not been verified as photographs of this specific unit configuration. Contact Tamar Homes to confirm unit layout, availability, facilities, finishing and title documents before making any payment.",
    ],
    amenities: [], // No development amenities independently confirmed.
    documents: [],
  },
  {
    slug: "2-bedroom-serviced-apartment-ikate-development",
    title: "2-Bedroom Serviced Apartment — Ikate Development",
    type: "Apartment",
    status: "For Sale",
    price: 200_000_000,
    city: "Lagos",
    area: "Ikate, Lekki",
    bedrooms: 2,
    bathrooms: 0, // Not provided.
    size: "On request",
    parking: 0, // Not provided.
    featured: true,
    images: [...IKATE_DEVELOPMENT_IMAGES], // Shared development photographs; individual unit photos not yet identified.
    summary: "2-bedroom serviced apartment option at the Ikate, Lekki development, offered at ₦200 million.",
    description: [
      "This is the 2-bedroom option within a serviced apartment development in Ikate, Lekki, Lagos, advertised at ₦200 million.",
      "Photos show the overall development and representative spaces; they have not been verified as photographs of this specific unit configuration. Contact Tamar Homes to confirm unit layout, availability, facilities, finishing and title documents before making any payment.",
    ],
    amenities: [], // No development amenities independently confirmed.
    documents: [],
  },
  {
    slug: "3-bedroom-serviced-apartment-ikate-development",
    title: "3-Bedroom Serviced Apartment — Ikate Development",
    type: "Apartment",
    status: "For Sale",
    price: 350_000_000,
    city: "Lagos",
    area: "Ikate, Lekki",
    bedrooms: 3,
    bathrooms: 0, // Not provided.
    size: "On request",
    parking: 0, // Not provided.
    featured: true,
    images: [...IKATE_DEVELOPMENT_IMAGES], // Shared development photographs; individual unit photos not yet identified.
    summary: "3-bedroom serviced apartment option at the Ikate, Lekki development, offered at ₦350 million.",
    description: [
      "This is the 3-bedroom option within a serviced apartment development in Ikate, Lekki, Lagos, advertised at ₦350 million.",
      "Photos show the overall development and representative spaces; they have not been verified as photographs of this specific unit configuration. Contact Tamar Homes to confirm unit layout, availability, facilities, finishing and title documents before making any payment.",
    ],
    amenities: [], // No development amenities independently confirmed.
    documents: [],
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
