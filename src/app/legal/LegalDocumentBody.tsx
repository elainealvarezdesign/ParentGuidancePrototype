import { ButtonAnchor } from "@/components/ui/Button";
import { isLegalSubItem, type LegalSection } from "./legalContent";

type Props = {
  effectiveDate: string;
  introHeading: string;
  intro: string[];
  sections: LegalSection[];
  contactHeading: string;
  contactBody: string;
  contactEmail: string;
};

export default function LegalDocumentBody({
  effectiveDate,
  introHeading,
  intro,
  sections,
  contactHeading,
  contactBody,
  contactEmail,
}: Props) {
  return (
    <>
      <div className="border-b border-pg-line pb-8 print:border-0">
        <p className="mb-6 text-sm font-semibold text-pg-teal-dark">Effective date: {effectiveDate}</p>

        <h2 className="text-2xl font-bold text-pg-navy">{introHeading}</h2>

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
          <h2 className="text-2xl font-bold text-pg-navy">{section.heading}</h2>

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
        <h2 className="text-2xl font-bold text-pg-navy">{contactHeading}</h2>

        <p className="mt-4 text-base leading-7 text-pg-slate">{contactBody}</p>

        <ButtonAnchor href={`mailto:${contactEmail}`} className="mt-4 print:hidden">
          {contactEmail}
        </ButtonAnchor>
      </div>
    </>
  );
}
