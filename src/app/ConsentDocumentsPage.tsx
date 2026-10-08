import { DocumentHeader } from "@/sections/DocumentHeader";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ChevronDown, Download, Printer } from "@/components/ui/icons";
import {
  TERMS_EFFECTIVE_DATE,
  TERMS_INTRO,
  TERMS_SECTIONS,
  PRIVACY_EFFECTIVE_DATE,
  PRIVACY_INTRO,
  PRIVACY_SECTIONS,
  buildLegalPlainText,
  type LegalSection,
} from "@/content/legal";
import LegalDocumentBody from "@/components/patterns/LegalDocumentBody";
import { BackToTopButton } from "@/components/patterns/DocumentActions";

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
      className="overflow-hidden rounded-pg-xl border border-pg-line bg-white shadow-pg-card print:rounded-none print:border-0 print:shadow-none"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-5 md:px-8 print:hidden">
        <h2 className="flex-1">
          <button
            type="button"
            onClick={onToggle}
            className="flex w-full items-center gap-3 text-left"
            aria-expanded={isOpen}
            aria-controls={`${doc.id}-panel`}
          >
            <span className="h-2 w-2 rounded-full bg-pg-teal-dark" aria-hidden="true" />
            <span className="text-pg-h3 text-pg-navy">{doc.title}</span>
            <ChevronDown
              size={18}
              aria-hidden="true"
              className={`ml-1 text-pg-teal-dark transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </button>
        </h2>

        <div className="flex gap-2">
          <Button size="s" onClick={() => downloadDocument(doc)}>
            <Download size={16} aria-hidden="true" />
            Download<span className="sr-only"> {doc.title}</span>
          </Button>

          <Button variant="secondary" size="s" onClick={() => printDocument(doc.id)}>
            <Printer size={16} aria-hidden="true" />
            Print<span className="sr-only"> {doc.title}</span>
          </Button>
        </div>
      </div>

      <p className="hidden px-6 pt-6 text-pg-h2 text-pg-navy print:block print:px-0" aria-hidden="true">
        {doc.title}
      </p>

      <div id={`${doc.id}-panel`} className={`${isOpen ? "block" : "hidden"} px-6 pb-8 md:px-8 print:block print:px-0`}>
        <LegalDocumentBody
          headingLevel="h3"
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
    <div className="min-h-screen bg-pg-cream print:bg-white">
      <DocumentHeader
        content={{
          eyebrow: "Legal",
          title: "Consent Documents",
          intro:
            "Review, download or print the Terms of Use and Privacy Policy that apply to your access to and use of Parent Guidance's Services.",
        }}
        titleId="consent-documents-title"
      />

      <section className="px-6 pb-20 md:px-10 lg:px-14 print:p-0">
        <div className="mx-auto flex max-w-pg-content flex-col gap-6 print:gap-0">
          {DOCUMENTS.map((doc) => (
            <AccordionItem
              key={doc.id}
              doc={doc}
              isOpen={openId === doc.id}
              onToggle={() => setOpenId((current) => (current === doc.id ? "" : doc.id))}
            />
          ))}
        </div>
        <BackToTopButton focusId="consent-documents-title" />
      </section>
    </div>
  );
}
