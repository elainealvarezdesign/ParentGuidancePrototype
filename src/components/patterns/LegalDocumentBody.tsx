import { ButtonAnchor } from "@/components/ui/Button";
import { isLegalSubItem, type LegalSection } from "@/content/legal";

type Props = {
  effectiveDate: string;
  introHeading: string;
  intro: string[];
  sections: LegalSection[];
  contactHeading: string;
  contactBody: string;
  contactEmail: string;
  /** "h3" when the document sits under its own h2 (Consent Documents). */
  headingLevel?: "h2" | "h3";
};

/* LegalDocumentBody (docs/system/components/legal-document.md). Effective date, intro and numbered sections
 * of a legal text from src/content/legal.ts, plus the contact block. Prints cleanly. */

export default function LegalDocumentBody({
  effectiveDate,
  introHeading,
  intro,
  sections,
  contactHeading,
  contactBody,
  contactEmail,
  headingLevel: H = "h2",
}: Props) {
  return (
    <>
      <div className="border-b border-pg-line pb-8 print:border-0">
        <p className="mb-6 text-sm font-semibold text-pg-teal-dark">Effective date: {effectiveDate}</p>

        <H className="text-pg-h2 text-pg-navy">{introHeading}</H>

        <div className="mt-4 space-y-4 text-base leading-7 text-pg-slate">
          {intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      {sections.map((section, sectionIndex) => (
        <div
          key={section.heading}
          className={
            sectionIndex !== sections.length - 1
              ? "border-b border-pg-line py-8 print:border-0 print:py-6"
              : "pt-8 print:pt-6"
          }
        >
          <H className="text-pg-h2 text-pg-navy">{section.heading}</H>

          <div className="mt-4 space-y-4 text-base leading-7 text-pg-slate">
            {section.paragraphs.map((p, i) => (
              <p key={i} className={isLegalSubItem(p) ? "pl-5" : ""}>
                {p}
              </p>
            ))}
          </div>
        </div>
      ))}

      <div className="border-t border-pg-line pt-8 print:border-0 print:pt-6">
        <H className="text-pg-h2 text-pg-navy">{contactHeading}</H>

        <p className="mt-4 text-base leading-7 text-pg-slate">{contactBody}</p>

        <ButtonAnchor href={`mailto:${contactEmail}`} className="mt-4 print:hidden">
          {contactEmail}
        </ButtonAnchor>
      </div>
    </>
  );
}
