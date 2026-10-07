import { useId } from "react";
import { AccordionItem } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";

/* FaqSection (docs/system/sections/faq.md). Title and accordion items in two staggered columns
 * (one column on mobile). The first item can start open. 4–10 items. */

export type FaqItem = {
  /** A question a parent would ask, up to ~70 characters. */
  question: string;
  /** 1–3 sentences. */
  answer: string;
  defaultOpen?: boolean;
};

export type FaqContent = { title: string; items: FaqItem[] };

export function FaqSection({ content }: { content: FaqContent }) {
  const headingId = useId();
  const half = Math.ceil(content.items.length / 2);
  const columns = [content.items.slice(0, half), content.items.slice(half)];

  return (
    <Section spacing="none" labelledBy={headingId} className="px-6 py-16 md:px-10 lg:px-14">
      <Reveal className="mb-10 text-center">
        <h2 id={headingId} className="text-pg-h2 text-pg-navy">
          {content.title}
        </h2>
      </Reveal>
      <div className="mx-auto flex max-w-pg-page flex-col gap-5 md:flex-row md:gap-8">
        {columns.map((col, c) => (
          <div key={c} className={`flex flex-1 flex-col gap-5 ${c === 1 ? "md:pt-8" : ""}`}>
            {col.map((item, i) => (
              <Reveal key={item.question} delay={i * 0.06}>
                <AccordionItem title={item.question} defaultOpen={item.defaultOpen}>
                  <p>{item.answer}</p>
                </AccordionItem>
              </Reveal>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
}
