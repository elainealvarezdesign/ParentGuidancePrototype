import { useState } from "react";
import { ChevronDown, Download, Printer } from "lucide-react";
import {
  TERMS_EFFECTIVE_DATE,
  TERMS_INTRO,
  TERMS_SECTIONS,
  PRIVACY_EFFECTIVE_DATE,
  PRIVACY_INTRO,
  PRIVACY_SECTIONS,
  buildLegalPlainText,
  type LegalSection,
} from "./legal/legalContent";
import LegalDocumentBody from "./legal/LegalDocumentBody";

type Document = {
  id: string;
  title: string;
  fileName: string;
  effectiveDate: string;
  introHeading: string;
  intro: string[];
  sections: LegalSection[];
  contactHeading: string;
  contactBody: string;
  contactEmail: string;
};

const DOCUMENTS: Document[] = [
  {
    id: "terms-of-use",
    title: "Terms of Use",
    fileName: "ParentGuidance-Terms-of-Use.txt",
    effectiveDate: TERMS_EFFECTIVE_DATE,
    introHeading: "Introduction",
    intro: TERMS_INTRO,
    sections: TERMS_SECTIONS,
    contactHeading: "Questions about these Terms?",
    contactBody: "If you have any questions about this Terms of Use, you can contact us by email.",
    contactEmail: "hello@parentguidance.org",
  },
  {
    id: "privacy-policy",
    title: "Privacy Policy",
    fileName: "ParentGuidance-Privacy-Policy.txt",
    effectiveDate: PRIVACY_EFFECTIVE_DATE,
    introHeading: "Introduction",
    intro: PRIVACY_INTRO,
    sections: PRIVACY_SECTIONS,
    contactHeading: "Questions about this Policy?",
    contactBody: "If you have any questions about this Privacy Policy, you can contact us by email.",
    contactEmail: "hello@parentguidance.org",
  },
];

function downloadDocument(doc: Document) {
  const text = buildLegalPlainText(doc.title, doc.effectiveDate, doc.introHeading, doc.intro, doc.sections);
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = doc.fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function printDocument(id: string) {
  document.querySelectorAll<HTMLElement>("[data-consent-doc]").forEach((el) => {
    el.classList.toggle("print:hidden", el.dataset.consentDoc !== id);
  });
  window.print();
}

function AccordionItem({ doc, isOpen, onToggle }: { doc: Document; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      data-consent-doc={doc.id}
      className="overflow-hidden rounded-2xl border border-[#dee8e9] bg-white shadow-[0_8px_24px_rgba(28,50,67,0.06)] print:rounded-none print:border-0 print:shadow-none"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-5 md:px-8 print:hidden">
        <button
          type="button"
          onClick={onToggle}
          className="flex flex-1 items-center gap-3 text-left"
          aria-expanded={isOpen}
        >
          <span className="h-2 w-2 rounded-full bg-[#59797D]" />
          <span className="font-['Poppins',sans-serif] text-xl font-bold text-[#1C3243]">{doc.title}</span>
          <ChevronDown
            size={18}
            className={`ml-1 text-[#59797D] transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => downloadDocument(doc)}
            className="inline-flex items-center gap-2 rounded-lg bg-[#59797D] px-4 py-2 font-['Poppins',sans-serif] text-sm font-semibold text-white transition hover:bg-[#1C3243] focus:outline-none focus:ring-2 focus:ring-[#59797D] focus:ring-offset-2"
          >
            <Download size={15} />
            Download
          </button>

          <button
            type="button"
            onClick={() => printDocument(doc.id)}
            className="inline-flex items-center gap-2 rounded-lg border border-[#90b3b6] px-4 py-2 font-['Poppins',sans-serif] text-sm font-semibold text-[#59797D] transition hover:bg-[#F0F6F6] focus:outline-none focus:ring-2 focus:ring-[#59797D] focus:ring-offset-2"
          >
            <Printer size={15} />
            Print
          </button>
        </div>
      </div>

      <h2 className="hidden px-6 pt-6 font-['Poppins',sans-serif] text-2xl font-bold text-[#1C3243] print:block print:px-0">
        {doc.title}
      </h2>

      <div className={`${isOpen ? "block" : "hidden"} px-6 pb-8 md:px-8 print:block print:px-0`}>
        <LegalDocumentBody
          effectiveDate={doc.effectiveDate}
          introHeading={doc.introHeading}
          intro={doc.intro}
          sections={doc.sections}
          contactHeading={doc.contactHeading}
          contactBody={doc.contactBody}
          contactEmail={doc.contactEmail}
        />
      </div>
    </div>
  );
}

export default function ConsentDocumentsPage() {
  const [openId, setOpenId] = useState<string>(DOCUMENTS[0].id);

  return (
    <main className="min-h-screen bg-[#F9F4F1] print:bg-white">
      <section className="px-6 pb-14 pt-28 md:px-10 lg:px-14 print:hidden">
        <div className="mx-auto max-w-[1100px]">
          <p className="mb-3 font-['Poppins',sans-serif] text-sm font-semibold uppercase tracking-[0.14em] text-[#406064]">
            Legal
          </p>

          <h1 className="font-['Poppins',sans-serif] text-4xl font-bold text-[#1C3243] md:text-5xl">
            Consent Documents
          </h1>

          <p className="mt-4 max-w-[680px] font-['Poppins',sans-serif] text-base leading-7 text-[#435766]">
            Review, download or print the Terms of Use and Privacy Policy that apply to your
            access to and use of Parent Guidance's Services.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10 lg:px-14 print:p-0">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-6 print:gap-0">
          {DOCUMENTS.map((doc) => (
            <AccordionItem
              key={doc.id}
              doc={doc}
              isOpen={openId === doc.id}
              onToggle={() => setOpenId((current) => (current === doc.id ? "" : doc.id))}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
