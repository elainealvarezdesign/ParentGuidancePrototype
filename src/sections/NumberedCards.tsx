import { useId } from "react";
import { Section, Container } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

/* NumberedCards (docs/system/sections/numbered-cards.md). Eyebrow + title, then numbered white cards (sage
 * number, title, one or two sentences) in a 3 → 2 → 1 grid. Tint band. The list is an <ol>. Use for key
 * takeaways or principles. Prints. */

export type NumberedCardsContent = {
  eyebrow?: string;
  title: string;
  /** 3–6 items. */
  items: { /** 2–8 words. */ title: string; /** One or two sentences. */ text: string }[];
};

export function NumberedCards({ content }: { content: NumberedCardsContent }) {
  const headingId = useId();
  const { eyebrow, title, items } = content;
  return (
    <Section tone="tint" spacing="l" labelledBy={headingId} className="print:bg-white print:py-6">
      <Container width="full">
        <div className="mx-auto max-w-pg-content">
          <SectionHeading align="left" size="small" eyebrow={eyebrow} title={title} id={headingId} />
          <ol className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <li key={item.title} className="rounded-pg-xl border border-pg-line bg-white p-6">
                <span
                  className="grid h-9 w-9 place-items-center rounded-full bg-pg-sage font-bold text-pg-navy"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <h3 className="mt-4 mb-2 text-base leading-snug font-bold text-pg-navy">{item.title}</h3>
                <p className="text-sm leading-relaxed text-pg-slate">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
