import { useId, useState, type ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/cn";

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
  /** "card": white card with shadow (FAQ). "plain": divider-separated rows. */
  variant?: "card" | "plain";
  className?: string;
};

export function AccordionItem({ title, children, defaultOpen = false, headingLevel = 3, variant = "card", className }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  const buttonId = `${id}-button`;
  const panelId = `${id}-panel`;
  const Heading = `h${headingLevel}` as const;

  return (
    <div className={cn(variant === "card" ? "overflow-hidden rounded-pg-md bg-white shadow-pg-card" : "border-b border-pg-line", className)}>
      <Heading className="m-0">
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
          className={cn(
            "flex w-full items-center justify-between gap-4 text-left",
            variant === "card" ? "px-5 py-5 md:px-8 md:py-6" : "py-4",
          )}
        >
          <span className={cn("flex-1 text-pg-navy", variant === "card" ? "text-pg-h3 font-bold" : "text-pg-h4")}>{title}</span>
          <motion.span
            aria-hidden="true"
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.22 }}
            className="relative block h-5 w-5 shrink-0"
          >
            <span className="absolute top-1/2 left-0 h-[3px] w-full -translate-y-1/2 rounded-full bg-pg-navy/80" />
            <span className="absolute top-0 left-1/2 h-full w-[3px] -translate-x-1/2 rounded-full bg-pg-navy/80" />
          </motion.span>
        </button>
      </Heading>
      <motion.div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="overflow-hidden"
      >
        <div className={cn("flex flex-col gap-3 text-sm text-pg-slate", variant === "card" ? "px-5 pb-6 md:px-8" : "pb-4")}>
          {variant === "card" && <span className="h-[3px] w-5 rounded-full bg-pg-live" aria-hidden="true" />}
          {children}
        </div>
      </motion.div>
    </div>
  );
}
