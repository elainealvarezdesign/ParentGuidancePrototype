import { Button } from "../components/Button";
import { ArrowUp, Download, Printer } from "lucide-react";
import { scrollBehavior } from "../utils/motion";

/** Saves a plain-text file in the browser. */
export function downloadTextFile(fileName: string, text: string) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/** Download + Print buttons shown under the title of legal pages. */
export function LegalActions({ onDownload }: { onDownload: () => void }) {
  return (
    <div className="mt-7 flex flex-wrap gap-3 print:hidden">
      <Button onClick={onDownload}>
        <Download size={16} aria-hidden="true" />
        Download
      </Button>

      <Button variant="secondary" onClick={() => window.print()}>
        <Printer size={16} aria-hidden="true" />
        Print
      </Button>
    </div>
  );
}

/**
 * Returns to the top of the page and moves keyboard focus to the element with `focusId`
 * (usually the page <h1>, which needs tabIndex={-1}).
 */
export function BackToTopButton({ focusId }: { focusId: string }) {
  function handleClick() {
    window.scrollTo({ top: 0, behavior: scrollBehavior() });
    document.getElementById(focusId)?.focus({ preventScroll: true });
  }

  return (
    <div className="mt-10 flex justify-center print:hidden">
      <Button variant="secondary" onClick={handleClick}>
        <ArrowUp size={16} aria-hidden="true" />
        Back to top
      </Button>
    </div>
  );
}
