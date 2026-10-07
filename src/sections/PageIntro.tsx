import { Section, Container } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

/* PageIntro (docs/system/sections/page-intro.md). A centered page title without media, for utility pages
 * (Contact, legal documents, consent). Always contains the page's <h1>. Use SplitHero when the page has a
 * hero photo. */

export type PageIntroContent = {
  /** Section name, 1–3 words. */
  eyebrow?: string;
  /** Up to ~50 characters. */
  title: string;
  /** One sentence, up to ~140 characters. */
  intro?: string;
};

export function PageIntro({ content }: { content: PageIntroContent }) {
  return (
    <Section belowNav spacing="none" className="pt-14 pb-14">
      <Container width="content">
        <SectionHeading
          as="h1"
          eyebrow={content.eyebrow}
          title={content.title}
          intro={content.intro && <p className="mx-auto max-w-[520px] text-base text-pg-slate">{content.intro}</p>}
        />
      </Container>
    </Section>
  );
}
