import { createFileRoute, Link } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/faq";
import { PageHero } from "@/components/site/PageHero";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () => seo("Frequently Asked Questions", "Answers to common questions about buying, inspecting and listing property with TAMAR HOMES.", "/faq"),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently asked questions" />
      <div className="container-site max-w-3xl py-14">
        <Accordion type="single" collapsible className="rounded-2xl border bg-card px-6">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`q${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="mt-8 text-center text-muted-foreground">Still have questions? <Link to="/contact" className="font-semibold text-primary">Contact us</Link></p>
      </div>
    </>
  );
}
