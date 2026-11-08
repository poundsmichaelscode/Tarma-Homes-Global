import { Link } from "@tanstack/react-router";

/**
 * Temporary text-only mark while the approved Google Drive logo is awaiting access.
 * Never substitute an icon or a recreated logo for the official brand artwork.
 */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="inline-flex flex-col leading-none" aria-label="Tamar Homes Global home">
      <span className={`font-display text-xl tracking-wide ${light ? "text-white" : "text-primary"}`}>
        TAMAR <span className={light ? "text-white" : "text-leaf"}>HOMES</span>
      </span>
      <span className={`mt-1 text-[9px] uppercase tracking-[0.18em] ${light ? "text-white/80" : "text-foreground/60"}`}>
        Luxury Homes. Ambitious Living.
      </span>
    </Link>
  );
}
