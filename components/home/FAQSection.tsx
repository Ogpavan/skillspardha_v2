"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import content from "@/data/home-content.json";

export function FAQSection() {
  const copy = content.faq;
  return (
    <section id="faq" className="section-pad bg-surface-lavender">
      <div className="container-width grid gap-12 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20"><Reveal><SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} /></Reveal><Reveal delay={0.08}><Accordion type="single" collapsible className="border-t border-[#d8d4cc]">{copy.questions.map(([question, answer], index) => <AccordionItem value={`item-${index}`} key={question}><AccordionTrigger>{question}</AccordionTrigger><AccordionContent>{answer}</AccordionContent></AccordionItem>)}</Accordion></Reveal></div>
    </section>
  );
}
