import {
  TERMS_EFFECTIVE_DATE,
  TERMS_INTRO,
  TERMS_SECTIONS,
  buildLegalPlainText,
} from "./legal/legalContent";
import LegalDocumentBody from "./legal/LegalDocumentBody";
import { LegalActions, BackToTopButton, downloadTextFile } from "./legal/LegalActions";

function handleDownload() {
  const text = buildLegalPlainText("Terms of Use", TERMS_EFFECTIVE_DATE, "Introduction", TERMS_INTRO, TERMS_SECTIONS);
  downloadTextFile("ParentGuidance-Terms-of-Use.txt", text);
}

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-pg-cream print:bg-white">
      <section className="px-6 pb-14 pt-28 md:px-10 lg:px-14 print:hidden">
        <div className="mx-auto max-w-pg-content">
          <p className="mb-3 text-sm font-semibold uppercase tracking-pg-eyebrow text-pg-teal-dark">
            Legal
          </p>

          <h1 id="terms-of-use-title" tabIndex={-1} className="text-pg-h1 focus:outline-none text-pg-navy">
            Terms of Use
          </h1>

          <p className="mt-4 max-w-pg-reading text-base leading-7 text-pg-slate">
            Please read these Terms of Use carefully before accessing or using Parent Guidance's
            websites, the Online Education Platform, and related services.
          </p>

          <LegalActions onDownload={handleDownload} />
        </div>
      </section>

      <section className="px-6 pb-20 pt-10 md:px-10 lg:px-14 print:p-0">
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
