import { useId } from "react";
import { Section, Container } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Quote } from "@/components/ui/icons";

/* Testimonials (docs/system/sections/testimonials.md). Three quote cards. Quotes are real parent words,
 * shortened with permission; never invent them for production. Exactly 3 items (one row on desktop). */

export type TestimonialsContent = {
  eyebrow?: string;
  title: string;
  items: {
    /** Without quotation marks; up to ~160 characters. */ quote: string;
    /** First name + initial. */ name: string;
    /** Who they are · where. */ meta: string;
  }[];
};

export function Testimonials({ content }: { content: TestimonialsContent }) {
  const headingId = useId();
  return (
    <Section spacing="m" labelledBy={headingId}>
      <Container width="content">
        <SectionHeading eyebrow={content.eyebrow} id={headingId} title={content.title} align="left" size="small" />
        <ul className="mt-8 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-3">
          {content.items.map((t, i) => (
            <Reveal
              as="li"
              key={t.name}
              delay={i * 0.1}
              className="flex flex-col gap-4 rounded-pg-xl bg-white p-6 shadow-pg-card"
            >
              <figure className="flex flex-1 flex-col gap-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-pg-tint" aria-hidden="true">
                  <Quote size={16} className="text-pg-teal-dark" />
                </span>
                <blockquote className="flex-1 text-sm text-pg-navy italic">“{t.quote}”</blockquote>
                <figcaption className="border-t border-pg-tint-soft pt-3">
                  <p className="text-xs font-semibold text-pg-navy">{t.name}</p>
                  <p className="mt-0.5 text-xs text-pg-teal-dark">{t.meta}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
