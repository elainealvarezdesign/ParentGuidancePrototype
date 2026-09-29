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
      <div className="border-b border-[#dee8e9] pb-8 print:border-0">
        <p className="mb-6 font-['Poppins',sans-serif] text-sm font-semibold text-[#59797D]">
          Effective date: {effectiveDate}
        </p>

        <h2 className="font-['Poppins',sans-serif] text-2xl font-bold text-[#1C3243]">
          {introHeading}
        </h2>

        <div className="mt-4 space-y-4 font-['Poppins',sans-serif] text-base leading-7 text-[#435766]">
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
              ? "border-b border-[#dee8e9] py-8 print:border-0 print:py-6"
              : "pt-8 print:pt-6"
          }
        >
          <h2 className="font-['Poppins',sans-serif] text-2xl font-bold text-[#1C3243]">
            {section.heading}
          </h2>

          <div className="mt-4 space-y-4 font-['Poppins',sans-serif] text-base leading-7 text-[#435766]">
            {section.paragraphs.map((p, i) => (
              <p key={i} className={isLegalSubItem(p) ? "pl-5" : ""}>
                {p}
              </p>
            ))}
          </div>
        </div>
      ))}

      <div className="border-t border-[#dee8e9] pt-8 print:border-0 print:pt-6">
        <h2 className="font-['Poppins',sans-serif] text-2xl font-bold text-[#1C3243]">
          {contactHeading}
        </h2>

        <p className="mt-4 font-['Poppins',sans-serif] text-base leading-7 text-[#435766]">
          {contactBody}
        </p>

        <a
          href={`mailto:${contactEmail}`}
          className="mt-4 inline-flex rounded-lg bg-[#59797D] px-5 py-3 font-['Poppins',sans-serif] font-semibold text-white transition hover:bg-[#1C3243] focus:outline-none focus:ring-2 focus:ring-[#59797D] focus:ring-offset-2 print:hidden"
        >
          {contactEmail}
        </a>
      </div>
    </>
  );
}
