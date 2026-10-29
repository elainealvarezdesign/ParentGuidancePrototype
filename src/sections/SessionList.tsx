import { useId } from "react";
import { Section, Container } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SessionCard, type SessionCardContent } from "@/components/cards/SessionCard";

/* SessionList (docs/system/sections/session-list.md). Eyebrow + title, then live sessions as SessionCards in a
 * three-column grid (one column below lg). Cream band. Hidden when printing. */

export type SessionListContent = {
  eyebrow?: string;
  title: string;
  sessions: SessionCardContent[];
};

export function SessionList({ content }: { content: SessionListContent }) {
  const headingId = useId();
  const { eyebrow, title, sessions } = content;
  return (
    <Section spacing="l" labelledBy={headingId} className="print:hidden">
      <Container width="full">
        <div className="mx-auto max-w-pg-content">
          <SectionHeading align="left" size="small" eyebrow={eyebrow} title={title} id={headingId} />
          <ul className="mt-7 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {sessions.map((s) => (
              <li key={s.title + s.time}>
                <SessionCard session={s} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
