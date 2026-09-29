import { Download, Printer } from "lucide-react";
import {
  TERMS_EFFECTIVE_DATE,
  TERMS_INTRO,
  TERMS_SECTIONS,
  buildLegalPlainText,
} from "./legal/legalContent";
import LegalDocumentBody from "./legal/LegalDocumentBody";

function handleDownload() {
  const text = buildLegalPlainText("Terms of Use", TERMS_EFFECTIVE_DATE, "Introduction", TERMS_INTRO, TERMS_SECTIONS);
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "ParentGuidance-Terms-of-Use.txt";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function handlePrint() {
  window.print();
}

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-[#F9F4F1] print:bg-white">
      <section className="px-6 pb-14 pt-28 md:px-10 lg:px-14 print:hidden">
        <div className="mx-auto max-w-[1100px]">
          <p className="mb-3 font-['Poppins',sans-serif] text-sm font-semibold uppercase tracking-[0.14em] text-[#406064]">
            Legal
          </p>

          <h1 className="font-['Poppins',sans-serif] text-4xl font-bold text-[#1C3243] md:text-5xl">
            Terms of Use
          </h1>

          <p className="mt-4 max-w-[680px] font-['Poppins',sans-serif] text-base leading-7 text-[#435766]">
            Please read these Terms of Use carefully before accessing or using Parent Guidance's
            websites, the Online Education Platform, and related services.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-2 rounded-lg bg-[#59797D] px-5 py-3 font-['Poppins',sans-serif] text-sm font-semibold text-white transition hover:bg-[#1C3243] focus:outline-none focus:ring-2 focus:ring-[#59797D] focus:ring-offset-2"
            >
              <Download size={16} />
              Download
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 rounded-lg border border-[#90b3b6] px-5 py-3 font-['Poppins',sans-serif] text-sm font-semibold text-[#406064] transition hover:bg-[#F0F6F6] focus:outline-none focus:ring-2 focus:ring-[#59797D] focus:ring-offset-2"
            >
              <Printer size={16} />
              Print
            </button>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 pt-10 md:px-10 lg:px-14 print:p-0">
        <div className="mx-auto max-w-[1100px] rounded-2xl border border-[#dee8e9] bg-white p-7 shadow-[0_8px_24px_rgba(28,50,67,0.06)] md:p-10 print:max-w-none print:rounded-none print:border-0 print:p-0 print:shadow-none">
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
      </section>
    </main>
  );
}
