import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2" aria-label="TARMAR HOMES home">
      <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-gradient">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
          <path d="M3 11 12 4l9 7" stroke="var(--leaf)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 10v9h12v-9" stroke="var(--primary-foreground)" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      </span>
      <span className={`font-display text-xl leading-none tracking-wide ${light ? "text-primary-foreground" : "text-primary-deep"}`}>
        TARMAR <span className="text-leaf">HOMES</span>
      </span>
    </Link>
  );
}
