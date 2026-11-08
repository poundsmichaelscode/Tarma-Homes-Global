import { useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useState } from "react";
import { CITIES, PROPERTY_TYPES } from "@/data/properties";

export const fieldClass = "h-12 w-full rounded-xl border bg-surface px-4 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary";

export function SearchBar() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [type, setType] = useState("");
  const [city, setCity] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigate({ to: "/properties", search: { q: q || undefined, type: type || undefined, city: city || undefined } });
      }}
      className="grid gap-3 rounded-2xl bg-surface p-4 shadow-card md:grid-cols-[2fr_1fr_1fr_auto]"
    >
      <input aria-label="Keyword" className={fieldClass} placeholder="Area, e.g. Lekki, Guzape…" value={q} onChange={(e) => setQ(e.target.value)} />
      <select aria-label="Property type" className={fieldClass} value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">All types</option>
        {PROPERTY_TYPES.map((t) => <option key={t}>{t}</option>)}
      </select>
      <select aria-label="City" className={fieldClass} value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="">All cities</option>
        {CITIES.map((c) => <option key={c}>{c}</option>)}
      </select>
      <button className="flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 font-semibold text-primary-foreground hover:bg-primary-deep">
        <Search className="h-4 w-4" /> Search
      </button>
    </form>
  );
}
