import { useId } from "react";
import type { Media } from "@/content/types";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/layout/Section";

/* FeatureRows (docs/system/sections/feature-rows.md). Centered heading, then image + text rows that
 * alternate sides on tablet/desktop. Use for "why us" / value propositions (2–4 rows). */

export type FeatureRow = {
  /** 2–5 words. */
  title: string;
  /** One sentence, up to ~110 characters. */
  description: string;
  image: Media;
};

export type FeatureRowsContent = {
  eyebrow?: string;
  title: string;
  intro?: string;
  /** Optional background layer drawn under every row image (the brand frame). */
  imageBase?: Media;
  rows: FeatureRow[];
};

export function FeatureRows({ content }: { content: FeatureRowsContent }) {
  const headingId = useId();
  return (
    <Section
      spacing="l"
      labelledBy={headingId}
      className="flex flex-col items-center gap-12 px-6 md:gap-20 md:px-10 lg:px-14"
    >
      <Reveal>
        <SectionHeading
          eyebrow={content.eyebrow}
          eyebrowSize="large"
          title={<span id={headingId}>{content.title}</span>}
          intro={content.intro}
        />
      </Reveal>
      <div className="flex w-full max-w-4xl flex-col gap-10">
        {content.rows.map((row, i) => {
          const reverse = i % 2 === 1;
          return (
            <Reveal
              key={row.title}
              from={reverse ? "right" : "left"}
              delay={i * 0.1}
              className={`flex flex-col items-center gap-8 md:flex-row md:gap-24 ${reverse ? "md:flex-row-reverse" : ""}`}
            >
              <div className="relative h-60 w-full max-w-80 shrink-0 overflow-hidden rounded-pg-md md:w-80">
                {content.imageBase && (
                  <img src={content.imageBase.src} alt="" className="absolute inset-0 h-full w-full object-cover" />
                )}
                <img src={row.image.src} alt={row.image.alt} className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <div className="flex max-w-sm flex-col gap-2">
                <h3 className="text-xl leading-relaxed font-bold text-pg-teal-dark md:text-2xl">{row.title}</h3>
                <p className="text-pg-body-lg text-pg-navy">{row.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
