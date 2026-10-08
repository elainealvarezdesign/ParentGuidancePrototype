import type { ReactNode } from "react";
import { Section, Container } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/SectionHeading";

/* DocumentHeader (docs/system/sections/document-header.md). Left-aligned page title for long documents
 * (legal pages): eyebrow, <h1>, one sentence and optional actions (Download / Print). The <h1> has an id
 * and tabIndex -1 so "Back to top" can move focus to it. Hidden when printing unless `printable`. */

export type DocumentHeaderContent = { eyebrow: string; title: string; intro: string };

export function DocumentHeader({
  content,
  titleId,
  children,
  printable,
}: {
  content: DocumentHeaderContent;
  titleId: string;
  children?: ReactNode;
  printable?: boolean;
}) {
  return (
    <Section
      belowNav
      spacing="none"
      className={printable ? "pt-14 pb-14 print:mt-0 print:p-0 print:pb-6" : "pt-14 pb-14 print:hidden"}
    >
      <Container width="content" className="print:max-w-none print:px-0">
        <Eyebrow size="large" tone="teal" className="mb-3 text-sm">
          {content.eyebrow}
        </Eyebrow>
        <h1 id={titleId} tabIndex={-1} className="text-pg-h1 text-pg-navy focus:outline-none">
          {content.title}
        </h1>
        <p className="mt-4 max-w-pg-reading text-base text-pg-slate">{content.intro}</p>
        {children}
      </Container>
    </Section>
  );
}
