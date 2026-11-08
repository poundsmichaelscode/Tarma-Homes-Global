import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV } from "@/lib/site";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-surface/95 backdrop-blur">
      <div className="container-site flex h-18 items-center justify-between gap-4 py-3">
        <Logo />
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }}
              className="text-sm font-medium text-foreground/80 transition hover:text-primary data-[status=active]:text-primary">
              {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/list-your-property" className="hidden rounded-full bg-leaf px-5 py-2.5 text-sm font-semibold text-leaf-foreground transition hover:bg-leaf-deep lg:inline-flex">
          List Your Property
        </Link>
        <button className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t bg-surface lg:hidden" aria-label="Mobile">
          <div className="container-site flex flex-col py-3">
            {[...NAV, { to: "/list-your-property", label: "List Your Property" } as const].map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-3 font-medium data-[status=active]:text-primary">
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
