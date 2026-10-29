import { useId, useState, type ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/cn";
import { DURATION, EASE_OUT } from "@/lib/motion";

/* Accordion item (docs/system/components/accordion.md). A button with aria-expanded/aria-controls that
 * opens a region labelled by the button (W3C APG accordion). Used by the FAQ section and legal documents.
 *
 *   <AccordionItem title="How long is this program?" defaultOpen>…answer…</AccordionItem>
 */

export type AccordionItemProps = {
  title: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  /** Heading level that wraps the button, so the outline stays correct. */
  headingLevel?: 2 | 3 | 4;
  /** "card": white card with shadow and large title (FAQ). "compact": bordered card with a small title
   * (transcripts, disclosures inside a page). "document": bordered card with a large title and no accent
   * (a whole document, e.g. Consent Documents). "plain": divider-separated rows. */
  variant?: "card" | "compact" | "document" | "plain";
  /** Buttons shown next to the title, outside the toggle (e.g. Download and Print on a document). */
  actions?: ReactNode;
  /** Controlled mode: pass `open` and `onOpenChange` to let the parent decide which item is open. */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
};

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
  headingLevel = 3,
  variant = "card",
  actions,
  open: openProp,
  onOpenChange,
  className,
}: AccordionItemProps) {
  const [openState, setOpenState] = useState(defaultOpen);
  const open = openProp ?? openState;
  const toggle = () => {
    setOpenState(!open);
    onOpenChange?.(!open);
  };
  const id = useId();
  const buttonId = `${id}-button`;
  const panelId = `${id}-panel`;
  const Heading = `h${headingLevel}` as const;
  const large = variant === "card" || variant === "document";

  return (
    <div
      className={cn(
        variant === "card" && "overflow-hidden rounded-pg-md bg-white shadow-pg-card",
        variant === "compact" && "overflow-hidden rounded-pg-xl border border-pg-line bg-white shadow-pg-card",
        variant === "document" &&
          "overflow-hidden rounded-pg-xl border border-pg-line bg-white shadow-pg-card print:rounded-none print:border-0 print:shadow-none",
        variant === "plain" && "border-b border-pg-line",
        className,
      )}
    >
      <div className={cn(actions && "flex flex-wrap items-center gap-x-3")}>
        <Heading className={cn("m-0", actions && "min-w-64 flex-1")}>
          <button
            id={buttonId}
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={toggle}
            className={cn(
              "flex w-full items-center justify-between gap-4 text-left",
              large
                ? "px-5 py-5 md:px-8 md:py-6"
                : variant === "compact"
                  ? "px-5 py-4 transition-colors hover:bg-pg-cream"
                  : "py-4",
            )}
          >
            <span
              className={cn(
                "flex-1 text-pg-navy",
                large ? "text-pg-h3 font-bold" : variant === "compact" ? "text-sm font-semibold" : "text-pg-h4",
              )}
            >
              {title}
            </span>
            <motion.span
              aria-hidden="true"
              animate={{ rotate: open ? 45 : 0 }}
              transition={{ duration: DURATION.fast }}
              className={cn("relative block shrink-0 print:hidden", variant === "compact" ? "h-3.5 w-3.5" : "h-5 w-5")}
            >
              <span
                className={cn(
                  "absolute top-1/2 left-0 w-full -translate-y-1/2 rounded-full bg-pg-navy/80",
                  variant === "compact" ? "h-0.5" : "h-[3px]",
                )}
              />
              <span
                className={cn(
                  "absolute top-0 left-1/2 h-full -translate-x-1/2 rounded-full bg-pg-navy/80",
                  variant === "compact" ? "w-0.5" : "w-[3px]",
                )}
              />
            </motion.span>
          </button>
        </Heading>
        {actions && (
          <div
            className={cn(
              "flex flex-wrap gap-2 print:hidden",
              large
                ? "px-5 pb-5 md:pr-8 md:pb-0 md:pl-0"
                : variant === "compact"
                  ? "px-5 pb-4 md:pb-0"
                  : "pb-4 md:pb-0",
            )}
          >
            {actions}
          </div>
        )}
      </div>
      <motion.div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: DURATION.base, ease: EASE_OUT }}
        className="overflow-hidden"
      >
        <div
          className={cn(
            "flex flex-col gap-3 text-sm text-pg-slate",
            variant === "card"
              ? "px-5 pb-6 md:px-8"
              : variant === "document"
                ? "px-5 pb-8 md:px-8 print:px-0"
                : variant === "compact"
                  ? "border-t border-pg-line px-5 pt-4 pb-5"
                  : "pb-4",
          )}
        >
          {variant === "card" && <span className="h-[3px] w-5 rounded-full bg-pg-live" aria-hidden="true" />}
          {children}
        </div>
      </motion.div>
    </div>
  );
}
