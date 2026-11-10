import { createFileRoute } from "@tanstack/react-router";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { PageHero } from "@/components/site/PageHero";
import { CITIES, PROPERTY_TYPES } from "@/data/properties";
import { seo } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/list-your-property")({
  head: () => seo("List Your Property for Sale", "Sell your house, land or commercial property with TAMAR HOMES. Send us your property details to get started.", "/list-your-property"),
  component: ListPage,
});

function ListPage() {
  return (
    <>
      <PageHero eyebrow="Sell with us" title="List your property">
        <p>Tell us about the property you'd like to sell. Our team will review the details and contact you about next steps.</p>
      </PageHero>
      <div className="container-site max-w-4xl py-14">
        <p className="mb-6 text-sm text-muted-foreground">You can also email your property details to <a href={`mailto:${SITE.email}?subject=${encodeURIComponent("List my property")}`} className="font-semibold text-primary underline underline-offset-2">{SITE.email}</a>.</p>
        <EnquiryForm title="Property details" intro="Hello TARMAR HOMES, I'd like to list a property for sale." submitLabel="Submit via WhatsApp"
          fields={[
            { name: "name", label: "Owner / agent name" },
            { name: "phone", label: "Phone number", type: "tel" },
            { name: "type", label: "Property type", options: [...PROPERTY_TYPES] },
            { name: "city", label: "City", options: [...CITIES, "Other"] },
            { name: "area", label: "Area / neighbourhood" },
            { name: "price", label: "Asking price (₦)", type: "number" },
            { name: "beds", label: "Bedrooms", type: "number", required: false },
            { name: "docs", label: "Title documents available", required: false },
            { name: "details", label: "Additional details", textarea: true, required: false },
          ]} />
      </div>
    </>
  );
}
