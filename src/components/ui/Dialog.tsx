import { useEffect, useId, useRef, type ReactNode, type RefObject } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/cn";
import { X } from "./icons";
import { DURATION, EASE_OUT } from "@/lib/motion";

/* Modal dialog (docs/system/components/dialog.md), following the W3C APG dialog pattern (audit H01):
 * named by its title, focus moves inside on open, Tab stays inside, Escape closes, focus returns to the
 * trigger on close, the page behind is inert and does not scroll.
 *
 *   <Dialog open={open} onClose={() => setOpen(false)} title="Ask a Therapist" description="…" icon={<MessageCircle />}>
 *     …content…
 *   </Dialog>
 *
 * Popovers that position themselves (EventModal) reuse the same behavior through useModal().
 */

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/** Focus management, Tab trap, Escape, scroll lock and background inert for any modal surface. */
export function useModal(
  ref: RefObject<HTMLElement | null>,
  onClose: () => void,
  initialFocus?: RefObject<HTMLElement | null>,
) {
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    (initialFocus?.current ?? ref.current)?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeRef.current();
        return;
      }
      if (e.key !== "Tab" || !ref.current) return;
      const items = Array.from(ref.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (!items.length) {
        e.preventDefault();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === ref.current)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);

    const root = document.getElementById("root");
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    root?.setAttribute("inert", "");

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      root?.removeAttribute("inert");
      previous?.focus?.();
    };
  }, [ref, initialFocus]);
}

export type DialogProps = {
  open: boolean;
  onClose: () => void;
  /** Visible title; also the dialog's accessible name. */
  title: ReactNode;
  /** One line under the title (e.g. response time). */
  description?: ReactNode;
  /** Icon shown in the header tile. */
  icon?: ReactNode;
  /** Header color: navy (default) or teal. */
  tone?: "navy" | "teal";
  size?: "md" | "lg";
  children: ReactNode;
  /** Label of the close button. */
  closeLabel?: string;
};

function Panel({
  onClose,
  title,
  description,
  icon,
  tone = "navy",
  size = "md",
  children,
  closeLabel = "Close",
}: Omit<DialogProps, "open">) {
  const ref = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const descId = useId();
  useModal(ref, onClose);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6">
      <motion.div
        className="absolute inset-0 bg-pg-navy/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: DURATION.fast }}
      />
      <motion.div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={description ? descId : undefined}
        tabIndex={-1}
        className={cn(
          "relative flex max-h-full w-full flex-col overflow-hidden rounded-pg-xl bg-white shadow-pg-overlay outline-none",
          size === "lg" ? "max-w-2xl" : "max-w-lg",
        )}
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: DURATION.base, ease: EASE_OUT }}
      >
        <div
          className={cn(
            "flex shrink-0 items-center gap-3 px-6 py-5 md:px-8",
            tone === "teal" ? "bg-pg-teal-dark" : "bg-pg-navy",
          )}
        >
          {icon && (
            <span
              className="grid h-9 w-9 shrink-0 place-items-center rounded-pg-md bg-white/10 text-white [&_svg]:size-[18px]"
              aria-hidden="true"
            >
              {icon}
            </span>
          )}
          <div className="min-w-0">
            <h2 id={titleId} className="text-pg-h4 text-white">
              {title}
            </h2>
            {description && (
              <p id={descId} className="text-xs text-white/80">
                {description}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={closeLabel}
            className="-mr-2 ml-auto grid h-11 w-11 shrink-0 place-items-center rounded-pg-md text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>
        <div className="overflow-y-auto">{children}</div>
      </motion.div>
    </div>
  );
}

export function Dialog({ open, ...props }: DialogProps) {
  return createPortal(<AnimatePresence>{open && <Panel {...props} />}</AnimatePresence>, document.body);
}
