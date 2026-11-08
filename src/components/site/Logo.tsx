import { Link } from "@tanstack/react-router";

/** Brand-approved transparent wordmark; used for both header and footer. */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      aria-label="Tamar Homes home"
      className={`inline-flex shrink-0 items-center justify-center rounded-md ${light ? "bg-white px-3 py-2" : ""}`}
    >
      <img
        src="/tamar-logo.png"
        alt="Tamar Homes"
        width={1344}
        height={510}
        decoding="async"
        className="block h-12 w-auto max-w-[170px] object-contain sm:h-14 sm:max-w-[195px] md:h-16 md:max-w-[230px]"
      />
    </Link>
  );
}
