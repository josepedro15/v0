import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqSection } from "@/content/v0";
import { SectionHeader, SectionShell } from "@/components/SectionShell";
import { landingCardBody } from "@/lib/landingStyles";
import { cn } from "@/lib/utils";

export default function FAQSection() {
  return (
    <SectionShell id="faq" aria-labelledby="faq-titulo" containerMax="3xl">
      <SectionHeader
        titleId="faq-titulo"
        title={faqSection.title}
        subtitle={faqSection.subtitle}
      />

      <Accordion type="single" collapsible className="w-full">
        {faqSection.items.map((item, i) => (
          <AccordionItem key={item.question} value={`item-${i}`}>
            <AccordionTrigger
              className={cn(
                "text-left text-lg font-semibold text-foreground hover:no-underline md:text-xl"
              )}
            >
              {item.question}
            </AccordionTrigger>
            <AccordionContent className={landingCardBody}>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionShell>
  );
}
