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
      <button
        type="button"
        onClick={onDownload}
        className="inline-flex items-center gap-2 rounded-lg bg-[#59797D] px-5 py-3 font-['Poppins',sans-serif] text-sm font-semibold text-white transition hover:bg-[#1C3243] focus:outline-none focus:ring-2 focus:ring-[#59797D] focus:ring-offset-2"
      >
        <Download size={16} aria-hidden="true" />
        Download
      </button>

      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex items-center gap-2 rounded-lg border border-[#90b3b6] px-5 py-3 font-['Poppins',sans-serif] text-sm font-semibold text-[#406064] transition hover:bg-[#F0F6F6] focus:outline-none focus:ring-2 focus:ring-[#59797D] focus:ring-offset-2"
      >
        <Printer size={16} aria-hidden="true" />
        Print
      </button>
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
      <button
        type="button"
        onClick={handleClick}
        className="inline-flex items-center gap-2 rounded-lg border border-[#90b3b6] px-5 py-3 font-['Poppins',sans-serif] text-sm font-semibold text-[#406064] transition hover:bg-[#F0F6F6]"
      >
        <ArrowUp size={16} aria-hidden="true" />
        Back to top
      </button>
    </div>
  );
}
