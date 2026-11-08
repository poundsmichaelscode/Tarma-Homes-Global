import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { NAV, SITE, whatsappLink } from "@/lib/site";
import { Logo } from "./Logo";
import { Newsletter } from "./Newsletter";

const LEGAL = [
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms of Use" },
  { to: "/cookie-policy", label: "Cookie Policy" },
  { to: "/disclaimer", label: "Disclaimer" },
  { to: "/legal", label: "Legal" },
] as const;

export function Footer() {
  return (
    <footer className="bg-primary-deep text-primary-foreground">
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo light />
          <p className="text-sm text-primary-foreground/70">{SITE.tagline}.</p>
        </div>
        <div>
          <h3 className="mb-4 text-lg">Explore</h3>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            {NAV.map((n) => <li key={n.to}><Link to={n.to} className="hover:text-leaf">{n.label}</Link></li>)}
            <li><Link to="/list-your-property" className="hover:text-leaf">List Your Property</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg">Contact</h3>
          <ul className="space-y-3 text-sm text-primary-foreground/75">
            <li className="flex gap-2"><Phone className="h-4 w-4 text-leaf" />{SITE.phoneDisplay}</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 text-leaf" /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li className="flex gap-2"><MessageCircle className="h-4 w-4 text-leaf" /><a href={whatsappLink("Hello TARMAR HOMES")} target="_blank" rel="noreferrer">Chat on WhatsApp</a></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg">Newsletter</h3>
          <p className="mb-3 text-sm text-primary-foreground/70">New listings and buying guides, occasionally.</p>
          <Newsletter dark />
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="container-site flex flex-col gap-3 py-5 text-xs text-primary-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} TARMAR HOMES. All rights reserved.</p>
          <ul className="flex flex-wrap gap-4">
            {LEGAL.map((l) => <li key={l.to}><Link to={l.to} className="hover:text-leaf">{l.label}</Link></li>)}
          </ul>
        </div>
      </div>
    </footer>
  );
}
