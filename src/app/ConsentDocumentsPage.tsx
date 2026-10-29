import { useState } from "react";
import { DocumentHeader } from "@/sections/DocumentHeader";
import { AccordionItem } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Download, Printer } from "@/components/ui/icons";
import { buildLegalPlainText, consentPage, type ConsentDocument } from "@/content/legal";
import LegalDocumentBody from "@/components/patterns/LegalDocumentBody";
import { BackToTopButton, downloadTextFile } from "@/components/patterns/DocumentActions";
import { Section, Container } from "@/components/layout/Section";
import { DURATION } from "@/lib/motion";

/* Consent Documents ("/consent-documents"). Recipe: docs/system/pages/legal.md.
 * DocumentHeader → one AccordionItem per document, each with Download and Print. Copy: src/content/legal.ts. */

function downloadDocument(doc: ConsentDocument) {
  downloadTextFile(
    doc.fileName,
    buildLegalPlainText(doc.title, doc.effectiveDate, doc.introHeading, doc.intro, doc.sections),
  );
}

export default function ConsentDocumentsPage() {
  const { header, documents } = consentPage;
  const [openId, setOpenId] = useState<string>(documents[0].id);

  // Print only this document: open it, hide the others in print, and wait for the panel to finish opening.
  function printDocument(id: string) {
    setOpenId(id);
    document.querySelectorAll<HTMLElement>("[data-consent-doc]").forEach((el) => {
      el.classList.toggle("print:hidden", el.dataset.consentDoc !== id);
    });
    window.setTimeout(() => window.print(), DURATION.base * 1000 + 50);
  }

  return (
    <div className="min-h-screen bg-pg-cream print:bg-white">
      <DocumentHeader content={header} titleId="consent-documents-title" />

      <Section spacing="none" className="pb-20 print:p-0">
        <Container width="content" className="flex flex-col gap-6 print:gap-0 print:p-0">
          {documents.map((doc) => (
            <div key={doc.id} data-consent-doc={doc.id}>
              <AccordionItem
                title={doc.title}
                headingLevel={2}
                variant="document"
                open={openId === doc.id}
                onOpenChange={(open) => setOpenId(open ? doc.id : "")}
                actions={
                  <>
                    <Button size="s" onClick={() => downloadDocument(doc)}>
                      <Download size={16} aria-hidden="true" />
                      Download<span className="sr-only"> {doc.title}</span>
                    </Button>
                    <Button variant="secondary" size="s" onClick={() => printDocument(doc.id)}>
                      <Printer size={16} aria-hidden="true" />
                      Print<span className="sr-only"> {doc.title}</span>
                    </Button>
                  </>
                }
              >
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
              </AccordionItem>
            </div>
          ))}
        </Container>
        <BackToTopButton focusId="consent-documents-title" />
      </Section>
    </div>
  );
}
