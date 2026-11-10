import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone, ExternalLink } from "lucide-react";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { PageHero } from "@/components/site/PageHero";
import { SITE, whatsappLink, OFFICE_MAP_EMBED_URL, OFFICE_MAP_URL } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contact Us", "Get in touch with Tamar Homes Global about buying, selling or inspecting a property.", "/contact"),
  component: ContactPage,
});

function ContactPage() {
  const items = [
    { i: Phone, l: "Phone", v: SITE.phoneDisplay, href: `tel:+${SITE.whatsapp}` },
    { i: Phone, l: "Alternative phone", v: SITE.secondaryPhone, href: "tel:+2347032167195" },
    ...(SITE.email ? [{ i: Mail, l: "Email", v: SITE.email, href: `mailto:${SITE.email}` }] : []),
    { i: MessageCircle, l: "WhatsApp", v: "Chat with us", href: whatsappLink("Hello Tamar Homes Global") },
    { i: MapPin, l: "Visit our office", v: SITE.address, href: OFFICE_MAP_URL },
  ];

  return (
    <>
      <PageHero eyebrow="Contact" title="Let's talk about your next property" />
      <div className="container-site grid gap-10 py-14 lg:grid-cols-[1fr_2fr]">
        <ul className="space-y-5">
          {items.map(({ i: Icon, l, v, href }) => (
            <li key={l} className="flex gap-4 rounded-2xl border bg-card p-5">
              <Icon className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
              <div><p className="text-sm text-muted-foreground">{l}</p>
                <a href={href} target={l === "Visit our office" || l === "WhatsApp" ? "_blank" : undefined} rel={l === "Visit our office" || l === "WhatsApp" ? "noopener noreferrer" : undefined} className="font-semibold hover:text-primary">{v}</a>
              </div>
            </li>
          ))}
        </ul>
        <EnquiryForm title="Send us a message" intro="Hello Tamar Homes Global, I have an enquiry." submitLabel="Send via WhatsApp"
          fields={[
            { name: "name", label: "Full name" },
            { name: "phone", label: "Phone number", type: "tel" },
            { name: "email", label: "Email", type: "email" },
            { name: "topic", label: "Topic", options: ["Buying a property", "Selling a property", "Investment", "General enquiry"] },
            { name: "message", label: "Message", textarea: true },
          ]} />
      </div>
      <section className="container-site pb-16" aria-labelledby="visit-us-title">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Find us</p>
            <h2 id="visit-us-title" className="mt-2 text-3xl text-foreground">Visit our office</h2>
            <p className="mt-2 text-muted-foreground">{SITE.address}</p>
          </div>
          <a href={OFFICE_MAP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90">
            Get directions <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <div className="overflow-hidden rounded-2xl border bg-muted">
          <iframe title="Map showing Time Square Mall, Ikota, Lekki — Tamar Homes Global office location"
            src={OFFICE_MAP_EMBED_URL} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            className="h-[360px] w-full border-0 md:h-[460px]" allowFullScreen />
        </div>
        <p className="mt-3 text-sm text-muted-foreground">Map shows Time Square Mall. Tamar Homes Global is located at Suite 2; use the directions link to navigate to the mall.</p>
      </section>
    </>
  );
}
