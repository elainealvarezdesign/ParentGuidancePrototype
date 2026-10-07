import { useId, useRef } from "react";
import { motion, useInView } from "motion/react";
import type { Cta } from "@/content/types";
import { Section, Container } from "@/components/layout/Section";
import { ButtonAnchor, ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/* ProcessSteps (docs/system/sections/process-steps.md). Numbered steps (sage circles joined by a line that
 * draws in on desktop), then one action. Use for "how it works". 3–4 steps; the list is an <ol>. */

export type ProcessStepsContent = {
  id?: string;
  eyebrow?: string;
  title: string;
  steps: { /** 2–8 words. */ title: string; /** One sentence. */ body: string }[];
  cta?: Cta;
};

export function ProcessSteps({ content }: { content: ProcessStepsContent }) {
  const headingId = useId();
  const lineRef = useRef(null);
  const lineInView = useInView(lineRef, { once: true, margin: "-80px" });
  const { id, eyebrow, title, steps, cta } = content;

  return (
    <Section id={id} tone="white" spacing="m" labelledBy={headingId}>
      <Container width="content" className="flex flex-col items-center">
        <SectionHeading eyebrow={eyebrow} id={headingId} title={title} size="small" className="mb-10" />
        <div className="relative w-full">
          <div
            ref={lineRef}
            className="absolute top-7 right-32 left-32 hidden h-px overflow-hidden bg-pg-line lg:block"
            aria-hidden="true"
          >
            <motion.div
              className="h-full origin-left bg-pg-sage"
              initial={{ scaleX: 0 }}
              animate={lineInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.55, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </div>
          <ol className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal
                as="li"
                key={step.title}
                delay={i * 0.12}
                className="flex flex-col items-center gap-4 px-4 text-center"
              >
                <span
                  className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full bg-pg-sage text-sm font-bold text-pg-navy"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-pg-navy">
                    <span className="sr-only">Step {i + 1}: </span>
                    {step.title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-56 text-xs text-pg-slate">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
        {cta &&
          (cta.to ? (
            <ButtonLink to={cta.to} className="mt-10">
              {cta.label}
            </ButtonLink>
          ) : (
            <ButtonAnchor href={cta.href} target="_blank" rel="noopener noreferrer" className="mt-10">
              {cta.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </ButtonAnchor>
          ))}
      </Container>
    </Section>
  );
}
