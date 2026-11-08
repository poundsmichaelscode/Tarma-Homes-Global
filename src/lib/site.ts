// Contact details are placeholders until the company supplies real ones.
export const SITE = {
  name: "TAMAR HOMES",
  tagline: "Premium properties for sale across Nigeria",
  whatsapp: "2340000000000", // TODO: replace with real WhatsApp number (international format, no +)
  phoneDisplay: "+234 000 000 0000",
  email: "hello@tarmarhomes.com",
  address: "Office address to be confirmed",
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

export function formatNaira(amount: number): string {
  return new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(amount);
}

export function whatsappLink(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
