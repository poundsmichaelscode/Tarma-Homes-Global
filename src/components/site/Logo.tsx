import { Link } from "@tanstack/react-router";

/** Uploaded official Tamar Homes logo; the embedded asset is also used as a favicon. */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className={`inline-flex shrink-0 items-center rounded-md ${light ? "bg-white px-2 py-1" : ""}`} aria-label="Tamar Homes home">
      <img src="/tamar-logo.svg" alt="Tamar Homes" width={126} height={64}
        className="h-12 w-auto object-contain md:h-14" />
    </Link>
  );
}
