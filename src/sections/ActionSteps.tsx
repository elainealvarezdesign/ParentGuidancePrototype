import { useId } from "react";
import { Section, Container } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

/* ActionSteps (docs/system/sections/action-steps.md). Heading and a short intro on the left; numbered action
 * cards on the right, each with labelled tips (a definition list). Cream band. Use for "things you can do at
 * home". Prints. */

export type ActionStepsContent = {
  eyebrow?: string;
  title: string;
  /** One sentence under the title. */
  intro?: string;
  steps: {
    /** 2–8 words. */
    title: string;
    /** 1–3 tips: a short label and one or two sentences. */
    tips: { label: string; text: string }[];
  }[];
};

export function ActionSteps({ content }: { content: ActionStepsContent }) {
  const headingId = useId();
  const { eyebrow, title, intro, steps } = content;
  return (
    <Section spacing="l" labelledBy={headingId} className="print:py-6">
      <Container width="full">
        <div className="mx-auto grid max-w-pg-content grid-cols-1 items-start gap-8 lg:grid-cols-[300px_1fr] lg:gap-14">
          <div>
            <SectionHeading align="left" size="small" eyebrow={eyebrow} title={title} id={headingId} />
            {intro && <p className="mt-3 text-base leading-relaxed text-pg-slate">{intro}</p>}
          </div>
          <ol className="grid gap-5">
            {steps.map((step, i) => (
              <li key={step.title} className="rounded-pg-xl border border-pg-line bg-white p-6 shadow-pg-card md:p-7">
                <div className="flex items-center gap-4">
                  <span
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-pg-navy font-bold text-white"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <h3 className="text-xl leading-snug font-bold text-pg-navy">{step.title}</h3>
                </div>
                <dl className="mt-4 grid gap-4">
                  {step.tips.map((tip) => (
                    <div key={tip.label}>
                      <dt className="text-sm font-semibold text-pg-navy">{tip.label}</dt>
                      <dd className="mt-0.5 text-sm leading-relaxed text-pg-slate">{tip.text}</dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
