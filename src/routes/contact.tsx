import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { PageHero } from "@/components/site/PageHero";
import { SITE, whatsappLink } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contact Us", "Get in touch with TAMAR HOMES about buying, selling or inspecting a property.", "/contact"),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's talk about your next property" />
      <div className="container-site grid gap-10 py-14 lg:grid-cols-[1fr_2fr]">
        <ul className="space-y-5">
          {[
            { i: Phone, l: "Phone", v: SITE.phoneDisplay, href: `tel:+${SITE.whatsapp}` },
            { i: Mail, l: "Email", v: SITE.email, href: `mailto:${SITE.email}` },
            { i: MessageCircle, l: "WhatsApp", v: "Chat with us", href: whatsappLink("Hello TAMAR HOMES") },
            { i: MapPin, l: "Office", v: SITE.address },
          ].map(({ i: I, l, v, href }) => (
            <li key={l} className="flex gap-4 rounded-2xl border bg-card p-5">
              <I className="h-6 w-6 shrink-0 text-primary" />
              <div><p className="text-sm text-muted-foreground">{l}</p>{href ? <a href={href} className="font-semibold hover:text-primary">{v}</a> : <p className="font-semibold">{v}</p>}</div>
            </li>
          ))}
        </ul>
        <EnquiryForm title="Send us a message" intro="Hello TAMAR HOMES, I have an enquiry." submitLabel="Send via WhatsApp"
          fields={[
            { name: "name", label: "Full name" },
            { name: "phone", label: "Phone number", type: "tel" },
            { name: "email", label: "Email", type: "email" },
            { name: "topic", label: "Topic", options: ["Buying a property", "Selling a property", "Investment", "General enquiry"] },
            { name: "message", label: "Message", textarea: true },
          ]} />
      </div>
    </>
  );
}
