import { useState } from "react";
import { SITE } from "@/lib/site";

export function Newsletter({ dark = false }: { dark?: boolean }) {
  const [email, setEmail] = useState("");
  return (
    <form
      className="flex flex-col gap-2 sm:flex-row"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Newsletter subscription")}&body=${encodeURIComponent(`Please subscribe ${email} to the TARMAR HOMES newsletter.`)}`;
      }}
    >
      <label htmlFor={dark ? "nl-footer" : "nl-main"} className="sr-only">Email address</label>
      <input id={dark ? "nl-footer" : "nl-main"} type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email"
        className={`h-11 flex-1 rounded-full border px-4 text-sm outline-none focus:ring-2 focus:ring-leaf ${dark ? "border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50" : "bg-surface"}`} />
      <button className="h-11 rounded-full bg-leaf px-5 text-sm font-semibold text-leaf-foreground hover:bg-leaf-deep">Subscribe</button>
    </form>
  );
}
