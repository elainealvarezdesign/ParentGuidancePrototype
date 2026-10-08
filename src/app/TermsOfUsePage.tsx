import { DocumentHeader } from "@/sections/DocumentHeader";
import { TERMS_EFFECTIVE_DATE, TERMS_INTRO, TERMS_SECTIONS, buildLegalPlainText } from "@/content/legal";
import LegalDocumentBody from "@/components/patterns/LegalDocumentBody";
import { LegalActions, BackToTopButton, downloadTextFile } from "@/components/patterns/DocumentActions";

function handleDownload() {
  const text = buildLegalPlainText("Terms of Use", TERMS_EFFECTIVE_DATE, "Introduction", TERMS_INTRO, TERMS_SECTIONS);
  downloadTextFile("ParentGuidance-Terms-of-Use.txt", text);
}

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-pg-cream print:bg-white">
      <DocumentHeader
        content={{
          eyebrow: "Legal",
          title: "Terms of Use",
          intro:
            "Please read these Terms of Use carefully before accessing or using Parent Guidance's websites, the Online Education Platform, and related services.",
        }}
        titleId="terms-of-use-title"
      >
        <LegalActions onDownload={handleDownload} />
      </DocumentHeader>

      <section className="px-6 pt-10 pb-20 md:px-10 lg:px-14 print:p-0">
        <div className="mx-auto max-w-pg-content rounded-pg-xl border border-pg-line bg-white p-7 shadow-pg-card md:p-10 print:max-w-none print:rounded-none print:border-0 print:p-0 print:shadow-none">
          <LegalDocumentBody
            effectiveDate={TERMS_EFFECTIVE_DATE}
            introHeading="Introduction"
            intro={TERMS_INTRO}
            sections={TERMS_SECTIONS}
            contactHeading="Questions about these Terms?"
            contactBody="If you have any questions about this Terms of Use, you can contact us by email."
            contactEmail="hello@parentguidance.org"
          />
        </div>
        <BackToTopButton focusId="terms-of-use-title" />
      </section>
    </div>
  );
}
