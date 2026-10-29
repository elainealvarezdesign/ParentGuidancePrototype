import { useId, type ReactNode } from "react";
import { Link } from "react-router";
import type { Cta } from "@/content/types";
import { Section, Container } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaButton } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/icons";

/* RelatedResources (docs/system/sections/related-resources.md). Eyebrow + title, then up to four link cards
 * (image, type pill, title, one sentence, "View" line; the whole card is the link) in a 4 → 2 → 1 grid, and an
 * optional navy banner with one Inverse action. White band. Hidden when printing. */

export type RelatedResourcesContent = {
  eyebrow?: string;
  title: string;
  /** Text of the link line at the bottom of each card ("View topic"). */
  linkLabel: string;
  resources: {
    /** Content type pill: "Article", "Lesson"… */
    type: string;
    title: string;
    /** One sentence. */
    description: string;
    /** 600px wide, landscape. */
    image: string;
    /** In-app route. */
    to: string;
  }[];
  banner?: { title: string; body: string; cta: Cta };
};

export function RelatedResources({ content, children }: { content: RelatedResourcesContent; children?: ReactNode }) {
  const headingId = useId();
  const { eyebrow, title, linkLabel, resources, banner } = content;
  return (
    <Section tone="white" spacing="l" labelledBy={headingId} className="print:hidden">
      <Container width="full">
        <div className="mx-auto max-w-pg-content">
          <SectionHeading align="left" size="small" eyebrow={eyebrow} title={title} id={headingId} />
          <ul className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {resources.map((r) => (
              <li key={r.title}>
                <Link
                  to={r.to}
                  className="group flex h-full flex-col overflow-hidden rounded-pg-xl border border-pg-line bg-white no-underline shadow-pg-card transition-shadow hover:shadow-pg-card-hover"
                >
                  <img src={r.image} alt="" className="h-36 w-full object-cover" />
                  <div className="flex flex-1 flex-col gap-2 p-4">
                    <span className="self-start rounded-full bg-pg-tint px-2 py-0.5 text-xs font-medium text-pg-teal-dark">
                      {r.type}
                    </span>
                    <h3 className="text-base leading-snug font-bold text-pg-navy">{r.title}</h3>
                    <p className="flex-1 text-xs leading-relaxed text-pg-slate">{r.description}</p>
                    <span className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-pg-teal-dark group-hover:underline">
                      {linkLabel} <ArrowRight size={14} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          {banner && (
            <div className="mt-14 flex flex-col items-start gap-6 rounded-pg-xl bg-pg-navy px-6 py-7 md:flex-row md:items-center md:justify-between md:rounded-pg-2xl md:px-12 md:py-10">
              <div>
                <h2 className="text-xl font-medium text-white md:text-2xl">{banner.title}</h2>
                <p className="mt-2 text-sm text-pg-sage">{banner.body}</p>
              </div>
              <CtaButton
                cta={banner.cta}
                variant="inverse"
                className="shrink-0"
                trailing={<ArrowRight size={16} aria-hidden="true" />}
              />
            </div>
          )}

          {children}
        </div>
      </Container>
    </Section>
  );
}
