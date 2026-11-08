// Official contact and branding information supplied by Tamar Homes Global.
export const SITE = {
  name: "TAMAR HOMES",
  tagline: "Luxury Homes. Ambitious Living.",
  whatsapp: "2347019669828",
  phoneDisplay: "07019669828",
  secondaryPhone: "07032167195",
  // No company email is published until the address is verified.
  email: "",
  address: "Suite 2, Time Square Mall, beside Mega Chicken, Ikota, Lekki, Lagos, Nigeria",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact Us" },
] as const;

export const SOCIALS = {
  instagram: {
    label: "Instagram",
    href: "https://www.instagram.com/tamarhomes?rpxt=MXU1cncwdXJ2czh5dA==",
    handle: "@tamarhomes",
  },
  youtube: {
    label: "YouTube",
    href: "https://www.youtube.com/@tamarhomes",
    handle: "Tamarhomes",
  },
} as const;

export function formatNaira(amount: number): string {
  return new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(amount);
}

export function whatsappLink(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

// Address-based search is intentional: the mall's position is verified, but not the exact office suite coordinate.
export const OFFICE_MAP_QUERY = "Time Square Mall, Ikota, Lekki, Lagos, Nigeria";
export const OFFICE_MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_MAP_QUERY)}`;
export const OFFICE_MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(OFFICE_MAP_QUERY)}&output=embed`;
